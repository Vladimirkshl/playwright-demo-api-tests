import { DateFormat } from '@constants/common';
import { formatInTimeZone } from 'date-fns-tz';

export class Utils {

  /* DATE */

  static formatDate = (
    date: Date | string,
    dateFormat = DateFormat.yyyyMMdd_HHmmss,
    timezone = 'Etc/UTC'
  ) => formatInTimeZone(date, timezone, dateFormat);

  static getCurrentDateTime = () => this.formatDate(new Date());
}
