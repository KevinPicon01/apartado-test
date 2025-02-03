// src/app/webs/page.js
"use client"
import { useEffect, useState } from "react";

const WebsPage = () => {
    const [websData, setWebsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Llamada a la API para obtener los datos
        const fetchWebsData = async () => {
            try {
                const res = await fetch(`/api/webs?id=1`);
                if (!res.ok) {
                    new Error("Failed to fetch data");
                }
                const data = await res.json();
                setWebsData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWebsData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Webs Data</h1>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                <tr>
                    <th>Web ID</th>
                    <th>Owner Name</th>
                    <th>Business</th>
                    <th>Colors</th>
                    <th>Links</th>
                    <th>Header Logo</th>
                    <th>Home Title</th>
                    <th>About Us Title</th>
                    <th>Catalog Text</th>
                    <th>Contact Us Text</th>
                    <th>Footer Logo</th>
                    <th>Footer Slogan</th>
                    <th>Footer Contact</th>
                </tr>
                </thead>
                <tbody>
                {websData.map((web) => (
                    <tr key={web.id}>
                        <td>{web.id}</td>
                        <td>{web.owner?.name}</td>
                        <td>{web.owner?.business}</td>
                        <td>{web.color1}, {web.color2}, {web.color3}</td>
                        <td>
                            <a href={web.link1} target="_blank" rel="noopener noreferrer">Link 1</a><br />
                            <a href={web.link2} target="_blank" rel="noopener noreferrer">Link 2</a><br />
                            <a href={web.link3} target="_blank" rel="noopener noreferrer">Link 3</a>
                        </td>
                        <td>
                            {web.header.length > 0 && (
                                <img src={web.header[0]?.logo} alt="Header Logo" width="50" />
                            )}
                        </td>
                        <td>{web.home.length > 0 ? web.home[0]?.titulo : "No Title"}</td>
                        <td>{web.about_us.length > 0 ? web.about_us[0]?.titulo : "No Title"}</td>
                        <td>{web.catalogo.length > 0 ? web.catalogo[0]?.texto : "No Text"}</td>
                        <td>{web.contact_us.length > 0 ? web.contact_us[0]?.texto : "No Text"}</td>
                        <td>
                            {web.footer.length > 0 && (
                                <img src={web.footer[0]?.logo} alt="Footer Logo" width="50" />
                            )}
                        </td>
                        <td>{web.footer.length > 0 ? web.footer[0]?.slogan : "No Slogan"}</td>
                        <td>{web.footer.length > 0 ? `${web.footer[0]?.correo} | ${web.footer[0]?.numero}` : "No Contact"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default WebsPage;
