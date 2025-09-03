# Gebruik een betrouwbaardere en iets completere Node.js image
FROM node:20-slim

# Stel de werkmap in de container in
WORKDIR /app

# Kopieer package.json en package-lock.json expliciet
COPY package.json package-lock.json ./

# Installeer de project-dependencies
RUN npm install

# Kopieer de rest van de projectbestanden
COPY . .

# Maak de poort die Vite gebruikt (standaard 5173) beschikbaar
EXPOSE 5173

# Het commando om de app te starten en te luisteren op alle netwerkinterfaces
# De toevoeging "-- --host" is essentieel
CMD ["npm", "run", "dev", "--", "--host"]