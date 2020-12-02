export type AuthCommand = "login" | "logout" | "reload";

export interface IAuthUser {
  userUuid: string;
}

export interface IAuthState {
  user: IAuthUser | null;
  error: Error | null;
  jwt: string | null;
  command?: AuthCommand;
  commandTrigger: number;
  returnTo?: string | null;
}
