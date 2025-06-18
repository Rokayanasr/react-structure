import { BranchDetailsModalProps } from "../types/branches.types";
import defaultBranch from "@/assets/owner/branch/default-branch.png";
import defaultBranchDark from "@/assets/owner/branch/default-branch-dark.png";
import { Modal } from "@/components/ui/modal";
import { useTheme } from "@/context/ThemeContext";



export default function BranchDetailsModal({ isOpen, onClose, branch }: BranchDetailsModalProps) {
    const { theme } = useTheme();
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="py-4 md:max-w-3xl">
            <div className="relative">
                {/* Hero Image Section */}
                <div className="h-64 w-full relative">
                    <img
                        src={branch.photo || (theme === 'dark' ? defaultBranchDark : defaultBranch)}
                        alt={branch.branch_name}
                        className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h1 className="absolute bottom-4 text-center w-full text-3xl font-bold text-white">
                        {branch.branch_name}
                    </h1>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-8">
                    {/* Status Badges */}
                    <div className="flex flex-wrap gap-3">
                        <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${branch.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {branch.is_active ? 'Aktiv' : 'Inaktiv'}
                        </span>
                        {branch.wws_software && branch.wws_software.length > 0 && (
                            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                {branch.wws_software.join(', ')}
                            </span>
                        )}
                        {branch.parking && (
                            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                                Parkplatz verfügbar
                            </span>
                        )}
                        {branch.clothes && (
                            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                Kleidung verfügbar
                            </span>
                        )}
                    </div>

                    {/* Main Info Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                Filialcode
                            </h4>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                {branch.branch_code}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                Filialname
                            </h4>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                {branch.branch_name}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                Filialleiter
                            </h4>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                {branch.manager_name}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                Telefonnummer
                            </h4>
                            <p dir="ltr" className="text-lg font-semibold text-gray-900 dark:text-white">
                                {branch.manager_phone}
                            </p>
                        </div>

                        <div className="col-span-2 space-y-2">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                Adresse
                            </h4>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {branch.full_address}
                                </p>
                                <div className="mt-2 flex gap-4 text-sm text-gray-600 dark:text-gray-300">
                                    <span>PLZ: {branch.postal_code}</span>
                                    <span>•</span>
                                    <span>Stadt: {branch.city}</span>
                                </div>
                            </div>
                        </div>

                        {branch.notes && (
                            <div className="col-span-2 space-y-2">
                                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Anmerkungen
                                </h4>
                                <p className="text-lg text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                    {branch.notes}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    );
} 