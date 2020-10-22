export interface IApiFetchOptions {
  auth?: {
    strategy: "jwt";
    jwt?: string;
  };
}
