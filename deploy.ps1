## --------------------------------------------------------------
##  ⚡️ Giovanni‑Portfolio – Wrangler Deploy Helper (PowerShell)
## --------------------------------------------------------------

# 0️⃣  Make sure we are in the project folder
Set-Location "C:\Users\GiovanniGNF\Downloads\giovanni-portfolio"

# --------------------------------------------------------------
# 1️⃣  Insert your real D1 DB ID
# --------------------------------------------------------------
# Replace the placeholder with the actual database ID you received from:
#   npx wrangler d1 create giovanni-db
$D1_DATABASE_ID = "a4fdcb7f-b470-470e-aa6e-c33206477f13"   # <-- replace once
(Get-Content .\wrangler.jsonc) `
    -replace '"REPLACE_WITH_D1_DATABASE_ID"', "`"$D1_DATABASE_ID`"" |
    Set-Content .\wrangler.jsonc -Encoding UTF8
Write-Host "✅  wrangler.jsonc updated"

# --------------------------------------------------------------
# 2️⃣  Generate (or pick) an admin token
# --------------------------------------------------------------
# A strong random token – you can also hard‑code a custom value.
$ADMIN_TOKEN = [guid]::NewGuid().ToString('N')
Write-Host "`n🔑  Generated ADMIN_TOKEN:`n$ADMIN_TOKEN`n"

# --------------------------------------------------------------
# 3️⃣  Store the token as a Cloudflare secret
# --------------------------------------------------------------
$ADMIN_TOKEN | npx wrangler secret put ADMIN_TOKEN
if ($LASTEXITCODE -ne 0) {
    Write-Error "❌  Failed to store ADMIN_TOKEN secret"
    return
}
Write-Host "✅  ADMIN_TOKEN saved as secret"

# --------------------------------------------------------------
# 4️⃣  Run D1 migrations (creates tables)
# --------------------------------------------------------------
# The --yes flag skips the interactive confirmation.
 npx wrangler d1 migrations apply giovanni-db --yes
if ($LASTEXITCODE -ne 0) {
    Write-Error "❌  Migration failed"
    return
}
Write-Host "✅  Migrations applied"

# --------------------------------------------------------------
# 5️⃣  Install / update node_modules (ensure tsc is present)
# --------------------------------------------------------------
npm ci   # fast, reproducible install
if ($LASTEXITCODE -ne 0) {
    Write-Error "❌  npm install failed"
    return
}
Write-Host "✅  Dependencies installed"

# --------------------------------------------------------------
# 6️⃣  Build the Vite frontend (now uses npx tsc)
# --------------------------------------------------------------
npm run build --silent
if ($LASTEXITCODE -ne 0) {
    Write-Error "❌  Vite build failed"
    return
}
Write-Host "✅  Frontend built"

# --------------------------------------------------------------
# 7️⃣  Deploy Worker + static assets
# --------------------------------------------------------------
npx wrangler deploy
if ($LASTEXITCODE -ne 0) {
    Write-Error "❌  wrangler deploy failed"
    return
}
Write-Host "✅  Deploy succeeded"

# --------------------------------------------------------------
# 8️⃣  Quick sanity‑check of admin route
# --------------------------------------------------------------
$workerUrl = (npx wrangler url).Trim()
Write-Host "`n🚀  Worker reachable at: $workerUrl"

try {
    $response = Invoke-RestMethod -Method Get `
        -Headers @{ Authorization = "Bearer $ADMIN_TOKEN" } `
        -Uri "$workerUrl/api/admin/me"
    Write-Host "`n✅  Admin endpoint response:" -ForegroundColor Green
    $response | ConvertTo-Json -Depth 3
} catch {
    Write-Warning "⚠️  Admin test failed – double‑check the token and route."
}

# --------------------------------------------------------------
# Keep the console open so you can read the output
# --------------------------------------------------------------
Read-Host -Prompt "✅  All done – press ENTER to close"
