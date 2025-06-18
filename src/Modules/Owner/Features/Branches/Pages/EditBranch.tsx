import { useParams } from "react-router-dom";
import BranchForm from "../components/BranchForm";
import { useGetBranchByIdQuery } from "@/Modules/Owner/services/branches/branchesApi";
import LoadingState from "@/components/common/LoadingState";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";
import { BranchFormData, EditBranchFormData } from "../types/branches.types";
import { useUpdateBranchMutation } from "@/Modules/Owner/services/branches/branchesApi";

function EditBranch() {
    const { id } = useParams();
    const { data: branch, isLoading } = useGetBranchByIdQuery(Number(id));
    const [updateBranch, { isLoading: isUpdating }] = useUpdateBranchMutation();
    if (isLoading) return <LoadingState message='Loading branch data...' />;

    if (!branch?.data) return <EmptyState title='Branch not found' message='The branch you are looking for does not exist.' />;

    // error state
    if (branch?.status == 404 || branch?.status == 403) return <ErrorState statusCode={branch?.status} />;

    const handleFormSubmit = (data: BranchFormData | EditBranchFormData) => {
        console.log(data);
        if (data.photo) {
            const formData = new FormData();
            formData.append("photo", data.photo as File);
            formData.append("branch_name", data.branch_name || ""   );
            formData.append("branch_code", data.branch_code || "");
            formData.append("address", data.address || "");
            formData.append("street_number", data.street_number || "");
            formData.append("postal_code", data.postal_code || "");
            formData.append("city", data.city || "");
            formData.append("manager_name", data.manager_name || "");
            formData.append("manager_phone", data.manager_phone || "");
            formData.append("notes", data.notes || "");
            // formData.append("wws_software", data.wws_software || []);
            // formData.append("parking", data.parking || false);
            // formData.append("clothes", data.clothes || false);
            // onSubmit(formData);
            updateBranch({ id: Number(id), ...formData })
                .unwrap()
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log(data);
        }
    };

    return (
        <section className='rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6'>
            <h1 className='text-2xl font-bold'>Edit Branch</h1>
            <BranchForm mode='edit' onSubmit={handleFormSubmit} initialData={branch?.data} />
        </section>
    );
}

export default EditBranch;
