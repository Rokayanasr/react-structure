import { useState } from 'react';
import ChangePassword from '@/components/changePassword/ChangePassword';
import { toast } from 'react-hot-toast';
import PageBreadcrumb from '@/components/common/PageBreadCrumb';

const OwnerChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePassword = async () => {
    try {
        //TODO implemet api later
      setIsLoading(true);
      toast.success('Passwort wurde erfolgreich geändert');
    } catch (error) {
      toast.error('Fehler beim Ändern des Passworts');
      console.error('Error changing password:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full px-4 py-8">
      <div className=" mx-auto">
      <PageBreadcrumb pageTitle='Passwort Ändern' />
      <div className="bg-white md:p-6 p-4 shadow-md dark:bg-gray-800 rounded-lg">
          <ChangePassword
            onSubmit={handleChangePassword}
            title="Passwort Ändern"
            buttonText={isLoading ? "Wird geändert..." : "Passwort Ändern"}
          />
        </div>
      </div>
    </div>
  );
};

export default OwnerChangePassword; 