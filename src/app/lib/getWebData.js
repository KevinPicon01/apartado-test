export async function getWebData(id) {
    try {
        const res = await fetch(`/api/webs?id=${id}`);
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        return {
            ...data,
            home: data.home?.[0] || {},
            about_us: data.about_us?.[0] || {},
            footer: data.footer?.[0] || {},
            header: data.header?.[0] || {},
            catalogo: data.catalogo?.[0] || {},
            members: data.members?.[0] || {},
            contact_us: data.contact_us?.[0] || {},
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
