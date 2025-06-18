import Hero from "@/components/common/Hero"
import ReceiptsEmployee from "../components/ReceiptsEmployee"

function Receipt() {
  return (
          <div className="space-y-5 sm:space-y-6 md:p-6 lg:p-8 xl:p-10 rounded-2xl overflow-hidden bg-white">
             <Hero title="Ubersicht" name="1 Transaktionen" />
             <ReceiptsEmployee/>
        
    </div>
  )
}

export default Receipt