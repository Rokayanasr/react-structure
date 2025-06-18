
export interface JobOffersResponse {
    status: number;
    success: boolean;
    message: string;
    data: JobOffer[];
}

export interface JobOfferResponse {
    status: number;
    success: boolean;
    message: string;
    data: JobOffer;
}

export interface Salary {
    id: number;
    amount: string;
    job_type: string;
}

export interface JobOffer {
    id: number;
    pharmacy_id: number;
    pharmacy: Pharmacy;
    branch_id: number | null;
    branch: Branch | null;
    job_type: JobType;
    job_location: JobLocation;
    work_schedule: WorkSchedule[];
    total_days: number;
    working_hours_per_day: number;
    flat_rate_selected: boolean;
    additional_information: string;
    status: string;
    is_available: boolean;
    created_at: string;
    updated_at: string;
    salary: Salary; 
    salary_type_id: number;

}

export interface Pharmacy {
    id: number;
    name: string;
    address: string;
    city: string;
    postal_code: string;
    photo: string;
    job_type: string;
}

export interface Branch {
    id: number;
    name: string;
    address: string;
    city: string;
    postal_code: string;
}

export interface JobType {
    id: number;
    name: string;
    note: string;
}

export interface JobLocation {
    id: number;
    name: string;
}

export interface WorkSchedule {
    day_number: number;
    work_date: string;
    start_time: string;
    end_time: string;
}

