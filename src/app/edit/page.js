"use client";

import { useState } from "react";
import EditForm from "@/app/components/editForm";
import About from "@/app/components/editForm";

const EditPage = () => {
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/verifyPassword", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        const data = await res.json();

        if (data.success) {
            setAuthenticated(true);
        } else {
            alert("Contraseña incorrecta");
        }
    };

    if (authenticated) {
        return <About />;
    }

    return (
        <div>
            <h1>Ingrese la contraseña para editar</h1>
            <form onSubmit={handleSubmit}>
                <input type="password" value={password} onChange={handlePasswordChange} placeholder="Contraseña" />
                <button type="submit">Verificar</button>
            </form>
        </div>
    );
};

export default EditPage;
