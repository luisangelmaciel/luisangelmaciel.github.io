/*****


Deberías estar desayunando pito y no avena remojada. 
Vamo a jugar al goloso, tú te agachas y yo te lo roso. 
Fingir no saber para ver hasta donde llega la hipocresia de la gente. Huason. 
Quien te quiere en su vida, vuelve a buscarte. 
Quiero ser mi versión más sana y bonita este año. 
No se trata de enamorarlo, sino de mantenerlo enamorado. Conquistarlo aunque ya sea tu novio
Tener la posibilidad de herir a quien nos hirió y no hacerlo eso es lo que nos distingue de la mala gente.
Solo puede quedar uno…
Bedoyecta Beryaerecta
 





lamp! te hace más feliz :)
Si sabes vender y justificar a nivel nu0mérico cualquier idea, esa idea será rentable.
Nos costó uno y la mitad del otro comprar este espacio. Pero valió la pena que lo vieras y de paso te rieras. 

*****/

$(document).ready(function() {
    var quoteList = [
        { author: "", source: "", quote: "La economía colaborativa es un fenómeno que avanza a nivel mundial con paso firme. De hecho según un informe sobre América Latina, del FOMIN del BID, el IE Business School y el Fondo de Cooperación de España, un 69 por ciento de iniciativas de este tipo se concentran en Brasil, México, Argentina y Perú " },
        { author: "Andy Worhol", source: "", quote: "La idea no es vivir para siempre. La idea es crear algo que sí lo haga" },
        { author: "", source: "", quote: "Sí buscas resultados distintos, no hagas siempre lo mismo." },
        { author: "", source: "", quote: "No hables, actúa. No digas, demuestra. No prometas, cumple" },
        { author: "", source: "", quote: "Nos hemos acostumbrado a decir ´estoy bien´, para ahorrarnos preguntas que no queremos contestar " },
        { author: "", source: "", quote: "Haces 99 cosas bien, pero si haces 1 mal, se olvidan de las 99" },
        { author: "", source: "", quote: "El storydoing se trata de fomentar la participación del usuario en la historia, que interactúe y la viva en primera persona consiguiendo que la experiencia sea lo más inmersiva posible y el efecto, reacción, respuesta y experiencia por parte del usuario sea mucho más potente y por tanto efectiva.", link: "https://www.easypromosapp.com/blog/2022/05/ejemplo-storydoing-con-captacion-datos/?utm_source=Easypromos+new+newsletter&utm_campaign=3b01ce6c5c-easypromos_2022_06_01&utm_medium=email&utm_term=0_cc4558e8cf-3b01ce6c5c-326483114" },
        { author: "", source: "", quote: "Dejame ser tu próximo departamento de mercadotecnia y comunicación." },
        { author: "Javier Sosa. Director de mercadotecnia de PPG-COMEX (2016)", source: "", quote: "El verdadero elemento de entendimiento entre las agencias y las empresas es el nivel de involucramiento y la visión a largo plazo entre las marcas y las agencias. " },
        { author: "", source: "", quote: "Toma agua a lo largo del día. Aunque no lo creas, la falta adecuada de hidratación obstruye la concentración y ni mente ni creatividad fluyen eficientemente." },
        { author: "", source: "", quote: "Es  importante empezar el día con alimentos energéticos: nueces, semillas y un buen jugo (el verde es maravilloso). Desayunar incrementa 40% tu energía (además de que acelera el metabolismo). Todo mundo lo dice, pero uno no hace caso, caray." },
        { author: "", source: "", quote: "Yo, como Confucio, prefiero pensar que si me dedico a algo que me apasiona no tengo que trabajar ni un día de mi vida: mi amor por lo que hago lo convierte en mi hobby. I have a job that is my hobby, hence I have a jobby!" },
        { author: "", source: "", quote: "Si lo visualizas... lo hacemos posible. Me gusta generar ideas para construir experiencias. Gracias por la oportunidad de que trabajemos juntos. LAMP! " },
        { author: "", source: "", quote: "Conectar con experiencias para identificar, entender, hacer crecer y mantener a tus consumidores, es mi prioridad a la hora de que trabajemos juntos. LAMP!" },
        { author: "", source: "", quote: "Contacta conmigo y te ayudaré a impactar en tus estrategias digitales. LAMP!" },
        { author: "", source: "", quote: "En Lamp.Martech! somos una agencia chiquita pero chingona. " },
        { author: "Eric Descombes, presidente de FCB México.", source: "", quote: "El uso de la tecnología y datos guían las decisiones. Los líderes generan un lugar de trabajo de crecimiento y desarrollo personal.  " },
        { author: "", source: "", quote: "El tamaño de una idea no es relevante. Lo que importa es el impacto que genera." },
        { author: "", source: "", quote: "No se trata de enamorarlo, sino de mantenerlo enamorado. Conquistarlo aunque ya sea tu novio, pasa lo mismo con los clientes. " },
        { author: "", source: "", quote: "Tómate un descanso, te lo mereces y haz lo que mejor sabes hacer." },
        { author: "", source: "", quote: "Estoy en CDMX, trabajo para todo el país. lamp!" },
        { author: "", source: "", quote: "Si me buscas, es porque quieres algo diferente. lamp!" },
        { author: "", source: "", quote: "Es increíble  qué tanto podemos hacer cuando nos ponemos de acuerdo. " },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "Yuri Alvarado, presidente de Alvarado Molina.", source: "", quote: "Creatividad posiblemente sea visualizar el éxito donde otras personas no ven más allá de sus narices. Un creativo imagina es como una especie de Indiana Jones, alguien que anda buscando la idea perdida.  " },
        { author: "", source: "", quote: "Creatividad visual ir más allá de una idea. Atraer consumidores por medio de la vista se vuelve más latente al considerar la apuesta creativa con la que cuentan otras marcas, así como un entorno que es acechado por numerosos anuncios que buscan acaparar las miradas del público. " },
        { author: "Richard Branson", source: "", quote: "No se aprende a caminar siguiendo las reglas. Se aprende caminando y cayendo" },
        { author: "Stephen Hawking", source: "", quote: "Las personas tranquilas y silenciosas son las que tienen mentes más fuertes y ruidosas" },
        { author: "Juan Rivera, socio y director general de Llorente y Cuenca", source: "", quote: "Las relaciones públicas adoptan un papel mucho más orientado a la consultoría y a la transformación de datos en historias que generen emociones y conexiones. Está implícito tener mucha capacidad analítica para generar alternativas de acción a los clientes. No solamente es cuestión de tener una plataforma o un software que recabe toda la información de la organización sino de incluir en esa plataforma el instinto humano que permite pulverizar los datos y traducirlos en ventajas competitivas." },
        { author: "", source: "", quote: "Sí alguién te dice que algo es imposible, no les hagas caso, está hablando de sus limitaciones, no de las tuyas." }
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