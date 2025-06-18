import { useEffect } from "react";
import PageMeta from "@/components/common/PageMeta";
import Form from "@/components/form/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    WWS_SOFTWARE,
    profileSchema,
    ProfileFormSchema,
} from "../types/profile.type";
import Button from "@/components/ui/button/Button";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import {
    usePostProfileMutation,
    useGetProfileQuery,
} from "@/Modules/Owner/services/profile/api/profileApi";
import UserForm from "../components/UserForm";
import PharmacyForm from "../components/PharmacyForm";
import LoadingState from "@/components/common/LoadingState";
import EmptyState from "@/components/common/EmptyState";

function EditProfile() {
    // api
    const [postProfile, { isLoading: isSubmitting }] = usePostProfileMutation();
    const { data: profile , isLoading: isLoadingProfile } = useGetProfileQuery();

    // form default values
    const defaultValues: ProfileFormSchema = {
        // User personal data
        first_name: "",
        last_name: "",
        email: "",
        biographical_info: "",
        profile_picture: null,

        // Pharmacy data
        pharmacy_name: "",
        logo: null,
        address: "",
        street_number: "",
        postal_code: "",
        city: "",
        phone: "",
        about_us: "",
        additional_info: "",
        contact_salutation: undefined,
        message: "",

        // Boolean values
        clothes: undefined,
        parking: undefined,
        terms_accepted: false,

        // Arrays and files
        wws_software: [],
    };

    // form
    const form = useForm<ProfileFormSchema>({
        resolver: zodResolver(profileSchema),
        defaultValues,
        mode: "onChange",
    });

    const { handleSubmit, setValue, watch, reset, formState: { dirtyFields } } = form;

    // Check if current value equals original value
    const isValueChanged = (fieldName: keyof ProfileFormSchema) => {
        if (!profile) return false;

        const currentValue = watch(fieldName);
        const pharmacy = profile.pharmacy;

        let originalValue: unknown;

        // Handle special cases first
        if (fieldName === "pharmacy_name") {
            originalValue = pharmacy?.name || "";
        } else if (fieldName === "clothes") {
            originalValue = pharmacy?.clothes ? 1 : 0;
        } else if (fieldName === "parking") {
            originalValue = pharmacy?.parking ? 1 : 0;
        } else if (fieldName === "wws_software") {
            originalValue = pharmacy?.wws_software || [];
        } else {
            // General case - try to get from pharmacy first, then from user
            originalValue =
                pharmacy?.[fieldName as keyof typeof pharmacy] ||
                profile[fieldName as keyof typeof profile] ||
                "";
        }

        // Special comparison for arrays
        if (Array.isArray(currentValue) && Array.isArray(originalValue)) {
            return (
                JSON.stringify(currentValue) !== JSON.stringify(originalValue)
            );
        }

        // Special handling for file inputs
        if (fieldName === "profile_picture" || fieldName === "logo") {
            return currentValue !== null;
        }

        return currentValue !== originalValue;
    };

    // Check if form has any real changes
    const hasRealChanges = () => {
        if (watch("profile_picture") || watch("logo")) return true;

        return Object.keys(dirtyFields).some((field) => {
            return isValueChanged(field as keyof ProfileFormSchema);
        });
    };

    // api call
    const onSubmit: SubmitHandler<ProfileFormSchema> = (data) => {
        // Prepare form data
        const formData = new FormData();

        // Track which fields have changed
        const changedFields = Object.keys(dirtyFields) as Array<
            keyof ProfileFormSchema
        >;

        if (!hasRealChanges()) {
            toast.success("Keine Änderungen zum Speichern");
            return;
        }

        // Only append fields that have been changed and have real changes
        changedFields.forEach((field) => {
            if (isValueChanged(field)) {
                const value = data[field];

                // Special case for pharmacy_name which is mapped to "name" in the API
                if (field === "pharmacy_name" && value) {
                    formData.append("name", value as string);
                    return;
                }

                // Handle boolean values
                if (field === "clothes" || field === "parking") {
                    formData.append(field, value ? "1" : "0");
                    return;
                }

                // Handle arrays
                if (field === "wws_software" && Array.isArray(value)) {
                    // Send each value separately for proper array handling in Laravel
                    value.forEach((item) => {
                        // Make sure the value is from WWS_SOFTWARE enum
                        if (Object.values(WWS_SOFTWARE).includes(item as WWS_SOFTWARE)) {
                            formData.append("wws_software[]", item);
                        }
                    });
                    return; // Skip the normal string value append
                }

                // Handle normal string values
                if (value !== undefined && value !== null && value !== "") {
                    formData.append(field, value as string);
                }
            }
        });

        // Handle files separately
        if (data.profile_picture)
            formData.append("profile_picture", data.profile_picture);
        if (data.logo) formData.append("logo", data.logo);

        // Call the API only if there are changes
        if (formData.entries().next().done !== true) {
            postProfile(formData)
                .unwrap()
                .then((res) => {
                    if (res.success) {
                        toast.success("Profil erfolgreich aktualisiert");
                    } else {
                        toast.error("Profil aktualisieren fehlgeschlagen");
                    }
                })
                .catch((error) => {
                    console.error("Profile update error:", error);
                    toast.error(
                        error.data?.message ||
                            "Fehler beim Aktualisieren des Profils"
                    );
                });
        } else {
            toast.success("Keine Änderungen zum Speichern");
        }
    };

    // Set initial values when profile loads
    useEffect(() => {
        if (profile) {
            const pharmacy = profile.pharmacy;

            // Reset form with default values first
            reset(defaultValues);

            // Set text field values
            setValue("first_name", profile.first_name || "");
            setValue("last_name", profile.last_name || "");
            setValue("email", profile.email || "");
            setValue("biographical_info", profile.biographical_info || "");
            setValue("contact_salutation", profile.contact_salutation || undefined);
            if (pharmacy) {
                setValue("pharmacy_name", pharmacy.name || "");
                setValue("address", pharmacy.address || "");
                setValue("street_number", pharmacy.street_number || "");
                setValue("postal_code", pharmacy.postal_code || "");
                setValue("city", pharmacy.city || "");
                setValue("phone", pharmacy.phone || "");
                setValue("about_us", pharmacy.about_us || "");
                setValue("additional_info", pharmacy.additional_info || "");
              
                setValue("message", pharmacy.message || "");

                // Boolean values
                setValue("clothes", pharmacy.clothes ? 1 : 0);
                setValue("parking", pharmacy.parking ? 1 : 0);

                // arrays and files
                setValue("wws_software", pharmacy.wws_software || []);
            }
        }
    }, [profile, setValue, reset]);

    // handle image change
    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: keyof Pick<ProfileFormSchema, "profile_picture" | "logo">
    ) => {
        const file = e.target.files?.[0];
        if (file) {
            if (!file.type.startsWith("image/")) {
                toast.error("Bitte wählen Sie eine gültige Bilddatei aus");
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                toast.error("Die Bilddatei darf nicht größer als 5MB sein");
                return;
            }
            setValue(field, file, { shouldDirty: true });
        } else {
            setValue(field, null, { shouldDirty: true });
        }
    };

    // handle software change
    const handleSoftwareChange = (software: WWS_SOFTWARE) => {
        const currentSoftware = watch("wws_software") || [];
        let newValue: WWS_SOFTWARE[];
        
        if (currentSoftware.includes(software)) {
            newValue = currentSoftware.filter((s) => s !== software);
        } else {
            newValue = [...currentSoftware, software];
        }
        
        setValue("wws_software", newValue, { shouldDirty: true });
    };
    

    return (
        <>
            <PageMeta
                title="Mein Profil"
                description="Verwalten Sie Ihr Apothekenprofil"
            />
            <PageBreadcrumb pageTitle="Mein Profil" />
            <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
                    {isLoadingProfile ? (
                        <LoadingState message="Lade Profildaten..." />
                    ) : !profile ? (
                        <EmptyState
                            icon={
                                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            }
                            title="Keine Profildaten verfügbar"
                            message="Es konnten keine Profildaten gefunden werden. Bitte versuchen Sie es später erneut."
                        />
                    ) : (
                        <Form
                            className="space-y-8"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <UserForm 
                                form={form}
                                handleImageChange={handleImageChange}
                            />
                            
                            <PharmacyForm 
                                form={form}
                                handleImageChange={handleImageChange}
                                handleSoftwareChange={handleSoftwareChange}
                            />

                            <div className="flex justify-start">
                                <Button
                                    disabled={
                                        isSubmitting ||
                                        form.formState.isSubmitting ||
                                        !hasRealChanges()
                                    }
                                    type="submit"
                                    size="md"
                                >
                                    {isSubmitting ? "Wird gespeichert..." : "Profil Speichern"}
                                </Button>
                            </div>
                        </Form>
                    )}
                </div>
            </div>
        </>
    );
}

export default EditProfile;