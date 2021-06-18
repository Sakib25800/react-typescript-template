export interface IUser {
  firstName: string;
  lastName: string;
}

export interface IGuest {
  firstName?: string;
  lastName?: string;
  loggedIn: string;
}
