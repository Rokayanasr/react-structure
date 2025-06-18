import { BagIcon } from "@/assets/icons"

function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#004778] p-4 flex gap-4 items-center rounded-2xl">
        <div className="p-4 rounded-2xl bg-white">
          <BagIcon className="w-4 h-4"/>
        </div>
        <p className="text-xl font-semibold">1 Tatigkeiten</p>
      </div>
      <h1 className="text-[#004778] text-[32px] font-bold">
      Ubersicht
      </h1>
    </div>
  )
}

export default Hero