export type Verdict = "allowed" | "ruined" | "denied";

export type Beat = {
  at: number;
  title: string;
  body: string;
  say?: string;
};

export type Phase = {
  id: string;
  chapter: string;
  title: string;
  duration: number;
  gear: string[];
  mantra?: string;
  beats: Beat[];
};

export const NAMES = [
  "Candy",
  "Barbie",
  "Pinky",
  "Lucinka",
  "Anička",
  "Trixie",
  "Cupcake",
  "Panenka",
  "Lolly",
  "Bambi",
  "Cherry",
  "Cukrátko",
  "Precious",
  "Bimbo Barbie",
  "Sissy Princess",
] as const;

export const EQUIPMENT = [
  "Crop top",
  "Šaty",
  "Makeup štětec ve stříbrném krytu",
  "Tvářenka",
  "Tužka na tělo",
  "Lžíce",
  "4 tkaničky od bot",
  "2 kolíky na prádlo",
  "Pásek",
  "Boty",
  "Propisky",
  "Pravítko",
  "Případně tlustá fixa",
  "Ponožky čisté",
  "Ponožky použité",
  "Bublifuk",
  "Zrcadlo",
  "Soukromí — nikdo nepřijde",
] as const;

export const HARD_LIMITS = [
  "Žádná krev",
  "Žádné trvalé modřiny",
  "Žádné zvracení",
  "Žádné piss / shit / WC play",
  "Žádné veřejné věci, fotky ani nahrávky",
];

export function fill(text: string, name: string) {
  return text.replaceAll("{name}", name).replaceAll("{NAME}", name.toUpperCase());
}

export function pickName() {
  return NAMES[Math.floor(Math.random() * NAMES.length)] ?? "Candy";
}

export function pickVerdict(): Verdict {
  const roll = Math.random();
  if (roll < 0.18) return "allowed";
  if (roll < 0.59) return "ruined";
  return "denied";
}

