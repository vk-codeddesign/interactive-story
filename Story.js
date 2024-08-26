export const storyStates = [
    {
        id: 1,
        header: "Fanget på Værelset",
        text: "Du sidder på dit værelse med armene over kors. Solen skinner udenfor, og du ved, at alle dine venner er på vej til årets fedeste fest. Men du? Du sidder fast i stuearrest. Hvorfor? Fordi du ikke kunne lade være med at kaste en papirflyver lige i hovedet på din lillesøster. Retfærdigt? Måske ikke. Men nu er du fanget, og klokken tikker.",
        image: "room.png",
        options: [
            {
                text: "Forsøg at snige dig ud ad vinduet.",
                nextState: 2
            },
            {
                text: "Overtal din mor til at lade dig gå.",
                nextState: 3
            },
            {
                text: "Ring til din bedste ven og bed om hjælp.",
                nextState: 4
            }
        ]
    },
    {
        id: 2,
        header: "Snigeforsøget",
        text: "Du åbner forsigtigt vinduet og kigger ned. Det er ikke højt, men alligevel mærker du et sug i maven. Hvis du kan klare det her, er du fri! Men hvad nu, hvis du bliver opdaget? Du tager en dyb indånding og beslutter dig for at...",
        image: "window.png",
        options: [
            {
                text: "Hoppe ud og løbe alt, hvad du kan.",
                nextState: 5
            },
            {
                text: "Bruge dit lagn til at klatre ned ad muren.",
                nextState: 6
            },
            {
                text: "Skrige efter hjælp fra din bedste ven i håbet om, at han hører dig.",
                nextState: 7
            }
        ]
    },
    {
        id: 3,
        header: "Overtalelseskunsten",
        text: "Du går ud i stuen, hvor din mor sidder og læser. Du må finde på noget godt. Hvis du kan overbevise hende om, at du har lært din lektie, er der måske en chance. Men hvad skal du sige? Du begynder med...",
        image: "livingroom.png",
        options: [
            {
                text: "\"Mor, jeg er virkelig ked af det. Jeg lover aldrig at gøre det igen!\"",
                nextState: 8
            },
            {
                text: "\"Mor, hvis jeg ikke kommer til denne fest, vil alle snakke om mig i morgen!\"",
                nextState: 9
            },
            {
                text: "\"Mor, kan du huske dengang, du gjorde noget dumt som barn?\"",
                nextState: 10
            }
        ]
    },
    {
        id: 4,
        header: "En ven i nød",
        text: "Du tager din telefon og ringer til din bedste ven. Han svarer med det samme, og du kan høre musikken i baggrunden. \"Hej! Er du ikke på vej?\" spørger han. Du sukker dybt og fortæller ham om stuearresten. Han griner og siger...",
        image: "phonecall.png",
        options: [
            {
                text: "\"Jeg er lige ved din dør. Lad os finde en måde at snige dig ud på!\"",
                nextState: 11
            },
            {
                text: "\"Måske kan jeg tale med din mor for dig?\"",
                nextState: 12
            },
            {
                text: "\"Hør, jeg kan hente nogle snacks og hænge ud med dig i stedet.\"",
                nextState: 13
            }
        ]
    },
    {
        id: 5,
        header: "Flugten",
        text: "Du hopper ud af vinduet og lander med et bump. Du er fri! Du løber alt, hvad du kan mod festen, men pludselig hører du din mors stemme råbe dit navn bag dig...",
        image: "escape.png",
        options: [
            {
                text: "Stop og gå tilbage til huset.",
                nextState: 14
            },
            {
                text: "Ignorer hende og løb videre mod festen.",
                nextState: 15
            }
        ]
    },
    {
        id: 6,
        header: "Den kreative løsning",
        text: "Du binder dit lagen fast til vinduet og begynder at klatre ned. Men midtvejs løsner knuden sig, og du falder ned i buskene nedenfor. Du er uskadt, men vil du fortsætte flugten?",
        image: "bushes.png",
        options: [
            {
                text: "Rejs dig og løb mod festen.",
                nextState: 16
            },
            {
                text: "Giv op og gå tilbage til huset.",
                nextState: 17
            }
        ]
    },
    {
        id: 7,
        header: "Ven i nød",
        text: "Du råber efter hjælp, men det er din mor, der hører dig, ikke din ven. Hun kommer farende ind på værelset og fanger dig i at forsøge at snige dig ud. Stuearresten er forlænget!",
        image: "caught.png",
        options: [
            {
                text: "Start igen.",
                nextState: 1
            }
        ]
    },
    {
        id: 8,
        header: "Tilgivelse",
        text: "Din mor ser på dig med et lille smil. \"Okay, jeg tror på dig denne gang. Men hvis du laver ballade til festen, bliver du grounded i en måned!\" Du smutter hurtigt ud ad døren, fri og klar til fest!",
        image: "freedom.png",
        options: [
            {
                text: "Start igen.",
                nextState: 1
            }
        ]
    },
    {
        id: 9,
        header: "Den hårde taktik",
        text: "Din mor ryster på hovedet. \"Der er ingen grund til at være dramatisk. Du bliver hjemme!\" siger hun bestemt. Ingen fest for dig i aften.",
        image: "no_party.png",
        options: [
            {
                text: "Start igen.",
                nextState: 1
            }
        ]
    },
    {
        id: 10,
        header: "En mors erindringer",
        text: "Din mor smiler nostalgisk. \"Ja, jeg lavede også mange skøre ting som barn. Gå du bare til festen, men vær forsigtig, okay?\" Du nikker ivrigt og løber ud af døren.",
        image: "memory.png",
        options: [
            {
                text: "Start igen.",
                nextState: 1
            }
        ]
    },
    {
        id: 11,
        header: "Venner hjælper hinanden",
        text: "Din ven står udenfor dit vindue. I samarbejde finder I en måde at snige dig ud, og inden du ved af det, er I på vej til festen sammen.",
        image: "friends_escape.png",
        options: [
            {
                text: "Start igen.",
                nextState: 1
            }
        ]
    },
    {
        id: 12,
        header: "Forhandling",
        text: "Din ven taler med din mor, og på magisk vis giver hun dig lov til at gå. \"Bare denne ene gang,\" siger hun. Du er fri!",
        image: "negotiation.png",
        options: [
            {
                text: "Start igen.",
                nextState: 1
            }
        ]
    },
    {
        id: 13,
        header: "Hjemmehygge",
        text: "Du og din ven beslutter at hænge ud hjemme hos dig. I hygger jer med snacks og videospil, og pludselig virker stuearresten ikke så slem endda.",
        image: "home_fun.png",
        options: [
            {
                text: "Start igen.",
                nextState: 1
            }
        ]
    },
    {
        id: 14,
        header: "Tilbage til huset",
        text: "Du stopper op og vender tilbage til huset. Din mor ser på dig med et strengt blik. \"Jeg sagde, du skulle blive inde!\" siger hun. Ingen fest for dig i aften.",
        image: "return.png",
        options: [
            {
                text: "Start igen.",
                nextState: 1
            }
        ]
    },
    {
        id: 15,
        header: "Festen kalder",
        text: "Du ignorerer din mors råb og løber mod festen. Du ved, at du vil få problemer senere, men lige nu er det det hele værd!",
        image: "party.png",
        options: [
            {
                text: "Start igen.",
                nextState: 1
            }
        ]
    },
    {
        id: 16,
        header: "På vej til fest",
        text: "Du rejser dig og børster jord af tøjet. Selvom du faldt, er du stadig fast besluttet på at komme til festen. Du sætter i løb og når frem lige i tide til at deltage i det hele!",
        image: "arrival.png",
        options: [
            {
                text: "Start igen.",
                nextState: 1
            }
        ]
    },
    {
        id: 17,
        header: "Giv op",
        text: "Du opgiver og går tilbage til huset. Du ved, at du ikke kan undslippe, og det er nok bedst at acceptere din skæbne.",
        image: "give_up.png",
        options: [
            {
                text: "Start igen.",
                nextState: 1
            }
        ]
    }
]