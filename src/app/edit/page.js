"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";
import EditForm from "@/app/components/editForm";

const EditPage = () => {
    const { password, authenticated, loading, error, handlePasswordChange, handleSubmit } = useAuth();
    const router = useRouter();

    if (authenticated) return <EditForm />;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
                <h1 className="text-2xl font-semibold mb-4 text-gray-700">Ingrese la contraseña para editar</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Contraseña"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Verificando..." : "Verificar"}
                    </button>
                </form>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <button
                    onClick={() => router.push("/")}
                    className="mt-6 w-full bg-red-500 text-white font-semibold p-3 rounded-lg shadow-md hover:bg-red-600 transition transform hover:scale-105"
                >
                    ⬅️ Volver al Inicio
                </button>
            </div>
        </div>
    );
};

export default EditPage;
