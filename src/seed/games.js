const games = [{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
},
{
    title: `Game ${generateRandom(1,20)}, level: ${generateRandom(1,10)}`,
    startAt: Date.now(),
    endsAt: Date.now() + generateRandom(5000,300000),
    score: generateRandom(0, 100),
    PlayerId: generateRandom(1,10)
}]

function generateRandom (min =0, max=100){
    let difference = max -min;

    let rand =Math.random();

    rand = Math.floor(rand * difference);

    rand = rand +min;

    return rand;
}

export default games