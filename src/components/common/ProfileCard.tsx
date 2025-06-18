import { Cash, MapPin, CalenderIcon } from "@/assets/icons";
import { FC } from "react";

type ProfileData= {
    name: string;
    role: string;
    location: string;
    hourlyRate: number;
    startDate: string;
    workDays: number;
    imageUrl?: string;
    isAccepted?: boolean;
}

interface profileCardProps{
  profile:ProfileData
  onClick:()=>void
}

 const  ProfileCard:FC<profileCardProps>=({profile,onClick})=> {

    return (
        <div className='w-full mx-auto bg-white rounded-2xl p-2 shadow-md border cursor-pointer  overflow-hidden' onClick={onClick}>
            <div className='p-4 grid grid-cols-4'>
                <div className=''>
                    <img src={profile.imageUrl} alt={profile.name} className='h-25 w-25 rounded-full object-cover' />
                </div>

                <div className='mt-4 space-y-2 text-sm col-span-3 text-gray-700'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex  justify-between'>
                            <h3 className='text-lg font-medium text-gray-900'>{profile.name}</h3>
                            {profile.isAccepted && (
                                <span className=' items-center px-2.5 py-1 rounded-md text-sm font-medium bg-[#D1FADF] text-[#039855]'>Akzeptiert</span>
                            )}
                        </div>
                        <p className='text-sm bg-[#0FB1D8] py-2 px-4 w-60 rounded-lg text-center  text-white font-medium'>{profile.role}</p>
                    </div>
                    <div className='flex items-center'>
                        <MapPin className='text-gray-500 w-5 h-5 mr-2' />
                        <span>{profile.location}</span>
                    </div>

                    <div className='flex items-center'>
                        <Cash className='text-gray-500 mr-2 w-5 h-5' />
                        <span>Std. Preis: ${profile.hourlyRate}/pro Stunde</span>
                    </div>

                    <div className='flex items-center'>
                        <CalenderIcon className='text-gray-500 w-5 h-5 mr-2' />
                        <span>Erster Arbeitstag: {profile.startDate}</span>
                    </div>

                    <div className='flex items-center'>
                        <CalenderIcon className='text-gray-500 w-5 h-5 mr-2' />
                        <span>Arbeitstage: {profile.workDays} Tage</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard