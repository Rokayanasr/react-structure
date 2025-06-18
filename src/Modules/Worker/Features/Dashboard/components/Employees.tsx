import ProfileCard from "@/components/common/ProfileCard";
import { useNavigate } from "react-router";

function Employees() {
  const navigate=useNavigate()
  const employees =[
    // ... existing code ...
    {
        name: "Anas Zakrour",
        role: "Kunstmaler/Syrien",
        location: "Standort: 44809 Bochum",
        hourlyRate: 25,
        startDate: "01/01/2025",
        workDays: 4,
        imageUrl: "./images/user/owner.jpg",
        isAccepted: true,
    }, {
        name: "Anas Zakrour",
        role: "Kunstmaler/Syrien",
        location: "Standort: 44809 Bochum",
        hourlyRate: 25,
        startDate: "01/01/2025",
        workDays: 4,
        imageUrl: "./images/user/owner.jpg",
        isAccepted: true,
    }, {
        name: "Anas Zakrour",
        role: "Kunstmaler/Syrien",
        location: "Standort: 44809 Bochum",
        hourlyRate: 25,
        startDate: "01/01/2025",
        workDays: 4,
        imageUrl: "./images/user/owner.jpg",
        isAccepted: true,
    }, {
        name: "Anas Zakrour",
        role: "Kunstmaler/Syrien",
        location: "Standort: 44809 Bochum",
        hourlyRate: 25,
        startDate: "01/01/2025",
        workDays: 4,
        imageUrl: "./images/user/owner.jpg",
        isAccepted: true,
    }
  ]
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {employees.map((Employee, index) => (
        <ProfileCard profile={Employee} onClick={()=>navigate("/job")}  key={index} />
      ))}
    </div>
  );
}

export default Employees;
