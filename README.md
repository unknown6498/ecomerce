# E-Commerce

Tienda en línea de tecnología para realizar operaciones básicas de creación, lectura, actualización y eliminación (CRUD) usando Node.js, Express, MongoDB, PostgreSQL para la parte del servidor y React para la interfaz del usuario.



## Creación del Proyecto

### Backend (Node.js, Express, PostgreSQL y MongoDB)

Este proyecto utiliza **Node.js** como entorno de ejecución, **Express** como framework de backend, **PostgreSQL** para la base de datos relacional y **MongoDB** para la base de datos NoSQL. A continuación, se describen los pasos para crear, configurar y ejecutar el proyecto.

### Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- **Node.js** (con npm): [Descargar Node.js](https://nodejs.org/)
- **PostgreSQL**: [Descargar PostgreSQL](https://www.postgresql.org/download/)
- **MongoDB**: [Descargar MongoDB](https://www.mongodb.com/try/download/community)

### Instalación

Crea la carpeta del proyecto `ecommerce` y dentro de la carpeta, crea nuestra primera subcarpeta llamada `backend`. Luego, ingresa a ella por medio de la terminal (cmd). Ejecuta el siguiente comando para instalar las dependencias definidas en `package.json`.

1. Inicializa el proyecto de Node.js:

```bash
    npm init -y
```
2. Instala las dependencias de Express y Nodemon:

```bash
    npm install express nodemon
```
3. Instalar la biblioteca para interactuar con MongoDB

```bash
    npm install mongoose
```
4. Instalar la biblioteca para interactuar con PostgreSQL:

```bash
    npm install pg
```
5. Encriptación de la contraseña:

```bash
    npm install bcryptjs
```
6. Instalación de la dependencia CORS:

```bash
    npm install cors
```
7. Instalación de la dependencia JsonWebToken:

```bash
    npm install jsonwebtoken
```

### Frontend (React)

Este proyecto utiliza **React** para crear una interfaz de usuario interactiva y dinámica. A continuación, se detallan los pasos para configurar y ejecutar el proyecto.

## Instalación

Sigue estos pasos para crear y ejecutar un proyecto React desde cero:

Crea la carpeta dentro del proyecto `ecommerce` con el nombre `frontend` e ingresa a ella por medio de la terminal (cmd). Ejecuta el siguiente comando para instalar las dependencias definidas en `package.json`.

1. Instalar React:

```bash
    Npx create-react-app frontend
```
2. Instalar las dependencias Axios, React-router-DOM y Tailwind:

```bash
    npm install axios react-router-dom npm i @material-tailwind/react
```
3. Instalar el componente de React FontAwesome:

```bash
    npm i --save @fortawesome/fontawesome-svg-core
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/react-fontawesome
```
## Ejecución

### Backend

Antes de iniciar el servidor del proyecto, debemos tener abiertos los servicios de PostgreSQL y MongoDB. Luego, ejecuta el siguiente comando en la terminal:

```pwsh
    cd backend
    npx nodemon servidor.js
```

### Frontend

Ejecuta el siguiente comando en la terminal si estás dentro de la carpeta `backend`:

```pwsh
    cd..
    cd frontend
    npm start
```
Si estás en la carpeta raíz `ecomerce` ejecuta los siguientes comandos:

```pwsh
    cd frontend
    npm start
```
## Funcionalidad del sistema

### Requisitos previos

Antes de comenzar, asegúrate de tener instalado postman

- **Postman**: [Descargar Postman](https://www.postman.com/)

### Prueba Post

Abre Postman y selecciona el endpoint **POST** para registrar usuario.

![Registro](https://github.com/unknown6498/ecomerce/blob/main/screenshots/Post.png?raw=true)

Luego, inicia sesión con el usuario que acabas de registrar.

![IniciarSesion](https://github.com/unknown6498/ecomerce/blob/main/screenshots/Iniciarsesion.png?raw=true)

Es necesario agregar el token de autorización (por ejemplo, `Authorization: Bearer {token}`).

![BearerToken](https://github.com/unknown6498/ecomerce/blob/main/screenshots/Bearer%20Token.png?raw=true)

### Prueba Get

Usamos el método **GET** para visualizar todos los productos dentro de la base de datos.

![Get](https://github.com/unknown6498/ecomerce/blob/main/screenshots/Get.png?raw=true)

### Prueba Put

Usamos el método **PUT** para cambiar la descripción de un producto dentro de la base de datos.

![Put](https://github.com/unknown6498/ecomerce/blob/main/screenshots/Put.png?raw=true)

### Prueba Delete

Usamos el método **DELETE** para eliminar un producto de la base de datos.

![Delete](https://github.com/unknown6498/ecomerce/blob/main/screenshots/Delete.png?raw=true)
