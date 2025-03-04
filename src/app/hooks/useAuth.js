import { useState } from "react";

export const useAuth = () => {
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/verifyPassword", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            const data = await res.json();
            if (data.success) return setAuthenticated(true);
            throw new Error("Contraseña incorrecta");

        } catch (err) {
            setError(err.message || "Ocurrió un error. Contacte a soporte");
        } finally {
            setLoading(false);
        }
    };

    return {
        password,
        authenticated,
        loading,
        error,
        handlePasswordChange,
        handleSubmit,
    };
};

