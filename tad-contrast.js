var Sa11y = new Sa11y();

function Sa11y() {
    /* When checked, save to LocalStorage. Keeps checker active when navigating between pages until it is toggled off.
    Added setTimeout function to (unscientifically) give a little time to load any other content or slow post-rendered JS, iFrames, etc. */

    $(function () {

        //Bind enter key to checkbox.
        $('#sa11y-checkbox').keydown(function (ev) {
            if (ev.keyCode == 13) $(ev.target).click();
        })

        var data = localStorage.getItem("start-sa11y");
        if (data !== null) {
            $("input[name='start-sa11y']").prop('checked', true);
            $(".sa11y-main-toggle-style").addClass("loading-spinner");
            setTimeout(function () {
                Sa11y.checkAll();
            }, 1200);
        }
        $("input[name='start-sa11y']").change(function () {
            if ($(this).is(":checked")) {
                localStorage.setItem("start-sa11y", $(this).val());
                Sa11y.checkAll();
            } else {
                localStorage.removeItem("start-sa11y");
                Sa11y.checkAll();
            }
        });

        //Escape key to shutdown.
        $('body').keyup(function (escape) {
            if (escape.keyCode == 27 && $('#sa11y-panel').hasClass('sa11y-active')) {
                tippy.hideAll()
                localStorage.removeItem("start-sa11y");
                Sa11y.checkAll();
            } else {
                this.onkeyup = null;
            }
        });

    });

    /* Templated SVG icons from FontAwesome 5 for better cross-browser support and minimize conflicting libraries. */
    var MainToggleIcon = "<svg role='img' focusable='false' width='35px' height='35px' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#ffffff' d='M256 48c114.953 0 208 93.029 208 208 0 114.953-93.029 208-208 208-114.953 0-208-93.029-208-208 0-114.953 93.029-208 208-208m0-40C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 56C149.961 64 64 149.961 64 256s85.961 192 192 192 192-85.961 192-192S362.039 64 256 64zm0 44c19.882 0 36 16.118 36 36s-16.118 36-36 36-36-16.118-36-36 16.118-36 36-36zm117.741 98.023c-28.712 6.779-55.511 12.748-82.14 15.807.851 101.023 12.306 123.052 25.037 155.621 3.617 9.26-.957 19.698-10.217 23.315-9.261 3.617-19.699-.957-23.316-10.217-8.705-22.308-17.086-40.636-22.261-78.549h-9.686c-5.167 37.851-13.534 56.208-22.262 78.549-3.615 9.255-14.05 13.836-23.315 10.217-9.26-3.617-13.834-14.056-10.217-23.315 12.713-32.541 24.185-54.541 25.037-155.621-26.629-3.058-53.428-9.027-82.141-15.807-8.6-2.031-13.926-10.648-11.895-19.249s10.647-13.926 19.249-11.895c96.686 22.829 124.283 22.783 220.775 0 8.599-2.03 17.218 3.294 19.249 11.895 2.029 8.601-3.297 17.219-11.897 19.249z'/></svg>",
        ErrorIcon = "<svg xmlns='http://www.w3.org/2000/svg' role='img' focusable='false' aria-hidden='true' viewBox='0 0 576 576' width='24px' height='24px'><path fill='#ffffff' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'></path></svg><span class='sr-only'>Błąd</span>",
        PassIcon = "<svg xmlns='http://www.w3.org/2000/svg' role='img' focusable='false' aria-hidden='true' viewBox='0 0 512 512' width='24px' height='24px'><path fill='#ffffff' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/></svg><span class='sr-only'>Dobrze</span>",
        WarningIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='28px' height='28px' role='img' focusable='false' aria-hidden='true' viewBox='0 0 512 512'><path fill='#505050' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z'/></svg><span class='sr-only'>Uwaga</span>",
        PanelCheckIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' role='img' focusable='false' aria-hidden='true' viewBox='0 0 512 512' ><path fill='#359E56' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/></svg>",
        PanelWarningIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' role='img' focusable='false' aria-hidden='true' viewBox='0 0 512 512'><path fill='#d39c00' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z'/></svg>",
        PanelErrorIcon = "<svg xmlns='http://www.w3.org/2000/svg' role='img' focusable='false' aria-hidden='true' viewBox='0 0 576 512' width='24px' height='24px'><path fill='#d30017' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'></path></svg>"

    // States of the outlines, used to toggle the outlines.
    this.showingHeaders = false;
    this.showingLinkText = false;
    this.showingContrast = false;
    this.showingLabels = false;
    this.showingAltText = false;
    this.showingQA = false;

    // Sets working document to current page document object.
    this.workingDoc = document;

    // Sets the working document to an iframe
    this.setDocument = function (iframeID) {
        var iframe = document.getElementById(iframeID);
        this.workingDoc = iframe.contentDocument || iframe.contentWindow.document;
    };

    // Create a floating button and hidden divs that contain success/warning message.
    var sa11ycontainer = document.createElement("div");
    sa11ycontainer.setAttribute("id", "sa11y-container");
    //Main button uses checkbox input to pass value for localstorage.
    sa11ycontainer.innerHTML = "<input class='sa11y-hide-native-checkbox' id='sa11y-checkbox' type='checkbox' name='start-sa11y'><label class='sa11y-main-toggle-style sa11y-exclude' for='sa11y-checkbox'>" + MainToggleIcon + "<span class='sr-only'>Sprawdź dostepność</span></label>"

        +
        "<div id='sa11y-panel' class='sa11y-panel'>"

        +
        "<div id='sa11y-page-outline' class='sa11y-outline-header'><span id='page-outline-header' class='sa11y-bold'>Konspekt strony</span><ul id='sa11y-outline-list' tabindex='-1' aria-labelledby='page-outline-header'></ul></div>"

        +
        "<div id='sa11y-no-errors' role='alert' class='sa11y-panel-header'><div class='sa11y-th-img'>" + PanelCheckIcon + "</div><div class='sa11y-td-msg'>Nie znaleziono błędów dostępności!</div></div>"

        +
        "<div id='sa11y-warnings' role='alert' class='sa11y-panel-header'><div class='sa11y-th-img'>" + PanelWarningIcon + "</div><div class='sa11y-td-msg'>Nie znaleziono błędów dostępności, ale sprawdź uwagi!</div></div>"

        +

        //Add a link to your own help page or documentation. Dodaj łącze do swojego włąsnego systemu pomocy lub dokumentacji
        "<div id='sa11y-errors-found' role='alert' class='sa11y-panel-header'><div class='sa11y-th-img'>" + PanelErrorIcon + "</div><div class='sa11y-td-msg'>Znaleziono błędy dostępności!<!--<br><a href='https://lepszyweb.pl/' target='_blank'>Potrzebujesz pomocy?</a>--></div></div>"

        +
        "<button type='button' aria-expanded='false' id='sa11y-summary-toggle'>Pokaż konspekt</button>"

        +
        "</div>";

    $('body').prepend(sa11ycontainer);

    // State of errors on page. Used to toggle pass message.
    this.noErrors = true;
    this.anyWarning = false;
    this.panelActive = false;

    // Toggles the outline of all headers, link texts, and images.
    this.checkAll = function () {
        this.checkHeaders();
        this.checkLinkText();
        this.checkContrast();
        this.checkLabels();
        this.checkAltText();
        this.checkQA();

        if (this.panelActive) {
            Sa11y.reset();
            this.panelActive = false;
        } else {
            this.displayPanel();
            this.panelActive = true;
        }

        //Initialize tippy.js
        tippy('[data-tippy-content]', {
            interactive: true,
            trigger: 'mouseenter click',
            arrow: true,
            theme: 'sa11y-theme',
            allowHTML: true,
            appendTo: document.body
        });

    };

    $("#sa11y-summary-toggle").click(function () {
        $(this).toggleClass("sa11y-btn-active");
        $("#sa11y-page-outline").toggleClass("sa11y-active");
        $(this).text(function (i, v) {
            return v === 'Pokaż konspekt' ? 'Ukryj konspekt' : 'Pokaż konspekt'
        });
        $(this).attr('aria-expanded', function (i, attr) {
            return attr == 'true' ? 'false' : 'true'
        });
        $("#sa11y-outline-list").focus();
    });

    this.displayPanel = function () {
        if (this.noErrors) {
            $("#sa11y-panel").addClass("sa11y-active");
            $("#sa11y-summary-toggle").addClass("sa11y-active");
            $(".sa11y-main-toggle-style").addClass("sa11y-toggle-active");

            // Display a warning message if only warnings are found.
            if (this.anyWarning) {
                $("#sa11y-no-errors").removeClass("sa11y-active");
                $("#sa11y-warnings").addClass("sa11y-active");
                $(".sa11y-main-toggle-style").addClass("sa11y-toggle-active");
            }

            // Display success message.
            else if (!this.anyWarning) {
                $("#sa11y-warnings").removeClass("sa11y-active");
                $("#sa11y-no-errors").addClass("sa11y-active");
                $(".sa11y-main-toggle-style").addClass("sa11y-toggle-active");
            } else {
                $("#sa11y-warnings").removeClass("sa11y-active");
                $("#sa11y-no-errors").removeClass("sa11y-active");
            }

            $("#allytogglebtn").click(function (event) {
                event.stopPropagation();
            });

        } else {
            $("#sa11y-panel").addClass("sa11y-active");
            $("#sa11y-summary-toggle").addClass("sa11y-active");
            $("#sa11y-errors-found").addClass("sa11y-active");
            $("#sa11y-no-errors").removeClass("sa11y-active");
            $("#sa11y-warnings").removeClass("sa11y-active");
            $(".sa11y-main-toggle-style").addClass("sa11y-toggle-active");
        }
    }

    // Resets all changes made by the tool. Removing outlines and additional spans.
    this.reset = function () {
        this.clearEverything();
        this.showingAltText = false;
        this.showingHeaders = false;
        this.showingLinkText = false;
        this.showingContrast = false;
        this.showingLabels = false;
        this.showingQA = false;
        this.noErrors = true; //Reset page to "no errors" instead of refreshing page.
        this.anyWarning = false;
    };

    this.clearEverything = function () {
        var $body = $(this.workingDoc.getElementsByTagName("body"));

        //Remove error outlines
        $body.find(".sa11y-text-warning").removeClass("sa11y-text-warning");
        $body.find(".sa11y-uppercase-warning").contents().unwrap();
        $body.find(".sa11y-error-border").removeClass("sa11y-error-border");
        $body.find(".sa11y-warning-border").removeClass("sa11y-warning-border");
        $body.find(".sa11y-headings-fail").removeClass("sa11y-headings-fail");
        $body.find(".sa11y-link-text-fail").removeClass("sa11y-link-text-fail");

        //Remove buttons
        $body.find(".sa11y-instance").remove();
        $body.find(".sa11y-instance-inline").remove();
        $body.find(".sa11y-error-btn").remove();
        $body.find(".sa11y-error-text-btn").remove();
        $body.find(".sa11y-link-warning-btn").remove();
        $body.find(".sa11y-warning-btn").remove();
        $body.find(".sa11y-pass-btn").remove();
        $body.find(".sa11y-text-pass-btn").remove();
        $body.find(".sa11y-headings-label").remove();

        //Remove panels
        $body.find(".sa11y-error-message").remove();
        $body.find(".sa11y-pass-message").remove();
        $body.find(".sa11y-warning-message").remove();
        $body.find("#sa11y-panel").removeClass("sa11y-active");
        $body.find("#sa11y-summary-toggle").removeClass("sa11y-active");
        $body.find(".sa11y-popover").remove();
        $body.find("#sa11y-outline-list li").remove();
        $body.find(".sa11y-main-toggle-style").removeClass("allytogglefocus");
        $body.find(".sa11y-main-toggle-style").removeClass("sa11y-toggle-active");
        $body.find("#sa11y-errors-found").removeClass("sa11y-active");
        $body.find("#sa11y-no-errors").removeClass("sa11y-active");
        $body.find("#sa11y-warnings").removeClass("sa11y-active");
    }

    /*================== HEADING STRUCTURE MODULE ===================*/

    this.checkHeaders = function () {
        if (this.showingHeaders) {
            this.clearEverything();
            this.showingHeaders = false;
        } else {
            this.outlineHeaders();
            this.showingHeaders = true;
        }
    };

    this.outlineHeaders = function () {

        // Fetch all headers from the working document.
        let $headings = $(this.workingDoc.querySelectorAll("h1, h2, h3, h4, h5, h6"));
        let prevLevel;

        // Test each header level for accessibility issues.
        $headings.each((i, el) => {
            let $el = $(el);
            let level = +$el.prop("tagName").slice(1);
            let error = null;
            let headingLength = $el.text().trim().length;

            // Tests 4 cases of inaccesibility.
            if (i === 0 && level !== 1) {
                error = "<div class='tippy-heading'>Błąd</div> Pierwszy nagłówek na stronie nie jest nagłówkiem H1. Nagłówek H1 jest głównym nagłówkiem opisującym ogólny cel strony i powinien być początkiem obszaru treści głównej.";
            } else if (i !== 0 & level === 1) {
                error = "<div class='tippy-heading'>Błąd</div> Na stronie może być tylko jeden nagłówek H1. Nagłówek H1 jest głównym nagłówkiem opisującym ogólny cel strony";
            } else if (prevLevel && level - prevLevel > 1) {
                error = "<div class='tippy-heading'>Błąd</div> Niekonsekwentny poziom nagłówka. Zastosowane poziomy nie następują po sobie. Nagłówki nigdy nie powinny pomijać poziomów od <span class='sa11y-bold'>Nagłówek H" + prevLevel + "</span> do <span class='sa11y-red-text sa11y-bold'>Nagłówek H" + level + ".</span>";
            } else if ($el.text().trim().length < 1) {
                error = "<div class='tippy-heading'>Błąd</div> Znaleziono pusty nagłówek! Usuń puste znaczniki nagłówka lub dodaj brakujący tekst.";
                $el.addClass("sa11y-link-text-fail");
            } else if ($el.text().trim().length > 160) {
                error = "<div class='tippy-heading'>Błąd</div> Nagłówek jest zbyt długi! Nagłówki służą do organizowania treści i przekazywania struktury. Powinny być krótkie, jasne, opisowe i niepowtarzalne. Pisz nagłówki nie dłuższe niż 160 znaków (nie więcej niż zdanie).<hr aria-hidden='true' class='tippy-tool-hr'>Liczba znaków: <span class='sa11y-bold sa11y-red-text'>" + headingLength + "</span>"
            }

            prevLevel = level;

            //If the heading error is within a hyperlink, make sure to append button after anchor tag.
            if (error != null && $el.closest("a").length > 0) {
                this.noErrors = false;
                $el.addClass("sa11y-headings-fail");
                $el.closest('a').after('<div class="sa11y-instance"><button class="sa11y-error-text-btn" data-tippy-content="' + error + '" >' + ErrorIcon + '</button></div>');
                var li = "<li class='sa11y-outline-" + level + " sa11y-red-text'><span class='sa11y-bold'><span aria-hidden='true'>&times;</span><span class='sr-only'>Błąd</span> H" + level + ":</span> " + $el.text() + "</li>"; //Generate page outline.
                $("#sa11y-outline-list").append(li); //Generate page outline.
            }

            // Outline element based on error.
            else if (error != null) {
                this.noErrors = false;
                $el.addClass("sa11y-headings-fail");
                $el.before('<div class="sa11y-instance"><button class="sa11y-error-text-btn" data-tippy-content="' + error + '" >' + ErrorIcon + '</button></div>');
                var li = "<li class='sa11y-outline-" + level + " sa11y-red-text'><span class='sa11y-bold'><span aria-hidden='true'>&times;</span><span class='sr-only'>Błąd</span> H" + level + ":</span> " + $el.text() + "</li>"; //Generate page outline.
                $("#sa11y-outline-list").append(li); //Generate page outline.
            } else if (error == null) {
                var li = "<li class='sa11y-outline-" + level + "'><span class='sa11y-bold'>H" + level + ":</span> " + $el.text() + "</li>"; //Generate page outline.
                $("#sa11y-outline-list").append(li); //Generate page outline.
            }

            $("#sa11y-summary-toggle").click(function () {
                if ($(this).attr('aria-expanded') == 'true') {
                    $el.append(" <span class='sa11y-headings-label'>H" + level + "</span> ");
                } else {
                    $(".sa11y-headings-label").remove();
                }
            });

        });
    };

    /*====================== LINK TEXT MODULE =======================*/

    // Toggles the outline of all inaccessible link texts.
    this.checkLinkText = function () {
        if (this.showingLinkText) {
            this.clearEverything();
            this.showingLinkText = false;
        } else {
            this.outlineLinkText();
            this.showingLinkText = true;
        }
    };

    this.outlineLinkText = function () {


        let $links = $("body").find("a").not(".sa11y-exclude");

        /* Mini function if you need to exclude any text contained with a span. We created this function to ignore automatically appended sr-only text for external links and document filetypes.

        $.fn.ignore = function(sel){
          return this.clone().find(sel||">*").remove().end();
        };

        Example: If you need to ignore any text within <span class="sr-only">test</span>.
            $el.ignore("span.sr-only").text().trim();

        */

        $links.each((i, el) => {
            let $el = $(el);
            var linktext = $el.text();
            var hasarialabelledby = $el.attr("aria-labelledby");
            var hasarialabel = $el.attr("aria-label");
            var hasariahidden = $el.attr("aria-hidden");
            var hastabindex = $el.attr("tabindex");

            // error is any words that are making this link text inaccessible.
            var error = this.containsLinkTextStopWords($el.text().trim());

            // Tests to see if this link is empty
            if ($el.children().length == 0 && $el.attr('href') !== undefined && $el.text().length == 0 && $el.is(':visible')) {
                this.noErrors = false;
                linkErrorMessage = "<div class='tippy-heading'>Błąd</div> Puste hiperłącze bez żadnego tekstu!"
                $el.addClass("sa11y-link-text-fail");
                $el.after('<div class="sa11y-instance-inline"><button class="sa11y-error-text-btn" data-tippy-content="' + linkErrorMessage + '" >' + ErrorIcon + '</button></div>');
            }
            // if link contains any link text stop words, then it fails.
            else if (error != null) {

                if (hasarialabelledby != null) {
                    var acclinkname = document.getElementById(hasarialabelledby).textContent;
                    var linkHasAriaLabelledby = "<div class='tippy-heading'>Dobrze!</div> Łącze ma opisową etykietę: <span class='sa11y-bold'>" + linktext + " " + acclinkname + "</span>"
                    $el.after('<div class="sa11y-instance-inline"><button class="sa11y-text-pass-btn" data-tippy-content="' + linkHasAriaLabelledby + '" >' + PassIcon + '</button></div>');
                } else if (hasarialabel != null) {
                    linkHasAriaLabel = "<div class='tippy-heading'>Dobrze!</div> Łącze ma opisową etykietę: <span class='sa11y-bold'>" + hasarialabel + "</span>"
                    $el.after('<div class="sa11y-instance-inline"><button class="sa11y-text-pass-btn" data-tippy-content="' + linkHasAriaLabel + '" >' + PassIcon + '</button></div>');
                } else if (hasariahidden == "true" && hastabindex == "-1") {
                    //do nothing.
                } else {
                    this.noErrors = false;
                    $el.addClass("sa11y-link-text-fail");
                    stopWordMessage = "<div class='tippy-heading'>Błąd</div> Tekst łącza może nie być wystarczająco opisowy, należy rozważyć zmianę wyrazu: <span class='sa11y-red-text sa11y-bold'>" + error + "</span><hr aria-hidden='true' class='tippy-tool-hr'><span class='sa11y-bold'>Porada!</span> Tekst łącza powinien być zawsze unikatowy i znaczący, aby można go było zrozumieć poza kontekstem."
                    $el.after('<div class="sa11y-instance-inline"><button class="sa11y-error-text-btn" data-tippy-content="' + stopWordMessage + '" >' + ErrorIcon + '</button></div>');
                }
            }

        });
    };

    // Checks if text is not descriptive and returns the word(s) that are making the text inaccessible.
    //showStopper words will always flag an issue if contained in a hyperlink.
    //partialStopWords will only be flagged as an issue if it's the only hyperlink text.
    this.containsLinkTextStopWords = function (textContent) {

        let stopWords = ["kliknij", "idź", "<", ">", "http://", "https://", ".aspx", ".html", ".php", "tutaj"];
        let partialStopWords = ["dowiedz się wiecej", "więcej", "zarejestruj", "ten link", "ta strona", "wyloguj", "czytaj to", "zobacz", "zobacz naszą", "czytaj więcej", ".", ",", ":", "strona", "tę stronę", "pobierz", "formularz", "link", "tutaj", "ten"];
        var hit = null;

        // First check for show stoppers.
        $.each(stopWords, function (index, word) {
            if (textContent.toLowerCase().indexOf(word) >= 0) {
                hit = word;
                return false;
            }
        });

        // If no partial words were found, then check for total words.
        if (hit == null) {
            $.each(partialStopWords, function (index, word) {
                if (textContent.length === word.length && textContent.toLowerCase().indexOf(word) >= 0) {
                    hit = word;
                    return false;
                }
            });
        }
        return hit;
    };

    /*======================== CONTRAST MODULE =======================*/
    /* Thanks to jasonday for this plugin https://www.jqueryscript.net/other/color-contrast-checker.html */
    this.checkContrast = function () {
        if (this.showingContrast) {
            this.showingContrast = false;
        } else {
            this.outlineContrast();
            this.showingContrast = true;
        }
    };

    // Outlines inaccessible link texts with a red border and a tooltip for remediation solution.
    this.outlineContrast = function () {

        var contrastErrors = {
            errors: [],
            warnings: []
        };
        var contrast = {
            // Parse rgb(r, g, b) and rgba(r, g, b, a) strings into an array.
            // Adapted from https://github.com/gka/chroma.js
            parseRgb: function (css) {
                var i, m, rgb, _i, _j;
                if (m = css.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
                    rgb = m.slice(1, 4);
                    for (i = _i = 0; _i <= 2; i = ++_i) {
                        rgb[i] = +rgb[i];
                    }
                    rgb[3] = 1;
                } else if (m = css.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) {
                    rgb = m.slice(1, 5);
                    for (i = _j = 0; _j <= 3; i = ++_j) {
                        rgb[i] = +rgb[i];
                    }
                }
                return rgb;
            },
            // Based on http://www.w3.org/TR/WCAG20/#relativeluminancedef
            relativeLuminance: function (c) {
                var lum = [];
                for (var i = 0; i < 3; i++) {
                    var v = c[i] / 255;
                    lum.push(v < 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
                }
                return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
            },
            // Based on http://www.w3.org/TR/WCAG20/#contrast-ratiodef
            contrastRatio: function (x, y) {
                var l1 = contrast.relativeLuminance(contrast.parseRgb(x));
                var l2 = contrast.relativeLuminance(contrast.parseRgb(y));
                return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
            },
            // Based on http://jsfiddle.net/Y4uDL/
            getBackground: function (el) {
                var bgColor = el.css('background-color');
                var bgImage = el.css('background-image');

                if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent' && bgImage === "none") {
                    return bgColor;
                } else if (bgImage !== "none") {
                    return "image";
                }

                if (el.is('html')) {
                    return 'rgb(255, 255, 255)';
                } else {
                    return contrast.getBackground(el.parent());
                }
            },
            check: function () {
                $('*:visible').not('.sa11y-exclude').not('.sa11y-exclude *').each(function () {
                    var $this = $(this),
                        color = $this.css('color'),
                        background = contrast.getBackground($this),
                        htmlTag = $this[0].tagName,
                        textCheck = $this.clone().children().remove().end().text(),
                        ratingString,
                        fontSizeString,
                        failed;

                    if (htmlTag === "SVG") {
                        var fill = $this.css('fill'),
                            ratio = Math.round(contrast.contrastRatio(fill, background) * 100) / 100,
                            ratioText = ratio + ':1';
                        if (ratio < 3) {
                            failed = true;
                            fontSizeString = "svg fill";
                            ratingString = "źle"
                        }
                    } else if ($.trim(textCheck).length || htmlTag === "INPUT" || htmlTag === "SELECT" || htmlTag === "TEXTAREA") {
                        // does element have a background image - needs to be manually reviewed
                        if (background === "image") {
                            var ratioText = "nieznane";
                            ratingString = "Wymaga przeglądu ręcznego";
                            fontSizeString = "N/D";
                            failed = true;
                        } else {
                            var ratio = Math.round(contrast.contrastRatio(color, background) * 100) / 100,
                                ratioText = ratio + ':1',
                                fontSize = parseInt($this.css('fontSize')),
                                fontWeight = $this.css('fontWeight');

                            if (($this.width() <= 1 || $this.height() <= 1) && $this.css("overflow") == 'hidden') {
                                /*Really unscientific condition of ignoring visually hidden screen reader text.
                                If width and height of element is less than 1px and overflow is set to hidden,
                                do not run contrast check on it...*/
                            } else if (fontSize >= 18 || (fontSize >= 14 && fontWeight >= 700)) {
                                fontSizeString = 'Rozmiar dużego tekstu'
                                if (ratio < 3) {
                                    ratingString = 'źle';
                                    failed = true;
                                } else {
                                    ratingString = 'dobrze';
                                    failed = false;
                                }
                            } else {
                                fontSizeString = 'Rozmiar zwykłego tekstu'
                                if (ratio < 4.5) {
                                    ratingString = 'źle';
                                    failed = true;
                                } else {
                                    ratingString = 'dobrze';
                                    failed = false;
                                }
                            }
                        }
                    }

                    // highlight the element in the DOM and log the element, contrast ratio and failure
                    // for testing in console
                    if (failed) {
                        var error = {};
                        error = {
                            name: $this,
                            ratio: ratioText,
                            detail: fontSizeString,
                            status: ratingString
                        }
                        if (ratingString === "źle") {
                            contrastErrors.errors.push(error);
                        } else if (ratingString === "Wymaga przeglądu ręcznego") {
                            contrastErrors.warnings.push(error);
                        }
                    }
                });

                return contrastErrors;
            }
        }

        contrast.check();
        $.each(contrastErrors.errors, (index, item) => {
            var name = item.name;
            var cdetail = item.detail;
            var cratio = item.ratio;
            var nodename = name[0].nodeName;
            var nodetext = name[0].textContent;
            this.noErrors = false;
            ContrastError = "<div class='tippy-heading'>Błąd</div> " + cdetail + " nie ma wystarczającego kontrastu z tłem. Współczynnik kontrastu powinien wynosić co najmniej 4,5:1 dla zwykłego tekstu i 3:1 dla dużego tekstu. <hr class='tippy-tool-hr' aria-hidden='true'> Współczynnik kontrastu wynosi <span class='sa11y-red-text sa11y-bold'>" + cratio + "</span> dla następującego tekstu: <span class='sa11y-bold sa11y-red-text'>" + nodetext + "</span>"
            $(name).addClass("sa11y-error-border").before('<div><button class="sa11y-error-text-btn" data-tippy-content="' + ContrastError + '" >' + ErrorIcon + '</button></div>');
        });

        $.each(contrastErrors.warnings, (index, item) => {
            var name = item.name;
            var nodetext = name[0].textContent;
            this.anyWarning = true;
            ContrastWarning = "<div class='tippy-heading'>Uwaga</div> Kontrast tego tekstu jest nieznany i wymaga ręcznego przeglądu. Upewnij się, że tekst i tło mają silne kontrastujące kolory. Współczynnik kontrastu powinien wynosić co najmniej 4,5:1 dla zwykłego tekstu i 3:1 dla dużego tekstu. <hr class='tippy-tool-hr' aria-hidden='true'>Sprawdź kontrast następującego tekstu:<br> <span class='sa11y-bold'>" + nodetext + "</span>"
            $(name).addClass('sa11y-warning-border').before('<div><button class="sa11y-link-warning-btn" data-tippy-content="' + ContrastWarning + '" >' + WarningIcon + '</button></div>');
        });
    };

    /*======================== INPUTS MODULE =======================*/
    this.checkLabels = function () {
        if (this.showingLabels) {
            this.showingLabels = false;
        } else {
            this.outlineLabels();
            this.showingLabels = true;
        }
    };

    /* Outlines inaccessible input and form fields. */
    this.outlineLabels = function () {
        let $inputs = $("input").not("input:hidden");
        $inputs.each((i, el) => {
            let $el = $(el);

            if (!$el.attr('id') && !$el.attr('aria-label') && !$el.attr('aria-labelledby')) {
                this.noErrors = false;
                $el.addClass("sa11y-error-border");
                MissingLabelError = "<div class='tippy-heading'>Błąd</div> Z tym polem input nie jest skojarzona żadna etykieta (label). Dodaj do tego pola danych <kbd>id</kbd> i dodaj pasujący atrybut <kbd>for</kbd> do etykiety."
                $el.after('<div class="sa11y-instance-inline"><button class="sa11y-error-text-btn" data-tippy-content="' + MissingLabelError + '" >' + ErrorIcon + '</button></div>');
            } else if ($el.attr('aria-label')) {
                /*Optional: add pass border.*/
            } else if ($el.prev().is("label")) {

                label = $el.prev();
                if (label.attr('for') == $el.attr('id')) {
                    /*Optional: add pass border.*/
                } else {
                    this.noErrors = false;
                    $el.addClass("sa11y-error-border");
                    NoForAttributeError = "<div class='tippy-heading'>Błąd</div> Z tym polem input nie jest skojarzona żadna etykieta (label). Dodaj atrybut <kbd>for</kbd> do etykiety z wartością <kbd>id</kbd> pasującą do <kbd>id</kbd> tego pola. <hr class='tippy-tool-hr' aria-hidden='true'> ID tego pola to: <span class='sa11y-bold'>id=&#34;" + $el.attr('id') + "&#34;</span>"
                    $el.after('<div class="sa11y-instance-inline"><button class="sa11y-error-text-btn" data-tippy-content="' + NoForAttributeError + '" >' + ErrorIcon + '</button></div>');
                }
            }
        });
    };

    /*================== ALTERNATIVE TEXT MODULE ====================*/

    // Toggles the outline of images.
    this.checkAltText = function () {
        if (this.showingAltText) {
            this.clearEverything();
            this.showingAltText = false;
        } else {
            this.outlineAltText();
            this.showingAltText = true;
        }
    };

    this.outlineAltText = function () {

        let $images = $("body").find("img").not(".sa11y-exclude");
        /* Example: Find all images within the main content area only, and exclude images containing a path.*/

        // Test each image for alternative text.
        $images.each((i, el) => {
            let $el = $(el);
            let text = $el.attr("alt");

            // Checks to see if image contains an alt attribute. If not, then image fails.
            if (text == undefined) {
                this.noErrors = false;

                // Image fails if it is used as a link and is missing an alt attribute.
                //if ($el.parent().prop("tagName") == "A") {
                if ($el.parents().is("a[href]")) {

                    //Image contains both hyperlink
                    if ($el.parents("a").text().trim().length > 1) {
                        $el.addClass("sa11y-error-border");
                        missingAltLinkButHasTextError = "<div class='tippy-heading'>Błąd</div> Obraz jest używany razem z sąsiadującym tekstem jako hiperłącze, obraz powinien być oznaczony jako dekoracyjny albo atrybut alt obrazu powinien być pusty."
                        $el.closest("a").before('<div class="sa11y-instance-inline"><button class="sa11y-error-btn" data-tippy-content="' + missingAltLinkButHasTextError + '" >' + ErrorIcon + '</button></div>');
                    } else if ($el.parents("a").text().trim().length == 0) {
                        $el.addClass("sa11y-error-border");
                        missingAltLinkError = "<div class='tippy-heading'>Błąd</div> Obraz jest używany jako hiperłącze, ale brakuje tekstu alternatywnego! Dodaj tekst alternatywny, który mówi, dokąd prowadzi łącze."
                        $el.closest('a').before('<div class="sa11y-instance-inline"><button class="sa11y-error-btn" data-tippy-content="' + missingAltLinkError + '" >' + ErrorIcon + '</button></div>');
                    }

                }
                // General failure message if Image is missing an alt attribute.
                else {
                    $el.addClass("sa11y-error-border");
                    generalAltText = "<div class='tippy-heading'>Błąd</div>Brak tekstu alternatywnego! Jeśli obraz przekazuje historię, nastrój lub ważne informacje - przedstaw je w tekście alternatywnym."
                    $el.before('<div class="sa11y-instance"><button class="sa11y-error-btn" data-tippy-content="' + generalAltText + '" >' + ErrorIcon + '</button></div>');
                }
            }

            // If alt attribute is present, further tests are done.
            else {
                let altText = text.replace(/'/g, "&#39;"); //replace apostrophe with HTML ascii to prevent breaking popover.
                let error = this.containsAltTextStopWords(altText);
                let altLength = text.length;

                // Image fails if a stop word was found
                if (error != null && $el.parents().is("a[href]")) {
                    this.noErrors = false;
                    $el.addClass("sa11y-error-border");
                    LinkedImageHasBadAltWord = "<div class='tippy-heading'>Błąd</div> Wykryto wątpliwy tekst alternatywny w obrazku łącza. Upewnij się, że tekst alternatywny opisuje miejsce docelowe łącza, a nie treść lub wygląd obrazu. Usuń wyraz(y): <span class='sa11y-red-text sa11y-bold'>" + error + "</span>. <hr aria-hidden='true' class='tippy-tool-hr'> Aktualny tekst alternatywny tego obrazu to: <span class='sa11y-bold'>" + altText + "</span>"

                    $el.closest('a').before('<div class="sa11y-instance-inline"><button class="sa11y-error-btn" data-tippy-content="' + LinkedImageHasBadAltWord + '" >' + ErrorIcon + '</button></div>');
                } else if (error != null) {
                    this.noErrors = false;
                    $el.addClass("sa11y-error-border");
                    AltHasBadWord = "<div class='tippy-heading'>Błąd</div> Znaleziono słaby tekst alternatywny. Nie jest konieczne dołączanie takich słów jak <em>obraz</em>, <em>grafika</em>, <em>zdjecie</em> lub rozszerzenie pliku. Rozważ usunięcie wyrazu: <span class='sa11y-red-text sa11y-bold'>" + error + "</span>. <hr aria-hidden='true' class='tippy-tool-hr'> Aktualny tekst alternatywny tego obrazu to: <span class='sa11y-bold'>" + altText + "</span>"
                    $el.before('<div class="sa11y-instance-inline"><button class="sa11y-error-btn" data-tippy-content="' + AltHasBadWord + '" >' + ErrorIcon + '</button></div>');
                } else if (text == "" && $el.parents().is("a[href]")) {
                    if ($el.parents("a").text().trim().length == 0) {
                        this.noErrors = false;
                        $el.addClass("sa11y-error-border");
                        ImageLinkNullAltNoText = "<div class='tippy-heading'>Błąd</div> Obraz w hiperłączu jest oznaczony jako dekoracyjny i nie ma tekstu łącza. Dodaj tekst alternatywny do obrazu opisującego miejsce docelowe łącza."
                        $el.closest('a').before('<div class="sa11y-instance-inline"><button class="sa11y-error-btn" data-tippy-content="' + ImageLinkNullAltNoText + '" >' + ErrorIcon + '</button></div>');
                    } else {
                        LinkHasAltMessage = "<div class='tippy-heading'>Dobrze!</div> Obraz jest oznaczony jako dekoracyjny, a hiperłącze wykorzystuje sąsiadujacy z nim tekst jako opisową etykietę."
                        $el.closest('a').before('<div class="sa11y-instance-inline"><button class="sa11y-pass-btn" data-tippy-content="' + LinkHasAltMessage + '" >' + PassIcon + '</button></div>');
                    }
                }

                // Image warning if it is decorative and is not a link.
                else if (text == "" && $el.parents().not("a[href]")) {
                    decorativePassMessage = "<div class='tippy-heading'>Dobrze!</div> Obraz oznaczony jako <span class='sa11y-bold'>dekoracyjny.</span>. Jeśli jednak obraz przekazuje historię, nastrój lub ważne informacje - należy dodać tekst alternatywny."
                    $el.before('<div class="sa11y-instance"><button class="sa11y-pass-btn" data-tippy-content="' + decorativePassMessage + '" >' + PassIcon + '</button></div>');
                }

                // Image warning if it is a link and contains an alt text.
                else if (text.length > 160 && $el.parents().is("a")) {
                    this.noErrors = false;
                    $el.addClass("sa11y-error-border");
                    HyperlinkAltLengthWarning = "<div class='tippy-heading'>Błąd</div> Tekst alternatywny opisujący obraz w hiperłączu jest <span class='sa11y-bold'>zbyt długi</span>. Tekst alternatywny na obrazach hiperłącza powinien przedstawiać, dokąd prowadzi łącze, a nie dosłowny opis obrazu. <span class='sa11y-bold'>Rozważ użycie jako tekstu alternatywnego tytułu strony, do którego łączy obraz.</span> <hr aria-hidden='true' class='tippy-tool-hr'> Aktualnie tekst alternatywny ma <span class='sa11y-red-text sa11y-bold'>" + altLength + "</span> znaki (znaków): <span class='sa11y-red-text sa11y-bold'>" + altText + "</span>"
                    $el.closest('a').before('<div class="sa11y-instance-inline"><button class="sa11y-error-btn" data-tippy-content="' + HyperlinkAltLengthWarning + '" >' + ErrorIcon + '</button></div>');
                }

                // Image warning if it is a link and contains an alt text.
                else if (text != "" && $el.parents().is("a") && $el.parents("a").text().trim().length == 0) {
                    this.anyWarning = true;
                    $el.addClass("sa11y-warning-border");
                    ImageLinkAltTextWarning = "<div class='tippy-heading'>Sprawdź to!</div> Łącze obrazu zawiera tekst alternatywny, ale upewnij się, że tekst alternatywny wskazuje na stronę docelową. <span class='sa11y-bold'>Rozważ użycie jako tekstu alternatywnego tytułu strony, do którego łączy obraz.</span> Czy tekst alternatywny mówi, dokąd prowadzi łącze? <hr aria-hidden='true' class='tippy-tool-hr'>Tekst alternatywny: <span class='sa11y-bold'>" + altText + "</span>"
                    $el.closest('a').before('<div class="sa11y-instance-inline"><button class="sa11y-warning-btn" data-tippy-content="' + ImageLinkAltTextWarning + '" >' + WarningIcon + '</button></div>');
                }

                // Image warning if it is a link, contains alt text AND surrounding link text.
                else if (text != "" && $el.parents().is("a") && $el.parents("a").text().trim().length > 1) {
                    this.anyWarning = true;
                    $el.addClass("sa11y-warning-border");
                    AnchorLinkAndAlt = "<div class='tippy-heading'>Sprawdź to!</div> Łącze obrazu zawiera <span class='sa11y-bold'>zarówno tekst alternatywny, jak i sąsiadujący tekst łącza.</span>. Jeśli ten obraz jest dekoracyjny i jest używany w funkcji łącza do innej strony, należy rozważyć oznaczenie obrazu jako dekoracyjnego (pusty alt) - sąsiadujący tekst łącza powinien wystarczyć. <hr aria-hidden='true' class='tippy-tool-hr'>Tekst alternatywny: <span class='sa11y-bold'>" + altText + "</span>"
                    $el.closest('a').before('<div class="sa11y-instance-inline"><button class="sa11y-warning-btn" data-tippy-content="' + AnchorLinkAndAlt + '" >' + WarningIcon + '</button></div>');
                }

                // Image error if alt text is too long.
                else if (text.length > 160) {
                    this.anyWarning = true;
                    $el.addClass("sa11y-warning-border");
                    AltTooLong = "<div class='tippy-heading'>Uwaga</div> Tekst alternatywny obrazu jest <span class='sa11y-bold'>zbyt długi</span>. Tekst alternatywny powinien być zwięzły, ale znaczący jak <em>tweet</em> (około 100 znaków). Jeśli jest to złożony obraz lub wykres, należy rozważyć umieszczenie długiego opisu obrazu w tekście poniżej lub w akordeonie. <hr aria-hidden='true' class='tippy-tool-hr'> Tekst alternatywny ma <span class='sa11y-red-text sa11y-bold'>" + altLength + " znaki (znaków)</span>: " + altText + "."
                    $el.before('<div class="sa11y-instance"><button class="sa11y-warning-btn" data-tippy-content="' + AltTooLong + '" >' + WarningIcon + '</button></div>');
                }

                // Image pass if it contains alt text.
                else if (text != "") {
                    PassAltMessage = "<div class='tippy-heading'>Dobrze!</div> Tekst alternatywny tego obrazu to: <span class='sa11y-bold'>" + altText + "</span>"
                    $el.before('<div class="sa11y-instance"><button class="sa11y-pass-btn" data-tippy-content="' + PassAltMessage + '" >' + PassIcon + '</button></div>');
                }
            }
        });
    };

    // Checks if text is not descriptive and returns the word(s) that are making the text inaccessible.
    this.containsAltTextStopWords = function (textContent) {
        let stopWords = [".png", "DSC", ".jpg", ".jpeg",  "obraz", "obraz z", "grafika", "grafika z", "zdjęcie z", "placeholder"];
        var hit = null;
        $.each(stopWords, function (index, word) {
            if (textContent.toLowerCase().indexOf(word) >= 0) {
                hit = word;
                return word;
            }
        });
        return hit;
    };

    /*================== QUALITY ASSURANCE MODULE ===================*/

    this.checkQA = function () {
        if (this.showingQA) {
            this.clearEverything();
            this.showingQA = false;
        } else {
            this.outlineQA();
            this.showingQA = true;
        }
    };

    this.outlineQA = function () {

        //Warn users to provide captions for videos.
        let $findVideos = $("video, iframe[src*='youtube.com'], iframe[src*='vimeo.com']");
        $findVideos.each((i, el) => {
            let $el = $(el);
            this.anyWarning = true;
            $el.addClass("sa11y-warning-border");
            MissingCaptionsWarning = "<div class='tippy-heading'>Uwaga</div> Upewnij się, że <span class='sa11y-bold'>wszystkie filmy mają napisy rozszerzone.</span>. Zapewnianie podpisów dla wszystkich treści audio i wideo jest obowiązkowym wymogiem poziomu A. Napisy mają na celu wspieranie osób Głuchych lub słabosłyszących."
            $el.before('<div><button class="sa11y-warning-btn" data-tippy-content="' + MissingCaptionsWarning + '" >' + WarningIcon + '</button></div>');
        });

        //Warning: Make sure all podcasts have captions.
        var soundcloudWarning = $('audio, iframe[src*="soundcloud.com"]');
        if (soundcloudWarning.length > 0) {
            this.anyWarning = true;
            soundcloudWarning.addClass("sa11y-warning-border");
            SoundCloudMessage = "<div class='tippy-heading'>Uwaga</div> Upewnij się, że istnieje <span class='sa11y-bold'>transkrypcja dla wszystkich podcastów.</span>. Zapewnianie transkrypcji treści audio jest obowiązkowym wymogiem poziomu A. Transkrypcje mają na celu wspieranie osób Głuchych lub słabosłyszących, ale każdy może z nich skorzystać. Rozważ umieszczenie transkrypcji poniżej lub w panelu akordeonowym."
            soundcloudWarning.before('<div><button class="sa11y-warning-btn" data-tippy-content="' + SoundCloudMessage + '" >' + WarningIcon + '</button></div>');
        }

        //Warning: Check Google Data Studio widget.
        var dataStudioWarning = $('iframe[src*="datastudio.google.com"]');
        if (dataStudioWarning.length > 0) {
            this.anyWarning = true;
            dataStudioWarning.addClass("sa11y-warning-border");
            dataStudioWarningMessage = "<div class='tippy-heading'>Błąd</div> Widżety Google Data Studio mogą być problematyczne dla osób korzystających z klawiatury do nawigacji i osób, które mają trudności z postrzeganiem treści wizualnych. <span class='sa11y-bold'>Zapewnij alternatywę tekstową</span> bezpośrednio pod ramką Data Studio."
            dataStudioWarning.before('<div><button class="sa11y-warning-btn" data-tippy-content="' + dataStudioWarningMessage + '" >' + WarningIcon + '</button></div>');
        }

        //Warning: Discourage use of Twitter timelines.
        let $twitterWarning = $('[id^=twitter-widget]');
        $twitterWarning.each((i, el) => {
            let $el = $(el);
            var numberofTweets = $el.contents().find(".timeline-TweetList-tweet").length;
            if (numberofTweets > 3) {
                this.anyWarning = true;
                $el.addClass("sa11y-text-warning");
                twittererror = "<div class='tippy-heading'>Uwaga</div> Domyślna oś czasu Twittera może powodować problemy z dostępnością dla użytkowników klawiatury. Pnadto, przewijanie w linii osi czasu Twittera może powodować problemy z użytecznością dla urządzeń mobilnych. Zaleca się dodanie następujących atrybutów danych do osadzającego kodu. <hr aria-hidden='true' class='tippy-tool-hr'><span class='sa11y-bold'>Zaleca się:</span><ul><li>Dodaj <kbd>data-tweet-limit=&#34;2&#34;</kbd>, aby ograniczyć ilość tweetów.</li><li>Add <kbd>data-chrome=&#34;nofooter noheader&#34;</kbd>, aby usunąć nagłówek i stopkę widżetu.</li></ul>"
                $el.before('<div><button class="sa11y-link-warning-btn" data-tippy-content="' + twittererror + '" >' + WarningIcon + '</button></div>');
            }
        });

        // Warn users of TARGET BLANK within main content.
        let $linksTargetBlank = $("a[target='_blank']").not("a[href$='.pdf']").not("a[href$='.docx']").not("#sa11y-container a").not(".sa11y-exclude");
        $linksTargetBlank.each((i, el) => {
            let $el = $(el);

            //Do not add warning if they included new tab or new window within link text.
            var passWordsNewWindow = ["nowa karta", "na nowej karcie", "w nowym oknie", "nowe okno"];
            var containsPassWordsNewWindow = passWordsNewWindow.some(function (pass) {
                return $el.text().toLowerCase().indexOf(pass) >= 0;
            });

            if ($el && !containsPassWordsNewWindow) {
                this.anyWarning = true;
                $el.addClass("sa11y-text-warning");
                WarningNewTab = "<div class='tippy-heading'>Uwaga</div> Oszczędnie używaj <span class='sa11y-bold'>target=&bdquo;_blank&rdquo;</span>. Otwieranie łączy na nowych kartach lub nowych oknach może być bardzo dezorientujące dla ludzi, szczególnie dla osób, które mają trudności z postrzeganiem treści wizualnych. Ponadto, nie zawsze jest dobrą praktyką, aby kontrolować doświadczenie użytkownika lub podejmować decyzje dla nich. Ostrzegaj użytkownika, że łącze zostanie otwarte w nowym oknie w tekście łącza."
                $el.first().after('<div class="sa11y-instance-inline"><button class="sa11y-link-warning-btn" data-tippy-content="' + WarningNewTab + '" >' + WarningIcon + '</button></div>');
            }
        });

        //Error: Find all links pointing to development environment. Customize as needed.
        let $badDevLinks = $("body").find("a[href^='https://www.dev.'], a[href*='wp-admin'], a[href*='administrator']");
        $badDevLinks.each((i, el) => {
            let $el = $(el);
            this.noErrors = false;
            $el.addClass("sa11y-link-text-fail");
            BadLinkMessage = "<div class='tippy-heading'>Błąd</div> Znaleziono podejrzane łącze. Łącze wydaje się wskazywać środowisko programistyczne. Upewnij się, że łącze nie zawiera <em>dev</em>, <em>wp-admin</em> lub <em>administrator</em> w adresie URL. <hr aria-hidden='true' class='tippy-tool-hr'>To łącze wskazuje na: <br><span class='sa11y-bold sa11y-red-text'>" + el + "</span>"
            $el.after('<div class="sa11y-instance-inline"><button class="sa11y-error-text-btn" data-tippy-content="' + BadLinkMessage + '" >' + ErrorIcon + '</button></div>');
        });

        //Warning: Find all PDFs. Although only append warning icon to first PDF on page.
        var checkPDF = $("a[href$='.pdf']");
        let firstPDF = $("a[href$='.pdf']:first");
        if (checkPDF.length > 0) {
            this.anyWarning = true;
            checkPDF.addClass("sa11y-text-warning");
            checkPDF.has("img").removeClass("sa11y-text-warning");
            WarningPDFMessage = "<div class='tippy-heading'>Uwaga</div> Pliki PDF są uważane za treści internetowe i muszą być również dostępne. Jeśli ten plik jest formularzem, rozważ użycie formularzy Google jako dostępnej alternatywy. Jeśli ten plik PDF jest dokumentem, rozważ przekonwertowanie go na stronę internetową. W przeciwnym razie <span class='sa11y-bold'>sprawdź plik pod kątem dostępności w programie Acrobat DC.</span>"
            firstPDF.after('<div class="sa11y-instance-inline"><button class="sa11y-link-warning-btn" data-tippy-content="' + WarningPDFMessage + '" >' + WarningIcon + '</button></div>');
        }

        //Warning: Detect uppercase.
        let $uppercaseDetection = $('h1, h2, h3, h4, h5, h6, p, li:not([class^="sa11y"]), span, blockquote');

        var uppercaseWarning = '<div class="tippy-heading">Uwaga</div> WYKRYTO WSZYSTKIE WIELKIE LITERY. Unikaj wpisywania całych zdań lub fraz WIELKIMI LITERAMI lub KAPITALIKAMI. Niektóre czytniki ekranu interpretują cały tekst wwielkimi literami jako akronim i będą czytać każdą literę odrębnie. Ponadto, wszystkie wielkie litery są trudniejsze do odczytania i sprawiają wrażenie KRZYKU.'

        var uppercasePattern = /(?!<a[^>]*?>)(\b[A-Z]['!:A-Z\s]{15,}|\b[A-Z]{15,}\b)(?![^<]*?<\/a>)/g;

        var replaceUppercase = "<span class='sa11y-uppercase-warning'>$1</span><button class='sa11y-link-warning-btn' data-toggle='popover' title='Warning' data-html='true' data-content='"+uppercaseWarning+"'>" + WarningIcon + "</button>";

        var replaceUppercase = "<span class='sa11y-uppercase-warning'>$1</span><button class='sa11y-link-warning-btn' data-tippy-content='" + uppercaseWarning + "'>"+WarningIcon+"</button>"

        $uppercaseDetection.each(function(){
            $(this).html($(this).html().replace(uppercasePattern,replaceUppercase));
        });

        if ($(".sa11y-uppercase-warning").length > 0) {
          this.anyWarning = true;
        };

        //Check for blockquotes used as headings. If it's less than 25 characters - it's definitely not a quote.
        let $blockquotes = $(this.workingDoc.getElementsByTagName("blockquote"));
        $blockquotes.each((i, el) => {
            let $el = $(el);
            if ($el.text().trim().length < 25) {
                this.noErrors = false;
                $el.addClass("sa11y-error-border")
                BlockquoteError = "<div class='tippy-heading'>Błąd</div> Cytaty blokowe powinny być używane tylko do cytowania. Nigdy nie powinny być używane jako wyróżnienia, np. nagłówki. Należy zastąpić je nagłówkami semantycznymi (np. H2 lub H3)."
                $el.before('<div class="sa11y-instance"><button class="sa11y-error-text-btn" data-tippy-content="' + BlockquoteError + '" >' + ErrorIcon + '</button></div>');
            }
        });

        //Check if a table has a table header.
        let $tablesCheck = $("body").find("table");
        $tablesCheck.each((i, el) => {
            let $el = $(el);
            let findTHeaders = $el.find("th");
            let findHeadingTags = $el.find("h1, h2, h3, h4, h5, h6");
            if (findTHeaders.length == 0) {
                this.noErrors = false;
                $el.addClass("sa11y-error-border");
                MissingHeadingsError = "<div class='tippy-heading'>Błąd</div> Brak nagłówków tabeli! Dostępne tabele wymagają znaczników HTML, które wskazują komórki nagłówków i komórki danych, które definiują ich relację. Informacje te zapewniają kontekst osobom korzystającym z technologii wspomagających. Tabele powinny być używane tylko dla danych tabelarycznych."
                $el.before('<div class="sa11y-instance"><button class="sa11y-error-text-btn" data-tippy-content="' + MissingHeadingsError + '" >' + ErrorIcon + '</button></div>');
            }
            if (findHeadingTags.length > 0) {
                findHeadingTags.addClass("sa11y-headings-fail");
                findHeadingTags.parent().addClass("sa11y-error-border");
                SemanticHeadingTableError = "<div class='tippy-heading'>Błąd</div> Nagłówki semantyczne, takie jak nagłówek H2 lub nagłówek H3, powinny być używane tylko w odniesieniu do sekcji treści; <span class='sa11y-bold'>nie</span> w tabelach HTML. Zamiast tego należy wskazać nagłówki tabeli przy użyciu elementu <span class='sa11y-bold'>th</span>."
                findHeadingTags.before('<div class="sa11y-instance"><button class="sa11y-error-text-btn" data-tippy-content="' + SemanticHeadingTableError + '" >' + ErrorIcon + '</button></div>');
            }
        });

        //Make sure all table headers are not empty.
        let $thCheck = $(this.workingDoc.getElementsByTagName("th"));
        $thCheck.each((i, el) => {
            let $el = $(el);
            if ($el.text().trim().length < 1) {
                $el.addClass("sa11y-error-border");
                EmptyTableHeaderError = "<div class='tippy-heading'>Błąd</div> Znaleziono pusty nagłówek tabeli! Nagłówki tabel nigdy nie powinny być puste. Ważne jest, aby wyznaczyć nagłówki wierszy i/lub kolumn, aby przekazać ich relację. Informacje te zapewniają kontekst osobom korzystającym z technologii wspomagających. Należy pamiętać, że tabele powinny być używane tylko dla danych tabelarycznych."
                $el.append('<div class="sa11y-instance"><button class="sa11y-error-text-btn" data-tippy-content="' + EmptyTableHeaderError + '" >' + ErrorIcon + '</button></div>');
            }
        });

        //Error: Check for duplicate IDs.
        var ids = {};
        var found = false;
        $('[id]').each(function () {
            if (this.id && ids[this.id]) {
                found = true;
                this.noErrors = false;
                $(this).addClass("sa11y-link-text-fail");
                duplicateIDMessage = "<div class='tippy-heading'>Błąd</div> Znaleziono <span class='sa11y-bold'>zduplikowany ID</span>. Duplikaty identyfikatorów powodują znane problemy w technologiach wspomagajacych, gdy próbują wchodzić w interakcje z treścią. <hr aria-hidden='true' class='tippy-tool-hr'>Usuń lub zmień następujący ID: <span class='sa11y-bold sa11y-red-text'>" + this.id + "</span>"
                $(this).before('<div class="sa11y-instance-inline"><button class="sa11y-error-text-btn" data-tippy-content="' + duplicateIDMessage + '" >' + ErrorIcon + '</button></div>');
            }
            ids[this.id] = 1;
        });

        //Error: Missing language tag. Lang should be at least 2 characters.
        var lang = $("html").attr("lang");
        if ($("html").attr("lang") == undefined || $("html").attr("lang").length < 2) {
            this.noErrors = false;
            $('#sa11y-container').after("<div class='sa11y-error-message'>" + ErrorIcon + "<br> Język strony nie zadeklarowany! <a href='https://www.w3.org/International/questions/qa-html-language-declarations' target='_blank'>Zadeklaruj język w znaczniku HTML.<span class='sr-only'>(otwiera nowe okno)</span></a></div>");
        }

        //Error: Never set user-scalable to 0.
        var userScalable = $("meta").attr("user-scalable");
        if (userScalable == "no" || userScalable == "0" || $("meta[content~='user-scalable=no']").length > 0) {
            this.noErrors = false;
            $('#sa11y-container').after("<div class='sa11y-error-message'>" + ErrorIcon + "<br> Usuń parametr <span class='sa11y-bold'>user-scalable=&quot;no&quot;</span> z elementu meta, aby umożliwić powiększanie. Może to być bardzo problematyczne dla osób słabowidzących!</div>");
        }

        //Example: A really simply test case to see if a component is used more than once. Delete or change class.
        var checkAnnouncement = $('.announcement-component').length;
        if (checkAnnouncement > 1) {
            this.anyWarning = true;
            WarningMessageAnnounce = "<div class='tippy-heading'>Uwaga</div> Więcej niż jeden komponent <strong>komponent Powiadomienia</strong>! Komponent Powiadomienia powinien być używany strategicznie i oszczędnie. Powinien być używany, aby zwrócić uwagę lub ostrzec użytkowników o czymś ważnym. Niewłaściwe użycie tego składnika sprawia, że jest mniej wydajny i skuteczny. Ten komponent jest semantycznie oznaczony jako Powiadomienia dla osób korzystających z czytników ekranu.."
            $('.announcement-component:gt(0)').addClass("sa11y-warning-border");
            $('.announcement-component:gt(0)').before('<div class="sa11y-instance"><button class="sa11y-link-warning-btn" data-tippy-content="' + WarningMessageAnnounce + '" >' + WarningIcon + '</button></div>');
        }
    }

    /*========================== Styling ============================*/
    var style = document.createElement('style');
    style.innerHTML = '#sa11y-container, #sa11y-container *{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"FontAwesome",sans-serif!important;line-height:23px!important;}button.sa11y-error-btn{font-size:0!important;width:50px!important;height:50px!important;border-radius:50%!important;position:absolute!important;margin:10px!important;z-index:8888!important;border:1px solid #d30017!important;display:inline-flex!important;padding:12px!important;vertical-align:middle!important;background-color:#d30017!important;background:#d30017!important;cursor:pointer!important;-moz-box-shadow:0 0 16px 0 #0000004f!important;-webkit-box-shadow:0 0 16px 0 #0000004f!important;box-shadow:0 0 16px 0 #0000004f!important;transition:all .2s ease-in-out!important;min-width:0!important}button.sa11y-error-btn:hover,button.sa11y-error-btn:focus{background-color:#ff0000!important}button.sa11y-error-btn:focus{box-shadow:inset 0 0 0 2px #d30017!important;-moz-box-shadow:inset 0 0 0 2px #d30017!important;-webkit-box-shadow:inset 0 0 0 2px #d30017!important;}button.sa11y-pass-btn{font-size:0!important;width:50px!important;height:50px!important;border-radius:50%!important;border: 1px solid #36844e!important;margin:10px!important;position:absolute!important;z-index:8888!important;padding:12px!important;vertical-align:middle!important;background-color:#36844e!important;background:#36844e!important;cursor:pointer!important;-webkit-box-shadow:0 0 16px 0 #0000004f!important;-moz-box-shadow:0 0 16px 0 #0000004f!important;box-shadow:0 0 16px 0 #0000004f!important;transition:all .2s ease-in-out!important;min-width:0!important}button.sa11y-text-pass-btn{font-size:0!important;width:50px!important;height:50px!important;border-radius:50%!important;border:none!important;position:absolute!important;margin:-30px 10px!important;z-index:8888!important;padding:12px!important;vertical-align:middle!important;background-color:#36844e!important;background:#36844e!important;cursor:pointer!important;-webkit-box-shadow:0 0 16px 0 #0000004f!important;-moz-box-shadow:0 0 16px 0 #0000004f!important;box-shadow:0 0 16px 0 #0000004f!important;transition:all .2s ease-in-out!important;min-width:0!important}button.sa11y-text-pass-btn:hover,button.sa11y-pass-btn:hover,button.sa11y-pass-btn:focus,button.sa11y-text-pass-btn:focus{background-color:#38a459!important}button.sa11y-pass-btn:focus,button.sa11y-text-pass-btn:focus{box-shadow:inset 0 0 0 2px #36844e!important;-moz-box-shadow:inset 0 0 0 2px #36844e!important;-webkit-box-shadow:inset 0 0 0 2px #36844e!important;}button.sa11y-warning-btn{font-size:0!important;margin:10px!important;padding:10px!important;width:50px!important;height:50px!important;border-radius:50%!important;border: 1px solid #ffc800!important;important;position:absolute!important;z-index:8888!important;vertical-align:middle!important;background-color:#ffc800!important;background:#ffc800!important;-moz-box-shadow:0 0 16px 0 #0000004f!important;-webkit-box-shadow:0 0 16px 0 #0000004f!important;box-shadow:0 0 16px 0 #0000004f!important;cursor:pointer!important;transition:all .2s ease-in-out!important;min-width:0!important}button.sa11y-warning-btn:focus,button.sa11y-warning-btn:hover{background-color:#ffd042!important}button.sa11y-warning-btn:focus{box-shadow:inset 0 0 0 2px #ffc800!important;-moz-box-shadow:inset 0 0 0 2px #ffc800!important;-webkit-box-shadow:inset 0 0 0 2px #ffc800!important;}button.sa11y-link-warning-btn{font-size:0!important;padding:0px!important;width:50px!important;height:50px!important;border-radius:50%!important;border:1px solid #ffc800!important;position:absolute!important;margin:-30px 10px!important;z-index:8888!important;vertical-align:middle!important;background-color:#ffc800!important;background:#ffc800!important;-moz-box-shadow:0 0 16px 0 #0000004f!important;-webkit-box-shadow:0 0 16px 0 #0000004f!important;box-shadow:0 0 16px 0 #0000004f!important;cursor:pointer!important;transition:all .2s ease-in-out!important;min-width:0!important}button.sa11y-link-warning-btn:focus,button.sa11y-link-warning-btn:hover{background-color:#ffd226!important}button.sa11y-link-warning-btn:focus{box-shadow:inset 0 0 0 2px #ffc800!important;-moz-box-shadow:inset 0 0 0 2px #ffc800!important;-webkit-box-shadow:inset 0 0 0 2px #ffc800!important;}button.sa11y-error-text-btn{font-size:0!important;width:50px!important;height:50px!important;margin:-30px 10px!important;border-radius:50%!important;border:1px solid #d30017!important;position:absolute!important;z-index:8888!important;padding:0px!important;vertical-align:middle!important;background-color:#d30017!important;background:#d30017!important;cursor:pointer!important;-moz-box-shadow:0 0 16px 0 #0000004f!important;-webkit-box-shadow:0 0 16px 0 #0000004f!important;box-shadow:0 0 16px 0 #0000004f!important;transition:all .2s ease-in-out!important;min-width:0!important}button.sa11y-error-text-btn:hover,button.sa11y-error-text-btn:focus{background-color:#ff0000!important}button.sa11y-error-text-btn:focus{box-shadow:inset 0 0 0 2px #d30017!important;-moz-box-shadow:inset 0 0 0 2px #d30017!important;-webkit-box-shadow:inset 0 0 0 2px #d30017!important;}.sa11y-headings-fail{color:#c22326!important}.sa11y-error-border{outline:5px solid #c22326!important;}.sa11y-link-text-fail{background-color:#c22326!important;border-radius:0.25em!important;padding:5px!important;color:white!important}.sa11y-text-warning,.sa11y-uppercase-warning{color:black!important;background-color:#ffc800!important;border-radius:0.25em!important;padding:5px!important}.sa11y-warning-border{outline:5px solid #ffc800!important;}#sa11y-container svg,.sa11y-link-warning-btn svg{overflow:hidden!important;vertical-align:middle!important}#sa11y-container .sa11y-panel{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;z-index:8890;background:#fff;box-shadow:0 0 20px 4px rgba(154,161,177,.15),0 4px 80px -8px rgba(36,40,47,.25),0 4px 4px -2px rgba(91,94,105,.15);position:fixed;bottom:60px;right:55px;width:310px;text-align:left!important;overflow:hidden;transform:scale(0);transform-origin:100% 100%;border-radius:.25em;opacity:0;transition:transform .2s,opacity .2s}#sa11y-container .sa11y-panel a{text-decoration:underline!important;color:#004c9b!important;border-bottom:0px!important}#sa11y-container .sa11y-panel a:hover,#sa11y-container .sa11y-panel a:focus{text-decoration:none!important}#sa11y-container .sa11y-panel.sa11y-active{height:auto;opacity:1;visibility:visible;transform:scale(1);transition:transform .2s,opacity .2s}#sa11y-container .sa11y-panel-header{padding:15px 15px 15px 15px!important;color:#333333!important;line-height:22px!important}#sa11y-container .sa11y-outline-header{padding:10px 15px 0 15px!important;color:#4d4d4d!important;line-height:22px!important}.sa11y-bold{font-weight:700!important}#page-outline-header{font-size:16px!important}#sa11y-no-errors,#sa11y-warnings,#sa11y-errors-found,#sa11y-page-outline{opacity:0;display:none}#sa11y-no-errors.sa11y-active,#sa11y-warnings.sa11y-active,#sa11y-errors-found.sa11y-active,#sa11y-page-outline.sa11y-active,#sa11y-summary-toggle.sa11y-active{opacity:1;display:table}#sa11y-page-outline{padding-bottom:0px!important;width:100%;transition:all .60s ease}#sa11y-container .sa11y-th-img svg{margin:5px 15px 0 0}#sa11y-container .sa11y-hide-native-checkbox{position:fixed;bottom:45px;right:30px;width:1px;height:1px;overflow:hidden;margin:0;padding:0;border:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);opacity:0}#sa11y-container .sa11y-main-toggle-style{position:fixed!important;bottom:50px!important;right:30px!important;background-image:linear-gradient(to top, #E040FB, #00BCD4)!important;background-size: 150% 150%!important;color:#fff!important;border-radius:50px!important;box-shadow:2px 2px 20px #0000005c!important;-moz-box-shadow:2px 2px 20px #0000005c!important;-webkit-box-shadow:2px 2px 20px #0000005c!important;cursor:pointer!important;padding:10px!important;margin:0px!important;z-index:99999!important;transition:all .2s ease-in-out}#sa11y-container .sa11y-main-toggle-style:hover{-webkit-animation:sa11y-toggle-gradient 3s ease;-moz-animation:sa11y-toggle-gradient 3s ease;animation:sa11y-toggle-gradient 3s ease;}#sa11y-container .sa11y-toggle-active{background-image:linear-gradient(to bottom, #E040FB, #00BCD4)!important;}label.sa11y-main-toggle-style:after{content:none!important;}#sa11y-container .allytogglefocus{transform:scale(1.09);background-image:linear-gradient(to bottom, #E040FB, #00BCD4)!important;}.sa11y-warning-message{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;font-size:16px!important;padding:15px;background-color:#ffc802;text-align:center;color:#4b4b4b;border-radius:0em!important}.sa11y-error-message{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;font-size:16px!important;padding:15px;background-color:#c22326!important;text-align:center;color:#fff}.sa11y-error-message a{color:#fff!important;text-decoration:underline!important;border:0!important}.sa11y-error-message a:hover,.sa11y-error-message a:focus{text-decoration:none!important}.sa11y-pass-message{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;font-size:16px!important;padding:15px;background-color:#35844e;text-align:center;color:#fff;border-radius:0em!important}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}100%{border:4px solid rgba(255,255,255,.05)}}@keyframes rotate{0%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}100%{border:4px solid rgba(255,255,255,.05)}}#sa11y-container .loading-spinner:before{content:"";position:absolute;display:inline-block;box-sizing:border-box;width:100%;height:100%;border-radius:50%;margin:-10px;border:4px solid rgba(255,255,255,.9);border-top:4px solid transparent;border-bottom:4px solid transparent;-webkit-animation:rotate 2s ease;animation:rotate 2s ease;animation-fill-mode:forwards}.sr-only{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden;display:block;white-space:nowrap;clip-path:inset(50%)}#sa11y-container .sa11y-td-msg{vertical-align:middle;display:table-cell;font-size:16px!important}#sa11y-container .sa11y-th-img{vertical-align:middle;display:table-cell}.sa11y-red-text,.sa11y-red-text strong{color:#ba0013!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;font-size:15px!important}#sa11y-outline-list .sa11y-outline-2{margin-left:15px!important}#sa11y-outline-list .sa11y-outline-3{margin-left:30px!important}#sa11y-outline-list .sa11y-outline-4{margin-left:45px!important}#sa11y-outline-list .sa11y-outline-5{margin-left:60px!important}.sa11y-outline-6{margin-left:75px!important}#sa11y-outline-list{list-style-type:none!important;margin:0!important;padding:0 0 10px 0px!important;outline:0!important;max-height:350px!important;overflow-y:auto!important;border-bottom:1px solid #dbdbdbbf!important}#sa11y-outline-list li,#sa11y-outline-list ul{padding:0!important;font-size:15px!important;margin-bottom:0px!important;margin-top:0px!important;}::-webkit-scrollbar{-webkit-appearance:none;width:7px}::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(0,0,0,.5);-webkit-box-shadow:0 0 1px rgba(255,255,255,.5)}#sa11y-summary-toggle{opacity:0;display:none;border-radius:0!important;background-color:#f6f6f6!important;background:#f6f6f6!important;width:100%!important;padding:0px!important;margin:0px!important;color:#4d4d4d!important;font-size:15px!important;border-bottom:0!important;border-top:1px solid #d7d7d7!important;border-left:0!important;border-right:0!important;outline:0!important;cursor:pointer!important;font-weight:400!important;height:30px!important;line-height:0!important}button#sa11y-summary-toggle:focus,button#sa11y-summary-toggle:hover{box-shadow:inset 0 0 6px #0077C8;background:#e1e1e1}.sa11y-btn-active{box-shadow:inset 0 0 5px #0000002e}.sa11y-popover-toggle{display:inline-block}span.sa11y-headings-label{font-size: 15px!important;padding: 3px!important;border-radius: 3px!important;position: absolute!important;background-color: #777678!important;background-image: linear-gradient(to bottom right, #b629ce, #16aec2);color: white!important;margin: -5px 0 0 5px!important;font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial, "FontAwesome",sans-serif!important;}@-webkit-keyframes sa11y-toggle-gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}100%{background-position:50% 0%}}@-moz-keyframes sa11y-toggle-gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}100%{background-position:50% 0%}}@keyframes sa11y-toggle-gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}100%{background-position:50% 0%}}@media (prefers-reduced-motion: reduce){#sa11y-container > *{animation: none;}}';
    $('head').prepend(style);

    /* Custom Tippy Style */
    var tippystyle = document.createElement('style');
    tippystyle.innerHTML = ".tippy-box *{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif!important}.tippy-box[data-theme~='sa11y-theme']{background-color:white!important;color:#333333!important;padding:8px!important;font-size:15px!important;box-shadow: 0 0 20px 4px rgba(154, 161, 177, 0.15),0 4px 80px -8px rgba(36, 40, 47, 0.25),0 4px 4px -2px rgba(91, 94, 105, 0.15)!important;font-weight: normal!important;}.tippy-heading{font-size:17px!important;font-weight:600!important;}.tippy-box[data-theme~='sa11y-theme'][data-placement^='top']>.tippy-arrow::before{border-top-color:white}.tippy-box[data-theme~='sa11y-theme'][data-placement^='bottom']>.tippy-arrow::before{border-bottom-color:white}.tippy-box[data-theme~='sa11y-theme'][data-placement^='left']>.tippy-arrow::before{border-left-color:white}.tippy-box[data-theme~='sa11y-theme'][data-placement^='right']>.tippy-arrow::before{border-right-color:white}.sa11y-instance-inline{text-align:left!important;display:inline-block!important}";
    $('head').prepend(tippystyle);

    //Add focus state to main toggle button to accommodate custom checkbox button.
    $('input#sa11y-checkbox').on("focus", function () {
        var allyCheckInput = $(this);
        var allyLabelClass = $('.sa11y-main-toggle-style')
        allyLabelClass.addClass('allytogglefocus');
        allyCheckInput.on("blur", function () {
            allyLabelClass.removeClass('allytogglefocus');
            allyCheckInput.off("blur");
        });
    });

} //End of function sa11y()

/*========================== License ============================*/
/* MIT License (MIT)
Copyright (c) 2020 Ryerson University

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

View full license & acknowledgements: https://github.com/ryersondmp/sa11y/blob/master/LICENSE.md */
