import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            alert(response.data.msg);
            navigate("/login");
        } catch (error) {
            alert(error.response.data.msg || "Erro ao registrar");
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded">
                <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
                <input type="text" name="name" placeholder="Nome" onChange={handleChange} className="border p-2 mb-2 w-full" />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 mb-2 w-full" />
                <input type="password" name="password" placeholder="Senha" onChange={handleChange} className="border p-2 mb-2 w-full" />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirme a senha"
                    onChange={handleChange}
                    className="border p-2 mb-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Registrar
                </button>
            </form>
        </div>
    );
}

export default Register;
