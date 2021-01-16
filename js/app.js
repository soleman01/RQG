let quotes = [
    " “The unexamined life is not worth living.” – Socrates",
    " “He who thinks great thoughts, often makes great errors.” – Martin Heidegger",
    " “Happiness is the feeling that power increases — that resistance is being overcome.” — Friedrich Nietzsche",
    " “Happiness is the meaning and the purpose of life, the whole aim and end of human existence.” — Aristotle",
    " “Rules for happiness: something to do, someone to love, something to hope for.” — Immanuel Kant",
    " “Happiness is when what you think, what you say, and what you do are in harmony.” — Mahatma Gandhi",
    " “For every minute you are angry you lose sixty seconds of happiness.” — Ralph Waldo Emerson",
    " “A day without laughter is a day wasted.” — Nicolas Chamfort"
]

function getQuote(){
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("newQuoteSection").innerHTML = quotes[randomNumber];
}









