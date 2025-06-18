export interface ApplicantCardProps {
    name: string;
    pharmacyName: string;
    applicationDate: string;
    firstWorkingDay: string;
    location: string;
    price: number;
    fees: number;
    status: "Accepted" | "Pending" | "Rejected";
    image: string;
}

export interface Applicant extends ApplicantCardProps {
    id: number;
} 