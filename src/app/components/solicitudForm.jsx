import React, { useState } from 'react';
import '../styles/solicitudForm.css';

const SolicitudForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        telefono: '',
        correo: '',
        tipo: '',
        solicitud: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,

        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Enviar datos a ambos endpoints
            const response1 = await fetch('/api/pqr', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const response2 = await fetch('/api/pqr-auto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });


            if (!response1.ok || !response2.ok) {
                throw new Error('Error al enviar datos a uno o ambos endpoints.');
            }


            alert('Solicitud enviada con éxito.');
        } catch (error) {
            console.error('Error al enviar datos:', error);
            alert('Ocurrió un error al enviar la solicitud.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Apellido:</label>
                <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Cédula:</label>
                <input
                    type="text"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Teléfono:</label>
                <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Tipo de Solicitud:</label>

                <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    className="form-select"
                >
                    <option value="">Seleccione su tipo de solicitud</option>
                    <option value="peticion">Cotización</option>
                </select>
            </div>
            <div>
                <label>Detalles:</label>
                <textarea
                    name="solicitud"
                    placeholder="Detalles"
                    value={formData.solicitud}
                    onChange={handleChange}
                />
            </div>
            <div>
                <div className="politicaDatos-container">
                    <input type="checkbox" required>
                    </input>
                    <label>He leído y acepto la politica de tratamiento de datos
                    </label>

                </div>
                <a className="politicaDatos" href="/terminos" target="_blank">Ver politica de tratamiento de
                    datos</a>
            </div>
            <br/>
            <button type="submit">Enviar</button>
        </form>

    );
};

export default SolicitudForm;
