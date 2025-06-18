import { useState, useRef, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useVerifyOtpMutation } from "../services/api/AuthApis";
import { useNavigate } from "react-router";

interface VerifyInputs {
  otp: string;
  email: string;
}

const schema = z.object({
  // ... existing code ...
  otp: z
    .string()
    .length(6, { message: "Der Code muss 6 Ziffern enthalten." })
    .regex(/^\d+$/, { message: "Der Code darf nur Ziffern enthalten." }),
  email: z.string().email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }),
});

function Verify() {
  const navigate = useNavigate();
  const [verify, { isLoading }] = useVerifyOtpMutation();
  const email = localStorage.getItem("email");

  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const {
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<VerifyInputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: email || "",
      otp: "",
    },
  });

  useEffect(() => {
    const combinedOtp = code.join("");
    setValue("otp", combinedOtp);
    if (email) {
      setValue("email", email);
    }
  }, [code, email, setValue]);

  useEffect(() => {
    if (!email) {
      console.error("E-Mail ist nicht im Local Storage gespeichert.");

    }
  }, [email]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit: SubmitHandler<VerifyInputs> = async (data) => {
    if (!email) {
      setError("email", { message: "E-Mail ist nicht verfügbar." });
      return;
    }

    try {
      await verify({ 
        email, 
        otp: data.otp 
      }).unwrap();

      navigate("/reset-password");
      console.log("OTP erfolgreich bestätigt!");
    } catch (error) {
      console.error("OTP-Bestätigung fehlgeschlagen:", error);
      setError("otp", { message: "Ungültiger Code. Bitte versuchen Sie es erneut." });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white w-full p-6">
      <form
        className="w-full max-w-sm space-y-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-brand-500 text-4xl text-center font-bold mb-8">
          Verifizierung
        </h1>
        <p className="text-center">Bitte gib den 6-stelligen Code ein.</p>

        <div className="flex justify-center gap-4 mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 border-2 rounded-lg text-center text-2xl text-Main focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
            />
          ))}
        </div>

        {errors.otp && (
          <p className="text-red-500 text-center">{errors.otp.message}</p>
        )}

        {errors.email && (
          <p className="text-red-500 text-center">{errors.email.message}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-brand-500 text-white py-2 rounded-md hover:bg-opacity-90 transition disabled:opacity-50"
        >
          <span>{isLoading ? "Wird gesendet..." : "Senden"}</span>
        </button>
      </form>
    </div>
  );
}

export default Verify;