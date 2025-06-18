import Hero from "../Components/Hero"
import JobList from "../Components/JobList"

function Operations() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4 bg-white rounded-2xl shadow-md">
        <Hero/>
        <JobList/>
    </div>
  )
}

export default Operations