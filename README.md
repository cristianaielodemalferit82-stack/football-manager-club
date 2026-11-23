# Football Manager Club ⚽

## Descripción

Football Manager Club es una aplicación web para la gestión de jugadores de un club de fútbol.
Permite registrar, consultar, editar y eliminar jugadores a través de una interfaz web conectada a una API REST con base de datos MongoDB.

---

## Tecnologías utilizadas

| Parte | Tecnologías |
|-------|-------------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js, Express |
| Base de datos | MongoDB, Mongoose |
| Control de versiones | Git y GitHub |

---

## Estructura del proyecto

```
football-manager-club/
├── backend/
│   ├── config/
│   │   └── db.js              # Conexión a MongoDB
│   ├── models/
│   │   └── Player.js          # Modelo de jugador
│   ├── routes/
│   │   └── playersRoutes.js   # Rutas CRUD de la API
│   ├── package.json
│   └── server.js              # Servidor Express
├── docs/
│   ├── guia-estils.md         # Guía de estilos
│   ├── prototipat.md          # Prototipado
│   └── memoria-projecte.md    # Memoria del proyecto
├── frontend/
│   ├── css/style.css
│   ├── js/app.js
│   └── index.html
├── .gitignore
└── README.md
```

---

## Requisitos previos

- [Node.js](https://nodejs.org/) versión 18 o superior
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) instalado y en ejecución en `localhost:27017`
- Git

---

## Instalación y puesta en marcha

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/cristianaielodemalferit82-stack/football-manager-club.git
   cd football-manager-club
   ```

2. **Instalar las dependencias del backend**

   ```bash
   cd backend
   npm install
   ```

3. **Arrancar MongoDB**

   Asegúrate de que el servicio de MongoDB está iniciado. La aplicación se conecta a:

   ```
   mongodb://localhost:27017/footballmanager
   ```

   La base de datos `footballmanager` se crea automáticamente al guardar el primer jugador.

4. **Arrancar el servidor**

   ```bash
   npm start
   ```

   Si todo va bien, en la consola aparecerá:

   ```
   Servidor ejecutándose en http://localhost:3000
   MongoDB conectada
   ```

5. **Abrir la aplicación**

   Entra en [http://localhost:3000](http://localhost:3000) desde el navegador.

---

## API REST

URL base: `http://localhost:3000/api/players`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/players` | Lista todos los jugadores |
| GET | `/api/players/:id` | Obtiene un jugador |
| POST | `/api/players` | Crea un jugador |
| PUT | `/api/players/:id` | Actualiza un jugador |
| DELETE | `/api/players/:id` | Elimina un jugador |

Ejemplo de cuerpo (JSON) para crear un jugador:

```json
{
  "nombre": "Marc",
  "apellidos": "Puig Ferrer",
  "edad": 22,
  "dorsal": 10,
  "posicion": "Centrocampista",
  "equipo": "Juvenil A",
  "nacionalidad": "España"
}
```

Valores permitidos para `posicion`: `Portero`, `Defensa`, `Centrocampista`, `Delantero`.

---

## Documentación

- [Guía de estilos](docs/guia-estils.md)
- [Prototipado](docs/prototipat.md)
- [Memoria del proyecto](docs/memoria-projecte.md)

---

## Autor

Cristian — 2º DAW
