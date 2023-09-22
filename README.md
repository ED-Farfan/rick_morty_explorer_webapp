# rick_morty_explorer_webapp
# Introducción

¡Bienvenido a la documentación !

**Descripción de la Aplicación**
[rick_morty_explorer_webapp] es una aplicación web que se conecta a la API de "Rick y Morty" para proporcionarte información detallada sobre los personajes de la serie. Con esta aplicación, podrás explorar una amplia lista de personajes y filtrarlos por nombre y género para obtener información específica.

## Uso de Nuxt.js con Vue.js 2

Este proyecto utiliza [Nuxt.js](https://nuxtjs.org/) como framework de desarrollo y [Vue.js 2](https://vuejs.org/) como la biblioteca de JavaScript subyacente. Aquí te proporcionamos información importante sobre esta configuración:

### Versión de Vue.js

Este proyecto utiliza **Vue.js 2**, que es una versión estable y ampliamente utilizada de Vue.js. Asegúrate de estar familiarizado con la documentación oficial de Vue.js 2 para aprovechar al máximo esta tecnología.


**Objetivos de la Aplicación**
- Proporcionar a los usuarios una forma sencilla y rápida de acceder a datos sobre los personajes de "Rick y Morty".
- Permitir a los usuarios buscar y filtrar personajes de acuerdo a sus preferencias.
- Ofrecer una experiencia de usuario intuitiva y agradable al interactuar con la API.

## Configuración de Compilación

> **Advertencia:** Esta aplicación requiere Node.js versión 16.14.0 para funcionar correctamente. Asegúrate de tener instalada la versión correcta de Node.js antes de continuar.

> **Advertencia:** Esta aplicación requiere .env para funcionar correctamente. Asegúrate de tener el archivo antes de continuar.

```bash
# install dependencies
$ yarn install --frozen-lockfile

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
 ```

 ## assets

  - **base**: En esta carpeta se almacenan los estilos básicos y globales que se aplican a toda la aplicación, como el archivo "_reset.scss".

  - **components**: Aquí se guardan los estilos específicos de componentes reutilizables en la aplicación.

  - **layout**: Esta carpeta contiene estilos relacionados con la estructura y el diseño de la página.

  - **page**: En esta carpeta se definen estilos específicos para páginas individuales de la aplicación.

  - **_variables**: El archivo "_variables.scss" define variables de estilo globales para colores, tamaños de fuente y márgenes.

  - **color-classes**: Esta carpeta puede contener estilos relacionados con clases de colores específicas aplicables a elementos en el HTML.

  - **main**: El archivo "main.scss" es el punto de entrada principal para los estilos, donde se importan y ensamblan todos los estilos definidos en las carpetas anteriores.

  ## components


  - **common**: En esta carpeta se encuentran los componentes comunes que pueden ser utilizados en varias partes de la aplicación. Por ejemplo, la subcarpeta "toolbar" podría contener componentes relacionados con la barra de herramientas que se utiliza en varias páginas.

  - **page**: La subcarpeta "page" contiene componentes específicos de página. Estos componentes están diseñados para ser utilizados en páginas individuales de la aplicación y pueden tener funcionalidades y estilos específicos para esas páginas en particular.

## layouts

  - **404**: En el template "404" contiene el diseño y la estructura específicos para la página de error 404. Este diseño se utiliza cuando un usuario intenta acceder a una página que no existe.

  - **default**: En el template "default" alberga el diseño predeterminado o estándar de la mayoría de las páginas de la aplicación. Es el diseño que se utiliza en la mayoría de las páginas cuando no se requiere uno especial.

  - **errors**: En el template "error," se pueden encontrar diseños y estructuras específicas para páginas de error distintas de la 404. Por ejemplo, podría incluir diseños para páginas de error personalizadas, como errores de servidor (500) o errores de acceso no autorizado (401).
## page


  - **detalle**: En la subcarpeta "detalle," se encuentra el componente específico para la página de detalle de los personajes. El archivo "_id.vue" podría representar una plantilla de página para ver los detalles de un personaje individual identificado por su ID.

  - **index**: La subcarpeta "index" contiene el componente principal de la página principal o de inicio de la aplicación. Esta página suele ser una tabla que muestra todos los personajes disponibles en la aplicación.
## services


  - **dataServices.js**: El archivo "dataServices.js" es un módulo de servicios que se encarga de interactuar con la API para obtener datos.

## store
  - **index.js**: El archivo "index.js" es un módulo Vuex que gestiona el estado de la aplicación.

  ## utils

  - **Character.js**: El archivo "Character.js" contiene al objeto "Character".

  - **Episode.js**: El archivo "Episode.js" contiene al objeto "Episode".

  - **Location.js**: El archivo "Location.js" contiene al objeto "Location"n.

  - **Origin.js**: El archivo "Origin.js" contiene al objeto "Origin".

  - **querystring.js**: El archivo "querystring.js" contiene una función llamada "objectToQueryString" que convierte un objeto en una cadena de consulta (query string) para su uso en solicitudes HTTP. Esta función es útil para construir parámetros de consulta en las solicitudes API.

## Diseño de la Aplicación

Esta aplicación fue diseñada por Erick David Farfan Sanchez con el objetivo de proporcionar una experiencia única y funcional para los usuarios.

Si tienes alguna pregunta o sugerencia sobre el diseño de la aplicación, no dudes en ponerte en contacto.

