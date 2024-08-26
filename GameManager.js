const state = {
    stateID: 1,
}

/* Character og inventory bruges ikke i denne fortælling, men er for at vise, at det er muligt at have en karakter med et inventory. Det er også muligt at arbejde med kampe, tilfældighed og andre spil-elementer. */
const character = {
    name: "",
    points: 0,
    life: 100,
    inventory: [

    ]
}


export default { state, character }