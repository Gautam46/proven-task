import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerMinutes',
  pure: false,
})
export class TimerMinutesPipe implements PipeTransform {
  transform(value: number): any {
    console.log(value);
    const cal =
      (value % 60).toFixed(0).length !== 1 ? value % 60 : (value % 60) + '0';
    return '0' + Math.floor(value / 60).toFixed(0) + ' : ' + cal;
  }
}
