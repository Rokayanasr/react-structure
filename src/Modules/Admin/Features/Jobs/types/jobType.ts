export interface Salary {
  id: number;
  job_type_id: number;
  amount: string;
}

export interface JobType {
  id: number;
  name: string;
  note: string;
  salaries: Salary[];
}

export type JobTypeRow = {
  id: number;
  name: string;
  note: string;
  salary_1: string;
  salary_2: string;
  salary_3: string;
};



export interface JobTypesResponse {
  status: number;
  success: boolean;
  message: string;
  data: {
    data: JobType[];
  };
}

export interface CreateJobTypeDto {
  name: string;
  note?: string;
  salaries: {
    amount: string;
  }[];
}
