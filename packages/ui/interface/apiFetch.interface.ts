
export interface IApiFetchOptions {
    auth?: {
      strategy: "jwt";
      jwt?: string;
    };
    audience?: string;
    scope?: string;
  }