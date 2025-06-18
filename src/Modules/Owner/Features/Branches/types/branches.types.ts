import { z } from "zod";
import { User } from "@/Modules/Owner/Features/Profile/types/profile.type";

export interface Pharmacy {
    id: number;
    name: string;
}

export interface Branch {
    id: number;
    pharmacy_id: number;
    branch_name: string;
    branch_code: string;
    address: string;
    street_number: string;
    postal_code: string;
    city: string;
    manager_name: string;
    manager_phone: string;
    notes: string;
    photo: File | null;
    is_active: boolean;
    wws_software: string[];
    parking: boolean;
    clothes: boolean;
    full_address: string;
    pharmacy: Pharmacy;
}

export interface BranchesData {
    data: Branch[];
    current_page: number;
    per_page: number;
    total: number;
}

export interface BranchesResponse {
    status: number;
    success: boolean;
    message: string;
    data: BranchesData;
}

export const BranchFormSchema = z.object({
    pharmacy_id: z.number().min(1, { message: "Pharmacy ID is required" }),
    branch_name: z.string().min(1, { message: "Branch name is required" }),
    branch_code: z.string().min(1, { message: "Branch code is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    street_number: z.string().min(1, { message: "Street number is required" }),
    postal_code: z.string().min(1, { message: "Postal code is required" }),
    city: z.string().min(1, { message: "City is required" }),
    manager_name: z.string().min(1, { message: "Manager name is required" }),
    manager_phone: z.string().min(1, { message: "Manager phone is required" })
        .regex(/^[0-9+\-\s()]*$/, { message: "Invalid phone number format" }),
    notes: z.string().optional(),
    photo: z.instanceof(File).optional().nullable(),
    is_active: z.boolean().default(true),
    wws_software: z.array(z.string()).default([]),
    parking: z.boolean().default(false),
    clothes: z.boolean().default(false),
});

export const EditBranchFormSchema = BranchFormSchema.partial();

export type BranchFormData = z.infer<typeof BranchFormSchema>;
export type EditBranchFormData = z.infer<typeof EditBranchFormSchema>;

export interface BranchFormProps {
    mode?: "create" | "edit";
    initialData?: Partial<BranchFormData>;
    onSubmit: (data: BranchFormData | EditBranchFormData) => void;
    pharmacy?: User;
}   

export interface BranchDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    branch: Branch;
}