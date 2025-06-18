import {  EyeIcon } from "@/assets/icons";
import { useState } from "react";

interface JobListing {
  id: string;
  company: string;
  title: string;
  status: 'active' | 'inactive';
}
function JobList() {
    const [jobs] = useState<JobListing[]>([
    {
      id: '1',
      company: 'test offer by worker',
      title: 'Apotheker/-innen',
      status: 'active'
    },
  ]);
  return (
    <div>
        <div className="border rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 bg-gray-50 px-6 py-3 text-md font-bold text-brand-700">
          <div>Job bei</div>
          <div>Status</div>
          <div>Job anzeigen</div>
        </div>
        
        {jobs.map((job) => (
          <div 
            key={job.id} 
            className="grid grid-cols-3 items-center px-6 py-4 "
          >
            <div>
              <div className="font-medium">{job.company}</div>
              <div className="text-sm text-brand-600">{job.title}</div>
            </div>
            <div>
              <div className={`w-8 h-12 rounded-full  border-success-300 border-4 ${job.status === 'active' ? 'bg-success-100' : 'bg-brand-200'}`}></div>
            </div>
            <div>
              <button className="flex items-center justify-center p-2 rounded-full hover:bg-brand-100">
                <EyeIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobList