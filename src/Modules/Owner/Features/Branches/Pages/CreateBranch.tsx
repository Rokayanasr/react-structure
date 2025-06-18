import { useGetProfileQuery } from "@/Modules/Owner/services/profile/api/profileApi";
  import BranchForm from "../components/BranchForm"

function CreateBranch() {
  const {data: profile} = useGetProfileQuery();
  return (  
    <BranchForm mode='create' onSubmit={() => {}} pharmacy={profile}/>
  )
}

export default CreateBranch