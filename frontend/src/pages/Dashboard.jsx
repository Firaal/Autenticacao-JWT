import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const userId = localStorage.getItem("userId");
            const token = localStorage.getItem("token");

            if (!userId || !token) {
                alert("Usuário não autenticado");
                navigate("/login");
                return;
            }

            try {
                const response = await api.get(`/user/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
                alert("Erro ao buscar informações do usuário.");
                navigate("/login");
            }
        };

        fetchUser();
    }, [navigate]);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            {user ? (
                <div className="mt-4">
                    <p>
                        <strong>Nome:</strong> {user.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                        onClick={() => {
                            localStorage.clear();
                            navigate("/login");
                        }}
                    >
                        Sair
                    </button>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default Dashboard;
