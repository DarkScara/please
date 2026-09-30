import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Mic, c as Check, i as ShieldOff, n as Volume2, o as Lock, r as TriangleAlert, s as Crown, t as VolumeX } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-dAPqGZJP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAMES = [
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
	"Sissy Princess"
];
var EQUIPMENT = [
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
	"Soukromí — nikdo nepřijde"
];
var HARD_LIMITS = [
	"Žádná krev",
	"Žádné trvalé modřiny",
	"Žádné zvracení",
	"Žádné piss / shit / WC play",
	"Žádné veřejné věci, fotky ani nahrávky"
];
function fill(text, name) {
	return text.replaceAll("{name}", name).replaceAll("{NAME}", name.toUpperCase());
}
function pickName() {
	return NAMES[Math.floor(Math.random() * NAMES.length)] ?? "Candy";
}
function pickVerdict() {
	const roll = Math.random();
	if (roll < .18) return "allowed";
	if (roll < .59) return "ruined";
	return "denied";
}
var PHASES = [
	{
		id: "jmeno",
		chapter: "I · Jméno",
		title: "Už nejsi nikdo",
		duration: 80,
		gear: [
			"Tužka na tělo",
			"Zrcadlo",
			"Tlustá fixa pokud ji máš"
		],
		mantra: "Jmenuju se {name}. Jsem sissy bimbo slatka Paní. Patřím jen jí.",
		beats: [
			{
				at: 0,
				title: "Klečni.",
				body: "Klečni před zrcadlo. Nahá. Ruce na stehnech, dlaně nahoru. Oči na sebe. Tohle není hra, ve který máš slovo. Jsi hračka, kterou si dneska rozložím, obleču, svážu a použiju. Tvoje jméno je {name}. Ne přezdívka. Identita. Říkej si ho v hlavě, dokud ti to nebude připadat ohavně přirozený."
			},
			{
				at: 25,
				title: "Napiš to.",
				body: "Tužkou na tělo — nebo fixou, pokud je tlustší a ošklivější — napiš si na hruď velkými písmeny {NAME}. Na břicho SISSY. Na vnitřní stranu jednoho stehna KURVA, na druhý OTROK. Na nártek obou nohou P. Nezmetkuješ to. Písmena mají bejt čitelná z dálky, až budeš na čtyřech. Když se písmo rozmaže, jsi trestaná za nepořádek."
			},
			{
				at: 55,
				title: "Řekni to zrcadlu.",
				body: "Podívej se tý potvoře v zrcadle do očí. Už to není chlap. Je to natřená sissy, která čeká, až jí někdo řekne, co má dělat s čuráčkem. Nahlas, pomalu, třikrát: mantra dole. Když se zasekneš, začni znovu. Stydět se je v pořádku. Přestat je zakázaný.",
				say: "Jmenuju se {name}. Jsem sissy bimbo slatka Paní. Patřím jen jí."
			}
		]
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
				body: "Pásek si dej kolem krku jako obojek. Dírku utáhni tak, ať ho cítíš, ne ať se dusíš. Prsty musíš vsunout pod pásek. Když ne, povolíš. Nechci mrtvou hračku, chci poslušnou. Teď poslouchej, {name}. Dneska neexistuje tvoje tempo. Neexistuje tvoje nálada. Existuju já a tvoje poslušnost."
			},
			{
				at: 30,
				title: "Co platí",
				body: "Jedna: nesahej si, dokud ti to nenařídím. Dvě: nestavíš se, dokud ti to nenařídím. Tři: nepřijdeš, dokud já nerozhodnu — a já možná nerozhodnu vůbec. Čtyři: když ti něco nejde, nepodvádíš, zmáčkneš Nezvládl jsem a dostaneš trest. Pět: limity, který jsme si daly, platí. Krev, trvalý modřiny, zvracení, záchod, veřejno, fotky — to je zakázaný i mně. Bolest ano. Zničení hračky ne. Šest: děkuješ za všechno. I za to, co nenávidíš."
			},
			{
				at: 70,
				title: "Kdo jsi",
				body: "Nejsi sub, kterej si to užívá na svý straně. Jsi zařízení. Sissy bimbo slatka. Čím víc se ti to nelíbí, tím líp. Mně nejde o tebe. Jde mi o to, jak ošklivě vypadáš, když se ti třesou kolena a čuráček teče, aniž bys měla povolení. Opakuj mantru, dokud čas nedoběhne. Oči v zrcadle.",
				say: "Nemám právo na orgasmus. Nemám tempo. Nemám hrdost. Děkuju, Paní."
			}
		]
	},
	{
		id: "saty",
		chapter: "III · Zrcadlo",
		title: "Obleč tu věc",
		duration: 240,
		gear: [
			"Crop top",
			"Šaty",
			"Boty",
			"Tvářenka",
			"Makeup štětec",
			"Zrcadlo",
			"Tužka na tělo"
		],
		mantra: "Jsem {name} v šatech. Vypadám jako levná bimbo panenka. Děkuju, že se na mě díváš.",
		beats: [
			{
				at: 0,
				title: "Crop top",
				body: "Vstaň. Crop top přes hlavu. Má bejt těsnej, trapnej, krátkej. Když máš bradavky, ať tlačí do látky. Uprav ho před zrcadlem, jako bys byla pitomá holka v kabince. Žádný schovávání břicha. {NAME} na hrudi má zůstat částečně vidět. Když top spadne, nech ho. Ještě líp."
			},
			{
				at: 40,
				title: "Šaty a boty",
				body: "Šaty přes to. Zapni, co jde. Když jsou krátký, výborně. Když dlouhý, vyhrň je, ať jsi k použití. Boty na nohy. Teď. Ne ponožky — ponožky si nech stranou, čistý i použitý, budou potřeba. V botách se hned trochu změníš. Postoj. Kyčle dopředu. Přestaň stát jako chlap, ty vtipná věc."
			},
			{
				at: 85,
				title: "Tvářenka",
				body: "Štětec. Tvářenka. Tlustej stříbrnej kryt drž jako šperkovnici, ne jako nářadí. Růž na tváře — hodně, ať vypadáš jako obarvená panenka, ne jako „přirozený look“. Pak trochu na nos. Pak na bradavky, přes crop top nebo pod něj. Pak jedna potupná stopa na bříško čuráčka. Feminizace není makeup tutorial. Je to značení dobytka."
			},
			{
				at: 140,
				title: "Ještě písmo",
				body: "Doplň nápisy. Na předloktí BIMBO. Nad čuráčka, pokud se vejde, SLUT. Na lýtka malý srdíčka nebo čárky — ať je vidět, že ses značila sama, protože tě nikdo jinej nechtěl. Zrcadlo. Otoč se. Podívej se na zadek v šatech. Řekni nahlas: „tohle je moje jediná hodnota.“"
			},
			{
				at: 190,
				title: "Přehlídka",
				body: "Tři kroky k zrcadlu, tři zpátky. Pomalu. Ruce podél těla. Pak si sáhni na šaty mezi nohama a ucítí, jestli už ti to zvedá tu sissy ostudu. Nesahej pod látku. Jen zvenku, dvě vteřiny, a pryč. Mantra. Oči otevřený. Když se ti chce smát, nebo brečet, obojí je k dispozici. Mně je to jedno, dokud poslechneš.",
				say: "Jsem {name} v šatech. Vypadám jako levná bimbo panenka. Děkuju, že se na mě díváš."
			}
		]
	},
	{
		id: "bondage",
		chapter: "IV · Tkaničky",
		title: "Svaž si hračku",
		duration: 150,
		gear: [
			"4 tkaničky",
			"Pásek",
			"Propisky",
			"Boty"
		],
		mantra: "Jsem svázaná {name}. Bez svolení se nehned. Děkuju za tkaničky.",
		beats: [
			{
				at: 0,
				title: "Obojek znovu",
				body: "Pásek na krku zkontroluj. Prsty pod něj. Boty zůstanou. Teď tkaničky. První tkaničkou obvaž koule — pod nimi, nahoru, uzel na vrchu, tak, ať je cítíš stažený k tělu. Ne do běla. Ne do modra. Růžový a napnutý. Když začnou blednout, povolíš, ty pitomá, okamžitě. Nezkazíš mi dobytek natrvalo. Bolest ano. Mrtvá tkáň ne."
			},
			{
				at: 40,
				title: "Čuráček a pera",
				body: "Druhá tkanička na kořen čuráčka, pár ovinutí, uzel. Má stát, i když nechce, protože ho držíš. Pod tkaničku na koule vsuň jednu nebo dvě propisky, napříč, jako hradbu. Budou narážet, až se pohneš. Nepouštěj to, ať ti to spadne. Když spadne, znovu a pevnějc."
			},
			{
				at: 80,
				title: "Zápěstí a vodítko",
				body: "Třetí tkanička: zápěstí k sobě vpředu, volnější uzel, ať ještě obsloužíš sebe, když nařídím. Čtvrtá: přivaž ji k pásku na krku jako vodítko a druhý konec si dej do dlaně. Jsi na smyčce. Krok v botách. Perá ťukají. Šaty, nápisy, obojek. Podívej se do zrcadla a pochop, že ses právě zavřela sama.",
				say: "Jsem svázaná {name}. Bez svolení se nehned. Děkuju za tkaničky."
			}
		]
	},
	{
		id: "cbt",
		chapter: "V · CBT",
		title: "Kolíky, pravítko, lžíce",
		duration: 210,
		gear: [
			"2 kolíky na prádlo",
			"Pravítko",
			"Lžíce",
			"Pásek",
			"Tkaničky"
		],
		mantra: "Děkuju za bolest, Paní. Moje koule jsou tvoje. Jsem vděčná sissy.",
		beats: [
			{
				at: 0,
				title: "Kolíky",
				body: "Dva kolíky na prádlo. První na levou bradavku — přes crop top, pokud to stiskne, nebo na holou kůži. Druhý na pravou. Má to kousat, ne trhat. Když je to nesnesitelný hned, přesuň na volnější kůži hrudi, ne na dvorce. Žádný krev. Žádný trvalý stopy. Spočítej do deseti nahlas, zatímco to sedí."
			},
			{
				at: 40,
				title: "Pravítko na čuráčka",
				body: "Pravítko. Deset plácnutí po dříku svázanýho čuráčka. Ne nápřah jako sekyra — ostrý plácnutí zápěstím. Počítáš nahlas, česky, žensky: jedna Paní, dvě Paní… Když se spleteš, od nuly. Po deseti tři vteřiny drž pravítko přitisknutý na žaludu. Bolí to tupě. Dýcháš."
			},
			{
				at: 85,
				title: "Koule a lžíce",
				body: "Lžící ze spodu, pod tkaničkou, pět jemných poklepů na koule. Jemných. Tohle není sport. Je to připomínka, že visíš na mojí náladě. Pak pravítkem osm plácnutí na vnitřní stehna — střídavě. Šaty si vyhrň. Když uvidíš, že to jde do modřiny, která zůstane, přestaň a plácej do masa zadku. Já chci, aby ses kroutily. Nechci, abys zítra vysvětlovala flaky."
			},
			{
				at: 140,
				title: "Pásek na zadek",
				body: "Vodítko pustit. Pásek z krku nesundávej — pokud ho potřebuješ na plácání, použij volný konec, nebo si ho přendáš na zadek a pak zpět na krk. Deset plácnutí na zadek přes šaty. Počítáš. Kolíky pořád na bradavkách. Na konci klekni, čelo k zemi, zadek nahoru, a poděkuj. Koule zkontroluj: růžový? Dobrá holka. Bledý? Povol tkaničku teď.",
				say: "Děkuju za bolest, Paní. Moje koule jsou tvoje. Jsem vděčná sissy."
			}
		]
	},
	{
		id: "edge1",
		chapter: "VI · Edge",
		title: "Dlouhý ničení",
		duration: 210,
		gear: [
			"Lžíce",
			"Zrcadlo",
			"Šaty",
			"Tkaničky"
		],
		mantra: "Nesmím přijít. Jsem {name}. Moje vzrušení patří Paní, ne mně.",
		beats: [
			{
				at: 0,
				title: "Pomalý tah",
				body: "Kleč před zrcadlem. Šaty vyhrnutý. Sissy čuráček ven. Tkaničky zůstanou. Lžíci si polož před kolena — později do ní budeš možná slušně slintat, nebo hůř. Teď: pravá ruka, jen špičky prstů, od kořene k žaludu, pomalu. Tempo jako vteřinová ručička. Nesmíš si to natřást jako chlap. Tohle je sissy šimrání. Oči na svý obarvený obličeji."
			},
			{
				at: 45,
				title: "Edge",
				body: "Zrychli na ošklivě krátký tahy jen po žaludu. Dvacet. Pak ruce pryč. Tři vteřiny nic. Zase dvacet. Pryč. Až ucítíš, že se to zvedá k bodu, ze kterýho není cesty, zastavíš. Ruce na stehna. Dýcháš. Nechápu, jak můžeš vypadat takhle a pořád chtít přijít. Podívej se na nápis KURVA na stehně. Přečti ho nahlas."
			},
			{
				at: 100,
				title: "Psychologický kop",
				body: "Jsi v šatech, s tvářenkou na čuráčkovi, s tkaničkou na koulech, s kolíkama na titkách, a masturbuješ podle obrazovky. Tohle je tvoje dospělost, {name}. Žádnej výkon. Žádná partnerka, která by tě chtěla jako chlapa. Jenom já, a já tě nechci. Já tě používám. Znovu pomalý tahy. Až k hraně. Drž. Drž. Drž. Ruce pryč, než to přeteče."
			},
			{
				at: 155,
				title: "Drž to",
				body: "Teď dvě minuty téměř bez doteku. Jedna ruka jen obepne, nehybně, ať to pulzuje do dlaně. Druhá drží vodítko. Říkáš mantru šeptem, pak nahlas. Když spadneš z hrany dolů, dvě rychlý série po patnácti a zase stop. Nesmíš přijít. Když přijdeš teď, trestem bude denial na konci jistý a já se ti vysměju, že jsi nezvládla ani základní cvik.",
				say: "Nesmím přijít. Jsem {name}. Moje vzrušení patří Paní, ne mně."
			}
		]
	},
	{
		id: "nohy",
		chapter: "VII · Nohy",
		title: "Ponožky a boty",
		duration: 150,
		gear: [
			"Použité ponožky",
			"Čisté ponožky",
			"Boty",
			"Zrcadlo"
		],
		mantra: "Lížu, čichám, poslouchám. Nohy Paní jsou výš než můj obličej.",
		beats: [
			{
				at: 0,
				title: "Boty dolů, ponožky k obličeji",
				body: "Sundej boty. Použitou ponožku dej k nosu. Tři hluboký nádechy. Nehraj si na to, že to smrdí míň, než to smrdí. Druhou použitou do úst jako roubík — ne hluboko, ať se nedusíš, ať nezvracíš. Drž ji zuby. Čistou ponožkou omotej svázaný čuráček. Teď vypadáš přesně tak, jak máš: ucpaná, zabalená, směšná."
			},
			{
				at: 50,
				title: "Boty",
				body: "Roubík ven, do dlaně. Jazykem po vnitřku boty — špička, stélka, okraj. Pět olíznutí každá. Pak ponožku zpátky k nosu, zatímco druhou rukou hladíš čuráčka přes čistou ponožku. Pomalý. Oči dolů, jako pes. Když se ti sbíhají sliny, sliny jdou na žalud. Nic se neplýtvá, kromě tvý důstojnosti, a tu jsem už vzala."
			},
			{
				at: 100,
				title: "Nohy",
				body: "Jednu nohu si zvedni a olizuj nártek, kde máš napsaný P. Pak palec. Pak klenbu. Sissy, která si líže vlastní nohy v šatech, protože jí to někdo na obrazovce nařídil. Přesně. Mantra s ponožkou v dlani jako s dárkem. Boty si po tomhle zase obuj. Ponožky si nech u sebe. Ještě nejsou hotový.",
				say: "Lížu, čichám, poslouchám. Nohy Paní jsou výš než můj obličej."
			}
		]
	},
	{
		id: "anal",
		chapter: "VIII · Dírka",
		title: "Prsty, štětec, bublifuk",
		duration: 210,
		gear: [
			"Slina",
			"Prsty",
			"Makeup štětec ve stříbrném krytu",
			"Bublifuk",
			"Lžíce"
		],
		mantra: "Moje dírka je pro Paní. Jsem sissy slatka na prstech a na plastu.",
		beats: [
			{
				at: 0,
				title: "Příprava",
				body: "Na čtyři. Zadek nahoru, tvář k zemi nebo k zrcadlu — chci, abys viděla, jak vypadáš. Šaty na bedrech. Spousta slin na dva prsty. Žádnej olej, máš sliny a poslušnost. Kruž kolem dírky. Ne dovnitř, dokud to nebude kluzký. Pomalý. Když to štípe ostře, ven a víc slin. Já nechci krev. Já chci, abys přijala, že sissy se otvírá, i když se stydí."
			},
			{
				at: 50,
				title: "Prsty",
				body: "Jeden prst, po prvním článku, ne hloubějc, než zvládneš bez bolesti. Kruh. Ven. Sliny. Znovu. Pak dva, pokud to jde bez násilí. Druhou rukou nesmíš honit. Druhá ruka drží vodítko nebo tiskne čuráčka k břichu, ať teče do šatů. Říkej: „jsem dírka.“ Každé vsunutí. Pokud nejde nic, zůstaň na kroužení. Nepoškodíš se, {name}. Poškodím ti hrdost, ne střeva."
			},
			{
				at: 110,
				title: "Stříbrný štětec",
				body: "Makeup štětec. Tlustej stříbrnej kryt. Omyj ho slinami, hodně. Drž ho po celou dobu v ruce — nesmí ti vklouznout. Dovnitř jen špička krytu, měkce, pár centimetrů. Pomalý kroužení. Tohle je tvůj sissy penis, který ti trčí z prdele, zatímco ten mezi nohama je svázaná ostuda. Dvacet pomalých pohybů. Ven. Drž. Nenech to tam. Nejsem tu od toho, abych tě tahala z pohotovosti."
			},
			{
				at: 160,
				title: "Bublifuk",
				body: "Plastová tyčka od bublifuku — ne celá láhev, ne drátěný věnec, pokud je ostrý. Hladká tyčka. Sliny. Drž konec po celou dobu. Mělký. Deset pomalých vsunutí. Můžeš si u toho jednou rukou třít žalud, ale jen na hranu, ne přes ni. Až vytáhneš, polož tyčku na lžíci jako na tác. Dírka pulzuje. Ty děkuješ. Kolíky, pokud ještě drží, zůstanou.",
				say: "Moje dírka je pro Paní. Jsem sissy slatka na prstech a na plastu."
			}
		]
	},
	{
		id: "cei",
		chapter: "IX · Ústa",
		title: "Ochutnej, co jsi",
		duration: 120,
		gear: [
			"Lžíce",
			"Prsty",
			"Makeup štětec",
			"Pravítko",
			"Pre-cum"
		],
		mantra: "Sním, co mi nařídíš. Moje ústa jsou koš na to, co ze mě teče.",
		beats: [
			{
				at: 0,
				title: "Prsty a pravítko",
				body: "Prsty, který byly vzadu, olizuj od kořene nehtu k dlani. Pomalu. Tohle není zvracení — žádný dávicí finty, žádný hluboký hrdlo na sílu. Je to poslušnost. Pak pravítko, který plácalo čuráčka: jazyk po hraně. Sedm olíznutí. Děkuješ po každém. V ústech máš chuť na sebe. Zvykej si. Možná dneska dostaneš víc. Možná nic."
			},
			{
				at: 40,
				title: "Pre-cum na lžíci",
				body: "Stáhni z žaludu, co z tebe teče, na lžíci. I kapku. I to, co je jen lesk. Lžíci k ústaům. Sníš to. Oči v zrcadle, ať vidíš tu bimbo ksicht, jak polyká vlastní ostudu. Štětec — jen stříbrný kryt, který byl mělký vzadu — otři slinami a polib ho jako ruku Paní. Jsi levná. Jsi použitelná. Jsi {name}."
			},
			{
				at: 80,
				title: "Otevřená pusa",
				body: "Kleč, ústa otevřená, jazyk ven, třicet vteřin. Čuráček v ponožce nebo holý, ale ruka pryč. Dýcháš pusou. Sliny ať tečou na šaty nebo na lžíci. Až řeknu, spolkni. Mantra. Tohle je CEI trénink, i když ještě nemáš semeno. Až ho mít budeš — jestli — už budeš vědět, kam patří.",
				say: "Sním, co mi nařídíš. Moje ústa jsou koš na to, co ze mě teče."
			}
		]
	},
	{
		id: "edge2",
		chapter: "X · Ničení",
		title: "Ještě jednou k hraně",
		duration: 210,
		gear: [
			"Zrcadlo",
			"Tkaničky",
			"Kolíky",
			"Lžíce"
		],
		mantra: "Nejsem chlap. Nejsem partner. Jsem {name}, bimbo slatka, a nesmím přijít.",
		beats: [
			{
				at: 0,
				title: "Zpátky na hranu",
				body: "Kolíky, pokud spadly, zpátky na bradavky nebo na volnou kůži hrudi. Tkaničky zkontroluj — růžová, ne bílá. Teď honění jako sissy: dvě prsty, hodně slin nebo pre-cum, krátký tahy. Čtyřicet. Stop. Dvacet. Stop. Zrcadlo. Řekni svýmu odrazu, že nikdy nebude chlap, kterej tohle řídí. Vždycky bude holka, který se tohle dělá."
			},
			{
				at: 55,
				title: "Slova, který mají zůstat",
				body: "Tvoje hodnota je, jak ošklivě umíš poslechnout. Tvoje koule jsou dekorace. Tvoje pusa je hadr. Tvoje dírka je vtip. A ty za to děkuješ, protože bez mě bys byla jen trapnej člověk v koupelně. Se mnou jsi aspoň hračka. Edge. Drž. Ruce pryč. Deset vteřin koukání na pulzující žalud, bez doteku. Znovu na hranu. Ne přes ni."
			},
			{
				at: 115,
				title: "Teasing",
				body: "Jedna kapka na lžíci, pokud teče. Nesníš ji teď — nech ji tam jako slib, který možná nedodržím. Rychlý tahy deset vteřin, stop. Pomalý dvacet, stop. Řekni: „prosím.“ Pak: „nezasloužím si to.“ Pak: „děkuju, že mě nenecháš.“ Střídáš prosbu a vděk, dokud ti to nebude připadat jako jedna věc. Protože u mě to jedna věc je."
			},
			{
				at: 165,
				title: "Drž se",
				body: "Poslední minutu týhle fáze nehýbeš rukou skoro vůbec. Obepni. Cítíš, jak by stačilo deset tahů a bylo by. Nedostaneš je. Konec session ještě není. A já už vím, jak to dopadne. Ty ne. To je ten vtip, {name}. Mantra šeptem, ať ti tečou sliny. Kolena bolí? Výborně. Bolest v kolenou je zadarmo.",
				say: "Nejsem chlap. Nejsem partner. Jsem {name}, bimbo slatka, a nesmím přijít."
			}
		]
	},
	{
		id: "pet",
		chapter: "XI · Zvíře",
		title: "Haf",
		duration: 180,
		gear: [
			"Pásek",
			"Tkanička-vodítko",
			"Lžíce",
			"Použitá ponožka",
			"Boty"
		],
		mantra: "Haf. Jsem pes Paní. Jsem {name}. Nemám slova, jen poslušnost.",
		beats: [
			{
				at: 0,
				title: "Na čtyři",
				body: "Obojek. Vodítko do ruky, nebo si ho podvleč pod koleno, ať tahá. Na čtyři. Zadek vysoko. Použitou ponožku do tlamy — zuby, ne hrdlo. Teď pět okruhů po místnosti po kolenou. V botách, pokud to jde, nebo bosky. Každý kout: zastav, zadek nahoru, tři vteřiny. Žádný mluvení. Jen zvuky zvířete. Když je ti trapně, jsi na správný cestě."
			},
			{
				at: 55,
				title: "Miska",
				body: "Ponožku ven. Lžíci na zem. Kleknout nad ni a olíznout ji ze země, ruce zůstanou na zemi. Sedm olíznutí. Pak čelo na podlahu, zadek nejvýš, šaty na zádech, tkaničky a pera mezi koulema. Třicet vteřin. Dýcháš. Jsi nábytek. Jsi pes čekající na rozhodnutý osud orgasmu, kterej ti možná nenechám."
			},
			{
				at: 110,
				title: "Cirkus",
				body: "Tři haf. Tři kňučení. Jedno „prosím, Paní“ a hned zase haf, protože slova jsi měla jen zapůjčený. Zatoč se na čtyřech dokola. Podívej se do zrcadla z týhle výšky — obličej červený, písmo, šaty, obojek. Tohle je totální otroctví, ne roleplay na večer. Až doběhne čas, setrváš na čtyřech, dokud ti nepovolím klek. Mantra jako hafání, ne jako řeč.",
				say: "Haf. Jsem pes Paní. Jsem {name}. Nemám slova, jen poslušnost."
			}
		]
	},
	{
		id: "finale",
		chapter: "XII · Modlitba",
		title: "Rozhodnutí už padlo",
		duration: 120,
		gear: [
			"Zrcadlo",
			"Lžíce",
			"Všechno na sobě"
		],
		mantra: "Prosím o orgasmus, Paní. Vím, že mi ho nemusíš dát. Děkuju předem.",
		beats: [
			{
				at: 0,
				title: "Poslední edge",
				body: "Zpátky před zrcadlo. Všechno zůstává: šaty, nápisy, tkaničky, obojek, kolíky pokud jde. Lžíce v levé ruce. Pravá honí k hraně a drží. Já už mám los. Ty ho ještě neuslyšíš. Možná přijdeš. Možná to zničíš v půlce stažení. Možná nedostaneš nic a budeš mě za to líbat. Edge. Drž. Nepiš si happy end v hlavě."
			},
			{
				at: 45,
				title: "Prosba",
				body: "Nahlas, ošklivě, jako bimbo: prosím. Řekni, že jsi sissy slatka {name}. Řekni, že sníš semeno, když nařídím. Řekni, že vydržíš denial, když nařídím. Řekni, že ruined orgasm je milost, ne trest. Lži, pokud musíš. Mě baví, když lžeš a stejně poslechneš."
			},
			{
				at: 85,
				title: "Ruce pryč",
				body: "Teď nic. Ruce pryč z čuráčka. Třeseš se. Koukáš. Čas doběhne a já ti řeknu, co s tebou bude. Nesaháš. Neyymeš tkaničky. Neodcházíš. Jsi pořád pes na kolenou, jen s lidskou tváří, která se snaží vypadat hezky s tvářenkou. Mantra. Oči otevřený.",
				say: "Prosím o orgasmus, Paní. Vím, že mi ho nemusíš dát. Děkuju předem."
			}
		]
	}
];
var PUNISHMENTS = [
	{
		id: "roh",
		title: "Roh",
		duration: 70,
		body: "Samozřejmě, že jsi to nezvládla, {name}. Nos do rohu. Kolíky na bradavky nebo na kůži hrudi. Ruce za zády. Čuráček se nesmí dotýkat zdi. 70 vteřin. Když pootočíš hlavu, začínáš znovu v duchu. Já to sice nevidím, ale ty jo. A jsi špatná ve lhaní.",
		say: "Jsem slabá sissy. Děkuju za trest, Paní."
	},
	{
		id: "pravitko",
		title: "Dvacet",
		duration: 80,
		body: "Pravítko. Dvacet plácnutí na zadek přes šaty. Počítáš. Spleteš-li se, od nuly. Ne nápřah, kterej nechá flak na týden — ostrý, krátký, trapný. Pak deset na vnitřní stehna. Pak klek a poděkování. Tohle je daň za to, že jsi řekla, že nezvládáš, místo abys poslechla líp.",
		say: "Napočítala jsem. Děkuju, že mě napravuješ."
	},
	{
		id: "stop",
		title: "Ruce pryč",
		duration: 90,
		body: "Ruce na stehna. Čuráček ať pulzuje do vzduchu. 90 vteřin koukání. Žádný upravení tkaničky, pokud nebledne. Žádný šimrání. Říkáš mantru dokola. Tohle je malá ochutnávka denialu, kterej ti klidně nechám i na konci. Zvykej si na prázdno.",
		say: "Nevyšukám si úlevu. Čekám. Děkuju, Paní."
	},
	{
		id: "roubik",
		title: "Ponožka",
		duration: 60,
		body: "Použitá ponožka mezi zuby. Na čtyři. Zadek nahoru. 60 vteřin. Dýcháš nosem. Když je to moc na dávení, ponožku jen k rtům a držíš. Žádný zvracení. Já nechci hadr od zvratků, já chci tichou sissy. Oči do země.",
		say: "Mmm. Děkuju za ponožku, Paní."
	},
	{
		id: "prst",
		title: "Dírka znovu",
		duration: 75,
		body: "Sliny. Jeden prst, mělký, pomalý. Druhá ruka nesahá na čuráčka. 75 vteřin kroužení. Ven, sliny, znovu. Trest za neschopnost je víc dírky, ne míň. Až skončíš, olízni prst. Pak se vrátíš k tý fázi, kterou jsi zpackala, a uděláš ji celou znovu.",
		say: "Moje dírka se učí. Děkuju za trest."
	}
];
function pickPunishment(strikes) {
	return PUNISHMENTS[strikes % PUNISHMENTS.length] ?? PUNISHMENTS[0];
}
var VERDICTS = {
	allowed: {
		id: "allowed",
		stamp: "POVOLENO",
		title: "Dostaneš to. Ošklivě.",
		duration: 150,
		beats: [
			{
				at: 0,
				title: "Los padl na milost",
				body: "Překvapení, {name}. Smíš přijít. Ne proto, že sis to zasloužila. Protože mě baví koukat, jak se sissy rozpadne, když jí dám povolení, o který žebrala. Lžíce pod žalud. Zrcadlo. Tkaničky zatím zůstanou, uvolni jen pokud by to bránilo stažení. Kolíky zůstanou."
			},
			{
				at: 35,
				title: "Teď",
				body: "Honíš. Rychle. Oči otevřený. Nahlas: „děkuju, Paní, že smím.“ Přijdeš do lžíce, ne do šatů, ne na zem, pokud to stihneš chytit. Drž stažení, ať to není ukradený křeč v puse polštáře. Koukej na tu tvář. Tohle je tvoje povolení — veřejný, i když jsi sama."
			},
			{
				at: 85,
				title: "CEI",
				body: "Lžíce nahoru. Sníš, co v ní je. Olízneš i to, co káplo na prsty. Žádný zvracení — pomalu, malý sousta, dýcháš. Když je toho míň, než jsi čekala, i kapka se počítá. Řekni: „snídám svoji ostudu.“ Pak klek, čelo k zemi. Povol tkaničky. Sundej kolíky. Pásek z krku. Pomalu. Hračka se uklízí, až když je použitá."
			}
		],
		closing: "Směla jsi. Nezvykej si. Příště můžu losovat jinak. Umyj lžíci, sundej šaty, až ti dovolím — teď ještě minutku v nich zůstaň a koukej do zrcadla. Jsi {name}. A já jsem s tebou skončila. Pro dnešek."
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
				body: "Přijdeš. A nepřijdeš. Ruined orgasm, {name}. Lžíce pod čuráčka. Honíš k bodu, ze kterýho není návratu — a v první křeči ruku PRYČ. Žádný dřepění na vlně. Žádný dotahování. Má to vypadnout, ne tě odměnit. Když to zpackáš a dojedeš to rukou, jsi zlodějka a stejně to olížeš."
			},
			{
				at: 40,
				title: "Teď to zkaz",
				body: "Rychlý tahy. Až to naskočí, ruka pryč, stahy do vzduchu, do lžíce, do nicoty. Koukej. To je všechno, co z tebe je — pár pulzů bez slasti. Zrcadlo. Tvářenka. Šaty. Ošklivý obličej, který čekal odměnu a dostal únik. Dýcháš. Nesahej zpátky, i když to bolí prázdnem."
			},
			{
				at: 90,
				title: "Seber to",
				body: "Lžíce. Prsty. Sníš, co vyteklo. CEI není bonus, je to úklid. Pomalý, bez dávení. Pak povol tkaničky, kolíky, obojek. Zůstaň v šatech. Řekni nahlas: „zničila jsem si orgasmus, protože Paní chtěla.“ Poděkování. Klek. Já se bavím. Ty uklízíš."
			}
		],
		closing: "To bylo přesně tak málo, jak jsem chtěla. {name} si nebude pamatovat slast. Bude si pamatovat ruku, která odletěla. Umyj se. Šaty ještě chvíli nech. Až se svlékneš, nápisy ať chvíli zůstanou."
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
				body: "Ne. Žádný orgasmus. Žádný ruined. Nic, {name}. Ruce na stehna. Čuráček ať si stojí, teče, pulzuje — bez tebe. 150 vteřin se díváš na to, co nedostaneš. Lžíce před tebou jako vtip. Prázdná. Kolíky zůstanou do konce odpočtu. Tkaničky taky, pokud jsou růžový, ne bílý."
			},
			{
				at: 50,
				title: "Žádná ruka",
				body: "Když sáhneš, zradíš i tenhle trestaný konec, a já tě i tak nenechám přijít — jen si poneseš, že jsi podvodnice. Koukej do zrcadla. Obarvená sissy v šatech, svázaná, s prázdnou lžící. Tohle je total slavery. Můj rozmar je zákon. Tvůj čuráček je dekorace, která dneska neslouží tobě."
			},
			{
				at: 100,
				title: "Úklid bez odměny",
				body: "Poslední půlminuta. Pak povolíš tkaničky. Sundáš kolíky. Pásek z krku. Čuráčka se nesmíš dotknout, ani „jen utřít“, dokud nezměkne sám. Utřeš se papírem, až bude měkký. Pre-cum na lžíci, pokud nějaký zbyl, sníš. Semeno nedostaneš. Poděkuješ za nulu. Klek. Čelo na zem."
			}
		],
		closing: "Dostalas nic. To je taky dar — paměť. {name} půjde spát natlakovaná, obarvená, s nápisem OTROK na stehně. Já už jdu. Ty si nesundáš šaty hned. Ještě pět minut v nich. Pak úklid. Pak ticho. A žádný honění po mně. Když to porušíš, víš, že jsi jen zlodějka vlastního trestu."
	}
};
PHASES.reduce((sum, p) => sum + p.duration, 0) + 150;
function speak(text) {
	if (typeof window === "undefined" || !window.speechSynthesis) return;
	const synth = window.speechSynthesis;
	synth.cancel();
	const utter = new SpeechSynthesisUtterance(text);
	utter.lang = "cs-CZ";
	utter.rate = .9;
	utter.pitch = 1.05;
	const voices = synth.getVoices();
	const cs = voices.find((v) => v.lang.toLowerCase().startsWith("cs") && /female|woman|žena/i.test(v.name)) ?? voices.find((v) => v.lang.toLowerCase().startsWith("cs")) ?? voices.find((v) => /female|woman/i.test(v.name));
	if (cs) utter.voice = cs;
	synth.speak(utter);
}
function silence() {
	if (typeof window === "undefined" || !window.speechSynthesis) return;
	window.speechSynthesis.cancel();
}
function pad(n) {
	return n.toString().padStart(2, "0");
}
function formatClock(total) {
	const s = Math.max(0, total);
	return `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
}
function TimerRing({ remaining, duration, urgent }) {
	const size = 220;
	const stroke = 6;
	const r = 107;
	const c = 2 * Math.PI * r;
	const t = duration <= 0 ? 1 : 1 - remaining / duration;
	const offset = c * (1 - Math.min(1, Math.max(0, t)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative mx-auto ${urgent ? "timer-urgent" : ""}`,
		style: {
			width: size,
			height: size
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			viewBox: `0 0 ${size} ${size}`,
			className: "block -rotate-90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				stroke: "var(--color-border)",
				strokeWidth: stroke
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				stroke: urgent ? "var(--color-accent-hot)" : "var(--color-accent)",
				strokeWidth: stroke,
				strokeLinecap: "round",
				strokeDasharray: c,
				strokeDashoffset: offset
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `font-display tabular-nums leading-none tracking-tight ${urgent ? "text-accent-hot" : "text-fg"}`,
				style: { fontSize: "clamp(2.75rem, 12vw, 4.25rem)" },
				children: formatClock(remaining)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs font-medium uppercase tracking-[0.28em] text-muted",
				children: remaining === 0 ? "čas vypršel" : "žádný skip"
			})]
		})]
	});
}
var STORAGE_KEY = "pani-session-v1";
function loadPersist() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return null;
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
function currentBeat(beats, elapsed) {
	let beat = beats[0];
	for (const b of beats) if (elapsed >= b.at) beat = b;
	return beat;
}
function chime(freq, dur = .09, gain = .05) {
	try {
		const ctx = new (window.AudioContext || window.webkitAudioContext)();
		const osc = ctx.createOscillator();
		const g = ctx.createGain();
		osc.type = "sine";
		osc.frequency.value = freq;
		g.gain.value = gain;
		osc.connect(g);
		g.connect(ctx.destination);
		osc.start();
		osc.stop(ctx.currentTime + dur);
		g.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + dur);
	} catch {}
}
function JoiApp() {
	const [mode, setMode] = (0, import_react.useState)("gate");
	const [checked, setChecked] = (0, import_react.useState)({});
	const [ageOk, setAgeOk] = (0, import_react.useState)(false);
	const [privateOk, setPrivateOk] = (0, import_react.useState)(false);
	const [voiceOn, setVoiceOn] = (0, import_react.useState)(true);
	const [name, setName] = (0, import_react.useState)("");
	const [verdict, setVerdict] = (0, import_react.useState)("denied");
	const [phaseIndex, setPhaseIndex] = (0, import_react.useState)(0);
	const [phaseStartedAt, setPhaseStartedAt] = (0, import_react.useState)(0);
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	const [strikes, setStrikes] = (0, import_react.useState)(0);
	const [punishIndex, setPunishIndex] = (0, import_react.useState)(0);
	const [punishStartedAt, setPunishStartedAt] = (0, import_react.useState)(0);
	const [verdictStartedAt, setVerdictStartedAt] = (0, import_react.useState)(0);
	const [mantraDone, setMantraDone] = (0, import_react.useState)(false);
	const [abortAsk, setAbortAsk] = (0, import_react.useState)(false);
	const [resume, setResume] = (0, import_react.useState)(null);
	const [beatKey, setBeatKey] = (0, import_react.useState)(0);
	const lastBeatAt = (0, import_react.useRef)(-1);
	const lastSecond = (0, import_react.useRef)(-1);
	const unlockedChime = (0, import_react.useRef)(false);
	const phase = PHASES[phaseIndex];
	const punish = PUNISHMENTS[punishIndex];
	const verdictScript = VERDICTS[verdict];
	const activeDuration = mode === "phase" ? phase?.duration ?? 0 : mode === "punish" ? punish?.duration ?? 0 : mode === "verdict" ? verdictScript.duration : 0;
	const activeStarted = mode === "phase" ? phaseStartedAt : mode === "punish" ? punishStartedAt : mode === "verdict" ? verdictStartedAt : 0;
	const elapsed = activeStarted ? Math.min(activeDuration, Math.floor((now - activeStarted) / 1e3)) : 0;
	const remaining = Math.max(0, activeDuration - elapsed);
	const unlocked = remaining === 0 && activeDuration > 0;
	const beat = (0, import_react.useMemo)(() => {
		if (mode === "phase" && phase) return currentBeat(phase.beats, elapsed);
		if (mode === "verdict") return currentBeat(verdictScript.beats, elapsed);
		return null;
	}, [
		mode,
		phase,
		elapsed,
		verdictScript
	]);
	(0, import_react.useEffect)(() => {
		setResume(loadPersist());
	}, []);
	(0, import_react.useEffect)(() => {
		if (mode !== "phase" && mode !== "punish" && mode !== "verdict") return;
		const id = window.setInterval(() => setNow(Date.now()), 200);
		return () => window.clearInterval(id);
	}, [mode]);
	(0, import_react.useEffect)(() => {
		if (mode !== "phase" && mode !== "punish" && mode !== "verdict" && mode !== "interlude") return;
		const data = {
			name,
			verdict,
			phaseIndex,
			phaseStartedAt,
			strikes,
			mode,
			punishIndex,
			punishStartedAt,
			mantraDone,
			voiceOn,
			verdictStartedAt
		};
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	}, [
		mode,
		name,
		verdict,
		phaseIndex,
		phaseStartedAt,
		strikes,
		punishIndex,
		punishStartedAt,
		mantraDone,
		voiceOn,
		verdictStartedAt
	]);
	(0, import_react.useEffect)(() => {
		let sentinel = null;
		const request = async () => {
			try {
				sentinel = await navigator.wakeLock?.request("screen") ?? null;
			} catch {}
		};
		if (mode === "phase" || mode === "punish" || mode === "verdict") request();
		const onVis = () => {
			if (document.visibilityState === "visible") request();
		};
		document.addEventListener("visibilitychange", onVis);
		return () => {
			document.removeEventListener("visibilitychange", onVis);
			sentinel?.release();
		};
	}, [mode]);
	(0, import_react.useEffect)(() => {
		if (!beat) return;
		if (lastBeatAt.current === beat.at) return;
		lastBeatAt.current = beat.at;
		setBeatKey((k) => k + 1);
		setMantraDone(false);
		if (voiceOn && (mode === "phase" || mode === "verdict")) speak(fill(`${beat.title}. ${beat.body.split(/(?<=\.)\s/).slice(0, 2).join(" ")}`, name));
	}, [
		beat,
		voiceOn,
		mode,
		name
	]);
	(0, import_react.useEffect)(() => {
		if (mode !== "phase" && mode !== "punish" && mode !== "verdict") return;
		if (lastSecond.current === remaining) return;
		lastSecond.current = remaining;
		if (remaining === 10 || remaining <= 5 && remaining > 0) chime(remaining === 1 ? 660 : 420, .07, .04);
		if (remaining === 0 && !unlockedChime.current) {
			unlockedChime.current = true;
			chime(520, .16, .06);
			chime(780, .2, .05);
		}
		if (remaining > 0) unlockedChime.current = false;
	}, [remaining, mode]);
	const canSubmit = EQUIPMENT.every((item) => checked[item]) && ageOk && privateOk;
	const startFresh = () => {
		const n = pickName();
		const v = pickVerdict();
		setName(n);
		setVerdict(v);
		setPhaseIndex(0);
		setStrikes(0);
		setMantraDone(false);
		lastBeatAt.current = -1;
		localStorage.removeItem(STORAGE_KEY);
		setMode("name");
		if (voiceOn) speak(`Klečni. Od teď jsi ${n}.`);
	};
	const continueSaved = () => {
		if (!resume) return;
		setName(resume.name);
		setVerdict(resume.verdict);
		setPhaseIndex(resume.phaseIndex);
		setPhaseStartedAt(resume.phaseStartedAt || Date.now());
		setStrikes(resume.strikes);
		setPunishIndex(resume.punishIndex);
		setPunishStartedAt(resume.punishStartedAt || Date.now());
		setMantraDone(resume.mantraDone);
		setVoiceOn(resume.voiceOn);
		setVerdictStartedAt(resume.verdictStartedAt || Date.now());
		lastBeatAt.current = -1;
		const m = resume.mode === "gate" || resume.mode === "name" ? "phase" : resume.mode;
		setMode(m === "interlude" ? "phase" : m);
		if (resume.voiceOn) speak(`Utíkala jsi, ${resume.name}. Klečni zpátky.`);
	};
	const beginPhase = (index) => {
		lastBeatAt.current = -1;
		unlockedChime.current = false;
		setMantraDone(false);
		setPhaseIndex(index);
		setPhaseStartedAt(Date.now());
		setNow(Date.now());
		setMode("phase");
	};
	const completePhase = () => {
		if (!unlocked) return;
		if (phase?.mantra && !mantraDone) return;
		silence();
		if (phaseIndex >= PHASES.length - 1) {
			setMode("interlude");
			window.setTimeout(() => {
				lastBeatAt.current = -1;
				setMantraDone(false);
				setVerdictStartedAt(Date.now());
				setNow(Date.now());
				setMode("verdict");
			}, 2800);
			return;
		}
		setMode("interlude");
		const next = phaseIndex + 1;
		window.setTimeout(() => beginPhase(next), 2200);
	};
	const failPhase = () => {
		silence();
		const nextStrikes = strikes + 1;
		setStrikes(nextStrikes);
		const p = pickPunishment(strikes);
		const idx = PUNISHMENTS.findIndex((x) => x.id === p.id);
		setPunishIndex(idx < 0 ? 0 : idx);
		setPunishStartedAt(Date.now());
		setNow(Date.now());
		lastBeatAt.current = -1;
		unlockedChime.current = false;
		setMode("punish");
		if (voiceOn) speak(fill(p.body, name));
	};
	const completePunish = () => {
		if (!unlocked) return;
		silence();
		beginPhase(phaseIndex);
	};
	const completeVerdict = () => {
		if (!unlocked) return;
		silence();
		localStorage.removeItem(STORAGE_KEY);
		setMode("end");
		if (voiceOn) speak(fill(verdictScript.closing, name));
	};
	const abort = () => {
		silence();
		localStorage.removeItem(STORAGE_KEY);
		setAbortAsk(false);
		setMode("abort");
	};
	const sayMantra = (0, import_react.useCallback)((text) => {
		speak(fill(text, name));
	}, [name]);
	const progressCount = mode === "verdict" || mode === "end" ? PHASES.length : phaseIndex;
	const progressMax = PHASES.length + 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "chamber-bg relative min-h-dvh text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "chamber-grain" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4 pb-8 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-6",
			children: [
				mode !== "gate" && mode !== "name" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-4 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm italic text-accent",
							children: "PANÍ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs uppercase tracking-[0.22em] text-muted",
							children: name || "—"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex size-11 items-center justify-center rounded-md border border-border bg-surface text-muted",
							onClick: () => {
								setVoiceOn((v) => {
									const next = !v;
									if (!next) silence();
									return next;
								});
							},
							"aria-label": voiceOn ? "Ztišit Paní" : "Paní mluví",
							children: voiceOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-border bg-surface px-2.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted",
							children: ["tresty ", strikes]
						})]
					})]
				}),
				mode !== "gate" && mode !== "name" && mode !== "end" && mode !== "abort" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-5 flex gap-1",
					"aria-hidden": true,
					children: Array.from({ length: progressMax }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-0.5 flex-1 rounded-full ${i < progressCount ? "bg-accent" : i === progressCount ? "bg-accent-hot/80" : "bg-border"}` }, i))
				}),
				mode === "gate" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gate, {
					checked,
					setChecked,
					ageOk,
					setAgeOk,
					privateOk,
					setPrivateOk,
					voiceOn,
					setVoiceOn,
					canSubmit,
					resume,
					onStart: startFresh,
					onResume: continueSaved
				}),
				mode === "name" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameReveal, {
					name,
					onAccept: () => beginPhase(0)
				}),
				mode === "interlude" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Interlude, {
					title: phaseIndex >= PHASES.length - 1 ? "Rozhodnutí" : PHASES[phaseIndex + 1]?.chapter ?? "",
					name
				}),
				mode === "phase" && phase && beat && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayCard, {
					chapter: phase.chapter,
					title: phase.title,
					gear: phase.gear,
					beat,
					beatKey,
					remaining,
					duration: phase.duration,
					unlocked,
					mantra: phase.mantra,
					mantraDone,
					name,
					failLabel: "Nezvládl jsem",
					okLabel: "Splněno",
					okLockedLabel: "Čekej. Tempo řídím já.",
					onFail: failPhase,
					onOk: completePhase,
					onHear: () => sayMantra(beat.say || phase.mantra || ""),
					onSaid: () => setMantraDone(true),
					requireMantra: Boolean(phase.mantra)
				}),
				mode === "punish" && punish && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayCard, {
					chapter: "Trest",
					title: fill(punish.title, name),
					gear: [],
					beat: {
						at: 0,
						title: fill(punish.title, name),
						body: fill(punish.body, name),
						say: punish.say
					},
					beatKey: punish.id,
					remaining,
					duration: punish.duration,
					unlocked,
					mantra: punish.say,
					mantraDone,
					name,
					failLabel: "",
					okLabel: "Zpět k úkolu",
					okLockedLabel: "Trest běží.",
					onFail: () => void 0,
					onOk: completePunish,
					onHear: () => sayMantra(punish.say),
					onSaid: () => setMantraDone(true),
					requireMantra: true,
					punish: true
				}),
				mode === "verdict" && beat && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayCard, {
					chapter: `XIII · ${verdictScript.stamp}`,
					title: fill(verdictScript.title, name),
					gear: ["Lžíce", "Zrcadlo"],
					beat,
					beatKey,
					remaining,
					duration: verdictScript.duration,
					unlocked,
					mantra: "Děkuju za rozhodnutí, Paní. Platí.",
					mantraDone,
					name,
					failLabel: "",
					okLabel: "Konec session",
					okLockedLabel: "Dokonči, co jsem nařídila.",
					onFail: () => void 0,
					onOk: completeVerdict,
					onHear: () => sayMantra("Děkuju za rozhodnutí, Paní. Platí."),
					onSaid: () => setMantraDone(true),
					requireMantra: true
				}),
				mode === "end" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ending, {
					name,
					closing: verdictScript.closing,
					stamp: verdictScript.stamp
				}),
				mode === "abort" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AbortScreen, {}),
				(mode === "phase" || mode === "punish" || mode === "verdict") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center",
					children: abortAsk ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full flex-col gap-2 rounded-lg border border-border bg-surface p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Nouzový konec. Povol tkaničky. Sundej kolíky. Pásek z krku. Pak zmiz."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 flex-1 rounded-md border border-border text-sm text-muted",
								onClick: () => setAbortAsk(false),
								children: "Pokračovat"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 flex-1 rounded-md bg-accent text-sm font-medium text-fg",
								onClick: abort,
								children: "Ukončit"
							})]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-11 px-3 text-xs uppercase tracking-[0.18em] text-faint",
						onClick: () => setAbortAsk(true),
						children: "Nouzový konec"
					})
				})
			]
		})]
	});
}
function Gate({ checked, setChecked, ageOk, setAgeOk, privateOk, setPrivateOk, voiceOn, setVoiceOn, canSubmit, resume, onStart, onResume }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-xs font-medium uppercase tracking-[0.42em] text-accent",
				children: "soukromá session"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-6xl font-semibold leading-none tracking-tight sm:text-7xl",
				children: "PANÍ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-[34ch] text-base leading-relaxed text-muted",
				children: "Třicet pět minut. Žádné přeskakování. Žádné tvoje tempo. Dominantní žena, které nejde o tebe — jen o vlastní zábavu. Ty jsi hračka."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-xl border border-border bg-surface p-4 shadow-[var(--shadow-panel)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl text-fg",
					children: "Než klekneš"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm leading-relaxed text-muted",
					children: HARD_LIMITS.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldOff, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line })]
					}, line))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
						children: "Vybavení — odškrtni vše"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-2 h-11 w-full rounded-md border border-border bg-raised text-sm text-fg",
						onClick: () => {
							const allOn = EQUIPMENT.every((item) => checked[item]);
							const next = {};
							for (const item of EQUIPMENT) next[item] = !allOn;
							setChecked(next);
						},
						children: EQUIPMENT.every((item) => checked[item]) ? "Odškrtnout vybavení" : "Mám všechno vybavení"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1.5",
						children: EQUIPMENT.map((item) => {
							const on = Boolean(checked[item]);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setChecked({
									...checked,
									[item]: !on
								}),
								className: `flex h-11 w-full items-center gap-3 rounded-md border px-3 text-left text-sm ${on ? "border-accent/50 bg-raised text-fg" : "border-border bg-surface text-muted"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `flex size-5 items-center justify-center rounded-xs border ${on ? "border-accent bg-accent text-fg" : "border-border"}`,
									children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }) : null
								}), item]
							}) }, item);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						on: ageOk,
						onToggle: () => setAgeOk(!ageOk),
						label: "Je mi 18 let nebo víc."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						on: privateOk,
						onToggle: () => setPrivateOk(!privateOk),
						label: "Jsem v soukromí. Nikdo nepřijde. Nic nahrávám."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						on: voiceOn,
						onToggle: () => setVoiceOn(!voiceOn),
						label: "Paní mluví nahlas (hlas prohlížeče)."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-2",
				children: [
					resume && resume.name && resume.mode !== "end" && resume.mode !== "abort" && resume.mode !== "gate" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onResume,
						className: "h-12 w-full rounded-lg border border-border bg-raised text-sm font-medium text-fg",
						children: [
							"Utíkala jsi, ",
							resume.name,
							". Zpátky na kolena."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !canSubmit,
						onClick: onStart,
						className: "h-14 w-full rounded-lg bg-accent text-base font-medium text-fg disabled:opacity-35",
						children: "Podřizuji se"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs leading-relaxed text-faint",
						children: "Aplikace ti přidělí sissy jméno. Orgasmus na konci losuje ona — povolení, ruined, nebo denial."
					})
				]
			})
		]
	});
}
function ToggleRow({ on, onToggle, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		className: `flex min-h-11 w-full items-center gap-3 rounded-md border px-3 py-2 text-left text-sm ${on ? "border-accent/50 bg-raised text-fg" : "border-border bg-surface text-muted"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `flex size-5 shrink-0 items-center justify-center rounded-xs border ${on ? "border-accent bg-accent text-fg" : "border-border"}`,
			children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }) : null
		}), label]
	});
}
function NameReveal({ name, onAccept }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex flex-1 flex-col items-center justify-center py-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-6 text-accent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-xs uppercase tracking-[0.32em] text-muted",
				children: "přiděleno"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-6xl font-semibold leading-none",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 max-w-[32ch] text-base leading-relaxed text-muted",
				children: [
					"Od teď nejsi chlap v koupelně. Jsi ",
					name,
					" — sissy bimbo slatka, otrok, hračka. Jméno se nemění. Tempo se neptá. Klečni."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onAccept,
				className: "mt-10 h-14 w-full max-w-sm rounded-lg bg-accent text-base font-medium text-fg",
				children: "Přijímám jméno"
			})
		]
	});
}
function Interlude({ title, name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex flex-1 flex-col items-center justify-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs uppercase tracking-[0.32em] text-accent",
				children: ["dál, ", name]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-4 text-4xl font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "Nehně se. Já ještě neskončila."
			})
		]
	});
}
function PlayCard({ chapter, title, gear, beat, beatKey, remaining, duration, unlocked, mantra, mantraDone, name, failLabel, okLabel, okLockedLabel, onFail, onOk, onHear, onSaid, requireMantra, punish = false }) {
	const canOk = unlocked && (!requireMantra || mantraDone);
	const say = beat.say || mantra;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.28em] text-accent",
				children: chapter
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-1 text-3xl font-semibold leading-tight",
				children: fill(title, name)
			}),
			gear.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs leading-relaxed text-faint",
				children: gear.join(" · ")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimerRing, {
					remaining,
					duration,
					urgent: remaining > 0 && remaining <= 10
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: `beat-in mt-5 rounded-xl border p-4 shadow-[var(--shadow-panel)] ${punish ? "border-accent bg-raised" : "border-border bg-surface"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl leading-snug",
					children: fill(beat.title, name)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[15px] leading-relaxed text-fg/90",
					children: fill(beat.body, name)
				})]
			}, beatKey),
			say && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-lg border border-border bg-raised p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg italic leading-snug text-fg",
					children: fill(say, name)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onHear,
						className: "flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-surface text-sm text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), "Ať to řekne Paní"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onSaid,
						className: `flex h-11 items-center justify-center gap-2 rounded-md text-sm ${mantraDone ? "bg-ok text-bg" : "border border-border bg-surface text-fg"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-4" }), mantraDone ? "Řekla jsem" : "Řekla jsem to nahlas"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-5 grid gap-2 ${failLabel ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`,
				children: [failLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onFail,
					className: "h-14 rounded-lg border border-border bg-surface text-sm font-medium text-muted",
					children: failLabel
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !canOk,
					onClick: onOk,
					className: "flex h-14 items-center justify-center gap-2 rounded-lg bg-accent text-sm font-medium text-fg disabled:bg-raised disabled:text-faint",
					children: canOk ? okLabel : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" }), unlocked && requireMantra && !mantraDone ? "Nejdřív mantra nahlas" : okLockedLabel] })
				})]
			})
		]
	});
}
function Ending({ name, closing, stamp }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex flex-1 flex-col items-center justify-center py-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.32em] text-accent",
				children: stamp
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-4 text-5xl font-semibold",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-[36ch] text-base leading-relaxed text-muted",
				children: fill(closing, name)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-[36ch] text-sm leading-relaxed text-faint",
				children: "Povol všechno, co tě svazuje. Sundej kolíky. Zkontroluj kůži. Voda, dech, ticho. Session je uzavřená. Honění po mně není součástí milosti — pokud jsem řekla ne, platí ne."
			})
		]
	});
}
function AbortScreen() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex flex-1 flex-col items-center justify-center py-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-6 text-accent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-4 text-4xl font-semibold",
				children: "Stop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-[34ch] text-base leading-relaxed text-muted",
				children: "Povol tkaničky. Sundej kolíky. Pásek z krku. Ven s čímkoli z dírky. Teď. Až budeš volná, můžeš zmizet. Já si zapamatuju, že jsi utekla. Ty taky."
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JoiApp, {});
}
//#endregion
export { Home as component };
