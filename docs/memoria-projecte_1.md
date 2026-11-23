# Memòria del Projecte

## Nom del projecte

**Football Manager Club**

## Autor

Cristian Vlad Timofte Sánchez — 2n DAW

Projecte intermodular de la 1a avaluació del cicle de Desenvolupament d'Aplicacions Web.

---

## 1. Accés al projecte

| Recurs | Enllaç |
|--------|--------|
| Repositori GitHub | https://github.com/cristianaielodemalferit82-stack/football-manager-club |
| Instruccions d'instal·lació (README) | [README.md](../README.md) |
| Guia d'estils | [guia-estils.md](guia-estils.md) |
| Prototipat | [prototipat.md](prototipat.md) |
| Aplicació (en local, amb el servidor arrancat) | http://localhost:3000 |
| API REST (en local) | http://localhost:3000/api/players |

---

## 2. Descripció

Football Manager Club és una aplicació web per a la gestió de la plantilla d'un club de futbol. Permet registrar, consultar, modificar i eliminar jugadors des d'una interfície web senzilla, amb les dades guardades en una base de dades MongoDB.

De cada jugador es guarda: nom, cognoms, edat, dorsal, posició, equip i nacionalitat.

---

## 3. La idea des d'un punt de vista empresarial

### 3.1 Problema que resol

Molts clubs de futbol base i amateur gestionen la informació dels seus jugadors amb fulls de càlcul, papers o grups de missatgeria. Això provoca:

- Dades disperses entre diferents persones (entrenadors, coordinadors, directiva).
- Informació desactualitzada o duplicada.
- Errors com dorsals repetits o jugadors assignats a l'equip equivocat.
- Pèrdua de temps a cada inici de temporada.

### 3.2 Solució

Una aplicació web centralitzada on el club té tota la plantilla en un sol lloc, accessible des de l'ordinador o el mòbil, sense instal·lar res i fàcil d'utilitzar per a persones sense coneixements tècnics.

### 3.3 Client objectiu

- **Clubs de futbol base i amateur** (categories des de prebenjamí fins a sènior), especialment clubs de poble i de comarca amb diversos equips.
- **Escoles de futbol** que necessiten organitzar molts jugadors per equips i edats.
- **Coordinadors i entrenadors** que volen consultar ràpidament les dades de la plantilla.

### 3.4 Proposta de valor

- **Senzilla:** una sola pantalla amb tot el necessari.
- **Accessible:** funciona en qualsevol navegador i s'adapta al mòbil.
- **Centralitzada:** totes les dades en una base de dades, sense fitxers duplicats.
- **Econòmica:** pensada per a clubs amb pressupost reduït.

### 3.5 Competència

| Alternativa | Avantatges | Inconvenients | Com ens diferenciem |
|-------------|------------|---------------|---------------------|
| Fulls de càlcul (Excel, Google Sheets) | Gratuïts i coneguts | No estan pensats per a clubs, fàcil cometre errors | Formulari amb validacions i interfície específica de futbol |
| Grups de missatgeria | Tothom els utilitza | La informació es perd entre missatges | Dades estructurades i sempre consultables |
| Aplicacions de gestió esportiva generalistes | Moltes funcionalitats | Complexes i moltes vegades de pagament amb plans pensats per a organitzacions grans | Més senzilla i centrada en la plantilla, preu adaptat a clubs menuts |

### 3.6 Model de negoci

Model **freemium** de subscripció (SaaS):

| Pla | Preu orientatiu | Inclou |
|-----|-----------------|--------|
| Gratuït | 0 € | 1 equip, fins a 25 jugadors |
| Club | 9,99 €/mes | Equips il·limitats, diversos usuaris |
| Club Pro | 19,99 €/mes | Estadístiques, exportació de dades i suport prioritari |

Altres possibles ingressos: patrocini de botigues d'esports locals dins de l'aplicació i personalització amb l'escut i els colors del club.

### 3.7 Anàlisi DAFO

| | Positiu | Negatiu |
|---|---------|---------|
| **Intern** | **Fortaleses:** fàcil d'usar, tecnologies modernes i lleugeres, cost de manteniment baix | **Debilitats:** de moment poques funcionalitats, sense sistema d'usuaris |
| **Extern** | **Oportunitats:** molts clubs menuts sense eines digitals, possibilitat d'ampliar a altres esports | **Amenaces:** aplicacions grans ja consolidades, resistència al canvi d'alguns clubs |

### 3.8 Costos inicials estimats

- **Desenvolupament:** fet per l'autor (projecte del cicle).
- **Servidor i base de dades:** en la fase inicial es poden utilitzar els plans gratuïts de serveis al núvol (per exemple, el nivell gratuït de MongoDB Atlas per a la base de dades).
- **Domini web:** aproximadament 10–15 € a l'any.