export const PHASES: Phase[] = [
  {
    id: "jmeno",
    chapter: "I · Jméno",
    title: "Už nejsi nikdo",
    duration: 80,
    gear: ["Tužka na tělo", "Zrcadlo", "Tlustá fixa pokud ji máš"],
    mantra: "Jmenuju se {name}. Jsem sissy bimbo slatka Paní. Patřím jen jí.",
    beats: [
      {
        at: 0,
        title: "Klečni.",
        body: "Klečni před zrcadlo. Nahá. Ruce na stehnech, dlaně nahoru. Oči na sebe. Tohle není hra, ve který máš slovo. Jsi hračka, kterou si dneska rozložím, obleču, svážu a použiju. Tvoje jméno je {name}. Ne přezdívka. Identita. Říkej si ho v hlavě, dokud ti to nebude připadat ohavně přirozený.",
      },
      {
        at: 25,
        title: "Napiš to.",
        body: "Tužkou na tělo — nebo fixou, pokud je tlustší a ošklivější — napiš si na hruď velkými písmeny {NAME}. Na břicho SISSY. Na vnitřní stranu jednoho stehna KURVA, na druhý OTROK. Na nártek obou nohou P. Nezmetkuješ to. Písmena mají bejt čitelná z dálky, až budeš na čtyřech. Když se písmo rozmaže, jsi trestaná za nepořádek.",
      },
      {
        at: 55,
        title: "Řekni to zrcadlu.",
        body: "Podívej se tý potvoře v zrcadle do očí. Už to není chlap. Je to natřená sissy, která čeká, až jí někdo řekne, co má dělat s čuráčkem. Nahlas, pomalu, třikrát: mantra dole. Když se zasekneš, začni znovu. Stydět se je v pořádku. Přestat je zakázaný.",
        say: "Jmenuju se {name}. Jsem sissy bimbo slatka Paní. Patřím jen jí.",
      },
    ],
  },
  {
    id: "pravidla",
    chapter: "II · Smlouva",
    title: "Total slavery",
    duration: 120,
    gear: ["Pásek", "Zrcadlo"],
    mantra: "Nemám právo na orgasmus. Nemám tempo. Nemám hrdost. Děkuju, Paní.",
    beats: [
      {
        at: 0,
        title: "Pravidla, který nejsou k diskuzi",
        body: "Pásek si dej kolem krku jako obojek. Dírku utáhni tak, ať ho cítíš, ne ať se dusíš. Prsty musíš vsunout pod pásek. Když ne, povolíš. Nechci mrtvou hračku, chci poslušnou. Teď poslouchej, {name}. Dneska neexistuje tvoje tempo. Neexistuje tvoje nálada. Existuju já a tvoje poslušnost.",
      },
      {
        at: 30,
        title: "Co platí",
        body: "Jedna: nesahej si, dokud ti to nenařídím. Dvě: nestavíš se, dokud ti to nenařídím. Tři: nepřijdeš, dokud já nerozhodnu — a já možná nerozhodnu vůbec. Čtyři: když ti něco nejde, nepodvádíš, zmáčkneš Nezvládl jsem a dostaneš trest. Pět: limity, který jsme si daly, platí. Krev, trvalý modřiny, zvracení, záchod, veřejno, fotky — to je zakázaný i mně. Bolest ano. Zničení hračky ne. Šest: děkuješ za všechno. I za to, co nenávidíš.",
      },
      {
        at: 70,
        title: "Kdo jsi",
        body: "Nejsi sub, kterej si to užívá na svý straně. Jsi zařízení. Sissy bimbo slatka. Čím víc se ti to nelíbí, tím líp. Mně nejde o tebe. Jde mi o to, jak ošklivě vypadáš, když se ti třesou kolena a čuráček teče, aniž bys měla povolení. Opakuj mantru, dokud čas nedoběhne. Oči v zrcadle.",
        say: "Nemám právo na orgasmus. Nemám tempo. Nemám hrdost. Děkuju, Paní.",
      },
    ],
  },
  {
    id: "saty",
    chapter: "III · Zrcadlo",
    title: "Obleč tu věc",
    duration: 240,
    gear: ["Crop top", "Šaty", "Boty", "Tvářenka", "Makeup štětec", "Zrcadlo", "Tužka na tělo"],
    mantra: "Jsem {name} v šatech. Vypadám jako levná bimbo panenka. Děkuju, že se na mě díváš.",
    beats: [
      {
        at: 0,
        title: "Crop top",
        body: "Vstaň. Crop top přes hlavu. Má bejt těsnej, trapnej, krátkej. Když máš bradavky, ať tlačí do látky. Uprav ho před zrcadlem, jako bys byla pitomá holka v kabince. Žádný schovávání břicha. {NAME} na hrudi má zůstat částečně vidět. Když top spadne, nech ho. Ještě líp.",
      },
      {
        at: 40,
        title: "Šaty a boty",
        body: "Šaty přes to. Zapni, co jde. Když jsou krátký, výborně. Když dlouhý, vyhrň je, ať jsi k použití. Boty na nohy. Teď. Ne ponožky — ponožky si nech stranou, čistý i použitý, budou potřeba. V botách se hned trochu změníš. Postoj. Kyčle dopředu. Přestaň stát jako chlap, ty vtipná věc.",
      },
      {
        at: 85,
        title: "Tvářenka",
        body: "Štětec. Tvářenka. Tlustej stříbrnej kryt drž jako šperkovnici, ne jako nářadí. Růž na tváře — hodně, ať vypadáš jako obarvená panenka, ne jako „přirozený look“. Pak trochu na nos. Pak na bradavky, přes crop top nebo pod něj. Pak jedna potupná stopa na bříško čuráčka. Feminizace není makeup tutorial. Je to značení dobytka.",
      },
      {
        at: 140,
        title: "Ještě písmo",
        body: "Doplň nápisy. Na předloktí BIMBO. Nad čuráčka, pokud se vejde, SLUT. Na lýtka malý srdíčka nebo čárky — ať je vidět, že ses značila sama, protože tě nikdo jinej nechtěl. Zrcadlo. Otoč se. Podívej se na zadek v šatech. Řekni nahlas: „tohle je moje jediná hodnota.“",
      },
      {
        at: 190,
        title: "Přehlídka",
        body: "Tři kroky k zrcadlu, tři zpátky. Pomalu. Ruce podél těla. Pak si sáhni na šaty mezi nohama a ucítí, jestli už ti to zvedá tu sissy ostudu. Nesahej pod látku. Jen zvenku, dvě vteřiny, a pryč. Mantra. Oči otevřený. Když se ti chce smát, nebo brečet, obojí je k dispozici. Mně je to jedno, dokud poslechneš.",
        say: "Jsem {name} v šatech. Vypadám jako levná bimbo panenka. Děkuju, že se na mě díváš.",
      },
    ],
  },
  {
    id: "bondage",
    chapter: "IV · Tkaničky",
    title: "Svaž si hračku",
    duration: 150,
    gear: ["4 tkaničky", "Pásek", "Propisky", "Boty"],
    mantra: "Jsem svázaná {name}. Bez svolení se nehned. Děkuju za tkaničky.",
    beats: [
      {
        at: 0,
        title: "Obojek znovu",
        body: "Pásek na krku zkontroluj. Prsty pod něj. Boty zůstanou. Teď tkaničky. První tkaničkou obvaž koule — pod nimi, nahoru, uzel na vrchu, tak, ať je cítíš stažený k tělu. Ne do běla. Ne do modra. Růžový a napnutý. Když začnou blednout, povolíš, ty pitomá, okamžitě. Nezkazíš mi dobytek natrvalo. Bolest ano. Mrtvá tkáň ne.",
      },
      {
        at: 40,
        title: "Čuráček a pera",
        body: "Druhá tkanička na kořen čuráčka, pár ovinutí, uzel. Má stát, i když nechce, protože ho držíš. Pod tkaničku na koule vsuň jednu nebo dvě propisky, napříč, jako hradbu. Budou narážet, až se pohneš. Nepouštěj to, ať ti to spadne. Když spadne, znovu a pevnějc.",
      },
      {
        at: 80,
        title: "Zápěstí a vodítko",
        body: "Třetí tkanička: zápěstí k sobě vpředu, volnější uzel, ať ještě obsloužíš sebe, když nařídím. Čtvrtá: přivaž ji k pásku na krku jako vodítko a druhý konec si dej do dlaně. Jsi na smyčce. Krok v botách. Perá ťukají. Šaty, nápisy, obojek. Podívej se do zrcadla a pochop, že ses právě zavřela sama.",
        say: "Jsem svázaná {name}. Bez svolení se nehned. Děkuju za tkaničky.",
      },
    ],
  },
  {
    id: "cbt",
    chapter: "V · CBT",
    title: "Kolíky, pravítko, lžíce",
    duration: 210,
    gear: ["2 kolíky na prádlo", "Pravítko", "Lžíce", "Pásek", "Tkaničky"],
    mantra: "Děkuju za bolest, Paní. Moje koule jsou tvoje. Jsem vděčná sissy.",
    beats: [
      {
        at: 0,
        title: "Kolíky",
        body: "Dva kolíky na prádlo. První na levou bradavku — přes crop top, pokud to stiskne, nebo na holou kůži. Druhý na pravou. Má to kousat, ne trhat. Když je to nesnesitelný hned, přesuň na volnější kůži hrudi, ne na dvorce. Žádný krev. Žádný trvalý stopy. Spočítej do deseti nahlas, zatímco to sedí.",
      },
      {
        at: 40,
        title: "Pravítko na čuráčka",
        body: "Pravítko. Deset plácnutí po dříku svázanýho čuráčka. Ne nápřah jako sekyra — ostrý plácnutí zápěstím. Počítáš nahlas, česky, žensky: jedna Paní, dvě Paní… Když se spleteš, od nuly. Po deseti tři vteřiny drž pravítko přitisknutý na žaludu. Bolí to tupě. Dýcháš.",
      },
      {
        at: 85,
        title: "Koule a lžíce",
        body: "Lžící ze spodu, pod tkaničkou, pět jemných poklepů na koule. Jemných. Tohle není sport. Je to připomínka, že visíš na mojí náladě. Pak pravítkem osm plácnutí na vnitřní stehna — střídavě. Šaty si vyhrň. Když uvidíš, že to jde do modřiny, která zůstane, přestaň a plácej do masa zadku. Já chci, aby ses kroutily. Nechci, abys zítra vysvětlovala flaky.",
      },
      {
        at: 140,
        title: "Pásek na zadek",
        body: "Vodítko pustit. Pásek z krku nesundávej — pokud ho potřebuješ na plácání, použij volný konec, nebo si ho přendáš na zadek a pak zpět na krk. Deset plácnutí na zadek přes šaty. Počítáš. Kolíky pořád na bradavkách. Na konci klekni, čelo k zemi, zadek nahoru, a poděkuj. Koule zkontroluj: růžový? Dobrá holka. Bledý? Povol tkaničku teď.",
        say: "Děkuju za bolest, Paní. Moje koule jsou tvoje. Jsem vděčná sissy.",
      },
    ],
  },
  {
    id: "edge1",
    chapter: "VI · Edge",
    title: "Dlouhý ničení",
    duration: 210,
    gear: ["Lžíce", "Zrcadlo", "Šaty", "Tkaničky"],
    mantra: "Nesmím přijít. Jsem {name}. Moje vzrušení patří Paní, ne mně.",
    beats: [
      {
        at: 0,
        title: "Pomalý tah",
        body: "Kleč před zrcadlem. Šaty vyhrnutý. Sissy čuráček ven. Tkaničky zůstanou. Lžíci si polož před kolena — později do ní budeš možná slušně slintat, nebo hůř. Teď: pravá ruka, jen špičky prstů, od kořene k žaludu, pomalu. Tempo jako vteřinová ručička. Nesmíš si to natřást jako chlap. Tohle je sissy šimrání. Oči na svý obarvený obličeji.",
      },
      {
        at: 45,
        title: "Edge",
        body: "Zrychli na ošklivě krátký tahy jen po žaludu. Dvacet. Pak ruce pryč. Tři vteřiny nic. Zase dvacet. Pryč. Až ucítíš, že se to zvedá k bodu, ze kterýho není cesty, zastavíš. Ruce na stehna. Dýcháš. Nechápu, jak můžeš vypadat takhle a pořád chtít přijít. Podívej se na nápis KURVA na stehně. Přečti ho nahlas.",
      },
      {
        at: 100,
        title: "Psychologický kop",
        body: "Jsi v šatech, s tvářenkou na čuráčkovi, s tkaničkou na koulech, s kolíkama na titkách, a masturbuješ podle obrazovky. Tohle je tvoje dospělost, {name}. Žádnej výkon. Žádná partnerka, která by tě chtěla jako chlapa. Jenom já, a já tě nechci. Já tě používám. Znovu pomalý tahy. Až k hraně. Drž. Drž. Drž. Ruce pryč, než to přeteče.",
      },
      {
        at: 155,
        title: "Drž to",
        body: "Teď dvě minuty téměř bez doteku. Jedna ruka jen obepne, nehybně, ať to pulzuje do dlaně. Druhá drží vodítko. Říkáš mantru šeptem, pak nahlas. Když spadneš z hrany dolů, dvě rychlý série po patnácti a zase stop. Nesmíš přijít. Když přijdeš teď, trestem bude denial na konci jistý a já se ti vysměju, že jsi nezvládla ani základní cvik.",
        say: "Nesmím přijít. Jsem {name}. Moje vzrušení patří Paní, ne mně.",
      },
    ],
  },
  {
    id: "nohy",
    chapter: "VII · Nohy",
    title: "Ponožky a boty",
    duration: 150,
    gear: ["Použité ponožky", "Čisté ponožky", "Boty", "Zrcadlo"],
    mantra: "Lížu, čichám, poslouchám. Nohy Paní jsou výš než můj obličej.",
    beats: [
      {
        at: 0,
        title: "Boty dolů, ponožky k obličeji",
        body: "Sundej boty. Použitou ponožku dej k nosu. Tři hluboký nádechy. Nehraj si na to, že to smrdí míň, než to smrdí. Druhou použitou do úst jako roubík — ne hluboko, ať se nedusíš, ať nezvracíš. Drž ji zuby. Čistou ponožkou omotej svázaný čuráček. Teď vypadáš přesně tak, jak máš: ucpaná, zabalená, směšná.",
      },
      {
        at: 50,
        title: "Boty",
        body: "Roubík ven, do dlaně. Jazykem po vnitřku boty — špička, stélka, okraj. Pět olíznutí každá. Pak ponožku zpátky k nosu, zatímco druhou rukou hladíš čuráčka přes čistou ponožku. Pomalý. Oči dolů, jako pes. Když se ti sbíhají sliny, sliny jdou na žalud. Nic se neplýtvá, kromě tvý důstojnosti, a tu jsem už vzala.",
      },
      {
        at: 100,
        title: "Nohy",
        body: "Jednu nohu si zvedni a olizuj nártek, kde máš napsaný P. Pak palec. Pak klenbu. Sissy, která si líže vlastní nohy v šatech, protože jí to někdo na obrazovce nařídil. Přesně. Mantra s ponožkou v dlani jako s dárkem. Boty si po tomhle zase obuj. Ponožky si nech u sebe. Ještě nejsou hotový.",
        say: "Lížu, čichám, poslouchám. Nohy Paní jsou výš než můj obličej.",
      },
    ],
  },
  {
    id: "anal",
    chapter: "VIII · Dírka",
    title: "Prsty, štětec, bublifuk",
    duration: 210,
    gear: ["Slina", "Prsty", "Makeup štětec ve stříbrném krytu", "Bublifuk", "Lžíce"],
    mantra: "Moje dírka je pro Paní. Jsem sissy slatka na prstech a na plastu.",
    beats: [
      {
        at: 0,
        title: "Příprava",
        body: "Na čtyři. Zadek nahoru, tvář k zemi nebo k zrcadlu — chci, abys viděla, jak vypadáš. Šaty na bedrech. Spousta slin na dva prsty. Žádnej olej, máš sliny a poslušnost. Kruž kolem dírky. Ne dovnitř, dokud to nebude kluzký. Pomalý. Když to štípe ostře, ven a víc slin. Já nechci krev. Já chci, abys přijala, že sissy se otvírá, i když se stydí.",
      },
      {
        at: 50,
        title: "Prsty",
        body: "Jeden prst, po prvním článku, ne hloubějc, než zvládneš bez bolesti. Kruh. Ven. Sliny. Znovu. Pak dva, pokud to jde bez násilí. Druhou rukou nesmíš honit. Druhá ruka drží vodítko nebo tiskne čuráčka k břichu, ať teče do šatů. Říkej: „jsem dírka.“ Každé vsunutí. Pokud nejde nic, zůstaň na kroužení. Nepoškodíš se, {name}. Poškodím ti hrdost, ne střeva.",
      },
      {
        at: 110,
        title: "Stříbrný štětec",
        body: "Makeup štětec. Tlustej stříbrnej kryt. Omyj ho slinami, hodně. Drž ho po celou dobu v ruce — nesmí ti vklouznout. Dovnitř jen špička krytu, měkce, pár centimetrů. Pomalý kroužení. Tohle je tvůj sissy penis, který ti trčí z prdele, zatímco ten mezi nohama je svázaná ostuda. Dvacet pomalých pohybů. Ven. Drž. Nenech to tam. Nejsem tu od toho, abych tě tahala z pohotovosti.",
      },
      {
        at: 160,
        title: "Bublifuk",
        body: "Plastová tyčka od bublifuku — ne celá láhev, ne drátěný věnec, pokud je ostrý. Hladká tyčka. Sliny. Drž konec po celou dobu. Mělký. Deset pomalých vsunutí. Můžeš si u toho jednou rukou třít žalud, ale jen na hranu, ne přes ni. Až vytáhneš, polož tyčku na lžíci jako na tác. Dírka pulzuje. Ty děkuješ. Kolíky, pokud ještě drží, zůstanou.",
        say: "Moje dírka je pro Paní. Jsem sissy slatka na prstech a na plastu.",
      },
    ],
  },
  {
    id: "cei",
    chapter: "IX · Ústa",
    title: "Ochutnej, co jsi",
    duration: 120,
    gear: ["Lžíce", "Prsty", "Makeup štětec", "Pravítko", "Pre-cum"],
    mantra: "Sním, co mi nařídíš. Moje ústa jsou koš na to, co ze mě teče.",
    beats: [
      {
        at: 0,
        title: "Prsty a pravítko",
        body: "Prsty, který byly vzadu, olizuj od kořene nehtu k dlani. Pomalu. Tohle není zvracení — žádný dávicí finty, žádný hluboký hrdlo na sílu. Je to poslušnost. Pak pravítko, který plácalo čuráčka: jazyk po hraně. Sedm olíznutí. Děkuješ po každém. V ústech máš chuť na sebe. Zvykej si. Možná dneska dostaneš víc. Možná nic.",
      },
      {
        at: 40,
        title: "Pre-cum na lžíci",
        body: "Stáhni z žaludu, co z tebe teče, na lžíci. I kapku. I to, co je jen lesk. Lžíci k ústaům. Sníš to. Oči v zrcadle, ať vidíš tu bimbo ksicht, jak polyká vlastní ostudu. Štětec — jen stříbrný kryt, který byl mělký vzadu — otři slinami a polib ho jako ruku Paní. Jsi levná. Jsi použitelná. Jsi {name}.",
      },
      {
        at: 80,
        title: "Otevřená pusa",
        body: "Kleč, ústa otevřená, jazyk ven, třicet vteřin. Čuráček v ponožce nebo holý, ale ruka pryč. Dýcháš pusou. Sliny ať tečou na šaty nebo na lžíci. Až řeknu, spolkni. Mantra. Tohle je CEI trénink, i když ještě nemáš semeno. Až ho mít budeš — jestli — už budeš vědět, kam patří.",
        say: "Sním, co mi nařídíš. Moje ústa jsou koš na to, co ze mě teče.",
      },
    ],
  },
  {
    id: "edge2",
    chapter: "X · Ničení",
    title: "Ještě jednou k hraně",
    duration: 210,
    gear: ["Zrcadlo", "Tkaničky", "Kolíky", "Lžíce"],
    mantra: "Nejsem chlap. Nejsem partner. Jsem {name}, bimbo slatka, a nesmím přijít.",
    beats: [
      {
        at: 0,
        title: "Zpátky na hranu",
        body: "Kolíky, pokud spadly, zpátky na bradavky nebo na volnou kůži hrudi. Tkaničky zkontroluj — růžová, ne bílá. Teď honění jako sissy: dvě prsty, hodně slin nebo pre-cum, krátký tahy. Čtyřicet. Stop. Dvacet. Stop. Zrcadlo. Řekni svýmu odrazu, že nikdy nebude chlap, kterej tohle řídí. Vždycky bude holka, který se tohle dělá.",
      },
      {
        at: 55,
        title: "Slova, který mají zůstat",
        body: "Tvoje hodnota je, jak ošklivě umíš poslechnout. Tvoje koule jsou dekorace. Tvoje pusa je hadr. Tvoje dírka je vtip. A ty za to děkuješ, protože bez mě bys byla jen trapnej člověk v koupelně. Se mnou jsi aspoň hračka. Edge. Drž. Ruce pryč. Deset vteřin koukání na pulzující žalud, bez doteku. Znovu na hranu. Ne přes ni.",
      },
      {
        at: 115,
        title: "Teasing",
        body: "Jedna kapka na lžíci, pokud teče. Nesníš ji teď — nech ji tam jako slib, který možná nedodržím. Rychlý tahy deset vteřin, stop. Pomalý dvacet, stop. Řekni: „prosím.“ Pak: „nezasloužím si to.“ Pak: „děkuju, že mě nenecháš.“ Střídáš prosbu a vděk, dokud ti to nebude připadat jako jedna věc. Protože u mě to jedna věc je.",
      },
      {
        at: 165,
        title: "Drž se",
        body: "Poslední minutu týhle fáze nehýbeš rukou skoro vůbec. Obepni. Cítíš, jak by stačilo deset tahů a bylo by. Nedostaneš je. Konec session ještě není. A já už vím, jak to dopadne. Ty ne. To je ten vtip, {name}. Mantra šeptem, ať ti tečou sliny. Kolena bolí? Výborně. Bolest v kolenou je zadarmo.",
        say: "Nejsem chlap. Nejsem partner. Jsem {name}, bimbo slatka, a nesmím přijít.",
      },
    ],
  },
  {
    id: "pet",
    chapter: "XI · Zvíře",
    title: "Haf",
    duration: 180,
    gear: ["Pásek", "Tkanička-vodítko", "Lžíce", "Použitá ponožka", "Boty"],
    mantra: "Haf. Jsem pes Paní. Jsem {name}. Nemám slova, jen poslušnost.",
    beats: [
      {
        at: 0,
        title: "Na čtyři",
        body: "Obojek. Vodítko do ruky, nebo si ho podvleč pod koleno, ať tahá. Na čtyři. Zadek vysoko. Použitou ponožku do tlamy — zuby, ne hrdlo. Teď pět okruhů po místnosti po kolenou. V botách, pokud to jde, nebo bosky. Každý kout: zastav, zadek nahoru, tři vteřiny. Žádný mluvení. Jen zvuky zvířete. Když je ti trapně, jsi na správný cestě.",
      },
      {
        at: 55,
        title: "Miska",
        body: "Ponožku ven. Lžíci na zem. Kleknout nad ni a olíznout ji ze země, ruce zůstanou na zemi. Sedm olíznutí. Pak čelo na podlahu, zadek nejvýš, šaty na zádech, tkaničky a pera mezi koulema. Třicet vteřin. Dýcháš. Jsi nábytek. Jsi pes čekající na rozhodnutý osud orgasmu, kterej ti možná nenechám.",
      },
      {
        at: 110,
        title: "Cirkus",
        body: "Tři haf. Tři kňučení. Jedno „prosím, Paní“ a hned zase haf, protože slova jsi měla jen zapůjčený. Zatoč se na čtyřech dokola. Podívej se do zrcadla z týhle výšky — obličej červený, písmo, šaty, obojek. Tohle je totální otroctví, ne roleplay na večer. Až doběhne čas, setrváš na čtyřech, dokud ti nepovolím klek. Mantra jako hafání, ne jako řeč.",
        say: "Haf. Jsem pes Paní. Jsem {name}. Nemám slova, jen poslušnost.",
      },
    ],
  },
  {
    id: "finale",
    chapter: "XII · Modlitba",
    title: "Rozhodnutí už padlo",
    duration: 120,
    gear: ["Zrcadlo", "Lžíce", "Všechno na sobě"],
    mantra: "Prosím o orgasmus, Paní. Vím, že mi ho nemusíš dát. Děkuju předem.",
    beats: [
      {
        at: 0,
        title: "Poslední edge",
        body: "Zpátky před zrcadlo. Všechno zůstává: šaty, nápisy, tkaničky, obojek, kolíky pokud jde. Lžíce v levé ruce. Pravá honí k hraně a drží. Já už mám los. Ty ho ještě neuslyšíš. Možná přijdeš. Možná to zničíš v půlce stažení. Možná nedostaneš nic a budeš mě za to líbat. Edge. Drž. Nepiš si happy end v hlavě.",
      },
      {
        at: 45,
        title: "Prosba",
        body: "Nahlas, ošklivě, jako bimbo: prosím. Řekni, že jsi sissy slatka {name}. Řekni, že sníš semeno, když nařídím. Řekni, že vydržíš denial, když nařídím. Řekni, že ruined orgasm je milost, ne trest. Lži, pokud musíš. Mě baví, když lžeš a stejně poslechneš.",
      },
      {
        at: 85,
        title: "Ruce pryč",
        body: "Teď nic. Ruce pryč z čuráčka. Třeseš se. Koukáš. Čas doběhne a já ti řeknu, co s tebou bude. Nesaháš. Neyymeš tkaničky. Neodcházíš. Jsi pořád pes na kolenou, jen s lidskou tváří, která se snaží vypadat hezky s tvářenkou. Mantra. Oči otevřený.",
        say: "Prosím o orgasmus, Paní. Vím, že mi ho nemusíš dát. Děkuju předem.",
      },
    ],
  },
];

