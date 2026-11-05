export interface Bindings {
  ASSETS?: Fetcher;
  DB?: D1Database;
  SITE_NAME?: string;
  ADMIN_TOKEN?: string;
  DEV_BYPASS_ACCESS?: string;
  [key: string]: unknown;
}

export interface Variables {
  adminEmail: string;
}
