export interface IBook {
  firstname: string;
  lastname: string;
  totalprice: string;
  depositpaid: boolean;
  bookingdates: IBookingDates;
  additionalneeds?: string;
}

interface IBookingDates {
  checkin: string,
  checkout: string,
}

export interface IBookResponse {
  booking: IBook;
  api?: {
    id: string;
  }
}