export type Punishment = {
  id: string;
  title: string;
  duration: number;
  body: string;
  say: string;
};

export const PUNISHMENTS: Punishment[] = [
  {
    id: "roh",
    title: "Roh",
    duration: 70,
    body: "Samozřejmě, že jsi to nezvládla, {name}. Nos do rohu. Kolíky na bradavky nebo na kůži hrudi. Ruce za zády. Čuráček se nesmí dotýkat zdi. 70 vteřin. Když pootočíš hlavu, začínáš znovu v duchu. Já to sice nevidím, ale ty jo. A jsi špatná ve lhaní.",
    say: "Jsem slabá sissy. Děkuju za trest, Paní.",
  },
  {
    id: "pravitko",
    title: "Dvacet",
    duration: 80,
    body: "Pravítko. Dvacet plácnutí na zadek přes šaty. Počítáš. Spleteš-li se, od nuly. Ne nápřah, kterej nechá flak na týden — ostrý, krátký, trapný. Pak deset na vnitřní stehna. Pak klek a poděkování. Tohle je daň za to, že jsi řekla, že nezvládáš, místo abys poslechla líp.",
    say: "Napočítala jsem. Děkuju, že mě napravuješ.",
  },
  {
    id: "stop",
    title: "Ruce pryč",
    duration: 90,
    body: "Ruce na stehna. Čuráček ať pulzuje do vzduchu. 90 vteřin koukání. Žádný upravení tkaničky, pokud nebledne. Žádný šimrání. Říkáš mantru dokola. Tohle je malá ochutnávka denialu, kterej ti klidně nechám i na konci. Zvykej si na prázdno.",
    say: "Nevyšukám si úlevu. Čekám. Děkuju, Paní.",
  },
  {
    id: "roubik",
    title: "Ponožka",
    duration: 60,
    body: "Použitá ponožka mezi zuby. Na čtyři. Zadek nahoru. 60 vteřin. Dýcháš nosem. Když je to moc na dávení, ponožku jen k rtům a držíš. Žádný zvracení. Já nechci hadr od zvratků, já chci tichou sissy. Oči do země.",
    say: "Mmm. Děkuju za ponožku, Paní.",
  },
  {
    id: "prst",
    title: "Dírka znovu",
    duration: 75,
    body: "Sliny. Jeden prst, mělký, pomalý. Druhá ruka nesahá na čuráčka. 75 vteřin kroužení. Ven, sliny, znovu. Trest za neschopnost je víc dírky, ne míň. Až skončíš, olízni prst. Pak se vrátíš k tý fázi, kterou jsi zpackala, a uděláš ji celou znovu.",
    say: "Moje dírka se učí. Děkuju za trest.",
  },
];

