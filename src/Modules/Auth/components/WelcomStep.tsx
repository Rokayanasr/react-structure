type Props = {
    onNext: () => void;
  };
  
  const WelcomeStep = ({ onNext }: Props) => {
    // ... existing code ...
    return (
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-brand-500"> Willkommen, Unser Apotheker!</h2>
        <p className="mb-8 text-brand-500 text-2xl font-semibold">
        Schön, dass Sie hier sind.🎉
        </p>
        <button
          onClick={onNext}
          className="bg-brand-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          anmelden
        </button>
      </div>
    );
  };
  
  export default WelcomeStep;
  