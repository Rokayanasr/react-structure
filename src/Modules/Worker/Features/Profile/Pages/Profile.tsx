import PageMeta from "@/components/common/PageMeta";
import Form from "@/components/form/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { profileApiRequest, profileSchema, ProfileFormSchema } from "../types/profile.type";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Button from "@/components/ui/button/Button";
import FileInput from "@/components/form/input/FileInput";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
// import DatePicker from "@/components/form/date-picker";
import { useState, useEffect } from "react";
import { UploadIcon } from "@/assets/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetProfileQuery, useUpdateProfileMutation } from "@/Modules/Worker/services/profile/api/ProfileApi";
import { toast } from "react-hot-toast";

function Profile() {
  const [selectedSystems, setSelectedSystems] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [certificate, setCertificate] = useState<File | null>(null);
  const [cv, setCv] = useState<File | null>(null);
  
  const { data: userProfile, isLoading: isProfileLoading, error: profileError } = useGetProfileQuery();
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const posSystems = [
    { id: "adg", name: "ADG" },
    { id: "aposoft", name: "Aposoft" },
    { id: "asys", name: "ASYS" },
    { id: "cida", name: "CIDA" },
    { id: "deos", name: "DEOS" },
    { id: "andere", name: "Andere" },
    { id: "gawis", name: "GAWIS" },
    { id: "jump", name: "JUMP" },
    { id: "lauer-fischer", name: "Lauer Fischer" },
    { id: "pharmatechnik", name: "Pharmatechnik" },
    { id: "prokas", name: "Prokas" },
  ];

  const days = [
    { id: "monday", name: "Montag" },
    { id: "tuesday", name: "Dienstag" },
    { id: "wednesday", name: "Mittwoch" },
    { id: "thursday", name: "Donnerstag" },
    { id: "friday", name: "Freitag" },
  ];

  const languages = [
    { id: "german", name: "Deutsch" },
    { id: "english", name: "Englisch" },
    { id: "french", name: "Französisch" },
    { id: "spanish", name: "Spanisch" },
    { id: "italian", name: "Italienisch" },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ProfileFormSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      biographical_info: "",
      status: 1,
      salutation: "",
      address: "",
      postal_code: "",
      city: "",
      contact_salutation: "",
      phone: "",
      cv: "",
      certificate: "",
      terms_accepted: 0,
      wws_software: [],
      pharmacy_street_number: "",
      iam: "",
      Experience: null,
      vat_liable: false,
      tax_number: "",
      vat_id: "",
      distance: "",
      work_type: "",
      languages: [],
      medical_certificate: false,
      days: [],
      iban: "",
    },
  });

  useEffect(() => {
    if (userProfile) {
      reset({
        email: userProfile.email || "",
        first_name: userProfile.first_name || "",
        last_name: userProfile.last_name || "",
        biographical_info: userProfile.biographical_info || "",
        status: userProfile.status || 1,
        salutation: userProfile.salutation || "",
        address: userProfile.address || "",
        postal_code: userProfile.postal_code || "",
        city: userProfile.city || "",
        contact_salutation: userProfile.contact_salutation || "",
        phone: userProfile.phone || "",
        cv: userProfile.cv || "",
        certificate: userProfile.certificate || "",
        terms_accepted: userProfile.terms_accepted || 0,
        wws_software: userProfile.wws_software || [],
        pharmacy_street_number: userProfile.pharmacy_street_number || "",
        iam: userProfile.iam || "",
        Experience: userProfile.Experience || null,
        vat_liable: userProfile.vat_liable || false,
        tax_number: userProfile.tax_number || "",
        vat_id: userProfile.vat_id || "",
        distance: userProfile.distance || "",
        work_type: userProfile.work_type || "",
        languages: userProfile.languages || [],
        medical_certificate: userProfile.medical_certificate || false,
        days: userProfile.days || [],
        iban: userProfile.iban || "",
      });

      setSelectedSystems(userProfile.wws_software || []);
      setSelectedDays(userProfile.days || []);
      setSelectedLanguages(userProfile.languages || []);
    }
  }, [userProfile, reset]);

  const yesNoOptions = [
    { value: "true", label: "Ja" },
    { value: "false", label: "Nein" },
  ];

  const toggleSystem = (id: string) => {
    setSelectedSystems((prev) =>
      prev.includes(id) ? prev.filter((system) => system !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedSystems(posSystems.map((system) => system.id));
  };

  const deselectAll = () => {
    setSelectedSystems([]);
  };

  const toggleDay = (id: string) => {
    setSelectedDays((prev) =>
      prev.includes(id) ? prev.filter((day) => day !== id) : [...prev, id]
    );
  };

  const selectAllDays = () => {
    setSelectedDays(days.map((day) => day.id));
  };

  const deselectAllDays = () => {
    setSelectedDays([]);
  };

  const toggleLanguage = (id: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(id) ? prev.filter((lang) => lang !== id) : [...prev, id]
    );
  };

  const selectAllLanguages = () => {
    setSelectedLanguages(languages.map((lang) => lang.id));
  };

  const deselectAllLanguages = () => {
    setSelectedLanguages([]);
  };

  const onSubmit: SubmitHandler<ProfileFormSchema> = async (data) => {
    try {
      const formData = new FormData();
      
      const processedData = {
        ...data,
        wws_software: selectedSystems,
        days: selectedDays,
        languages: selectedLanguages,
        vat_liable: String(data.vat_liable) === "true",
        medical_certificate: String(data.medical_certificate) === "true"
      };

      Object.entries(processedData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          if (Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
          } else if (typeof value === 'boolean') {
            formData.append(key, value ? '1' : '0');
          } else {
            formData.append(key, value.toString());
          }
        }
      });

      if (certificate) formData.append('certificate', certificate);
      if (cv) formData.append('cv', cv);

      const response = await updateProfile(formData).unwrap();
      
      if (response.success) {
        toast.success("Profil erfolgreich aktualisiert");
      } else {
        toast.error(response.message || "Fehler beim Aktualisieren des Profils");
      }
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("Fehler beim Aktualisieren des Profils");
    }
  };

  const handleTextAreaChange = (name: keyof profileApiRequest) => (value: string) => {
    setValue(name, value);
  };



  if (isProfileLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Profil wird geladen...</div>
      </div>
    );
  }

  if (profileError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-lg">
          Fehler beim Laden des Profils. Bitte versuchen Sie es erneut.
        </div>
      </div>
    );
  }

  return (
    <>
      <PageMeta
        title="Mein Profil"
        description="Verwalten Sie Ihr Apothekenprofil"
      />
      <PageBreadcrumb pageTitle="Mein Profil" />
      <div className="space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-brand-500 dark:text-white">
              Profil-Bild
            </h2>
            <div className="mt-4 flex items-center gap-4">
              <FileInput className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600" />
            </div>
          </div>

          {/* Show update errors */}
          {/* {updateError && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <div className="text-red-700">
              </div>
            </div>
          )} */}

          <Form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <h3 className="font-medium text-brand-500 dark:text-white">
                KONTAKT DATEN
              </h3>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Label>
                    Vorname<span className="text-red-500">*</span>
                    <Input
                      {...register("first_name", {
                        required: "Vorname ist erforderlich",
                      })}
                      type="text"
                      placeholder="Vorname"
                      error={!!errors.first_name}
                      hint={errors.first_name?.message}
                    />
                  </Label>
                  <Label>
                    Nachname<span className="text-red-500">*</span>
                    <Input
                      {...register("last_name", {
                        required: "Nachname ist erforderlich",
                      })}
                      type="text"
                      placeholder="Nachname"
                      error={!!errors.last_name}
                      hint={errors.last_name?.message}
                    />
                  </Label>
                </div>

                <div>
                  <Label>
                    Telefonnummer<span className="text-red-500">*</span>
                    <Input
                      {...register("phone", {
                        required: "Telefonnummer ist erforderlich",
                      })}
                      type="tel"
                      placeholder="Telefonnummer"
                      error={!!errors.phone}
                      hint={errors.phone?.message}
                    />
                  </Label>
                </div>

                {/* <div className="w-full">
                  <Label>
                    Geburtsdatum <span className="text-red-500">*</span>
                    <div className="gap-4">
                      <div className="bg-[#EAECF5]">
                        <DatePicker
                          id="date-picker-1"
                          placeholder="mm/dd/yyyy"
                          onChange={handleDateChange}
                        />
                      </div>
                    </div>
                  </Label>
                </div> */}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-brand-500 dark:text-white">
                Ihre Adresse
              </h3>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Label>
                    Straße <span className="text-red-500">*</span>
                    <Input
                      {...register("address")}
                      type="text"
                      placeholder="Straße"
                      error={!!errors.address}
                      hint={errors.address?.message}
                    />
                  </Label>
                  <Label>
                    Nr <span className="text-red-500">*</span>
                    <Input
                      {...register("pharmacy_street_number")}
                      type="text"
                      placeholder="11"
                      error={!!errors.pharmacy_street_number}
                      hint={errors.pharmacy_street_number?.message}
                    />
                  </Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Label>
                    Ort <span className="text-red-500">*</span>
                    <Input
                      {...register("city")}
                      type="text"
                      placeholder="Test city"
                      error={!!errors.city}
                      hint={errors.city?.message}
                    />
                  </Label>
                  <Label>
                    PLZ <span className="text-red-500">*</span>
                    <Input
                      {...register("postal_code")}
                      type="text"
                      placeholder="PLZ"
                      error={!!errors.postal_code}
                      hint={errors.postal_code?.message}
                    />
                  </Label>
                </div>
                <div className="flex flex-col">
                  <Label>
                    Steuernummer <span className="text-red-500">*</span>
                    <Input
                      {...register("tax_number")}
                      type="text"
                      placeholder="0000000000000321"
                      error={!!errors.tax_number}
                      hint={errors.tax_number?.message}
                    />
                  </Label>
                  <p className="text-[#0FB1D8]">
                    Die Steuernummer muss auf der Rechnung angegeben werden,
                  </p>
                </div>
                <div>
                  <Label>
                    Ich bin Umsatzsteuerpflichtig{" "}
                    <span className="text-red-500">*</span>
                    <Select
                      {...register("vat_liable")}
                      options={yesNoOptions}
                      defaultValue="true"
                      onChange={(selectedValue) => {
                        setValue("vat_liable", selectedValue === "true");
                      }}
                    />
                    
                    {errors.vat_liable && (
                      <p className="mt-1.5 text-xs text-error-500">
                        {errors.vat_liable.message}
                      </p>
                    )}
                  </Label>
                  <p className="text-[#0FB1D8]">
                    Man ist umsatzsteuerpflichtig, wenn man steuerbare Umsätze
                    über 22.000 Euro erzielt oder sich freiwillig dafür
                    entscheidet. Konsultiere bitte deinen Steuerberater dazu
                  </p>
                </div>
                <div>
                  <Label>
                    wenn ja dann Bitte Ihre USt-IdNr. eintragen .{" "}
                    <span className="text-red-500">*</span>
                    <Input
                      {...register("vat_id")}
                      type="text"
                      placeholder="USt-IdNr."
                      error={!!errors.vat_id}
                      hint={errors.vat_id?.message}
                    />
                  </Label>
                </div>
                <div>
                  <Label>
                    IBAN <span className="text-red-500">*</span>
                    <Input
                      {...register("iban")}
                      type="text"
                      placeholder="IBAN"
                      error={!!errors.iban}
                      hint={errors.iban?.message}
                    />
                  </Label>
                </div>
                <h2 className="text-xl font-bold text-blue-900 mb-4">
                  WEITERE INFORMATIONEN
                </h2>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <label className="text-base font-medium mr-2">
                      Ich kann mit folgenden Kassenprogrammen arbeiten:
                      <span className="text-red-500">*</span>
                    </label>

                    <button
                      type="button"
                      onClick={
                        selectedSystems.length === posSystems.length
                          ? deselectAll
                          : selectAll
                      }
                      className="text-md text-red-500 hover:underline ml-2"
                    >
                      {selectedSystems.length === posSystems.length
                        ? "Alle ausschließen"
                        : "Alle auswählen oder ausschliessen"}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {posSystems.map((system) => (
                      <div key={system.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={system.id}
                          checked={selectedSystems.includes(system.id)}
                          onChange={() => toggleSystem(system.id)}
                          className="w-4 h-4 border-gray-300 rounded mr-2"
                        />
                        <label htmlFor={system.id} className="text-sm">
                          {system.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>
                    Erfahrung seit <span className="text-red-500">*</span>
                    <Input
                      {...register("Experience")}
                      type="text"
                      placeholder="2022"
                      error={!!errors.Experience}
                      hint={errors.Experience?.message}
                    />
                  </Label>
                </div>
                <div>
                  <Label>
                    Umkreis des Vertretungsdienst *
                    <Select
                      {...register("distance")}
                      options={[
                        { value: "Bis zu 100 Km", label: "Bis zu 100 Km" },
                        { value: "Bis zu 200 Km", label: "Bis zu 200 Km" },
                        { value: "Bis zu 300 Km", label: "Bis zu 300 Km" },
                        { value: "Bundesweit", label: "Bundesweit" },
                      ]}
                      defaultValue="Bis zu 200 km"
                      onChange={(selectedValue) => {
                        setValue("distance", selectedValue);
                      }}
                    />
                  </Label>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <label className="text-base font-medium mr-2">
                      Ich kann an folgenden Tagen arbeiten:
                      <span className="text-red-500">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={
                        selectedDays.length === days.length
                          ? deselectAllDays
                          : selectAllDays
                      }
                      className="text-md text-red-500 hover:underline ml-2"
                    >
                      {selectedDays.length === days.length
                        ? "Alle ausschließen"
                        : "Alle auswählen"}
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {days.map((day) => (
                      <div key={day.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={day.id}
                          checked={selectedDays.includes(day.id)}
                          onChange={() => toggleDay(day.id)}
                          className="w-4 h-4 border-gray-300 rounded mr-2"
                        />
                        <label htmlFor={day.id} className="text-sm">
                          {day.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>
                    Ich mache die Vertretung *
                    <Select
                      {...register("work_type")}
                      options={[
                        { value: "Hauptberuflich", label: "Hauptberuflich" },
                        {
                          value: "Als Nebentätigkeit",
                          label: "Als Nebentätigkeit",
                        },
                        {
                          value: "Auf Minijob Basis",
                          label: "Auf Minijob Basis",
                        },
                      ]}
                      defaultValue="Hauptberuflich"
                      onChange={(selectedValue) => {
                        setValue("work_type", selectedValue);
                      }}
                    />
                  </Label>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <label className="text-base font-medium mr-2">
                      Sprachen:
                      <span className="text-red-500">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={
                        selectedLanguages.length === languages.length
                          ? deselectAllLanguages
                          : selectAllLanguages
                      }
                      className="text-md text-red-500 hover:underline ml-2"
                    >
                      {selectedLanguages.length === languages.length
                        ? "Alle ausschließen"
                        : "Alle auswählen"}
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {languages.map((lang) => (
                      <div key={lang.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={lang.id}
                          checked={selectedLanguages.includes(lang.id)}
                          onChange={() => toggleLanguage(lang.id)}
                          className="w-4 h-4 border-gray-300 rounded mr-2"
                        />
                        <label htmlFor={lang.id} className="text-sm">
                          {lang.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>
                    Heilberufausweis *
                    <Select
                      {...register("medical_certificate")}
                      options={yesNoOptions}
                      defaultValue="true"
                      onChange={(selectedValue) => {
                        setValue("medical_certificate", selectedValue === "true");
                      }}
                    />
                  </Label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <div className="flex flex-col gap-2">
                    <label className="bg-brand-500 text-white px-4 py-2 rounded cursor-pointer inline-flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
                      Zertifikate hochladen
                      <UploadIcon />
                      <input
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files && files.length > 0) {
                            setCertificate(files[0]);
                          }
                        }}
                      />
                    </label>
                    {certificate && (
                      <span className="text-sm text-gray-600">
                        Ausgewählt: {certificate.name}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="bg-brand-500 text-white px-4 py-2 rounded cursor-pointer inline-flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
                      Lebenslauf (CV) hochladen
                      <UploadIcon />
                      <input
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files && files.length > 0) {
                            setCv(files[0]);
                          }
                        }}
                      />
                    </label>
                    {cv && (
                      <span className="text-sm text-gray-600">
                        Ausgewählt: {cv.name}
                      </span>
                    )}
                  </div>
                </div>

                <p>
                  <span className="font-bold text-2xl">
                    Zertifikate & HBA ( in PDF ) *
                  </span>{" "}
                  <span className="underline">
                    Bitte laden Sie die Zertifikate nur im{" "}
                    <span className="text-red-400 px-1">PDF</span>Format hoch
                  </span>
                </p>

                <div>
                  <Label>
                    Beschreibung
                    <TextArea
                      {...register("biographical_info")}
                      rows={4}
                      onChange={(e) =>
                        handleTextAreaChange("biographical_info")(
                          e.target.value
                        )
                      }
                    />
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex justify-start">
              <Button size="md" type="submit" disabled={isLoading}>
                {isLoading ? "Wird gespeichert..." : "Profil Speichern"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Profile;