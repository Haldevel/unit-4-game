
          $(document).ready(function() {

            var totalScore = 0;
            var wins = 0;
            var losses = 0;
            var compPick = 0;
            var crystalArray = [];
            //generateCrystalArray();
            reset();         
              

            for (var i = 0; i <crystalArray.length; i++) {
              console.log(crystalArray[i]);
            }
           //assign to the buttons the attrubutes from crystalArray
            for( var i = 0 ; i < crystalArray.length; i++) {
              var buttonPicked = $(".images").get(i);
              //buttonPicked.setAttribute("data-score", crystalArray[i]);
              buttonPicked.setAttribute("data-score", crystalArray[i]);
             
            } 

            for (var i = 0; i < 4; i++) {
              //console.log( $(".btn-choice").get(i).attr("data-score"));
              var genNumber = ($(".images").get(i).getAttribute("data-score"));
              console.log("Crystal Random " +  genNumber);
            }      

            // Here we create the on click event that gets the user's pick           
            $(".images").on("click", function() {

              console.log("You clicked a button!!");

              console.log("You clicked button with score " + $(this).attr("data-score"));

              totalScore = totalScore + parseInt($(this).attr("data-score"));
              console.log("Your total score " + totalScore);
              $("#totalScore").text(totalScore);

              if( totalScore === compPick) {
                console.log("You win!");
                wins++;
                $("#wins").text(wins);
                reset();
              }
              else if (totalScore > compPick) {
                console.log("You loose!");
                losses++;
                $("#losses").text(losses);
                reset();
              }            

            });


            //generates random integer from 19 to 120
            function generateRand120() {
              return (Math.floor(Math.random() * 101) + 19);
            }

            //generates random integer from 1 to 12
            function generateRand12() {        
              return (Math.floor(Math.random() * 11) + 1);
            }

            //generateS 4-elements array with integers from 1 to 12
            function generateCrystalArray(){
              for(var i = 0; i < 4; i++) {
                crystalArray.push((Math.floor(Math.random() * 11) + 1));
              }
              //console.log(crystalArray);

            }

            //resets totalScore, generates random computerPick number and random crystalArray elements
            function reset() {
              compPick = generateRand120();
              $("#computer-pick").text(compPick);
              $("#wins").text(wins);
              $("#losses").text(losses);
              generateCrystalArray();
              totalScore = 0;
              $("#totalScore").text(totalScore);
            }

          });

