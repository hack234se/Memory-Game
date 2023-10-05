const card_object = (function() 
{
	let list_images = 
    [
    	{'name': "card_1", "url":"images/card_1.png"},
    	{'name': "card_2", "url":"images/card_2.png"},
    	{'name': "card_3", "url":"images/card_3.png"},
    	{'name': "card_4", "url":"images/card_4.png"},
    	{'name': "card_5", "url":"images/card_5.png"},
    	{'name': "card_6", "url":"images/card_6.png"},
    	{'name': "card_7", "url":"images/card_7.png"},
    	{'name': "card_8", "url":"images/card_8.png"},
    	{'name': "card_9", "url":"images/card_9.png"},
    	{'name': "card_10", "url":"images/card_10.png"},
    	{'name': "card_11", "url":"images/card_11.png"},
    	{'name': "card_12", "url":"images/card_12.png"},
    	{'name': "card_13", "url":"images/card_13.png"},
    	{'name': "card_14", "url":"images/card_14.png"},
    	{'name': "card_15", "url":"images/card_15.png"},
    	{'name': "card_16", "url":"images/card_16.png"},
    	{'name': "card_17", "url":"images/card_17.png"},
    	{'name': "card_18", "url":"images/card_18.png"},
    	{'name': "card_19", "url":"images/card_19.png"},
    	{'name': "card_20", "url":"images/card_20.png"},
    	{'name': "card_21", "url":"images/card_21.png"},
    	{'name': "card_22", "url":"images/card_22.png"},
    	{'name': "card_23", "url":"images/card_23.png"},
    	{'name': "card_24", "url":"images/card_24.png"},
    	]
	let image_cnt = 0;
	const image_Back = './images/back.png';
	const imageBlank = './images/blank.png';
	const imagePreloaded = (imageList, no_cards) => 
    {
		let image_mix = imageList.sort(() => Math.random() - 0.5)
		var image_type1 = image_mix.slice(0, Number(no_cards)/2);
		var image_type2 = image_mix.slice(0, Number(no_cards)/2);
		var finalimages_set = image_type1.concat(image_type2);
		var finalimages_set= finalimages_set.sort(() => Math.random() - 0.5)
		return finalimages_set;
	};

	const htmlCards = (no_cards) => 
    {
    	console.log("--------htmllllllllllllllll")
    	console.log(no_cards)
		let cards = document.getElementById("cards");
		cards.innerHTML = "";
		let div_element = document.createElement('div');
		const border_height = {
		    '8': '350',
		    '16': '400',
		    '24': '500',
		    '32': '700',
		    '40': '800',
		    '48': '900'
		}


		div_element.id = 'cards-grid';
    	document.body.style.height = String(border_height[no_cards])+ "px";
    	document.getElementById("tabs").setAttribute("style","height:" + String(Number(border_height[no_cards])-150)+ "px");
    	const finalimages_set = imagePreloaded(list_images, no_cards);
    	const card_Div = document.getElementById("cards");
    	console.log(finalimages_set);
		for(let i=0; i<Number(no_cards); i++)
        {
			card_Div.innerHTML += `
		     <div class="card-div-container" id="${finalimages_set[i].name}">
		        <div class="card-before"><img src="${image_Back}" class="image"/>
		        </div>
		        <div class="card-after">
		        	<img src="${finalimages_set[i].url}" class="image"/>
		        </div>
		        <div class="card-matched">
		        	<img src="${imageBlank}" class="image"/>
		        </div>
		     </div>
		     `;
		}

		card_Div.style.gridTemplateColumns = `repeat(${no_cards/6},auto)`;
		var clicks=0;
		var match=0;
		memory_cards = document.querySelectorAll(".card-div-container");
		let first_selected_card = false;
		let second_select_card = false;
		var first_selected_value;
		var second_selected_value;
		memory_cards.forEach((mem_card) => {
			mem_card.addEventListener("click", () => 
            {
				if(scores.matches_num < no_cards/2){
					if (!mem_card.classList.contains("matched"))
                    {
						mem_card.classList.add("turn");
						if(!first_selected_card)
                        {
							first_selected_card = mem_card;
							first_selected_value = mem_card.id;
							scores.turns_update($("#player_name").val(), no_cards);
						}
						else
                        {
							second_select_card = mem_card;
							second_selected_value = mem_card.id;
							scores.turns_update($("#player_name").val(), no_cards);
							if(first_selected_value == second_selected_value)
                            {
								cardFlip_Faded(first_selected_card, second_select_card);
								scores.match_update();
								if (scores.matches_num==no_cards/2)
                                {
									const local_fetch_scores = scores.fetch_scores($("#player_name").val(), no_cards);
									const score = scores.correct_percentage(local_fetch_scores, no_cards);
									const msg = scores.compare_high_scores($("#player_name").val(), no_cards);
									card_Div.innerHTML = msg;
									document.getElementById("correct").innerHTML="correct : "+score;
									let next_delay = setTimeout(() => 
                                    {
											var button = document.createElement("button");
											button.id = "new_game";
											button.innerHTML = "New Game";
											card_Div.appendChild(button);
											button.addEventListener('click', () => {
											card_load(no_cards);
									      })
										}, 2100);
								}
								first_selected_card = false;
							}
							else
                            {
								var first_card_temp = first_selected_card;
								var second_card_temp = second_select_card;
								first_selected_card = false;
								second_select_card = false;
								let delay = setTimeout(() =>
                                 {
									first_card_temp.classList.remove("turn");
									second_card_temp.classList.remove("turn");
								}, 600);
							}
							first_selected_value = false;
						second_selected_value = false;
						}
					}
				}
			});
		});
	};

	const cardFlip_Faded = (first_selected_card, second_select_card) => 
    {
		first_selected_card.classList.add("card-slide");
		second_select_card.classList.add("card-slide");

	};

	return {
		image_Back: () => image_Back,
		imageBlank: () => imageBlank,
		image_cnt: () => list_images.length(),
		imagePreloaded,
		htmlCards,
		cardFlip_Faded,
	};

})();