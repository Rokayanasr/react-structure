import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import {
  useCreateJobLocationMutation,
  useDeleteJobLocationMutation,
  useGetJobLocationQuery,
  useUpdateJobLocationMutation,
} from '../services/Api/LocationApis';
import { locationData } from '../types/location.types';
import { TableRowData } from '../../../types/types';

const schema = z.object({
  name: z.string().min(1, 'Location name is required'),
});

type FormData = z.infer<typeof schema>;

export const useJobLocations = () => {
  const [createJobLocation] = useCreateJobLocationMutation();
  const [updateJobLocation] = useUpdateJobLocationMutation();
  const [deleteJobLocation] = useDeleteJobLocationMutation();
  const { data, isLoading, refetch, error } = useGetJobLocationQuery({ per_page: 10, page: 1 });

  const [searchTerm, setSearchTerm] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedRows, setSelectedRows] = useState<locationData[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: '' },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await createJobLocation(data).unwrap();
      setShowSuccess(true);
      reset();
      refetch();
      setTimeout(() => setShowSuccess(false), 3000);
    } catch {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const locationsArray = Array.isArray(data?.data?.data)
    ? data.data.data
    : data?.data
    ? [data.data]
    : [];

  const filteredTableData = locationsArray
    .map(location => ({ id: location.id, name: location.name }))
    .filter(location => location.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearch = (value: string) => setSearchTerm(value);

  const handleBulkApply = async ({ dropdownValues, selectedRows }: { dropdownValues: string[]; selectedRows: TableRowData[] }) => {
    if (dropdownValues.includes('Delete')) {
      if (selectedRows.length === 0) {
        alert('Please select at least one row to delete.');
        return;
      }
      try {
        for (const row of selectedRows) {
          if (typeof row.id === 'number') {
            await deleteJobLocation({ id: row.id.toString() }).unwrap();
          }
        }
        setSelectedRows([]);
        refetch();
      } catch (error) {
        alert('Failed to delete some locations.');
        console.error(error);
      }
    }
  };

  const actionConfig = {
    showEdit: true,
    showDelete: true,
    showView: false,
    onDelete: async (row: locationData) => {
      if (typeof row.id === 'number') {
        try {
          await deleteJobLocation({ id: row.id.toString() }).unwrap();
          refetch();
        } catch {
          alert('فشل الحذف!');
        }
      }
    },
    onEdit: async (row: locationData) => {
      if (typeof row.id !== 'number') return alert('ID غير صالح');
      try {
        const updatedPayload = { name: row.name };
        await updateJobLocation({ id: row.id, data: updatedPayload }).unwrap();
        refetch();
      } catch (error) {
        alert('فشل التعديل!');
        console.error('Error updating location:', error);
      }
    },
  };

  const dropdowns = [
    {
      value: 'Bulk actions',
      options: [{ value: 'Delete', label: 'Delete' }],
      onChange: (val: string) => console.log('Dropdown:', val),
    },
  ];

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    tableData: filteredTableData,
    isLoading,
    error,
    showSuccess,
    showError,
    selectedRows,
    setSelectedRows,
    handleBulkApply,
    handleSearch,
    actionConfig,
    dropdowns,
  };
};