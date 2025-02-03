import prisma from "@/lib/prisma";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const pageId = searchParams.get("id"); // Obtener el ID desde la URL

        if (!pageId) {
            return new Response(JSON.stringify({ error: "Missing page ID" }), { status: 400 });
        }

        const web = await prisma.webs.findUnique({
            where: { id: parseInt(pageId) }, // Filtrar por el ID de la página
            include: {
                owner: true,
                header: true,
                home: true,
                about_us: true,
                catalogo: true,
                members: true,
                contact_us: true,
                footer: true,
            },
        });
        if (!web) {
            return new Response(JSON.stringify({ error: "Page not found" }), { status: 404 });
        }

        return new Response(JSON.stringify(web), { status: 200 });
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response(JSON.stringify({ error: "Error fetching data" }), { status: 500 });
    }
}
