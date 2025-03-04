import { useEffect, useState, useRef } from "react";

export function useWebEditor() {
    const id = Number(process.env.NEXT_PUBLIC_WEB_ID);
    const [webData, setWebData] = useState(null);
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const listaRef = useRef([]);

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

    const uploadFileToS3 = async (file, name, e) => {
        const blob = new Blob([file], { type: file.type });
        const formData = new FormData();
        formData.append("file", blob, file.name); // Asegúrate de incluir el nombre del archivo
        formData.append("folder", name );
        e.preventDefault();
        const res = await fetch("/api/uploadFileToS3", {
            method: "POST",
            body: formData,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });
        const data = await res.json();
        if (data.success) {
            return data.url;
        }
        return console.error("Error al subir archivo a S3");
    };
    const deleteS3Item = async (fileUrl, e) => {
        e.preventDefault();
        const res = await fetch("/api/deleteS3Item", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fileUrl }),
        });
        const data = await res.json();

        if (data.success) {
            return console.log(`Archivo eliminado de S3`);
        }
        return console.error("Error al eliminar archivo de S3");
    };
    const updateNestedProperty = (obj, path, value) => {
        const keys = path.split("."); // Divide la ruta en un array de claves
        let current = obj;

        // Recorre las claves para llegar al último nivel
        for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];
            if (!current[key]) {
                current[key] = {}; // Si no existe, crea un objeto vacío
            }
            current = current[key];
        }

        // Asigna el valor a la última clave
        current[keys[keys.length - 1]] = value;
    };
    const processFilesAndUpdateFormData = async (e) => {
        const updatedFormData = { ...formData }; // Copia de formData para actualizarlo

        // Recorrer los elementos en listaRef
        for (const item of listaRef.current) {
            const { campo, valor, file } = item;
            try {
                const url = await uploadFileToS3(file, formData.owner.business, e);
                updateNestedProperty(updatedFormData, campo, url);
                await deleteS3Item(valor, e); // Eliminar el archivo viejo de S3

            } catch (error) {
                console.error("Error al subir archivo:", error);
                alert("Error al subir archivo. Intenta de nuevo.");
                return false; // Devolver false si ocurre un error
            }
        }
        setFormData(updatedFormData);
        return true;
    };
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const keys = name.split(".");

        setFormData((prev) => {
            const updatedData = { ...prev };
            let ref = updatedData;

            for (let i = 0; i < keys.length - 1; i++) {
                if (!ref[keys[i]]) ref[keys[i]] = { ...prev[keys[i]] };
                ref = ref[keys[i]];
            }

            if (type === "file") {
                const file = files[0];

                if (file) {
                    const allowedTypes = ["image/png", "image/jpeg"];
                    const maxSize = 2 * 1024 * 1024; // 2MB

                    if (!allowedTypes.includes(file.type)) {
                        alert("Solo se permiten archivos PNG y JPG.");
                        return prev;
                    }

                    if (file.size > maxSize) {
                        alert("El archivo es demasiado grande. Máximo permitido: 2MB.");
                        return prev;
                    }

                    // Verificar si ya se guardó antes
                    const yaGuardado = listaRef.current.some((item) => item.campo === name);

                    if (!yaGuardado) {
                        listaRef.current.push({ campo: name, valor: ref[keys[keys.length - 1]], file: file });
                    }

                    const reader = new FileReader();
                    reader.onload = (event) => {
                        ref[keys[keys.length - 1]] = event.target.result;
                        setFormData({ ...updatedData });
                    };
                    reader.readAsDataURL(file);
                }
            } else {
                ref[keys[keys.length - 1]] = value;
            }

            return updatedData;
        });

        document.documentElement.style.setProperty("--secondBackground", formData.color1);
        document.documentElement.style.setProperty("--shadowColor", formData.color2);
        document.documentElement.style.setProperty("--hoverColor", formData.color3);
    };
    const handleSave = async (e) => {
        try {
            setSaving(true);
            // Validar que formData no esté vacío
            if (!formData || Object.keys(formData).length === 0) {
                alert("No hay datos para guardar.");
                return;
            }
            await processFilesAndUpdateFormData(e)

            e.preventDefault();
            const res = await fetch("/api/updateWeb", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                alert("Datos guardados correctamente");
            } else {
                alert("Error al guardar: " + ("Respuesta inesperada"));
            }
            setSaving(false);
            window.location.href = '/';

        } catch (error) {
            setSaving(false);
            setWebData(false);
            console.error("❌ Error guardando datos:", error.stack || error);
            if (error.name === "AbortError") {
                alert("La solicitud tardó demasiado. Por favor, intenta de nuevo.");
            } else {
                alert("Error al guardar: " + (error.message || "Error desconocido"));
            }
        }
    };

    return { webData, formData, loading, saving, handleChange, handleSave};
}
