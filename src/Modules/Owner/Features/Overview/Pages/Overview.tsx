import PageMeta from "@/components/common/PageMeta";
import { useState } from "react";
import ApplicantCard from "../components/ApplicantCard";
import { Applicant } from "../types/overview.types";

export default function Overview() {
    const [applicants] = useState<Applicant[]>([
        {
            id: 1,
            name: "Cansu Ugur",
            pharmacyName: "Vital Apotheke",
            applicationDate: "05/01/2025",
            firstWorkingDay: "09/01/2025",
            location: "44809 Bochum",
            price: 250,
            fees: 50,
            status: "Accepted",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 2,
            name: "Cansu Ugur",
            pharmacyName: "Vital Apotheke",
            applicationDate: "05/01/2025",
            firstWorkingDay: "09/01/2025",
            location: "44809 Bochum",
            price: 250,
            fees: 50,
            status: "Accepted",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 3,
            name: "Cansu Ugur",
            pharmacyName: "Vital Apotheke",
            applicationDate: "05/01/2025",
            firstWorkingDay: "09/01/2025",
            location: "44809 Bochum",
            price: 250,
            fees: 50,
            status: "Accepted",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 4,
            name: "Cansu Ugur",
            pharmacyName: "Vital Apotheke",
            applicationDate: "05/01/2025",
            firstWorkingDay: "09/01/2025",
            location: "44809 Bochum",
            price: 250,
            fees: 50,
            status: "Accepted",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
    ]);

    return (
        <>
            <PageMeta
                title='ExtraPharma Panel | Übersicht Dashboard'
                description='ExtraPharma Inhaber-Panel Übersicht Dashboard - Verwalten Sie Ihre Apothekenbetriebe, sehen Sie Statistiken und überwachen Sie die Geschäftsleistung'
            />
            {/* <PageBreadcrumb pageTitle='Übersicht' /> */}
            <div className="p-4 space-y-6">
                <h1 className="text-xl sm:text-2xl font-semibold text-brand-500 dark:text-brand-400">Übersicht</h1>

                <div className="space-y-2">
                    <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                        <div className='rounded bg-red-50 dark:bg-red-900/20 px-2 py-1 text-xs font-medium text-red-500 dark:text-red-400 w-fit'>Hinweis</div>
                        <p className='text-sm text-gray-600 dark:text-gray-300'>Bei vorhandenen Angeboten</p>
                    </div>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>Für mehr Informationen klicken sie auf den namen der apotheke</p>
                </div>

                <div className="space-y-4">
                    <h2 className='text-lg sm:text-xl font-semibold text-brand-500 dark:text-brand-400'>Aktuelle Bewerber</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {applicants.map((applicant) => (
                            <ApplicantCard key={applicant.id} {...applicant} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
