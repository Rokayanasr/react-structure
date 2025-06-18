import { useForm, Controller } from "react-hook-form";
import Form from "@/components/form/Form";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Button from "@/components/ui/button/Button";
import TextArea from "@/components/form/input/TextArea";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

interface PermanentsFormData {
    qualification: "Minijob" | "Vollzeit" | "Teilzeit";
    Name: string;
    phone: string;
    Address: string;
    email: string;
    entryDate?: string;
    street: string;
    postalCodeCity: string;
    workerActivities?: string;
    additionalInfo?: string;
    termsAccepted: boolean;
}

function NonePharma() {
    const {
        control,
        handleSubmit,
        formState: { errors },
        register,
    } = useForm<PermanentsFormData>({
        defaultValues: {
            qualification: "Minijob",
            termsAccepted: false,
        },
    });

    const validateEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) || "Ungültige E-Mail-Adresse";
    };

    const validatePhone = (value: string) => {
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        return phoneRegex.test(value) || "Ungültige Telefonnummer";
    };

    const validatePostalCode = (value: string) => {
        const postalCodeRegex = /^\d{5}\s+[A-Za-zäöüÄÖÜß\s-]+$/;
        return postalCodeRegex.test(value) || "Ungültige Postleitzahl und Ort";
    };

    const onSubmit = (data: PermanentsFormData) => {
        console.log("Form Submitted:", data);
    };

    return (
        <>
            <PageBreadcrumb pageTitle='Nicht Pharmazeutischer Mitarbeiter' />

            <div className='rounded-2xl border overflow-hidden border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800'>
                <div className='flex flex-col gap-2'>
                    <Form className='space-y-8' onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-xl font-semibold'>Apotheken Informationen</h2>
                        <div className='grid gap-6'>
                            <div>
                                <Label>
                                    Name der Apotheke
                                    <Controller
                                        name='Name'
                                        control={control}
                                        rules={{
                                            required: "Name der Apotheke ist erforderlich",
                                            minLength: {
                                                value: 2,
                                                message: "Name muss mindestens 2 Zeichen lang sein",
                                            },
                                        }}
                                        render={({ field }) => <Input {...field} required type='text' placeholder='Name der Apotheke' hint='' />}
                                    />
                                    {errors.Name && <p className='mt-1.5 text-xs text-error-500'>{errors.Name.message}</p>}
                                </Label>
                            </div>

                            <div>
                                <Label>
                                    E-mail
                                    <Controller
                                        name='email'
                                        control={control}
                                        rules={{
                                            required: "E-Mail ist erforderlich",
                                            validate: validateEmail,
                                        }}
                                        render={({ field }) => <Input {...field} required type='email' placeholder='muster@exttra.com' hint='' />}
                                    />
                                    {errors.email && <p className='mt-1.5 text-xs text-error-500'>{errors.email.message}</p>}
                                </Label>
                            </div>

                            <div>
                                <Label>
                                    Telefon
                                    <Controller
                                        name='phone'
                                        control={control}
                                        rules={{
                                            required: "Telefonnummer ist erforderlich",
                                            validate: validatePhone,
                                        }}
                                        render={({ field }) => <Input {...field} required type='tel' placeholder='Telefon' hint='' />}
                                    />
                                    {errors.phone && <p className='mt-1.5 text-xs text-error-500'>{errors.phone.message}</p>}
                                </Label>
                            </div>

                            <div>
                                <Label>
                                    Adresse
                                    <Controller
                                        name='Address'
                                        control={control}
                                        rules={{
                                            required: "Adresse ist erforderlich",
                                            minLength: {
                                                value: 3,
                                                message: "Adresse muss mindestens 3 Zeichen lang sein",
                                            },
                                        }}
                                        render={({ field }) => <Input {...field} required type='text' placeholder='Adresse' hint='' />}
                                    />
                                    {errors.Address && <p className='mt-1.5 text-xs text-error-500'>{errors.Address.message}</p>}
                                </Label>
                            </div>

                            <div>
                                <Label>
                                    PLZ & Ort
                                    <Controller
                                        name='postalCodeCity'
                                        control={control}
                                        rules={{
                                            required: "Postleitzahl und Ort sind erforderlich",
                                            validate: validatePostalCode,
                                        }}
                                        render={({ field }) => <Input {...field} required type='text' placeholder='PLZ & Ort' hint='' />}
                                    />
                                    {errors.postalCodeCity && <p className='mt-1.5 text-xs text-error-500'>{errors.postalCodeCity.message}</p>}
                                </Label>
                            </div>

                            <div>
                                <Label>
                                    Anzahl der benötigten Arbeiter
                                    <Controller
                                        name='street'
                                        control={control}
                                        rules={{
                                            required: "Anzahl der benötigten Arbeiter ist erforderlich",
                                            pattern: {
                                                value: /^\d+$/,
                                                message: "Bitte geben Sie eine gültige Zahl ein",
                                            },
                                        }}
                                        render={({ field }) => <Input {...field} required type='text' placeholder='12345' hint='' />}
                                    />
                                    {errors.street && <p className='mt-1.5 text-xs text-error-500'>{errors.street.message}</p>}
                                </Label>
                            </div>

                            <div>
                                <Label>
                                    Beruf / Qualifikation
                                    <Controller
                                        name='qualification'
                                        control={control}
                                        rules={{ required: "Bitte wählen Sie eine Qualifikation" }}
                                        render={({ field }) => (
                                            <Select
                                                options={[
                                                    { value: "Minijob", label: "Minijob" },
                                                    { value: "Vollzeit", label: "Vollzeit" },
                                                    { value: "Teilzeit", label: "Teilzeit" },
                                                ]}
                                                onChange={(selectedValue) => {
                                                    field.onChange(selectedValue);
                                                }}
                                            />
                                        )}
                                    />
                                    {errors.qualification && <p className='mt-1.5 text-xs text-error-500'>{errors.qualification.message}</p>}
                                </Label>
                            </div>

                            <div>
                                <Label>
                                    Datum der Einstellung
                                    <Controller
                                        name='entryDate'
                                        control={control}
                                        render={({ field }) => <Input {...field} type='date' placeholder='Von' hint='' />}
                                    />
                                    {errors.entryDate && <p className='mt-1.5 text-xs text-error-500'>{errors.entryDate.message}</p>}
                                </Label>
                            </div>

                            <div>
                                <Label>
                                    Tätigkeitsbereich der Arbeiter
                                    <Controller
                                        name='workerActivities'
                                        control={control}
                                        render={({ field }) => <TextArea {...field} rows={4} placeholder='Beschreiben Sie die Tätigkeiten' />}
                                    />
                                </Label>
                            </div>

                            <div>
                                <Label>
                                    Sonstige Information
                                    <Controller
                                        name='additionalInfo'
                                        control={control}
                                        render={({ field }) => <TextArea {...field} rows={4} placeholder='Weitere Informationen' />}
                                    />
                                </Label>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <input
                                type='checkbox'
                                {...register("termsAccepted", {
                                    required: "Sie müssen die AGB & Datenschutz akzeptieren",
                                })}
                                className='w-4 h-4 border-gray-300 rounded mr-2'
                            />
                            <label className='text-sm'>Ich akzeptiere die AGB & Datenschutz</label>
                        </div>
                        {errors.termsAccepted && <p className='mt-1.5 text-xs text-error-500'>{errors.termsAccepted.message}</p>}

                        <div className='flex justify-start'>
                            <Button type='submit' size='md'>
                                Absenden
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default NonePharma;
