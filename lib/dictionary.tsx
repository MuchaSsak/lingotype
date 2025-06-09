import React from "react";
import Link from "next/link";

import { WEBSITE_MONKEYTYPE } from "@/lib/constants";
import {
  GITHUB_MATEUSZ_PROFILE_LINK,
  GITHUB_FABIAN_PROFILE_LINK,
} from "@/lib/constants";

export type LanguageLocale = keyof typeof DICTIONARY;

type AvailableLanguage = {
  value: LanguageLocale;
  label: string;
  Icon?: React.ReactNode;
};

export const AVAILABLE_LANGUAGES: AvailableLanguage[] = [
  {
    value: "en",
    label: "English",
    Icon: "🇬🇧",
  },
  {
    value: "es",
    label: "Spanish (Español)",
    Icon: "🇪🇸",
  },
  {
    value: "pl",
    label: "Polish (Polski)",
    Icon: "🇵🇱",
  },
];

export const DICTIONARY = {
  en: {
    endless: "endless",
    "random order": "random order",
    translation: "translation",
    "case sensitive": "case sensitive",
    "all characters": "all characters",
    "New list": "New list",
    "Sign in": "Sign in",
    Search: "Search",
    "Couldn't find results": "Couldn't find results",
    "You have no custom lists!": "You have no custom lists!",
    language: "language",
    "Reset game": "Reset game",
    "Couldn't find any words list": "Couldn't find any words list",
    words: "words",
    word: "word",
    "Information about this application": "Information about this application",
    "Okay!": "Okay!",
    "Do you want to clear your browser application data?":
      "Do you want to clear your browser application data?",
    Cancel: "Cancel",
    "Clear all": "Clear all",
    "Create a new words list": "Create a new words list",
    Greetings: "Greetings",
    Name: "Name",
    "Name must have at least 1 character.":
      "Name must have at least 1 character.",
    "Name cannot exceed 50 characters.": "Name cannot exceed 50 characters.",
    "Words list must have at least 4 characters.":
      "Words list must have at least 4 characters.",
    "Words list cannot exceed 1000 characters.":
      "Words list cannot exceed 1000 characters.",
    Edit: "Edit",
    Delete: "Delete",
    Hello: "Hello",
    "See you later": "See you later",
    "Good morning": "Good morning",
    "This action cannot be undone.": "This action cannot be undone.",
    "Are you sure you want to delete this words list?":
      "Are you sure you want to delete this words list?",
    "Edit list": "Edit list",
    "Words list": "Words list",
    "Save changes": "Save changes",
    info: "info",
    storage: "storage",
    wordsListFormat: (
      <>
        <span>Remember to use the proper format! Example:</span>
        <code className="bg-secondary">
          [Hervir] Hiervo Hierves Hierve Hervimos Hervís Hierven, To boil;
          Pelar, To peel; Los platos, Plates; El vaso, Glass;
        </code>
        <span>
          Each word/s and its translation must be seperated with a{" "}
          <b>comma (,)</b> and then the very next word/s by a{" "}
          <b>semicolon (;)</b>. White space is optional.
        </span>
      </>
    ),
    footerStorageDialog: (
      <>
        <span>
          This action cannot be undone. This will permanently delete your local
          browser storage and therefore potentially remove all of your data
          (e.g. words lists, statistics etc.).
        </span>
        <span>
          If you're signed in however, your data will still stay in our
          database.
        </span>
      </>
    ),
    footerMadeBy: (
      <>
        Made by{" "}
        <Link
          href={GITHUB_MATEUSZ_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Matthew
        </Link>{" "}
        and{" "}
        <Link
          href={GITHUB_FABIAN_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Fabian
        </Link>{" "}
        with ❤️
      </>
    ),
    footerInfo: (
      <>
        <span>
          This application's whole design and idea is heavily inspired by{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            monkeytype.com
          </Link>
          .
        </span>
        <span>
          The project is not supposed to be a competition to them. It still
          differs. I just wanted to create something cool and useful mostly for
          myself, however potentially for other people as well, of course.
        </span>

        <span>
          I do realize that using this app may be not the most comfortable for
          the majority of people, but it goes well with using{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            quizlet.com
          </Link>{" "}
          and its flashcards — hence the specific words lists format. You can
          quickly export your flashcards as text and put them here for
          vocabulary reinforcement.
        </span>

        <span className="flex flex-col">
          <span>All being said, I hope you enjoy the experience!</span>
          <span className="ml-auto">- Matthew 💖</span>
        </span>
      </>
    ),
  },
  pl: {
    endless: "bez końca",
    "random order": "losowa kolejność",
    translation: "tłumaczenie",
    "case sensitive": "rozróżnianie wielkości liter",
    "all characters": "wszystkie znaki",
    "New list": "Nowa lista",
    "Sign in": "Zaloguj się",
    Search: "Szukaj",
    "Couldn't find results": "Nie znaleziono wyników",
    "You have no custom lists!": "Nie masz swoich list!",
    language: "język",
    "Reset game": "Zresetuj grę",
    "Couldn't find any words list": "Nie znaleziono żadnej listy słów",
    words: "słów",
    word: "słowo",
    "Information about this application": "Informacje o tej aplikacji",
    "Okay!": "Okej!",
    "Do you want to clear your browser application data?":
      "Czy chcesz wyczyścić swoje dane przeglądarkowe tej aplikacji?",
    Cancel: "Anuluj",
    "Clear all": "Wyczyść wszystko",
    "Create a new words list": "Stwórz nową listę słów",
    Greetings: "Przywitania",
    Name: "Nazwa",
    "Name must have at least 1 character.":
      "Nazwa musi mieć conajmniej 1 znak.",
    "Name cannot exceed 50 characters.":
      "Nazwa nie może mieć więcej niż 50 znaków.",
    "Words list must have at least 4 characters.":
      "Lista słów musi mieć conajmniej 4 znaki.",
    "Words list cannot exceed 1000 characters.":
      "Lista słów nie może mieć więcej niż 1000 znaków.",
    "Edit list": "Edytuj listę",
    "Words list": "Lista słów",
    Hello: "Cześć",
    "See you later": "Widzimy się później",
    "Good morning": "Dzień dobry",
    Edit: "Edytuj",
    Delete: "Usuń",
    "This action cannot be undone.": "Ta akcja nie może zostać odwrócona.",
    "Are you sure you want to delete this words list?":
      "Czy napewno chcesz usunąć tę listę słów?",
    "Save changes": "Zapisz zmiany",
    info: "informacje",
    storage: "magazyn",
    wordsListFormat: (
      <>
        <span>Pamiętaj użyć poprawnego formatu! Przykład:</span>
        <code className="bg-secondary">
          [Hervir] Hiervo Hierves Hierve Hervimos Hervís Hierven, Wrzeć; Pelar,
          Obierać; Los platos, Talerze; El vaso, Szklanka;
        </code>
        <span>
          Każde słowo/a musi być oddzielane <b>przecinkiem (,)</b> i potem
          następne słowo/a <b>średnikiem (;)</b>. Spacje są opcjonalne.
        </span>
      </>
    ),
    footerStorageDialog: (
      <>
        <span>
          Ta akcja nie może zostać odwrócona. Ona pernametnie usunie twój
          lokalny magazyn aplikacji w związku z tym potencjalnie usunie
          wszystkie twoje dane (np. listy słów, statystyki itp.).
        </span>
        <span>
          Aczkolwiek jeżeli jesteś zalogowany, twoje dane nadal będą w naszej
          bazie danych.
        </span>
      </>
    ),
    footerMadeBy: (
      <>
        Zrobione przez{" "}
        <Link
          href={GITHUB_MATEUSZ_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Mateusza
        </Link>{" "}
        i{" "}
        <Link
          href={GITHUB_FABIAN_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Fabiana
        </Link>{" "}
        z ❤️
      </>
    ),
    footerInfo: (
      <>
        <span>
          Cały projekt oraz pomysł tej aplikacji jest bardzo inspirowany przez{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            monkeytype.com
          </Link>
          .
        </span>
        <span>
          Ta aplikacja nie ma być żadną konkurencją dla nich. Wciąż się różni.
          Tylko chciałem zrobić coś fajnego i głównie użytecznego dla siebie,
          lecz oczywiście potencjalnie dla innych także.
        </span>

        <span>
          Zdaję sobie sprawę że używanie tej aplikacji może nie być najbardziej
          komfortowe dla większości ludzi, ale dobrze ona współpracuje z{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            quizlet.com
          </Link>{" "}
          i ich fiszkami — dlatego format list słów jest taki specyficzny.
          Możesz szybko wyeksportować swoje fiszki jako tekst i wrzucić je tutaj
          aby ćwiczyć swoje słownictwo.
        </span>

        <span className="flex flex-col">
          <span>
            Po za tym wszystkim, mam nadzieję że spodoba ci się to
            doświadczenie!
          </span>
          <span className="ml-auto">- Mateusz 💖</span>
        </span>
      </>
    ),
  },
  es: {
    endless: "infinito",
    "random order": "orden aleatorio",
    translation: "traducción",
    "case sensitive": "sensible a mayúsculas y minúsculas",
    "all characters": "todos los caracteres",
    "New list": "Nueva lista",
    "Sign in": "Iniciar sesión",
    Search: "Buscar",
    "Couldn't find results": "No se encontraron resultados",
    "You have no custom lists!": "¡No tienes listas personalizadas!",
    language: "idioma",
    "Reset game": "Reiniciar juego",
    "Couldn't find any words list": "No se encontró ninguna lista de palabras",
    words: "palabras",
    word: "palabra",
    "Information about this application": "Información sobre esta aplicación",
    "Okay!": "¡Vale!",
    "Do you want to clear your browser application data?":
      "¿Quieres borrar los datos de la aplicación del navegador?",
    Cancel: "Cancelar",
    "Clear all": "Borrar todo",
    "Create a new words list": "Crear una nueva lista de palabras",
    Greetings: "Saludos",
    Name: "Nombre",
    Hello: "Hola",
    "See you later": "Hasta luego",
    "Good morning": "Buenos días",
    "Name must have at least 1 character.":
      "El nombre debe tener al menos 1 carácter.",
    "Name cannot exceed 50 characters.":
      "El nombre no puede superar los 50 caracteres.",
    "Words list must have at least 4 characters.":
      "La lista de palabras debe tener al menos 4 caracteres.",
    "Words list cannot exceed 1000 characters.":
      "La lista de palabras no puede superar los 1000 caracteres.",
    Edit: "Editar",
    Delete: "Eliminar",
    "This action cannot be undone.": "Esta acción no se puede deshacer.",
    "Are you sure you want to delete this words list?":
      "¿Estás seguro de que deseas eliminar esta lista de palabras?",
    "Edit list": "Editar lista",
    "Words list": "Lista de palabras",
    "Save changes": "Guardar cambios",
    info: "información",
    storage: "almacenamiento",
    wordsListFormat: (
      <>
        <span>¡Recuerda usar el formato correcto! Ejemplo:</span>
        <code className="bg-secondary">
          [Hervir] Hiervo Hierves Hierve Hervimos Hervís Hierven, To boil;
          Pelar, To peel; Los platos, Plates; El vaso, Glass;
        </code>
        <span>
          Cada palabra y su traducción deben separarse con una <b>coma (,)</b> y
          luego la siguiente palabra con un <b>punto y coma (;)</b>. Los
          espacios en blanco son opcionales.
        </span>
      </>
    ),
    footerStorageDialog: (
      <>
        <span>
          Esta acción no se puede deshacer. Esto eliminará permanentemente el
          almacenamiento local del navegador y podría borrar todos tus datos
          (por ejemplo, listas de palabras, estadísticas, etc.).
        </span>
        <span>
          Sin embargo, si has iniciado sesión, tus datos permanecerán en nuestra
          base de datos.
        </span>
      </>
    ),
    footerMadeBy: (
      <>
        Hecho por{" "}
        <Link
          href={GITHUB_MATEUSZ_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Mateo
        </Link>{" "}
        y{" "}
        <Link
          href={GITHUB_FABIAN_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Fabián
        </Link>{" "}
        con ❤️
      </>
    ),
    footerInfo: (
      <>
        <span>
          Todo el diseño e idea de esta aplicación está fuertemente inspirado
          por{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            monkeytype.com
          </Link>
          .
        </span>
        <span>
          El proyecto no pretende ser una competencia para ellos. Sigue siendo
          diferente. Solo quería crear algo útil y divertido principalmente para
          mí mismo, aunque, por supuesto, también podría servirle a otras
          personas.
        </span>

        <span>
          Sé que usar esta aplicación puede no ser lo más cómodo para la mayoría
          de las personas, pero funciona bien junto con{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            quizlet.com
          </Link>{" "}
          y sus tarjetas — de ahí el formato específico de las listas de
          palabras. Puedes exportar rápidamente tus tarjetas como texto y
          pegarlas aquí para reforzar tu vocabulario.
        </span>

        <span className="flex flex-col">
          <span>¡Dicho todo esto, espero que disfrutes la experiencia!</span>
          <span className="ml-auto">- Mateo 💖</span>
        </span>
      </>
    ),
  },
};

// prettier-ignore
export const LOCALES = ["af", "af-NA", "af-ZA", "agq", "agq-CM", "ak", "ak-GH", "am",
    "am-ET", "ar", "ar-001", "ar-AE", "ar-BH", "ar-DJ", "ar-DZ",
    "ar-EG", "ar-EH", "ar-ER", "ar-IL", "ar-IQ", "ar-JO", "ar-KM",
    "ar-KW", "ar-LB", "ar-LY", "ar-MA", "ar-MR", "ar-OM", "ar-PS",
    "ar-QA", "ar-SA", "ar-SD", "ar-SO", "ar-SS", "ar-SY", "ar-TD",
    "ar-TN", "ar-YE", "as", "as-IN", "asa", "asa-TZ", "ast", "ast-ES",
    "az", "az-Cyrl", "az-Cyrl-AZ", "az-Latn", "az-Latn-AZ", "bas",
    "bas-CM", "be", "be-BY", "bem", "bem-ZM", "bez", "bez-TZ", "bg",
    "bg-BG", "bm", "bm-ML", "bn", "bn-BD", "bn-IN", "bo", "bo-CN",
    "bo-IN", "br", "br-FR", "brx", "brx-IN", "bs", "bs-Cyrl",
    "bs-Cyrl-BA", "bs-Latn", "bs-Latn-BA", "ca", "ca-AD", "ca-ES",
    "ca-FR", "ca-IT", "ccp", "ccp-BD", "ccp-IN", "ce", "ce-RU", "cgg",
    "cgg-UG", "chr", "chr-US", "ckb", "ckb-IQ", "ckb-IR", "cs",
    "cs-CZ", "cy", "cy-GB", "da", "da-DK", "da-GL", "dav", "dav-KE",
    "de", "de-AT", "de-BE", "de-CH", "de-DE", "de-IT", "de-LI",
    "de-LU", "dje", "dje-NE", "dsb", "dsb-DE", "dua", "dua-CM", "dyo",
    "dyo-SN", "dz", "dz-BT", "ebu", "ebu-KE", "ee", "ee-GH", "ee-TG",
    "el", "el-CY", "el-GR", "en", "en-001", "en-150", "en-AG",
    "en-AI", "en-AS", "en-AT", "en-AU", "en-BB", "en-BE", "en-BI",
    "en-BM", "en-BS", "en-BW", "en-BZ", "en-CA", "en-CC", "en-CH",
    "en-CK", "en-CM", "en-CX", "en-CY", "en-DE", "en-DG", "en-DK",
    "en-DM", "en-ER", "en-FI", "en-FJ", "en-FK", "en-FM", "en-GB",
    "en-GD", "en-GG", "en-GH", "en-GI", "en-GM", "en-GU", "en-GY",
    "en-HK", "en-IE", "en-IL", "en-IM", "en-IN", "en-IO", "en-JE",
    "en-JM", "en-KE", "en-KI", "en-KN", "en-KY", "en-LC", "en-LR",
    "en-LS", "en-MG", "en-MH", "en-MO", "en-MP", "en-MS", "en-MT",
    "en-MU", "en-MW", "en-MY", "en-NA", "en-NF", "en-NG", "en-NL",
    "en-NR", "en-NU", "en-NZ", "en-PG", "en-PH", "en-PK", "en-PN",
    "en-PR", "en-PW", "en-RW", "en-SB", "en-SC", "en-SD", "en-SE",
    "en-SG", "en-SH", "en-SI", "en-SL", "en-SS", "en-SX", "en-SZ",
    "en-TC", "en-TK", "en-TO", "en-TT", "en-TV", "en-TZ", "en-UG",
    "en-UM", "en-US", "en-US-POSIX", "en-VC", "en-VG", "en-VI",
    "en-VU", "en-WS", "en-ZA", "en-ZM", "en-ZW", "eo", "es", "es-419",
    "es-AR", "es-BO", "es-BR", "es-BZ", "es-CL", "es-CO", "es-CR",
    "es-CU", "es-DO", "es-EA", "es-EC", "es-ES", "es-GQ", "es-GT",
    "es-HN", "es-IC", "es-MX", "es-NI", "es-PA", "es-PE", "es-PH",
    "es-PR", "es-PY", "es-SV", "es-US", "es-UY", "es-VE", "et",
    "et-EE", "eu", "eu-ES", "ewo", "ewo-CM", "fa", "fa-AF", "fa-IR",
    "ff", "ff-CM", "ff-GN", "ff-MR", "ff-SN", "fi", "fi-FI", "fil",
    "fil-PH", "fo", "fo-DK", "fo-FO", "fr", "fr-BE", "fr-BF", "fr-BI",
    "fr-BJ", "fr-BL", "fr-CA", "fr-CD", "fr-CF", "fr-CG", "fr-CH",
    "fr-CI", "fr-CM", "fr-DJ", "fr-DZ", "fr-FR", "fr-GA", "fr-GF",
    "fr-GN", "fr-GP", "fr-GQ", "fr-HT", "fr-KM", "fr-LU", "fr-MA",
    "fr-MC", "fr-MF", "fr-MG", "fr-ML", "fr-MQ", "fr-MR", "fr-MU",
    "fr-NC", "fr-NE", "fr-PF", "fr-PM", "fr-RE", "fr-RW", "fr-SC",
    "fr-SN", "fr-SY", "fr-TD", "fr-TG", "fr-TN", "fr-VU", "fr-WF",
    "fr-YT", "fur", "fur-IT", "fy", "fy-NL", "ga", "ga-IE", "gd",
    "gd-GB", "gl", "gl-ES", "gsw", "gsw-CH", "gsw-FR", "gsw-LI", "gu",
    "gu-IN", "guz", "guz-KE", "gv", "gv-IM", "ha", "ha-GH", "ha-NE",
    "ha-NG", "haw", "haw-US", "he", "he-IL", "hi", "hi-IN", "hr",
    "hr-BA", "hr-HR", "hsb", "hsb-DE", "hu", "hu-HU", "hy", "hy-AM",
    "id", "id-ID", "ig", "ig-NG", "ii", "ii-CN", "is", "is-IS", "it",
    "it-CH", "it-IT", "it-SM", "it-VA", "ja", "ja-JP", "jgo",
    "jgo-CM", "jmc", "jmc-TZ", "ka", "ka-GE", "kab", "kab-DZ", "kam",
    "kam-KE", "kde", "kde-TZ", "kea", "kea-CV", "khq", "khq-ML", "ki",
    "ki-KE", "kk", "kk-KZ", "kkj", "kkj-CM", "kl", "kl-GL", "kln",
    "kln-KE", "km", "km-KH", "kn", "kn-IN", "ko", "ko-KP", "ko-KR",
    "kok", "kok-IN", "ks", "ks-IN", "ksb", "ksb-TZ", "ksf", "ksf-CM",
    "ksh", "ksh-DE", "kw", "kw-GB", "ky", "ky-KG", "lag", "lag-TZ",
    "lb", "lb-LU", "lg", "lg-UG", "lkt", "lkt-US", "ln", "ln-AO",
    "ln-CD", "ln-CF", "ln-CG", "lo", "lo-LA", "lrc", "lrc-IQ",
    "lrc-IR", "lt", "lt-LT", "lu", "lu-CD", "luo", "luo-KE", "luy",
    "luy-KE", "lv", "lv-LV", "mas", "mas-KE", "mas-TZ", "mer",
    "mer-KE", "mfe", "mfe-MU", "mg", "mg-MG", "mgh", "mgh-MZ", "mgo",
    "mgo-CM", "mk", "mk-MK", "ml", "ml-IN", "mn", "mn-MN", "mr",
    "mr-IN", "ms", "ms-BN", "ms-MY", "ms-SG", "mt", "mt-MT", "mua",
    "mua-CM", "my", "my-MM", "mzn", "mzn-IR", "naq", "naq-NA", "nb",
    "nb-NO", "nb-SJ", "nd", "nd-ZW", "nds", "nds-DE", "nds-NL", "ne",
    "ne-IN", "ne-NP", "nl", "nl-AW", "nl-BE", "nl-BQ", "nl-CW",
    "nl-NL", "nl-SR", "nl-SX", "nmg", "nmg-CM", "nn", "nn-NO", "nnh",
    "nnh-CM", "nus", "nus-SS", "nyn", "nyn-UG", "om", "om-ET",
    "om-KE", "or", "or-IN", "os", "os-GE", "os-RU", "pa", "pa-Arab",
    "pa-Arab-PK", "pa-Guru", "pa-Guru-IN", "pl", "pl-PL", "ps",
    "ps-AF", "pt", "pt-AO", "pt-BR", "pt-CH", "pt-CV", "pt-GQ",
    "pt-GW", "pt-LU", "pt-MO", "pt-MZ", "pt-PT", "pt-ST", "pt-TL",
    "qu", "qu-BO", "qu-EC", "qu-PE", "rm", "rm-CH", "rn", "rn-BI",
    "ro", "ro-MD", "ro-RO", "rof", "rof-TZ", "ru", "ru-BY", "ru-KG",
    "ru-KZ", "ru-MD", "ru-RU", "ru-UA", "rw", "rw-RW", "rwk",
    "rwk-TZ", "sah", "sah-RU", "saq", "saq-KE", "sbp", "sbp-TZ", "se",
    "se-FI", "se-NO", "se-SE", "seh", "seh-MZ", "ses", "ses-ML", "sg",
    "sg-CF", "shi", "shi-Latn", "shi-Latn-MA", "shi-Tfng",
    "shi-Tfng-MA", "si", "si-LK", "sk", "sk-SK", "sl", "sl-SI", "smn",
    "smn-FI", "sn", "sn-ZW", "so", "so-DJ", "so-ET", "so-KE", "so-SO",
    "sq", "sq-AL", "sq-MK", "sq-XK", "sr", "sr-Cyrl", "sr-Cyrl-BA",
    "sr-Cyrl-ME", "sr-Cyrl-RS", "sr-Cyrl-XK", "sr-Latn", "sr-Latn-BA",
    "sr-Latn-ME", "sr-Latn-RS", "sr-Latn-XK", "sv", "sv-AX", "sv-FI",
    "sv-SE", "sw", "sw-CD", "sw-KE", "sw-TZ", "sw-UG", "ta", "ta-IN",
    "ta-LK", "ta-MY", "ta-SG", "te", "te-IN", "teo", "teo-KE",
    "teo-UG", "tg", "tg-TJ", "th", "th-TH", "ti", "ti-ER", "ti-ET",
    "to", "to-TO", "tr", "tr-CY", "tr-TR", "tt", "tt-RU", "twq",
    "twq-NE", "tzm", "tzm-MA", "ug", "ug-CN", "uk", "uk-UA", "ur",
    "ur-IN", "ur-PK", "uz", "uz-Arab", "uz-Arab-AF", "uz-Cyrl",
    "uz-Cyrl-UZ", "uz-Latn", "uz-Latn-UZ", "vai", "vai-Latn",
    "vai-Latn-LR", "vai-Vaii", "vai-Vaii-LR", "vi", "vi-VN", "vun",
    "vun-TZ", "wae", "wae-CH", "wo", "wo-SN", "xog", "xog-UG", "yav",
    "yav-CM", "yi", "yi-001", "yo", "yo-BJ", "yo-NG", "yue",
    "yue-Hans", "yue-Hans-CN", "yue-Hant", "yue-Hant-HK", "zgh",
    "zgh-MA", "zh", "zh-Hans", "zh-Hans-CN", "zh-Hans-HK",
    "zh-Hans-MO", "zh-Hans-SG", "zh-Hant", "zh-Hant-HK", "zh-Hant-MO",
    "zh-Hant-TW", "zu", "zu-ZA"];
