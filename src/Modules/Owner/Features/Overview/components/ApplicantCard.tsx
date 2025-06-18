import { CalenderIcon, MapPin, Cash, EyeIcon, DownloadIcon } from "@/assets/icons";
import { ApplicantCardProps } from "../types/overview.types";
import { Link } from "react-router-dom";

export default function ApplicantCard({ name, pharmacyName, applicationDate, firstWorkingDay, location, price, fees, status, image }: ApplicantCardProps) {
    const statusText = status === "Accepted" ? "Akzeptiert" : status === "Pending" ? "Ausstehend" : "Abgelehnt";

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
            <div className="flex gap-4">
                <img src={image} alt={name} className="h-16 w-16 md:h-18 md:w-18 lg:h-24 lg:w-24 rounded-full object-cover" />
                <div className='flex-1 space-y-4'>
                    <div className='space-y-2'>
                        <div className='flex flex-row justify-between gap-2'>
                            <h4 className='text-base font-medium text-gray-900 dark:text-white text-start'>{name}</h4>
                            <span className='rounded-lg border border-green-500 bg-green-100 dark:bg-green-900/20 md:px-2.5 px-2 md:py-0.5 text-xs font-medium text-green-600 dark:text-green-400 w-fit mx-0'>
                                {statusText}
                            </span>
                        </div>
                        <Link to='#' className='text-sm font-medium text-brand-500 dark:text-brand-400 hover:underline block text-start'>
                            {pharmacyName}
                        </Link>
                    </div>

                    <div className='space-y-2'>
                        <div className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300'>
                            <CalenderIcon className='h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500' />
                            <span className="text-xs md:text-sm">Antragsdatum: {applicationDate}</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300'>
                            <CalenderIcon className='h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500' />
                            <span className="text-xs md:text-sm">Erster Arbeitstag: {firstWorkingDay}</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300'>
                            <MapPin className='h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500' />
                            <span className="text-xs md:text-sm">Standort: {location}</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300'>
                            <Cash className='h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500' />
                            <span className="text-xs md:text-sm">der Preis: ${price} pro Stunde</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300'>
                            <Cash className='h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500' />
                            <span className="text-xs md:text-sm">Gebühren: ${fees} pro Stunde</span>
                        </div>
                    </div>

                    <div className='flex flex-wrap justify-start gap-2'>
                        <button className='rounded bg-brand-500 px-4 py-1.5 active:scale-95 transition-all duration-200 text-sm font-medium text-white hover:bg-brand-600 w-full sm:w-auto'>
                            Apotheker/-innen
                        </button>
                        <div className="flex gap-2">
                        <button className='flex h-8 w-8 items-center justify-center rounded bg-blue-light-500 text-white active:scale-95 transition-all duration-200 hover:bg-blue-light-400'>
                            <EyeIcon className='h-4 w-4' />
                        </button>
                        <button className='flex h-8 w-8 items-center justify-center rounded bg-red-400 text-white active:scale-95 transition-all duration-200 hover:bg-red-300'>
                            <DownloadIcon className='h-4 w-4' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
