import { useState } from "react";
import { JobOfferFilters } from "../types/jobOffer.type";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import JobOffersTable from "../components/JobOffersTable";
import { useJobOffers } from "../hooks/useJobOffers";
import { useJobOfferActions } from "../hooks/useJobOfferActions";
import Select from "@/components/form/Select";
import Search from "@/components/common/Search/Search";
import Pagination from "@/components/common/Pagination/Pagination";
import { usePagination } from "@/hooks/usePagination";

const JobOffersPage = () => {
    const [filters, setFilters] = useState<JobOfferFilters>({
        search: "",
        sortBy: "Standard",
    });

    const { jobOffers, isLoading } = useJobOffers(filters);
    const { handleDelete, handleLock } = useJobOfferActions();

    // Pagination setup
    const { currentItems, currentPage, totalPages, setPage } = usePagination({
        items: jobOffers,
        itemsPerPage: 5,
    });

    const handleSearch = (value: string) => {
        setFilters((prev) => ({ ...prev, search: value }));
        setPage(1); // Reset to first page on search
    };

    const handleSort = (value: string) => {
        const newSortValue = value as "Neueste" | "Älteste" | "Standard";
        setFilters((prev) => ({ ...prev, sortBy: newSortValue }));
    };

    const sortOptions = [
        { value: "Standard", label: "Standard" },
        { value: "Neueste", label: "Neueste" },
        { value: "Älteste", label: "Älteste" },
    ];

    return (
        <div className='w-full px-4 py-8 overflow-x-hidden'>
            <PageBreadcrumb pageTitle='Angebote verwalten' />

            <div className='bg-white w-full dark:bg-gray-800 rounded-lg shadow-md p-6'>
                <div className='flex flex-col md:flex-row justify-between gap-4 mb-6'>
                    <div className='flex items-center gap-4'>
                        <Search value={filters.search} onChange={handleSearch} className='md:w-96' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-sm text-gray-500 dark:text-white/90'>Sortieren nach:</p>
                        <Select
                            defaultValue={filters.sortBy}
                            options={sortOptions}
                            onChange={handleSort}
                            className='h-11 rounded-lg border bg-gray-100 w-fit px-4 text-sm dark:bg-gray-900 dark:text-white/90 dark:border-gray-700'
                        />
                    </div>
                </div>

                <JobOffersTable jobOffers={currentItems} filters={filters} isLoading={isLoading} onDelete={handleDelete} onLock={handleLock} />

                {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />}
            </div>
        </div>
    );
};

export default JobOffersPage;
