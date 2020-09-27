import { castToMonthDay, getFullDate, getYear } from './dates';

describe('date helper test', () => {

    test('castToMonthDay test', () => {
        const date = castToMonthDay("2020-12-12");
        expect(date).toEqual("Dic 12, 2020");
    });

    test('castToMonthDay test - empty date', () => {
        const date = castToMonthDay();
        expect(date).toEqual("");
    });

    test('getFullDate test', () => {
        const date = getFullDate("2020-12-12");
        expect(date).toEqual("12 Diciembre del 2020");
    });

    test('getYear test - empty', () => {
        const year = getYear("2020-12-12");
        expect(year).toEqual("2020");
    });

    test('getFullDate test - empty', () => {
        const year = getFullDate(null);
        expect(year).toEqual("");
    });
});