declare namespace NodeJS {
  interface ProcessEnv {
    DB_DATABASE: string;
    DB_HOST: string;
    DB_PORT: string | number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
  }
}
