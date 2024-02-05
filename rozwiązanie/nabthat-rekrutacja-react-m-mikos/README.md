# Zadanie rekrutacyjne Nabthat - rozwiązanie React.js

## Spis treści

- [Wersja live](#wersja-live)
- [Uruchomienie](#uruchomienie)
- [Dodatkowe informacje](#dodatkowe-informacje)

## Wersja live

Wersja live projektu została umieszczona na platformie Netlify. Można ją zobaczyć tutaj:

**[Wersja live](https://nabthat-rekrutacja-react-m-mikos.netlify.app/)**

## Uruchomienie

Projekt wykorzystuje [Node](https://nodejs.org/en/) i [NPM](https://www.npmjs.com/). Aby uruchomić środowisko deweloperskie, wykonaj następujące czynności:

Skopiuj repozytorium:

```
git clone https://github.com/M-Mikos/nabthat-rekrutacja-react-m-mikos.git
```

Zainstaluj zależności:

```
npm i
```

Uruchom środowisko deweloperskie:

```
npm run dev
```

Aplikacja jest gotowa na porcie 5173.

```
localhost:5173/
```

## Dodatkowe informacje

### Zarządzanie stanem

Aplikacja wykorzystuje bibliotekę React Redux do zarządzania stanem obejmującym całą aplikację.

### Wzorce projektowe

- Własne hooki - logika aplikacja została zawarta w osobnych blokach, w postaci własnych hooków, powiązanych z odpowiadającymi komponentami
- Wynoszenie stanu w górę - do komunikacji między komponentami w bloku `main` wykorzystano metodę wynoszenia stanu.

### Pozostałe informacje

Szczegółowy opis aplikacji jest dostępny w dokumencie `README.md` w katalogu głównym repozytorium z zadaniem rekrutacyjnym.
