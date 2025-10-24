# Curriculum Vitae Moderno — Fernando Martin Gan

**Perfil profesional**  
- Full Stack Senior: Visual Basic, SQL Server, Crystal Reports  
- Full Stack Junior: HTML, CSS, JavaScript/TypeScript  
- Full Stack Junior: Next.js, Express, React, TypeScript, MongoDB, MySQL, PostgreSQL

Portfolio interactivo y currículum dinámico desarrollado en Next.js. El objetivo es mostrar tu experiencia, stack tecnológico y skills relevantes en proyectos de desarrollo web y servicios técnicos.

## Iniciar el Proyecto

1. Instala las dependencias:
    ```
    npm install
    ```
2. Ejecuta el servidor de desarrollo:
    ```
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    # o
    bun dev
    ```
3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura y Tecnologías

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS  
- **Backend:** Express, Node.js (opcional en futuras versiones)  
- **Base de datos:** MongoDB, MySQL, PostgreSQL  
- **Fuentes:** Optimización automática con [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) y [Geist](https://vercel.com/font)

Puedes personalizar el contenido editando el archivo `app/page.tsx`. Los cambios se reflejan automáticamente gracias al Hot Reload.

## Características principales

- Navegación multi-sección (perfil personal, experiencia, RRHH, educación, habilidades, portafolios, contacto)
- Diseño moderno y responsive
- Información técnica y de negocio modelada para presentación y demo interactiva
- Utiliza rutas de Next.js App Router y componentes reutilizables para fácil mantenimiento

## Recursos útiles

- [Documentación oficial de Next.js](https://nextjs.org/docs)
- [Tutorial interactivo de Next.js](https://nextjs.org/learn)
- [Repositorio de Next.js en GitHub](https://github.com/vercel/next.js)

## Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

### Configuración automática (recomendado)

1. **Habilita GitHub Pages en tu repositorio:**
   - Ve a Settings > Pages en tu repositorio de GitHub
   - En "Source", selecciona "GitHub Actions"

2. **El despliegue se ejecutará automáticamente** cada vez que hagas push a la rama `main`

### Despliegue manual

Si prefieres desplegar manualmente:

```bash
# Instalar dependencias
npm install

# Construir el proyecto
npm run build

# Los archivos estáticos se generarán en la carpeta `out/`
```

### Configuración del repositorio

- **Nombre del repositorio:** `front-nextjs` (o el nombre que hayas elegido)
- **URL de GitHub Pages:** `https://tuusuario.github.io/front-nextjs/`

### Solución de problemas

Si tienes problemas con el despliegue:

1. **Verifica que el archivo `.nojekyll` esté presente** en la raíz del proyecto
2. **Asegúrate de que el `basePath` en `next.config.ts` coincida** con el nombre de tu repositorio
3. **Revisa los logs de GitHub Actions** en la pestaña "Actions" de tu repositorio

---
