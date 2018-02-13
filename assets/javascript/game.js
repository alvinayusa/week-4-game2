$(document).ready(function () {

    var carsArr = [
        {
            value: 0
        },
        {
            value: 0
        },
        {
            value: 0
        },
        {
            value: 0
        }

    ]
    // write back the wins to the html div of number of wins.
    var wins = 0
    $("#numberOfWins").text(wins)
    console.log("wins: " + wins)

    // write back the losses to the html div of number of losses.
    var loss = 0
    $("#numberOfLoss").text(loss)
    console.log("loss: " + loss)
    
    var randNum = 0
    var totalNum = 0
    
    // this function will start the game
    function startGame() {
        // display the total number of the cars to the html.
        totalNum = 0
        $("#totalCarNum").text(totalNum)
        
        // generate and display the randomized number to the html.
        randNum = Math.floor(Math.random() * (120 - 19) + 1 + 19)
        $("#randomNumber").text(randNum)
        
        //generate the random number per car and assign it per car.
        for (var i = 0; i < 4; i++){
            carsArr[i].value = Math.floor(Math.random() * 20)
            
            //display to the html the randomized number for each car.
            $(".carImages").attr("carNum", carsArr[i].value)
        }
    }
    startGame()
    
    $(".carImages").on("click", function(){
        var carNumbers = parseInt( $(this).attr("carNum"))
        totalNum += carNumbers
        console.log(totalNum)
        // totalNum += carNumbers
        
        $("#totalCarNum").text(totalNum)
        // console.log(totalNum)

        if (randNum === totalNum){
            wins++
            $("#numberOfWins").text(wins)
            startGame()
        }
        else if (totalNum > randNum){
            loss++
            $("#numberOfLoss").text(loss)
            startGame()
        }
    })
})