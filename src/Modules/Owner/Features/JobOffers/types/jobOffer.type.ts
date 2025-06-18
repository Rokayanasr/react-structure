export type JobType = 'Apotheker/-innen' | 'Nachtdienst' | 'PTA' | 'PKA';
export type JobStatus = 'Veröffentlicht' | 'Entwurf' | 'Abgelaufen' | 'Gesperrt';

export interface JobOffer {
  id: string;
  title: string;
  type: JobType;
  status: JobStatus;
  location: string;
  city: string;
  postalCode: string;
  state: string;
  phoneNumber: string;
  hourlyRate: number;
  fees: number;
  workingHours: {
    start: string;
    end: string;
  };
  needWorkClothes: boolean;
  hasParking: boolean;
  hasEmergencyRoom: boolean;
  cashRegisterSystem: string;
  travelAllowance: {
    baseAmount: number;
    baseKilometers: number;
    additionalPerKm: number;
  };
  description: string;
  startDate: string;
  endDate: string;
  additionalDates: string[];
  totalWorkDays: number;
  publishedAt: string;
}

export interface JobOfferFilters {
  search: string;
  sortBy: 'Standard' | 'Neueste' | 'Älteste';
}

export interface CreateJobOfferData {
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  hourlyRate: number;
  description: string;
  location?: string;
  workDays?: number;
} 