/* Este es el javascript para la el trabajo integrador */

/* SI PASAN POR AQUI; ESTE CODIGO LO HICE YO MISMO Y ME TARDE 5 DIAS 12 HORAS DIARIAS DE CADA UNO */
/* ESPERO QUE FUNCIONE TODO PORQUE DA ERRORES RARISIMOS CUANDO QUIERE */

var priceRef = {
    "perPerson": 5000,
    "chairPerson": 1000,
    "notChair": 0,
    /*----*/
    "bringFood": 500,
    "bringDrink": 500,
    "photo": 3000,
    "clothing": 3000,
    "coffeeBreak": 2500,
    "wifi": 2500,
    "screen": 5000,
    "soundSystem": 5000,
    "dancingFloor": 500,
    "pool": 5000,
    "rooms": 10000
}

var descripRef = {
    "perPerson": "Precio por persona",
    "chairPerson": "Precio por asiento",

    /*----*/
    "bringFood": "Comision por no comer del local",
    "bringDrink": "Comision por no beber del local",
    "photo": "Valor extra por equipo y/o personal fotografico",
    "clothing": "Valor de servicio de vestuario y guardaropa",
    "coffeeBreak": "Valor extra por servicios de te o cafe",
    "wifi": "Valor de mantenimiento de redes",
    "screen": "Valor de mantenimiento de equipos visuales",
    "soundSystem": "Valor de mantenimiento de equipos de sonido",
    "dancingFloor": "Comision de pista de baile",
    "pool": "Mantenimiento de piscinas",
    "rooms": "Comision del hotel y/o residencia"
}

var promoCodesRefDesc = {
    "AAAA-1111": "10% OFF",
    "BBBB-2222": "20% OFF",
    "CCCC-3333": "30% OFF",
    "DDDD-4444": "40% OFF",
    "EEEE-5555": "50% OFF",
    "FFFF-6666": "60% OFF",
    "GGGG-7777": "70% OFF",
    "HHHH-8888": "80% OFF"
}

var promoCodesRefVal = {
    "AAAA-1111": 0.1,
    "BBBB-2222": 0.2,
    "CCCC-3333": 0.3,
    "DDDD-4444": 0.4,
    "EEEE-5555": 0.5,
    "FFFF-6666": 0.6,
    "GGGG-7777": 0.7,
    "HHHH-8888": 0.8
}

var objectsID = {
    "usrName": document.getElementById("factureName"),
    "usrLastName": document.getElementById("factureLastName"),
    "usrMail": document.getElementById("factureMail"),
    "dateToUse": document.getElementById("factureDate"),
    "codePromo": document.getElementById("promotionCode"),
    "factureContainer": document.getElementById("factureList"),
    "resumeContainer": document.getElementById("factureList__Resume"),
    "locationSelector": document.getElementById("location"),
    "restaurantContainer": document.getElementById("restaurant-result"),
    "eventSelector": document.getElementById("eventTypes"),
    "resumeFactureTittle": document.getElementById("resumeTittle")
}

