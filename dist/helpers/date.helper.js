"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Date().Now as a string compatible with MySQL datetime format
 */
function toUtcString(date) {
    date.setUTCHours(date.getHours());
    return date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
exports.toUtcString = toUtcString;
function toGMT7String(date) {
    date.setUTCHours(date.getHours() + 7);
    return date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
exports.toGMT7String = toGMT7String;
/**
 * get YYYYMMdd string from Date object
 */
function getYYYYMMDD(date) {
    let dd = date.getDate().toString();
    let mm = (date.getMonth() + 1).toString(); //January is 0!
    let yyyy = date.getFullYear().toString();
    if (Number(dd) < 10)
        dd = '0' + dd;
    if (Number(mm) < 10)
        mm = '0' + mm;
    return yyyy + mm + dd;
}
exports.getYYYYMMDD = getYYYYMMDD;
/**
 * get YYYY-MM-DD hh:mm:ss  string from Date object
 */
function getDateTimeString(date) {
    let DD = date.getDate().toString();
    let MM = (date.getMonth() + 1).toString(); //January is 0!
    let YYYY = date.getFullYear().toString();
    let hh = date.getHours().toString();
    let mm = date.getMinutes().toString();
    let ss = date.getSeconds().toString();
    if (Number(DD) < 10)
        DD = '0' + DD;
    if (Number(MM) < 10)
        MM = '0' + MM;
    if (Number(hh) < 10)
        hh = '0' + hh;
    if (Number(mm) < 10)
        mm = '0' + mm;
    if (Number(ss) < 10)
        ss = '0' + ss;
    return YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
}
exports.getDateTimeString = getDateTimeString;
function getDateTimeStringReceipt(date) {
    let DD = date.getDate().toString();
    let MM = (date.getMonth() + 1).toString(); //January is 0!
    let YYYY = date.getFullYear().toString();
    let hh = date.getHours().toString();
    let mm = date.getMinutes().toString();
    let ss = date.getSeconds().toString();
    if (Number(DD) < 10)
        DD = '0' + DD;
    if (Number(MM) < 10)
        MM = '0' + MM;
    if (Number(hh) < 10)
        hh = '0' + hh;
    if (Number(mm) < 10)
        mm = '0' + mm;
    if (Number(ss) < 10)
        ss = '0' + ss;
    return DD + "/" + MM + "/" + YYYY + " " + hh + ":" + mm + ":" + ss;
}
exports.getDateTimeStringReceipt = getDateTimeStringReceipt;
function getDateForQA(date) {
    let DD = date.getDate().toString();
    let MM = (date.getMonth() + 1).toString(); //January is 0!
    let YYYY = date.getFullYear().toString();
    let hh = date.getHours().toString();
    let mm = date.getMinutes().toString();
    let ss = date.getSeconds().toString();
    if (Number(DD) < 10)
        DD = '0' + DD;
    if (Number(MM) < 10)
        MM = '0' + MM;
    if (Number(hh) < 10)
        hh = '0' + hh;
    if (Number(mm) < 10)
        mm = '0' + mm;
    if (Number(ss) < 10)
        ss = '0' + ss;
    return DD + "/" + MM + "/" + YYYY + " " + hh + ":" + mm;
}
exports.getDateForQA = getDateForQA;
/**
 * get yyyy-mm-dd string from Date object
 */
function getDateString(date) {
    let dd = date.getDate().toString();
    let mm = (date.getMonth() + 1).toString(); //January is 0!
    let yyyy = date.getFullYear().toString();
    if (Number(dd) < 10)
        dd = '0' + dd;
    if (Number(mm) < 10)
        mm = '0' + mm;
    return yyyy + "-" + mm + "-" + dd;
}
exports.getDateString = getDateString;
/**
 * get Time HHMMSS string from Date object
 */
function getNoColonTime(date) {
    let hh = date.getHours().toString();
    let mm = date.getMinutes().toString();
    let ss = date.getSeconds().toString();
    if (Number(hh) < 10)
        hh = '0' + hh;
    if (Number(mm) < 10)
        mm = '0' + mm;
    if (Number(ss) < 10)
        ss = '0' + ss;
    return hh + mm + ss;
}
exports.getNoColonTime = getNoColonTime;
/**
 * get Time hh:mm:ss string from Date object
 */
function getTime(date) {
    let hh = date.getHours().toString();
    let mm = date.getMinutes().toString();
    let ss = date.getSeconds().toString();
    if (Number(hh) < 10)
        hh = '0' + hh;
    if (Number(mm) < 10)
        mm = '0' + mm;
    if (Number(ss) < 10)
        ss = '0' + ss;
    return hh + ":" + mm + ":" + ss;
}
exports.getTime = getTime;
/**
 * Add minute to Date()
 */
function addMinute(date, min) {
    return new Date(date.getTime() + min * 60000);
}
exports.addMinute = addMinute;
/**
 * Add second to Date()
 */
function addSecond(date, sec) {
    return new Date(date.getTime() + sec * 1000);
}
exports.addSecond = addSecond;
/*
 * Get UTC Search Boundary.
 */
function getBoundUTCDate(lowerDate, upperDate) {
    let fromDate = lowerDate;
    fromDate.setHours(0);
    fromDate.setMinutes(0);
    fromDate.setSeconds(0);
    let monthNo = (fromDate.getUTCMonth() + 1) >= 10 ? fromDate.getUTCMonth() + 1 : `0${fromDate.getUTCMonth() + 1}`;
    let dateNo = fromDate.getUTCDate() >= 10 ? fromDate.getUTCDate() : `0${fromDate.getUTCDate()}`;
    let hrNo = fromDate.getUTCHours() >= 10 ? fromDate.getUTCHours() : `0${fromDate.getUTCHours()}`;
    let minuteNo = fromDate.getUTCMinutes() >= 10 ? fromDate.getUTCMinutes() : `0${fromDate.getUTCMinutes()}`;
    let secondNo = fromDate.getUTCSeconds() >= 10 ? fromDate.getUTCSeconds() : `0${fromDate.getUTCSeconds()}`;
    const lowerDatetime = `${fromDate.getUTCFullYear()}-${monthNo}-${dateNo} ${hrNo}:${minuteNo}:${secondNo}`;
    let toDate = upperDate || lowerDate;
    toDate.setHours(23);
    toDate.setMinutes(59);
    toDate.setSeconds(59);
    monthNo = (toDate.getUTCMonth() + 1) >= 10 ? toDate.getUTCMonth() + 1 : `0${toDate.getUTCMonth() + 1}`;
    dateNo = toDate.getUTCDate() >= 10 ? toDate.getUTCDate() : `0${toDate.getUTCDate()}`;
    hrNo = toDate.getUTCHours() >= 10 ? toDate.getUTCHours() : `0${toDate.getUTCHours()}`;
    minuteNo = toDate.getUTCMinutes() >= 10 ? toDate.getUTCMinutes() : `0${toDate.getUTCMinutes()}`;
    secondNo = toDate.getUTCSeconds() >= 10 ? toDate.getUTCSeconds() : `0${toDate.getUTCSeconds()}`;
    const upperDatetime = `${toDate.getUTCFullYear()}-${monthNo}-${dateNo} ${hrNo}:${minuteNo}:${secondNo}`;
    return {
        from: lowerDatetime,
        to: upperDatetime
    };
}
exports.getBoundUTCDate = getBoundUTCDate;
function getFirstDayOfMonthUtc() {
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
exports.getFirstDayOfMonthUtc = getFirstDayOfMonthUtc;
function getLastDayOfMonthUtc() {
    let date = new Date();
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, null, 23, 59, 59);
    return lastDay.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
exports.getLastDayOfMonthUtc = getLastDayOfMonthUtc;
function getFirstDayOfYearUtc() {
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), 0);
    return firstDay.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
exports.getFirstDayOfYearUtc = getFirstDayOfYearUtc;
function getLastDayOfYearUtc() {
    let date = new Date();
    let lastDay = new Date(date.getFullYear() + 1, 0);
    return lastDay.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
exports.getLastDayOfYearUtc = getLastDayOfYearUtc;
function getTodayUtc() {
    let date = new Date();
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return today.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
exports.getTodayUtc = getTodayUtc;
function getNotTodayUtc(day, hours) {
    let date = new Date();
    let lastDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + day, hours);
    return lastDay.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
exports.getNotTodayUtc = getNotTodayUtc;
function getNowplus(date, day, hours) {
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate() + day, date.getHours() + hours, date.getMinutes(), date.getSeconds());
    return today.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
exports.getNowplus = getNowplus;
//# sourceMappingURL=date.helper.js.map