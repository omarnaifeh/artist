# Musik Artist Webapplikation

Dette er en full-stack webapplikation til administration og udforskning af information om musikartists. Applikationen omfatter både en backend og frontend og bruger et REST API til at håndtere data.

## Krav

- Node.js
- Express.js
- HTML, CSS og JavaScript
- data.json-fil med kunstneroplysninger

## Sådan bruges det

1. *Installation:*

   Først skal du installere de nødvendige afhængigheder ved at køre følgende kommandoer i rodmappen:

   ```bash
   npm install
   Start serveren:

Start backend-serveren ved at køre:

bash
Copy code
node app.js
Serveren kører nu på http://localhost:3000.

Frontend:

Åbn index.html i en webbrowser for at bruge frontend-delen af applikationen. Du kan oprette, læse, opdatere og slette kunstnere, filtrere og sortere dem, og markere kunstnere som favoritter.

API-ruter:

Backend-serveren har følgende API-ruter:

GET /artists: Hent alle artists.
GET /artists/:id: Hent en specifik artist baseret på ID.
POST /artists: Opret en ny artist.
POST /favorites/toggle: Tilføj eller fjern en artist som favorit.
GET /favorites: Hent alle favoritartists.
Datakilde:

Kunstneroplysningerne er gemt i data.json. Du kan redigere denne fil for at tilføje eller ændre kunstnere.
