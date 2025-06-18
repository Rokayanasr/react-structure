import { JobOffer, JobOfferFilters } from "../types/jobOffer.type";
import { EyeIcon, LockIcon, TrashBinIcon, SortIcon } from "@/assets/icons";
import Badge from "@/components/ui/badge/Badge";
import { useNavigate } from "react-router-dom";
import { setSelectedJobOffer } from "../services/state/jobOfferSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DeleteModal from "@/components/common/DeleteModal/DeleteModal";
import ActionButton from "@/components/common/ActionButton/ActionButton";

interface JobOffersTableProps {
    jobOffers: JobOffer[];
    filters: JobOfferFilters;
    isLoading: boolean;
    onDelete: (id: string) => void;
    onLock: (id: string) => void;
}

const JobOffersTable = ({ jobOffers, filters, isLoading, onLock }: JobOffersTableProps) => {
    const navigate = useNavigate();
    const disapatch = useDispatch();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleViewJobOffer = (jobOffer: JobOffer) => {
        disapatch(setSelectedJobOffer(jobOffer));
        navigate("details");
    };
    const filteredOffers = jobOffers
        .filter((offer) => offer.title.toLowerCase().includes(filters.search.toLowerCase()) || offer.type.toLowerCase().includes(filters.search.toLowerCase()))
        .sort((a, b) => {
            const dateA = new Date(a.publishedAt);
            const dateB = new Date(b.publishedAt);
            return filters.sortBy === "Neueste" ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
        });

    if (isLoading) {
        return (
            <div className='flex justify-center items-center py-8'>
                <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500'></div>
            </div>
        );
    }

    if (filteredOffers.length === 0) {
        return <div className='text-center py-8 text-gray-500 dark:text-gray-400'>Keine Angebote gefunden</div>;
    }

    return (
        <div className='overflow-x-auto'>
            <table className='w-full'>
                <thead className='bg-gray-100 dark:bg-gray-800'>
                    <tr className='border-b dark:border-gray-700'>
                        <th className='text-left py-4 px-4 text-sm font-medium text-gray-600 dark:text-gray-300'>
                            <div className='flex items-center gap-2'>
                                Job bei
                                <SortIcon className='w-4 h-4' />
                            </div>
                        </th>
                        <th className='text-left py-4 px-4 text-sm font-medium text-gray-600 dark:text-gray-300'>
                            <div className='flex items-center gap-2'>
                                Arbeitstag
                                <SortIcon className='w-4 h-4' />
                            </div>
                        </th>
                        <th className='text-left py-4 px-4 text-sm font-medium text-gray-600 dark:text-gray-300'>Status</th>
                        <th className='text-left py-4 px-4 text-sm font-medium text-gray-600 dark:text-gray-300'>Aktionen</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOffers.map((offer) => (
                        <tr key={offer.id} className='border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50'>
                            <td className='py-4 px-4'>
                                <div>
                                    <p className='font-medium text-gray-900 dark:text-white'>{offer.title}</p>
                                    <p className='text-sm text-gray-500 dark:text-gray-400'>{offer.type}</p>
                                </div>
                            </td>
                            <td className='py-4 px-4 text-gray-600 dark:text-gray-300'>{offer.startDate}</td>
                            <td className='py-4 px-4'>
                                <Badge color={offer.status === "Veröffentlicht" ? "success" : "warning"}>{offer.status}</Badge>
                            </td>
                            <td className='py-4 px-4'>
                                <div className='flex justify-start gap-2'>
                                    <ActionButton
                                        onClick={() => setIsDeleteModalOpen(true)}
                                        title="Löschen"
                                        icon={<TrashBinIcon className='w-5 h-5' />}
                                        variant="error"
                                    />
                                    <ActionButton
                                        onClick={() => handleViewJobOffer(offer)}
                                        title="Ansehen"
                                        className="bg-brand-500 rounded-lg p-4"
                                            icon={<EyeIcon className='w-5 h-5' />}
                                        variant="brand"
                                    />
                                    <ActionButton
                                        onClick={() => onLock(offer.id)}
                                        title="Sperren"
                                        className="bg-brand-500 rounded-lg p-4"
                                        icon={<LockIcon className='w-5 h-5' />}
                                        variant="warning"
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <DeleteModal isOpen={isDeleteModalOpen} onConfirm={() => setIsDeleteModalOpen(false)} onCancel={() => setIsDeleteModalOpen(false)} />
        </div>
    );
};

export default JobOffersTable;

