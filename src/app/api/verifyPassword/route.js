// src/app/api/verifyPassword.js
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import {console} from "next/dist/compiled/@edge-runtime/primitives";

export async function POST(req) {
    const { password } = await req.json();

    // Busca la contraseña en la base de datos
    const user = await prisma.personal_data.findUnique({
        where: {
            id: 1, // Aquí es el ID del usuario que estás buscando
        },
    });
    if (user && bcrypt.compareSync(password, user.password)) {
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    return new Response(JSON.stringify({ success: false }), { status: 401 });
}
