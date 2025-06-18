import { ReactNode } from 'react';

interface ActionButtonProps {
    onClick: () => void;
    title: string;
    icon: ReactNode;
    variant?: 'error' | 'brand' | 'warning';
    className?: string;
}

const ActionButton = ({ onClick, title, icon, variant = 'brand', className }: ActionButtonProps) => {
    // const getHoverColorClass = () => {
    //     switch (variant) {
    //         case 'error':
    //             return 'hover:text-red-600 dark:hover:text-red-500';
    //         case 'warning':
    //             return 'hover:text-yellow-600 dark:hover:text-yellow-500';
    //         default:
    //             return 'hover:text-brand-600 dark:hover:text-brand-500';
    //     }
    // };

    return (
        <button
            onClick={onClick}
            className={`p-2 text-gray-500 dark:text-gray-400 active:scale-95 ${className} transition-colors hover:text-gray-700 dark:hover:text-gray-300`}
            title={title}
        >
            {icon}
        </button>
    );
};

export default ActionButton; 