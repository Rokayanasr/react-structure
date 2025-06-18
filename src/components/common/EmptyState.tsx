import { ReactNode } from "react";

interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    message?: string;
    className?: string;
}

export default function EmptyState({ 
    icon, 
    title, 
    message,
    className = "" 
}: EmptyStateProps) {
    return (
        <div className={`flex flex-col items-center justify-center p-8 text-center ${className}`}>
            {icon && (
                <div className="mb-4 text-gray-400 dark:text-gray-100">
                    {icon}
                </div>
            )}
            <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                {title}
            </h3>
            {message && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {message}
                </p>
            )}
        </div>
    );
} 