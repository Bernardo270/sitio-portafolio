# Portafolio horizontal — HTML / CSS / JS

Sitio de una sola página con navegación horizontal (scroll, flechas, arrastre o dots).
En móvil (≤720px) cambia automáticamente a diseño vertical normal.

## Secciones incluidas (6 paneles)
1. **Inicio** — presentación profesional y dos botones (Ver proyectos / Contactar)
2. **Sobre mí** — foto de 10×10 cm, bio profesional y datos rápidos
3. **Habilidades** — frontend / backend / herramientas + lista de tecnologías
4. **Experiencia y educación** — línea de tiempo (incluye el Instituto Tecnológico Superior de Cintalapa)
5. **Proyectos** — tarjetas con descripción y tecnologías usadas
6. **Contacto** — correo, redes y botón de descarga de CV

## Archivos
- `index.html` — estructura y contenido (edita aquí tu nombre, textos y proyectos)
- `style.css` — paleta, tipografía y layout
- `script.js` — navegación horizontal
- `Dockerfile` + `nginx.conf` — para desplegarlo como contenedor

## 1. Editar tu contenido
Antes de subirlo, reemplaza en `index.html`:
- "Tu Nombre" por tu nombre real
- El texto de "Sobre mí", habilidades, experiencia/educación, proyectos y el correo de contacto
- Los enlaces de GitHub / LinkedIn
- El botón "Descargar CV" apunta a `assets/cv.pdf`, que todavía no existe — agrega tu CV ahí con ese nombre (o cambia la ruta en `index.html`)

## 2. Agregar tu foto (carpeta `assets/`)
| Archivo de relleno (ya incluido) | Reemplázalo por | Dónde se usa |
|---|---|---|
| `assets/foto-perfil.svg` | tu foto real (jpg/png) | "Sobre mí" — junto al texto "Instituto Tecnológico Superior de Cintalapa" |

Si subes tu foto con otro nombre o extensión (por ejemplo `foto.jpg`), actualiza también el atributo `src` en `index.html`, en la línea de `profile-photo`.

## 3. Probar en local (opcional)
No necesitas nada especial, es HTML/CSS/JS puro:
```bash
# Opción rápida con Python
python3 -m http.server 8080
# abre http://localhost:8080
```

## 4. Subir el proyecto a GitHub
```bash
cd portfolio
git init
git add .
git commit -m "Portafolio inicial"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

## 5. Desplegar en Dokploy
Como ya tienes Dokploy enlazado a GitHub:
1. Entra al panel de Dokploy.
2. Crea (o abre) tu **Project** → **Application**.
3. En **Source**, selecciona este repositorio y la rama `main`.
4. En **Build Type**, elige **Dockerfile** (ya incluido en el proyecto).
5. En **Domains**, agrega tu dominio o el que te ofrezca Dokploy, puerto interno **80**.
6. Pulsa **Deploy**.

## 6. Actualizaciones futuras
Cada vez que hagas `git push` a la rama conectada, puedes:
- Configurar un **Webhook** en Dokploy para que se despliegue automáticamente, o
- Pulsar **Redeploy** manualmente desde el panel.

## Notas
- Es un sitio 100% estático: no necesita base de datos ni backend.
- Si prefieres no usar Docker, Dokploy también soporta despliegue estático directo (Nixpacks / Static), pero el `Dockerfile` incluido es la opción más portable y controlada.
