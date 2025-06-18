import { useForm, Controller } from 'react-hook-form';
import { Modal } from '@/components/ui/modal';
import { JobOffer } from '../types/jobOffer.type';
import Input from '@/components/form/input/InputField';
import TextArea from '@/components/form/input/TextArea';
import Label from '@/components/form/Label';
import Select from '@/components/form/Select';
import Button from '@/components/ui/button/Button';

interface EditJobOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobOffer: JobOffer | null;
  onSubmit: (data: Partial<JobOffer>) => void;
  isLoading: boolean;
}

const jobTypes = [
  { value: 'Apotheker/-innen', label: 'Apotheker/-innen' },
  { value: 'Nachtdienst', label: 'Nachtdienst' },
  { value: 'PTA', label: 'PTA' },
  { value: 'PKA', label: 'PKA' }
];

const EditJobOfferModal = ({ isOpen, onClose, jobOffer, onSubmit, isLoading }: EditJobOfferModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm<Partial<JobOffer>>({
    defaultValues: jobOffer || {}
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!jobOffer) return null;

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="max-w-2xl">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Angebot bearbeiten
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label>
              Titel <span className="text-error-500">*</span>
            </Label>
            <Input
              {...register('title', { required: 'Titel ist erforderlich' })}
              error={!!errors.title}
              hint={errors.title?.message}
              defaultValue={jobOffer.title}
            />
          </div>

          <div>
            <Label>
              Art der Stelle <span className="text-error-500">*</span>
            </Label>
            <Controller
              name="type"
              control={control}
              rules={{ required: 'Art der Stelle ist erforderlich' }}
              render={({ field }) => (
                <Select
                  options={jobTypes}
                  onChange={field.onChange}
                  error={!!errors.type}
                  hint={errors.type?.message}
                  defaultValue={field.value}
                  name={field.name}
                />
              )}
            />
          </div>

          <div>
            <Label>
              Startdatum <span className="text-error-500">*</span>
            </Label>
            <Input
              type="date"
              {...register('startDate', { required: 'Startdatum ist erforderlich' })}
              error={!!errors.startDate}
              hint={errors.startDate?.message}
              defaultValue={jobOffer.startDate}
            />
          </div>

          <div>
            <Label>
              Enddatum <span className="text-error-500">*</span>
            </Label>
            <Input
              type="date"
              {...register('endDate', { required: 'Enddatum ist erforderlich' })}
              error={!!errors.endDate}
              hint={errors.endDate?.message}
              defaultValue={jobOffer.endDate}
            />
          </div>

          <div>
            <Label>
              Stundenlohn (€) <span className="text-error-500">*</span>
            </Label>
            <Input
              type="number"
              {...register('hourlyRate', { 
                required: 'Stundenlohn ist erforderlich',
                min: { value: 0, message: 'Stundenlohn muss größer als 0 sein' }
              })}
              error={!!errors.hourlyRate}
              hint={errors.hourlyRate?.message}
              defaultValue={jobOffer.hourlyRate}
            />
          </div>

          <div>
            <Label>
              Beschreibung <span className="text-error-500">*</span>
            </Label>
            <TextArea
              {...register('description', { required: 'Beschreibung ist erforderlich' })}
              error={!!errors.description}
              hint={errors.description?.message}
              defaultValue={jobOffer.description}
              rows={4}
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isLoading}
            >
              Abbrechen
            </Button>
            <Button
              type="submit"
              variant="primary" 
              disabled={isLoading}
            >
              {isLoading ? 'Wird gespeichert...' : 'Änderungen speichern'}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditJobOfferModal; 