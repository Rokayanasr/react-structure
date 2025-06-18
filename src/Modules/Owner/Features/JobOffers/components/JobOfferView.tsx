import Badge from "@/components/ui/badge/Badge";
import {
    MapPin,
    CLockIcon,
    BedIcon,
    LabCoatIcon,
    PhoneIcon,
    LocationPinIcon,
    StateIcon,
    PostalIcon,
    ParkingIcon,
    CashRegisterIcon,
    TravelIcon,
    InfoCircleIcon,
} from "@/assets/icons";
import { RootState } from "@/services/store";
import { useSelector } from "react-redux";
import { JobOffer } from "../types/jobOffer.type";

const JobOfferView = () => {
    const selectedJobOffer = useSelector<RootState, JobOffer | null>((state) => state.jobOffers.selectedJobOffer);

    const iconClasses = "w-4 h-4 text-brand-600 dark:text-brand-400";

    return (
        <div className='bg-white dark:bg-gray-800 rounded-lg p-6 w-full mx-auto overflow-x-hidden'>
            {/* Header Section */}
            <div className='mb-8'>
                <div className='flex items-center gap-3 mb-3'>
                    <Badge color='primary' size='sm'>
                        {selectedJobOffer?.type}
                    </Badge>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>Veröffentlicht vor {selectedJobOffer?.publishedAt}</span>
                </div>

                <div className='flex items-center gap-4 mb-3'>
                    <div className='flex items-center gap-2'>
                        <MapPin className={iconClasses} />
                        <span className='text-gray-700 dark:text-gray-300'>{selectedJobOffer?.city}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-gray-700 dark:text-gray-300'>der Preis: ${selectedJobOffer?.hourlyRate} pro Stunde</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-gray-700 dark:text-gray-300'>Gebühren: ${selectedJobOffer?.fees} pro Stunde</span>
                    </div>
                </div>

                <div className='bg-blue-50 dark:bg-brand-500/30 p-4 rounded-lg'>
                    <div className='text-sm text-gray-700 dark:text-gray-300 mb-2'>
                        <span className='font-medium dark:text-white'>Arbeitstag:</span> {selectedJobOffer?.startDate}
                        <span className='mx-2 dark:text-gray-400'>|</span>
                        <span className='font-medium dark:text-white'>Letzter Arbeitstag:</span> {selectedJobOffer?.endDate}
                    </div>
                    <div className='text-sm text-gray-700 dark:text-gray-300 mb-2'>
                        <span className='font-medium dark:text-white'>Weitere Arbeitstage:</span> {selectedJobOffer?.additionalDates?.join(", ")}
                    </div>
                    <div className='text-sm text-gray-700 dark:text-gray-300'>
                        <span className='font-medium dark:text-white'>Insgesamt Arbeitstage dieses Angebots:</span> {selectedJobOffer?.totalWorkDays}
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
                {/* Left Column */}
                <div>
                    <div className='mb-6'>
                        <div className='flex items-center gap-2 mb-2'>
                            <LocationPinIcon className={iconClasses} />
                            <h3 className='text-sm font-medium text-gray-900 dark:text-white'>Adresse der Apotheke</h3>
                        </div>
                        <p className='text-gray-700 dark:text-gray-300'>{selectedJobOffer?.location}</p>
                    </div>

                    <div className='mb-6'>
                        <div className='flex items-center gap-2 mb-2'>
                            <PostalIcon className={iconClasses} />
                            <h3 className='text-sm font-medium text-gray-900 dark:text-white'>PLZ & Ort</h3>
                        </div>
                        <p className='text-gray-700 dark:text-gray-300'>
                            {selectedJobOffer?.city}, {selectedJobOffer?.postalCode}
                        </p>
                    </div>

                    <div className='mb-6'>
                        <div className='flex items-center gap-2 mb-2'>
                            <StateIcon className={iconClasses} />
                            <h3 className='text-sm font-medium text-gray-900 dark:text-white'>Bundesland</h3>
                        </div>
                        <p className='text-gray-700 dark:text-gray-300'>{selectedJobOffer?.state}</p>
                    </div>

                    <div className='mb-6'>
                        <div className='flex items-center gap-2 mb-2'>
                            <PhoneIcon className={iconClasses} />
                            <h3 className='text-sm font-medium text-gray-900 dark:text-white'>Telefonnummer</h3>
                        </div>
                        <p className='text-gray-700 dark:text-gray-300'>{selectedJobOffer?.phoneNumber}</p>
                    </div>
                </div>

                {/* Right Column */}
                <div>
                    <div className='mb-6'>
                        <div className='flex items-center gap-2 mb-2'>
                            <CLockIcon className={iconClasses} />
                            <h3 className='text-sm font-medium text-gray-900 dark:text-white'>Arbeitszeiten (pro Tag)</h3>
                        </div>
                        <p className='text-gray-700 dark:text-gray-300'>
                            Von {selectedJobOffer?.workingHours.start} bis {selectedJobOffer?.workingHours.end}
                        </p>
                    </div>

                    <div className='mb-6'>
                        <div className='flex items-center gap-2 mb-2'>
                            <LabCoatIcon className={iconClasses} />
                            <h3 className='text-sm font-medium text-gray-900 dark:text-white'>Berufskleidung mitnehmen</h3>
                        </div>
                        <p className='text-gray-700 dark:text-gray-300'>{selectedJobOffer?.needWorkClothes ? "Ja" : "Nein"}</p>
                    </div>

                    <div className='mb-6'>
                        <div className='flex items-center gap-2 mb-2'>
                            <ParkingIcon className={iconClasses} />
                            <h3 className='text-sm font-medium text-gray-900 dark:text-white'>Parkplatz vorhanden</h3>
                        </div>
                        <p className='text-gray-700 dark:text-gray-300'>{selectedJobOffer?.hasParking ? "Ja" : "Nein"}</p>
                    </div>

                    <div className='mb-6'>
                        <div className='flex items-center gap-2 mb-2'>
                            <BedIcon className={iconClasses} />
                            <h3 className='text-sm font-medium text-gray-900 dark:text-white'>Schlafzimmer bei Notdienst</h3>
                        </div>
                        <p className='text-gray-700 dark:text-gray-300'>{selectedJobOffer?.hasEmergencyRoom ? "Ja" : "Nein"}</p>
                    </div>

                    <div className='mb-6'>
                        <div className='flex items-center gap-2 mb-2'>
                            <CashRegisterIcon className={iconClasses} />
                            <h3 className='text-sm font-medium text-gray-900 dark:text-white'>WWS (Kassenprogramm)</h3>
                        </div>
                        <p className='text-gray-700 dark:text-gray-300'>{selectedJobOffer?.cashRegisterSystem}</p>
                    </div>

                    <div className='mb-6'>
                        <div className='flex items-center gap-2 mb-2'>
                            <TravelIcon className={iconClasses} />
                            <h3 className='text-sm font-medium text-gray-900 dark:text-white'>Fahrkostenpauschale</h3>
                        </div>
                        <p className='text-gray-700 dark:text-gray-300'>
                            Für die tägliche Vertretung gibt es eine Fahrkostenpauschale von {selectedJobOffer?.travelAllowance?.baseAmount}€ bis{" "}
                            {selectedJobOffer?.travelAllowance?.baseKilometers} km. Ab {selectedJobOffer?.travelAllowance?.baseKilometers} km kommen{" "}
                            {selectedJobOffer?.travelAllowance?.additionalPerKm} Cent pro km dazu.
                        </p>
                    </div>

                    <div>
                        <div className='flex items-center gap-2 mb-2'>
                            <InfoCircleIcon className={iconClasses} />
                            <h3 className='text-sm font-medium text-gray-900 dark:text-white'>Sonstiges</h3>
                        </div>
                        <p className='text-gray-700 dark:text-gray-300'>{selectedJobOffer?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobOfferView;
