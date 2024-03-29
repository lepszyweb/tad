![TAD, Twój Asystent Dostępności.](./docs/assets/images/tad-logo.svg)

# TAD 
TAD to narzędzie wspomagajace zapewnianie dostępność, które wizualnie wyróżnia typowe problemy z&nbsp;dostępnością i&nbsp;użytecznością. Przeznaczony dla autorów treści, TAD wskazuje błędy lub ostrzeżenia z&nbsp;prostą wskazówką, jak je naprawić.</p>

TAD jest polskim odgałęzieniem [projektu Sa11y](https://ryersondmp.github.io/sa11y/) stworzonego na Ryerson University w Toronto w Kanadzie.

TAD działa jako prosty progam testujący pojedyncze strony. Został zaprojektowany tak, aby można go było łatwo dostosować i&nbsp;zintegrować z&nbsp;dowolnym systemem zarządzania treścią (CMS), aby ułatwić dobre praktyki związane z&nbsp;dostępnością. TAD działa najlepiej w&nbsp;środowisku systemu zarządzania treścią (CMS) opartym na szablonach, chociaż może również działać jako skryptozakładka. TAD nie jest narzędziem do wszechstronnej analizy kodu.

- Ponad 50 warunków testowych.
- Zwięzłe intuicyjne podpowiedzi wyjaśniające problemy.
- Darmowe i otwarte oprogramowanie.
- Bez skomplikowanego API i integracji.
- Proste zestawy reguł.
- Łatwy do dostosowania: dodaj własne zestawy reguł.
- Automatyczne: sprawdza treść podczas ładowania strony.
- Dodatkowe (przełączane) testy: Kontrast, etykiety formularzy, czytelność, łącza (zaawansowane).
- Tryb ciemny.

## Instalacja

TAD opiera się na jQuery i działa najlepiej przy użyciu biblioteki podpowiedzi, która zawiera system pozycjonowania. Systemy pozycjonowania zapewniają, że podpowiedzi nigdy nie są ukrywane przez sprzeczne style CSS, takie jak `overflow: hidden;`. Ta wersja TAD została zbudowana przy użyciu [Tippy.js](https://github.com/atomiks/tippyjs), wysoce konfigurowalnej biblioteki podpowiedzi.

Aby zainstalować na swojej stronie, wstaw TAD zaraz po tagu skryptu jQuery i tuż przed znacznikiem zamykającym `</body>`. Uwzględnij zarówno Tippy.js, jak i Popper.js przed TAD. TAD składa się z trzech plików (znajdujących się w `/src/`).

- **tad.css**: Główny arkusz stylów. Powinny być zawarte w `<head>` dokumentu (jeśli to możliwe).
- **tad-polish.js**: Tu znajdują się ustawienia globalne i wykluczenia. Tutaj także znajdują się wszystkie ciągi tekstowe i komunikaty podpowiedzi, aby ułatwić tłumaczenie.
- **tad.js**: Zawiera całą logikę i zestawy reguł.

### Przykład instalacji:
```html
//Najnowsze jQuery (skryptozakladka używa "odchudzonej" wersji jQuery)
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.slim.min.js"></script>

//Tippy.js v6 CDN (biblioteka podpowiedzi)
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>

//TAD (fork the latest code from GitHub)
<link rel="stylesheet" href="tad.css"/>
<script src="tad-polish.js"></script>
<script src="tad.js"></script>
```


## Dokumentacja i Demo
:arrow_right: [Zobacz witrynę i demo](https://tad.lepszyweb.pl)

## Kontakt
Masz pytania? Email: audyt@lepszyweb.pl

## Podziękowania
TAD jest polskim rozgałęzieniem **projektu SA11y** stworzonego przez [Digital Media Projects](https://www.ryerson.ca/dmp), [Computing and Communication Services (CCS)](https://www.ryerson.ca/ccs) na Ryerson University w Toronto w Kanadzie.</p>

Projekt, opracowanie, kodowanie i testowanie:
- [Adam Chaboryk](https://github.com/adamchaboryk), IT accessibility specialist
- Benjamin Luong, web accessibility assistant
- Arshad Mohammed, web accessibility assistant
- Kyle Padernilla, web accessibility assistant

### Built with
- TAD to adaptacja [Tota11y by Khan Academy.](https://github.com/Khan/tota11y)
- Biblioteka Tooltip autorstwa [Tippy.js](https://github.com/atomiks/tippyjs)
- [Wtyczka kontrastu jQuery](https://github.com/jasonday/color-contrast) została stworzona przez jasonday.
- Ikony są tworzone przez[FontAwesome.](https://github.com/FortAwesome/Font-Awesome)
- Działa z jQuery.


## Licencja
TAD i Sa11y są licencjonowane na warunkach MIT.
