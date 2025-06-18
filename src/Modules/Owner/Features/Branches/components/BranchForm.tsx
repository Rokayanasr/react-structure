import { useForm } from "react-hook-form";
import { BranchFormProps, BranchFormSchema, EditBranchFormSchema, BranchFormData, EditBranchFormData } from "../types/branches.types";
import { zodResolver } from "@hookform/resolvers/zod";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import TextArea from "@/components/form/input/TextArea";
import { generateUniqueCode } from "../utils/generateCode";
import { useEffect, useMemo, useState } from "react";
import FileInput from "@/components/form/input/FileInput";
import { isEqual } from "lodash";

function BranchForm({ mode = "create", initialData, onSubmit, pharmacy }: BranchFormProps) {
    const [lastFirstLetter, setLastFirstLetter] = useState<string>("");

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm<BranchFormData | EditBranchFormData>({
        resolver: zodResolver(mode === "create" ? BranchFormSchema : EditBranchFormSchema),
        defaultValues:
            mode === "create"
                ? {
                      pharmacy_id: 0,
                      branch_name: "",
                      branch_code: "",
                      address: "",
                      street_number: "",
                      postal_code: "",
                      city: "",
                      manager_name: "",
                      manager_phone: "",
                      notes: "",
                      photo: null,
                      is_active: true,
                      wws_software: [],
                      parking: false,
                      clothes: false,
                  }
                : initialData,
    });

    // generate branch code
    const branchName = watch("branch_name") || "";
    const currentFirstLetter = branchName[0] || "";

    // reset initial data after render
    useEffect(() => {
        if (mode === "edit" && initialData) {
            reset(initialData);
        }
    }, [mode, initialData]);

    useMemo(() => {
        if (mode === "create" && currentFirstLetter && currentFirstLetter !== lastFirstLetter) {
            const newCode = generateUniqueCode(branchName, pharmacy?.pharmacy.name || "");
            setValue("branch_code", newCode);
            setLastFirstLetter(currentFirstLetter);
        }
    }, [mode, currentFirstLetter, lastFirstLetter, branchName, pharmacy?.pharmacy.name]);

    // handle image change
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, field: "photo") => {
        const file = e.target.files?.[0];
        if (file) {
            setValue(field, file);
            console.log(file);
        }
    };

    const handleFormSubmit = (data: BranchFormData | EditBranchFormData) => {
        if (mode === "edit" && initialData) {
            const changedData: Partial<EditBranchFormData> = {};

            for (const key in data) {
                const typedKey = key as keyof EditBranchFormData;
                const newValue = data[typedKey];
                const oldValue = initialData?.[typedKey];

                if (!isEqual(newValue, oldValue)) {
                    changedData[typedKey] = newValue as never;
                }
            }

            if (Object.keys(changedData).length === 0) {
                alert("مفيش أي حاجة اتغيرت");
                return;
            }

            onSubmit(changedData);
        } else {
            // في حالة create ابعت كل البيانات
            onSubmit(data);
        }
    };

    return (
        <form className='flex flex-col mt-5' onSubmit={handleSubmit(handleFormSubmit)}>
            {/* Form fields */}

            {/* Branch Photo Section */}
            <div className='mb-6'>
                <h2 className='text-lg font-medium text-brand-500 dark:text-white'>Branch Photo</h2>
                <div className='mt-4 flex items-center gap-4'>
                    <FileInput
                        {...register("photo")}
                        onChange={(e) => handleImageChange(e, "photo")}
                        className='rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                    />
                    {(watch("photo") || (mode === "edit" && initialData?.photo)) && (
                        <div className='mt-2'>
                            {watch("photo") instanceof File ? (
                                <p className='text-sm text-gray-500'>Selected File: {watch("photo")?.name || initialData?.photo?.name}</p>
                            ) : null}
                        </div>
                    )}
                </div>
            </div>
            <Label>
                Branch Name
                <Input {...register("branch_name")} type='text' placeholder='Branch Name' error={!!errors.branch_name} hint={errors.branch_name?.message} />
            </Label>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <Label>
                    Branch Code
                    <Input
                        disabled
                        {...register("branch_code")}
                        type='text'
                        placeholder='Branch Code'
                        error={!!errors.branch_code}
                        hint={errors.branch_code?.message}
                    />
                </Label>
                <Label>
                    City
                    <Input {...register("city")} type='text' placeholder='City' error={!!errors.city} hint={errors.city?.message} />
                </Label>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <Label>
                    Street Number
                    <Input
                        {...register("street_number")}
                        type='text'
                        placeholder='Street Number'
                        error={!!errors.street_number}
                        hint={errors.street_number?.message}
                    />
                </Label>

                <Label>
                    Postal Code
                    <Input {...register("postal_code")} type='text' placeholder='Postal Code' error={!!errors.postal_code} hint={errors.postal_code?.message} />
                </Label>
            </div>
            <Label>
                Address
                <TextArea {...register("address")} placeholder='Address' error={!!errors.address} hint={errors.address?.message} />
            </Label>
            <Label>
                Manager Name
                <Input {...register("manager_name")} type='text' placeholder='Manager Name' error={!!errors.manager_name} hint={errors.manager_name?.message} />
            </Label>

            <Label>
                Manager Phone
                <Input
                    {...register("manager_phone")}
                    type='text'
                    placeholder='Manager Phone'
                    error={!!errors.manager_phone}
                    hint={errors.manager_phone?.message}
                />
            </Label>

            <Label>
                Notes
                <TextArea {...register("notes")} placeholder='Notes' error={!!errors.notes} hint={errors.notes?.message} />
            </Label>

            <Button type='submit' className='mt-5 w-fit'>
                {mode === "create" ? "Create Branch" : "Update Branch"}
            </Button>
        </form>
    );
}

export default BranchForm;
