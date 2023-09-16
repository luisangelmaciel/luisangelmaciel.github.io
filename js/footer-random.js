	var elements = {
			copyYear: document.querySelector('.copyYear')
		};
		var footerRandom = [
			new Date().getFullYear() + ' 🙂  @luisangelmaciel ',
			new Date().getFullYear() + ' 😏  @luisangelmaciel ',
			new Date().getFullYear() + 'Echa un vistazo a <a href="https://www.xbr.pw">MyApps</a> ',
			new Date().getFullYear() + ' 🙃  @luisangelmaciel ',
			'La resaca dura un día.Los recuerdos son para siempre',
			'Si tiene tatuajes, coge rico',
			'¡Qué cafecito ni qué nada, coger señores, el clima está para coger!',
			'Deberías estar desayunando pito y no avena remojada.',
			'Vamo a jugar al goloso, tú te agachas y yo te lo roso.',
			'Que te chupen todo, menos la energía. ',
			'Que el deseo sea mutuo y las ganas de los dos. ',
			'Exigo su _ en mi _',
			'¿Adivinen qué bombón cumple años en febrero ?',
			'Soy el perverso que le puedes presentar a tus papás por que tengo cara de gente decente.',
			'Con los besos en el cuello no se juega. ',
			'Es que contigo puedo ser tan pervertido como tierno ',
			'Ojalá este calor me derrita las lonjas',
			'Nadie en esta ___ sabe que traigo jockstrap',
			'Que ganas de coger mi mochila e irme a viajar...',
			'Me siento muy mal, creo que necesito un viajecitomol',
			'Viajar es un derecho del ser humano y tambien una responsabilidad',
			'Una parte de mi quiere ir de viaje y la otra también',
			'Dicen si me sigues en Twitter, tendrás muchos viajes este año y el que viene.',
			'Mañana cuando despiertes te vas a dar cuenta que todo pasó muy rápido.¡Disfruta el viaje no te lo pierdas!',
			'Tierra trágame y escúpeme en Acapulco',
		];
		var rand = Math.floor(Math.random() * footerRandom.length);
		elements.copyYear.innerHTML += footerRandom[rand];
		reset();