/* ----------------------------- */
/*         Global defaults       */
/* ----------------------------- */

//Target area to scan.
let sa11yCheckRoot = "main"; //Default: body. Use "main" for main content.

//Readability configuration.
let sa11yReadabilityRoot = "main"; //Default: main, [role='main'].
const sa11yReadabilityLang = "es"; //Supported: en = English, fr = French, es = Spanish

//Inclusions and exclusions. Use commas to seperate classes or elements.
let sa11yContainerIgnore = ".sa11y-ignore", //Ignore specific regions.
    sa11yOutlineIgnore = "", //Exclude headings from outline panel.
    sa11yHeaderIgnore = "", //Ignore specific headings. E.g. "h1.jumbotron-heading"
    sa11yImageIgnore = "", //Ignore specific images.
    sa11yLinkIgnore = "", //Ignore specific links.
    sa11yLinkIgnoreSpan = "span.sr-only-example", //Ignore specific classes within links. Example: <a href="#">learn more <span class="sr-only-example">(opens new tab)</span></a>.
    sa11yLinksToFlag = "a[href^='https://www.dev.'], a[href*='wp-admin']"; //Links you don't want your content editors pointing to (e.g. development environments).

/* ------------------------------ */
/*           Localization         */
/* ------------------------------ */

//Language of Sa11y. Some global variables to help translate.
const sa11yLangCode = "pl", //Language code, e.g. "fr"
    sa11yMainToggleLabel = "Testuj dostępność",
    sa11yContainerLabel = "Tester dostępności",
    sa11yError = "Błąd", //Erreur
    sa11yWarning = "Ostrzeżenie", //Attention
    sa11yGood = "Dobrze", //Bon
    sa11yOn = "Wł.",
    sa11yOff = "Wył.",
    sa11yAlertText = "Alert",
    sa11yAlertClose = "Zamknij",
    sa11yShowOutline = "Pokaż konspekt",
    sa11yHideOutline = "Ukryj konspekt",
    sa11yShowSettings = "Pokaż ustawienia",
    sa11yHideSettings = "Ukryj ustawienia",
    sa11yPageOutline = "Konspekt strony",
    sa11ySettings = "Ustawienia",
    sa11yContrast = "Kontrast",
    sa11yFormLabels = "Etykiety formularzy",
    sa11yLinksAdvanced = "Łącza (zaawansowane)",
    sa11yDarkMode = "Tryb ciemny",
    sa11yShortcutSR = "Przejdź do problemu. Klawisze skrótu: lewy Alt",
    sa11yShortcutTooltip = "Przejdź do problemu";



//Readability panel translations.
const sa11yReadability = "Czytelność",
    sa11yAvgWordPerSentence = "Średnio słów w zdaniu:",
    sa11yComplexWords = "Złożone słowa:",
    sa11yTotalWords = "Słowa:",
    sa11yVeryDifficultReadability = "Bardzo trudne",
    sa11yDifficultReadability = "Trudne",
    sa11yFairlyDifficultReadability = "Dość trudne",
    sa11yGoodReadability = "Dobrze";	

//Panel status
const sa11yPanelStatus = {
    status1: `Wykryto 1 błąd dostępności i 1 ostrzeżenie.`,
    status2: (warningCount) => `Wykryto 1 błąd dostępności i ${warningCount} ostrzeżenia.`,
    status3: (errorCount) => `Wykryte błędy dostępności: ${errorCount} i 1 ostrzeżenie.`,
    status4: (errorCount, warningCount) => `Wykryte błędy dostępności: ${errorCount} i ostrzeżenia: ${warningCount}.`,
    status5: `Wykryty 1 błąd dostępności.`,
    status6: (errorCount) => `Wykryte błędy dostępności: ${errorCount}.`,
    status7: `Przejrzyj ostrzeżenie.`,
    status8: (warningCount) => `Ostrzeżenia do przegladu: ${warningCount}.`,
    status9: `Nie wykryto błędów dostępności.`,
    status10: (warningCount) => `${warningCount} <span class="sa11y-visually-hidden">ostrzeżeń do przeglądu.</span>`,	
    status11: (totalCount) => `${totalCount} <span class="sa11y-visually-hidden">ogółem wykrytych problemów.</span>`,	
    notVisibleAlert: `Element, który próbujesz wyświetlić nie jest widoczny; może być ukryty lub znajdować się wewnątrz akordeonu lub karty. Tutaj jest podgląd:`
}

