import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

export enum WWS_SOFTWARE {
    ADG = "ADG",
    Abosoft = "Abosoft",
    ASYS = "ASYS",
    CIDA = "CIDA",
    DEOS = "DEOS",
    GAWIS = "GAWIS",
    JUMP = "JUMP",
    Lauer = "Lauer Fischer",
    Pharmatechnik = "Pharmatechnik",
    Prokas = "Prokas",
    andere = "andere",
}

export enum CONTACT_SALUTATION {
    MR = "Mr",
    MRS = "Mrs",
    MS = "Ms",
}

const optionalString = z.string().optional();
const optionalBoolean = z.boolean().optional();
const optionalFile = z.instanceof(File).nullable().optional();

export const profileSchema = z.object({
    // User personal data
    first_name: optionalString,
    last_name: optionalString,
    email: z.string().email("Ungültige E-Mail-Adresse").optional(),
    biographical_info: optionalString,
    profile_picture: optionalFile,
    
    // Pharmacy data
    pharmacy_name: optionalString,
    logo: optionalFile,
    address: optionalString,
    street_number: optionalString,
    postal_code: optionalString,
    city: optionalString,
    phone: optionalString,
    about_us: optionalString,
    additional_info: optionalString,
    contact_salutation: z.nativeEnum(CONTACT_SALUTATION).optional(),
    message: optionalString,
    
    // Boolean values
    clothes: z.union([z.literal(0), z.literal(1)]).optional(),
    parking: z.union([z.literal(0), z.literal(1)]).optional(),
    terms_accepted: optionalBoolean,
    
    // Arrays and files
    wws_software: z.array(z.nativeEnum(WWS_SOFTWARE)).optional(),
});

export type ProfileFormSchema = z.infer<typeof profileSchema>;

export interface Pharmacy {
    id: number;
    name: string;
    address: string;
    street_number: string | null;
    postal_code: string;
    city: string | null;
    phone: string;
    wws_software: WWS_SOFTWARE[];
    additional_info: string;
    message: string;
    terms_accepted: boolean;
    logo: string;
    about_us: string;
    clothes: boolean;
    parking: boolean;
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    profile_completion: number;
    biographical_info: string | null;
    status: string;
    profile_picture: string | null;
    pharmacy: Pharmacy;
    contact_salutation: CONTACT_SALUTATION;
}

export interface UserResponse {
    user: User;
}

export type profileApiResponse = {
    status: string;
    success: boolean;
    message: string;
    data: UserResponse;
};

export type userInfo = {
    first_name: string | undefined;
    last_name: string | undefined;
    email: string | undefined;
    profile_picture: string | null | undefined;
    role: string | undefined;
    profile_completion: number | undefined;
    biographical_info?: string | null | undefined;
    status: string | undefined;
}

// Component Props Types
export interface BaseFormProps {
    form: UseFormReturn<ProfileFormSchema>;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>, field: "profile_picture" | "logo") => void;
}

export type UserFormProps = BaseFormProps;

export interface PharmacyFormProps extends BaseFormProps {
    handleSoftwareChange: (software: WWS_SOFTWARE) => void;
}

// WWS Software Option Type
export interface WWSSoftwareOption {
    value: WWS_SOFTWARE;
    label: string;
}
