import { BagIcon } from "@/assets/icons"

function Hero({title,name}:{title:string,name:string}) {
  return (
    <div className="flex flex-col gap-4">
       <h1 className="text-brand-500 text-[28px] font-bold">
      {title}
      </h1>
      <div className="bg-brand-500 py-2 px-6 flex gap-6 w-70 items-center rounded-xl">
        <div className="p-4 rounded-2xl bg-white">
          <BagIcon className="w-4 h-4"/>
        </div>
        <p className="text-xl font-semibold text-white">{name}</p>
      </div>
     
    </div>
  )
}

export default Hero