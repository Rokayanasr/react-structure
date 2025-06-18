import { PaginationProps } from "@/constants/helpers.const";

    const Pagination = ({ currentPage, totalPages, onPageChange, className = "" }: PaginationProps) => {
    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // First page
        if (startPage > 1) {
            pages.push(
                <button key={1} onClick={() => onPageChange(1)} className='px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700'>
                    1
                </button>
            );
            if (startPage > 2) {
                pages.push(
                    <span key='start-ellipsis' className='px-2'>
                        ...
                    </span>
                );
            }
        }

        // Page numbers
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`px-3 py-1 rounded-md ${currentPage === i ? "bg-brand-500 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
                    {i}
                </button>
            );
        }

        // Last page
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(
                    <span key='end-ellipsis' className='px-2'>
                        ...
                    </span>
                );
            }
            pages.push(
                <button key={totalPages} onClick={() => onPageChange(totalPages)} className='px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700'>
                    {totalPages}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className={`flex items-center justify-center gap-2 mt-4 ${className}`}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className='px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'>
                ←
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className='px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'>
                →
            </button>
        </div>
    );
};

export default Pagination;
