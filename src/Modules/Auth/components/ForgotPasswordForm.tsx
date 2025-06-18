import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useForm } from "react-hook-form";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { useForgotPasswordMutation } from "../services/api/AuthApis";
import { useNavigate } from 'react-router';
// ... existing code ...

const schema = z.object({
  email: z.string().nonempty("E-Mail ist erforderlich.")
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
});

type FormData = z.infer<typeof schema>;

 function ForgotPasswordForm() {
  const navigate = useNavigate();

  const [ForgotPassword, { isLoading }] = useForgotPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await ForgotPassword(data).unwrap();
      navigate("/verify")
      localStorage.setItem("email", data.email);
    } catch (err) {
        console.log(err);
        
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center items-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-brand-500 text-title-sm dark:text-white/90 sm:text-title-md text-center">
              Passwort zurücksetzen
            </h1>
            <p className="text-sm text-gray-600 text-center dark:text-gray-400">
              Bitte geben Sie Ihre E-Mail-Adresse ein. Wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label>
                Email <span className="text-error-500">*</span>
              </Label>
              <Input
                {...register("email")}
                placeholder="info@example.com"
              />
              <p className="text-error-500 text-sm mt-1">{errors.email?.message}</p>
            </div>

            <div className='flex justify-center'>
              <Button className="w-1/2" size="sm" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Senden...
                  </span>
                ) : (
                  "Link senden"
                )}
              </Button>
            </div>

          
          
          </form>
        </div>
      </div>
    </div>
  );
}


export default ForgotPasswordForm