var restaurantsRef = {
    "1": [
        "Fogón Asado: Donde la tradición del asado argentino cobra vida", 
        "Ubicado en el corazón de Buenos Aires, en Uriarte 1423, Fogón Asado se destaca como uno de los mejores restaurantes de la ciudad cuando se trata de asado argentino. Cada corte de carne es seleccionado cuidadosamente para garantizar la mejor calidad y sabor. Pero Fogón Asado no se trata solo de carne. Su menú también cuenta con una variedad de opciones para complacer a todos los paladares, cada plato está preparado con dedicación y pasión por la cocina . El restaurante cuenta con una decoración rústica que refleja la esencia de un auténtico asado argentino. Ya sea que elijas sentarte en su acogedor comedor o disfrutar de una cena al aire libre en su encantadora terraza, te sentirás como en casa. Los meseros están capacitados para brindarte una experiencia memorable y te guiarán a través del menú para ayudarte a seleccionar las mejores opciones según tus preferencias.",
        "../resources/imgs/restaurants/fogon-asado.jpg"
    ],
    "2": [
        "Las Barrancas: Naturaleza y paz",
        "Es un encantador restaurante ubicado en la hermosa provincia de Entre Ríos, . Situado en un entorno natural y pintoresco, este restaurante ofrece una experiencia gastronómica única para aquellos que buscan deleitar sus sentidos. El menú de Las Barrancas ofrece una amplia variedad de platos exquisitos, destacando la cocina tradicional de la región. Desde deliciosas carnes asadas hasta sabrosos platos de pescado fresco, cada bocado es una explosión de sabores auténticos y cuidadosamente preparados. Ya sea que estés buscando disfrutar de una comida romántica en pareja o compartir un momento especial con amigos y familiares, Las Barrancas es el lugar ideal. Sumérgete en la belleza natural de Entre Ríos mientras saboreas platos deliciosos en este encantador restaurante.",
        "../resources/imgs/restaurants/las-barrancas.jpg"
    ],
    "3": [
        "Bros. Comedor: Modernidad y dinamismo",
        "Un lugar único donde la cocina joven y dinámica se fusiona con sabores auténticos y una experiencia gastronómica inolvidable. Ubicado en la calle 27 de Abril, en el segundo piso, en pleno corazón de Córdoba, nuestro restaurante te invita a disfrutar de almuerzos y cenas llenos de sabor y creatividad. En Bros. Comedor, cada plato es una obra maestra culinaria cuidadosamente elaborada por nuestro talentoso equipo de chefs. Nuestra carta ofrece una amplia variedad de opciones, desde platos tradicionales hasta creaciones innovadoras que sorprenderán a tu paladar. Además, utilizamos ingredientes frescos y de alta calidad para garantizar una experiencia gastronómica excepcional. Nuestro ambiente acogedor y moderno te hará sentir como en casa desde el momento en que cruzas la puerta. Ya sea que vengas a disfrutar de una cena romántica, una comida de negocios o una reunión con amigos, en Bros. Comedor encontrarás el lugar perfecto para crear momentos especiales.",
        "../resources/imgs/restaurants/bros-comedor.jpg"
    ],
    "4": [
        "Martino Wines: Minimalismo y elegancia",
        "Ubicada en la hermosa provincia de Mendoza, Martino Wines te invita a sumergirte en una experiencia vinícola única. Nuestros vinos son el resultado de la pasión y dedicación de nuestro equipo de enólogos, quienes cuidan cada detalle desde la selección de las uvas hasta el proceso de fermentación. Cada botella de Martino Wines es una expresión de la riqueza y diversidad de los viñedos de Mendoza. En Martino Wines, podrás degustar vinos locales y descubrir los sabores auténticos de la región. Nuestra bodega te ofrece un entorno acogedor y una vista impresionante de los paisajes de Mendoza. Además, contamos con visitas guiadas y catas de vinos para que puedas aprender más sobre el arte de la vinificación.",
        "../resources/imgs/restaurants/martino-wines.jpg"
    ],
    "5": [
        "La Campiña Club Hotel & Spa: Todo a vuestro servicio",
        "La Campiña Club Hotel & Spa es un encantador hotel ubicado en la provincia de La Pampa. Este establecimiento ofrece mucho más que solo alojamiento, ya que cuenta con un restaurante excepcional que deleitará tus sentidos. El restaurante de La Campiña Club Hotel & Spa es conocido por su elegancia y su exquisita cocina. Aquí podrás disfrutar de una amplia variedad de platos que combinan sabores tradicionales argentinos con toques modernos. Desde deliciosas carnes a la parrilla hasta platos gourmet elaborados con ingredientes frescos y locales, el restaurante ofrece una experiencia culinaria inolvidable. Con un ambiente acogedor y un servicio impecable, el restaurante de La Campiña Club Hotel & Spa es el lugar perfecto para disfrutar de una comida especial. Ya sea que estés buscando una cena romántica, una comida de negocios o simplemente quieras deleitarte con una deliciosa comida, este restaurante te sorprenderá con su atención al detalle y su sabor excepcional.",
        "../resources/imgs/restaurants/la-campina-club-hotel.jpg"
    ],
    "6": [
        "La Vieja Casona: Tradicion e historia",
        "La Vieja Casona es un encantador restaurante ubicado en la provincia de La Rioja. Con una ubicación privilegiada en Rivadavia 457, este establecimiento es conocido por su ambiente acogedor y su deliciosa comida argentina. En La Vieja Casona, podrás disfrutar de una amplia variedad de platos tradicionales argentinos, que incluyen especialidades de la churrasquería. Ya sea que desees disfrutar de un almuerzo, una cena o incluso quedarte hasta tarde, este restaurante te ofrece una experiencia culinaria inolvidable. La Vieja Casona ha recibido excelentes críticas de comensales satisfechos. Con 283 reseñas en Tripadvisor, se encuentra en el puesto número 3 de los 46 restaurantes en La Rioja. Esto es un testimonio de la calidad de su comida y servicio.",
        "../resources/imgs/restaurants/vieja-casona.jpg"
    ],
    "7": [
        "Club Sirio Libanés: Cocina libanesa y ambiente historico",
        "El Restaurante Club Sirio Libanés es una joya culinaria en la ciudad de San Juan. Con una ubicación privilegiada en el centro de la ciudad, este restaurante ofrece una experiencia gastronómica única que combina la deliciosa cocina libanesa con un ambiente acogedor. El menú del Restaurante Club Sirio Libanés está repleto de platos auténticos y sabrosos que reflejan la rica tradición culinaria de la comunidad sirio libanesa. Desde exquisitos kebabs y falafel hasta hummus y tabbouleh frescos, cada bocado es una explosión de sabores y aromas. No es de extrañar que el Restaurante Club Sirio Libanés sea uno de los destinos gastronómicos más populares de San Juan. Su reputación impecable, combinada con la calidad de su comida y su ambiente encantador, lo convierten en una visita obligada para los amantes de la cocina libanesa y aquellos que buscan una experiencia culinaria inolvidable.",
        "../resources/imgs/restaurants/club_sirio-libanes.jpg"
    ],
    "8": [
        "Gran Coventry: Elegante y sabroso",
        "Ubicado en Chacabuco 325, G4200 Santiago del Estero, el restaurante 'Gran Coventry' es un lugar popular tanto para los lugareños como para los visitantes.  Este restaurante ofrece una experiencia culinaria única y deliciosa para los comensales. Con un ambiente relajado y acogedor, es el lugar perfecto para disfrutar de una comida memorable. El menú del restaurante 'Gran Coventry' ofrece una amplia variedad de platos exquisitos, que van desde especialidades locales hasta platos internacionales. Los ingredientes frescos y de alta calidad se utilizan para preparar cada plato, asegurando sabores auténticos y deliciosos. Además de la deliciosa comida, el restaurante 'Gran Coventry' también ofrece un servicio excepcional. El personal amable y atento está siempre dispuesto a brindar recomendaciones y asegurarse de que los comensales tengan una experiencia gastronómica inolvidable.",
        "../resources/imgs/restaurants/gran-coventry.jpg"
    ],
    "9": [
        "Te Conozco Orozco: Urbano y autentico",
        "Te Conozco Orozco es un restaurante destacado ubicado en la provincia de Formosa, . Con una reputación envidiable entre los amantes de la buena comida, este lugar se ha convertido en una parada obligatoria para aquellos que buscan deleitar sus paladares con exquisitos platos argentinos. Con una decoración cálida y acogedora, Te Conozco Orozco ofrece una experiencia gastronómica única. Su menú cuenta con una amplia variedad de opciones, desde las clásicas empanadas s hasta suculentos cortes de carne a la parrilla. Cada plato está cuidadosamente preparado por chefs expertos que se dedican a resaltar los sabores auténticos de la cocina . Además de su deliciosa comida, Te Conozco Orozco se destaca por su excelente servicio y ambiente agradable. El personal amable y atento está siempre dispuesto a hacer recomendaciones y asegurarse de que los comensales tengan una experiencia memorable.",
        "../resources/imgs/restaurants/conozco-orozco.jpg"
    ],
    "10": [
        "Restaurante Valentino: Sofisticado y acogedor",
        "El restaurante Valentino es un lugar encantador ubicado en Corrientes, . Con su ambiente elegante y acogedor, es el destino perfecto para disfrutar de una experiencia culinaria única. El restaurante se destaca por su excelente atención al cliente y su personal cálido y profesional. En Valentino, podrás deleitarte con una deliciosa comida. Su carta ofrece una variedad de platos exquisitos que satisfarán todos los paladares. Desde opciones tradicionales hasta creaciones culinarias innovadoras, cada bocado es una explosión de sabores y texturas. Además de su excelente comida, Valentino también se destaca por su hermosa decoración. El ambiente está cuidadosamente diseñado para crear una atmósfera sofisticada y acogedora. Ya sea que estés buscando una cena romántica o una reunión con amigos, este restaurante te brindará el ambiente perfecto. Aunque destaca mas por su elegancia y refinamiento. Su ambiente y decoración crean una experiencia sofisticada que te transporta a un mundo de lujo y buen gusto.",
        "../resources/imgs/restaurants/valentino-restaurant.jpg"
    ]
}

