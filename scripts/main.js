var quoteGen = {

	quotes: [
		"In painting, you have unlimited power. You have the ability to move mountains. You can bend rivers.",
		"Remember our Golden Rule: a thin paint sticks to a thick paint.",
		"You know me, I gotta put in a big tree.",
		"Gotta give him a friend. Like I always say, everyone needs a friend.",
		"We don't know where it goes. We don't really care.",
		"Any time you learn, you gain.",
		"Any way you want it to be, that's just right.",
		"Clouds are very, very free.",
		"Just beat the devil out of it.",
		"Scrape in a few indications of sticks and twigs and other little things in there. People will think you spend hours doing this.",
		"Little raccoons and old possums 'n' stuff all live up in here. They've got to have a little place to sit.",
		"People might look at you a bit funny, but it's okay. Artists are allowed to be a bit different.",
		"Talk to the tree, make friends with it.",
		"That's a crooked tree. We'll send him to Washington.",
		"Try to imagine that you are a tree. How do you want to look out here?",
		"We don't make mistakes, we just have happy accidents.",
		"We want happy paintings. Happy paintings. If you want sad things, watch the news.",
		"We're gonna make some big decisions in our little world.",
		"You can do anything you want to do. This is your world.",
		"This is the hardest part of this method. If you can do this, you can do anything."
	],

	currentQuote: "",

	//Selects a random quote by creating a random number between zero and quote arre length
	returnQuote: function () {
		var num = Math.floor(Math.random() * this.quotes.length);
	  this.currentQuote = this.quotes[num];

		//Attches new quote to a div
	  return "<div class=\"quote\"><i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i> " + this.currentQuote + "</div>";
	},

	//Create a pre-populated Tweet
	twitter: function () {
		var quote = this.currentQuote;
		var twitterURL = "https://twitter.com/intent/tweet?text=";
		var linkURL = "&url=http://bit.ly/1QUl1mo";

		//Encode quote to be passed via URI and attach it to Twitter info
  	quote = encodeURIComponent(quote + " #BobRoss");
  	twitterURL = twitterURL + quote;

		//If quote is short enough, add a bitly back to quote generator
  	return this.currentQuote.length < 108 ? twitterURL + linkURL : twitterURL;
	}

};

var pageSetup = {

	//List of colors for background changes
	colors: ["#CBF6FF", "#FDA8A8", "#A8FDBF", "#D5CBFF"],

	returnColor: function () {
		var num = Math.floor(Math.random() * this.colors.length);
		return this.colors[num];
}

};

$(function() {
	var quoteBox$ = jQuery("#quote_box"),
			quoteDisplay$ = jQuery("#quote_display"),
			twitterLink$ = jQuery("#twitter_link");

	function changeQuote () {
		quoteBox$.fadeOut(function () {

			//Get new color for background
			var currentColor = pageSetup.returnColor();

			//Get new quote and Twitter link
			quoteDisplay$.html(quoteGen.returnQuote());
			twitterLink$.attr("href", quoteGen.twitter());

			//Animate site for quote change
			$("body").animate({backgroundColor: currentColor});
			$(".new_quote").animate({borderColor: currentColor});
			$(".fa-quote-right").animate({color: currentColor});
		}).fadeIn();
		$("#social").fadeOut().fadeIn();
	}

	//Set initial quote
	quoteDisplay$.html(quoteGen.returnQuote());
	twitterLink$.attr("href", quoteGen.twitter());

	//Set handlers for changeQuote function
	quoteBox$.click(changeQuote);
	$(document).keyup(changeQuote);
});
