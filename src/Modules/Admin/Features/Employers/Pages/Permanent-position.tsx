import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import PageMeta from '@/components/common/PageMeta';
import Table from '../../../Components/Table';
import { usePermanentPositions } from '../hooks/usePremanentPosition';
import { PermanentPositionTableRow } from '../types/PermanentTypes';
import { TableColumn } from '@/Modules/Admin/types/types';

const columns: TableColumn[] = [
  { key: "qualification", label: "Profession" },
  { key: "pharmacy_name", label: "Pharmacy Name" },
  { key: "owner_name", label: "Owner Name" },
  { key: "entry_date", label: "Entry Date" },
  { key: "branch_name", label: "Branch" },
  { key: "location_info", label: "Location Info" },
  { key: "position_type_label", label: "Work Type" },
];

export default function PermanentPositionsPage() {
  const {
    tableData,
    isLoading,
    selectedRows,
    handleSearch,
    handleSelectRows,
    dropdowns,
    actionConfig,
  } = usePermanentPositions();

  return (
    <div>
      <PageMeta
        title="Permanent Positions | Admin Dashboard"
        description="Admin dashboard page to manage permanent positions."
      />
      <PageBreadcrumb pageTitle="Permanent Positions" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Table<PermanentPositionTableRow>
          columns={columns}
          data={tableData}
          onSearch={handleSearch}
          loading={isLoading}
          dropdowns={dropdowns}
          actionConfig={actionConfig}
          theadClassName="text-m pr-2 text-brand-500 dark:text-gray-400 whitespace-nowrap"
          selectedRows={selectedRows}
          setSelectedRows={handleSelectRows}
          totalPages={0}
          currentPage={0}
          showCheckbox={false}
        />
      </div>
    </div>
  );
}
