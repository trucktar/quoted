import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "elapsedTime"
})
export class ElapsedTimePipe implements PipeTransform {
  //custom pipe
  transform(value: any): string {
    let now: any = Date.now();
    let elapsedSeconds: number = Math.abs(value - now) / 1000; //milliseconds -> seconds

    let elapsedDays: number = Math.floor(elapsedSeconds / 86400);

    if (elapsedDays) {
      return `${elapsedDays} days ago`;
    } else {
      return "Today";
    }
  }
}
