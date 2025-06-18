import { PharmacyFormProps, WWS_SOFTWARE, WWSSoftwareOption } from "../types/profile.type";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import FileInput from "@/components/form/input/FileInput";
import RadioSm from "@/components/form/input/RadioSm";
import Checkbox from "@/components/form/input/Checkbox";

export default function PharmacyForm({ form, handleImageChange, handleSoftwareChange }: PharmacyFormProps) {
    const { register, formState: { errors }, watch, setValue } = form;

    // wws options
    const wwsOptions: WWSSoftwareOption[] = [
        { value: WWS_SOFTWARE.ADG, label: "ADG" },
        { value: WWS_SOFTWARE.Abosoft, label: "Abosoft" },
        { value: WWS_SOFTWARE.ASYS, label: "ASYS" },
        { value: WWS_SOFTWARE.CIDA, label: "CIDA" },
        { value: WWS_SOFTWARE.DEOS, label: "DEOS" },
        { value: WWS_SOFTWARE.GAWIS, label: "GAWIS" },
        { value: WWS_SOFTWARE.JUMP, label: "JUMP" },
        { value: WWS_SOFTWARE.Lauer, label: "Lauer Fischer" },
        { value: WWS_SOFTWARE.Pharmatechnik, label: "Pharmatechnik" },
        { value: WWS_SOFTWARE.Prokas, label: "Prokas" },
        { value: WWS_SOFTWARE.andere, label: "andere" },
    ];

    // watch selected software
    const selectedSoftware = watch("wws_software") || [];

    return (
        <div className="space-y-6">
            <h3 className="text-lg font-medium text-brand-500 dark:text-white">
                Apotheken Daten
            </h3>

            {/* Pharmacy Logo */}
            <div>
                <Label>
                    Apothekenlogo
                    <div className="mt-2">
                        <FileInput
                            {...register("logo")}
                            onChange={(e) => handleImageChange(e, "logo")}
                            className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                        />
                    </div>
                    {watch("logo") && (
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Ausgewählte Datei: {(watch("logo") as File).name}
                            </p>
                        </div>
                    )}
                </Label>
            </div>

            <div>
                <Label>
                    Apothekenname
                    <Input
                        {...register("pharmacy_name")}
                        type="text"
                        placeholder="Apothekenname"
                        error={!!errors.pharmacy_name}
                        hint={errors.pharmacy_name?.message}
                    />
                </Label>
            </div>

            <div>
                <Label>
                    Adresse
                    <Input
                        {...register("address")}
                        type="text"
                        placeholder="Adresse"
                        error={!!errors.address}
                        hint={errors.address?.message}
                    />
                </Label>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Label>
                    Hausnummer
                    <Input
                        {...register("street_number")}
                        type="text"
                        placeholder="Hausnummer"
                        error={!!errors.street_number}
                        hint={errors.street_number?.message}
                    />
                </Label>

                <Label>
                    PLZ
                    <Input
                        {...register("postal_code")}
                        type="text"
                        placeholder="PLZ"
                        error={!!errors.postal_code}
                        hint={errors.postal_code?.message}
                    />
                </Label>
            </div>

            <div>
                <Label>
                    Stadt
                    <Input
                        {...register("city")}
                        type="text"
                        placeholder="Stadt"
                        error={!!errors.city}
                        hint={errors.city?.message}
                    />
                </Label>
            </div>

            <div>
                <Label>
                    Telefon
                    <Input
                        {...register("phone")}
                        type="text"
                        placeholder="Telefon"
                        error={!!errors.phone}
                        hint={errors.phone?.message}
                    />
                </Label>
            </div>


            <div>
                <Label>
                    Über uns
                    <TextArea
                        {...register("about_us")}
                        placeholder="Über uns"
                        error={!!errors.about_us}
                        hint={errors.about_us?.message}
                    />
                </Label>
            </div>

            <div>
                <Label>
                    Zusätzliche Informationen
                    <TextArea
                        {...register("additional_info")}
                        placeholder="Zusätzliche Informationen"
                        error={!!errors.additional_info}
                        hint={errors.additional_info?.message}
                    />
                </Label>
            </div>

            <div>
                <Label>
                    Nachricht
                    <TextArea
                        {...register("message")}
                        placeholder="Nachricht"
                        error={!!errors.message}
                        hint={errors.message?.message}
                    />
                </Label>
            </div>

            {/* WWS Software section */}
            <div>
                <Label>
                    WWS (Kassenprogramm)
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                        {wwsOptions.map((option) => (
                            <div
                                key={option.value}
                                className="flex items-center gap-2"
                            >
                                <Checkbox
                                    id={`wws-${option.value}`}
                                    checked={selectedSoftware.includes(option.value)}
                                    onChange={() => handleSoftwareChange(option.value)}
                                />
                                <label
                                    htmlFor={`wws-${option.value}`}
                                    className="text-sm text-gray-700 dark:text-gray-200"
                                >
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                    {errors.wws_software && (
                        <p className="mt-1.5 text-xs text-error-500">
                            {errors.wws_software.message}
                        </p>
                    )}
                </Label>
            </div>

            {/* Radio button sections */}
            <div>
                <Label>
                    Uniform
                    <div className="flex items-center gap-2">
                        <RadioSm
                            label="Ja"
                            value="1"
                            {...register("clothes")}
                            checked={watch("clothes") == 1}
                            onChange={() => setValue("clothes", 1, { shouldDirty: true })}
                        />
                        <RadioSm
                            label="Nein"
                            value="0"
                            {...register("clothes")}
                            checked={watch("clothes") == 0}
                            onChange={() => setValue("clothes", 0, { shouldDirty: true })}
                        />
                    </div>
                </Label>
            </div>

            <div>
                <Label>
                    Parkplatz
                    <div className="flex items-center gap-2">
                        <RadioSm
                            label="Ja"
                            value="1"
                            {...register("parking")}
                            checked={watch("parking") === 1}
                            onChange={() => setValue("parking", 1, { shouldDirty: true })}
                        />
                        <RadioSm
                            label="Nein"
                            value="0"
                            {...register("parking")}
                            checked={watch("parking") === 0}
                            onChange={() => setValue("parking", 0, { shouldDirty: true })}
                        />
                    </div>
                </Label>
            </div>
        </div>
    );
} 