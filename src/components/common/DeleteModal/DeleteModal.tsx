import { TrashBinIcon } from "@/assets/icons";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal";

interface DeleteModalProps {
    isOpen?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
    title?: string;
    message?: string;
    itemName?: string;
    isLoading?: boolean;
}

const DeleteModal = ({
    isOpen,
    onConfirm,
    onCancel,
    title = "Löschen bestätigen",
    message = "Sind Sie sicher, dass Sie dieses Element löschen möchten?",
    itemName,
    isLoading = false,
}: DeleteModalProps) => {
    return (
        <Modal 
            isOpen={isOpen || false}
            onClose={onCancel || (() => {})}
            className="mx-4 sm:mx-auto max-w-md w-full"
        >
            <div className="p-4 sm:p-6">
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-error-50 dark:bg-error-900/20 flex items-center justify-center flex-shrink-0">
                        <TrashBinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-error-600 dark:text-error-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white leading-tight">{title}</h3>
                </div>

                <div className="mb-4 sm:mb-6">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {itemName ? message.replace("dieses Element", `"${itemName}"`) : message}
                    </p>
                </div>

                <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3">
                    <Button 
                        variant="outline" 
                        onClick={onCancel} 
                        disabled={isLoading}
                        className="w-full sm:w-auto"
                    >
                        Abbrechen
                    </Button>
                    <Button 
                        variant="primary" 
                        color="error" 
                        onClick={onConfirm} 
                        isLoading={isLoading}
                        className="w-full sm:w-auto"
                    >
                        Löschen
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteModal;
