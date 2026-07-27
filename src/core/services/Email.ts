export class Email {
  private constructor(public readonly value: string) {}

  static create(value: string): Email {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      throw new Error("Invalid email");
    }

    return new Email(value);
  }
}
