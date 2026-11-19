// ================= ÚPRAVY TADY =================
// Přepisuj jen texty v uvozovkách. Uvozovky a čárky nech.
export const firma = {
  nazev: "Čalounictví Roman Ehl",
  jmeno: "Roman Ehl",
  telefon: "603 477 360",
  telefonOdkaz: "+420603477360",
  email: "roman.ehl@seznam.cz",
  adresa: "Hořická 364/15",
  mesto: "500 02 Hradec Králové",
  odRoku: 1991,
  provozni: "Po telefonické domluvě",
};

export const sluzby = [
  { nazev: "Sedačky a gauče", text: "Přečalounění celé sedačky nebo jen opotřebených dílů. Nová látka, nová výplň, stará kostra zůstává.", ikona: "sofa" },
  { nazev: "Křesla", text: "Ušák po babičce, klubové křeslo i moderní kousek. Vrátíme mu tvar, pohodlí i vzhled.", ikona: "chair" },
  { nazev: "Jídelní židle a lavice", text: "Sedáky a opěradla židlí, lavice do kuchyně, barové stoličky.", ikona: "stool" },
  { nazev: "Starožitný nábytek", text: "Šetrné přečalounění historického nábytku tradičními postupy, s respektem k původnímu řemeslu.", ikona: "antique" },
  { nazev: "Opravy výplní a pružin", text: "Propadlý sedák, vrzající pružiny, roztržený potah. Opravíme jen to, co je potřeba.", ikona: "spring" },
  { nazev: "Čalounické potřeby", text: "Prodej čalounických materiálů a potřeb. Poradíme, co na Vaši práci použít.", ikona: "fabric" },
];

export const postup = [
  { nazev: "Pošlete fotku", text: "Zavolejte nebo vyplňte poptávku. Stačí fotka nábytku a pár slov, co s ním chcete udělat." },
  { nazev: "Vyberete látku", text: "Domluvíme cenu a termín. Pomůžu vybrat látku, která vydrží a bude se k Vám hodit." },
  { nazev: "Hotovo", text: "Nábytek přečalouním v dílně v Hradci. Domluvíme se, jak se k Vám vrátí jako nový." },
];

// Fotky: nahraj do public/img/ a dopiš sem názvy, např. { pred: "/img/kreslo-pred.jpg", po: "/img/kreslo-po.jpg", popis: "Ušák" }
export const galerie = [
  { pred: "/img/kreslo-pred.svg", po: "/img/kreslo-po.svg", popis: "Ušák po babičce" },
  { pred: "/img/sedacka-pred.svg", po: "/img/sedacka-po.svg", popis: "Sedačka" },
  { pred: "/img/zidle-pred.svg", po: "/img/zidle-po.svg", popis: "Jídelní židle" },
];
// Teď jsou tu ilustrace. Až budou skutečné fotky, nahraj je do public/img/ a přepiš názvy souborů výše.
// ================= KONEC ÚPRAV =================

// Časté dotazy (používá varianta 2)
export const dotazy = [
  { otazka: "Kolik přečalounění stojí?", odpoved: "Záleží na velikosti kusu, stavu výplně a zvolené látce. Pošlete fotku a já Vám řeknu orientační cenu předem." },
  { otazka: "Jak dlouho to trvá?", odpoved: "Podle rozsahu práce a aktuálního vytížení dílny. Přesný termín se dozvíte hned při domluvě." },
  { otazka: "Můžu si přinést vlastní látku?", odpoved: "Domluvíme se. Poradím, jestli se Vaše látka na daný kus hodí, nebo pomůžu vybrat jinou." },
  { otazka: "Vyplatí se to oproti novému nábytku?", odpoved: "U kvalitní kostry většinou ano. Nová látka a výplň často stojí zlomek ceny nového kusu a nábytek Vám zůstane." },
];
