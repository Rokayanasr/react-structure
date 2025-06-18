
import Table from "../../../Components/Table"
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import { JobData } from "../../Jobs/types/dashboard.type";
import user1 from "../../../../../../dist/images/user/user-01.jpg"


const columns = [
  { key: "Title", label: "Title" },
  { key: "Thumbnail", label: "Thumbnail" },
  { key: "Email", label: "Email" },
  { key: "Date", label: "Date" },
  { key: "Status", label: "Status" },
];

const data = [
  {
    Title: "Candidate 001",
    Thumbnail: user1,
    Email: "candidate001@mail.com",
    Date: "2025-05-01",
    Status: "Shortlisted"
  },
  {
    Title: "Candidate 002",
    Thumbnail: "",
    Email: "candidate002@mail.com",
    Date: "2025-05-03",
    Status: "Interviewed"
  },
  {
    Title: "Candidate 003",
    Thumbnail: "",
    Email: "candidate003@mail.com",
    Date: "2025-05-05",
    Status: "Rejected"
  },
  {
    Title: "Candidate 004",
    Thumbnail: "",
    Email: "candidate004@mail.com",
    Date: "2025-05-06",
    Status: "Pending"
  },
  {
    Title: "Candidate 005",
    Thumbnail: "",
    Email: "candidate005@mail.com",
    Date: "2025-05-07",
    Status: "Hired"
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
      { value: "Edit", label: "Edit" },

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
  {
    value: "All categories",
    options: [
      { value: "Apotheker", label: "Apotheker" },
      { value: "PKA", label: "PKA" },
      { value: "PTA", label: "PTA" },
    ],
    onChange: (val: string) => console.log("Date:", val),
  },
]



export default function Candidates() {
  return (
    <div>
      <PageMeta
        title='Candidates'
        description='Candidates'
      />
      <PageBreadcrumb pageTitle='Candidates' />
      <div className='min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>


        <Table columns={columns} data={data} statusOptions={statusOptions} dropdowns={dropdowns} actionConfig={actionConfig} />

      </div>
    </div>
  )
}
