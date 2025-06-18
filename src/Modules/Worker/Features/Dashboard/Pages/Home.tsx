import Employees from "../components/Employees";
import Hero from "../../../../../components/common/Hero";

function Home() {
    return (
        // ... existing code ...
        <div className="space-y-5 sm:space-y-6 p-10 rounded-2xl overflow-hidden bg-white">
            <Hero title="Ubersicht" name="1 Tatigkeiten" />
            <Employees />
            

        </div>
      
    );
}

export default Home;
