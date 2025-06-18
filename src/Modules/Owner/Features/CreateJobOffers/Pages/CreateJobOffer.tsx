import Form from "@/components/form/Form";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import TextArea from "@/components/form/input/TextArea";
import Button from "@/components/ui/button/Button";
import { useForm, RegisterOptions } from "react-hook-form";
import { useState } from "react";
import DatePicker from "@/components/form/date-picker";

function CreateJobOffer() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    // State for select values
    const [selectedType, setSelectedType] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedWorkClothes, setSelectedWorkClothes] = useState("");
    const [selectedParking, setSelectedParking] = useState("");
    const [selectedEmergencyRoom, setSelectedEmergencyRoom] = useState("");
    const [selectedCashSystem, setSelectedCashSystem] = useState("");

    const onSubmit = (data: unknown) => {
        console.log(data);
    };

    const registerInput = (name: string, options?: RegisterOptions) => {
        return register(name, options);
    };


    const jobTypes = [
        { value: "Nachtdienst", label: "Nachtdienst" },
        { value: "Apotheker/-innen", label: "Apotheker/-innen" },
        { value: "PTA", label: "PTA" },
        { value: "PKA", label: "PKA" }
    ];

    const bundeslandOptions = [
        { value: "Baden-Württemberg", label: "Baden-Württemberg" },
        { value: "Bayern", label: "Bayern" },
        { value: "Berlin", label: "Berlin" },
        { value: "Brandenburg", label: "Brandenburg" },
        { value: "Bremen", label: "Bremen" },
        { value: "Hamburg", label: "Hamburg" },
        { value: "Hessen", label: "Hessen" },
        { value: "Mecklenburg-Vorpommern", label: "Mecklenburg-Vorpommern" },
        { value: "Niedersachsen", label: "Niedersachsen" },
        { value: "Nordrhein-Westfalen", label: "Nordrhein-Westfalen" },
        { value: "Rheinland-Pfalz", label: "Rheinland-Pfalz" },
        { value: "Saarland", label: "Saarland" },
        { value: "Sachsen", label: "Sachsen" },
        { value: "Sachsen-Anhalt", label: "Sachsen-Anhalt" },
        { value: "Schleswig-Holstein", label: "Schleswig-Holstein" },
        { value: "Thüringen", label: "Thüringen" }
    ];

    const wwsOptions = [
        { value: "ADG", label: "ADG" },
        { value: "APOSOFT", label: "APOSOFT" },
        { value: "ASYS", label: "ASYS" },
        { value: "CIDA", label: "CIDA" },
        { value: "DEOS", label: "DEOS" },
        { value: "GAWIS", label: "GAWIS" },
        { value: "OTHER", label: "Andere" }
    ];

    const yesNoOptions = [
        { value: "Ja", label: "Ja" },
        { value: "Nein", label: "Nein" }
    ];

    return (
        <div className="w-full mx-auto px-4">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                Arbeitsangebote (entweder tägliche Vertretung, Nachtdienst oder Festanstellung) zu erstellen
            </p>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="p-6">
                    <h2 className="text-lg font-semibold text-brand-700 dark:text-brand-400 mb-6">Job veröffentlichen</h2>
                    
                    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Label>Name der Apotheke <span className="text-error-500">*</span></Label>
                            <Input
                                {...registerInput("pharmacyName", {
                                    required: "Name der Apotheke ist erforderlich"
                                })}
                                className="bg-gray-50 dark:bg-gray-700"
                                error={!!errors.pharmacyName}
                                hint={errors.pharmacyName?.message as string}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label>Straße & Nr. <span className="text-error-500">*</span></Label>
                                <Input
                                    {...registerInput("street", {
                                        required: "Straße & Nr. ist erforderlich"
                                    })}
                                    className="bg-gray-50 dark:bg-gray-700"
                                    error={!!errors.street}
                                    hint={errors.street?.message as string}
                                />
                            </div>
                            <div>
                                <Label>PLZ & Ort <span className="text-error-500">*</span></Label>
                                <Input
                                    {...registerInput("zipCity", {
                                        required: "PLZ & Ort ist erforderlich"
                                    })}
                                    className="bg-gray-50 dark:bg-gray-700"
                                    error={!!errors.zipCity}
                                    hint={errors.zipCity?.message as string}
                                />
                            </div>
                        </div>

                        <div>
                            <Label>Telefonnummer <span className="text-error-500">*</span></Label>
                            <Input
                                {...registerInput("phone", {
                                    required: "Telefonnummer ist erforderlich"
                                })}
                                type="tel"
                                className="bg-gray-50 dark:bg-gray-700"
                                error={!!errors.phone}
                                hint={errors.phone?.message as string}
                            />
                        </div>

                        <div>
                            <Label>Bundesland <span className="text-error-500">*</span></Label>
                            <Select
                                options={bundeslandOptions}
                                placeholder="Bundesland"
                                className="bg-gray-50 dark:bg-gray-700"
                                onChange={(value) => {
                                    setValue("state", value);
                                    setSelectedState(value);
                                }}
                                defaultValue={selectedState}
                                error={!!errors.state}
                                hint={errors.state?.message as string}
                            />
                        </div>

                        <div>
                            <Label>Typ <span className="text-error-500">*</span></Label>
                            <Select
                                options={jobTypes}
                                placeholder="Nachtdienst"
                                className="bg-gray-50 dark:bg-gray-700"
                                onChange={(value) => {
                                    setValue("type", value);
                                    setSelectedType(value);
                                }}
                                defaultValue={selectedType}
                                error={!!errors.type}
                                hint={errors.type?.message as string}
                            />
                        </div>

                        <div>
                            <Label>Entlohnung € / Std <span className="text-error-500">*</span></Label>
                            <Select
                                className="bg-gray-50 dark:bg-gray-700"
                                options={[]}
                                placeholder=""
                                onChange={(value) => setValue("hourlyRate", value)}
                            />
                            <p className="text-xs text-blue-light-500 dark:text-blue-400 mt-1">
                                Zuzüglich einer Nettodienstgebühr von 2,50€ pro Vorgang und einer Servicegebühr gemäß der Preisliste
                            </p>
                        </div>

                        <div>
                            <Label>Erster Arbeitstag <span className="text-error-500">*</span></Label>
                            <DatePicker 
                                {...registerInput("startDate", {
                                    required: "Erster Arbeitstag ist erforderlich"
                                })} 
                                id="startDate"
                                onChange={(dates, currentDateString) => {
                                    console.log({ dates, currentDateString });
                                }}
                            />
                            <p className="text-xs text-blue-light-500 dark:text-blue-400 mt-1">
                                Terminauswahl aus dem Kalender oder manuelle Eingabe nur mit Schrägstrich (TT/MM/JJJJ)
                            </p>
                        </div>

                        <div>
                            <Label>Weitere Arbeitstage</Label>
                            <TextArea
                                {...registerInput("additionalDates")}
                                className="bg-gray-50 dark:bg-gray-700"
                                placeholder="Man kann hier verschiedene Daten manuell eintragen, z.B. 05/11/2024, 01/12/2024, 02/12/2024 usw."
                            />
                        </div>

                        <div>
                            <Label>Letzter Arbeitstag</Label>
                            <DatePicker
                                placeholder="Letzter Arbeitstag"
                                id="endDate"
                                {...registerInput("endDate")}
                                onChange={(dates, currentDateString) => {
                                    console.log({ dates, currentDateString });
                                }}
                            />
                            <p className="text-xs text-blue-light-500 dark:text-blue-400 mt-1">
                                Terminauswahl aus dem Kalender oder manuelle Eingabe nur mit Schrägstrich (TT/MM/JJJJ)
                            </p>
                        </div>

                        <div>
                            <Label>Insgesamt Arbeitstage dieses Angebots <span className="text-error-500">*</span></Label>
                            <Select
                                className="bg-gray-50 dark:bg-gray-700"
                                options={[]}
                                placeholder="Insgesamt Arbeitstage dieses Angebots"
                                onChange={(value) => setValue("totalWorkDays", value)}
                            />
                        </div>

                        <div>
                            <Label>Arbeitszeiten (pro Tag) <span className="text-error-500">*</span></Label>
                            <Input
                                {...registerInput("workingHours")}
                                className="bg-gray-50 dark:bg-gray-700"
                            />
                        </div>

                        <div>
                            <Label>Berufskleidung mitnehmen</Label>
                            <Select
                                options={yesNoOptions}
                                placeholder="Berufskleidung mitnehmen"
                                className="bg-gray-50 dark:bg-gray-700"
                                onChange={(value) => {
                                    setValue("needWorkClothes", value);
                                    setSelectedWorkClothes(value);
                                }}
                                defaultValue={selectedWorkClothes}
                            />
                        </div>

                        <div>
                            <Label>Parkplatz vorhanden <span className="text-error-500">*</span></Label>
                            <Select
                                options={yesNoOptions}
                                placeholder="Parkplatz vorhanden"
                                className="bg-gray-50 dark:bg-gray-700"
                                onChange={(value) => {
                                    setValue("hasParking", value);
                                    setSelectedParking(value);
                                }}
                                defaultValue={selectedParking}
                            />
                        </div>

                        <div>
                            <Label>Schlafzimmer bei Notdienst</Label>
                            <Select
                                options={yesNoOptions}
                                placeholder="Schlafzimmer bei Notdienst"
                                className="bg-gray-50 dark:bg-gray-700"
                                onChange={(value) => {
                                    setValue("hasEmergencyRoom", value);
                                    setSelectedEmergencyRoom(value);
                                }}
                                defaultValue={selectedEmergencyRoom}
                            />
                        </div>

                        <div>
                            <Label>WWS (Kassenprogramm) <span className="text-error-500">*</span></Label>
                            <Select
                                options={wwsOptions}
                                placeholder="WWS (Kassenprogramm)"
                                className="bg-gray-50 dark:bg-gray-700"
                                onChange={(value) => {
                                    setValue("cashRegisterSystem", value);
                                    setSelectedCashSystem(value);
                                }}
                                defaultValue={selectedCashSystem}
                            />
                        </div>

                        <div>
                            <Label>andere</Label>
                            <TextArea
                                {...registerInput("additionalInfo")}
                                className="bg-gray-50 dark:bg-gray-700"
                            />
                        </div>

                        <div className="flex items-start gap-2 mt-6">
                            <input
                                type="checkbox"
                                {...registerInput("travelAllowance", {
                                    required: "Bitte bestätigen"
                                })}
                                className="mt-1 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                            />
                            <Label className="!mb-0 text-sm">
                                Für die tägliche Vertretung gibt es eine Fahrkostenpauschale von 20€ bis 21 km. Ab 21 km kommen 38 Cent pro km dazu <span className="text-error-500">*</span>
                            </Label>
                        </div>

                        <div className="mt-6">
                            <Button type="submit" className="bg-brand-700 hover:bg-brand-800 dark:bg-brand-600 dark:hover:bg-brand-700 text-white px-6 py-2 rounded">
                                Speichern Und Vorschau
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default CreateJobOffer;
