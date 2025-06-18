import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Label from '@/components/form/Label';
import Input from '@/components/form/input/InputField';
import Button from '@/components/ui/button/Button';
import { EyeIcon, EyeCloseIcon } from '@/assets/icons';
import { useChangePasswordMutation } from '@/Modules/Worker/services/profile/api/ProfileApi';
import { toast } from 'react-hot-toast';  
const schema = z.object({
  current_password: z.string().nonempty('Das aktuelle Passwort ist erforderlich.'),
  new_password: z
    .string()
    .nonempty('Das neue Passwort ist erforderlich.')
    .min(8, 'Das Passwort muss mindestens 8 Zeichen lang sein.')
    .regex(
      /^(?=.*[A-Z])(?=.*\d).{8,}$/,
      'Das Passwort muss mindestens einen Großbuchstaben und eine Zahl enthalten.'
    ),
  confirm_password: z.string().nonempty('Die Passwortbestätigung ist erforderlich.'),
}).refine((data) => data.new_password === data.confirm_password, {
  message: 'Passwörter stimmen nicht überein.',
  path: ['confirm_password'],
});

type FormData = z.infer<typeof schema>;

export default function ChangePasswordForm() {
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await changePassword(data).unwrap();
      reset();
      toast.success('Passwort wurde erfolgreich geändert');

    } catch (error) {
      console.error('Password change failed:', error);
      toast.error('Passwort konnte nicht geändert werden');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label>
          Aktuelles Passwort <span className="text-error-500">*</span>
        </Label>
        <div className="relative">
          <Input
            type={showCurrentPassword ? 'text' : 'password'}
            placeholder="Geben Sie Ihr aktuelles Passwort ein"
        
            {...register('current_password')}
          />
          <span
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
          >
            {showCurrentPassword ? (
              <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
            ) : (
              <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
            )}
          </span>
        </div>
            <p className='text-error-500 text-sm'>{errors.current_password?.message}</p>
      </div>

      <div>
        <Label>
          Neues Passwort <span className="text-error-500">*</span>
        </Label>
        <div className="relative">
          <Input
            type={showNewPassword ? 'text' : 'password'}
            placeholder="Geben Sie Ihr neues Passwort ein"
            
            {...register('new_password')}
          />
          <span
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
          >
            {showNewPassword ? (
              <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
            ) : (
              <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
            )}
          </span>
        </div>
        <p className='text-error-500 text-sm'>{errors.new_password?.message}</p>
      </div>

      <div>
        <Label>
          Passwort bestätigen <span className="text-error-500">*</span>
        </Label>
        <div className="relative">
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Bestätigen Sie Ihr neues Passwort"
            {...register('confirm_password')}
          />

          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
          >
            {showConfirmPassword ? (
              <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
            ) : (
              <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
            )}
          </span>
        </div>
        <p className='text-error-500 text-sm'>{errors.confirm_password?.message}</p>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Wird geändert...' : 'Passwort ändern'}
      </Button>
    </form>
  );
} 