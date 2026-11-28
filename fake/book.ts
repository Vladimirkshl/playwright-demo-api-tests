import { IBookResponse } from '@constants/book';
import { FakeSimple } from './fake-simple';
import { Utils } from '@utils/utils';
import { DateFormat } from '@constants/common';

export const getFakeBook = (): IBookResponse => {
  return {
    booking: {
      firstname: FakeSimple.firstName(),
      lastname: FakeSimple.lastName(),
      totalprice: FakeSimple.price(),
      depositpaid: FakeSimple.boolean(),
      bookingdates: {
        checkin: Utils.formatDate(FakeSimple.dateInPast(4, 10), DateFormat.yyyy_MM_dd),
        checkout: Utils.formatDate(FakeSimple.dateInPast(3, 5), DateFormat.yyyy_MM_dd),
      },
    },
    api: {
      id: '',
    },
  };
};
