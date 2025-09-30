import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthGate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");

    if (!storedName) {
      // ✅ Redirect to home if user tries any other page
      if (location.pathname !== "/") {
        navigate("/", { replace: true }); 
      }

      setShowModal(true); // ✅ Always show modal if no name
    }
  }, [location.pathname, navigate]);

  const handleSaveName = () => {
    if (name.trim()) {
      localStorage.setItem("username", name.trim());
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl font-semibold text-center mb-4">
              👋 Welcome!
            </h2>
            <p className="text-gray-600 text-center mb-4">
              Please enter your first name to continue.
            </p>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-primary"
            />

            <button
              onClick={handleSaveName}
              className="w-full bg-primary text-white py-2 rounded-md hover:opacity-90 transition"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthGate;
