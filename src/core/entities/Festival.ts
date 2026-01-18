export type IEventType = "physical" | "virtual";

export class Festival {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly description: string,
    public readonly userId: string,
    public readonly orisaId: string,
    public readonly country: string,
    public readonly eventType: IEventType,
    public readonly timezone: string,
    public readonly startDate: Date,
    public readonly endDate: Date,
  ) {}
}
