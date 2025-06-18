
import Table from "../../../Components/Table"
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { JobData } from "../../Jobs/types/dashboard.type";


const columns = [
  { key: "name", label: "Name" },
];

const data = [
  { name: "Apotheker" },
  { name: "PTA" },
  { name: "PKA" },
];

const actionConfig = {
  showEdit: true,
  showDelete: true,
  showView: true,
  onDelete: (row: JobData) => console.log("Delete:", row),
  onView: (row: JobData) => console.log("View:", row),
  onEdit: (row: JobData) => console.log("Edit:", row),
};

const statusOptions = ["All"];

const dropdowns = [
  {
    value: "Bulk actions",
    options: [
      { value: "Delete", label: "Delete" },

    ],
    onChange: (val: string) => console.log("Date:", val),
  },
]




export default function Categories() {
  return (
    <div>
      <PageMeta
        title='categories'
        description='This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template'
      />
      <PageBreadcrumb pageTitle='Candidate Categories' />
      <div className='min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>
        <div className='mx-auto w-full text-left mb-4'>
          <h2 className="text-brand-500 font-bold mb-2">Add New</h2>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="test name"
            id="location" required={false} />

          <Button
            size="sm"
            variant="primary"
            onClick={() => console.log("Button clicked")}
            disabled={false}
            className="mt-2"
          >
            Add New
          </Button>

        </div>

        <div className='mx-auto w-full text-left rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>
          <Table columns={columns} data={data} statusOptions={statusOptions} dropdowns={dropdowns} actionConfig={actionConfig}/>
        </div>
      </div>
    </div>
  )
}