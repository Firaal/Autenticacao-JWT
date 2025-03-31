import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(formData);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.userId);

            alert(response.data.msg);
            navigate("/dashboard");
        } catch (error) {
            alert(error.response.data.msg);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 mb-2 w-full" />
                <input type="password" name="password" placeholder="Senha" onChange={handleChange} className="border p-2 mb-2 w-full" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Entrar
                </button>
            </form>
        </div>
    );
}

export default Login;
