import { useState } from 'react';
import { useGetBotensQuery } from '../services/api/BotenApi';
import { BotenRow , Boten } from '../types/BotenTypes';

export const usePharmacies = () => {
  const { data, isLoading, error } = useGetBotensQuery({ per_page: 10, page: 1 });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState<BotenRow[]>([]);


const pharmacies: Boten[] = Array.isArray(data?.data) ? data.data : [];
console.log("Raw API response:", data);


  const tableData: BotenRow[] = pharmacies
    .map((pharmacy) => ({
    id: pharmacy.id,
    pharmacy_name: pharmacy.pharmacy_name,
    email: pharmacy.email,
    telephone: pharmacy.telephone,
    street: pharmacy.street,
    zip_code: `${pharmacy.zip_code} / ${pharmacy.street}`,
    first_name: pharmacy.first_name,
    last_name: pharmacy.last_name,
    gender: pharmacy.gender,
    existing_delivery_area: pharmacy.existing_delivery_area,
    existing_delivery_equipment: pharmacy.existing_delivery_equipment,
   }))
    .filter((row) =>
      row.pharmacy_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filtered data based on search term
    const filteredTableData = tableData.filter((row) => {
        const matchesSearch =
            row.pharmacy_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.telephone.includes(searchTerm) ||
            row.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.zip_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.last_name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });
    const handleSearch = (value: string) => setSearchTerm(value);
    const handleSelectRows = (rows: BotenRow[]) => setSelectedRows(rows);


  const actionConfig = {
    showEdit: false,
    showDelete: false,
    showView: true,
    onView: (row: BotenRow) => console.log("View", row),
    onDelete: () => {},
    onEdit: () => {},
  };

  return {
    tableData: filteredTableData,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    selectedRows,
    setSelectedRows,
    actionConfig,
    handleSearch,
    handleSelectRows,

  };
};
