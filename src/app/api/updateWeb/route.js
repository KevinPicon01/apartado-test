// src/app/api/verifyPassword.js
import prisma from "@/lib/prisma";
import id from "../../texts"
import {console} from "next/dist/compiled/@edge-runtime/primitives";
import {json} from "next/dist/client/components/react-dev-overlay/server/shared";


export async function POST(req) {
    try {

        const body = await req.json();

        const updatedWeb = await prisma.webs.update({
            where: { id: body.id },
            data: {
                color1: body.color1,
                color2: body.color2,
                color3: body.color3,
                link1: body.link1,
                link2: body.link2,
                link3: body.link3,

                header: {
                    updateMany: {
                        where: { pagina: body.id },
                        data: { logo: body.header.logo }
                    }
                },
                home: {
                    updateMany: {
                        where: { pagina: body.id },
                        data: {
                            titulo: body.home.titulo,
                            imagen: body.home.imagen
                        }
                    }
                },
                about_us: {
                    updateMany: {
                        where: { pagina: body.id },
                        data: {
                            titulo: body.about_us.titulo,
                            texto: body.about_us.texto,
                            imagen: body.about_us.imagen
                        }
                    }
                },
                catalogo: {
                    updateMany: {
                        where: { pagina: body.id },
                        data: {
                            titulo: body.catalogo.titulo,
                            texto: body.catalogo.texto,
                            imagen: body.catalogo.imagen
                        }
                    }
                },
                members: {
                    updateMany: {
                        where: { pagina: body.id },
                        data: {
                            titulo: body.members.titulo,
                            texto: body.members.texto,
                            imagen: body.members.imagen
                        }
                    }
                },
                contact_us: {
                    updateMany: {
                        where: { pagina: body.id },
                        data: {
                            texto: body.contact_us.texto,
                            imagen: body.contact_us.imagen
                        }
                    }
                },
                footer: {
                    updateMany: {
                        where: { pagina: body.id },
                        data: {
                            logo: body.footer.logo,
                            slogan: body.footer.slogan,
                            correo: body.footer.correo,
                            numero: body.footer.numero,
                            logo1: body.footer.logo1,
                            logo2: body.footer.logo2,
                            logo3: body.footer.logo3
                        }
                    }
                }
            }
        });

        return new Response(JSON.stringify(
            {
                status: 200,
                headers: { "Content-Type": "application/json","Access-Control-Allow-Origin": "*", },

            }
        ));

    } catch (error) {
        console.error("❌ Error al procesar JSON:", error);
        return new Response(JSON.stringify({ success: false, error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json","Access-Control-Allow-Origin": "*", },
        });
    }
}

