import Table from "../../../Components/Table"
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import { useReinigung } from "../hooks/useReinigung";
import { ReinigungRow } from "../types/ReinigungTypes";


const columns = [
  { key: 'pharmacy_name', label: 'Pharmacy Name' },
  { key: 'email', label: 'Email' },
  { key: 'telephone', label: 'Phone Number' },
  { key: 'street', label: 'Street Number' },
  { key: 'zip_city', label: 'Zip Code / City' },
  { key: 'first_name', label: 'First Name' },
  { key: 'last_name', label: 'Last Name' },
  { key: 'gender', label: 'Gender' },
  { key: 'room_count', label: 'Rooms' },
  { key: 'sqm', label: 'SQM' },
  { key: 'tasks_should', label: 'Tasks' },
];




export default function Reinigung() {
  const {
    tableData,
    isLoading,
    setSearchTerm,
    selectedRows,
    setSelectedRows,
    actionConfig,
  } = useReinigung();

  return (
    <div>
      <PageMeta
        title='Reinigung Services | Admin Dashboard'
        description='Admin dashboard page to manage Reinigung services.'
      />
      <PageBreadcrumb pageTitle='Reinigung services' />
      <div className='min-h-screen rounded-2xl border  px-5 py-7 border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>
        <Table <ReinigungRow>
          columns={columns}
          data={tableData}
          loading={isLoading}
          onSearch={setSearchTerm}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          actionConfig={actionConfig}
          totalPages={0}
          currentPage={0}
          showCheckbox={false}
          theadClassName="text-m pr-2 text-brand-500  dark:text-gray-400 whitespace-nowrap"

        />

      </div>
    </div>
  )
}
