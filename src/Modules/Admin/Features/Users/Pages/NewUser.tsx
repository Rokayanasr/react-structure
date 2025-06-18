
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import Select from "@/components/form/Select";
import Form from "@/components/form/Form";
import { useState } from "react";
import { NewUserData } from "../types/NewUserData"
import { useForm, SubmitHandler } from "react-hook-form";
// import Checkbox from "@/components/form/input/Checkbox";
import { EyeIcon, EyeCloseIcon } from '@/assets/icons';










export default function NewJob() {

    const {
        register,
        handleSubmit,
        setValue,
        // formState: { errors },
    } = useForm<NewUserData>();

    const onSubmit: SubmitHandler<NewUserData> = (data) => {
        console.log(data);
    };
    const [showPassword, setShowPassword] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);


    const generatePassword = () => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
        let password = "";
        for (let i = 0; i < 10; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    };



    return (
        <div>
            <PageMeta
                title='React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template'
                description='This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template'
            />
            <PageBreadcrumb pageTitle='Add New User' />
            <div className='min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>
                <h2 className="text-brand-500 font-bold mb-6">Create a brand new user and add them to this site.</h2>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {/* <div>
                            <Label htmlFor="username">Username (required)</Label>
                            <Input id="username" placeholder="Enter username"
                                {...register("username", { required: true })}
                            />
                        </div> */}

                        <div>
                            <Label htmlFor="email">Email (required)</Label>
                            <Input id="email" type="email" placeholder="Enter email"       {...register("username", { required: true })}
                            />
                        </div>

                        <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName"       {...register("firstName", { required: true })}
                            />
                        </div>

                        <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName"       {...register("lastName", { required: true })}
                            />
                        </div>

                        {/* <div>
                            <Label htmlFor="website">Website</Label>
                            <Input id="website"       {...register("website", { required: true })}
                            />
                        </div>

                        <div>
                            <Label htmlFor="language">Language</Label>
                            <Select
                                options={[
                                    { value: "Arabic", label: "Arabic" },

                                ]}
                                onChange={(selectedValue) => {
                                    console.log(selectedValue);



                                }}

                            />      </div> */}

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
                                <button
                                    type="button"
                                    onClick={() => {
                                        const generated = generatePassword();
                                        setValue("password", generated);
                                    }}
                                    className="mt-2 text-m text-brand-600 underline hover:text-brand-800"
                                >
                                    Generate Password
                                </button>
                            </div>
                        </div>

                        {/* </div> */}


                        {/* <div className="p-4">
                            <Label>Description</Label>
                            <Checkbox
                                label=" Send the new user an email about their account"
                                checked={isChecked}
                                onChange={(val) => setIsChecked(val)}
                                className="border-brand-500 text-m"
                            />
                        </div> */}

                        <div>
                            <Label htmlFor="role">Role</Label>
                            <Select
                                options={[
                                    { value: "Adminstrator", label: "Adminstrator" },
                                ]}

                                onChange={(selectedValue) => {
                                    console.log(selectedValue);
                                }}
                            />      </div>




                        <Button
                            type="submit"
                            size="sm"
                            variant="primary"
                            onClick={() => console.log("Button clicked")}
                            disabled={false}
                            className="mt-2"
                        >
                            Add New User
                        </Button>
                    </Form>

                </div>


        </div>
    )
}