---

## 4. Objectius

- Gestionar la plantilla de jugadors d'un club (CRUD complet).
- Validar les dades per a evitar errors (camps obligatoris, dorsal entre 1 i 99, posicions vàlides).
- Oferir una interfície clara, coherent i adaptada a mòbil.
- Separar el projecte en frontend, backend i base de dades, com en una aplicació professional.
- Documentar el projecte perquè qualsevol persona el puga instal·lar i fer funcionar.

---

## 5. Tecnologies utilitzades

| Part | Tecnologies | Per què |
|------|-------------|---------|
| Frontend | HTML5, CSS3, JavaScript | Estàndards web, sense dependències externes |
| Backend | Node.js, Express | JavaScript també al servidor; Express facilita crear l'API REST |
| Base de dades | MongoDB, Mongoose | Base de dades de documents flexible; Mongoose afig esquema i validacions |
| Control de versions | Git i GitHub | Historial de canvis i accés públic al codi |

---

## 6. Arquitectura i funcionament

```
Navegador (HTML + CSS + JS)
        │  fetch()  (JSON)
        ▼
Servidor Node.js + Express  ──►  /api/players
        │  Mongoose
        ▼
MongoDB (base de dades "footballmanager", col·lecció "players")
```

1. El servidor Express servix la pàgina web (carpeta `frontend`).
2. El JavaScript del navegador (`app.js`) fa peticions a l'API amb `fetch`.
3. L'API (`playersRoutes.js`) usa el model `Player` de Mongoose per llegir i guardar a MongoDB.
4. La resposta torna en JSON i el frontend actualitza la llista de jugadors.

### API REST

| Mètode | Ruta | Acció |
|--------|------|-------|
| GET | `/api/players` | Llistar tots els jugadors |
| GET | `/api/players/:id` | Obtenir un jugador |
| POST | `/api/players` | Crear un jugador |
| PUT | `/api/players/:id` | Modificar un jugador |
| DELETE | `/api/players/:id` | Eliminar un jugador |

---

## 7. Estructura del projecte

```text
football-manager-club
│
├── README.md
├── .gitignore
│
├── backend
│   ├── config
│   │   └── db.js               (connexió a MongoDB)
│   ├── models
│   │   └── Player.js           (esquema i validacions)
│   ├── routes
│   │   └── playersRoutes.js    (rutes CRUD de l'API)
│   ├── package.json            (dependències i scripts)
│   └── server.js               (servidor Express)
│
├── docs
│   ├── guia-estils.md
│   ├── guia-estils.png
│   ├── prototipat.md
│   ├── prototip-escriptori.png
│   ├── prototip-mobil.png
│   └── memoria-projecte.md
│
└── frontend
    ├── index.html
    ├── css
    │   └── style.css
    └── js
        └── app.js
```

---

## 8. Guia d'estils i prototipat

S'ha definit una guia d'estils amb una temàtica futbolística: verd principal (`#15803D`), blau per a les accions (`#2563EB`), vermell per a eliminar (`#DC2626`) i fons gris clar. La tipografia és Arial. Cada acció té el seu color i tots els botons tenen efecte *hover*.

El prototipat es va fer en dues fases: un wireframe de baixa fidelitat i un prototip d'alta fidelitat per a escriptori i mòbil.

- Guia completa: [guia-estils.md](guia-estils.md)
- Prototipat complet: [prototipat.md](prototipat.md)

---

## 9. Posada en marxa (resum)

Requisits: Node.js 18 o superior i MongoDB en marxa a `localhost:27017`.

```bash
git clone https://github.com/cristianaielodemalferit82-stack/football-manager-club.git
cd football-manager-club/backend
npm install
npm start
```

Després s'obri http://localhost:3000 al navegador. Les instruccions detallades estan al [README](../README.md).

---

## 10. Millores futures

- **Usuaris i inici de sessió** perquè cada club tinga les seues dades privades.
- **Dorsal únic per equip**, per a evitar dos jugadors amb el mateix número.
- **Buscador i filtres** per equip, posició o edat.
- **Estadístiques**: gols, partits jugats, targetes.
- **Fotografia** de cada jugador.
- **Desplegament al núvol** perquè l'aplicació siga accessible des d'Internet.

---

## 11. Conclusions

El projecte complix l'objectiu de crear una aplicació web completa amb frontend, backend i base de dades. S'ha implementat un CRUD funcional connectat a MongoDB, amb validacions, un disseny coherent definit en una guia d'estils i documentació per a poder instal·lar-lo.

Des del punt de vista empresarial, l'aplicació respon a una necessitat real dels clubs menuts i té una base sòlida per a créixer amb les millores proposades.
