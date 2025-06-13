# Proyecto: Gestor de Tareas con Categorías - Examen Final Taller

## Tecnologías usadas  
Las tecnologías utilizadas fueron:  
**React**  + **Vite** + **Tailwind**, para la base de datos usé **Supabase** y para las pruebas usé **Vitest**.

## Cómo ejecutar el proyecto y las pruebas 
Para ejecutar el proyecto hay que estar en la raíz del proyecto que en este caso se llama ToDoApp_ExamenF_Taller y hay que ejecutar los siguientes comandos:

<pre>
npm install
</pre>
<pre>
npm install react-router-dom
</pre>
<pre>
npm install tailwindcss @tailwindcss/vite
</pre>
<pre>
npm install @supabase/supabase-js
</pre>
y al final para ejecutar, escribir **npx vite** en la terminal

### Para las pruebas  
<pre>
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom  
</pre>
y luego **npx vitest**

## Explicación del patrón de diseño aplicado  
Apliqué tres patrones:  Singleton(Creacional), Observer(Comportamiento) y Module(Estructural)    

- El singleton lo usé o bueno se usa solo a la hora de usar la instancia de supabase, aunque es cierto que le creé un servicio aparte donde traigo la URL y KEY y hago la única instancia.

- Observer lo usé como dos servicios para las tareas y categorías donde tengo que manejar los cambios de una manera dinámica o bueno, reactiva ya sea a la hora de asignar una tarea a una categoría o a la hora de actualizar.

- Y Module lo utilizé para encapsular codigo en modulos independientos como ser los antes mencionados en la carpeta service, así no tengo que estar escribiendolo o exponiendolo en mi component sino que simplemente los llamo.

## Estructura del proyecto
Estructuré el proyecto en carpetas separadas por responsabilidad:

- components/ contiene los elementos visuales como el listado de tareas o formularios.

- services/ contiene toda la lógica para conectarse a Supabase, como tareaService.jsx.

- pages/ tiene las pantallas principales como LoginApp, RegisterApp y DashboardApp.

Esto facilita el mantenimiento, escalabilidad y reusabilidad del código.  

## Descripción del problema que resuelve la aplicación  
Resuelve la problemática de orquestar una lista de tareas pendientes, organizandolo por categorías donde se maneja los roles de usuario.

## Solución planteada  
Organizar por categorías las tareas, creando las categorías y las tareas, y si el usuario desea, puede asignar las tareas a una categoría

## Historias de usuario (mínimo 3)  
[CRUD de categorías](http://159.69.123.44/isw/browse/EXAME-1/)  

[CRUD de tareas](http://159.69.123.44/isw/browse/EXAME-2/)  

[Autentificación Login/Registro](http://159.69.123.44/isw/browse/EXAME-4/)  

[Diseño de la base de datos](http://159.69.123.44/isw/browse/EXAME-3/)  


## Lecciones aprendidas  
Organizar un poco mejor mi tiempo: Esta vez si le dediqué según yo, una buena organización de mi parte y creo que se puede ver reflejado en la app, al menos para mi, pude cubrir cada uno de los puntos, o bueno lo suficiente como para que no se caiga la app.

Importancia de los patrones: Mientras iba aumentando más cosas a la app, después del login, registro y categoría, cuando estaba en la parte de tareas me di cuenta que las llamadas a las base de datos y el tener que actualizar los datos se iba a volver muy engorroso de implementar y que iba tener componentes que hacían muchas y con muchas líneas de código así que los patrones, esta vez en vez de complicarme, me ayudaron.
