
# E-Comerce

Tienda en linea de tecnologia para realizar operaciones basicas create, read, update and delete (CRUD) usando Node.js, Express, MongoDB, Postgresql para la parte del servidor y React para la interfaz del usuario.





## Creacion del Proyecto

### Backend (Node.js, Express, PostgreSQL y MongoD)

Este proyecto utiliza **Node.js** como entorno de ejecución, **Express** como framework de backend, **PostgreSQL** para la base de datos relacional y **MongoDB** para la base de datos NoSQL. A continuación, se describen los pasos para crear, configurar y ejecutar el proyecto.

### Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- **Node.js** (con npm): [Descargar Node.js](https://nodejs.org/)
- **PostgreSQL**: [Descargar PostgreSQL](https://www.postgresql.org/download/)
- **MongoDB**: [Descargar MongoDB](https://www.mongodb.com/try/download/community)

### Instalación

Crear la carpeta del proyecto ecomerce y dentro de la carpeta crear nuestra primera carpeta backend, ingresamos a ella por medio de cmd. Ejecuta el siguiente comando para instalar las dependencias definidas en package.json.

1. Instala las dependencias de Node.js:

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
4. Instalar biblioteca para interactuar con PostgreSQL

```bash
    npm install pg
```
5. Encripcion de la contraseña

```bash
    npm install bcryptjs
```
6. Instalacion de la dependencia CORS

```bash
    npm install cors
```
7. Instalacion de la dependencia JsonWebToken

```bash
    npm install jsonwebtoken
```

### Frontend (React)

Este proyecto utiliza **React** para crear una interfaz de usuario interactiva y dinámica. A continuación, se detallan los pasos para configurar y ejecutar el proyecto.

### Instalación

Sigue estos pasos para crear y ejecutar un proyecto React desde cero:

Crear la carpeta dentro del proyecto ecomerce con el nombre frontend y ingresamos a ella por medio de cmd. Ejecuta el siguiente comando para instalar las dependencias definidas en package.json.

1. Instalar React:

```bash
    Npx create-react-app frontend
```
2. Instala las dependencias Axios, React-router-DOM y tailwind:

```bash
    npm install axios react-router-dom npm i @material-tailwind/react
```
3. Instalar el componente de React FontAwesome

```bash
    npm i --save @fortawesome/fontawesome-svg-core
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/react-fontawesome
```


## Ejecución

### Backend

Antes de Iniciar el servidor del proyecto, debemos tener abierto los servicios de PostgreSQL y MongoDB, luego ejecutar los siguiente comando en la terminal:

```pwsh
    cd backend
    npx nodemon servidor.js
```

### Frontend

Ejecutar los siguiente comando en la terminal, si estas dentro de la carpeta backend:

```pwsh
    cd..
    cd frontend
    npm start
```
Si estas en la carpeta raiz (ecomerce) ejecutar los comando:

```pwsh
    cd frontend
    npm start
```
## Funcionalidad del sistema
