/*****
DONE: Add author to the tweet
TODO: Fix the 140 character tweet limit
TODO: Random number/quote on click shouldn't sometimes be the same as the previous one, making the quote form look unresponsive/broken
TODO: Rotating phone from landscape to portrait causes height issues
TODO: Give users the ability to add quotes and/or upvote or rate their favorite quotes -- could be abused though.
TODO: More quotes!
TODO: Add more cyberpunk-y effects and animations
*****/

$(document).ready(function() {
    var quoteList = [
        { author: "", source: "", quote: "Últimamente el café se esta volviendo mi mejor amigo. " },
        //     { author: "", source: "", quote: "" },
        //   { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "El pene hasta la garganta... ah, pero las pastillas ahí las andan partiendo a la mitad para tragárselas. " },
        { author: "", source: "", quote: "No maduramos por los años, sino con los daños. Cada experiencia es una nueva lección." }
    ];

    // var quoteRandomize = '';
    // var quoteMain = '';
    // var quoteAuthor = '';
    // var quoteSource = '';

    function quoteGenerate() {
        var quoteRandomize = Math.floor(Math.random() * quoteList.length);
        var quoteMain = quoteList[quoteRandomize].quote;
        var quoteAuthor = quoteList[quoteRandomize].author;
        var quoteSource = quoteList[quoteRandomize].source;

        $("#quote").text(quoteMain);
        $("#author").text(quoteAuthor);
        $("#source").text(quoteSource);
    };

    /**** Quote Limit Test ****/
    // function quoteTweet() {   
    //   if((quoteMain + quoteAuthor).length > 140 ){
    //     alert("no");
    //   } else {
    //     quoteTweet();
    //   }
    //   window.open("https://twitter.com/home/?status=" + "\"" + $("#quote").text() + "\"" + " - " + $("#author").text(), '_blank');
    // };

    $(".tweet").on("click", function() {
        window.open("https://twitter.com/home/?status=" + "\"" + $("#quote").text() + "\"" + " - " + $("#author").text(), '_blank');
    });

    // $(".tweet").on("click", function() {
    //  quoteTweet();
    // });

    $("#new-quote").on("click", function() {
        quoteGenerate();
    });
    // quoteTweet();
    quoteGenerate();
});