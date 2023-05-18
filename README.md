# **Plataforma de gestión de pedidos de productos artesanales**


---
## **REQUERIMIENTOS DEL SISTEMA**
- Sistema Operativo Ubuntu/Linux AMD64/ARM64 22.04LTS
- npm 9.5.1+
- node v18.2.0+
- Soporte para Firefox, Microsfot Edge, Google Chrome, etc.

---
## **MANUAL DE USUARIO**

---
**¿Qué debo de tener instalado?**

- ***Configuraciones Iniciales que debe de tener instalado en Linux/Ubuntu 22.04 LTS***


**Opción 1:** Instalar Node.js con Apt
```bash
sudo apt update
```

A continuación se debe de **instalar Node.js**
```bash
sudo apt install nodejs
```

Compruebe que la instalación se haya realizado de forma correcta.
```bash
node js -v
```

<h4 style="color:blue">Output</h4>

```bash
v18.16.1
```

A continuación se procede a instalar el administrador de Paquetes ***.npm***

```bash
sudo apt install npm
```


<h4 style="color:blue">Output</h4>

```bash
9.5.1
```

----

**¿Cómo descargo el proyecto?**

**Paso No. 1:** Debe de ingresar al link del proyecto, ***<a src="https://github.com/bram814/frontend.git">click aqui.</a>***



**Paso No. 2:** Luego de ingresar al link debe de seleccionar el botón (Code).

![BOTON_DESCARGAR](/img/boton_descarga.png)

**Paso No. 3:** Luego debe seleccionar el botón que dice descargar por ***ZIP***.


![DESCARGAR](/img/descargar.png)

-----
**¿Cómo ejecutar el proyecto?**

- ***Proceso para ejecutar el proyecto en LInux/Ubuntu 22.04 LTS***
```bash
# Lo primero que se debe de realizar, es acceder a la ruta del proyecto:
usuario@usuario-linux:~ cd /ruta_del_proyecto

# Ejemplo:
bram814@bram814-linux:~/Descargas/frontend$  cd /frontend

# Acceder nuevamente a la carpeta frontend, debido a que ahí se encuentra el proyecto a ejecutar.
bram814@bram814-linux:~/Descargas/frontend$  cd /frontend

# Al estar posicionados en la ruta, se deben de instalar las dependencias.
bram814@bram814-linux:~/Descargas/frontend/frontend$  npm i

# Al ya tener instalado todas las dependencias se procede a ejecutar el proyecto
bram814@bram814-linux:~/Descargas/frontend/frontend$  npm start

```
----

**¿En dónde puedo ver el proyecto?**

- Debe de abrir un navegador ***de su preferencia***.

**Paso 1:** Debe de ingeresar a http://localhost:3000/


![APP](/img/app/home.png)

**Paso 2:** Debe de registrarse.

![APP](/img/app/registro.png)


**Paso 3:** Debe ingresar sus datos en los campos.

![APP](/img/app/ingreso_datos_registro.png)


**Paso 4:** Al terminar de rellenar todos los campos, se procede a registrar al usuario.

![APP](/img/app/registrar.png)


**Paso 5:** Procedemos a ingresar a la aplicación.

![APP](/img/app/login.png)

**Paso 6:** Ingresamos todos los campos para el login.


![APP](/img/app/login_ingreso_datos.png)


**Paso 7:** Al terminar de rellenar todos los campos, se procede a ingresar.


![APP](/img/app/login_ingreso.png)

----

***Acceso como Administrador***

**Paso 1:** Vista general del Administrador (Productos).


![APP](/img/app/administrador.png)


**Paso 2:** En la parte de pestaña "Producto" tiene la posibilidad de poder agregar un producto, o incluso poder visualizarlo.

![APP](/img/app/adminsitrador_producto_agregar_visualizar.png)

**Paso 3:** Vista general del Administrador (Pedidos).


![APP](/img/app/administrador_pedidos.png)

**Paso 4:** En la parte de pestaña "Pedidos" tiene la posibilidad de poder aceptar o declinar algún pedido que realizo el susuario.

![APP](/img/app/administrador_pedidos_aceptar.png)

**Paso 5:** Salir de la sesión.

![APP](/img/app/administrador_logout.png)

----

***Acceso como Usuario***

**Paso 1:** Vistal general del Usuario.

![APP](/img/app/usuario.png)


**Paso 2:** En la pestaña de datos personales, es la encargada de mostrar el usuario que ha ingresado a la aplicación.


![APP](/img/app/usuario_datos_personales.png)

**Paso 3:** En la pestaña de realizar pedidos, será la encargada de poder realizar pedidos.

![APP](/img/app/usuario_datos_personales.png)


**Paso 3:** En la pestaña de realizar pedidos, será la encargada de poder seleccionar un produccto en existencia y poser realizar el pedido.

![APP](/img/app/usuario_realizar_pedidos.png)

----

## **MANUAL TÉCNICO**

El proyecto está desarrollado con React, a continuación se presenta la estrucutra del proyecto.

![APP](/img/app/estructura.png)


----

- Se crea una carpeta **api** que es la encargada de contener la conexión al backend


![APP](/img/app/api1.png)

![APP](/img/app/api2.png)


----

- Se crea una carpeta **component** que es la encargada de tener toda la lógica de cada página (Administrador, usuario, widgets y dashboard), cada carpeta tiene una clase ***Tabs.js*** que es la encargada de realizar la lógica para cada módulo.


![APP](/img/app/componente.png)

- Se crea una carpeta la carpeta **hoks, config y context** que son las encargadas de poder crear la authentificación del proyecto.


![APP](/img/app/hooks.png)

- Se crea carpeta **pages y routes** que es la encargada de renderizar los componentes del proyecto según la ruta que tengan cada úna.


![APP](/img/app/pages.png)

- Por último tenemos la clase **App.js** que es la encarga de utilizar React-Router-Dom por medio del authcontext.


![APP](/img/app/react_routes.png)

