import { useForm } from 'react-hook-form';
import Input from '../form/input/InputField';
import { ChangePasswordProps } from '@/constants/auth.const';
import { useState } from 'react';
import { EyeIcon, EyeCloseIcon } from '@/assets/icons';

interface FormData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

function ChangePassword({ 
  onSubmit, 
  buttonText = "passwort ändern"
}: ChangePasswordProps) {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm<FormData>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  });

  const newPassword = watch('newPassword');

  const onSubmitForm = (data: FormData) => {
    onSubmit(data);
  };

  return (
    <div className="max-w-full w-full h-full mx-auto rounded-lg dark:bg-gray-800">
      {/* <h2 className="text-2xl text-brand-500 font-bold mb-6 dark:text-white">{title}</h2> */}
      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-white">
            Alter Passwort
          </label>
          <div className="relative">
            <Input
              type={showOldPassword ? "text" : "password"}
              placeholder="Geben Sie Ihr aktuelles Passwort ein"
              error={!!errors.oldPassword}
              hint={errors.oldPassword?.message}
              {...register('oldPassword', {
                required: 'Bitte geben Sie Ihr altes Passwort ein'
              })}
            />
            <span
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
            >
              {showOldPassword ? (
                <EyeIcon className="fill-gray-200 dark:fill-gray-400 size-5" />
              ) : (
                <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
              )}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-white">
            Neues Passwort
          </label>
          <div className="relative">
            <Input
              type={showNewPassword ? "text" : "password"}
              placeholder="Geben Sie Ihr neues Passwort ein"
              error={!!errors.newPassword}
              hint={errors.newPassword?.message}
              {...register('newPassword', {
                required: 'Bitte geben Sie ein neues Passwort ein',
                minLength: {
                  value: 8,
                  message: 'Das Passwort muss mindestens 8 Zeichen lang sein'
                }
              })}
            />
            <span
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
            >
              {showNewPassword ? (
                <EyeIcon className="fill-gray-200 dark:fill-gray-400 size-5" />
              ) : (
                <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
              )}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-white">
            Passwort erneut eingeben
          </label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Bestätigen Sie Ihr neues Passwort"
              error={!!errors.confirmPassword}
              hint={errors.confirmPassword?.message}
              {...register('confirmPassword', {
                required: 'Bitte bestätigen Sie Ihr neues Passwort',
                validate: (value) => 
                  value === newPassword || 'Passwörter stimmen nicht überein'
              })}
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
            >
              {showConfirmPassword ? (
                <EyeIcon className="fill-gray-200 dark:fill-gray-400 size-5" />
              ) : (
                <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
              )}
            </span>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-fit bg-brand-600 text-white py-2.5 px-4 rounded-lg hover:bg-brand-700 transition duration-200 h-11 dark:bg-brand-500 dark:hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Wird geändert..." : buttonText}
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;