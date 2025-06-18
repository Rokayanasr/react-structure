import React from 'react'
import AuthPageLayout from './Pages/AuthPageLayout'
import { Outlet } from 'react-router-dom'

function Index() {
  return (
    <AuthPageLayout>
      <Outlet />
    </AuthPageLayout>
  )
}

export default Index