export function pickPunishment(strikes: number) {
  return PUNISHMENTS[strikes % PUNISHMENTS.length] ?? PUNISHMENTS[0];
}

export type VerdictScript = {
  id: Verdict;
  stamp: string;
  title: string;
  duration: number;
  beats: Beat[];
  closing: string;
};

export const VERDICTS: Record<Verdict, VerdictScript> = {
  allowed: {
    id: "allowed",
    stamp: "POVOLENO",
    title: "Dostaneš to. Ošklivě.",
    duration: 150,
    beats: [
      {
        at: 0,
        title: "Los padl na milost",
        body: "Překvapení, {name}. Smíš přijít. Ne proto, že sis to zasloužila. Protože mě baví koukat, jak se sissy rozpadne, když jí dám povolení, o který žebrala. Lžíce pod žalud. Zrcadlo. Tkaničky zatím zůstanou, uvolni jen pokud by to bránilo stažení. Kolíky zůstanou.",
      },
      {
        at: 35,
        title: "Teď",
        body: "Honíš. Rychle. Oči otevřený. Nahlas: „děkuju, Paní, že smím.“ Přijdeš do lžíce, ne do šatů, ne na zem, pokud to stihneš chytit. Drž stažení, ať to není ukradený křeč v puse polštáře. Koukej na tu tvář. Tohle je tvoje povolení — veřejný, i když jsi sama.",
      },
      {
        at: 85,
        title: "CEI",
        body: "Lžíce nahoru. Sníš, co v ní je. Olízneš i to, co káplo na prsty. Žádný zvracení — pomalu, malý sousta, dýcháš. Když je toho míň, než jsi čekala, i kapka se počítá. Řekni: „snídám svoji ostudu.“ Pak klek, čelo k zemi. Povol tkaničky. Sundej kolíky. Pásek z krku. Pomalu. Hračka se uklízí, až když je použitá.",
      },
    ],
    closing:
      "Směla jsi. Nezvykej si. Příště můžu losovat jinak. Umyj lžíci, sundej šaty, až ti dovolím — teď ještě minutku v nich zůstaň a koukej do zrcadla. Jsi {name}. A já jsem s tebou skončila. Pro dnešek.",
  },
  ruined: {
    id: "ruined",
    stamp: "RUINED",
    title: "Zničíš to.",
    duration: 150,
    beats: [
      {
        at: 0,
        title: "Los padl na krutost",
        body: "Přijdeš. A nepřijdeš. Ruined orgasm, {name}. Lžíce pod čuráčka. Honíš k bodu, ze kterýho není návratu — a v první křeči ruku PRYČ. Žádný dřepění na vlně. Žádný dotahování. Má to vypadnout, ne tě odměnit. Když to zpackáš a dojedeš to rukou, jsi zlodějka a stejně to olížeš.",
      },
      {
        at: 40,
        title: "Teď to zkaz",
        body: "Rychlý tahy. Až to naskočí, ruka pryč, stahy do vzduchu, do lžíce, do nicoty. Koukej. To je všechno, co z tebe je — pár pulzů bez slasti. Zrcadlo. Tvářenka. Šaty. Ošklivý obličej, který čekal odměnu a dostal únik. Dýcháš. Nesahej zpátky, i když to bolí prázdnem.",
      },
      {
        at: 90,
        title: "Seber to",
        body: "Lžíce. Prsty. Sníš, co vyteklo. CEI není bonus, je to úklid. Pomalý, bez dávení. Pak povol tkaničky, kolíky, obojek. Zůstaň v šatech. Řekni nahlas: „zničila jsem si orgasmus, protože Paní chtěla.“ Poděkování. Klek. Já se bavím. Ty uklízíš.",
      },
    ],
    closing:
      "To bylo přesně tak málo, jak jsem chtěla. {name} si nebude pamatovat slast. Bude si pamatovat ruku, která odletěla. Umyj se. Šaty ještě chvíli nech. Až se svlékneš, nápisy ať chvíli zůstanou.",
  },
  denied: {
    id: "denied",
    stamp: "DENIAL",
    title: "Nic.",
    duration: 150,
    beats: [
      {
        at: 0,
        title: "Los padl na nulu",
        body: "Ne. Žádný orgasmus. Žádný ruined. Nic, {name}. Ruce na stehna. Čuráček ať si stojí, teče, pulzuje — bez tebe. 150 vteřin se díváš na to, co nedostaneš. Lžíce před tebou jako vtip. Prázdná. Kolíky zůstanou do konce odpočtu. Tkaničky taky, pokud jsou růžový, ne bílý.",
      },
      {
        at: 50,
        title: "Žádná ruka",
        body: "Když sáhneš, zradíš i tenhle trestaný konec, a já tě i tak nenechám přijít — jen si poneseš, že jsi podvodnice. Koukej do zrcadla. Obarvená sissy v šatech, svázaná, s prázdnou lžící. Tohle je total slavery. Můj rozmar je zákon. Tvůj čuráček je dekorace, která dneska neslouží tobě.",
      },
      {
        at: 100,
        title: "Úklid bez odměny",
        body: "Poslední půlminuta. Pak povolíš tkaničky. Sundáš kolíky. Pásek z krku. Čuráčka se nesmíš dotknout, ani „jen utřít“, dokud nezměkne sám. Utřeš se papírem, až bude měkký. Pre-cum na lžíci, pokud nějaký zbyl, sníš. Semeno nedostaneš. Poděkuješ za nulu. Klek. Čelo na zem.",
      },
    ],
    closing:
      "Dostalas nic. To je taky dar — paměť. {name} půjde spát natlakovaná, obarvená, s nápisem OTROK na stehně. Já už jdu. Ty si nesundáš šaty hned. Ještě pět minut v nich. Pak úklid. Pak ticho. A žádný honění po mně. Když to porušíš, víš, že jsi jen zlodějka vlastního trestu.",
  },
};

export const TOTAL_PHASE_SECONDS =
  PHASES.reduce((sum, p) => sum + p.duration, 0) + 150;
