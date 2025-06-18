
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import Select from "@/components/form/Select";
import Checkbox from "@/components/form/input/Checkbox";
import Form from "@/components/form/Form";
import { useState } from "react";
import DatePicker from "@/components/form/date-picker";
import { useForm, RegisterOptions } from "react-hook-form";








export default function NewJob() {
        const {
            register,
            handleSubmit,
            // formState: { errors },
            // setValue,
        } = useForm();
    const [isChecked, setIsChecked] = useState(false);

        const onSubmit = (data: unknown) => {
            console.log(data);
        };
    
        const registerInput = (name: string, options?: RegisterOptions) => {
            return register(name, options);
        };

    return (
        <div>
            <PageMeta
                title='React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template'
                description='This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template'
            />
            <PageBreadcrumb pageTitle='Create job offers' />
            <div className='min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12'>
                <div className='mx-auto w-full text-left mb-4'>
                    <h2 className="text-gray-700 font-bold mb-6">Create job offers (either daily representation, night service or permanent position)</h2>
                    <h2 className="text-brand-500 font-bold mb-6 text-[25px]">Publish job</h2>

                    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Label>the owner<span className="text-red-500">*</span></Label>
                            <Select
                                options={[
                                    { value: "test", label: "test" },

                                ]}
                                onChange={(selectedValue) => {
                                    console.log(selectedValue);



                                }}
                            />
                        </div>
                        <div>
                            <Label>Name of the pharmacy*</Label>
                            <Input
                                type="text"
                                placeholder="test name"
                                 required={false} />
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2 relative">
                                <Label>Street, No *</Label>
                                <Input
                                    type="text"
                                    placeholder="test name"
                                    required={false} />
                            </div>

                            <div className="w-1/2 relative">
                                <Label>ZIP / City *</Label>
                                <Input
                                    type="text"
                                    placeholder="test name"
                                    required={false} />
                            </div>
                        </div>

                        <div>
                            <Label>Federal State *<span className="text-red-500">*</span></Label>
                            <Select
                                options={[
                                    { value: "test", label: "test" },

                                ]}
                                // defaultValue="test"
                                onChange={(selectedValue) => {
                                    console.log(selectedValue);



                                }}
                            />
                        </div>
                        <div>
                            <Label>Telephone number *</Label>
                            <Input
                                type="tel"
                                placeholder="test name"
                                id="location" required={false} />
                        </div>

                        <div>
                            <Label>Type *<span className="text-red-500">*</span></Label>
                            <Select
                                options={[
                                    { value: "test", label: "test" },

                                ]}
                                // defaultValue="test"
                                onChange={(selectedValue) => {
                                    console.log(selectedValue);



                                }}
                            />
                        </div>
                        <div>
                            <Label>First working day</Label>
                            <Input
                                type="text"
                                placeholder="test name"
                                id="location" required={false} />
                        </div>

                        <div>
                            <Label>Remuneration € / hour *<span className="text-red-500">*</span></Label>
                            <Select
                                options={[
                                    { value: "test", label: "test" },

                                ]}
                                // defaultValue="test"
                                onChange={(selectedValue) => {
                                    console.log(selectedValue);



                                }}
                            />
                            <p className="text-xs text-blue-light-500 mt-1">
                                Plus an emergency service fee of € 2.50 per process and a service fee in accordance with the price list                        
                            </p>
                        </div>
                        <div>
                            <Label>Working Day(s)</Label>
                            <DatePicker
                                placeholder="Letzter Arbeitstag"
                                id="endDate"
                                {...registerInput("endDate")}
                                onChange={(dates, currentDateString) => {
                                    console.log({ dates, currentDateString });
                                }}
                            />
                        </div>
                        <div>
                            <Label>First working day</Label>
                            <Input
                                type="text"
                                placeholder="2th of May "
                                id="location" required={false} />
                        </div>
                        <div>
                            <Label>Last working day</Label>
                            <Input
                                type="text"
                                placeholder="10th of May "
                                id="location" required={false} />
                        </div>
                        <div>
                            <Label>Overall working days of this offer </Label>
                            <Input
                                type="text"
                                placeholder="5 days"
                                id="location" required={false} />
                        </div>
                        <div>
                            <Label>Working hours (per day)*</Label>
                            <Input
                                type="text"
                                placeholder="test name"
                                id="location" required={false} />
                        </div>
                        <div>
                            <Label>Take job clothes with you</Label>
                            <Select
                                options={[
                                    { value: "test", label: "test" },

                                ]}
                                // defaultValue="test"
                                onChange={(selectedValue) => {
                                    console.log(selectedValue);



                                }}
                            />
                        </div>
                        <div>
                            <Label>Parking available: *</Label>
                            <Select
                                options={[
                                    { value: "test", label: "test" },

                                ]}
                                // defaultValue="test"
                                onChange={(selectedValue) => {
                                    console.log(selectedValue);



                                }}
                            />
                        </div>
                        <div>
                            <Label>Bedroom at emergency service</Label>
                            <Select
                                options={[
                                    { value: "test", label: "test" },

                                ]}
                                // defaultValue="test"
                                onChange={(selectedValue) => {
                                    console.log(selectedValue);



                                }}
                            />
                        </div>
                        <div>
                            <Label>WWS (cash register program) *</Label>
                            <Select
                                options={[
                                    { value: "test", label: "test" },

                                ]}
                                // defaultValue="test"
                                onChange={(selectedValue) => {
                                    console.log(selectedValue);



                                }}
                            />
                        </div>
                        <div>
                            <Label>other</Label>
                            <Input
                                type="text"
                                placeholder="test name"
                                id="location" required={false} />
                        </div>

                        <div className="p-4">
                            <Checkbox
                                label="There is a flat rate of € 20 to 21 km for daily representation. From 21 km there are 38 cents per km*"
                                checked={isChecked}
                                onChange={(val) => setIsChecked(val)}
                                className="border-brand-500"
                            />
                        </div>


                        <Button
                            size="sm"
                            variant="primary"
                            onClick={() => console.log("Button clicked")}
                            disabled={false}
                            className="mt-2"
                        >
                            Save and preview
                        </Button>
                    </Form>

                </div>


            </div>
        </div>
    )
}