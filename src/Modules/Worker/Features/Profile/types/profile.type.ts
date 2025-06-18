import { z } from "zod";

export type ProfileFormData = {
    first_name: string;
    last_name: string;
    gender: "Herr" | "Frau";
    phone: string;
    pharmacyName: string;
    address?: string;
    zipCode: string;
    cashProgram?: string;
    notes?: string;
    aboutPharmacy?: string;
    isUniform: boolean;
    isParking: boolean;
    message: boolean;
};
export type User = {
        id: number;
        user_id: number;
        email: string;
        first_name: string;
        last_name: string;
        nick_name: string | null;
        display_name: string | null;
        biographical_info: string | null;
        status: number;
        salutation: string;
        address: string;
        postal_code: string;
        city: string;
        contact_salutation: string | null;
        phone: string;
        cv: string;
        certificate: string;
        terms_accepted: number;
        wws_software: string[];
        pharmacy_street_number: string | null;
        iam: string;
        Experience: string | null;
        vat_liable: boolean;
        tax_number: string;
        vat_id: string;
        distance: string;
        work_type: string;
        languages: string[];
        medical_certificate: boolean;
        days: string[];
        photo: string;
        iban: string;
created_at: string;
updated_at: string;

};
interface UserResponse {
    user: User;
}


export type ProfileResponse = {
    status: number;
    success: boolean;
    message: string;
  data: UserResponse;
    
}

export type profileApiRequest = {
    
    email: string;
    first_name: string;
    last_name: string;
    nick_name: string | null;
    display_name: string | null;
    biographical_info: string | null;
    status: number;
    salutation: string;
    address: string;
    postal_code: string;
    city: string;
    contact_salutation: string | null;
    phone: string;
    cv: string;
    certificate: string;
    terms_accepted: number;
    wws_software: string[];
    pharmacy_street_number: string | null;
    iam: string;
    Experience: string | null;
    vat_liable: boolean;
    tax_number: string;
    vat_id: string;
    distance: string;
    work_type: string;
    languages: string[];
    medical_certificate: boolean;
    days: string[];
    iban: string;

}

export type profileInitialState = {
    profile: User | null;
   
}


export const profileSchema = z.object({
  email: z.string().email("Ungültige E-Mail-Adresse").optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  nick_name: z.string().nullable().optional(),
  display_name: z.string().nullable().optional(),
  pharmacy_street_number: z.string().nullable().optional(),
  biographical_info: z.string().nullable().optional(),
  status: z.number().optional(),
  salutation: z.string().optional(),
  address: z.string().optional(),
  postal_code: z.string().optional(),
  city: z.string().optional(),
  contact_salutation: z.string().nullable().optional(),
  phone: z.string().optional(),
  cv: z.string().optional(),
  certificate: z.string().optional(),
  terms_accepted: z.number().optional(),
  wws_software: z.array(z.string()).optional(),
  iam: z.string().optional(),
  // ... existing code ...
  Experience: z.string().nullable().optional(),
  vat_liable: z.boolean().optional(),
  tax_number: z.string().optional(),
  vat_id: z.string().optional(),
  distance: z.string().optional(),
  work_type: z.string().optional(),
  languages: z.array(z.string()).optional(),
  medical_certificate: z.boolean().optional(),
  days: z.array(z.string()).optional(),
  iban: z.string().optional(),
});

export type ProfileFormSchema = z.infer<typeof profileSchema>;