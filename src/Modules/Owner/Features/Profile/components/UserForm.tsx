import { CONTACT_SALUTATION, UserFormProps } from "../types/profile.type";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import FileInput from "@/components/form/input/FileInput";
import Select from "@/components/form/Select";

export default function UserForm({ form, handleImageChange }: UserFormProps) {
    const { register, formState: { errors }, watch } = form;

    const contactSalutation = [
        { value: CONTACT_SALUTATION.MR, label: "Herr" },
        { value: CONTACT_SALUTATION.MRS, label: "Frau" },
        { value: CONTACT_SALUTATION.MS, label: "Familie" },
    ]

    return (
        <div className="space-y-6">
            <h3 className="text-lg font-medium text-brand-500 dark:text-white">
                Persönliche Daten
            </h3>

            {/* User Photo Section */}
            <div className="mb-6">
                <h2 className="text-lg font-medium text-brand-500 dark:text-white">
                    Profilbild
                </h2>
                <div className="mt-4 flex items-center gap-4">
                    <FileInput
                        {...register("profile_picture")}
                        onChange={(e) => handleImageChange(e, "profile_picture")}
                        className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    />
                </div>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            Ausgewählte Datei: {(watch("profile_picture") as File)?.name}
                        </p>
                    </div>
            </div>

            <div>
                <Label>
                    Vorname
                    <Input
                        {...register("first_name")}
                        type="text"
                        placeholder="Vorname"
                        error={!!errors.first_name}
                        hint={errors.first_name?.message}
                    />
                </Label>
            </div>

            <div>
                <Label>
                    Nachname
                    <Input
                        {...register("last_name")}
                        type="text"
                        placeholder="Nachname"
                        error={!!errors.last_name}
                        hint={errors.last_name?.message}
                    />
                </Label>
            </div>

            <div>
                <Label>
                    E-Mail
                    <Input
                        {...register("email")}
                        type="email"
                        placeholder="E-Mail"
                        error={!!errors.email}
                        hint={errors.email?.message}
                    />
                </Label>
            </div>


            <div>
                <Label>
                    Anrede
                    <Select
                        options={contactSalutation}
                        defaultValue={watch("contact_salutation")}
                        onChange={(value) => {
                            form.setValue("contact_salutation", value as CONTACT_SALUTATION, { 
                                shouldDirty: true,
                                shouldTouch: true
                            });
                        }}
                        error={!!errors.contact_salutation}
                        hint={errors.contact_salutation?.message}
                    />
                </Label>
            </div>

            <div>
                <Label>
                    Biographische Informationen
                    <TextArea
                        {...register("biographical_info")}
                        placeholder="Biographische Informationen"
                        error={!!errors.biographical_info}
                        hint={errors.biographical_info?.message}
                    />
                </Label>
            </div>
        </div>
    );
}