import ProfileCard from "@/components/common/ProfileCard";

function Employees() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <ProfileCard key={index} />
      ))}
    </div>
  );
}

export default Employees;
