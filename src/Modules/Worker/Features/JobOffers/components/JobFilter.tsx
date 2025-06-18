import DatePicker from "@/components/form/date-picker";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";

type Option = {
  label: string;
  value: string;
};

function JobFilter() {
  const options: Option[] = ["Standard", "Neueste", "älteste", "Zufällig"].map((item) => ({
    label: item,
    value: item,
    // ... existing code ...
  }));

  return (
    <div className="rounded-xl md:max-w-sm w-full h-auto bg-white shadow-md p-4">
      <div>
        <h2 className="font-semibold text-gray-800 mb-4">Typ</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              id="deos"
              type="radio"
              name="jobType"
              value="DEOS"
              className="h-5 w-5 text-black"
            />
            <label htmlFor="deos" className="ml-2 text-sm text-gray-400">
              DEOS
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="nachtdienst"
              type="radio"
              name="jobType"
              value="Nachtdienst"
              className="h-5 w-5"
            />
            <label htmlFor="nachtdienst" className="ml-2 text-sm text-gray-400">
              Nachtdienst
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="vertretungsangebot"
              type="radio"
              name="jobType"
              value="Vertretungsangebot"
              className="h-5 w-5"
            />
            <label htmlFor="vertretungsangebot" className="ml-2 text-sm text-gray-400">
              Vertretungsangebot
            </label>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-black mb-2">Arbeitstagen</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
            <div className="bg-[#EAECF5]">
              <DatePicker
                id="date-picker-1"
                placeholder="mm/dd/yyyy"
                onChange={(dates, currentDateString) => {
                  console.log({ dates, currentDateString });
                }}
              />
            </div>
            <div className="bg-[#EAECF5]">
              <DatePicker
                id="date-picker-2"
                placeholder="mm/dd/yyyy"
                onChange={(dates, currentDateString) => {
                  console.log({ dates, currentDateString });
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Label className="font-semibold text-black mb-4" htmlFor="input">
            PLZ & Ort
          </Label>
            <div className="bg-[#EAECF5]">
              <Input type="text" id="input" placeholder="PLZ & Ort " />
    
</div>        </div>

        <div className="mt-6">

            <Label className="font-semibold text-black mb-4" htmlFor="input">
          Bundesland
          </Label>
            <div className="bg-[#EAECF5]">
              <Select
                options={options}
                placeholder="Select an option"
                className="dark:bg-dark-900"
                 onChange={(selected) => {
        console.log("Selected option:", selected);
      }}
              />
        </div>
        </div>
      </div>
          <div className="flex gap-4 flex-col lg:flex-row  justify-center mt-6">
      <button className="bg-[#004b80] text-white font-bold py-2 px-6 w-full lg:w-1/3 rounded-lg">
       Suchen
      </button>

      <button className="border-2 border-[#004b80] text-[#004b80] text-nowrap w-full lg:w-2/3 font-bold py-2 px-10 rounded-lg">
      Zu meiner seite
      </button>
    </div>

    </div>
  );
}

export default JobFilter;
