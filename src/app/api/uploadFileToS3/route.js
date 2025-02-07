import AWS from "aws-sdk";
import {console} from "next/dist/compiled/@edge-runtime/primitives";

export async function POST(req) {
    try {
        console.log("Init uploadFileToS3");


        const formData = await req.formData();

        // Obtener el archivo
        const file = formData.get("file");

        if (!file) {
            return new Response(JSON.stringify({ success: false, message: "No file provided" }), { status: 400 });
        }

        const fileName = `${Date.now()}_${file.name}`;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // 🔹 Configurar S3
        const s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
        });
        const params = {
            Bucket: process.env.BUCKET_NAME,
            Key: fileName, // Nombre único
            ContentType: file.type,
            Body: buffer, // Enviar como Buffer
            ACL: "public-read",
        };

         // 🔹 Subir a S3 usando una Promise
       const uploadToS3 = () => {
             return new Promise((resolve, reject) => {
                 s3.upload(params, (err, data) => {
                     if (err) {
                         reject(err);
                     } else {
                         resolve(data.Location); // 🔹 URL pública de la imagen
                     }
                 });
             });
         };
        console.log("Uploading to S3");
        const imageUrl = await uploadToS3();
        console.log("Upload complete");

        // 🔹 Responder con éxito y la URL del archivo
        return new Response(JSON.stringify({ success: true, url: imageUrl}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("❌ Error en la subida:", error);
        return new Response(JSON.stringify({ success: false, message: error.message }), {
            status: 500,
        });
    }
}
