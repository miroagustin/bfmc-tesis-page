# BFMC Calendar App

Aplicación React con Vite y Bootstrap que muestra un calendario interactivo.

## Requisitos

- Node.js 18+
- npm

## Configuración

1. Copiar `.env.example` a `.env` y ajustar `VITE_API_BASE_URL`.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```
4. Construir para producción:
   ```bash
   npm run build
   ```

## Desarrollo

La aplicación utiliza un contexto (`ApiContext`) para conectarse a la API definida en `VITE_API_BASE_URL`. El componente principal `CalendarPage` muestra el calendario y lista los eventos obtenidos de la API para la fecha seleccionada.
