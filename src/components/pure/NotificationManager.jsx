import React, { useState } from 'react';
import axios from 'axios';

function NotificationManager() {

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const sendNote = () => axios.post('http://localhost:8000/custom-notification', {
        title, message
    }).then(r => console.log(r)).catch(e => console.log(e));

    return (
        <>
            <h1>Te doy la bienvenida al Gestor de Notificaciones</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <input type="text" placeholder='Aquí viene el título' value={title} onChange={e => setTitle(e.target.value)} />
                <textarea placeholder='Aquí debes escribir tu mensaje' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <button onClick={sendNote}>Enviar Notificación</button>
            </div>
        </>
    )
}

export default NotificationManager
