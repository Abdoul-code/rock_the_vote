class Player{
    constructor(name = "Mario" , totalCoins = 0 ,status ="Big" , hasStar = false, gameActive = true){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status
        this.hasStar = hasStar;
        this.gameActive = gameActive;

        }
        setName(namePicked){
            this.name = namePicked
        }

        gotHit(){
            if(this.status === "Powered Up"){
                this.status = "Big"
            }
            else if(this.status === "Big"){
            this.status = "Small"
            }else if(this.status === "Small"){
                this.status = "dead"
                this.gameActive = false
            }
        }
         gotPowerup(){
             if(this.status ==="small"){
                 this.status = "big"
             } else if(this.status === "big"){
                 this.status = "powered up"
             }

         }    
   
         addCoin(){
             this.totalCoins++
             console.log("You got a coin!")
         }
         print(){
             console.log(`Name: ${this.name}, Total Coins: ${this.totalCoins}, Status: ${this.status}`)
         }
        }
        const player = new Player("Mario")
        function randomNum(max, min){
            return Math.floor((Math.random() * (max-min+1)) + min)
        }
        const gameLoop = setInterval(()=>{
            newNumber = randomNum(2,0)
            if(player.gameActive != false){
            

                if(newNumber === 0){
                    player.gotHit()
                }else if (newNumber === 1){
                    player.gotPowerup()
                }else if(newNumber === 2){
                    player.addCoin()
                }
                player.print()
            }else {
                console.log("gameover")
                clearInterval(gameLoop)
            }
            // console.log(player)
            
            
        }, 1000)
        
    

