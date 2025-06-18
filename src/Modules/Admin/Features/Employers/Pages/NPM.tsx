


import Table from "../../../Components/Table"
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import { JobData } from "../../Jobs/types/dashboard.type";


const columns = [
  { key: "pharmacy name", label: "Pharmacy name" },
  { key: "Email", label: "Email" },
  { key: "Phone num", label: "Phone num" },
  { key: "Address", label: "Address" },
  { key: "ZIP / City", label: "ZIP / City" },
  { key: "Required workers", label: "Required workers" },
  { key: "Work type", label: "Work type" },
  { key: "Area of work", label: "Area of work" },
  { key: "Date of setting", label: "Date of setting" },
];

const data = [
  {
    "pharmacy name": "Test Pharmacy 1",
    Email: "pharmacy1@test.com",
    "Phone num": "+123456789",
    Address: "123 Main St",
    "ZIP / City": "11111 / Test City",
    "Required workers": 2,
    "Work type": "Full-time",
    "Area of work": "Dispensary",
    "Date of setting": "2025-05-01"
  },
  {
    "pharmacy name": "Sample Pharmacy 2",
    Email: "sample2@pharma.net",
    "Phone num": "+987654321",
    Address: "456 Side Ave",
    "ZIP / City": "22222 / Exampleville",
    "Required workers": 1,
    "Work type": "Part-time",
    "Area of work": "Customer Service",
    "Date of setting": "2025-05-05"
  },
  {
    "pharmacy name": "Mock Pharmacy 3",
    Email: "mock3@email.com",
    "Phone num": "+1122334455",
    Address: "789 Health Rd",
    "ZIP / City": "33333 / Mocktown",
    "Required workers": 3,
    "Work type": "Shift-based",
    "Area of work": "Stock Management",
    "Date of setting": "2025-05-10"
  }
];


const actionConfig = {
  showEdit: true,
  showDelete: true,
  showView: true,
  onDelete: (row: JobData) => console.log("Delete:", row),
  onView: (row: JobData) => console.log("View:", row),
  onEdit: (row: JobData) => console.log("Edit:", row),
};

const statusOptions = ["All", "Published", "Pending"];

const dropdowns = [
  {
    value: "Bulk actions",
    options: [
      { value: "Edit", label: "Edit" },
      { value: "Delete", label: "Delete" },

    ],
    onChange: (val: string) => console.log("Date:", val),
  },
  {
    value: "Dates",
    options: [
      { value: "All dates", label: "All dates" },
      { value: "Mar 2025", label: "Mar 2025" },
      { value: "Feb 2025", label: "Feb 2025" },
      { value: "Jan 2025", label: "Jan 2025" },
      { value: "Dec 2024", label: "Dec 2024" },
      { value: "Nov 2024", label: "Nov 2024" },
      { value: "Oct 2024", label: "Oct 2024" },
      { value: "Mar 2024", label: "Mar 2024" },
      { value: "Jan 2024", label: "Jan 2024" },

    ],
    onChange: (val: string) => console.log("Action:", val),
  },
]



export default function NPM() {
  return (
    <div>
      <PageMeta
        title='NPM'
        description='NPM- Employers-ExtraPharma'
      />
      <PageBreadcrumb pageTitle='NPM' />
      <div className='min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>

        <Table
          columns={columns}
          data={data}
          theadClassName="text-m pr-2 text-brand-500  dark:text-gray-400 whitespace-nowrap"
          statusOptions={statusOptions}
          dropdowns={dropdowns}
          actionConfig={actionConfig}
        />

      </div>
    </div>
  )
}