const formatter = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'ARS',});

/* ---- ---- */

function getDate() {
    var today = new Date();    
    document.getElementById("factureDate").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    console.log("Cargada fecha de hoy");
}

function create__FactureItem (DescText, ValueText) {

    /* Se generan los elementos */
    const listItem = document.createElement("li");
    const container = document.createElement("span");
    const Description = document.createElement("p");
    const conectorLine = document.createElement("hr");
    const Amount = document.createElement("p");

    /* Se cargan los textos */
    let Description_text = document.createTextNode(DescText);
    let Amount_Text = document.createTextNode(ValueText);

    /* Se conectan los textos a los elementos */
    Description.appendChild(Description_text);
    Amount.appendChild(Amount_Text);

    /* conectar la descripcion, el conector y la cantidad al span contenedor */
    container.appendChild(Description);
    container.appendChild(conectorLine);
    container.appendChild(Amount);

    /* conectar el span contenedor al item lista */
    listItem.appendChild(container);

    /* conectar el item lista a su lugar*/
    objectsID["factureContainer"].appendChild(listItem);
    console.log("Creado item de factura expandida");
}

function cleanFacture() {
    while (objectsID["factureContainer"].hasChildNodes()) {
        objectsID["factureContainer"].removeChild(objectsID["factureContainer"].firstChild);
    }
    let totalLabel = document.getElementById("valueTotals");
    totalLabel.textContent = "00000,00";
    console.log("Limpiaza factura expandida");

    while (objectsID["resumeContainer"].hasChildNodes()) {
        objectsID["resumeContainer"].removeChild(objectsID["resumeContainer"].firstChild);
    }
    console.log("Limpiada factura resumen");
}


