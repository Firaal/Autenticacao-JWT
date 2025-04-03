import { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            navigate("/dashboard");
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <nav className="flex gap-4 mb-4">
                <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Crie sua conta
                </Link>
                <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded">
                    Login
                </Link>
            </nav>

            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
