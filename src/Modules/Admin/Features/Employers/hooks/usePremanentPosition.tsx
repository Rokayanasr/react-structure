import { useState } from 'react';
import { useGetPermanentsQuery } from '../services/api/PermanentApi';
import { PermanentPositionTableRow } from '../types/PermanentTypes';

export function usePermanentPositions() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRows, setSelectedRows] = useState<PermanentPositionTableRow[]>([]);
    const [selectedDate, setSelectedDate] = useState<string>('All dates');

    const { data, isLoading, error } = useGetPermanentsQuery({ per_page: 10, page: 1 });

    const permanentPositions = data?.data?.data ?? [];

    const tableData = permanentPositions.map((position) => {
        const entryDate = new Date(position.entry_date);
        return {
            id: position.id,
            qualification: position.qualification,
            pharmacy_name: position.pharmacy.pharmacy_name,
            owner_name: position.pharmacy.owner_name,
            entry_date: entryDate.toLocaleDateString(), // للعرض
            entry_month_label: entryDate.toLocaleString("default", { month: "short", year: "numeric" }), // للمقارنة
            branch_name: position.branch?.branch_name ?? "N/A",
            location_info: position.location_info,
            position_type_label: position.position_type_label,
        };
    });


    const filteredTableData = tableData.filter(row => {
        const matchesSearch =
            row.qualification.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.pharmacy_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.branch_name.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDate =
            selectedDate === "All dates" ||
            row.entry_month_label === selectedDate;

        return matchesSearch && matchesDate;
    });


    const handleSearch = (value: string) => setSearchTerm(value);
    const handleSelectRows = (rows: PermanentPositionTableRow[]) => setSelectedRows(rows);

    const actionConfig = {
        showEdit: false,
        showDelete: false,
        showView: true,
        onDelete: (row: PermanentPositionTableRow) => console.log('Delete:', row),
        onView: (row: PermanentPositionTableRow) => console.log('View:', row),
        onEdit: (row: PermanentPositionTableRow) => console.log('Edit:', row),
    };

    const dropdowns = [
        {
            value: 'Bulk actions',
            options: [{ value: 'Delete', label: 'Delete' }],
            onChange: (val: string) => console.log('Bulk action:', val),
        },
        {
            value: selectedDate,
            options: [
                { value: 'All dates', label: 'All dates' },
                { value: 'Jun 2025', label: 'Jun 2025' },
                { value: 'May 2025', label: 'May 2025' },
                { value: 'Mar 2025', label: 'Mar 2025' },
                { value: 'Feb 2025', label: 'Feb 2025' },
                { value: 'Jan 2025', label: 'Jan 2025' },
                { value: 'Dec 2024', label: 'Dec 2024' },
                { value: 'Nov 2024', label: 'Nov 2024' },
                { value: 'Oct 2024', label: 'Oct 2024' },
                { value: 'Mar 2024', label: 'Mar 2024' },
                { value: 'Jan 2024', label: 'Jan 2024' },
            ],
            onChange: (val: string) => setSelectedDate(val),
        },
    ];

    return {
        tableData: filteredTableData,
        isLoading,
        selectedRows,
        handleSearch,
        handleSelectRows,
        dropdowns,
        actionConfig,
        error,
    };
}