//Embedded content.
const $sa11yVideos = "video, [src*='youtube.com'], [src*='vimeo.com'], [src*='yuja.com'], [src*='panopto.com']",
$sa11yAudio = "audio, [src*='soundcloud.com'], [src*='simplecast.com'], [src*='podbean.com'], [src*='buzzsprout.com'], [src*='blubrry.com'], [src*='transistor.fm'], [src*='fusebox.fm'], [src*='libsyn.com']",
$sa11yDataViz = "[src*='datastudio.google.com'], [src*='tableau']",
$sa11yTwitter = "[id^='twitter-widget']",
$sa11yAllEmbeddedContent = $sa11yVideos + ", " + $sa11yAudio + ", " + $sa11yDataViz + ", " + $sa11yTwitter;

//Alt Text stop words.
const sa11ySuspiciousAltWords = ["obraz", "grafika", "zdjęcie", "rysunek", "fotografia", "foto", "image", "graphic", "picture", "photo"];
const sa11yPlaceholderAltStopWords = [
    "alt",
    "obraz",
    "foto",
    "fotografia",
	"dekoracja",
	"przykładowy tekst",
	"tekst przykładowy",	
    "image",	
    "photo",
    "decorative",
    "photo",
    "placeholder",
    "placeholder image",
    "spacer",
    "."
];

//Link Text stop words
const sa11yPartialAltStopWords = [
    "kliknij",
    "kliknij tutaj",
    "kliknij tu",	
    "kliknij tutaj, aby dowiedzieć się więcej",
    "kliknij tu, aby dowiedzieć się więcej",
    "kliknij tutaj, aby dowiedzieć się więcej.",
    "check out",
    "pobierz",
    "pobierz tutaj",
    "pobierz tutaj.",
    "dowiedz się",
    "dowiedz się więcej",
    "dowiedz się więcej.",
    "formularz",
    "tutaj",
    "tutaj.",
    "info",
    "informacja",
    "link",
    "czytaj",
    "czytaj więcej",
    "czytaj więcej.",
    "czytaj to",
    "wiecej",
    "czytaj tu",
    "to",
    "tę stronę",
    "tej stronie.",
    "tę witrynę",
    "tej witrynie.",
    "zobacz",
    "zobacz naszą",
    "stronę",	
    "witrynę",
    "."
];

const sa11yWarningAltWords = [
    "< ",
    " >",
    "kliknij tutaj"
];

//Link Text (Advanced)
const sa11yNewWindowPhrases = [
    "zewnętrzny",
    "nowa karta",
    "nowe okno",
    "pop-up",
    "pop up"
];

//Link Text (Advanced). Only some items in list would need to be translated.
const sa11yFileTypePhrases = [
    "document",
    "pdf",
    "doc",
    "docx",
    "odt",	
    "word",
    "mp3",
    "ppt",
    "text",
    "pptx",
    "powerpoint",
    "txt",
    "exe",
    "dmg",
    "rtf",
    "install",
    "windows",
    "macos",
    "spreadsheet",
    "worksheet",
    "csv",
    "xls",
    "xlsx",
    "video",
    "mp4",
    "mov",
    "avi"
];

//Tooltip formatting shortcuts
const sa11yHr = `<hr aria-hidden='true' class='sa11y-hr'>`;
const sa11yNewTab = `<span class='sa11y-visually-hidden'>(Otwórz na nowej karcie)</span>`;

