/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="typescript-config-permissive" />

declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_DEPLOYMENT_URL: string;
  }
}
