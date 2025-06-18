


import Table from "../../../Components/Table"
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import Button from "@/components/ui/button/Button";
import { JobData } from "../types/dashboard.type";


const columns = [
  { key: "Position", label: "Position" },
  { key: "Type", label: "Type" },
  { key: "Location", label: "Location" },
  { key: "Start Date", label: "Start Date" },
  { key: "Expire Date", label: "Expire Date" },
  { key: "Status", label: "Status" },
];

const data = [
  {
    Position: "Software Developer",
    Type: "Full-time",
    Location: "Berlin",
    "Start Date": "2025-01-01",
    "Expire Date": "2025-12-31",
    Status: "Active"
  },
  {
    Position: "Marketing Manager",
    Type: "Part-time",
    Location: "Munich",
    "Start Date": "2024-11-15",
    "Expire Date": "2025-05-15",
    Status: "Closed"
  },
  {
    Position: "Project Coordinator",
    Type: "Freelance",
    Location: "Remote",
    "Start Date": "2025-03-01",
    "Expire Date": "2025-09-01",
    Status: "Active"
  },
];

const actionConfig = {
  showEdit: true,
  showDelete: true,
  showView: true,
  onDelete: (row: JobData) => console.log("Delete:", row),
  onView: (row: JobData) => console.log("View:", row),
  onEdit: (row: JobData) => console.log("Edit:", row),
};

const statusOptions = ["All", "Published", "Pending", "Expired"];

const dropdowns = [
  {
    value: "Bulk actions",
    options: [
      { value: "Edit", label: "Edit" },
      { value: "Delete", label: "Delete" },
      { value: "Approve jobs", label: "Approve jobs" },
      { value: "Expire jobs", label: "Expire jobs" },

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
    ],
    onChange: (val: string) => console.log("Action:", val),
  },
  {
    value: "Types",
    options: [
      { value: "All Types", label: "All Types" },
      { value: "Apotheker / innnen", label: "Apotheker / innnen" },
      { value: "Feststelle", label: "Feststelle" },
      { value: "Nachtdienst", label: "Nachtdienst" },
      { value: "PKA", label: "PKA" },
      { value: "PTA", label: "PTA" },
      { value: "Vertretungsangebot", label: "Vertretungsangebot" }

    ],
    onChange: (val: string) => console.log("Date:", val),
  },
]



import { useState } from "react";

export default function Blank() {
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  return (
    <div>
      <PageMeta
        title='React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template'
        description='This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template'
      />
      <PageBreadcrumb pageTitle='Jobs' />
      <div className='min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>
          <Button
            size="sm"
            variant="primary"
            onClick={() => console.log("Button clicked")}
            disabled={false}
            className="mb-4"
          >
            Add New Job
          </Button>

          <Table
            columns={columns}
            data={data}
            statusOptions={statusOptions}
            dropdowns={dropdowns}
            actionConfig={actionConfig}
            totalPages={0} currentPage={0}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            onBulkApply={() => {}}
            onSearch={() => {}}
          
          />

        </div>
    </div>
  )
}
