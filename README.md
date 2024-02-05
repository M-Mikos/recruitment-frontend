# Zadanie rekrutacyjne Nabthat - Marcin Mikos <!-- omit in toc -->

W mojej dotychczasowej karierze deweloperskiej pracowałem głównie w ekosystemie biblioteki React. Obecnie rozwijam moją wiedzę z zakresu frameworku Angular. W związku z tym, zdecydowałem się przedstawić rozwiązanie zadania rekrutacyjnego zbudowane zarówno w Angularze, jak i w React.js - wierzę, że będzie to dodatkowy atut. Funkcjonalności i wygląd są identyczne, jedyna różnica tkwi w szczegółach implementacyjnych zastosowanej technologii.

## Spis treści <!-- omit in toc -->

- [Wersje live](#wersje-live)
- [Uruchomienie w środowisku lokalnym](#uruchomienie-w-środowisku-lokalnym)
- [Realizacja wymogów rekrutacyjnych](#realizacja-wymogów-rekrutacyjnych)
  - [Cele główne](#cele-główne)
  - [Cele dodatkowe](#cele-dodatkowe)
  - [Inne elementy](#inne-elementy)

## Wersje live

Wersje live projektu zostały umieszczone na platformie Netlify.

Rozwiązanie napisane w Angularze:
**[Wersja live - Angular](https://nabthat-rekrutacja-angular-m-mikos.netlify.app/)**

Rozwiązanie napisane w React.js:
**[Wersja live - React](https://nabthat-rekrutacja-react-m-mikos.netlify.app/)**

## Uruchomienie w środowisku lokalnym

Instrukcje dotycząca uruchomienia poszczególnych kompilacji deweloperskich znajdują się w plikach `README.md` w katalogach poszczególnych rozwiązań

## Realizacja wymogów rekrutacyjnych

### Cele główne

Wszystkie wymogi opisane w celach głównych zostały spełnione.

### Cele dodatkowe

- wykorzystano SCSS
- wykorzystano współczesne frameworki/biblioteki
- Ramka w footerze wykonuje obrót
- Zastosowano metodykę BEM
- Zastosowano semantyczny HTML i odpowiednie tagi w elemencie `<head>`
- projekt stylów oparto w całości na jednostach REM. Jedyny wyjątek stanowią grubości krawędzi (zdefiniowane w PX)
- projekt spełnia zasady mobile-first (domyślne style dla najmniejszej szerokości ekranu). Projekt definiuje 5 breakpointów, w każdym znich wielkość elementów zmienia się dzięki modyfikacji bazy jednostek REM
- Komunikaty są wyświetlane za pomocą alertów przeglądarki
- Button w footerze funkcjonuje bez wykorzystania JS
- Pogląd live jest dostępny pod linkami w sekcji [Wersje live](#wersje-live)

### Inne elementy

- Aplikacja została wykonana w dwóch technologiach (Angular i React) przy zachowaniu identycznej funkcjonalności
- W budowaniu struktury plików SCSS wykorzystano elemnty wzorca 7-1 (foldery `abstract`, `base` z odpowidnimi plikami)
- Aplikacja obsługuje błędy ładowania pliku JSON, zerowej liczby opcji w pliku JSON onraz błąd podczas próby wykonania akcji bez wyboru opcji w bloku pierwszym

<hr>

<small>_Dziekuję za dotarcie do końca dokumentu_ 😊 _W razie pytań proszę o kontakt._

~ Marcin Mikos</small>
