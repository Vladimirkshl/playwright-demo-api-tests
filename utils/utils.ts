import { DateFormat } from '@constants/common';
import { formatInTimeZone } from 'date-fns-tz';

export class Utils {

  /* TEXT */

  static jsonStringify = (obj: object, spacing = 2): string => JSON.stringify(obj, null, spacing);

  /* DATE */

  static formatDate = (
    date: Date | string,
    dateFormat = DateFormat.yyyyMMdd_HHmmss,
    timezone = 'Etc/UTC'
  ) => formatInTimeZone(date, timezone, dateFormat);

  static getCurrentDateTime = () => this.formatDate(new Date());

  static async pause(seconds = 1) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
}
