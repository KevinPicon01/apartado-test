// src/app/api/verifyPassword.js
import prisma from "@/lib/prisma";
import id from "../../texts"
import {console} from "next/dist/compiled/@edge-runtime/primitives";
import {white} from "next/dist/lib/picocolors";


export async function POST(req) {
    try {

        const rawBody = await req.text(); // Leer el body como texto
        console.log("Raw body recibido:", rawBody);

        const body = JSON.parse(rawBody); // Intentar parsearlo manualmente
        console.log("Body parseado correctamente:", body);

        await prisma.webs.update({
            where: { id: body.id },
            data: {
                color1: body.color1,
                color2: body.color2,
                color3: body.color3,
                link1: body.link1,
                link2: body.link2,
                link3: body.link3,
            },
        });

        if (body.header){
            console.log("init header")
            await prisma.header.update({
                    where: {
                        id: body.header.id
                    },
                    data: {
                        logo: body.header.logo
                    },
            })
        }
        if (body.home){
            console.log("init home")
            await prisma.home.update({
                where: {
                    id: body.home.id
                },
                data: body.home,
            })
        }
        if (body.about_us){
            console.log("init body")
            await prisma.about_us.update({
                where:{
                    id: body.about_us.id
                },
                data: body.about_us,
            })
        }
        if (body.catalogo){
            console.log("init catalogo")
            await prisma.catalogo.update({
                where:{
                    id: body.catalogo.id
                },
                data: body.catalogo,
            })
        }
        if (body.members){
            console.log("init members")
            await prisma.members.update({
                where:{
                    id: body.members.id
                },
                data: body.members,
            })
        }
        if (body.contact_us){
            console.log("init contact_us")
            await prisma.contact_us.update({
                where:{
                    id: body.contact_us.id
                },
                data: body.contact_us,
            })
        }
        if (body.footer){
            console.log("init footer")
            await prisma.footer.update({
                where:{
                    id: body.footer.id
                },
                data: body.footer,
            })
        }
       console.log("Actualización completada");
        return new Response(JSON.stringify({ message: "Todo salió bien" }), {
            status: 200,
            headers: {
                "Connection": "keep-alive",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            },
        });
    } catch (error) {
        console.error("Error al procesar JSON:", error);
        return new Response(JSON.stringify({ error: "JSON inválido" }), { status: 400,
            headers: {
                "Connection": "keep-alive",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            },
        });
    }
}
