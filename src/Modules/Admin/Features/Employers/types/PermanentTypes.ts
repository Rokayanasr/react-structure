export interface Pharmacy {
  id: number;
  pharmacy_name: string;
  owner_name: string;
  phone: string;
  address: string;
}

export interface Branch {
  id: number;
  branch_name: string;
  branch_code: string;
  address: string;
  city: string;
  manager_name: string;
  manager_phone: string;
}

export type PositionType = "full_time" | "part_time" | string; 

export type JobType = "branch" | "main_pharmacy" | string;

export interface PermanentPosition {
  id: number;
  pharmacy_id: number;
  branch_id: number | null;
  entry_date: string; 
  position_type: PositionType;
  position_type_label: string;
  qualification: string;
  description: string;
  terms_accepted: number;
  created_at: string;
  updated_at: string;
  type: JobType;
  pharmacy: Pharmacy;
  branch: Branch | null;
  location_info: string;
}

export interface PermanentPositionTableRow {
  id: number;
  qualification: string;
  pharmacy_name: string;
  owner_name: string;
  entry_date: string;
  branch_name: string;
  location_info: string;
  position_type_label: string;
};


export interface PermanentPositionsResponse {
  length: number;
  status: number;
  success: boolean;
  message: string;
  data: {
    data: PermanentPosition[];
  };
}
