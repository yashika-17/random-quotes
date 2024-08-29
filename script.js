
var quotes = [
    "Your current situation is not your final destination.",
    "You are stronger than you think.",
    "Every day is a fresh start.",
    "Healing takes time, but you are worth the wait.",
    "It’s okay to not be okay.",
    "You have survived 100% of your bad days.",
    "Your story isn’t over yet.",
    "Small steps are still progress.",
    "You are not alone in this journey.",
    "Focus on the step in front of you, not the whole staircase.",
    "Your feelings are valid, but they don’t define you.",
    "This too shall pass.",
    "Be gentle with yourself.",
    "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
    "It's okay to ask for help.",
    
        "And, when you want something, all the universe conspires in helping you to achieve it.",
        "Real courage is when you know you're licked before you begin, but you begin anyway and see it through no matter what.",
        "You have my whole heart. You always did. You're the best guy. You always were. If I were God, I would have made the world just so and no different.",
        "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        "Realize deeply that the present moment is all you ever have. Make the Now the primary focus of your life.",
        "There is some good in this world, and it’s worth fighting for.",
        "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
        "Even death has a heart.",
        "What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it.",
        "When we are no longer able to change a situation, we are challenged to change ourselves."
    
    
]
const index=new Set();
const quoteElement =document.getElementById("quote");

function generate(){
    if(index.size>=quotes.length){
        index.clear();
    }
    while(true){
    const randIndx=Math.floor(Math.random()*quotes.length);
    if(index.has(randIndx)){
        continue;
    }
    const qoute =quotes[randIndx];
    quoteElement.innerHTML=qoute;
    index.add(randIndx);
    break;
    }

}
