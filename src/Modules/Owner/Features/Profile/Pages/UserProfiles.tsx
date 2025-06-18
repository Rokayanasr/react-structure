import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import UserMetaCard from "./../components/UserProfile/UserMetaCard";
import UserInfoCard from "./../components/UserProfile/UserInfoCard";
import UserPharmacyCard from "../components/UserProfile/UserPharmacyCard";
import { useGetProfileQuery } from "@/Modules/Owner/services/profile/api/profileApi";
import LoadingState from "@/components/common/LoadingState";
import EmptyState from "@/components/common/EmptyState";
import { UserIcon } from "@/assets/icons";

export default function UserProfiles() {
    const { data: user, isLoading: userLoading } = useGetProfileQuery();

    //destruct from user
    const userInfo = {
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email,
        profile_picture: user?.profile_picture,
        role: user?.role,
        profile_completion: user?.profile_completion,
        biographical_info: user?.biographical_info,
        status: user?.status,
        contact_salutation: user?.contact_salutation,
    };

       

    const pharmacyInfo = user?.pharmacy;

    return (
        <>
            {userLoading ? (
                <LoadingState message='Lade Profildaten...' />
            ) : !user ? (
                <EmptyState
                    icon={<UserIcon className='h-12 w-12' />}
                    title='Keine Profildaten verfügbar'
                    message='Es konnten keine Profildaten gefunden werden. Bitte versuchen Sie es später erneut.'
                />
            ) : (
                <>
                    <PageBreadcrumb pageTitle='Profil' />
                    <div className='rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6'>
                        <h3 className='mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7'>Profilinformationen</h3>
                        <div className='space-y-6'>
                            <UserMetaCard info={userInfo} />
                            <UserInfoCard info={userInfo} />
                            {pharmacyInfo && <UserPharmacyCard info={pharmacyInfo} />}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
