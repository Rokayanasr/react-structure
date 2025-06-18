import {  useState } from "react";
import { EyeCloseIcon, EyeIcon } from "../../../assets/icons";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Checkbox from "@/components/form/input/Checkbox";
import Button from "@/components/ui/button/Button";
import { zodResolver } from '@hookform/resolvers/zod';
import {  z } from "zod";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../services/api/AuthApis";
import { Link } from "react-router";
import Cookies from 'js-cookie'

// ... existing code ...
const schema = z.object({
  email: z.string().nonempty("E-Mail ist erforderlich.").email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  password: z.string().nonempty("Passwort ist erforderlich.")
    .min(8, "Das Passwort muss mindestens 8 Zeichen lang sein.")
    .regex(/^(?=.*[A-Z])(?=.*\d).{6,}$/, "Das Passwort muss mindestens einen Großbuchstaben und eine Zahl enthalten."),
});

type FormData = z.infer<typeof schema>;

export default function AdminForm() {
const [login, { isLoading, isError }] = useLoginMutation();



  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkError, setCheckError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit =async (data: FormData) => {
    if (!isChecked) {
      setCheckError("Sie müssen zustimmen, um fortzufahren.");
      return;
    }
      setCheckError("");

     try {
    const res = await login(data).unwrap();
    Cookies.set("token",res?.data?.token)
    Cookies.set("role",res?.data?.user?.role)
    location.href ="/"
    console.log("Login success:", res);
  } catch (err) {
    console.error("Login failed:", err);
  }
   

  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-brand-500 text-title-sm dark:text-white/90 sm:text-title-md text-center">
              Als Administratorin anmelden
            </h1>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>
                  </Label>
                  <Input
                  required={false}
                    {...register("email")}
                    placeholder="info@gmail.com"
                  />
                  <p>{errors.email?.message}</p>
                </div>
                <div>
                  <Label>
                    Passwort <span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      {...register("password")}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                     
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>

                  </div>
                                                        <p>{errors.password?.message}</p>

                </div>
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Ich möchte angemeldet bleiben
                    </span>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Passwort Vergessen?
                  </Link>
                </div>
                {checkError && (
                  <p className="text-error-500 text-sm mt-1">{checkError}</p>
                )}


                <div>
                       <Button className="w-1/4" size="sm" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                        </svg>
                        Lädt...
                      </span>
                    ) : (
                      "Anmelden"
                    )}
                  </Button>
                </div>
              </div>
            </form>
{isError&&                  <p className="text-error-500 text-sm mt-1">Ungültige E-Mail-Adresse oder falsches Passwort</p>
}
          </div>
        </div>
      </div>
    </div>
  );
}
