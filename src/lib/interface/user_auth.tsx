export interface AuthUser {
  readonly data: Data;
}

export interface Data {
  readonly id: number;
  readonly username: string;
  readonly email: string;
  readonly gender: string;
  readonly profile_img: string;
  readonly role_id: number;
  readonly token: string;
}
