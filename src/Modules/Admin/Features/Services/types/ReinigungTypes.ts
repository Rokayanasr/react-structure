export interface Reinigung {
  id: number;
  pharmacy_name: string;
  email: string;
  telephone: string;
  first_name: string;
  last_name: string;
  street: string;
  owner: string | null;
  zip_code: string;
  city: string;
  nickname: string | null;
  room_count: number;
  gender: string;
  sqm: number;
  tasks_should: string;
  approved_ABG_data_protection: boolean;
  created_at: string;
  updated_at: string;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface ReinigungPaginatedData {
  data: Reinigung[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: PaginationMeta;
}

export interface ReinigungResponse {
  status: number;
  success: boolean;
  message: string;
  data: ReinigungPaginatedData;
}
export interface ReinigungRow {
  id: number;
  pharmacy_name: string;
  email: string;
  telephone: string;
  first_name: string;
  last_name: string;
  street: string;
  zip_code: string;
  city: string;
  nickname: string | null;
  room_count: number;
  sqm: number;
  tasks_should: string;
}