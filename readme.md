# Projectman 

Projectman es un gestor de proyectos de línea de comandos que te permite registrar, listar, eliminar y lanzar tus proyectos rápidamente desde cualquier lugar en la terminal.

Su propósito es brindarte acceso instantáneo a tus proyectos, ya sea para abrirlos en VS Code o ejecutar su comando principal sin tener que buscarlos en el sistema de archivos.

## ⚙️ Instalación y configuración

### 1. instalar dependencias

```bash
npm install
```

### 2. Compilar y preparar para uso global

```bash
npm run build
chmod +x dist/bin/index.js
sudo npm link
```

### 3. 🚀 Comandos disponibles

Agrega un nuevo proyecto al gestor. Te pedirá:

- 📛 Nombre del proyecto

- 📂 Ruta absoluta del proyecto (por ejemplo: /home/usuario/Documentos/MiProyecto)

- 💻 Comando para ejecutarlo (opcional, ejemplo: npm run dev)

```bash 
pm add 
```

Muestra la lista de proyectos registrados junto con su ruta.


```bash 
pm list 
```

Permite eliminar un proyecto del gestor. Se mostrará una lista interactiva de todos los proyectos disponibles. Usa las flechas ↑ ↓ y Enter para seleccionar cuál eliminar.

```bash 
pm remove 
```


Abre el proyecto en VS Code.

```bash 
pm open <nombre>
```


Abre el proyecto en VS Code y luego ejecuta su comando si está disponible.

```bash 
pm launch MiProyecto
```