// IM - Issue Message
const sa11yIM = {
    headings: {

        nonConsecutiveHeadingLevel: (
                prevLevel,
                level
            ) =>
            `Niespójny poziom nagłówka. Zastosowane poziomy nie następują po sobie. Nagłówki nigdy nie powinny pomijać poziomów np. od <span class='sa11y-bold'>Nagłówek H${prevLevel}</span> do <span class='sa11y-red-text sa11y-bold'>Nagłówek H${level}</span>.`,

        emptyHeading: (level) =>
            `Znaleziono pusty nagłówek! Aby to naprawić, usuń tę linię lub zmień jej format z <span class='sa11y-red-text sa11y-bold'>Nagłówek H${level}</span> na <span class='sa11y-bold'>zwykły tekst</span> lub <span class='sa11y-bold'>akapit</span>.`,

        longHeading: (
                headingLength
            ) =>
            `Nagłówek jest zbyt długi! Nagłówki służą do organizowania treści i przekazywania struktury. Powinny być krótkie, jasne, opisowe i niepowtarzalne. Pisz nagłówki nie dłuższe niż 160 znaków (nie więcej niż zdanie).
            ${sa11yHr}
            Liczba znaków: <span class='sa11y-bold sa11y-red-text'>${headingLength}</span>.`,

        firstHeading: () =>
            `Pierwszym nagłówkiem na stronie powinien być zwykle Nagłówek H1 lub Nagłówek H2. Nagłówek H1 jest głównym nagłówkiem opisującym ogólny cel strony i powinien być początkiem obszaru treści głównej. Dowiedz się więcej o <a href='https://www.w3.org/WAI/tutorials/page-structure/headings/' target='_blank'>Strukturze nagłówków. ${sa11yNewTab}</a>`,

        missingHeadingOne: () =>
            `Brakuje nagłówka H1. Nagłówek H1 jest głównym nagłówkiem opisującym ogólny cel strony i powinien być początkiem obszaru treści głównej. Dowiedz się więcej o <a href='https://www.w3.org/WAI/tutorials/page-structure/headings/' target='_blank'>Strukturze nagłówków. ${sa11yNewTab}</a>`,
        
        emptyHeadingWithImage: (level) => 
            `Nagłówek nie ma tekstu, ale zawiera obrazek. Jeśli to nie jest nagłówek, zmień jego format z <span class='sa11y-red-text sa11y-bold'>Nagłówek H${level}</span> na <span class='sa11y-bold'>zwykły tekst</span> lub <span class='sa11y-bold'>akapit</span>. W przeciwnym razie, dodaj do obrazu tekst alt, jeśli nie jest on ozdobny.`,

        missingHeadingOnePanelText: `Brak Nagłówka 1!`,
    },

    linktext: {

        emptyLink: () =>
            `Puste łącze bez żadnego tekstu. Usuń je!`,

        emptyLinkNoLabel: () =>
            `Łącze nie ma opisowego tekstu, który jest widoczny dla czytników ekranu i innych technologii wspomagających. Aby naprawić:
            <ul>
                <li>Dodaj zwięzły tekst, który opisuje, dokąd prowadzi łącze.</li>
                <li>Jeśli łączem jest <a href='https://a11y-101.com/development/icons-and-links' target='_blank'>ikona lub SVG,${sa11yNewTab}</a> prawdopodobnie brakuje mu opisowej etykiety.</li>
                <li>Jeśli uważasz, że to łącze jest błędem spowodowanym błędem kopiuj/wklej, rozważ usunięcie go.</li>
            </ul>`,

        linkLabel: (linkText) =>
            `Łącze ma opisową etykietę: <span class='sa11y-bold'>${linkText}</span>`,

        linkStopWordMessage: (error) =>
            `Tekst łącza może nie być wystarczająco opisowy w kontekście: <span class='sa11y-red-text sa11y-bold'>${error}</span>
            ${sa11yHr}
            <span class='sa11y-bold'>Porada!</span> Tekst łącza powinien być zawsze jasny, unikalny i znaczący. Unikaj typowych słów takich jak &quot;kliknij tutaj&quot; lub &quot;czytaj więcej&quot;.`,

        linkBestPractices: (error) =>
            `Rozważ zastąpienie tekstu łącza: <span class='sa11y-red-text sa11y-bold'>${error}</span>
            ${sa11yHr}
            <ul>
                <li>&bdquo;Kliknij tutaj&rdquo; skupia się na mechanice myszy, podczas gdy wiele osób nie używa myszy lub może przeglądać tę stronę na urządzeniu mobilnym. Rozważ użycie innego czasownika, który odnosi się do zadania.</li>
                <li>Unikaj używania symboli HTML jako wezwań do działania, chyba że są one ukryte dla technologii wspomagających.</li>
            </ul>
            `,

        linkURL: () =>
            `Dłuższe, mniej zrozumiałe adresy URL używane jako tekst odnośnika mogą być trudne do odsłuchania za pomocą technologii wspomagającej. W&nbsp;większości przypadków zamiast adresu URL lepiej jest używać tekstu czytelnego dla człowieka. Krótkie adresy URL (takie jak głównej strony witryny) są w porządku.
            ${sa11yHr}
            <span class='sa11y-bold'>Porada!</span> Tekst łącza powinien być zawsze jasny, unikalny i znaczący, aby mógł być zrozumiany bez kontekstu.`,
    },

    linksAdvanced: {

        newTabWarning: () =>
            `Łącze otwiera się na nowej karcie lub w oknie bez ostrzeżenia. Może to być dezorientujące, szczególnie dla osób, które mają problemy z&nbsp;odbiorem treści wizualnych. Ponadto, nie zawsze dobrym zwyczajem jest kontrolowanie czyichś doświadczeń lub podejmowanie decyzji za kogoś. Wskaż w tekście łącza, że łącze otwiera się w nowym oknie.
            ${sa11yHr}
            <span class='sa11y-bold'>Porada!</span> Poznaj najlepsze praktyki: <a href='https://www.nngroup.com/articles/new-browser-windows-and-tabs/'>otwieranie łączy w nowych oknach i kartach przeglądarki.</a>`,

        fileTypeWarning: () =>
            `Łącze wskazuje  bez ostrzeżenia na plik PDF lub plik do pobrania (np. MP3, zip, doc). Wskaż typ pliku w tekście łącza. Jeśli jest to duży plik, rozważ podanie jego rozmiaru.
            ${sa11yHr}
            <span class='sa11y-bold'>Przykład:</span> Raport końcowy (PDF, 3MB)`,

        linkIdenticalName: (linkText) =>
            `Łącze ma identyczny tekst jak inne łącze, choć wskazuje na inną stronę. Wiele łączy z takim samym tekstem może powodować zamieszanie u osób korzystających z czytników ekranu.
            ${sa11yHr}
            Rozważ nadanie poniższemu łączu bardziej opisowego charakteru, aby odróżnić je od innych łączy: <span class='sa11y-red-text sa11y-bold'>${linkText}</span>`
    },

    images: {

        missingAltLinkButHasTextMessage: 
            `Obraz jest używany razem z sąsiadującym tekstem jako łącze. Obraz powinien być oznaczony jako dekoracyjny albo atrybut alt obrazu powinien być pusty.`,

        missingAltLinkMessage:
            `Obraz jest używany jako łącze, ale brakuje tekstu alternatywnego! Dodaj tekst alternatywny, który mówi, dokąd prowadzi łącze.`,

        missingAltMessage: 
            `Brak tekstu alternatywnego! Jeśli obraz przekazuje historię, nastrój lub ważne informacje - przedstaw je w tekście alternatywnym.`,

        linkImageBadAltMessage: (altText, error) =>
            `W tekście alt znaleziono rozszerzenie nazwy pliku. Upewnij się, że tekst alternatywny opisuje miejsce docelowe łącza, a nie treść lub wygląd obrazu. Usuń wyraz(y): <span class='sa11y-red-text sa11y-bold'>${error}</span>.
            ${sa11yHr}
            Tekst alternatywny tego obrazu to: <span class='sa11y-bold'>${altText}</span>`,

        linkImageSusAltMessage: (altText, error) =>
            `Technologie wspomagające już wskazują, że jest to obraz, więc &quot;<span class='sa11y-red-text sa11y-bold'>${error}</span>&quot; lub &quot;${error} z&quot; mogą być zbędne. Upewnij się, że tekst alternatywny opisuje miejsce docelowe łącza, a nie treść lub wygląd obrazu.
            ${sa11yHr} 
            Tekst alternatywny tego obrazu to: <span class='sa11y-bold'>${altText}</span>`,

        altHasBadWordMessage: (altText, error) =>
            `W tekście alt znaleziono rozszerzenie nazwy pliku. Jeśli obraz przekazuje jakąś historię, nastrój lub ważną informację - koniecznie opisz go. 
            Usuń: <span class='sa11y-red-text sa11y-bold'>${error}</span>.
            ${sa11yHr} 
            Tekst alternatywny tego obrazu to: <span class='sa11y-bold'>${altText}</span>`,

        altPlaceholderMessage: (altText) =>
            `Znaleziono nieopisowy lub zastępczy tekst alt. Zamień poniższy tekst alt na coś bardziej znaczącego: <span class='sa11y-bold sa11y-red-text'>${altText}</span>.`,

        linkImagePlaceholderAltMessage: (altText) =>
            `Znaleziono nieopisowy lub zastępczy tekst alt w obrazie będącym łączem. Upewnij się, że tekst alternatywny opisuje miejsce docelowe łącza, a nie treść lub wygląd obrazu. Zastąp następujący tekst alt: <span class='sa11y-bold sa11y-red-text'>${altText}</span>.`,

        altHasSusWordMessage: (altText, error) =>
            `Technologie wspomagające już wskazują, że jest to obraz, więc &quot;<span class='sa11y-red-text sa11y-bold'>${error}</span>&quot; lub &quot;${error} z&quot; mogą być zbędne.
            ${sa11yHr}
            Tekst alternatywny tego obrazu to: <span class='sa11y-bold'>${altText}</span>`,

        imageLinkNullAltNoTextMessage: 
            `Obraz w łączu jest oznaczony jako dekoracyjny i nie ma tekstu łącza. Dodaj do obrazu tekst alt, który opisze miejsce docelowe łącza.`,

        linkHasAltMessage: 
            `Obraz jest oznaczony jako dekoracyjny, ale łącze używa otaczającego go tekstu jako etykiety opisowej.`,

        decorativeMessage: 
            `Obraz jest oznaczony <span class='sa11y-bold'>dekoracyjny</span> i zostanie zignorowany przez technologię wspomagającą. Jeśli obraz przekazuje jakąś historię, nastrój lub ważną informację - dodaj tekst alt.`,

        hyperlinkedImageAriaHidden: 
            `Łącze wokół obrazu ma <span class='sa11y-kbd'>aria-hidden=&quot;true&quot;</span>, ale nadal można na nim ustawić fokus klawiatury. Jeśli chcesz ukryć zbędne lub zduplikowane łącze, dodaj również <span class='sa11y-kbd'>tabindex=&quot;-1&quot;</span>`,

        hyperlinkAltLengthMessage: (altText, altLength) =>
            `Tekst alternatywny opisujący obraz będący łączem jest <span class='sa11y-bold'>zbyt długi</span>. 
            Tekst alternatywny na obrazach bedących łączami powinien przedstawiać, dokąd prowadzi łącze, a nie dosłownie opisywać obraz. 
            <span class='sa11y-bold'>Rozważ użycie jako tekstu alternatywnego tytułu strony, do którego łączy obraz.</span> 
            ${sa11yHr} 
            Aktualnie tekst alternatywny ma <span class='sa11y-red-text sa11y-bold'>${altLength}</span> znaków: 
            <span class='sa11y-red-text sa11y-bold'>${altText}</span>`,

        imageLinkAltTextMessage: (altText) =>
            `Obraz będący łączem ma tekst alternatywny, ale upewnij się, że tekst alternatywny wskazuje na stronę docelową. 
            <span class='sa11y-bold'>Rozważ użycie jako tekstu alternatywnego tytułu strony, do którego łączy obraz.</span>
            Czy tekst alternatywny mówi, dokąd prowadzi łącze? 
            ${sa11yHr}
            Tekst alternatywny: <span class='sa11y-bold'>${altText}</span>`,

        anchorLinkAndAltMessage: (altText) =>
            `Łącze graficzne ma <span class='sa11y-bold'>zarówno tekst alternatywny, jak i sąsiadujący tekst łącza.</span> Jeśli ten obraz jest dekoracyjny i jest używany w funkcji łącza do innej strony, należy rozważyć oznaczenie obrazu jako dekoracyjnego (pusty alt) - sąsiadujący tekst łącza powinien wystarczyć. 
            ${sa11yHr}
            Tekst alternatywny: <span class='sa11y-bold'>${altText}</span>`,

        altTooLongMessage: (altText, altLength) =>
            `Tekst alternatywny obrazu jest <span class='sa11y-bold'>zbyt długi</span>. Tekst alternatywny powinien być zwięzły, ale znaczący jak <em>tweet</em> (około 100 znaków). 
            Jeśli jest to złożony obraz lub wykres, należy rozważyć umieszczenie długiego opisu obrazu w tekście poniżej lub w akordeonie. 
            ${sa11yHr} 
            Aktualnie tekst alternatywny ma <span class='sa11y-red-text sa11y-bold'>${altLength}</span> znaków: 
            <span class='sa11y-red-text sa11y-bold'>${altText}</span>`,

        passAlt: (altText) =>
            `Tekst alternatywny tego obrazu to: <span class='sa11y-bold'>${altText}</span>`,

    },
    labels: {

        inputResetMessage: 
            `Przyciski resetowania <span class='sa11y-bold'>nie powinny</span> być używane, chyba że są specjalnie potrzebne, ponieważ łatwo je aktywować przez pomyłkę.
            ${sa11yHr} 
            <span class='sa11y-bold'>Porada!</span> Dowiedz się, dlaczego <a href='https://www.nngroup.com/articles/reset-and-cancel-buttons/' target='_blank'>Przyciski Resetuj i Anuluj powodują problemy z użytecznością. ${sa11yNewTab}</a>`,

        missingLabelMessage: 
            `Z tym polem input nie jest skojarzona żadna etykieta (label). Dodaj do tego pola danych <span class='sa11y-kbd'>id</span> i dodaj pasujący atrybut <span class='sa11y-kbd'>for</span> do etykiety.`,

        ariaLabelInputMessage: (ariaLabel) =>
            `Pole danych ma dostępną nazwę (etykietę), ale upewnij się, że etykieta jest również widoczna. 
            ${sa11yHr} 
            Dostępna nazwa tego pola to: <span class='sa11y-bold'>${ariaLabel}</span>`,

        noForAttributeMessage: (t) =>
            `Z tym polem input nie jest skojarzona żadna etykieta (label). Dodaj atrybut <span class='sa11y-kbd'>for</span> do etykiety z wartością <span class='sa11y-kbd'>id</span>  pasującą do <span class='sa11y-kbd'>id</span> tego pola. 
            ${sa11yHr} 
            ID tego pola to: <span class='sa11y-bold'>id=&#34;${t}&#34;</span>`,

        missingImageInputMessage: 
            `Przycisk graficzny nie ma tekstu alternatywneego. Dodaj tekst alt, aby zapewnić dostępną nazwę. Na przykład: <em>Szukaj</em> lub <em>Wyślij</em>.`,
    },

    embeddedContent: {

        video: 
            `Upewnij się, że <span class='sa11y-bold'>wszystkie filmy mają napisy rozszerzone.</span> Zapewnianie napisów rozszerzonych dla wszystkich treści audio i wideo jest obowiązkowym wymogiem poziomu A. Napisy mają na celu wspieranie osób Głuchych i słabosłyszących.`,

        audio: 
            `Upewnij się, że istnieje <span class='sa11y-bold'>transkrypcja dla wszystkich nagrań dźwiękowych.</span> Zapewnianie transkrypcji treści audio jest obowiązkowym wymogiem poziomu A. Transkrypcje mają na celu wspieranie osób Głuchych i słabosłyszących, ale każdy może z nich skorzystać. Rozważ umieszczenie transkrypcji poniżej lub w panelu akordeonowym.`,

        dataViz: 
            `Widżety wizualizacji danych, takie jak ten, są często problematyczne dla osób, które używają klawiatury lub czytnika ekranu do nawigacji, a także mogą stanowić znaczące trudności dla osób słabo widzących lub nie rozróżniających kolorów. Zapewnij te same infromacje w alternatywnym formacie (tekst lub tabela) pod widżetem.
            ${sa11yHr}
            Dowiedz się więcej o <a href='https://www.w3.org/WAI/tutorials/images/complex/' target='_blank'>obrazach złożonych. ${sa11yNewTab}</a>`,

        twitter: 
            `Domyślna oś czasu Twittera może powodować problemy z dostępnością dla użytkowników klawiatury. Ponadto, przewijanie w linii osi czasu Twittera może powodować problemy z użytecznością na urządzeniach mobilnych. Zaleca się dodanie następujących atrybutów danych do kodu osadzającego oś czasu. 
            ${sa11yHr}
            <span class='sa11y-bold'>Zalecany kod:</span>
            <ul>
                <li>Dodaj <span class='sa11y-kbd'>data-tweet-limit=&#34;2&#34;</span>, aby ograniczyć ilość tweetów.</li>
                <li>Dodaj <span class='sa11y-kbd'>data-chrome=&#34;nofooter noheader&#34;</span>, aby usunąć nagłówek i stopkę widżetu.</li>
            </ul>`,

        missingEmbedTitle: 
            `Osadzona zawartość wymaga dostępnej nazwy, która opisuje jej treść. Dodaj unikalny <span class='sa11y-kbd'>title</span> lub atrybutu <span class='sa11y-kbd'>aria-label</span> do elementu <span class='sa11y-kbd'>iframe</span>. Dowiedz się więcej o <a href='https://dequeuniversity.com/tips/provide-iframe-titles' target='_blank'>iFrame. ${sa11yNewTab}</a>`,

        generalEmbedWarning: 
            `Nie można sprawdzić treści osadzonej. Upewnij się, że obrazy mają tekst alt, filmy mają napisy rozszerzone, tekst ma odpowiedni kontrast, a elementy interaktywne są <a href='https://webaim.org/techniques/keyboard/' target='_blank'>dostępne z klawiatury. ${sa11yNewTab}</a>`,
    },

    QA: {

        badLink: (el) =>
            `Podejrzane łącze. Łącze wydaje się wskazywać środowisko programistyczne. Upewnij się, że łącze nie zawiera <em>dev</em>, <em>wp-admin</em> lub <em>administrator</em> w adresie URL. 
            ${sa11yHr}
            Łącze wskazuje na:
            <br>
            <span class='sa11y-bold sa11y-red-text'>${el}</span>`,

        fakeHeading: (boldtext) =>
            `Czy to jest nagłówek? <span class='sa11y-bold sa11y-red-text'>${boldtext}</span>
            ${sa11yHr}
            Wiersz pogrubionego tekstu może wyglądać jak nagłówek, ale osoba korzystająca z czytnika ekranu nie może stwierdzić, że jest on istotny lub przejść do jego treści. Pogrubiony tekst nigdy nie powinien zastępować nagłówków semantycznych (od Nagłówka H2 do Nagłówka H6).
            `,

        pdf: (pdfCount) =>
            `Pliki PDF są uważane za treści internetowe i muszą być również dostępne. Pliki PDF często powodują problemy dla osób korzystających z&nbsp;czytników ekranu (brakujące znaczniki strukturalne lub etykiety pól formularzy) oraz dla osób słabowidzących (tekst nie jest ponownie wyświetlany po powiększeniu).
            <ul>
                <li>Jeśli jest to formularz, rozważ użycie dostępnego formularza HTML jako alternatywy</li>
                <li>Jeśli jest to dokument, rozważ przekonwertowanie go na stronę internetową.</li>
            </ul>
            W przeciwnym razie <span class='sa11y-bold sa11y-red-text'>${pdfCount}</span> <a href='https://www.adobe.com/accessibility/products/acrobat/using-acrobat-pro-accessibility-checker.html' target='_blank'>sprawdź plik pod kątem dostępności w programie Acrobat DC. ${sa11yNewTab}</a>`,

        blockquoteMessage: (bqHeadingText) =>
            `Czy to jest nagłówek? <span class='sa11y-bold sa11y-red-text'>${bqHeadingText}</span> 
            ${sa11yHr}
            Element blockquote powinien być używany tylko do cytatów. Jeśli ma to być nagłówek, zmień ten blockquote na nagłówek semantyczny (np. Nagłówek H2 lub Nagłówek H3).`,

        uppercaseWarning: 
            `Wykryto WSZYSTKIE WIELKIE LITERY. Niektóre czytniki ekranu interpretują cały tekst wielkimi literami jako akronim i będą czytać każdą literę odrębnie. Ponadto, wszystkie wielkie litery są trudniejsze do odczytania i sprawiają wrażenie KRZYKU.`,

        tables: {

            missingHeadings: 
                `Brak nagłówków tabeli! Dostępne tabele wymagają znaczników HTML, które wskazują komórki nagłówków i komórki danych, które definiują ich relację. Informacje te zapewniają kontekst osobom korzystającym z technologii wspomagających. Tabele powinny być używane tylko dla danych tabelarycznych.
                ${sa11yHr}
                Dowiedz się więcej o <a href='https://www.w3.org/WAI/tutorials/tables/' target='_blank'>dostępnych tabelach. ${sa11yNewTab}</a>`,

            semanticHeading: 
                `Nagłówki semantyczne, takie jak nagłówek H2 lub nagłówek H3, powinny być używane tylko w odniesieniu do sekcji treści; <span class='sa11y-bold'>nie</span> w tabelach HTML. Zamiast tego należy wskazać nagłówki tabeli przy użyciu elementu <span class='sa11y-bold'>th</span>.
                ${sa11yHr}
                Dowiedz się więcej o <a href='https://www.w3.org/WAI/tutorials/tables/' target='_blank'>dostępnych tabelach. ${sa11yNewTab}</a>`,

            emptyHeading: 
                `Wykryto pusty nagłówek tabeli! Nagłówki tabel <em>nigdy</em> nie powinny być puste. Ważne jest, aby wyznaczyć nagłówki wierszy i/lub kolumn, aby przekazać ich relację. Informacje te zapewniają kontekst osobom korzystającym z technologii wspomagających. Należy pamiętać, że tabele powinny być używane tylko dla danych tabelarycznych.
                ${sa11yHr}
                Dowiedz się więcej o <a href='https://www.w3.org/WAI/tutorials/tables/' target='_blank'>dostępnych tabelach. ${sa11yNewTab}</a>`,
        },

        badItalics: 
            `Znaczniki pogrubienia i kursywy mają znaczenie semantyczne i <span class='sa11y-bold'>nie powinny</span> być używane do wyróżniania całych akapitów. Pogrubiony tekst powinien być używany w celu <span class='sa11y-bold'>silnego podkreślenia słowa lub frazy</span>. Kursywa powinna być używana do wyróżnienia nazw własnych (np. tytułów książek i artykułów), wyrazów obcych, cytatów. Długie cytaty powinny być sformatowane jako blockquote.`,

        pageLanguageMessage: 
            `Język strony nie zadeklarowany! <a href='https://www.w3.org/International/questions/qa-html-language-declarations' target='_blank'>Zadeklaruj język w znaczniku HTML. ${sa11yNewTab}</a>`,

        shouldBeList: (firstPrefix) =>
            `Czy próbujesz utworzyć listę? Wykryto możliwe elementy listy: <span class='sa11y-bold sa11y-red-text'>${firstPrefix}</span>
            ${sa11yHr} 
            Upewnij się, że używasz list semantycznych, zamiast stosowania znaków punktowania (np. myślników) lub liczb. Podczas korzystania z list semantycznych technologie wspomagające są w stanie przekazać takie informacje, jak ogólna liczba elementów i względna pozycja każdego elementu na liście. Dowiedz się więcej o <a href='https://www.w3.org/WAI/tutorials/page-structure/content/#lists' target='_blank'>semantycznych listach. ${sa11yNewTab}</a>`,

        announcementWarningMessage: 
            `Więcej niż jeden komponent <strong>komponent Powiadomienia</strong>! Komponent Powiadomienia powinien być używany strategicznie i&nbsp;oszczędnie. Powinien być używany, aby zwrócić uwagę lub ostrzec użytkowników o czymś ważnym. Niewłaściwe użycie tego komponentu sprawia, że jest mniej wydajny i skuteczny. Ten komponent jest semantycznie oznaczony jako Powiadomienia dla osób korzystających z&nbsp;czytników ekranu.`,
    },

    contrast: {

        errorMessage: (cratio, nodetext) =>
            `Ten tekst nie ma wystarczającego kontrastu z tłem 
            Współczynnik kontrastu powinien wynosić co najmniej 4,5:1 dla zwykłego tekstu i 3:1 dla dużego tekstu. 
            ${sa11yHr} 
            Współczynnik kontrastu wynosi <span class='sa11y-red-text sa11y-bold'>${cratio}</span> dla następującego tekstu: 
            <span class='sa11y-bold sa11y-red-text'>${nodetext}</span>`,

        warningMessage: (nodetext) =>
            `Kontrast tego tekstu jest nieznany i wymaga ręcznego przeglądu. Upewnij się, że tekst i tło mają silne kontrastujące kolory. Współczynnik kontrastu powinien wynosić co najmniej 4,5:1 dla zwykłego tekstu i 3:1 dla dużego tekstu. 
            ${sa11yHr}Sprawdź kontrast następującego tekstu:
            <br>
            <span class='sa11y-bold'>${nodetext}</span>`,
    },

    readability: {
        noPorLiMessage:
            `Nie można oszacować wyników testu czytelności. Nie znaleziono treści w akapitach <span class="sa11y-badge">&lt;p&gt;</span> lub listach <span class="sa11y-badge">&lt;li&gt;</span>.`,

        notEnoughContentMessage:
            `Za mało treści, aby ocenić czytelność.`
    }
};

/*-----------------------------------------------------------------------
Sa11y: the accessibility quality assurance assistant.                
Author: Development led by Adam Chaboryk at Ryerson University.
All acknowledgements and contributors: https://github.com/ryersondmp/sa11y
License: https://github.com/ryersondmp/sa11y/blob/master/LICENSE.md
Copyright (c) 2020 - 2021 Ryerson University
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-----------------------------------------------------------------------*/