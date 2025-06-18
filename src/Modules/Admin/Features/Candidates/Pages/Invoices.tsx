
import Table from "../../../Components/Table"
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import { JobData } from "../../Jobs/types/dashboard.type";


const columns = [
    { key: "first name", label: "first name " },
    { key :"last name ", label:"last name "},
    { key :"Profession", label:"Profession"},
    { key: "Phone num", label: "Phone num" },
    { key:"Gender", label:"Gender"},
    { key:"birth date", label:"birth date"},
    { key:"Street No", label:"Street No"},
    { key:"ZIP / City", label:"ZIP / City"},
    { key:"VAT", label:"VAT"},
    { key:"Iban", label:"Iban"},
];

const data = [
  {
    "first name": "Test",
    "last name ": "User1",
    Profession: "Engineer",
    "Phone num": "+1234567890",
    Gender: "Male",
    "birth date": "1990-01-01",
    "Street No": "12B",
    "ZIP / City": "12345 / Testville",
    VAT: "DE123456789",
    Iban: "DE89123456781234567890"
  },
  {
    "first name": "Sample",
    "last name ": "Client2",
    Profession: "Designer",
    "Phone num": "+9876543210",
    Gender: "Female",
    "birth date": "1985-07-15",
    "Street No": "45A",
    "ZIP / City": "54321 / Exampletown",
    VAT: "FR987654321",
    Iban: "FR7612345678901234567890123"
  },
  {
    "first name": "Demo",
    "last name ": "Person3",
    Profession: "Consultant",
    "Phone num": "+1122334455",
    Gender: "Other",
    "birth date": "1978-03-22",
    "Street No": "99C",
    "ZIP / City": "67890 / Mockcity",
    VAT: "IT123123123",
    Iban: "IT6012345678901234567890123"
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

const statusOptions=["All", "Published", "Pending"];

const dropdowns=[
    {
      value: "Bulk actions",
      options: [
        { value: "Edit", label: "Edit" },
        { value: "Delete", label: "Delete" },

      ],
      onChange: (val: string) => console.log("Date:", val),
    },
  ]



 export default function Invoices(){
    return (
        <div>
             <PageMeta
                title='React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template'
                description='This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template'
            />
            <PageBreadcrumb pageTitle='Invoices' />
            <div className=' rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>


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
