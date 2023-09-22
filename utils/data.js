const { get } = require("../models/Reaction");

const usernames = [
    "LuckyDuck123",
    "RainbowGamer",
    "CoffeeLover87",
    "StarJumper",
    "MoonlightDreamer",
    "SunnySideUp",
    "PixelPainter",
    "MountainHiker",
    "ChocoChipCookie",
    "ElectricNinja",
    "SilverFox22",
    "CaptainAdventure",
    "RubyRedRose",
    "CosmicTraveler",
    "MidnightOwl",
    "PandaPaws",
    "GuitarGuru99",
    "WildflowerChild",
    "SunnySmiles",
    "CaptainCuddles",
    "SongbirdMelody"
];

const thoughtTextOptions = [
    "Chasing dreams and making memories!",
    "Embracing the journey one step at a time.",
    "Sunsets and good vibes. 🌅✨",
    "Exploring new horizons and loving every moment.",
    "Coffee and contemplation.",
    "Dancing through life like nobody's watching.",
    "Diving into a creative journey today. 🎨🖋️",
    "Wandering, exploring, and living life to the fullest.",
    "Reflecting on the past, embracing the present, and dreaming about the future.",
    "Laughing in the face of Monday blues. 😄💪",
    "Surrounding myself with good energy and positive vibes.",
    "Capturing moments that take my breath away.",
    "Puppy cuddles and unconditional love. 🐶💕",
    "Striving for progress, not perfection.",
    "A little positivity can go a long way. Spread it!",
    "Rediscovering old passions and hobbies.",
    "Stepping out of my comfort zone and into the extraordinary.",
];

const reactionOptions = [
    'like',
    'love',
    'haha',
    'wow',
    'sad',
    'angry'
]; 

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = () => {
    const username = getRandomArrItem(usernames)
    const user = {
        username: username,
        email: `${username}@gmail.com`
    }
    return user;
};

const getRandomThought = () => {
    const thought = {
        thoughtText: getRandomArrItem(thoughtTextOptions),
        username: getRandomArrItem(usernames),
        reactions: [...getThoughtReactions(3)],
    }

    return thought;
}

const getThoughtReactions = (int) => {
    let results = []
    for(let i = 0; i<int; i++){
        results.push({
            reactionBody: getRandomArrItem(reactionOptions),
            username: getRandomArrItem(usernames)
        });
    }
    return results; 
}

module.exports = { getRandomUser, getRandomThought }