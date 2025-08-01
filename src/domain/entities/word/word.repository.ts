export class User {
  constructor(
    public readonly id: number,
    public username: string,
    public email: string,
  ) {}

  changeEmail(newEmail: string) {
    this.email = newEmail;
  }
}
