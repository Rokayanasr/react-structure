


import Table from "../../../Components/Table"
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import { JobData } from "../types/dashboard.type";


const columns = [
  { key: "Title", label: "Title" },
  { key: "Thumbnail", label: "Thumbnail" },
  { key: "Job title", label: "Job title" },
  { key: "View profile", label: "View profile" },
  { key :"Author", label:"Author"},
  { key:"Status", label:"Status"},
  { key:"Created At", label:"Created At"},
];

const data = [
  {
    Title: "Software Engineer",
    Thumbnail: "",
    "Job title": "Backend Developer",
    "View profile": "View Profile",
    Author: "John Doe",
    Status: "Active",
    "Created At": "2025-01-10"
  },
  {
    Title: "UI/UX Designer",
    Thumbnail: "",
    "Job title": "Designer",
    "View profile": "View Profile",
    Author: "Jane Smith",
    Status: "Inactive",
    "Created At": "2024-12-05"
  },
  {
    Title: "Project Manager",
    Thumbnail: "",
    "Job title": "Project Lead",
    "View profile": "View Profile",
    Author: "Alice Johnson",
    Status: "Active",
    "Created At": "2024-11-20"
  },
  {
    Title: "Marketing Specialist",
    Thumbnail: "",
    "Job title": "Marketing Coordinator",
    "View profile": "View Profile",
    Author: "Bob Brown",
    Status: "Pending",
    "Created At": "2025-02-02"
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


const statusOptions=["All", "Approved", "Pending"];

const dropdowns=[
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



 export default function jobapplicants(){
    return (
        <div>
             <PageMeta
                title='React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template'
                description='This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template'
            />
            <PageBreadcrumb pageTitle='Job Applicants' />
            <div className='min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>


                  <Table columns={columns} data={data} statusOptions={statusOptions} dropdowns={dropdowns} actionConfig={actionConfig} totalPages={0} currentPage={0} selectedRows={[]} setSelectedRows={function (rows: { Title: string; Thumbnail: string; "Job title": string; "View profile": string; Author: string; Status: string; "Created At": string; }[]): void {
            throw new Error("Function not implemented.");
          } }/>
 
            </div>
        </div>
    )
 }
