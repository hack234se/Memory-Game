const score_set = 
{

	fetch_user_details(username, no_of_cards)
    {
		var name_player = username + "_" + no_of_cards;
		return sessionStorage.getItem(name_player).split(',');
	},

	user_details(username, no_of_cards, high_score)
    {
		var name_player = username + "_" + no_of_cards;
		if (sessionStorage.getItem(name_player))
        {
			if (high_score < sessionStorage.getItem(name_player)[1])
            {
				sessionStorage.removeItem(name_player);
				sessionStorage.setItem(name_player, [username, no_of_cards, high_score]);
			}
		}
		else
        {
			sessionStorage.setItem(name_player, [username, no_of_cards, high_score]);
		}
	}

};