class Card{
	constructor(url)
    {
		this.url = $(url);
		this.image = $(url).children("img");
		this.id = this.link.attr("id");
	}
	isRevealed()
    {
		return this.img.attr("alt") === "blank";
	}

	isSame(firstSelection)
    {
		return this.id === firstSelection.id
	}
}