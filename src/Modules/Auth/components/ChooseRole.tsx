import { useNavigate } from "react-router-dom";
  
  const ChooseRole = () => {
    // ... existing code ...
    const navigate = useNavigate();
    return (
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-semibold">Sind Sie?</h2>
        <button
          onClick={() => navigate("/owner/signin")}
          className="w-full bg-brand-500 text-white py-2 rounded hover:bg-blue-700"
        >
          Personal
        </button>
        <button
          onClick={() => navigate("/pharmacist/signin")}
          className="w-full bg-brand-500 text-white py-2 rounded hover:bg-blue-700"
        >
          Apothekeninhaber
        </button>
        <button
          onClick={() => navigate("/admin/signin")}
          className="w-full bg-brand-500 text-white py-2 rounded hover:bg-blue-700"
        >
          Administratorin
        </button>
      </div>
    );
  };
  
  export default ChooseRole;
  