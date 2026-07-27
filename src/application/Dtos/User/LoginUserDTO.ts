export interface LoginUserDTO {
  email: string;
  password?: string;
  provider?: "GOOGLE" | "LOCAL";
}
