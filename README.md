CuchiLab - Sistema de Gestión del Laboratorio L5
CuchiLab es una solución web integral diseñada para reemplazar los procesos manuales y las bitácoras desconectadas en la gestión del Laboratorio L5. El sistema centraliza el inventario de equipos (computadoras, routers, switches) y automatiza el flujo de soporte técnico, desde el reporte de fallas hasta la reparación.

📄 Contexto y Problemática (El Proceso "AS-IS")
El análisis del proceso actual ("AS-IS") reveló un sistema de gestión fragmentado que depende de la comunicación verbal y de múltiples bitácoras físicas desconectadas, lo que genera ineficiencias, cuellos de botella y falta de trazabilidad:

Bitácoras Aisladas: El Administrador maneja una bitácora de inventario (Bitácora A) y otra de soporte (Bitácora B). A su vez, el personal de Mantenimiento lleva su propio registro de reparaciones en taller (Bitácora C). No hay conexión entre ellas.

Reportes Informales: Los Alumnos/Instructores originan el proceso de soporte al detectar una falla, pero el reporte es casi siempre verbal o mediante un post-it, lo que no genera un registro formal.

Flujo Roto: El flujo de reparación es complejo e involucra múltiples pasos (Jefatura, Presupuesto, Proveedor Externo) que no se rastrean. El Administrador pierde visibilidad una vez que un equipo sale a reparación.

Cuellos de Botella: Los principales retrasos identificados son la gestión de presupuestos, los pagos a proveedores y la autorización de refacciones.

✨ La Solución: CuchiLab
CuchiLab resuelve esta problemática al unificar a todos los actores (Administrador, Mantenimiento, Alumnos) en una única plataforma digital.

Reemplaza todas las bitácoras físicas.

Proporciona un canal formal para que los alumnos levanten reportes (incluso mediante QR).

Da al administrador un dashboard para ver el estado real de todos los equipos, incluyendo aquellos "en proveedor externo" o "esperando autorización".

Entrega a mantenimiento un historial digital completo de cada dispositivo.

🚀 Stack Tecnológico
Este proyecto es un monorepo que contiene dos aplicaciones separadas:

Frontend (Cliente): React.js (construido con Vite)

Backend (Servidor): Express.js (sobre Node.js)

Base de Datos: MySQL

Autenticación: JWT (JSON Web Tokens)

📁 Estructura del Proyecto
/CuchiLab  (Repositorio Git)
  |
  |-- /backend/      (API REST con Express.js, se conecta a MySQL)
  |-- /frontend/     (Dashboard con React, consume la API)
  |-- .gitignore     (Configuración de Git para el monorepo)
  `-- README.md      (Este archivo)
🛠️ Guía de Instalación Local
Prerrequisitos
Node.js (v18 o superior)

Git

Un servidor MySQL local (como MySQL Workbench) y la base de datos creada.

1. Backend (Servidor Express)
Navega a la carpeta del backend:

Bash

cd backend
Crea el package.json:

Bash

npm init -y
Instala las dependencias principales:

Bash

npm install express mysql2 cors jsonwebtoken bcryptjs
Instala la dependencia de desarrollo (nodemon):

Bash

npm install -D nodemon
2. Frontend (Cliente React)
(Desde la raíz) Navega a la carpeta del frontend:

Bash

cd ../frontend
Crea el proyecto React con Vite dentro de esta carpeta:

Bash

npm create vite@latest . -- --template react
Instala las dependencias base de React:

Bash

npm install
Instala react-router (para las páginas) y axios (para la API):

Bash

npm install axios react-router-dom