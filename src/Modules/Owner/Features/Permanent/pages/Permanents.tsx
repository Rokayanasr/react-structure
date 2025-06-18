import { useForm, Controller } from 'react-hook-form';
import DatePicker from "@/components/form/date-picker";
import Form from "@/components/form/Form"
import Input from "@/components/form/input/InputField"
import Label from "@/components/form/Label"
import Select from "@/components/form/Select";
import Button from '@/components/ui/button/Button';

// Define the form data interface
interface PermanentsFormData {
  qualification:string
  pharmacyName: string;
  email: string;
  entryDate: Date | null;
  street: string;
  postalCodeCity: string;
  workType?: 'Vollzeit' | 'Teilzeit';
  message: string;
}

function Permanents() {
  const { 
    control, 
    handleSubmit, 
    formState: { errors }, 
  } = useForm<PermanentsFormData>({
    defaultValues: {
      qualification: 'Sonstiges',
      entryDate: null,
      email: '',
    }
  });

  const onSubmit = (data: PermanentsFormData) => {
    console.log(data);
  };

  return ( 
    <div className='rounded-2xl border overflow-hidden border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800'>
      <Form className='space-y-8' onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6">
          <div>
            <Label>
              Beruf / Qualifikation
              <Controller
                name="qualification"
                control={control}
                rules={{ required: 'qualification' }}
                render={({ field }) => (
                  <Select
                    options={[
                      { value: "Filialleiter/in", label: "Filialleiter/in" },
                      { value: "Apotheker/in", label: "Apotheker/in" },
                      { value: "Pharmaziepraktikant/in", label: "Pharmaziepraktikant/in" },
                      { value: "PTA", label: "PTA" },
                      { value: "PKA", label: "PKA" },
                      { value: "PKA in Ausbildung", label: "PKA in Ausbildung" },
                      { value: "PTA-Praktikant/in", label: "PTA-Praktikant/in" },
                      { value: "Sonstiges", label: "Sonstiges" },
                    ]}
                    defaultValue={field.value}
                    onChange={(selectedValue) => {
                      if (selectedValue === "Herr" || selectedValue === "Frau") {
                        field.onChange(selectedValue);
                      }
                    }}
                  />
                )}
              />
              {errors.qualification && <p className='mt-1.5 text-xs text-error-500'>{errors.qualification.message}</p>}
            </Label>
          </div>

          <div>
            <Label>
              Name der Apotheke
              <Controller
                name="pharmacyName"
                control={control}
                rules={{ required: 'Pharmacy name is required' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    required
                    type='text'
                    placeholder='Name der Apotheke'
                    hint=""
                  />
                )}
              />
              {errors.pharmacyName && <p className='mt-1.5 text-xs text-error-500'>{errors.pharmacyName.message}</p>}
            </Label>
          </div>

            {/* email */}
            <div className="w-full">
            <Label>
              Email 
              <div className="gap-4">
                <div className="bg-[#EAECF5]">
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: 'Email is required' }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        required
                        type='email'
                        placeholder='Email'
                        hint=""
                      />
                    )}
                  />
                </div>
              </div>
              {errors.email && <p className='mt-1.5 text-xs text-error-500'>{errors.email.message}</p>}
            </Label>
          </div>

          <div className="w-full">
            <Label>
              Eintrittstermin 
              <div className="gap-4">
                <div className="bg-[#EAECF5]">
                  <Controller
                    name="entryDate"
                    control={control}
                    rules={{ required: 'Entry date is required' }}
                    render={({ field }) => (
                      <DatePicker
                        id="date-picker-1"
                        placeholder="mm/dd/yyyy"
                        onChange={(dates) => {
                          field.onChange(dates);
                        }}
                       
                      />
                    )}
                  />
                </div>
              </div>
              {errors.entryDate && <p className='mt-1.5 text-xs text-error-500'>{errors.entryDate.message}</p>}
            </Label>
          </div>

          <div>
            <Label>
              Straße & Nr
              <Controller
                name="street"
                control={control}
                rules={{ required: 'Street is required' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    required
                    type='text'
                    placeholder='Street test'
                    hint=""
                  />
                )}
              />
              {errors.street && <p className='mt-1.5 text-xs text-error-500'>{errors.street.message}</p>}
            </Label>
          </div>

          <div>
            <Label>
              PLZ & Ort
              <Controller
                name="postalCodeCity"
                control={control}
                rules={{ required: 'Postal code and city are required' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    required
                    type='text'
                    placeholder='PLZ & Ort'
                    hint=""
                  />
                )}
              />
              {errors.postalCodeCity && <p className='mt-1.5 text-xs text-error-500'>{errors.postalCodeCity.message}</p>}
            </Label>
          </div>

          <div className='flex items-center gap-4'>
            <div className="flex items-center">
              <Controller
                name="workType"
                control={control}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    checked={field.value === 'Vollzeit'}
                    onChange={() => {
                      field.onChange(field.value === 'Vollzeit' ? undefined : 'Vollzeit');
                    }}
                    className="w-4 h-4 border-gray-300 rounded mr-2"
                  />
                )}
              />
              <label className="text-sm">
                Vollzeit
              </label>
            </div>
            <div className="flex items-center">
              <Controller
                name="workType"
                control={control}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    checked={field.value === 'Teilzeit'}
                    onChange={() => {
                      field.onChange(field.value === 'Teilzeit' ? undefined : 'Teilzeit');
                    }}
                    className="w-4 h-4 border-gray-300 rounded mr-2"
                  />
                )}
              />
              <label className="text-sm">
                Teilzeit
              </label>
            </div>
          </div>

          <div>
            <Label>
              Nachricht
              <Controller
                name="message"
                control={control}
                rules={{ required: 'Message is required' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    required
                    type='text'
                    placeholder='Nachricht'
                    hint=""
                  />
                )}
              />
              {errors.message && <p className='mt-1.5 text-xs text-error-500'>{errors.message.message}</p>}
            </Label>
          </div>
        </div>
           <div className="flex items-center">
            
                  <input
                    type="checkbox"
                    onChange={() => {
                    }}
                    className="w-4 h-4 border-gray-300 rounded mr-2"
                  />
              
            
              <label className="text-sm">
                Ich akzeptiere die AGB & Datenschutz 
              </label>
            </div>

           <div className='flex justify-start'>
                           <Button size="md">Absenden</Button> 
                        </div>
      </Form>
    </div>
  )
}

export default Permanents