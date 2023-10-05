const scores = ( () =>
 {

	let turns_num = 0;
	let matches_num = 0;

	const fetch_scores = (name_player, no_of_cards) => 
    {
		const play_names = name_player + "_" + no_of_cards;
		const score =localStorage.getItem(play_names);
		return score;
		
	}

	const set_scores = (player_name, no_of_cards) => 
    {
		var name_player = name_player + "_" + no_of_cards;
		if (localStorage.getItem(name_player))
        {
			sessionStorage.removeItem(name-player);
		}
		localStorage.setItem(player_name, turns_num);
		
	}

	return{
		matches_num,
		fetch_scores,

		turns_update: function(name_player, no_of_cards)
        {
			turns_num += 1;
			set_scores(name_player, no_of_cards);
		},

		match_update: function(player_name, no_of_cards)
        {
			this.matches_num += 1;
		},

		correct_percentage: function(total_selection, no_of_cards)
        {
			var percentage = ((no_of_cards/total_selection)*100);
			return percentage;
		},

		compare_high_scores: function(name_player, no_of_cards)
        {
			message=""
			message = "You have a new high score " + turns_num;
			return message;
		}
	}
})();