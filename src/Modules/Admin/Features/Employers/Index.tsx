import { Outlet } from 'react-router-dom'

function Index() {
  return (
    <div className="w-full overflow-x-hidden">
      <Outlet />
    </div>  
  )
}

export default Index