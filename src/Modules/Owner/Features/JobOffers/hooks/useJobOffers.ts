import { useState, useMemo } from 'react';
import { JobOffer } from '../types/jobOffer.type';
import { parseDate } from '@/utils/formatting';

const jobOfferTemplates: JobOffer[] = [
  {
    id: '1',
    title: 'Apotheker (m/w/d) in Vollzeit',
    type: 'Apotheker/-innen',
    publishedAt: '15/03/2024',
    status: 'Veröffentlicht',
    location: 'Hauptstraße 123',
    city: 'München',
    postalCode: '80331',
    state: 'Bayern',
    phoneNumber: '089-1234567',
    hourlyRate: 280,
    fees: 60,
    workingHours: {
      start: '8:00',
      end: '17:00'
    },
    needWorkClothes: true,
    hasParking: true,
    hasEmergencyRoom: true,
    cashRegisterSystem: 'AWINTA',
    travelAllowance: {
      baseAmount: 25,
      baseKilometers: 20,
      additionalPerKm: 0.42
    },
    description: 'Moderne Apotheke im Herzen Münchens sucht erfahrene/n Apotheker/in. Wir bieten ein dynamisches Arbeitsumfeld und exzellente Konditionen.',
    startDate: '01/04/2024',
    endDate: '30/04/2024',
    additionalDates: ['05.04.2024', '12.04.2024', '19.04.2024'],
    totalWorkDays: 5
  },
  {
    id: '2',
    title: 'PTA für Nachtdienst gesucht',
    type: 'Nachtdienst',
    publishedAt: '16/03/2024',
    status: 'Veröffentlicht',
    location: 'Bahnhofstraße 45',
    city: 'Hamburg',
    postalCode: '20099',
    state: 'Hamburg',
    phoneNumber: '040-9876543',
    hourlyRate: 320,
    fees: 75,
    workingHours: {
      start: '20:00',
      end: '8:00'
    },
    needWorkClothes: false,
    hasParking: true,
    hasEmergencyRoom: true,
    cashRegisterSystem: 'ADG',
    travelAllowance: {
      baseAmount: 30,
      baseKilometers: 25,
      additionalPerKm: 0.45
    },
    description: 'Für unsere 24-Stunden Apotheke suchen wir erfahrene PTAs für Nachtdienste. Überdurchschnittliche Vergütung und flexible Dienstplangestaltung.',
    startDate: '01/04/2024',
    endDate: '30/06/2024',
    additionalDates: ['10.04.2024', '20.04.2024', '30.04.2024'],
    totalWorkDays: 12
  },
  {
    id: '3',
    title: 'Vertretung für Urlaubszeit',
    type: 'Apotheker/-innen',
    publishedAt: '17/03/2024',
    status: 'Veröffentlicht',
    location: 'Königsallee 56',
    city: 'Düsseldorf',
    postalCode: '40215',
    state: 'Nordrhein-Westfalen',
    phoneNumber: '0211-5557890',
    hourlyRate: 260,
    fees: 55,
    workingHours: {
      start: '9:00',
      end: '18:00'
    },
    needWorkClothes: true,
    hasParking: false,
    hasEmergencyRoom: false,
    cashRegisterSystem: 'Aposoft',
    travelAllowance: {
      baseAmount: 20,
      baseKilometers: 15,
      additionalPerKm: 0.38
    },
    description: 'Urlaubsvertretung in gut eingeführter Apotheke. Freundliches Team und angenehmes Arbeitsklima garantiert.',
    startDate: '01/07/2024',
    endDate: '31/07/2024',
    additionalDates: ['15.07.2024', '22.07.2024'],
    totalWorkDays: 20
  },
  {
    id: '4',
    title: 'Teilzeit PTA in moderner Apotheke',
    type: 'PTA',
    publishedAt: '18/03/2024',
    status: 'Veröffentlicht',
    location: 'Friedrichstraße 78',
    city: 'Berlin',
    postalCode: '10117',
    state: 'Berlin',
    phoneNumber: '030-4445678',
    hourlyRate: 240,
    fees: 45,
    workingHours: {
      start: '10:00',
      end: '15:00'
    },
    needWorkClothes: true,
    hasParking: true,
    hasEmergencyRoom: false,
    cashRegisterSystem: 'AWINTA',
    travelAllowance: {
      baseAmount: 15,
      baseKilometers: 10,
      additionalPerKm: 0.35
    },
    description: 'Teilzeitstelle in einer der modernsten Apotheken Berlins. Flexible Arbeitszeiten und familiäres Arbeitsumfeld.',
    startDate: '15/04/2024',
    endDate: '31/12/2024',
    additionalDates: ['20.04.2024', '25.04.2024'],
    totalWorkDays: 15
  },
  {
    id: '5',
    title: 'test offer by worker',
    type: 'PTA',
    publishedAt: '19/03/2024',
    status: 'Veröffentlicht',
    location: 'Marktplatz 12',
    city: 'Stuttgart',
    postalCode: '70173',
    state: 'Baden-Württemberg',
    phoneNumber: '0711-9998877',
    hourlyRate: 255,
    fees: 50,
    workingHours: {
      start: '9:00',
      end: '17:00'
    },
    needWorkClothes: false,
    hasParking: true,
    hasEmergencyRoom: true,
    cashRegisterSystem: 'Aposoft',
    travelAllowance: {
      baseAmount: 22,
      baseKilometers: 18,
      additionalPerKm: 0.40
    },
    description: 'Wir suchen eine/n engagierte/n PTA für unsere zentral gelegene Apotheke. Attraktive Vergütung und Entwicklungsmöglichkeiten.',
    startDate: '01/05/2024',
    endDate: '31/07/2024',
    additionalDates: ['05.05.2024', '15.05.2024', '25.05.2024'],
    totalWorkDays: 25
  },
  {
    id: '6',
    title: 'test job offer',
    type: 'Apotheker/-innen',
    publishedAt: '15/03/2024',
    status: 'Veröffentlicht',
    location: 'Hauptstraße 123',
    city: 'München',
    postalCode: '80331',
    state: 'Bayern',
    phoneNumber: '089-1234567',
    hourlyRate: 280,
    fees: 60,
    workingHours: {
      start: '8:00',
      end: '17:00'
    },
    needWorkClothes: true,
    hasParking: true,
    hasEmergencyRoom: true,
    cashRegisterSystem: 'AWINTA',
    travelAllowance: {
      baseAmount: 25,
      baseKilometers: 20,
      additionalPerKm: 0.42
    },
    description: 'Moderne Apotheke im Herzen Münchens sucht erfahrene/n Apotheker/in. Wir bieten ein dynamisches Arbeitsumfeld und exzellente Konditionen.',
    startDate: '01/04/2024',
    endDate: '30/04/2024',
    additionalDates: ['05.04.2024', '12.04.2024', '19.04.2024'],
    totalWorkDays: 5
  }
];

