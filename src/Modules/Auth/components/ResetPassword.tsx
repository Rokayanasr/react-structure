import {  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { useRestPasswordMutation } from "../services/api/AuthApis";
// ... existing code ...

const schema = z
  .object({
    password: z
      .string()
      .nonempty("Passwort ist erforderlich.")
      .min(8, "Das Passwort muss mindestens 8 Zeichen lang sein.")
      .regex(
        /^(?=.*[A-Z])(?=.*\d).{8,}$/,
        "Das Passwort muss mindestens einen Großbuchstaben und eine Zahl enthalten."
      ),
    confirmPassword: z.string().nonempty("Bestätigung ist erforderlich."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwörter stimmen nicht überein.",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

function SetNewPasswordForm() {
  const  email = localStorage.getItem("email");
  const navigate = useNavigate();
  const [resetPassword, { isLoading, isError }] = useRestPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (!email ) return;

    try {
      await resetPassword({
        email,
        password: data.password,
        password_confirmation: data.confirmPassword,
      }).unwrap();
      navigate("/sign-in");
      localStorage.removeItem("email");
    } catch (error) {
      console.error("Password reset failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold text-center mb-6">
          Neues Passwort festlegen
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Label>
              Neues Passwort <span className="text-error-500">*</span>
            </Label>
            <Input
              type="password"
              placeholder="Neues Passwort"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-error-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <Label>
              Passwort bestätigen <span className="text-error-500">*</span>
            </Label>
            <Input
              type="password"
              placeholder="Passwort bestätigen"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-error-500 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {isError && (
            <p className="text-sm text-error-500">
              Etwas ist schiefgelaufen. Versuche es erneut.
            </p>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Wird gesendet..." : "Passwort zurücksetzen"}
          </Button>
        </form>
      </div>
    </div>
  );
}
export default SetNewPasswordForm