export class Money {
  private constructor(public readonly amount: number) {
    if (amount < 0) {
      throw new Error("Amount cannot be negative");
    }
  }

  static create(amount: number): Money {
    return new Money(amount);
  }

  add(other: Money): Money {
    return new Money(this.amount + other.amount);
  }
}
