/* 
D H R U V I L  M O D I

100727467

WORKING FUNCTIONALITY
    - Convert ES5 codes into ES6 with 2 running instances
    - make 2 instances talk with each other
    - fetch external data
*/

// ES6 comes with class instead of functions
class Tamogotchi{
    // every class has an constructor which can take perameters init
    constructor(tamoName){
        this.petName;
        this.food;
        this.initialFood = 60;
        this.metabolismRate = 1000;
        // *** BONUS *** fetching data from json structure 
        this.fetchData();
        
        this.init = () => {
            this.petName = tamoName;
            console.log(`Hi!  I'm ${this.petName}`);
            this.hatch();
        }
        this.init();
    }
    /*
    in ES6, there are no prototypes of class you can add them
    directly like calling a function without mentioning function
    */
    resetFood(){
        this.food=this.initialFood;
    }
    hatch(){
        this.resetFood();
        this.startMetabolism();
    }
    die(){
        clearInterval(this.metabolism);
        document.getElementById("metabolism").innerHTML = `<span id="red">I Died!<span>`;
        document.getElementById("angry").click();
        document.getElementById("say").innerHTML = `<span id="red">REVIVE ME ELSE YOU'RE DEAD ALREADY!<span>`;
        console.log("I am dead!");
    }
    startMetabolism(){
        this.metabolism = setInterval(()=> {
            this.food -=1;
            document.getElementById("metabolism").innerHTML = `Hi, I am <span id="yellow">${this.petName}</span> and I have <span id="yellow">${this.food}</span> foodpoints untill I starve. Please give me food!`; 
            console.log(`${this.petName}: ${this.food} until I starve`);
            if(this.food<=0){
                document.getElementById("metabolism").innerHTML = `<span id="red">I Died!<span>`; 
                this.die();
            }
        },this.metabolismRate);
    }
    eatLasagna() {
        console.log(`can I see the food? ${this.food}`);
        this.food +=20;
    }
    //to add
    //a drink coffee command that speeds up the metabolism of your pet
    drinkCoffee(){
        if(this.food>0){
            document.getElementById("say").innerHTML =`<span id="orange">Yum!  Coffee!!!!! :D</span>`;
            console.log("Yum!  Coffee!!!!! :D");
            this.changeMetabolism(500);
        }else{
            document.getElementById("say").innerHTML =`<span id="red">the dead do not drink coffee!</span>`;
            console.log("the dead do not drink coffee!");
        }
    }
    //a drink beer command that slows down the metabolism of your pet
    drinkBeer(){
        if(this.food>0){
            document.getElementById("say").innerHTML =`<span id="yellow">Don't say NOPE to the DOPE!!!</span>`;
            console.log("Yum!  Beer!!!!!! :D");
            this.changeMetabolism(200);
        }else{
            document.getElementById("say").innerHTML =`<span id="red">the dead do not drink beer!</span>`;
            console.log("the dead do not drink beer!");
        }
    }
    changeMetabolism(newRate){
        console.log("Yum!  Coffee!!!!! :D");
        clearInterval(this.metabolism);
        this.metabolismRate = newRate;
        this.startMetabolism();
    }
    /*
    an eat food command that will select a random food that will 
    -check if the pet gets food poisoning
    -add points to the pets food count if they don't get food poisoning
    -remove points from the pets food count if they do get food poisoning
    */
    eatFood(){
        if(this.food>0){
            const chosenFood = this.foods[Math.floor(Math.random()*this.foods.length)];
            const isPoisoned = Math.random()<chosenFood.foodPoisoning;
            if(isPoisoned==true){
                this.food -=chosenFood.foodValue;
                document.getElementById("say").innerHTML = `Yuck!  I just lost <span id="red">${chosenFood.foodValue}</span> from eating <span id="red">${chosenFood.foodName}</span>`;
                console.log(`Yuck!  I just lost ${chosenFood.foodValue} from eating ${chosenFood.foodName}`);
            }else{
                this.food +=chosenFood.foodValue;
                document.getElementById("say").innerHTML = `Yummy!  I just gained <span id="green">${chosenFood.foodValue}</span> from eating <span id="green">${chosenFood.foodName}</span>`;
                console.log(`Yummy!  I just gained ${chosenFood.foodValue} from eating ${chosenFood.foodName}`);
            }
        }else{
            document.getElementById("say").innerHTML =`<span id="red">the dead do not eat!</span>`;
            console.log("the dead do not eat!");
        }
    }
    // a command that takes in a mood and returns a phrase
    talk(mood){
        const moodPhrases  = this.sayings.filter(saying => saying.mood == mood);
        if(this.food>0){
            if(moodPhrases.length>0){
                // moodphrase for random mood saying 1
                const moodPhrase = moodPhrases[Math.floor(Math.random()*moodPhrases.length)];
                // moodphrase for random mood saying 2
                const moodPhrase2 = moodPhrases[Math.floor(Math.random()*moodPhrases.length)];
                // *** BONUS *** let's make both of them talk with each other in simple way
                document.getElementById("say").innerHTML = `<span id="orange">${moodPhrase.saying}</span>`;
                if(this.petName == "Dhruvil"){
                    
                    console.log(`Dhruvil: ${moodPhrase.saying}`);
                }else if(this.petName == "Shivani"){
                    console.log(`Dhruvil: ${moodPhrase2.saying}`);
                }
            }else{
                console.log("uh, what?");
            }
        }else{
            document.getElementById("say").innerHTML =`<span id="red">the dead do not TALK!</span>`;
            console.log("the dead do not TALK!");
        }
    }
    /*
        a command that takes in your name and returns you a compliment structured using template
    */
    wooMe(){
        const phrase =this.compliments[Math.floor(Math.random()*this.compliments.length)];
        const updatedPhrase = phrase.replace(/bork/g, "Bruno ");
        if(this.food>0){
            document.getElementById("say").innerHTML =`<span id="orange">${updatedPhrase}</span>`;
            console.log(updatedPhrase);
        }else{
            document.getElementById("angry").click();
            document.getElementById("say").innerHTML =`<span id="red">the dead do not give COMPLIMENTS!</span>`;
        }
        
    }

    // function to fetch click events of button
    fetchButtons(){
        document.querySelector("#sad").addEventListener('click',function(){
            dhruvil.drinkBeer();
        })
        document.querySelector("#coffee").addEventListener('click',function(){
            dhruvil.drinkCoffee();
        })
        document.querySelector("#normal").addEventListener('click',function(){
            dhruvil.wooMe();
        })
        document.querySelector(".talk").addEventListener('click',function(){
            dhruvil.talk("joke");
        })
        document.querySelector("#eat").addEventListener('click',function(){
            dhruvil.eatFood();
        })
        document.querySelector("#angry").addEventListener('click',function(){
            dhruvil.die();
        })
        document.querySelector("#reset").addEventListener('click',function(){
            location.reload(false)
        })
    }

    // *** BONUS *** fetching data from json structure
    fetchData(){
        fetch('data/data.json')
            .then(data => data.json())
            .then(data => {
                this.fetchButtons();
                this.sayings = data.sayings;
                this.compliments = data.compliments;
                this.foods = data.foods;
            })
    }
}
/* make instances */
// instance #1
const dhruvil = new Tamogotchi("Dhruvil");
// instance #2
// const shivani = new Tamogotchi("Shivani");