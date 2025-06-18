import { Branch } from "../types/branches.types";
import defaultBranch from "@/assets/owner/branch/default-branch.png";
import defaultBranchDark from "@/assets/owner/branch/default-branch-dark.png";
import ActionButton from "@/components/common/ActionButton/ActionButton";
import { EyeIcon, PencilIcon, TrashBinIcon } from "@/assets/icons";
import { useState } from "react";
import BranchDetailsModal from "./BranchDetailsModal";
import { useTheme } from "@/context/ThemeContext";
import { useNavigate } from "react-router-dom";

function BranchCard({ branch }: { branch: Branch }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 overflow-hidden dark:bg-gray-800 dark:border-gray-700 group">
                <div className="relative">
                    <img
                        className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105"
                        src={branch.photo || (theme === 'dark' ? defaultBranchDark : defaultBranch)}
                        alt={`${branch.branch_name}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                    <div className="mb-4 text-center">
                        <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {branch.branch_name}
                        </h5>
                        <div className="flex items-center gap-2 flex-wrap justify-center">
                            <span className="px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-lg dark:bg-blue-900 dark:text-blue-300">
                                {branch.branch_code}
                            </span>
                            <span className={`px-2.5 py-1 text-xs font-medium rounded-lg ${
                                branch.is_active 
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                            }`}>
                                {branch.is_active ? 'Aktiv' : 'Inaktiv'}
                            </span>
                        </div>
                        {/* <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {branch.full_address}
                        </p> */}
                    </div>

                    <div className="flex justify-center gap-2 mt-4">
                        <ActionButton
                            onClick={() => setIsModalOpen(true)}
                            title="Details anzeigen"
                            className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200/80 rounded-full p-2"
                            icon={<EyeIcon className='w-4 h-4' />}
                            variant="brand"
                        />
                        <ActionButton
                            onClick={() => {navigate(`/branches/edit/${branch.id}`)}}
                            title="Bearbeiten"
                            className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200/80 rounded-full p-2"
                            icon={<PencilIcon className='w-4 h-4' />}
                            variant="warning"
                        />
                        <ActionButton
                            onClick={() => {}}
                            title="Löschen"
                            className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200/80 rounded-full p-2"
                            icon={<TrashBinIcon className='w-4 h-4' />}
                            variant="error"
                        />
                    </div>
                </div>
            </div>

            <BranchDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                branch={branch}
            />
        </>
    );
}

export default BranchCard;
