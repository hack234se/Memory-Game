//to display tabs
$(document).ready(function()
{
  $( function() 
  {
      $( "#tabs" ).tabs();
  } );
    card_object.htmlCards(48); // to load 48 cards

    $("#save_settings").click(()=>
			{
				const plr_name = document.getElementById('player_name').value;
				score_set.user_details(plr_name, $("#num_cards").val(), 0);
				document.getElementById("player").innerHTML="Player Name: " + score_set.fetch_user_details( plr_name, $("#num_cards").val())[0];
			    card_object.htmlCards($("#num_cards").val());
			})
});

//  for session storage
// $("#save_settings").click(()=>
// {
// 	console.log("hhhhhhhhhhhhhhhhhhhhhhhhhh");
// 	score_set.user_details($("#player_name").val(), $("#num_cards").val(), 0);
// 	document.getElementById("player").innerHTML="Player Name: " + score_set.fetch_user_details( ("#player_name").val(), $("#num_cards").val())[0];
//     card_object.htmlCards($("#num_cards").val());
// })

// Card loading function and to display in HTML 
// const card_load = (no_cards) => 
// {
// 	let cards = document.getElementById("cards");
// 	cards.innerHTML = "";
// 	let div_element = document.createElement('div');
// 	const border_height = 
//     {
// 	    '8': '350',
// 	    '16': '400',
// 	    '24': '500',
// 	    '32': '700',
// 	    '40': '800',
// 	    '48': '900'
// 	}
//     div_element.id = 'cards-grid';
//     document.body.style.height = String(border_height[no_cards])+ "px";
//     document.getElementById("tabs").setAttribute("style","height:" + String(Number(border_height[no_cards])-100)+ "px");
// // to display Image URL in array form
//     const image_array =
//      [
//     	{'name': "card_1", "url":"images/card_1.png"},
//     	{'name': "card_2", "url":"images/card_2.png"},
//     	{'name': "card_3", "url":"images/card_3.png"},
//     	{'name': "card_4", "url":"images/card_4.png"},
//     	{'name': "card_5", "url":"images/card_5.png"},
//     	{'name': "card_6", "url":"images/card_6.png"},
//     	{'name': "card_7", "url":"images/card_7.png"},
//     	{'name': "card_8", "url":"images/card_8.png"},
//     	{'name': "card_9", "url":"images/card_9.png"},
//     	{'name': "card_10", "url":"images/card_10.png"},
//     	{'name': "card_11", "url":"images/card_11.png"},
//     	{'name': "card_12", "url":"images/card_12.png"},
//     	{'name': "card_13", "url":"images/card_13.png"},
//     	{'name': "card_14", "url":"images/card_14.png"},
//     	{'name': "card_15", "url":"images/card_15.png"},
//     	{'name': "card_16", "url":"images/card_16.png"},
//     	{'name': "card_17", "url":"images/card_17.png"},
//     	{'name': "card_18", "url":"images/card_18.png"},
//     	{'name': "card_19", "url":"images/card_19.png"},
//     	{'name': "card_20", "url":"images/card_20.png"},
//     	{'name': "card_21", "url":"images/card_21.png"},
//     	{'name': "card_22", "url":"images/card_22.png"},
//     	{'name': "card_23", "url":"images/card_23.png"},
//     	{'name': "card_24", "url":"images/card_24.png"},
//     	]
//     // To Shuffle  the images
// 	let image_mix = image_array.sort(() => Math.random() - 0.5)
// 	var image_type1 = image_mix.slice(0, Number(no_cards)/2);
// 	var image_type2 = image_mix.slice(0, Number(no_cards)/2);
// 	var finalimages_set = image_type1.concat(image_type2);
// 	var finalimages_set = finalimages_set.sort(() => Math.random() - 0.5)

// 	// Add cards to html from js
// 	const card_Div = document.getElementById("cards");
// 	for(let i=0; i<Number(no_cards); i++)
//     {
// 		card_Div.innerHTML += `
// 	     <div class="card-div-container" id="${finalimages_set[i].name}">
// 	        <div class="card-before"><img src="images/back.png" class="image"/>
// 	        </div>
// 	        <div class="card-after">
// 	        	<img src="${finalimages_set[i].url}" class="image"/>
// 	        </div>
// 	        <div class="card-matched">
// 	        	<img src="images/blank.png" class="image"/>
// 	        </div>
// 	     </div>
// 	     `;
// 	}

// 	// Grid feature which shows only 8 in a row
// 	card_Div.style.gridTemplateColumns = `repeat(${no_cards/6},auto)`;
// 	var clicks=0;
// 	var match=0;
// 	memory_cards = document.querySelectorAll(".card-div-container");
// 	let first_selected_card = false;
// 	let second_select_card = false;
// 	var first_selected_value;
// 	var second_selected_value;
// 	// Checking condition and fliping card 
//     //when not matching or sliding down when matched
// 	memory_cards.forEach((mem_card) => 
//     {
// 		mem_card.addEventListener("click", () => 
//         {
// 			if(match<no_cards/2)
//             {
// 				if (!mem_card.classList.contains("matched"))
//                 {
// 				mem_card.classList.add("turn");
// 				if(!first_selected_card)
//                 {
// 					first_selected_card = mem_card;
// 					first_selected_value = mem_card.id;
// 					clicks++;
// 				}
// 				else{
// 					second_select_card = mem_card;
// 					second_selected_value = mem_card.id;
// 					clicks++;
// 					if(first_selected_value == second_selected_value)
//                     {
// 						first_selected_card.classList.add("card-slide");
// 						second_select_card.classList.add("card-slide");
// 						match++;

// 						if (match==no_cards/2)
//                         {
// 							var score=((no_cards/clicks)*100).toFixed(2);
// 							if(Number(localStorage.getItem("high-Score"))<score)
//                             {
// 								localStorage.setItem("high-Score",score);
// 								card_Div.innerHTML="Congrats!!!  You have a new highscore "+(score)+"%  !!!!";
// 								document.getElementById("high_score").innerHTML="High-Score : "+localStorage.getItem("high-Score");
// 								document.getElementById("correct").innerHTML="correct : "+score;
// 							}
//                             else
//                             {
// 								card_Div.innerHTML="Congrats!!!  You have scored "+(score)+"%  !!!!";
// 								document.getElementById("correct").innerHTML="correct : "+score;
// 								let next_delay = setTimeout(() => 
//                                 {
// 									var button = document.createElement("button");
// 									button.id = "new_game";
// 									button.innerHTML = "New Game";
// 									card_Div.appendChild(button);
// 									console.log(card_Div);
// 									button.addEventListener('click', () => {
// 							        card_load(no_cards);
// 							      })
// 								}, 2100);								
// 							}
// 						}
// 						first_selected_card = false;
// 					}
// 					else
//                     {
// 						var first_card_temp = first_selected_card;
// 						var second_card_temp = second_select_card;
// 						first_selected_card = false;
// 						second_select_card = false;
// 						let delay = setTimeout(() => 
//                         {
// 							first_card_temp.classList.remove("turn");
// 							second_card_temp.classList.remove("turn");
// 						}, 600);
// 					}
// 					first_selected_value = false;
// 					second_selected_value = false;
// 				}
// 				}
// 			}
// 		});
// 	});


// };
