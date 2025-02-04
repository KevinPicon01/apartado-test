"use client";
import  useRouter from 'next/router';
import { useState, useEffect } from "react";
import id from "../texts";
import Header from "@/app/components/header";
import HomeContent from "@/app/components/homeContent";
import PreHeader from "@/app/components/preHeader";
import TheHeader from "@/app/components/header";
import About from "@/app/components/about";
import ContactUs from "@/app/components/contactUs";
import Catalogue from "@/app/components/catalogue";
import Members from "@/app/components/members";
import TheFooter from "@/app/components/footer";

const EditForm = () => {

    const [webData, setWebData] = useState(null);
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) {
            console.warn("⚠️ ID no disponible aún, esperando...");
            return;
        }

        const fetchData = async () => {
            try {
                const res = await fetch(`/api/webs?id=${id}`);

                if (!res.ok) {
                    throw new Error("❌ Error en la respuesta de la API");
                }

                const data = await res.json();

                // Asegurar que tomamos los valores correctos dentro de arrays
                const structuredData = {
                    ...data,
                    home: data.home?.[0] || {},  // Tomar el primer elemento del array
                    about_us: data.about_us?.[0] || {},
                    footer: data.footer?.[0] || {},
                    header: data.header?.[0] || {},
                    catalogo: data.catalogo?.[0] || {},
                    members: data.members?.[0] || {},
                    contact_us: data.contact_us?.[0] || {},
                };
                document.documentElement.style.setProperty("--secondBackground", data?.color1);
                document.documentElement.style.setProperty("--shadowColor", data?.color2);
                document.documentElement.style.setProperty("--hoverColor", data?.color3);
                setWebData(structuredData);
                setFormData(structuredData);
                setLoading(false);
            } catch (error) {
                console.error("❌ Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split(".");

        setFormData((prev) => {
            const updatedData = { ...prev }; // Clonamos el estado
            let ref = updatedData;

            for (let i = 0; i < keys.length - 1; i++) {
                if (!ref[keys[i]]) ref[keys[i]] = { ...prev[keys[i]] }; // Clonar niveles intermedios
                ref = ref[keys[i]];
            }

            ref[keys[keys.length - 1]] = value; // Asignamos el valor correcto

            return updatedData;
        });
    };

    if (loading) return <div>🔄 Cargando datos...</div>;
    if (!webData) return <div>❌ No se encontraron datos.</div>;

    const handleSave = async () => {
        try {
            const router = useRouter();
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 5000);
            const json = JSON.stringify(formData);
            console.log("📤 Enviando datos:", json);

            const res = await fetch("api/updateWeb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: json,
                rawBody: json,
                signal: controller.signal
            });
            router.push('/');
            clearTimeout(timeout);

            console.log("📩 Respuesta del servidor:", res);

            const text = await res.json();
            console.log("🔄 Respuesta en texto:", text);



            if (!res.ok) {
                alert("Error al guardar: " + (result.message || "Respuesta inesperada"));
            }
            alert("Datos guardados correctamente");
        } catch (error) {
            console.error("❌ Error guardando datos:", error);
            alert("Error al guardar: " + error.message);
        }

    };



    return (
        <div className="flex gap-4 p-4 h-screen">
            {/* Formulario de edición */}
            <div className="w-1/2 h-full overflow-auto p-4 border">
                <h2 className="text-xl font-bold mb-4">Editar Página</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block">Título Home:</label>
                        <input
                            type="text"
                            name="home.titulo"
                            placeholder={webData.home.titulo}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block">Texto About Us:</label>
                        <textarea
                            name="about_us.texto"
                            placeholder={webData.about_us.texto}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="">Slogan Footer:</label>
                        <input
                            type="text"
                            name="footer.slogan"
                            placeholder={webData.footer.slogan}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <button onClick={handleSave} className="mt-4 bg-blue-500 text-white p-2 rounded">
                        Guardar Cambios
                    </button>
                </form>
            </div>

            {/* Vista previa en tiempo real */}
            <div className="w-1/2 h-full overflow-auto border-l p-4">
                <h2 className="text-xl font-bold mb-4">Vista Previa</h2>

                <PreHeader webData={formData}/>
                <TheHeader webData={formData}/>
                <HomeContent webData={formData}/>
                <About webData={formData}/>
                <ContactUs webData={formData}/>
                <Catalogue webData={formData}/>
                <Members webData={formData}/>
                <TheFooter webData={formData}/>
            </div>
        </div>

    );
};

export default EditForm;
