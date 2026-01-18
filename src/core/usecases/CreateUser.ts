export class CreateUser {
  constructor(private repo: any) {}
  execute(data: any) {
    return this.repo.create(data);
  }
}