function name__Val () {
    let namesPattern =/^[a-zA-ZñÑ]+(([',. -][a-zA-ZñÑ ])?[a-zA-ZñÑ]*)*$/;
    /* Validacion de nombre */
    if (objectsID["usrName"].value == "") {
        objectsID["usrName"].focus({ focusVisible: true });
        objectsID["usrName"].setCustomValidity("Se requiere un nombre para la reserva");
        console.log("Nombre vacio");
    } 
    else if (objectsID["usrName"].value != "") {
        if (namesPattern.test(objectsID["usrName"].value) == false) {
            objectsID["usrName"].focus({ focusVisible: true });
            objectsID["usrName"].setCustomValidity("Ingresa un nombre valido");
        } else {
            console.log("Nombre validado");
            return true;
        }
    }
}

function lastName__Val () {
    let namesPattern =/^[a-zA-ZñÑ]+(([',. -][a-zA-ZñÑ ])?[a-zA-ZñÑ]*)*$/;
    /* Validacion de apellido */
    if (objectsID["usrLastName"].value == "") {
        objectsID["usrLastName"].focus({ focusVisible: true });
        objectsID["usrLastName"].setCustomValidity("Se requiere un apellido para la reserva");
        console.log("Apellido vacio");
    }
    else if (objectsID["usrLastName"].value != "") {
        if (namesPattern.test(objectsID["usrLastName"].value) == false) {
            objectsID["usrLastName"].focus({ focusVisible: true });
            objectsID["usrLastName"].setCustomValidity("Ingresa un apellido valido");
        } else {
            console.log("Apellido validado");
            return true;
        }
    }        
}

function mail__Val () {
    /* Validacion de correo */
    let mailPattern =/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/;
    if (objectsID["usrMail"].value == "") {
        objectsID["usrMail"].focus({ focusVisible: true });
        objectsID["usrMail"].setCustomValidity("Se requiere un correo de contacto");
        console.log("Correo vacio");
    } 
    else if (objectsID["usrMail"].value != "") {
        if (mailPattern.test(objectsID["usrMail"].value) == false) {
            objectsID["usrMail"].focus({ focusVisible: true });
            objectsID["usrMail"].setCustomValidity("Se requiere un correo valido");
            console.log("ejecutado else");
        } else {
            console.log("Correo validado");  
            return true;  
        }
    }
}

function code__Val () {
    let codePattern =/^[A-Z]{4}-[1-9]{4}$/;
    /* Validacion de codigo */
    if (objectsID["codePromo"].value != "") {
        if (codePattern.test(objectsID["codePromo"].value) == false) {
            objectsID["codePromo"].focus({ focusVisible: true });
            objectsID["codePromo"].setCustomValidity("El codigo es invalido");
        } else {
            console.log("Codigo validado");
            return true;
        }
    } else {
        console.log("Codigo vacio");
    }
}

function validations() {
    if (name__Val() == true && lastName__Val() == true && mail__Val() == true) {
        code__Val();

        /* Todo ok? */
        return true;
    } else {
        return false;
    }
}

function locateRestaurants () {
    var actualSiteID = restaurantsRef[objectsID["locationSelector"].value];

    /* Limpieza de ubicacion */
    while (objectsID["restaurantContainer"].hasChildNodes()) {
        objectsID["restaurantContainer"].removeChild(objectsID["restaurantContainer"].firstChild);
    }

    /* Contenedores primarios */
    const containerText = document.createElement("div");
    const containerImg = document.createElement("div");
 
    /* Elementos para el texto */
    const textHeader = document.createElement("h2");
    const descriptionText = document.createElement("p");

    /* Elementos para la imagen */
    const frameImage = document.createElement("div");
    const imageSelf = document.createElement("img");

    /* Creacion de valores */
    let textHeader__Value = document.createTextNode(actualSiteID[0]);
    let descriptionText__Value = document.createTextNode(actualSiteID[1]);

    /* Asignacion de valores */
    textHeader.appendChild(textHeader__Value);
    descriptionText.appendChild(descriptionText__Value);
    imageSelf.src = actualSiteID[2];

    /* Emparentamiento de elementos */
    containerText.appendChild(textHeader);
    containerText.appendChild(descriptionText);
    /* ---- */
    frameImage.appendChild(imageSelf);
    containerImg.appendChild(frameImage);

    /* Ubicar elementos en su destino */
    objectsID["restaurantContainer"].appendChild(containerText);
    objectsID["restaurantContainer"].appendChild(containerImg);
    console.log("Agregado resultado de busqueda de restaurante");
}

function create__FactureResumeItems(DescText, ValueText) {

    /* Se generan los elementos */
    const container = document.createElement("span");
    const Description = document.createElement("p");
    const Value = document.createElement("p");

    /* Se cargan los textos */
    let Description_text = document.createTextNode(DescText);
    let Value_Text = document.createTextNode(ValueText);

    /* Se conectan los textos a los elementos */
    Description.appendChild(Description_text);
    Value.appendChild(Value_Text);

    /* conectar la descripcion y la cantidad al span contenedor */
    container.appendChild(Description);
    container.appendChild(Value);        

    /* conectar el item lista a su lugar*/
    objectsID["resumeContainer"].appendChild(container);
    console.log("Creado item resumen");
}

function getTotal () {
    /* Inicializacion de total */
    let totalcalc = 0;
    /* Variables de personas y panel de total */
    let chair = document.getElementById("people-filter-select").value;
    let totalLabel = document.getElementById("valueTotals");
    let peopleAmount = document.getElementById("people").value;

    /* Valores de los checkboxes en un array */
    const checkedArr = Array.from(document.querySelectorAll(`input[name=check]:checked`)).map(node=>node.value);

    /* Limpieza de factura en caso de tener contenidos */
    cleanFacture();

    /* Llamado al resumen */
    if (validations() == true) {

        /* Inicio de calculos; primero por persona */
    
        totalcalc = (peopleAmount * priceRef["perPerson"])
        create__FactureItem(descripRef["perPerson"], formatter.format(priceRef["perPerson"]))

        /* En caso que se quieran asientos */
        if (chair == "chairPerson") {
            totalcalc += (peopleAmount * priceRef[String(chair)])
            create__FactureItem(descripRef["chairPerson"], formatter.format(priceRef["chairPerson"]))
        }

        /* Calculos de los checks */    
        for (i = 0; i < checkedArr.length; i++) {
            if (checkedArr[i] != "musicOK") {
                create__FactureItem(descripRef[checkedArr[i]], formatter.format(priceRef[checkedArr[i]]));
                totalcalc += priceRef[checkedArr[i]];
            }
        }

        create__FactureResumeItems("Nombre: ", objectsID["usrName"].value);
        create__FactureResumeItems("Apellido: ", objectsID["usrLastName"].value);
        create__FactureResumeItems("Fecha: ", objectsID["dateToUse"].value);
        if (objectsID["codePromo"].value != "") {
            let totalDescount = totalcalc - (totalcalc * promoCodesRefVal[objectsID["codePromo"].value]);
            create__FactureResumeItems("Total con " + promoCodesRefDesc[objectsID["codePromo"].value], formatter.format(totalDescount));
        } else {
            create__FactureResumeItems("Total: ", formatter.format(totalcalc));
        }

        /* Llamado al cuadro de ubicacion */
        locateRestaurants();

    } else {console.log("Hay un error en los campos del formulario");}

    if (objectsID["eventSelector"].value != "0") {
        objectsID["resumeFactureTittle"].textContent = "Resumen de Factura de evento tipo " + objectsID["eventSelector"].value
    }

    /* Asignacion del total */
    totalLabel.textContent = formatter.format(totalcalc);
}

function cleanAll () {
    /* Limpieza de ubicacion */
    while (objectsID["restaurantContainer"].hasChildNodes()) {
        objectsID["restaurantContainer"].removeChild(objectsID["restaurantContainer"].firstChild);
    }
    /* Valores de los checkboxes en un array */
    const checkboxesArr = Array.from(document.querySelectorAll(`input[name=check]:checked`));   
    for (i = 0; i < checkboxesArr.length; i++) {
        checkboxesArr[i].checked = false;
    }
    /* Limpieza de factura */
    cleanFacture();

    /* limpieza del nombre, apellido y correo */
    objectsID["usrName"].value = "";
    objectsID["usrLastName"].value = "";
    objectsID["usrMail"].value = "";
    objectsID["codePromo"].value = "";
}

alert("Esta vez no olvides mi nombre, esta junto con mi correo en la esquina inferior izquierda, por si acaso: El creador de este documento es 'Miguel Diaz' ;D");
