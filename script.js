 let quotes=[
    {
        quote:"All the world’s a stage, and all the men and women merely players",
        person:"william shakespeare"
    },
    {
        quote:"Ask not what your country can do for you; ask what you can do for your country.",
        person:"hhonn khennedy"
    },
    {
        quote:"Ask, and it shall be given you; seek, and you shall find",
        person:"the bible"
    },
    {
        quote:"Genius is one percent inspiration and ninety-nine percent perspiration",
        person:"Thomas edison"
    },
    {
        quote:"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character",
        person:"Martin luther king"
    },
    {
        quote:"If you want something said, ask a man; if you want something done, ask a woman",
        person:"margaret thatcher"
    },
    {
        quote:"Life is like a box of chocolates. You never know what you’re gonna get",
        person:"forest gump"
    },
    {
        quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
        person:"elbert einstein"
    },
    {
        quote:"You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
        person:"abraham linchon"
    }
 ]

 let quote=document.querySelector("#quote");
 let person=document.querySelector(".person");
 let btn=document.querySelector("#btn");

 
     
    btn.addEventListener('click',function(){
        let random=Math.floor(Math.random()*quotes.length);
        quote.innerText=quotes[random].quote;
        person.innerText=quotes[random].person;
        
    })
    
