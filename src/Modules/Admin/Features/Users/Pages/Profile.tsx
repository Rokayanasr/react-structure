import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Form from "@/components/form/Form";
import Button from "@/components/ui/button/Button";
import { useState } from "react";
import { NewUserData } from "../types/NewUserData";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import { EyeIcon, EyeCloseIcon } from '@/assets/icons';


export default function UserProfileForm() {
    const { register, handleSubmit } = useForm<NewUserData>();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit: SubmitHandler<NewUserData> = (data) => {
        console.log(data);
    };

    return (
        <div>
            <PageMeta
                title='React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template'
                description='This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template'
            />
            <PageBreadcrumb pageTitle='Profile' />
            <div className='min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>

                    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* <Label>Username (required)</Label>
                        <Input {...register("username", { required: true })} /> */}

                        <Label>First Name</Label>
                        <Input {...register("firstName")} />

                        <Label>Last Name</Label>
                        <Input {...register("lastName")} />

                        <Label>Nickname</Label>
                        <Input {...register("nickname")} />

                        {/* <Label>Display name publicly as</Label>
                        <Input {...register("displayName")} /> */}

                        <h2 className="text-brand-500 font-bold mb-6 text-[22px]">Contact Info</h2>

                        <div>
                            <Label>Email (required)</Label>
                            <Input type="email" {...register("email", { required: true })} />
                            <p className="text-xs text-blue-light-500 mt-1">
                                If you change this, an email will be sent at your new address to confirm it. The new address will not become active until confirmed.                        </p>
                        </div>

                        {/* <Label>Website</Label>
                        <Input {...register("website")} />

                        <Label>Facebook profile URL</Label>
                        <Input {...register("facebook")} />

                        <Label>Instagram profile URL</Label>
                        <Input {...register("instagram")} />

                        <Label>LinkedIn profile URL</Label>
                        <Input {...register("linkedin")} />

                        <Label>MySpace profile URL</Label>
                        <Input {...register("twitter")} />

                        <Label>Pinterest profile URL</Label>
                        <Input {...register("pinterest")} />

                        <Label>SoundCloud profile URL</Label>
                        <Input {...register("snapchat")} />

                        <Label>Tumblr profile URL</Label>
                        <Input {...register("tumblr")} />

                        <div>
                            <Label>Wikipedia page about you</Label>
                            <Input {...register("whatsapp")} />
                            <p className="text-xs text-blue-light-500 mt-1">
                                (if one exists)
                            </p>
                        </div>

                        <Label>X username (without @)</Label>
                        <Input {...register("telegram")} />

                        <Label>YouTube profile URL</Label>
                        <Input {...register("youtube")} /> */}

                        <h2 className="text-brand-500 font-bold mb-6 text-[22px]">About Yourself</h2>

                        <div>
                            <Label>Biographical Info</Label>
                            <Input {...register("bio")} />
                            <p className="text-xs text-blue-light-500 mt-1">
                            Share a little biographical information to fill out your profile. This may be shown publicly.                        
                            </p>
                        </div>

                        <Label>Profile Picture</Label>
                        <Input type="file" {...register("profileImage")} />


                        <h2 className="text-brand-500 font-bold mb-6 text-[22px]">Account Management</h2>

                        <Label>Password</Label>
                        <div className="flex items-start gap-4  ">
                            <div className="relative w-[80%] ">

                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: { value: 6, message: 'Min 6 characters' },
                                    })}
                                    placeholder="Password"
                                />
                                <span
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"

                                >
                                    {showPassword ? (
                                        <EyeIcon className="fill-gray-200 dark:fill-gray-400 size-5" />
                                    ) : (
                                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                                    )}                            </span>
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    size="sm"
                                    variant="primary"
                                    onClick={() => console.log("Button clicked")}
                                    disabled={false}
                                    className=""
                                >
                                    Set new password
                                </Button>
                            </div>
                        </div>

                        <Button type="submit" className="mt-4">
                            Update profile
                        </Button>
                    </Form>
                </div>
        </div>
    );
}
