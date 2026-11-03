# Backend
# API REST de Tareas con autenticación JWT

Backend en Node.js + Express + MongoDB (Mongoose). Los usuarios se registran, inician sesión y reciben un token JWT. Con ese token pueden administrar sus propias tareas (CRUD). Cada usuario solo ve, modifica y elimina sus tareas.

## Instalación

```bash
npm install
```

Copia `.env.example` a `.env` y llena los valores:

```
PORT=5000
JWT_SECRET=tu_secreto
MONGO_DB=tu_cadena_de_conexion_de_mongodb
```

## Ejecución

```bash
node backend/server.js
```

El servidor queda en `http://localhost:5000`.

## Endpoints

| Método | Ruta | Descripción | Requiere token |
|---|---|---|---|
| POST | /api/users | Registrar usuario | No |
| POST | /api/users/login | Iniciar sesión (devuelve JWT) | No |
| GET | /api/users/datos | Datos del usuario del token | Sí |
| GET | /api/tareas | Listar tareas del usuario | Sí |
| POST | /api/tareas | Crear tarea | Sí |
| PUT | /api/tareas/:id | Modificar tarea propia | Sí |
| DELETE | /api/tareas/:id | Eliminar tarea propia | Sí |

Las rutas protegidas requieren el header: `Authorization: Bearer <token>`
