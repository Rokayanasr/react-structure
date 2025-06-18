export interface SearchProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export const yesNoOptions = [
    { value: "Ja", label: "Ja" },
    { value: "Nein", label: "Nein" },
];
