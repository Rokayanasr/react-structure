import { useState } from 'react';
import { useGetReinigungsQuery } from '../services/api/ReinigungApi';
import { ReinigungRow } from '../types/ReinigungTypes';

export const useReinigung = () => {
  const { data, isLoading, error } = useGetReinigungsQuery({ page: 1, per_page: 10 });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState<ReinigungRow[]>([]);

  const pharmacies = data?.data?.data ?? [];

  const tableData = pharmacies
    .map((pharmacy) => ({
      id: pharmacy.id,
      pharmacy_name: pharmacy.pharmacy_name,
      email: pharmacy.email,
      telephone: pharmacy.telephone,
      street: pharmacy.street,
      zip_city: `${pharmacy.zip_code} / ${pharmacy.city}`,
      zip_code: pharmacy.zip_code,
      city: pharmacy.city,
      first_name: pharmacy.first_name,
      last_name: pharmacy.last_name,
      gender: pharmacy.gender,
      room_count: pharmacy.room_count,
      sqm: pharmacy.sqm,
      tasks_should: pharmacy.tasks_should,
      nickname: pharmacy.nickname ?? '',
    }))
    .filter((row) => row.pharmacy_name.toLowerCase().includes(searchTerm.toLowerCase()));

    const filteredTableData = tableData.filter(row => {
        const matchesSearch =   
            row.pharmacy_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.telephone.includes(searchTerm) ||
            row.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.last_name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    const handleSearch = (value: string) => setSearchTerm(value);
    const handleSelectRows = (rows: ReinigungRow[]) => setSelectedRows(rows);

  const actionConfig = {
    showEdit: false,
    showDelete: false,
    showView: true,
    onView: (row: ReinigungRow) => console.log('View', row),
    onDelete: () => {},
    onEdit: () => {},
  };

  return {
    tableData: filteredTableData,
    handleSearch,
    handleSelectRows,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    selectedRows,
    setSelectedRows,
    actionConfig,
  };
};