import PharmacyInfo from "../components/EmpDetails"
import JobHero from "../components/EmpHero"

function Employee() {
  return (
        <div className="space-y-5 sm:space-y-6 p-10 rounded-2xl overflow-hidden bg-white">
        <JobHero/>
        <PharmacyInfo/>
    </div>
  )
}

export default Employee