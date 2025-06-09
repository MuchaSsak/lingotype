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
  {
    value: "fr",
    label: "French (Français)",
    Icon: "🇫🇷",
  },
  {
    value: "it",
    label: "Italian (Italiano)",
    Icon: "🇮🇹",
  },
  {
    value: "de",
    label: "German (Deutsch)",
    Icon: "🇩🇪",
  },
  {
    value: "pt",
    label: "Portuguese (Português)",
    Icon: "🇵🇹",
  },
  {
    value: "zh",
    label: "Chinese (中文)",
    Icon: "🇨🇳",
  },
  {
    value: "ja",
    label: "Japanese (日本語)",
    Icon: "🇯🇵",
  },
  {
    value: "ru",
    label: "Russian (Русский)",
    Icon: "🇷🇺",
  },
  {
    value: "hi",
    label: "Hindi (हिंदी)",
    Icon: "🇮🇳",
  },
  {
    value: "ko",
    label: "Korean (한국어)",
    Icon: "🇰🇷",
  },
  {
    value: "ar",
    label: "Arabic (العربية)",
    Icon: "🇸🇦",
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
  it: {
    endless: "senza fine",
    "random order": "ordine casuale",
    translation: "traduzione",
    "case sensitive": "distingue tra maiuscole e minuscole",
    "all characters": "tutti i caratteri",
    "New list": "Nuova lista",
    "Sign in": "Accedi",
    Search: "Cerca",
    "Couldn't find results": "Nessun risultato trovato",
    "You have no custom lists!": "Non hai liste personalizzate!",
    language: "lingua",
    "Reset game": "Resetta il gioco",
    "Couldn't find any words list": "Nessuna lista di parole trovata",
    words: "parole",
    word: "parola",
    "Information about this application": "Informazioni su questa applicazione",
    "Okay!": "Okay!",
    "Do you want to clear your browser application data?":
      "Vuoi cancellare i dati dell'applicazione nel browser?",
    Cancel: "Annulla",
    "Clear all": "Cancella tutto",
    "Create a new words list": "Crea una nuova lista di parole",
    Greetings: "Saluti",
    Name: "Nome",
    Hello: "Ciao",
    "See you later": "A presto",
    "Good morning": "Buongiorno",
    "Name must have at least 1 character.":
      "Il nome deve avere almeno 1 carattere.",
    "Name cannot exceed 50 characters.":
      "Il nome non può superare i 50 caratteri.",
    "Words list must have at least 4 characters.":
      "La lista di parole deve avere almeno 4 caratteri.",
    "Words list cannot exceed 1000 characters.":
      "La lista di parole non può superare i 1000 caratteri.",
    Edit: "Modifica",
    Delete: "Elimina",
    "This action cannot be undone.": "Questa azione non può essere annullata.",
    "Are you sure you want to delete this words list?":
      "Sei sicuro di voler eliminare questa lista di parole?",
    "Edit list": "Modifica lista",
    "Words list": "Lista di parole",
    "Save changes": "Salva le modifiche",
    info: "informazioni",
    storage: "archiviazione",
    wordsListFormat: (
      <>
        <span>Ricorda di usare il formato corretto! Esempio:</span>
        <code className="bg-secondary">
          [Hervir] Hiervo Hierves Hierve Hervimos Hervís Hierven, To boil;
          Pelar, To peel; Los platos, Plates; El vaso, Glass;
        </code>
        <span>
          Ogni parola e la sua traduzione devono essere separate da una{" "}
          <b>virgola (,)</b> e poi la parola successiva da un{" "}
          <b>punto e virgola (;)</b>. Gli spazi sono opzionali.
        </span>
      </>
    ),
    footerStorageDialog: (
      <>
        <span>
          Questa azione non può essere annullata. Ciò eliminerà permanentemente
          l'archiviazione locale del browser e potrebbe cancellare tutti i tuoi
          dati (ad esempio, liste di parole, statistiche, ecc.).
        </span>
        <span>
          Tuttavia, se hai effettuato l'accesso, i tuoi dati rimarranno nel
          nostro database.
        </span>
      </>
    ),
    footerMadeBy: (
      <>
        Fatto da{" "}
        <Link
          href={GITHUB_MATEUSZ_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Matteo
        </Link>{" "}
        e{" "}
        <Link
          href={GITHUB_FABIAN_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Fabiano
        </Link>{" "}
        con ❤️
      </>
    ),
    footerInfo: (
      <>
        <span>
          L'intero design e l'idea di questa applicazione sono fortemente
          ispirati da{" "}
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
          Il progetto non vuole essere una competizione per loro. È comunque
          diverso. Volevo solo creare qualcosa di utile e divertente
          principalmente per me stesso, anche se, ovviamente, potrebbe servire
          anche ad altre persone.
        </span>

        <span>
          So che usare questa applicazione potrebbe non essere la cosa più
          comoda per la maggior parte delle persone, ma funziona bene insieme a{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            quizlet.com
          </Link>{" "}
          e alle sue flashcard — da qui il formato specifico delle liste di
          parole. Puoi esportare rapidamente le tue flashcard come testo e
          incollarle qui per rafforzare il tuo vocabolario.
        </span>

        <span className="flex flex-col">
          <span>Detto questo, spero che ti piaccia l'esperienza!</span>
          <span className="ml-auto">- Matteo 💖</span>
        </span>
      </>
    ),
  },
  fr: {
    endless: "sans fin",
    "random order": "ordre aléatoire",
    translation: "traduction",
    "case sensitive": "sensible à la casse",
    "all characters": "tous les caractères",
    "New list": "Nouvelle liste",
    "Sign in": "Se connecter",
    Search: "Rechercher",
    "Couldn't find results": "Aucun résultat trouvé",
    "You have no custom lists!": "Vous n'avez pas de listes personnalisées !",
    language: "langue",
    "Reset game": "Réinitialiser le jeu",
    "Couldn't find any words list": "Aucune liste de mots trouvée",
    words: "mots",
    word: "mot",
    "Information about this application": "Informations sur cette application",
    "Okay!": "D'accord !",
    "Do you want to clear your browser application data?":
      "Voulez-vous effacer les données de l'application dans le navigateur ?",
    Cancel: "Annuler",
    "Clear all": "Tout effacer",
    "Create a new words list": "Créer une nouvelle liste de mots",
    Greetings: "Salutations",
    Name: "Nom",
    Hello: "Bonjour",
    "See you later": "À plus tard",
    "Good morning": "Bonjour",
    "Name must have at least 1 character.":
      "Le nom doit comporter au moins 1 caractère.",
    "Name cannot exceed 50 characters.":
      "Le nom ne peut pas dépasser 50 caractères.",
    "Words list must have at least 4 characters.":
      "La liste de mots doit comporter au moins 4 caractères.",
    "Words list cannot exceed 1000 characters.":
      "La liste de mots ne peut pas dépasser 1000 caractères.",
    Edit: "Modifier",
    Delete: "Supprimer",
    "This action cannot be undone.": "Cette action est irréversible.",
    "Are you sure you want to delete this words list?":
      "Êtes-vous sûr de vouloir supprimer cette liste de mots ?",
    "Edit list": "Modifier la liste",
    "Words list": "Liste de mots",
    "Save changes": "Enregistrer les modifications",
    info: "informations",
    storage: "stockage",
    wordsListFormat: (
      <>
        <span>N'oubliez pas d'utiliser le format correct ! Exemple :</span>
        <code className="bg-secondary">
          [Hervir] Hiervo Hierves Hierve Hervimos Hervís Hierven, To boil;
          Pelar, To peel; Los platos, Plates; El vaso, Glass;
        </code>
        <span>
          Chaque mot et sa traduction doivent être séparés par une{" "}
          <b>virgule (,)</b> et ensuite le mot suivant par un{" "}
          <b>point-virgule (;)</b>. Les espaces sont facultatifs.
        </span>
      </>
    ),
    footerStorageDialog: (
      <>
        <span>
          Cette action est irréversible. Cela supprimera définitivement le
          stockage local du navigateur et pourrait effacer toutes vos données
          (par exemple, listes de mots, statistiques, etc.).
        </span>
        <span>
          Cependant, si vous êtes connecté, vos données resteront dans notre
          base de données.
        </span>
      </>
    ),
    footerMadeBy: (
      <>
        Fait par{" "}
        <Link
          href={GITHUB_MATEUSZ_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Matthieu
        </Link>{" "}
        et{" "}
        <Link
          href={GITHUB_FABIAN_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Fabien
        </Link>{" "}
        avec ❤️
      </>
    ),
    footerInfo: (
      <>
        <span>
          La conception et l'idée de cette application sont fortement inspirées
          par{" "}
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
          Le projet n'est pas censé être une compétition pour eux. Il est
          toujours différent. Je voulais juste créer quelque chose d'utile et
          d'amusant principalement pour moi-même, même si, bien sûr, cela
          pourrait également servir à d'autres personnes.
        </span>

        <span>
          Je sais que l'utilisation de cette application peut ne pas être la
          chose la plus pratique pour la plupart des gens, mais elle fonctionne
          bien avec{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            quizlet.com
          </Link>{" "}
          et ses cartes flash — d'où le format spécifique des listes de mots.
          Vous pouvez exporter rapidement vos cartes flash sous forme de texte
          et les coller ici pour renforcer votre vocabulaire.
        </span>

        <span className="flex flex-col">
          <span>
            Cela étant dit, j'espère que vous apprécierez l'expérience !
          </span>
          <span className="ml-auto">- Matthieu 💖</span>
        </span>
      </>
    ),
  },
  de: {
    endless: "endlos",
    "random order": "zufällige Reihenfolge",
    translation: "Übersetzung",
    "case sensitive": "Groß-/Kleinschreibung beachten",
    "all characters": "alle Zeichen",
    "New list": "Neue Liste",
    "Sign in": "Anmelden",
    Search: "Suchen",
    "Couldn't find results": "Keine Ergebnisse gefunden",
    "You have no custom lists!": "Du hast keine eigenen Listen!",
    language: "Sprache",
    "Reset game": "Spiel zurücksetzen",
    "Couldn't find any words list": "Keine Wortliste gefunden",
    words: "Wörter",
    word: "Wort",
    "Information about this application": "Informationen über diese Anwendung",
    "Okay!": "Okay!",
    "Do you want to clear your browser application data?":
      "Möchtest du deine Browser-Anwendungsdaten löschen?",
    Cancel: "Abbrechen",
    "Clear all": "Alles löschen",
    "Create a new words list": "Neue Wortliste erstellen",
    Greetings: "Grüße",
    Name: "Name",
    Hello: "Hallo",
    "See you later": "Bis später",
    "Good morning": "Guten Morgen",
    "Name must have at least 1 character.":
      "Der Name muss mindestens 1 Zeichen lang sein.",
    "Name cannot exceed 50 characters.":
      "Der Name darf 50 Zeichen nicht überschreiten.",
    "Words list must have at least 4 characters.":
      "Die Wortliste muss mindestens 4 Zeichen lang sein.",
    "Words list cannot exceed 1000 characters.":
      "Die Wortliste darf 1000 Zeichen nicht überschreiten.",
    Edit: "Bearbeiten",
    Delete: "Löschen",
    "This action cannot be undone.":
      "Diese Aktion kann nicht rückgängig gemacht werden.",
    "Are you sure you want to delete this words list?":
      "Bist du sicher, dass du diese Wortliste löschen möchtest?",
    "Edit list": "Liste bearbeiten",
    "Words list": "Wortliste",
    "Save changes": "Änderungen speichern",
    info: "Info",
    storage: "Speicher",
    wordsListFormat: (
      <>
        <span>Denk daran, das richtige Format zu verwenden! Beispiel:</span>
        <code className="bg-secondary">
          [Hervir] Hiervo Hierves Hierve Hervimos Hervís Hierven, To boil;
          Pelar, To peel; Los platos, Plates; El vaso, Glass;
        </code>
        <span>
          Jedes Wort/jede Wörter und seine Übersetzung müssen durch ein{" "}
          <b>Komma (,)</b> und dann das nächste Wort/die nächsten Wörter durch
          ein <b>Semikolon (;)</b> getrennt werden. Leerzeichen sind optional.
        </span>
      </>
    ),
    footerStorageDialog: (
      <>
        <span>
          Diese Aktion kann nicht rückgängig gemacht werden. Dies löscht deinen
          lokalen Browserspeicher dauerhaft und entfernt daher potenziell alle
          deine Daten (z.B. Wortlisten, Statistiken usw.).
        </span>
        <span>
          Wenn du jedoch angemeldet bist, bleiben deine Daten in unserer
          Datenbank.
        </span>
      </>
    ),
    footerMadeBy: (
      <>
        Erstellt von{" "}
        <Link
          href={GITHUB_MATEUSZ_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Matthew
        </Link>{" "}
        und{" "}
        <Link
          href={GITHUB_FABIAN_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Fabian
        </Link>{" "}
        mit ❤️
      </>
    ),
    footerInfo: (
      <>
        <span>
          Das gesamte Design und die Idee dieser Anwendung sind stark inspiriert
          von{" "}
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
          Das Projekt soll keine Konkurrenz für sie sein. Es unterscheidet sich
          immer noch. Ich wollte einfach etwas Cooles und Nützliches
          hauptsächlich für mich selbst erstellen, aber natürlich potenziell
          auch für andere Leute.
        </span>

        <span>
          Mir ist bewusst, dass die Verwendung dieser App für die Mehrheit der
          Menschen möglicherweise nicht am bequemsten ist, aber sie passt gut
          zur Verwendung von{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            quizlet.com
          </Link>{" "}
          und seinen Lernkarten – daher das spezifische Format der Wortlisten.
          Du kannst deine Lernkarten schnell als Text exportieren und hier
          einfügen, um deinen Wortschatz zu festigen.
        </span>

        <span className="flex flex-col">
          <span>
            Alles in allem hoffe ich, dass du die Erfahrung genießen wirst!
          </span>
          <span className="ml-auto">- Matthew 💖</span>
        </span>
      </>
    ),
  },
  pt: {
    endless: "sem fim",
    "random order": "ordem aleatória",
    translation: "tradução",
    "case sensitive": "sensível a maiúsculas e minúsculas",
    "all characters": "todos os caracteres",
    "New list": "Nova lista",
    "Sign in": "Entrar",
    Search: "Pesquisar",
    "Couldn't find results": "Não foram encontrados resultados",
    "You have no custom lists!": "Você não tem listas personalizadas!",
    language: "idioma",
    "Reset game": "Reiniciar jogo",
    "Couldn't find any words list":
      "Não foi encontrada nenhuma lista de palavras",
    words: "palavras",
    word: "palavra",
    "Information about this application": "Informações sobre esta aplicação",
    "Okay!": "Ok!",
    "Do you want to clear your browser application data?":
      "Deseja limpar os dados da aplicação do seu navegador?",
    Cancel: "Cancelar",
    "Clear all": "Limpar tudo",
    "Create a new words list": "Criar uma nova lista de palavras",
    Greetings: "Saudações",
    Name: "Nome",
    Hello: "Olá",
    "See you later": "Até mais",
    "Good morning": "Bom dia",
    "Name must have at least 1 character.":
      "O nome deve ter pelo menos 1 caractere.",
    "Name cannot exceed 50 characters.":
      "O nome não pode exceder 50 caracteres.",
    "Words list must have at least 4 characters.":
      "A lista de palavras deve ter pelo menos 4 caracteres.",
    "Words list cannot exceed 1000 characters.":
      "A lista de palavras não pode exceder 1000 caracteres.",
    Edit: "Editar",
    Delete: "Excluir",
    "This action cannot be undone.": "Esta ação não pode ser desfeita.",
    "Are you sure you want to delete this words list?":
      "Tem certeza de que deseja excluir esta lista de palavras?",
    "Edit list": "Editar lista",
    "Words list": "Lista de palavras",
    "Save changes": "Salvar alterações",
    info: "informações",
    storage: "armazenamento",
    wordsListFormat: (
      <>
        <span>Lembre-se de usar o formato adequado! Exemplo:</span>
        <code className="bg-secondary">
          [Hervir] Hiervo Hierves Hierve Hervimos Hervís Hierven, To boil;
          Pelar, To peel; Los platos, Plates; El vaso, Glass;
        </code>
        <span>
          Cada palavra/s e sua tradução devem ser separadas por uma{" "}
          <b>vírgula (,)</b> e então a próxima palavra/s por um{" "}
          <b>ponto e vírgula (;)</b>. Espaços em branco são opcionais.
        </span>
      </>
    ),
    footerStorageDialog: (
      <>
        <span>
          Esta ação não pode ser desfeita. Isso excluirá permanentemente o
          armazenamento local do seu navegador e, portanto, poderá remover todos
          os seus dados (por exemplo, listas de palavras, estatísticas, etc.).
        </span>
        <span>
          No entanto, se você estiver conectado, seus dados ainda permanecerão
          em nosso banco de dados.
        </span>
      </>
    ),
    footerMadeBy: (
      <>
        Feito por{" "}
        <Link
          href={GITHUB_MATEUSZ_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Mateus
        </Link>{" "}
        e{" "}
        <Link
          href={GITHUB_FABIAN_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Fabian
        </Link>{" "}
        com ❤️
      </>
    ),
    footerInfo: (
      <>
        <span>
          Todo o design e a ideia desta aplicação são fortemente inspirados por{" "}
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
          O projeto não se destina a ser uma concorrência para eles. Ele ainda
          difere. Eu só queria criar algo legal e útil principalmente para mim,
          mas, claro, potencialmente para outras pessoas também.
        </span>

        <span>
          Percebo que usar este aplicativo pode não ser o mais confortável para
          a maioria das pessoas, mas ele funciona bem com o uso de{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            quizlet.com
          </Link>{" "}
          e seus flashcards — daí o formato específico das listas de palavras.
          Você pode exportar rapidamente seus flashcards como texto e colocá-los
          aqui para reforço de vocabulário.
        </span>

        <span className="flex flex-col">
          <span>Dito tudo isso, espero que você aproveite a experiência!</span>
          <span className="ml-auto">- Mateus 💖</span>
        </span>
      </>
    ),
  },
  zh: {
    endless: "无尽",
    "random order": "随机顺序",
    translation: "翻译",
    "case sensitive": "区分大小写",
    "all characters": "所有字符",
    "New list": "新列表",
    "Sign in": "登录",
    Search: "搜索",
    "Couldn't find results": "未找到结果",
    "You have no custom lists!": "您没有自定义列表！",
    language: "语言",
    "Reset game": "重置游戏",
    "Couldn't find any words list": "未找到任何单词列表",
    words: "单词",
    word: "单词",
    "Information about this application": "关于此应用程序的信息",
    "Okay!": "好的！",
    "Do you want to clear your browser application data?":
      "您要清除浏览器应用程序数据吗？",
    Cancel: "取消",
    "Clear all": "清除所有",
    "Create a new words list": "创建新单词列表",
    Greetings: "问候",
    Name: "姓名",
    Hello: "你好",
    "See you later": "再见",
    "Good morning": "早上好",
    "Name must have at least 1 character.": "名称必须至少包含 1 个字符。",
    "Name cannot exceed 50 characters.": "名称不能超过 50 个字符。",
    "Words list must have at least 4 characters.":
      "单词列表必须至少包含 4 个字符。",
    "Words list cannot exceed 1000 characters.":
      "单词列表不能超过 1000 个字符。",
    Edit: "编辑",
    Delete: "删除",
    "This action cannot be undone.": "此操作无法撤消。",
    "Are you sure you want to delete this words list?":
      "您确定要删除此单词列表吗？",
    "Edit list": "编辑列表",
    "Words list": "单词列表",
    "Save changes": "保存更改",
    info: "信息",
    storage: "存储",
    wordsListFormat: (
      <>
        <span>请记住使用正确的格式！例如：</span>
        <code className="bg-secondary">
          [Hervir] Hiervo Hierves Hierve Hervimos Hervís Hierven, To boil;
          Pelar, To peel; Los platos, Plates; El vaso, Glass;
        </code>
        <span>
          每个单词及其翻译必须用<b>逗号 (,)</b> 分隔，然后下一个单词用
          <b>分号 (;)</b> 分隔。空格是可选的。
        </span>
      </>
    ),
    footerStorageDialog: (
      <>
        <span>
          此操作无法撤消。这将永久删除您的本地浏览器存储，因此可能会删除您的所有数据（例如单词列表、统计信息等）。
        </span>
        <span>但是，如果您已登录，您的数据仍将保留在我们的数据库中。</span>
      </>
    ),
    footerMadeBy: (
      <>
        由{" "}
        <Link
          href={GITHUB_MATEUSZ_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Matthew
        </Link>{" "}
        和{" "}
        <Link
          href={GITHUB_FABIAN_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Fabian
        </Link>{" "}
        用心制作 ❤️
      </>
    ),
    footerInfo: (
      <>
        <span>
          此应用程序的整体设计和理念深受{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            monkeytype.com
          </Link>
          启发。
        </span>
        <span>
          该项目不旨在与他们竞争。它仍然有所不同。我只是想为自己创造一些酷而有用的东西，当然也可能为其他人服务。
        </span>

        <span>
          我确实意识到使用此应用程序可能对大多数人来说不是最舒适的，但它与使用{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            quizlet.com
          </Link>{" "}
          及其闪卡配合得很好——因此有了特定的单词列表格式。您可以快速将闪卡导出为文本并在此处粘贴，以加强词汇。
        </span>

        <span className="flex flex-col">
          <span>总而言之，我希望您喜欢这次体验！</span>
          <span className="ml-auto">- Matthew 💖</span>
        </span>
      </>
    ),
  },
  ja: {
    endless: "無限",
    "random order": "ランダムな順序",
    translation: "翻訳",
    "case sensitive": "大文字と小文字を区別する",
    "all characters": "すべての文字",
    "New list": "新しいリスト",
    "Sign in": "サインイン",
    Search: "検索",
    "Couldn't find results": "結果が見つかりませんでした",
    "You have no custom lists!": "カスタムリストがありません！",
    language: "言語",
    "Reset game": "ゲームをリセット",
    "Couldn't find any words list": "単語リストが見つかりませんでした",
    words: "単語",
    word: "単語",
    "Information about this application": "このアプリケーションに関する情報",
    "Okay!": "オーケー！",
    "Do you want to clear your browser application data?":
      "ブラウザのアプリケーションデータを消去しますか？",
    Cancel: "キャンセル",
    "Clear all": "すべて消去",
    "Create a new words list": "新しい単語リストを作成",
    Greetings: "挨拶",
    Name: "名前",
    Hello: "こんにちは",
    "See you later": "またね",
    "Good morning": "おはようございます",
    "Name must have at least 1 character.":
      "名前は1文字以上である必要があります。",
    "Name cannot exceed 50 characters.": "名前は50文字を超えられません。",
    "Words list must have at least 4 characters.":
      "単語リストは4文字以上である必要があります。",
    "Words list cannot exceed 1000 characters.":
      "単語リストは1000文字を超えられません。",
    Edit: "編集",
    Delete: "削除",
    "This action cannot be undone.": "この操作は元に戻せません。",
    "Are you sure you want to delete this words list?":
      "この単語リストを削除してもよろしいですか？",
    "Edit list": "リストを編集",
    "Words list": "単語リスト",
    "Save changes": "変更を保存",
    info: "情報",
    storage: "ストレージ",
    wordsListFormat: (
      <>
        <span>正しい形式を使用してください！例：</span>
        <code className="bg-secondary">
          [Hervir] Hiervo Hierves Hierve Hervimos Hervís Hierven, To boil;
          Pelar, To peel; Los platos, Plates; El vaso, Glass;
        </code>
        <span>
          各単語とその翻訳は<b>カンマ (,)</b>で区切り、その次の単語は
          <b>セミコロン (;)</b>
          で区切る必要があります。空白はオプションです。
        </span>
      </>
    ),
    footerStorageDialog: (
      <>
        <span>
          この操作は元に戻せません。これにより、ブラウザのローカルストレージが永久に削除され、
          したがって、すべてのデータ（単語リスト、統計など）が削除される可能性があります。
        </span>
        <span>
          ただし、ログインしている場合、データは引き続き当社のデータベースに保持されます。
        </span>
      </>
    ),
    footerMadeBy: (
      <>
        作成者：{" "}
        <Link
          href={GITHUB_MATEUSZ_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          マシュー
        </Link>{" "}
        および{" "}
        <Link
          href={GITHUB_FABIAN_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          ファビアン
        </Link>{" "}
        より ❤️
      </>
    ),
    footerInfo: (
      <>
        <span>
          このアプリケーション全体のデザインとアイデアは、{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            monkeytype.com
          </Link>
          から強くインスパイアされています。
        </span>
        <span>
          このプロジェクトは、彼らとの競争を意図したものではありません。依然として異なります。
          私はただ、主に自分自身のために、そしてもちろん潜在的に他の人々のためにも、
          何かクールで役立つものを作りたかったのです。
        </span>

        <span>
          このアプリを使用することは、ほとんどの人にとって最も快適ではないかもしれないと認識していますが、{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            quizlet.com
          </Link>{" "}
          とそのフラッシュカードの使用と相性が良いです。
          それが、特定の単語リスト形式の理由です。
          フラッシュカードをテキストとしてすばやくエクスポートし、ここに貼り付けて、
          語彙の定着に役立てることができます。
        </span>

        <span className="flex flex-col">
          <span>いずれにせよ、この体験を楽しんでいただければ幸いです！</span>
          <span className="ml-auto">- マシュー 💖</span>
        </span>
      </>
    ),
  },
  ar: {
    // Arabic
    endless: "لا نهاية",
    "random order": "ترتيب عشوائي",
    translation: "ترجمة",
    "case sensitive": "حساس لحالة الأحرف",
    "all characters": "جميع الأحرف",
    "New list": "قائمة جديدة",
    "Sign in": "تسجيل الدخول",
    Search: "بحث",
    "Couldn't find results": "لم يتم العثور على نتائج",
    "You have no custom lists!": "ليس لديك قوائم مخصصة!",
    language: "اللغة",
    "Reset game": "إعادة تعيين اللعبة",
    "Couldn't find any words list": "لم يتم العثور على أي قائمة كلمات",
    words: "كلمات",
    word: "كلمة",
    "Information about this application": "معلومات حول هذا التطبيق",
    "Okay!": "حسناً!",
    "Do you want to clear your browser application data?":
      "هل تريد مسح بيانات تطبيق المتصفح الخاص بك؟",
    Cancel: "إلغاء",
    "Clear all": "مسح الكل",
    "Create a new words list": "إنشاء قائمة كلمات جديدة",
    Greetings: "تحيات",
    Name: "الاسم",
    Hello: "مرحباً",
    "See you later": "أراك لاحقاً",
    "Good morning": "صباح الخير",
    "Name must have at least 1 character.":
      "يجب أن يحتوي الاسم على حرف واحد على الأقل.",
    "Name cannot exceed 50 characters.": "لا يمكن أن يتجاوز الاسم 50 حرفًا.",
    "Words list must have at least 4 characters.":
      "يجب أن تحتوي قائمة الكلمات على 4 أحرف على الأقل.",
    "Words list cannot exceed 1000 characters.":
      "لا يمكن أن تتجاوز قائمة الكلمات 1000 حرف.",
    Edit: "تعديل",
    Delete: "حذف",
    "This action cannot be undone.": "لا يمكن التراجع عن هذا الإجراء.",
    "Are you sure you want to delete this words list?":
      "هل أنت متأكد أنك تريد حذف قائمة الكلمات هذه؟",
    "Edit list": "تعديل القائمة",
    "Words list": "قائمة الكلمات",
    "Save changes": "حفظ التغييرات",
    info: "معلومات",
    storage: "التخزين",
    wordsListFormat: (
      <>
        <span>تذكر استخدام التنسيق الصحيح! مثال:</span>
        <code dir="ltr" className="bg-secondary">
          [Hervir] Hiervo Hierves Hierve Hervimos Hervís Hierven, To boil;
          Pelar, To peel; Los platos, Plates; El vaso, Glass;
        </code>
        <span>
          يجب فصل كل كلمة/كلمات وترجمتها بـ<b>فاصلة (,)</b> ثم الكلمة/الكلمات
          التالية بـ<b>فاصلة منقوطة (;)</b>. المسافات البيضاء اختيارية.
        </span>
      </>
    ),
    footerStorageDialog: (
      <>
        <span>
          لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف بيانات التخزين
          المحلي للمتصفح بشكل دائم، وبالتالي قد يزيل جميع بياناتك (مثل قوائم
          الكلمات والإحصائيات وما إلى ذلك).
        </span>
        <span>
          ولكن إذا كنت مسجلاً للدخول، فستظل بياناتك محفوظة في قاعدة بياناتنا.
        </span>
      </>
    ),
    footerMadeBy: (
      <>
        صنع بواسطة{" "}
        <Link
          href={GITHUB_MATEUSZ_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          ماثيو
        </Link>{" "}
        و{" "}
        <Link
          href={GITHUB_FABIAN_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          فابيان
        </Link>{" "}
        بـ ❤️
      </>
    ),
    footerInfo: (
      <>
        <span>
          تصميم وفكرة هذا التطبيق مستوحيان بشكل كبير من{" "}
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
          ليس من المفترض أن يكون المشروع منافسة لهم. لا يزال يختلف. أردت فقط
          إنشاء شيء رائع ومفيد لنفسي بشكل أساسي، ولكن من المحتمل أن يكون مفيدًا
          لأشخاص آخرين أيضًا، بالطبع.
        </span>

        <span>
          أدرك أن استخدام هذا التطبيق قد لا يكون الأكثر راحة لغالبية الناس، لكنه
          يتوافق جيدًا مع استخدام{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            quizlet.com
          </Link>{" "}
          وبطاقاتها التعليمية — ومن هنا جاء تنسيق قوائم الكلمات المحدد. يمكنك
          تصدير بطاقاتك التعليمية بسرعة كنص ووضعها هنا لتعزيز المفردات.
        </span>

        <span className="flex flex-col">
          <span>بعد كل ما قيل، آمل أن تستمتع بالتجربة!</span>
          <span className="ml-auto">- ماثيو 💖</span>
        </span>
      </>
    ),
  },
  hi: {
    // Hindi
    endless: "अनंत",
    "random order": "यादृच्छिक क्रम",
    translation: "अनुवाद",
    "case sensitive": "केस संवेदनशीलता",
    "all characters": "सभी वर्ण",
    "New list": "नई सूची",
    "Sign in": "साइन इन करें",
    Search: "खोजें",
    "Couldn't find results": "कोई परिणाम नहीं मिला",
    "You have no custom lists!": "आपके पास कोई कस्टम सूची नहीं है!",
    language: "भाषा",
    "Reset game": "गेम रीसेट करें",
    "Couldn't find any words list": "कोई भी शब्द सूची नहीं मिली",
    words: "शब्द",
    word: "शब्द",
    "Information about this application": "इस एप्लिकेशन के बारे में जानकारी",
    "Okay!": "ठीक है!",
    "Do you want to clear your browser application data?":
      "क्या आप अपने ब्राउज़र एप्लिकेशन डेटा को साफ़ करना चाहते हैं?",
    Cancel: "रद्द करें",
    "Clear all": "सभी साफ़ करें",
    "Create a new words list": "एक नई शब्द सूची बनाएं",
    Greetings: "अभिवादन",
    Name: "नाम",
    Hello: "नमस्ते",
    "See you later": "फिर मिलेंगे",
    "Good morning": "सुप्रभात",
    "Name must have at least 1 character.":
      "नाम में कम से कम 1 अक्षर होना चाहिए।",
    "Name cannot exceed 50 characters.": "नाम 50 अक्षरों से अधिक नहीं हो सकता।",
    "Words list must have at least 4 characters.":
      "शब्द सूची में कम से कम 4 अक्षर होने चाहिए।",
    "Words list cannot exceed 1000 characters.":
      "शब्द सूची 1000 अक्षरों से अधिक नहीं हो सकती।",
    Edit: "संपादित करें",
    Delete: "हटाएँ",
    "This action cannot be undone.": "यह क्रिया पूर्ववत नहीं की जा सकती।",
    "Are you sure you want to delete this words list?":
      "क्या आप निश्चित हैं कि आप इस शब्द सूची को हटाना चाहते हैं?",
    "Edit list": "सूची संपादित करें",
    "Words list": "शब्द सूची",
    "Save changes": "परिवर्तन सहेजें",
    info: "जानकारी",
    storage: "भंडारण",
    wordsListFormat: (
      <>
        <span>सही प्रारूप का उपयोग करना याद रखें! उदाहरण:</span>
        <code className="bg-secondary">
          [Hervir] Hiervo Hierves Hierve Hervimos Hervís Hierven, To boil;
          Pelar, To peel; Los platos, Plates; El vaso, Glass;
        </code>
        <span>
          प्रत्येक शब्द/शब्दों और उसके अनुवाद को एक <b>अल्पविराम (,)</b> से और
          फिर अगले शब्द/शब्दों को एक <b>अर्धविराम (;)</b> से अलग किया जाना
          चाहिए। सफेद स्थान वैकल्पिक है।
        </span>
      </>
    ),
    footerStorageDialog: (
      <>
        <span>
          यह क्रिया पूर्ववत नहीं की जा सकती। इससे आपके स्थानीय ब्राउज़र स्टोरेज
          को स्थायी रूप से हटा दिया जाएगा और इस प्रकार आपकी सभी डेटा (जैसे शब्द
          सूचियाँ, आँकड़े आदि) संभावित रूप से हटा दी जाएंगी।
        </span>
        <span>
          हालांकि, यदि आप लॉग इन हैं, तो आपका डेटा हमारे डेटाबेस में रहेगा।
        </span>
      </>
    ),
    footerMadeBy: (
      <>
        द्वारा निर्मित{" "}
        <Link
          href={GITHUB_MATEUSZ_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          मैथ्यू
        </Link>{" "}
        और{" "}
        <Link
          href={GITHUB_FABIAN_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          फैबियन
        </Link>{" "}
        ❤️ के साथ
      </>
    ),
    footerInfo: (
      <>
        <span>
          इस एप्लिकेशन का पूरा डिज़ाइन और विचार{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            monkeytype.com
          </Link>
          से बहुत प्रेरित है।
        </span>
        <span>
          परियोजना उनसे प्रतिस्पर्धा करने के लिए नहीं है। यह अभी भी अलग है। मैं
          सिर्फ अपने लिए कुछ अच्छा और उपयोगी बनाना चाहता था, हालांकि संभावित रूप
          से अन्य लोगों के लिए भी, निश्चित रूप से।
        </span>

        <span>
          मुझे पता है कि इस ऐप का उपयोग करना अधिकांश लोगों के लिए सबसे आरामदायक
          नहीं हो सकता है, लेकिन यह{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            quizlet.com
          </Link>{" "}
          और इसके फ्लैशकार्ड के उपयोग के साथ अच्छी तरह से काम करता है — इसलिए
          विशिष्ट शब्द सूचियों का प्रारूप। आप अपने फ्लैशकार्ड को टेक्स्ट के रूप
          में तेज़ी से निर्यात कर सकते हैं और शब्दावली सुदृढीकरण के लिए उन्हें
          यहाँ रख सकते हैं।
        </span>

        <span className="flex flex-col">
          <span>कुल मिलाकर, मुझे उम्मीद है कि आप अनुभव का आनंद लेंगे!</span>
          <span className="ml-auto">- मैथ्यू 💖</span>
        </span>
      </>
    ),
  },
  ko: {
    // Korean
    endless: "끝없는",
    "random order": "무작위 순서",
    translation: "번역",
    "case sensitive": "대소문자 구분",
    "all characters": "모든 문자",
    "New list": "새 목록",
    "Sign in": "로그인",
    Search: "검색",
    "Couldn't find results": "결과를 찾을 수 없습니다",
    "You have no custom lists!": "맞춤 목록이 없습니다!",
    language: "언어",
    "Reset game": "게임 재설정",
    "Couldn't find any words list": "단어 목록을 찾을 수 없습니다",
    words: "단어",
    word: "단어",
    "Information about this application": "이 애플리케이션에 대한 정보",
    "Okay!": "알겠습니다!",
    "Do you want to clear your browser application data?":
      "브라우저 애플리케이션 데이터를 지우시겠습니까?",
    Cancel: "취소",
    "Clear all": "모두 지우기",
    "Create a new words list": "새 단어 목록 만들기",
    Greetings: "인사말",
    Name: "이름",
    Hello: "안녕하세요",
    "See you later": "다음에 봐요",
    "Good morning": "좋은 아침입니다",
    "Name must have at least 1 character.":
      "이름은 최소 1자 이상이어야 합니다.",
    "Name cannot exceed 50 characters.": "이름은 50자를 초과할 수 없습니다.",
    "Words list must have at least 4 characters.":
      "단어 목록은 최소 4자 이상이어야 합니다.",
    "Words list cannot exceed 1000 characters.":
      "단어 목록은 1000자를 초과할 수 없습니다.",
    Edit: "편집",
    Delete: "삭제",
    "This action cannot be undone.": "이 작업은 취소할 수 없습니다.",
    "Are you sure you want to delete this words list?":
      "이 단어 목록을 정말 삭제하시겠습니까?",
    "Edit list": "목록 편집",
    "Words list": "단어 목록",
    "Save changes": "변경 사항 저장",
    info: "정보",
    storage: "저장 공간",
    wordsListFormat: (
      <>
        <span>올바른 형식을 사용하세요! 예시:</span>
        <code className="bg-secondary">
          [Hervir] Hiervo Hierves Hierve Hervimos Hervís Hierven, To boil;
          Pelar, To peel; Los platos, Plates; El vaso, Glass;
        </code>
        <span>
          각 단어/단어와 그 번역은 <b>쉼표 (,)</b>로 구분해야 하며, 다음
          단어/단어는 <b>세미콜론 (;)</b>으로 구분해야 합니다. 공백은 선택
          사항입니다.
        </span>
      </>
    ),
    footerStorageDialog: (
      <>
        <span>
          이 작업은 취소할 수 없습니다. 이 작업은 로컬 브라우저 저장 공간을
          영구적으로 삭제하므로 모든 데이터(예: 단어 목록, 통계 등)가 잠재적으로
          제거될 수 있습니다.
        </span>
        <span>
          단, 로그인된 경우 데이터는 당사 데이터베이스에 계속 보관됩니다.
        </span>
      </>
    ),
    footerMadeBy: (
      <>
        제작자:{" "}
        <Link
          href={GITHUB_MATEUSZ_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          매튜
        </Link>{" "}
        및{" "}
        <Link
          href={GITHUB_FABIAN_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          파비안
        </Link>{" "}
        ❤️ 와 함께
      </>
    ),
    footerInfo: (
      <>
        <span>
          이 애플리케이션의 전체적인 디자인과 아이디어는{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            monkeytype.com
          </Link>
          에서 크게 영감을 받았습니다.
        </span>
        <span>
          이 프로젝트는 그들과의 경쟁을 의미하지 않습니다. 여전히 다릅니다. 저는
          주로 저 자신을 위해, 하지만 물론 다른 사람들을 위해서도 멋지고 유용한
          것을 만들고 싶었을 뿐입니다.
        </span>

        <span>
          이 앱을 사용하는 것이 대부분의 사람들에게 가장 편안하지 않을 수도
          있다는 것을 알고 있지만,{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            quizlet.com
          </Link>{" "}
          및 플래시카드와 잘 어울립니다. — 이것이 특정 단어 목록 형식의
          이유입니다. 플래시카드를 텍스트로 빠르게 내보내고 여기에 붙여넣어
          어휘력을 강화할 수 있습니다.
        </span>

        <span className="flex flex-col">
          <span>모든 것을 말씀드렸으니, 이 경험을 즐기시길 바랍니다!</span>
          <span className="ml-auto">- 매튜 💖</span>
        </span>
      </>
    ),
  },
  ru: {
    // Russian
    endless: "бесконечный",
    "random order": "случайный порядок",
    translation: "перевод",
    "case sensitive": "с учетом регистра",
    "all characters": "все символы",
    "New list": "Новый список",
    "Sign in": "Войти",
    Search: "Поиск",
    "Couldn't find results": "Результаты не найдены",
    "You have no custom lists!": "У вас нет пользовательских списков!",
    language: "язык",
    "Reset game": "Перезапустить игру",
    "Couldn't find any words list": "Не удалось найти ни одного списка слов",
    words: "слова",
    word: "слово",
    "Information about this application": "Информация об этом приложении",
    "Okay!": "Хорошо!",
    "Do you want to clear your browser application data?":
      "Вы хотите очистить данные приложения в браузере?",
    Cancel: "Отмена",
    "Clear all": "Очистить все",
    "Create a new words list": "Создать новый список слов",
    Greetings: "Приветствия",
    Name: "Имя",
    Hello: "Привет",
    "See you later": "До скорого",
    "Good morning": "Доброе утро",
    "Name must have at least 1 character.":
      "Имя должно содержать хотя бы 1 символ.",
    "Name cannot exceed 50 characters.": "Имя не может превышать 50 символов.",
    "Words list must have at least 4 characters.":
      "Список слов должен содержать хотя бы 4 символа.",
    "Words list cannot exceed 1000 characters.":
      "Список слов не может превышать 1000 символов.",
    Edit: "Редактировать",
    Delete: "Удалить",
    "This action cannot be undone.": "Это действие нельзя отменить.",
    "Are you sure you want to delete this words list?":
      "Вы уверены, что хотите удалить этот список слов?",
    "Edit list": "Редактировать список",
    "Words list": "Список слов",
    "Save changes": "Сохранить изменения",
    info: "информация",
    storage: "хранилище",
    wordsListFormat: (
      <>
        <span>Помните об использовании правильного формата! Пример:</span>
        <code className="bg-secondary">
          [Hervir] Hiervo Hierves Hierve Hervimos Hervís Hierven, To boil;
          Pelar, To peel; Los platos, Plates; El vaso, Glass;
        </code>
        <span>
          Каждое слово/слова и его перевод должны быть разделены{" "}
          <b>запятой (,)</b>, а затем следующее слово/слова —{" "}
          <b>точкой с запятой (;)</b>. Пробелы необязательны.
        </span>
      </>
    ),
    footerStorageDialog: (
      <>
        <span>
          Это действие нельзя отменить. Оно навсегда удалит ваши локальные
          данные браузера и, следовательно, потенциально удалит все ваши данные
          (например, списки слов, статистику и т.д.).
        </span>
        <span>
          Однако, если вы вошли в систему, ваши данные останутся в нашей базе
          данных.
        </span>
      </>
    ),
    footerMadeBy: (
      <>
        Сделано{" "}
        <Link
          href={GITHUB_MATEUSZ_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Матвеем
        </Link>{" "}
        и{" "}
        <Link
          href={GITHUB_FABIAN_PROFILE_LINK}
          target="_blank"
          className="hover:text-foreground focus-visible:text-foreground transition-colors duration-300 hover:underline focus-visible:underline"
        >
          Фабианом
        </Link>{" "}
        с ❤️
      </>
    ),
    footerInfo: (
      <>
        <span>
          Весь дизайн и идея этого приложения сильно вдохновлены{" "}
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
          Проект не должен быть их конкурентом. Он все еще отличается. Я просто
          хотел создать что-то классное и полезное в основном для себя, но,
          конечно, потенциально и для других людей.
        </span>

        <span>
          Я понимаю, что использование этого приложения может быть не самым
          удобным для большинства людей, но оно хорошо сочетается с
          использованием{" "}
          <Link
            className="text-primary underline underline-offset-1 transition-[filter,text-underline-offset] hover:underline-offset-2 hover:brightness-125 focus-visible:underline-offset-2 focus-visible:brightness-125"
            href={WEBSITE_MONKEYTYPE}
            target="_blank"
          >
            quizlet.com
          </Link>{" "}
          и его флеш-карт — отсюда и специфический формат списков слов. Вы
          можете быстро экспортировать свои флеш-карты в виде текста и вставить
          их сюда для закрепления словарного запаса.
        </span>

        <span className="flex flex-col">
          <span>Все сказанное, надеюсь, вам понравится этот опыт!</span>
          <span className="ml-auto">- Матвей 💖</span>
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
