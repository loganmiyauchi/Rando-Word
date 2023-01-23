let word1 = ['Toads', 'Hockey players', 'People', 'Dogs', 'Skiers'];
let word2 = ['crazy', 'stupid', 'jerries', 'funny', 'awesome'];
let word3 = ['cry', 'burp', 'smile', 'eat', 'poop'];

function messageGenerator(noun, adjective, verb) {
    return `${noun} are ${adjective} when they ${verb}.`
}

number1 = Math.floor(Math.random() * 5)
number2 = Math.floor(Math.random() * 5)
number3 = Math.floor(Math.random() * 5)

console.log(messageGenerator(word1[number1], word2[number2], word3[number3]))