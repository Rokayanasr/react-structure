import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useGetJobTypesQuery,
  useCreateJobTypeMutation,
  useDeleteJobTypeMutation,
  useUpdateJobTypeMutation,
} from '../services/Api/JobsApi';
import { CreateJobTypeDto, JobTypeRow } from '../types/jobType';
import { TableRowData } from '../../../types/types';

const schema = z.object({
  name: z.string().min(1, 'name is required'),
  note: z.string().optional(),
  salary1: z.string().optional(),
  salary2: z.string().optional(),
  salary3: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export const useJobTypes = () => {
  const { data, isLoading, error, refetch } = useGetJobTypesQuery({ per_page: 5, page: 1 });
  const [createJobType, { isLoading: creatingJobType }] = useCreateJobTypeMutation();
  const [deleteJobType] = useDeleteJobTypeMutation();
  const [updateJobType] = useUpdateJobTypeMutation();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState<JobTypeRow[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const jobTypes = data?.data?.data ?? [];

  const tableData = jobTypes.map((job) => ({
    id: job.id,
    name: job.name,
    note: job.note,
    salary_1: job.salaries?.[0]?.amount ?? '-',
    salary_2: job.salaries?.[1]?.amount ?? '-',
    salary_3: job.salaries?.[2]?.amount ?? '-',
  }));

  const onSubmit = async (data: FormData) => {
    const salaries = [data.salary1, data.salary2, data.salary3]
      .filter((s): s is string => !!s)
      .map((s) => ({ amount: s }));

    if (salaries.length === 0) {
      alert('Mindestens ein Gehalt muss eingegeben werden');
      return;
    }

    const payload: CreateJobTypeDto = {
      name: data.name,
      note: data.note || '',
      salaries,
    };

    try {
      await createJobType(payload).unwrap();
      refetch();
      reset();
      setSearchTerm('');
    } catch (error) {
      alert('Hinzufügen fehlgeschlagen!');
      console.error(error);
    }
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleBulkApply = async ({
    dropdownValues,
    selectedRows,
  }: {
    dropdownValues: string[];
    selectedRows: TableRowData[];
  }) => {
    if (dropdownValues.includes('Delete')) {
      if (selectedRows.length === 0) {
        alert('Please select at least one row to delete.');
        return;
      }

      try {
        for (const row of selectedRows) {
          if (typeof row.id === 'number') {
            await deleteJobType(row.id).unwrap();
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

  const handleSelectRows = (rows: JobTypeRow[]) => {
    setSelectedRows(rows);
  };

  const actionConfig = {
    showEdit: true,
    showDelete: true,
    showView: true,
    onDelete: async (row: JobTypeRow) => {
      if (typeof row.id === 'number') {
        try {
          await deleteJobType(row.id).unwrap();
          refetch();
        } catch {
          alert('Löschen fehlgeschlagen!');
        }
      }
    },
    onEdit: async (row: JobTypeRow) => {
      if (typeof row.id !== 'number') return alert('Ungültige ID');

      try {
        const updatedPayload: CreateJobTypeDto = {
          name: row.name,
          note: row.note,
          salaries: [
            { amount: row.salary_1 },
            { amount: row.salary_2 },
            { amount: row.salary_3 },
          ].filter((s) => s.amount),
        };

        await updateJobType({ id: row.id, data: updatedPayload }).unwrap();
        refetch();
      } catch (error) {
        alert('Fehler beim Aktualisieren!');
        console.error('Error updating job type:', error);
      }
    },
  };

  const filteredTableData = tableData.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    register,
    handleSubmit,
    onSubmit,
    reset,
    errors,
    tableData: filteredTableData,
    isLoading,
    error,
    creatingJobType,
    selectedRows,
    handleSelectRows,
    handleBulkApply,
    handleSearch,
    actionConfig,
  };
};
