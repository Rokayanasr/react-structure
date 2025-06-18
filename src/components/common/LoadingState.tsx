interface LoadingStateProps {
    message?: string;
    className?: string;
}

export default function LoadingState({ message = "Wird geladen...", className = "" }: LoadingStateProps) {
    return (
        <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
            <div className="relative">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
                {/* Spinning ring */}
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-brand-500 border-t-transparent"></div>
            </div>
            {message && (
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    {message}
                </p>
            )}
        </div>
    );
} 