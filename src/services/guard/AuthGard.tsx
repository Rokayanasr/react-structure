// AuthGuard.tsx
import Cookies from "js-cookie";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: Props) => {
  // ... existing code ...
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
        window.location.href = "/welcome";
    }
  }, [token]);

  return <>{children}</>;
};

export default AuthGuard;
