import Table from "../../../Components/Table"
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import Button from "@/components/ui/button/Button";
import { JobData } from "../../Jobs/types/dashboard.type";

const columns = [
  { key: "UserName", label: "User Name" },
  { key: "Name", label: "Name" },
  { key: "Email", label: "Email" },
  { key :"Role", label:"Role"},
  { key:"Status", label:"Status"},
];

const data = [
  {
    UserName: "user01",
    Name: "User One",
    Email: "user01@gmail.com",
    Role: "Admin",
    Status: "Active",
  },
  {
    UserName: "user02",
    Name: "User Two",
    Email: "user02@gmail.com",
    Role: "Editor",
    Status: "Inactive",
  },
  {
    UserName: "username123",
    Name: "Test User",
    Email: "username123@test.com",
    Role: "User",
    Status: "Pending",
  },
  {
    UserName: "sample_user",
    Name: "Sample Name",
    Email: "sample_user@email.com",
    Role: "User",
    Status: "Active",
  },
  {
    UserName: "test_user",
    Name: "Test Name",
    Email: "test_user@demo.com",
    Role: "Admin",
    Status: "Suspended",
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

const statusOptions = ["All", "Administrator", "Candidate", "Employer"];

const dropdowns = [
  {
    value: "Bulk actions",
    options: [
      { value: "Delete", label: "Delete" },
      { value: "Edit", label: "Edit" },
    ],
    onChange: (val: string) => console.log("Bulk Action:", val),
  },
  {
    value: "Change role to",
    options: [
      { value: "Administrator", label: "Administrator" },
      { value: "Candidate", label: "Candidate" },
      { value: "Employer", label: "Employer" },
    ],
    onChange: (val: string) => console.log("Change Role:", val),
  },
  {
    value: "View all users",
    options: [
      { value: "Administrator", label: "Administrator" },
      { value: "Candidate", label: "Candidate" },
      { value: "Employer", label: "Employer" },
    ],
    onChange: (val: string) => console.log("View Users:", val),
  },
];

export default function Employers() {
  return (
    <div>
      <PageMeta
        title='React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template'
        description='This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template'
      />
      <PageBreadcrumb pageTitle='Users' />
      <div className='min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>
          <Button
            size="sm"
            variant="primary"
            onClick={() => console.log("Button clicked")}
            disabled={false}
            className="mb-4"
          >
            Add New User
          </Button>

          <Table
            columns={columns}
            data={data}
            statusOptions={statusOptions}
            dropdowns={dropdowns}
            actionConfig={actionConfig}
          />
        </div>
    </div>
  );
}
