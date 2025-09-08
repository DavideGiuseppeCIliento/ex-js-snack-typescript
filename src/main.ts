// --- SNACKL 1

let dato: unknown;

if (typeof dato === "string") {
  console.log(dato.toUpperCase());
} else if (typeof dato === "number") {
  dato = dato * 2;
} else if (typeof dato === "boolean") {
  if (dato === true) {
    console.log("si");
  } else {
    console.log("No");
  }
} else if (dato === null) {
  console.log("Dato VUOTO");
} else if (Array.isArray(dato)) {
  console.log(dato.length);
} else if (dato instanceof Promise) {
  dato.then((msg) => console.log(msg));
} else {
  console.log("Tipo non supportato");
}

// --- SNACKL 2
type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "f";
  anniDiServizio: number[];
  readonly emailAziendale: string;
  contratto: "Indeterminato" | "Determinato" | "Freelance";
};

// --- SNACKL 3

type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior";
  linguaggi: string[];
  certificazioni: string[];
};

type ProjectManager = Dipendente & {
  teamSize: null | number;
  budgetGestito: number;
  stakeholderPrincipali: string[];
};

type Team = {
  nome: string;
  progettoAttuale: null | string;
  budget: number;
  membri: [[string, string], ...[string, string]];
};
