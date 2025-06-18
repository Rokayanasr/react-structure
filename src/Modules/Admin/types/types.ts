// Table column definition
export interface TableColumn {
  key: string;
  label: string;
}

// Dropdown option
export interface TableSelectOption {
  value: string;
  label: string;
}

// Dropdown definition
export interface TableDropdown {
  value: string;
  options: TableSelectOption[];
  onChange?: (value: string) => void;
}

// Generic row data for the table
export interface TableRowData {
  id?: string | number;
    Thumbnail?: string;

  // [key: string]: any;
}

// Table action config
export interface TableActionConfig<T = TableRowData> {
  showEdit?: boolean;
  showDelete?: boolean;
  showView?: boolean;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  onView?: (row: T) => void;
}

// Table props (generic)
export interface TableProps<T = TableRowData> {
  columns: TableColumn[];
  data: T[];
  totalPages: number;
  currentPage: number;
  loading?: boolean;
  statusOptions?: string[];
  dropdowns?: TableDropdown[];
  onBulkApply?: (args: { dropdownValues: string[]; selectedRows: T[] }) => void;
  theadClassName?: string;
  actionConfig?: TableActionConfig<T>;
  showCheckbox?: boolean;
  selectedRows?: T[]; // الصفوف المحددة
  onSelectRows?: (rows: T[]) => void; // عند اختيار صفوف جديدة
  onPageChange?: (page: number) => void;
  onSearch?: (search: string) => void;
}
