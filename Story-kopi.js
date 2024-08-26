export const storyStates = [
    {
        id: 1,
        header: "Ved Hanne",
        text: "Du står ved døren udenfor Hannes lejlighed. Hvad vil du gøre?",
        image: "door.jpeg",
        options: [
            {
                text: "Bank på",
                nextState: 2
            },
            {
                text: "Begynd at synge",
                nextState: 3
            }
        ]
    },
    {
        id: 2,
        header: "Inde hos Hanne",
        text: "Du banker på døren. Hanne åbner og byder dig indenfor. Inde i stuen sidder I og tale om vind og vejr. Hvad vil du gerne tale om?",
        image: "hanne.png",
        options: [
            {
                text: "Inviter hende på museum",
                nextState: 4
            },
            {
                text: "Inviter hende til markræs",
                nextState: 5
            }
        ]
    },
    {
        id: 3,
        header: "Ved Hanne",
        text: "Du begynder at synge. Naboen åbner vinduet og beder dig om at holde mund. Du få kastet en sko i hovedet, så du får et blåt mærke.",
        image: "door.jpeg",
        options: [
            {
                text: "Bank på døren",
                nextState: 2
            },
            {
                text: "Gå hjem til dig selv",
                nextState: 9
            }
        ]
    },
    {
        id: 4,
        header: "Inde hos Hanne",
        text: "Hanne er vild med, at I skal på museum. Hun glæder sig og giver dig et kæmpe kram. Du går hjem til dig selv og sover til næste dag. Da du vågner er det lidt sent.",
        image: "lejlighed.png",
        options: [
            {
                text: "Tag et bad, selv om det bliver lidt presset med tiden",
                nextState: 6
            },
            {
                text: "Drop badet og hop i tøjet, der ligger på gulvet",
                nextState: 7
            },
            {
                text: "Find noget nyt tøj fra skuffen",
                nextState: 8
            }
        ]
    },
    {
        id: 5,
        header: "Inde hos Hanne",
        text: "Hun kigger undrende på dig. \"Du kender sgu a mit forhold til markræs! Hvordan kan du sige sådan noget!! Smut hjem med dig!\" Du går skuffet hjem og sover til næste dag. Da du vågner har du dårlig samvittighed over din opførsel.",
        image: "lejlighed.png",
        options: [
            {
                text: "Ignorer din dårlige samvittighed og spis morgenmad",
                nextState: 10
            },
            {
                text: "Tager telefonen og ring til Hanne",
                nextState: 11
            }
        ]
    },
    {
        id: 6,
        header: "Hjemme i lejligheden",
        text: "Tekst til presset badetur",
        image: "lejlighed.png",
        options: [
            {
                text: "Start igen",
                nextState: -1
            }
        ]
    },
    {
        id: 7,
        header: "Hjemme i lejligheden",
        text: "Tekst til droppe bad og gammelt tøj",
        image: "lejlighed.png",
        options: [
            {
                text: "Start igen",
                nextState: -1
            }
        ]
    },
    {
        id: 8,
        header: "Hjemme i lejligheden",
        text: "Tekst til opkald til Hanne",
        image: "lejlighed.png",
        options: [
            {
                text: "Start igen",
                nextState: -1
            }
        ]
    },

    {
        id: 9,
        header: "Hjemme i lejligheden",
        text: "Du gå hjem og sover til næste dag. Da du vågner tænker du om det vil være en god idé at ringe i stedet.",
        image: "lejlighed.png",
        options: [
            {
                text: "Vent med at ringe og spis lidt morgenmad",
                nextState: 10
            },
            {
                text: "Tag telefonen og ring til Hanne",
                nextState: 11
            }
        ]
    },

    {
        id: 10,
        header: "Hjemme i lejligheden",
        text: "Tekst til morgenmad uden Hanne",
        image: "lejlighed.png",
        options: [
            {
                text: "Start igen",
                nextState: -1
            }
        ]
    },

    {
        id: 11,
        header: "Hjemme i lejligheden",
        text: "Tekst til opkald til Hanne efter bare at være gået hjem.",
        image: "lejlighed.png",
        options: [
            {
                text: "Start igen",
                nextState: -1
            }
        ]
    },

]