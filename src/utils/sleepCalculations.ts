const SLEEP_CYCLE_LENGTH = 90;

export interface SleepOption {
  bedtime: string;
  wakeTime: string;
  cycles: number;
  duration: number;
}

export function calculateSleepOptions(time: string, isWakeTime: boolean): SleepOption[] {
  const [hours, minutes] = time.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0);

  const options: SleepOption[] = [];

  for (let cycles = 5; cycles <= 6; cycles++) {
    const duration = cycles * SLEEP_CYCLE_LENGTH;
    let resultTime: Date;

    if (isWakeTime) {
      resultTime = new Date(date.getTime() - duration * 60000);
    } else {
      resultTime = new Date(date.getTime() + duration * 60000);
    }

    const bedtime = formatTime(isWakeTime ? resultTime : date);
    const wakeTime = formatTime(isWakeTime ? date : resultTime);

    options.push({
      bedtime,
      wakeTime,
      cycles,
      duration,
    });
  }

  return options;
}

export function formatTime(date: Date): string {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

export function addMinutes(time: string, minutes: number): string {
  const [hours, mins] = time.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, mins, 0);
  date.setMinutes(date.getMinutes() + minutes);
  return formatTime(date);
}

export function subtractMinutes(time: string, minutes: number): string {
  const [hours, mins] = time.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, mins, 0);
  date.setMinutes(date.getMinutes() - minutes);
  return formatTime(date);
}

export function calculateOptimalNapLength(
  currentTime: string,
  wakeTime: string
): { shortNap: number; longNap: number; shortWakeUp: string; longWakeUp: string } {
  const [curHours, curMins] = currentTime.split(':').map(Number);
  const [wakeHours, wakeMins] = wakeTime.split(':').map(Number);

  const curDate = new Date();
  curDate.setHours(curHours, curMins, 0);

  const wakeDate = new Date();
  wakeDate.setHours(wakeHours, wakeMins, 0);

  if (wakeDate <= curDate) {
    wakeDate.setDate(wakeDate.getDate() + 1);
  }

  const availableMinutes = (wakeDate.getTime() - curDate.getTime()) / 60000;

  const shortNap = Math.floor(availableMinutes / 90) * 90;
  const longNap = Math.max(shortNap - 90, 20);

  const shortWakeDate = new Date(curDate.getTime() + shortNap * 60000);
  const longWakeDate = new Date(curDate.getTime() + longNap * 60000);

  return {
    shortNap,
    longNap,
    shortWakeUp: formatTime(shortWakeDate),
    longWakeUp: formatTime(longWakeDate),
  };
}

export function calculateCaffeineCutoff(bedtime: string): string {
  const halfLife = 5;
  return subtractMinutes(bedtime, halfLife * 60);
}

export function calculateSleepDebt(
  actualSleep: number,
  neededSleep: number,
  days: number
): { totalDebt: number; debtPerNight: number } {
  const debtPerNight = neededSleep - actualSleep;
  const totalDebt = debtPerNight * days;

  return {
    totalDebt: Math.round(totalDebt * 10) / 10,
    debtPerNight: Math.round(debtPerNight * 10) / 10,
  };
}
