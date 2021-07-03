# Proyecto Billetera React

El objetivo es tener una organización del dinero entrante a las cuentas o billeteras

Es una página con dos secciones, la parte gris es donde se mostraran las billeteras y la parte 
blanca es donde apareceran los formularios y las transferencias he información de las mismas

## Agregar Billeteras

En la parte superior izquierda a la derecha de "Mis Billeteras" hay un botón +, que al hacer click aparecera
una nueva sección la cual tendra un formulario en la cual se tiene que ingresar un nombre y un monto inicial para
poder crear una billetera

### Sección Billeteras

Las card de las billeteras tiene su nombre, monto y acciones (favorito y borrado)

`Favoritas`
En la parte favortia estaran todas las billeteras que son favoritas

para que una billetera sea favorita se tiene que hacer click en la estrella


`Billeteras`
En la parte billeteras estan todas las billeteras que no son favoritas

**Las billeteras se pueden eliminar y junto a eso se eliminaran todas las transferencias**

### Sección Transferencias

Al hacer click en una billetera, esta tendra un color amarillento que indicara que es la billetera activa, en la parte derecha se mostrara informacion de la billetera, formulario de creacion de transferencias y una tabla donde estaran todas
las transferencias realizadas.

Dependiendo del monto ingresado es el cambio del balance actual y al agregar una transferencia aparecera una card con la 
información, dependiendo del monto esta aparecera verde o roja.

Las transferencias se pueden eliminar y el monto sera restado o sumado al balance actual y al eliminar todas, la billetera
volvera a tu estado original

Tambien tiene un boton editar que al apretar se cambiara a un formulario donde se puede editar la billetera

### Api y base de datos

Se utilizo react redux para la conexión a una api personalizada

**https://github.com/JeysonFernandezF/proyecto-billetera-backend**
Porfavor colocar en el puerto 5000, ya que la app de react apunta a esa dirección, el sql esta en el repositorio en la carpeta database "billetera.sql"



