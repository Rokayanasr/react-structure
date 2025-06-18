import { useState } from "react";
import AuthLayout from "./AuthPageLayout";
import WelcomeStep from "../components/WelcomStep";
import ChooseRole from "../components/ChooseRole";



type Step = "welcome" | "choose" 

const Welcome = () => {
  const [step, setStep] = useState<Step>("welcome");

  const handleNext = () => setStep(step === "welcome" ? "choose" : "welcome");

  return (
    <AuthLayout>
 {step==="welcome"&&<WelcomeStep onNext={handleNext} />}


      {step === "choose" && <ChooseRole />}


    </AuthLayout>
  );
};

export default Welcome;