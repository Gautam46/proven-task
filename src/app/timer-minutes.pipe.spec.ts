import { TimerMinutesPipe } from './timer-minutes.pipe';

describe('TimerMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new TimerMinutesPipe();
    expect(pipe).toBeTruthy();
  });
});
