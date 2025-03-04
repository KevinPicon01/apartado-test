import { useEffect, useState } from "react";
import { getWebData } from "@/app/lib/getWebData";

export function useWebData() {
    const [webData, setWebData] = useState(null);
    const [loading, setLoading] = useState(true);
    const id = Number(process.env.NEXT_PUBLIC_WEB_ID);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getWebData(id);
            if (data) {
                setWebData(data);
                document.documentElement.style.setProperty("--secondBackground", data.color1);
                document.documentElement.style.setProperty("--shadowColor", data.color2);
                document.documentElement.style.setProperty("--hoverColor", data.color3);
                document.title = data.home?.titulo || "Mi Web";
            }
            setLoading(false);
        };

        fetchData();
    }, [id]);

    return { webData, loading };
}
