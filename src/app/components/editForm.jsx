"use client";
import {useEffect, useRef, useState} from "react";
import LoadingIndicator from "@/app/components/infoView";
import ErrorIndicator from "@/app/components/errorView";
import PreHeader from "@/app/components/preHeader";
import TheHeader from "@/app/components/header";
import HomeContent from "@/app/components/homeContent";
import About from "@/app/components/about";
import Catalogue from "@/app/components/catalogue";
import Members from "@/app/components/members";
import ContactUs from "@/app/components/contactUs";
import TheFooter from "@/app/components/footer";
import {useWebEditor} from "@/app/hooks/useWebEditor";

const EditForm = () => {
    const { webData, formData, loading, saving, handleChange, handleSave } = useWebEditor();

    if (saving) return <LoadingIndicator message=" Guardando datos..." />;
    if (loading) return  <LoadingIndicator message=" Cargando datos..." />;
    if (!webData) return <ErrorIndicator message="Error al cargar datos" />;
    return (
        <div className="flex gap-4 p-4 h-screen ">
            {/* Formulario de edición */}
            <div className="w-1/3 h-full overflow-auto p-4 border rounded-lg shadow-md items-center">
                <h2 className="text-xl font-bold mb-4">Editar Página</h2>
                <button
                    onClick={() => window.location.href = '/'} // Cambia esto según la ruta de tu inicio
                    className="absolute z-[1000] top-5 right-5 bg-red-500 text-white px-3 py-2 rounded-lg shadow-md
                   hover:bg-red-600 hover:shadow-lg active:bg-red-700 active:scale-95 transition-all duration-200"
                >
                    ⬅️ Volver al inicio
                </button>
                <form className="space-y-4">
                    {/* Colors Section */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2">🎨 Colores</h2>
                        <hr className="mb-4 border-gray-300"/>

                        <div className="grid gap-4">
                            {/* Color 1 */}
                            <div className="p-4 border rounded-lg shadow-md flex items-center gap-4">
                                <label className="block font-medium">Color 1:</label>
                                <input
                                    type="color"
                                    name="color1"
                                    onChange={handleChange}
                                    className="border p-1 rounded"
                                />
                                <div className="w-10 h-10 rounded border"
                                     style={{backgroundColor: formData.color1}}></div>
                            </div>

                            {/* Color 2 */}
                            <div className="p-4 border rounded-lg shadow-md flex items-center gap-4">
                                <label className="block font-medium">Color 2:</label>
                                <input
                                    type="color"
                                    name="color2"
                                    onChange={handleChange}
                                    className="border p-1 rounded"
                                />
                                <div className="w-10 h-10 rounded border"
                                     style={{backgroundColor: formData.color2}}></div>
                            </div>

                            {/* Color 3 */}
                            <div className="p-4 border rounded-lg shadow-md flex items-center gap-4">
                                <label className="block font-medium">Color 3:</label>
                                <input
                                    type="color"
                                    name="color3"
                                    onChange={handleChange}
                                    className="border p-1 rounded"
                                />
                                <div className="w-10 h-10 rounded border"
                                     style={{backgroundColor: formData.color3}}></div>
                            </div>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2">🔗 Links</h2>
                        <hr className="mb-4 border-gray-300"/>

                        <div className="grid gap-4">
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Link 1:</label>
                                <input
                                    type="text"
                                    name="link1"
                                    placeholder={webData.link1}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded"
                                />
                            </div>

                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Link 2:</label>
                                <input
                                    type="text"
                                    name="link2"
                                    placeholder={webData.link2}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded"
                                />
                            </div>

                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Link 3:</label>
                                <input
                                    type="text"
                                    name="link3"
                                    placeholder={webData.link3}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded"
                                />
                            </div>
                        </div>
                    </div>


                    {/* Header */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2">📌 Header</h2>
                        <hr className="mb-4 border-gray-300"/>
                        <div className="p-4 border rounded-lg shadow-md">
                            <label className="block font-medium">Logo Header:</label>
                            <input type="file" accept="image/png, image/jpeg" name="header.logo"
                                   placeholder={webData.header.logo} onChange={handleChange}
                                   className="border p-2 w-full rounded"/>
                        </div>
                    </div>

                    {/* Home */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2">🏡 Home</h2>
                        <hr className="mb-4 border-gray-300"/>
                        <div className="grid gap-4">
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Título Home:</label>
                                <input type="text" name="home.titulo" placeholder={webData.home.titulo}
                                       onChange={handleChange} className="border p-2 w-full rounded"/>
                            </div>
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Imagen Home:</label>
                                <input type="file" accept="image/png, image/jpeg" name="home.imagen"
                                       placeholder={webData.home.imagen} onChange={handleChange}
                                       className="border p-2 w-full rounded"/>
                            </div>
                        </div>
                    </div>

                    {/* About Us */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2">ℹ️ About Us</h2>
                        <hr className="mb-4 border-gray-300"/>
                        <div className="grid gap-4">
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Título About Us:</label>
                                <input type="text" name="about_us.titulo" placeholder={webData.about_us.titulo}
                                       onChange={handleChange} className="border p-2 w-full rounded"/>
                            </div>
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Texto About Us:</label>
                                <textarea name="about_us.texto" placeholder={webData.about_us.texto}
                                          onChange={handleChange} className="border p-2 w-full rounded"/>
                            </div>
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Imagen About Us:</label>
                                <input type="file" accept="image/png, image/jpeg" name="about_us.imagen"
                                       placeholder={webData.about_us.imagen} onChange={handleChange}
                                       className="border p-2 w-full rounded"/>
                            </div>
                        </div>
                    </div>

                    {/* Catálogo */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2">📦 Catálogo</h2>
                        <hr className="mb-4 border-gray-300"/>
                        <div className="grid gap-4">
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Título Catálogo:</label>
                                <input type="text" name="catalogo.titulo" placeholder={webData.catalogo.titulo}
                                       onChange={handleChange} className="border p-2 w-full rounded"/>
                            </div>
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Texto Catálogo:</label>
                                <textarea name="catalogo.texto" placeholder={webData.catalogo.texto}
                                          onChange={handleChange} className="border p-2 w-full rounded"/>
                            </div>
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Imagen Catálogo:</label>
                                <input type="file" accept="image/png, image/jpeg" name="catalogo.imagen"
                                       placeholder={webData.catalogo.imagen} onChange={handleChange}
                                       className="border p-2 w-full rounded"/>
                            </div>
                        </div>
                    </div>

                    {/* Miembros */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2">👥 Modulo extra</h2>
                        <hr className="mb-4 border-gray-300"/>
                        <div className="grid gap-4">
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Título:</label>
                                <input type="text" name="members.titulo" placeholder={webData.members.titulo}
                                       onChange={handleChange} className="border p-2 w-full rounded"/>
                            </div>
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Texto :</label>
                                <textarea name="members.texto" placeholder={webData.members.texto}
                                          onChange={handleChange} className="border p-2 w-full rounded"/>
                            </div>
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Imagen:</label>
                                <input type="file" accept="image/png, image/jpeg" name="members.imagen"
                                       placeholder={webData.members.imagen} onChange={handleChange}
                                       className="border p-2 w-full rounded"/>
                            </div>
                        </div>
                    </div>

                    {/* Contacto */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2">📞 Contáctanos</h2>
                        <hr className="mb-4 border-gray-300"/>
                        <div className="grid gap-4">
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Texto:</label>
                                <textarea name="contact_us.texto" placeholder={webData.contact_us.texto}
                                          onChange={handleChange} className="border p-2 w-full rounded"/>
                            </div>
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Imagen:</label>
                                <input type="file" accept="image/png, image/jpeg" name="contact_us.imagen"
                                       placeholder={webData.contact_us.imagen} onChange={handleChange}
                                       className="border p-2 w-full rounded"/>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2">🔽 Footer</h2>
                        <hr className="mb-4 border-gray-300"/>

                        <div className="grid gap-4">
                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Logo Footer:</label>
                                <input type="file" accept="image/png, image/jpeg"  name="footer.logo" placeholder={webData.footer.logo}
                                       onChange={handleChange} className="border p-2 w-full rounded"/>
                            </div>

                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Slogan:</label>
                                <input type="text" name="footer.slogan" placeholder={webData.footer.slogan}
                                       onChange={handleChange} className="border p-2 w-full rounded"/>
                            </div>

                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Correo:</label>
                                <input type="text" name="footer.correo" placeholder={webData.footer.correo}
                                       onChange={handleChange} className="border p-2 w-full rounded"/>
                            </div>

                            <div className="p-4 border rounded-lg shadow-md">
                                <label className="block font-medium">Número:</label>
                                <input
                                    type="tel"
                                    name="footer.numero"
                                    placeholder={webData.footer.numero}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");
                                        handleChange({target: {name: e.target.name, value}});
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key !== "Backspace" && e.key !== "Delete" && !/[0-9]/.test(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                    className="border p-2 w-full rounded"
                                />
                            </div>

                        </div>
                    </div>


                    <button
                        onClick={handleSave}
                        className="mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md
               hover:bg-blue-700 hover:shadow-lg
               active:bg-blue-800 active:scale-95
               transition-all duration-200"
                    >
                        Guardar Cambios
                    </button>

                </form>
            </div>

            {/* Vista previa en tiempo real */}
            <div className="w-2/3 h-full overflow-auto p-4 border rounded-lg shadow-md items-center">
                <h2 className="text-xl font-bold mb-4">Vista Previa</h2>

                <PreHeader webData={formData}/>
                <TheHeader webData={formData}/>
                <HomeContent webData={formData}/>
                <About webData={formData}/>
                <Catalogue webData={formData}/>
                <Members webData={formData}/>
                <ContactUs webData={formData}/>
                <TheFooter webData={formData}/>
            </div>
        </div>
    );
};

export default EditForm;