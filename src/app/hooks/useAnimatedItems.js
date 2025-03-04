import { useEffect, useRef, useCallback } from "react";

export const useAnimatedItems = () => {
    const itemsRef = useRef(new Set()); // Guarda referencias de los elementos a observar

    const registerItem = useCallback((element) => {
        if (element) {
            itemsRef.current.add(element);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target); // Dejar de observar después de la animación
                    }
                });
            },
            { threshold: 0.1 }
        );

        itemsRef.current.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return registerItem; // Devuelve la función para registrar elementos
};
