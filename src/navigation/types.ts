export type RootStackParamList = {
  Main: undefined;
  Home: undefined;   
  Consult: undefined;
  Bookings: undefined;
  Profile: undefined;

  SelectConcern: undefined;
  DoctorList: { concernId: string; concernName: string };

  ChooseConsultation: { doctorId: string };
  ChooseDate: undefined;
  ChooseTimeSlot: undefined;
  ConcernDetails: undefined;
  BasicInfo: undefined;
  AppointmentSummary: undefined;
  PaymentSuccess: undefined;

  MyBookings: undefined;
  AppointmentDetails: { bookingId: string };

  // Call flow (we’ll wire UI later)
  CallDisclaimer: { bookingId: string };
  CallRinging: { bookingId: string };
  CallNoAnswer: { bookingId: string };
  CallOngoing: { bookingId: string };
  CallDisconnectedLowBalance: { bookingId: string };
  CallEnded: { bookingId: string };
};
export type BottomTabParamList = {
  Home: undefined;
  Consult: undefined;
  Bookings: undefined;
  Profile: undefined;
};
