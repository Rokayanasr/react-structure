import { useState, useMemo } from 'react';

interface UsePaginationProps<T> {
    items: T[];
    itemsPerPage: number;
    initialPage?: number;
}

interface UsePaginationReturn<T> {
    currentPage: number;
    totalPages: number;
    currentItems: T[];
    setPage: (page: number) => void;
}

export const usePagination = <T>({
    items,
    itemsPerPage,
    initialPage = 1
}: UsePaginationProps<T>): UsePaginationReturn<T> => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Reset to page 1 if items length changes
    useMemo(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [items.length, totalPages, currentPage]);

    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return items.slice(start, end);
    }, [items, currentPage, itemsPerPage]);

    const setPage = (page: number) => {
        if (page < 1) {
            setCurrentPage(1);
        } else if (page > totalPages) {
            setCurrentPage(totalPages);
        } else {
            setCurrentPage(page);
        }
    };

    return {
        currentPage,
        totalPages,
        currentItems,
        setPage
    };
}; 