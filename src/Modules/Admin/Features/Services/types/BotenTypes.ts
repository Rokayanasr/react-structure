export interface BotenRow {
  id: number;
  pharmacy_name: string;
  email: string;
  telephone: string;
  street: string;
  zip_code: string;
  first_name: string;
  last_name: string;
  gender: string;
  existing_delivery_area: string;
  existing_delivery_equipment: string;
}


export interface Boten {
  id: number;
  pharmacy_name: string;
  email: string;
  telephone: string;
  street: string;
  first_name: string;
  last_name: string;
  gender: string;
  zip_code: string;
  existing_delivery_area: string;
  existing_delivery_equipment: string;
  existing_software: string;
  approved_ABG_data_protection: number; // أو boolean إذا بتحولها منطقيًا
  created_at: string; // يمكنك تحويلها لـ Date لاحقًا حسب الحاجة
  updated_at: string;
}

export interface BotenResponse {
  status: number;
  success: boolean;
  message: string;
  data: Boten[];
}
