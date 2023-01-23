# MERN MYSQL DOCKER

Proyecto con React, Mysql y Express

## Configuracion del Proyecto


### Creacion de Red
---

```
docker network create --driver=bridge --subnet=192.168.50.0/24 --gateway=192.168.50.1 RedDocker
```

### Configuracion MYSQL Docker
---

```
docker pull mysql
```

```
docker build -t mysqldb .
docker run -d --name MysqlDB --network RedDocker --ip 192.168.50.10 mysqldb
```

Esperar 4m aproximadamente para que la incializacion del servicio SQL termine.

```
docker exec MysqlDB /bin/sh -c 'mysql -u root -proot < /home/mysql/db.sql'
```
### Configuracion Backend 
---

```
docker pull node
```
```
docker build -t backend --build-arg port=3000 .

docker run -itd --name BackApp --network RedDocker --ip 192.168.50.20 -e IP_DB=192.168.50.10 -e PORT=3000 backend npm run dev 
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
---

```
docker pull node
```
```
docker build -t frontend --build-arg port=4000 .

docker run -itd --name FrontApp --network RedDocker --ip 192.168.50.30 -e IP_API=192.168.50.20 -e PORT_API=3000 -e PORT=4000 -p 4000:4000 frontend npm run dev
```
Editar `src/api/tasks.api.js`  con las direcciones IP de la API que se asigno previamente. Ingresadno al modo iteractivo de docker `docker exec -it ...`

### Configuracion Nginx

```
docker pull nginx
```
```
docker build -t nginxlb .

docker run -d --name NginxLB --network RedDocker --ip 192.168.50.40 -p 80:80 nginxlb
```