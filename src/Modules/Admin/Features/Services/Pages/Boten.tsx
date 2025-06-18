
import Table from "../../../Components/Table"
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import { usePharmacies } from "../hooks/useBoten";
import { BotenRow } from "../types/BotenTypes";
import { TableColumn } from '@/Modules/Admin/types/types';



const columns: TableColumn[] = [
  { key: "pharmacy_name", label: "Pharmacy Name" },
  { key: "email", label: "Email" },
  { key: "telephone", label: "Phone Number" },
  { key: "street", label: "Street Number" },
  { key: "zip_city", label: "Zip Code / City" },
  { key: "first_name", label: "First Name" },
  { key: "last_name", label: "Last Name" },
  { key: "gender", label: "Gender" },
  { key: "existing_delivery_area", label: "Existing Delivery Area" },
  { key: "existing_delivery_equipment", label: "Existing Delivery Equipment" },
];


export default function Boten() {
  const {
    tableData,
    isLoading,
    // error,
    // searchTerm,
    setSearchTerm,
    selectedRows,
    setSelectedRows,
    actionConfig,
    
  } = usePharmacies();

  return (
    <div>
      <PageMeta title='Pharmacies | Admin Dashboard' description='Admin dashboard page to manage pharmacies.' />
       <PageBreadcrumb pageTitle='Boten services' />
      <div className='min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>
        <Table <BotenRow>
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
  );
}


