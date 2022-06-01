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
        { author: "", source: "", quote: "La economía colaborativa es un fenómeno que avanza a nivel mundial con paso firme. De hecho según un informe sobre América Latina, del FOMIN del BID, el IE Business School y el Fondo de Cooperación de España, un 69 por ciento de iniciativas de este tipo se concentran en BRasil, México, Argentina y Perú " },
        { author: "Andy Worhol", source: "", quote: "La idea no es vivir para siempre. La idea es crear algo que si lo haga" },
        { author: "", source: "", quote: "Sí buscas resultados distintos, no hagas siempre lo mismo." },
        { author: "", source: "", quote: "No hables, actua. No digas, demuestra. No prometas, cumple" },
        { author: "", source: "", quote: "Nos hemos acostumbrado a decir ´estoy bien´, para ahorrarnos preguntas que no queremos contestar " },
        { author: "", source: "", quote: "Haces 99 cosas bien, pero si haces 1 mal, se olvidan de las 99" },
        { author: "Richard Branson", source: "", quote: "No se aprende a caminar siguiendo las reglas. Se aprende caminando y cayendo" },
        { author: "Stephen Hawking", source: "", quote: "Las personas tranquilas y silenciosas son las que tienen mentes más fuertes y ruidosas" },
        { author: "Juan Rivera, socio y director general de Llorente y Cuenca", source: "", quote: "Las relaciones publicas adoptan un papel mucho más orientado a la consultoría y a la transformación de datos en historias que generen emociones y conexiones. Está implícito tener mucha capacidad analítica para generar alternativas de acción a los clientes. No solamente es cuestión de tener una plataforma o un software que recabe toda la información de la organización sino de incluir en esa plataforma el instinto humano que permita pulverizar los datos y traducirlos en ventajas competitivas." },
        { author: "", source: "", quote: "Sí alguién te dice que algo es imposible, no les hagas caso, está hablando de sus limintaciones, no de las tuyas." }
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