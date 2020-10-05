/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="typescript-config-permissive" />
/// <reference types="react-monaco-editor" />

declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_DEPLOYMENT_URL: string;
  }
}
