import React from "react";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router";

interface ErrorStateProps {
    statusCode: number;
    onLogin?: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ statusCode }) => {
    const navigate = useNavigate();
    const getErrorDetails = (code: number) => {
        switch (code) {
            case 500:
                return {
                    icon: "💥",
                    title: "Hoppla... Fehler 500",
                    message:
                        "Wir haben derzeit technische Schwierigkeiten. Unser Team arbeitet bereits an einer Lösung.",
                    bgColor: "bg-red-50 dark:bg-red-950",
                    borderColor: "border-red-200 dark:border-red-800",
                    textColor: "text-red-700 dark:text-red-300",
                };
            case 404:
                return {
                    icon: "😢",
                    title: "404",
                    message:
                        "Verloren in der digitalen Wildnis. Du hast dich in unerforschtes digitales Gebiet gewagt. Die gesuchte Seite konnten wir leider nicht finden. Lass uns dich zurück auf bekannte Pfade führen.",
                    bgColor: "bg-gray-50 dark:bg-gray-900",
                    borderColor: "border-gray-200 dark:border-gray-700",
                    textColor: "text-gray-700 dark:text-gray-300",
                };
            case 401:
                return {
                    icon: "🔒",
                    title: "Nicht autorisiert",
                    message: "Sie müssen sich anmelden, um auf diese Seite zugreifen zu können.",
                    bgColor: "bg-yellow-50 dark:bg-yellow-950",
                    borderColor: "border-yellow-200 dark:border-yellow-800",
                    textColor: "text-yellow-700 dark:text-yellow-300",
                };
        }
    };

    const errorDetails = getErrorDetails(statusCode);

    return (
        <div className="min-h-[400px]">
            <div className={`w-full bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-8 ${errorDetails?.bgColor}`}>
                <div className="text-center">
                    {/* <div className="flex justify-center items-center mb-6"> */}
                        <div className="text-6xl mb-4" role="img" aria-label="Error Icon">
                            {errorDetails?.icon}
                        </div>
                        <h2 className={`text-5xl font-bold mb-2 text-gray-800 dark:text-gray-100`}>{errorDetails?.title}</h2>
                    {/* </div> */}
                    <p className={`text-lg text-gray-800 dark:text-gray-200 mb-6`}>{errorDetails?.message}</p>
                    <div className="space-y-3">
                        {statusCode === 401 ? (
                            <Button onClick={() => navigate("/")}>Anmelden</Button>
                        ) : statusCode === 500 ? (
                            <Button onClick={() => window.location.reload()}>Seite neu laden</Button>
                        ) : statusCode === 404 ? (
                            <Button onClick={() => navigate("/")}>Zur Startseite</Button>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorState;
