import SetNewPasswordForm from "../components/ResetPassword"
import AuthLayout from "./AuthPageLayout"

function ResetPassword() {
  return (
    <div>
        <AuthLayout>
    <SetNewPasswordForm />
        </AuthLayout>
    </div>
  )
}

export default ResetPassword