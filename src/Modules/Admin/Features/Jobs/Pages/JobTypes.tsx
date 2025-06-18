import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import PageMeta from '@/components/common/PageMeta';
import Label from '@/components/form/Label';
import Input from '@/components/form/input/InputField';
import Button from '@/components/ui/button/Button';
import Table from '../../../Components/Table';
import { TableColumn } from '../../../types/types';
import { useJobTypes } from '../hooks/useTypes';
import { JobTypeRow } from '../types/jobType';

const columns: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'note', label: 'Note' },
  { key: 'salary_1', label: 'Salary 1' },
  { key: 'salary_2', label: 'Salary 2' },
  { key: 'salary_3', label: 'Salary 3' },
];

const dropdowns = [
  {
    value: "Bulk actions",
    options: [
      { value: "Delete", label: "Delete" },
    ],
    onChange: (val: string) => console.log("Date:", val),
  },
]

export default function JobTypesPage() {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    tableData,
    isLoading,
    error,
    creatingJobType,
    selectedRows,
    handleSelectRows,
    handleBulkApply,
    handleSearch,
    actionConfig,
  } = useJobTypes();

  return (
    <div>
      <PageMeta title="Job Types Management" description="Manage job types and their salaries" />
      <PageBreadcrumb pageTitle="Job Types" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full text-left mb-4">
          <h2 className="text-brand-500 font-bold mb-2">Add New</h2>

          {/* ✅ النموذج باستخدام React Hook Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label>Name</Label>
              <Input type="text" placeholder="Job Type Name" {...register('name')} />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="mt-2">
              <Label>Note</Label>
              <Input type="text" placeholder="Note" {...register('note')} />
            </div>
            <div className="mt-2">
              <Label>Salary 1</Label>
              <Input type="number" placeholder="100" {...register('salary1')} />
            </div>
            <div className="mt-2">
              <Label>Salary 2</Label>
              <Input type="number" placeholder="100" {...register('salary2')} />
            </div>
            <div className="mt-2">
              <Label>Salary 3</Label>
              <Input type="number" placeholder="100" {...register('salary3')} />
            </div>
            <Button size="sm" variant="primary" type="submit" disabled={creatingJobType} className="mt-2">
              Add New
            </Button>
          </form>
        </div>

        <div className="mx-auto w-full text-left rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
          {error && <div className="text-red-500 mb-2">Fehler beim Laden der Daten aufgetreten</div>}
          <Table <JobTypeRow>
            columns={columns}
            data={tableData}
            actionConfig={actionConfig}
            dropdowns={dropdowns}
            totalPages={0}
            currentPage={0}
            loading={isLoading}
            selectedRows={selectedRows}
            setSelectedRows={handleSelectRows}
            onBulkApply={handleBulkApply}
            onSearch={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}
