export class Quote {
  constructor(
    public text: string,
    public author: string,
    public creator: string,
    public datePosted: Date = new Date()
  ) {}
}
