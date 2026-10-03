FROM nginx:alpine

# Copia el sitio estático al directorio que sirve Nginx
COPY . /usr/share/nginx/html

# Configuración simple de Nginx (SPA-friendly, cache de estáticos)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
