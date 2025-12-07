import React, { createContext, useContext, useState } from 'react';

type ConsultationType = 'phone' | 'video' | 'chat';

export type BookingState = {
  concernId?: string;
  concernName?: string;
  doctorId?: string;
  consultationType?: ConsultationType;
  date?: string;      // e.g. "2025-02-06"
  time?: string;      // e.g. "10:05 AM"
  concernText?: string;
  severity?: number;  // 0-1 range
  durationValue?: number;
  durationUnit?: 'days' | 'weeks' | 'months' | 'years';
  gender?: string;
  age?: string;
  height?: string;
  weight?: string;
};

type BookingContextType = {
  booking: BookingState;
  updateBooking: (patch: Partial<BookingState>) => void;
  reset: () => void;

  // ADDING THESE FUNCTIONS SO SCREENS WORK
  setConcern: (id: string, name: string) => void;
  setDoctor: (doctorId: string) => void;
  setConsultationType: (type: ConsultationType) => void;
  setAppointmentDate: (date: string) => void;
  setAppointmentTime: (time: string) => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [booking, setBooking] = useState<BookingState>({});

  const updateBooking = (patch: Partial<BookingState>) =>
    setBooking(prev => ({ ...prev, ...patch }));

  const reset = () => setBooking({});

  return (
    <BookingContext.Provider
      value={{
        booking,
        updateBooking,
        reset,

        // IMPLEMENTED SHORTCUT FUNCTIONS
        setConcern: (id, name) => updateBooking({ concernId: id, concernName: name }),
        setDoctor: doctorId => updateBooking({ doctorId }),
        setConsultationType: type => updateBooking({ consultationType: type }),
        setAppointmentDate: date => updateBooking({ date }),
        setAppointmentTime: time => updateBooking({ time }),
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used inside BookingProvider');
  return ctx;
};
