# MERN MYSQL DOCKER

Proyecto con React, Mysql y Express

## Configuracion del Proyecto
---

### Creacion de Red

```
docker network create RedDocker
```

### Configuracion MYSQL Docker

```
docker pull mysql
```

```
docker run -itd --name MysqlDB --network RedDocker -p 8080:8080 -e MYSQL_ROOT_PASSWORD=root1234 mysql 
```

```
docker exec -it MysqlDB mysql -p
```
```
create database TASKDB;
use TASKDB;
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(300),
    done BOOLEAN NOT NULL DEFAULT 0,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```
### Configuracion Backend 

```
docker pull node
```
```
docker run -itd --name BackApp --network RedDocker -v $(pwd)/server/:/home/node -p 4000:4000 node
```
```
docker exec -it FrontApp bash
cd /home/node
npm install -f
npm run dev
```

### Rutas API
```
Metodo: GET
Ruta: 127.0.0.1/tasks
```
```
Metodo: POST
Ruta: 127.0.0.1/tasks
Body:
    {
        "title":"Tarea",
        "description":"Realizar proyecto de AMV"
    }
```
```
Metodo: PUT
Ruta: 127.0.0.1/tasks/1
Body:
    {
        "title":"Tarea",
        "description":"Realizar proyecto de AMV",
        "done":1
    }
```
```
Metodo: DELETE
Ruta: 127.0.0.1/tasks/1
```


### Configuracion Frontend

```
docker pull node
```
```
docker run -itd --name FrontApp --network RedDocker -v $(pwd)/client/:/home/node/ -p 5173:5173 node
```
```
docker exec -it FrontApp bash
cd /home/node
npm install -f
npm run dev
```
### Creacion de DockerFiles

```
docker build -t name .
```