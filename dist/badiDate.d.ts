import * as luxon from 'luxon';

export interface YearMonthDay {
    year: number;
    month: number;
    day: number;
}

export interface YearHolyDayNumber {
    year: number;
    holyDayNumber: number;
}

export type InputDate = luxon.DateTime | Date | YearMonthDay | YearHolyDayNumber;

export type UnderlineFormat = 'css' | 'u' | 'diacritic' | 'none';

export interface BadiDateSettings {
    defaultLanguage?: string;
    underlineFormat?: UnderlineFormat;
    useClockLocations?: boolean;
}

export class BadiDate {
    constructor(date: InputDate);
    ayyamiHaLength: number;
    day: number;
    gregorianDate: luxon.DateTime;
    holyDayNumber: number | undefined;
    invalidReason: string | undefined;
    isValid: boolean;
    kullIShay: number;
    month: number;
    vahid: number;
    weekday: number;
    year: number;
    yearInVahid: number;
    format(formatString?: string, language?: string): string;
}

export class LocalBadiDate{
    constructor(date: InputDate, latitude: number, longitude: number, timezoneId: string);
    badiDate: BadiDate;
    clockLocation: string | undefined;
    end: luxon.DateTime;
    holyDayCommemoration: luxon.DateTime | undefined;
    solarNoon: luxon.DateTime;
    start: luxon.DateTime;
    sunrise: luxon.DateTime;
}

export function badiDateSettings(settings: BadiDateSettings): void;
