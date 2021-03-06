
          $(document).ready(function() {

            var totalScore = 0;
            var wins = 0;
            var losses = 0;
            var compPick = 0;
            var crystalArray = [];
            reset();         
              



            for (var i = 0; i < 4; i++) {
              var genNumber = ($(".images").get(i).getAttribute("data-score"));
              //console.log("Crystal Random " +  genNumber);
            }      

            // Create event handler on click event that gets the user's pick           
            $(".images").on("click", function() {

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

            /* 
            //generates random integer from 1 to 12
            function generateRand12() {        
              return (Math.floor(Math.random() * 11) + 1);
            } */

            //generates 4-elements array with integers from 1 to 12 and assigns the generated integers to the buttons' attrubutes 
            function generateCrystalArray(){
              crystalArray=[];
              for(var i = 0; i < 4; i++) {
                crystalArray.push((Math.floor(Math.random() * 11) + 1));
                var buttonPicked = $(".images").get(i);
                buttonPicked.setAttribute("data-score", crystalArray[i]);
                console.log("Element " + i + " " + crystalArray[i]);
              }

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

