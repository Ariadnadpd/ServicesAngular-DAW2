# Angular Services - DAW2

SPA basada en la API de Star Wars [(SWAPI)](https://swapi.dev/), concretamente en la información de los personajes de la saga de Star Wars. Para ello, se ha hecho uso de servicios y se ha gestionando el paso de información entre componentes padre e hijos y viceversa. Está desarrollada con el framework [Angular](https://angular.io/) y con la librería de [Angular Material](https://material.angular.io/).    

La SPA permite seleccionar un personaje de la saga de Star Wars para visualizar en tiempo real una tarjeta con sus datos personales. También permite añadir a la lista de favoritos los personajes de la saga que se deseen. 

Además, se puede ver un panel de información adicional (haciendo clic en el icono de información que se muestra al lado del título) para obtener más información sobre el SPA realizado, sus instrucciones de uso y los datos personales que se muestran de los personajes. 

## Requerimientos

1. Tener instalado [Node.js y npm](https://nodejs.org/es/).
2. Tener instalada la `versión 13.2.6` del CLI Angular.
3. Tener instalado un navegador, preferiblemente el de `Google Chroome`.

## Cómo ejecutar el proyecto

En primer lugar, para ejecutar el proyecto localmente hay que descargar la carpeta del proyecto y descomprimirla. Luego, hay que realizar los siguientes pasos desde la terminal del equipo o desde la terminal de un IDE (Visual Studio Code, por ejemplo):

* Ir a la carpeta del proyecto: cd `ServicesAngular-DAW2-master`.
* Ejecutar el siguiente comando para descargar todas las dependencias que encuentre en el fichero **package.json** del proyecto: `npm install`.
* Por último, ejecutar el comando `ng serve` para arrancar el servidor de desarrollo, es decir, para ejecutar la aplicación. Después, navegar a `http://localhost:4200/`.
* También, se puede ejecutar `ng -o serve` para que la aplicación se ejecute y se abra automáticamente en el navegador por defecto. La aplicación, en ambos casos, se recargará automáticamente si cambia alguno de los archivos de origen.

Otra manera más sencila de acceder al proyecto realizado es haciendo clic [aquí](https://angular-services-starwars.netlify.app/).
