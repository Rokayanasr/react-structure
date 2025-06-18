export const ROLES = {
    ADMIN: "admin",
    OWNER: "pharmacy_owner",
    WORKER: "pharmacist",
};

// ... existing code ...
export interface ChangePasswordProps {
    onSubmit: (data: {
      oldPassword: string;
      newPassword: string;
      confirmPassword: string;
    }) => void;
    title?: string;
    buttonText?: string;
  }
  // ... existing code ...