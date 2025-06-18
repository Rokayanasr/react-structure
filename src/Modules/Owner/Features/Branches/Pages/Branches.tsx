import Search from "@/components/common/Search/Search";
import Button from "@/components/ui/button/Button";
import { useState } from "react";
import BranchCard from "../components/BranchCard";
import { useGetAllBranchesQuery } from "@/Modules/Owner/services/branches/branchesApi";
import LoadingState from "@/components/common/LoadingState";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";
import { PlusIcon } from "@/assets/icons";
import { useNavigate } from "react-router-dom";

function Branches() {
    const navigate = useNavigate();
    const [filters, setFilters] = useState<{
        search: string;
        sortBy: string;
    }>({
        search: "",
        sortBy: "Standard",
    });

    // api
    const { data: branches, isLoading: isBranchesLoading } = useGetAllBranchesQuery();
    console.log(branches);

    // loading, empty, error states
    if (isBranchesLoading) {
        return <LoadingState message='Loading branches...' />;
    }

    if (branches?.status === 401 || branches?.status === 404 || branches?.status === 500) {
        return <ErrorState statusCode={branches.status} />;
    }

    const handleSearch = (value: string) => {
        setFilters(prev => ({
            ...prev,
            search: value
        }));
    };

    return (
        <section className='rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6'>
            {/* search and add branch */}
            <div className='flex flex-col md:flex-row justify-between gap-4 mb-6'>
                <Search value={filters.search} onChange={handleSearch} className='md:w-96' />
                <Button onClick={() => {
                    navigate("/branches/create");
                }}>Filiale hinzufügen</Button>
            </div>
            {/* branches cards */}
            {branches?.data?.data?.length === 0 ? (
                <EmptyState
                    title='Fügen Sie Ihre erste Filiale hinzu'
                    message='Keine Filialen gefunden, bitte fügen Sie eine Filiale hinzu, um zu starten.'
                    icon={<PlusIcon className='w-12 h-12' />}
                />
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {branches?.data?.data?.map((branch) => (
                        <BranchCard key={branch.id} branch={branch} />
                    ))}
                </div>
            )}
            {/* pagination */}
        </section>
    );
}

export default Branches;
