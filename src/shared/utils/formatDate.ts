import {
  format,
  addMinutes,
  addHours,
  addDays,
  addMonths,
  isSameDay,
  getYear,
  getMonth,
  parse,
  isValid,
  parseISO,
  isAfter,
} from "date-fns";

export function getCurrentDateTime() {
  const datetime = new Date();
  return format(datetime, "yyyy-MM-dd HH:mm:ss");
}

export function addMinutesToCurrentTime(currentDate: Date, minutes: number) {
  const newDateTime = addMinutes(currentDate, minutes);
  return format(newDateTime, "yyyy-MM-dd HH:mm:ss");
}

export function addHoursToCurrentTime(currentDate: Date, hours: number) {
  const newDateTime = addHours(currentDate, hours);
  return format(newDateTime, "yyyy-MM-dd HH:mm:ss");
}

export function addDaysToCurrentTime(currentDate: Date, days: number) {
  const newDateTime = addDays(currentDate, days);
  return format(newDateTime, "yyyy-MM-dd HH:mm:ss");
}

export function addMonthsToCurrentTime(currentDate: Date, months: number) {
  const newDateTime = addMonths(currentDate, months);
  return format(newDateTime, "yyyy-MM-dd HH:mm:ss");
}

export const formatToDate = (date: Date) => format(date, "yyyy-MM-dd");
export const formatToTime = (date: Date) => format(date, "HH:mm:ss");

export function isCurrentDay(date: Date) {
  const currentDate = new Date();
  return isSameDay(date, currentDate);
}

export function formatToLocaleDateString(date: Date) {
  return new Date(date).toLocaleDateString();
}

export function formatToLocaleTimeString(date: Date) {
  return new Date(date).toLocaleTimeString();
}

export function formatDate(date: Date, formatStyle: string) {
  return format(date, formatStyle);
}

export function getCurrentYear() {
  const datetime = new Date();
  return getYear(datetime);
}

export function getCurrentMonth() {
  const datetime = new Date();
  return getMonth(datetime);
}

export function formatDateTime(date: Date): string {
  return format(date, "yyyy-MM-dd HH:mm:ss");
}

export function addMinutesToDate(date: Date, minutes: number): Date {
  return addMinutes(date, minutes);
}
export const formatToLocalDate = (date: Date): string => {
  return format(date, "MM/dd/yyyy");
};
export const formatISOToLocalDate = (isoString: string): string => {
  return format(parseISO(isoString), "MM/dd/yyyy");
};

export const formatToSpringDate = (date: Date): string => {
  return format(date, "yyyy-MM-dd");
};

export const isAfterDate = (
  begin_date: Date | string,
  end_date: Date | string
): boolean => {
  return isAfter(begin_date, end_date);
};

export const isValidDate = (date: unknown): boolean => {
  return isValid(date);
};
