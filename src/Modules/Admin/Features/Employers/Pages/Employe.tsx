
import Table from "../../../Components/Table"
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import { JobData } from "../../Jobs/types/dashboard.type";


const columns = [
  { key: "Title", label: "Title" },
  { key: "Thumbnail", label: "Thumbnail" },
  { key: "Email", label: "Email" },
  { key: "Date", label: "Date" },
];

const data = [
  {
    Title: "Employer 001",
    Thumbnail: "",
    Email: "employer001@company.com",
    Date: "2025-04-01"
  },
  {
    Title: "Employer 002",
    Thumbnail: "",
    Email: "employer002@company.com",
    Date: "2025-04-05"
  },
  {
    Title: "Employer 003",
    Thumbnail: "",
    Email: "hr.employer003@test.org",
    Date: "2025-04-10"
  },
  {
    Title: "Employer 004",
    Thumbnail: "",
    Email: "info004@employer.net",
    Date: "2025-04-15"
  },
  {
    Title: "Employer 005",
    Thumbnail: "",
    Email: "contact005@bizmail.com",
    Date: "2025-04-20"
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
      { value: "Delete", label: "Delete" },

    ],
    onChange: (val: string) => console.log("Date:", val),
  },
  {
    value: "Dates",
    options: [
      { value: "All dates", label: "All dates" },
      { value: "Mar 2025", label: "Mar 2025" },
      { value: "Dec 2024", label: "Dec 2024" },
      { value: "Nov 2024", label: "Nov 2024" },
      { value: "Sep 2024", label: "Sep 2024" },
      { value: "Jul 2024", label: "Jul 2024" },
      { value: "May 2024", label: "May 2024" },
      { value: "Apr 2024", label: "Apr 2024" },
      { value: "Feb 2024", label: "Feb 2024" },
      { value: "Dec 2023", label: "Dec 2023" },
      { value: "Oct 2023", label: "Oct 2023" },
      { value: "Sep 2023", label: "Sep 2023" },
      { value: "Aug 2023", label: "Aug 2023" },
    ],
    onChange: (val: string) => console.log("Action:", val),
  },
]



export default function Employers() {
  return (
    <div>
      <PageMeta
        title='Employes | ExtraPharma'
        description='Employes'
      />
      <PageBreadcrumb pageTitle='Employers' />
      <div className='min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>

        <Table columns={columns} data={data} statusOptions={statusOptions} dropdowns={dropdowns} actionConfig={actionConfig} />

      </div>
    </div>
  )
}
