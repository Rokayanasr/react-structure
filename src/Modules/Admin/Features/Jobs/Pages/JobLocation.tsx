import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import PageMeta from '@/components/common/PageMeta';
import Label from '@/components/form/Label';
import Input from '@/components/form/input/InputField';
import Button from '@/components/ui/button/Button';
import Table from '../../../Components/Table';
import { useJobLocations } from '../hooks/useLocation';
import { locationData } from '../types/location.types';
import { TableColumn } from '../../../types/types';



const columns: TableColumn[] = [
  { key: "name", label: "Name" },
];


export default function JobLocationsPage() {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    tableData,
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
  } = useJobLocations();

  return (
    <div>
      <PageMeta title="Job Locations" description="Manage job locations in the system" />
      <PageBreadcrumb pageTitle="Job Locations" />

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full text-left mb-4">
          <h2 className="text-brand-500 font-bold mb-2">Add New</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Enter location name"
              {...register('name')}
              error={!!errors.name}
              hint={errors.name?.message}
            />
            <Button type="submit" className="mt-4" isLoading={isLoading}>
              Add Location
            </Button>
          </form>
          {showSuccess && <p className="text-green-500">Location added successfully</p>}
          {showError && <p className="text-red-500">Error adding location</p>}
        </div>

        <div className="mx-auto w-full text-left rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
          {error && <div className="text-red-500 mb-2">Error fetching data.</div>}
          <Table <locationData>
            columns={columns}
            data={tableData}
            actionConfig={actionConfig}
            dropdowns={dropdowns}
            totalPages={0}
            currentPage={0}
            loading={isLoading}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            onBulkApply={handleBulkApply}
            onSearch={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}
