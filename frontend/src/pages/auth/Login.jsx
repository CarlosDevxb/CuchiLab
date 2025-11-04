import React, { useState } from 'react';
import './Login.css'; // Importa el archivo CSS para estilos

const Login = () => {
    // Estados para guardar los valores de los campos del formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // Función que se ejecuta cuando se envía el formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        console.log('Intentando iniciar sesión con:', { email, password, rememberMe });
        // Aquí iría la lógica para llamar a tu API de Express
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-form-section">
                    <div className="login-logo">
                        {/* Puedes poner un icono o un texto simple para el logo */}
                        <span>Cuchipu </span>
                        <span>Networks</span>
                    </div>
                    <h2 className="login-welcome">Bienvenido!</h2>
                    <p className="login-subtitle">Por favor inicia sesión en tu cuenta.</p>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Usuario</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tuemail@cuchilab.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="******"
                                required
                            />
                        </div>

                    

                        <button type="submit" className="login-button">Login</button>
                    </form>

                    <p className="login-policy">
                       Cuchipu Entertainment &copy; 2025. Todos los derechos reservados.
                    </p>
                </div>

                <div className="login-image-section">
                    {/* Aquí podrías agregar una imagen o un diseño decorativo */}  
                </div>
            </div>
        </div>
    );
};

export default Login;
// frontend/src/components/Login.jsx