export const useJobOffers = (filters?: { search?: string; sortBy?: 'Neueste' | 'Älteste' | 'Standard' }) => {
  const [isLoading] = useState(false);

  const filteredAndSortedOffers = useMemo(() => {
    let result = [...jobOfferTemplates];

    // تطبيق البحث
    if (filters?.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(offer => 
        offer.title.toLowerCase().includes(searchLower) ||
        offer.description.toLowerCase().includes(searchLower) ||
        offer.city.toLowerCase().includes(searchLower) ||
        offer.type.toLowerCase().includes(searchLower)
      );
    }

    // console.log('Before sorting - sortBy:', filters?.sortBy);
    // console.log('Before sorting - first item date:', result[0]?.publishedAt);

    // تطبيق الترتيب
    if (filters?.sortBy) {
      try {
        switch (filters.sortBy) {
          case 'Neueste':
            result.sort((a, b) => {
              const dateA = parseDate(a.publishedAt);
              const dateB = parseDate(b.publishedAt);
              // console.log('Comparing dates:', {
              //   a: a.publishedAt,
              //   b: b.publishedAt,
              //   dateA,
              //   dateB
              // });
              return dateB.getTime() - dateA.getTime();
            });
            break;
          case 'Älteste':
            // console.log('Sorting by Älteste');
            result.sort((a, b) => {
              const dateA = parseDate(a.publishedAt);
              const dateB = parseDate(b.publishedAt);
              return dateA.getTime() - dateB.getTime();
            });
            break;
          case 'Standard':
            // console.log('Sorting by Standard');
            result.sort((a, b) => Number(a.id) - Number(b.id));
            break;
        }
      } catch (error) {
        console.error('Error during sorting:', error);
      }
    }

    // console.log('After sorting - first item:', result[0]);
    return result;
  }, [filters?.search, filters?.sortBy]);

  return {
    jobOffers: filteredAndSortedOffers,
    isLoading
  };
}; 