const products = [
    {
        id: 1,
        name: 'Cámara Fujifilm X-T30',
        category: 'camaras',
        price: 200000,
        stock: 5,
        image: '/X-T30_Silver_Front.webp',
        description: 'Cámara mirroless con formato APS-C, crop. Liviana y de tamaño muy pequeño. Ideal para viajes y fotografía callejera. Por sus dimensiones reducidas, es ideal para contextos inseguros, pues llama muy poco la atención. Con la nueva montura X de Fuji, ahora podés intercambiar los lentes de tu cámara mirrorless.'
    },
    {
        id: 2,
        name: 'Cámara Canon EOS 80D',
        category: 'camaras',
        price: 592000,
        stock: 10,
        image: '/canon-eos-80d-frontal.jpg',
        description: 'Cámara reflex con formato APS-C, crop. Peso medio y tamaño considerable. Tiene versatilidad para utilizarse tanto en estudio como en viajes y fotografía de calle.'
    },
    {
        id: 3,
        name: 'Cámara Canon EOS R5',
        category: 'camaras',
        price: 980000,
        stock: 2,
        image: '/canon-EOS-R5.jpg',
        description: 'Cámara mirrorless con formato APS-C, crop. Canon se mete de lleno en el territorio de mirrorless con esta excelente cámara de fotos. Ahora podés tener una cámara mirrorless compatible con todos los accesorios Canon originales: lentes montura R, flashes, radios y todo el equipamiento de estudio compatible con Canon.'

    },
    {
        id: 4,
        name: 'Cámara Nikon Z9',
        category: 'camaras',
        price: 1100000,
        stock: 7,
        image: '/nikon-z9.jpg',
        description: 'Cámara sin espejo mirrorless de formato completo full-frame. Altísima velocidad de ráfaga (hasta 20 frames por segundo en raw y 30 en jpg) y múltiples funcionalidades de conectividad. Grabación de video en 8K. La cámara Nikon Z9 es sin dudas la primera cámara mirrorless que produce Nikon orientada al segmento profesional.',
    },
    {
        id: 5,
        name: 'Cámara Fujifilm X-T4',
        category: 'camaras',
        price: 200000,
        stock: 5,
        image: '/X-T30_Silver_Front.webp',
        description: 'Cámara sin espejo mirrorless de formato APS-C. Es una cámara muy versátil con buenas capacidades tanto para fotografía como videografía. Su sensor APS-C de 26.1MP CMOS 4 permite grabación de video en 4K a 60fps, sensibilidad ISO en el rango de 160 a 12800 y disparos en ráfaga hasta 15 disparos por segundo',
    },
    {
        id: 6,
        name: 'Cámara Nikon D850',
        category: 'camaras',
        description: 'Cámara reflex de formato completo full-frame. La nave insignia de Nikon con sensor de 24x36mm. Excelente relación de ruido en ISO hasta 25600. Perfecta para profesionales de la fotografía de estudio, eventos sociales y moda.',
        price: 1120000,
        stock: 6,
        image: '/nikon-d850.jpg',
    },
    {
        id: 7,
        name: 'Lente Canon EF 24-70mm f/2.8L II USM',
        category: 'lentes',
        description: 'Excelente objetivo de alta gama de la serie L de Canon. Distancia focal de 24 a 70mm (equivalente a 38.4 a 112mm si se utiliza en cámaras con sensor APSC. Con apertura máxima de f/2.8 , te va a permitir usar velocidades de obturación muy rápidas y sensibilidades bajas, maximizando la nitidez y minimizando el grano del sensor de tu cámara. Incluye parasol original Canon.',
        price: 529000,
        stock: 4,
        image: '/canon2470.jpg',
    },
    {
        id: 8,
        name: 'Lente Canon EF 50mm f/1.4 USM',
        category: 'lentes',
        description: 'Robustísimo y versátil lente fijo Canon. Ágil para fotografía callejera, paisajes, nocturnas y astrofotografía. Su amplísima apertura máxima de f/1.4 genera un bokeh hermoso, de nivel cinematográfico. El sistema de enfoque USM super silencioso y veloz, te va a permitir sumarle agilidad a tus tomas espontáneas en eventos sociales, fotografía callejera, y deportiva',
        price: 80000,
        stock: 8,
        image: '/canon50.jpg',
    },
    {
        id: 9,
        name: 'Lente Nikon AF-S DX 35mm f/1.8G',
        category: 'lentes',
        description: 'Enamorate de las capacidades de uso general del AF-S DX 35mm f/1.8G. Como un artículo de primera necesidad para los fotógrafos con DSLR de formato DX, este lente fijo, compacto y ligero le permitirá capturar imágenes asombrosas independientemente de su nivel de habilidad. La distancia focal de 35mm es ideal para lograr un ángulo de visión "natural". Con una apertura rápida de f/1.8, podrá hacer foco en los sujetos de forma nítida y crear imágenes con hermosos fondos difuminados, incluso en condiciones de poca luz',
        price: 42500,
        stock: 2,
        image: '/nikon35.webp',
    },
    {
        id: 10,
        name: 'Lente Fujifilm XF 35mm f/2 R WR',
        category: 'lentes',
        description: 'Ofreciendo una perspectiva normal en un paquete compacto, el objetivo XF 35mm f/2 R WR negro de Fujifilm está optimizado para su uso en cámaras de la serie X con sensores de formato APS-C, produciendo una distancia focal equivalente a 53 mm. Además, tiene una apertura máxima rápida f/2, útil para crear imágenes con poca profundidad de campo y trabajar en condiciones de poca luz. Asegurar una calidad de imagen óptima es un diseño de 9 elementos en 6 grupos que incorpora dos ED y dos elementos asféricos que trabajan para minimizar las aberraciones y la distorsión para obtener imágenes nítidas y limpias. Además, la lente tiene el recubrimiento Nano-GI que limita drásticamente los efectos de los fantasmas y los destellos. Para su funcionamiento, el objetivo está equipado con un anillo de apertura física para control táctil cuando se desee. También tiene un rápido sistema de enfoque interno AF que puede bloquearse en un objeto en sólo 0,08 segundos. Otra ventaja es la construcción resistente a la intemperie con ocho sellos en todo el cuerpo de la lente. Además, un diafragma redondeado de 9 láminas produce elementos fuera de foco agradables. Con una distancia focal equivalente a 35 mm de 53 mm, este objetivo de primer plano proporciona una perspectiva normal que resulta útil en una amplia variedad de situaciones.',
        price: 79800,
        stock: 6,
        image: '/fuji35.jpg',
    },
    {
        id: 11,
        name: 'Lente Nikon AF-S DX 18-300mm f/3.5-6.3G',
        category: 'lentes',
        description: 'El AF-S DX NIKKOR 18-300mm f / 3.5-6.3G ED VR puede hacer casi cualquier cosa: imágenes fijas, videos, paisajes, interiores, retratos, vida silvestre … lo que sea. Su rango de zoom masivo va desde gran angular (equivalente a 27 mm en 35 mm) hasta super teleobjetivo (equivalente a 450 mm en 35 mm), por lo que puede capturar primeros planos impresionantes de artistas de concierto y atletas con la misma facilidad que tomas panorámicas. Su diseño compacto y equilibrado y la tecnología de reducción de la vibración ayudan a mantener las fotos nítidas y los videos estables, y el rápido y silencioso sistema de enfoque automático minimiza el ruido de la cámara durante la grabación de video.',
        price: 139000,
        stock: 4,
        image: '/nikon18300.jpg',
    },
    {
        id: 12,
        name: 'Lente Fujifilm XF 16-55mm f/2.8 R LM WR',
        category: 'lentes',
        description: 'Un objetivo zoom resistente a las inclemencias del tiempo con una abertura constante de F2.8 en las longitudes focales equivalente a 24 mm en gran angular hasta 84 mm en teleobjetivo medio, el XF 16-55 mm promete ofrecer imágenes de extraordinaria nitidez incluso con aberturas amplias en toda la gama del zoom.',
        price: 235000,
        stock: 3,
        image: '/fuji1655.webp',
    },
    {
        id: 13,
        name: 'Trípode Manfrotto Befree Advanced',
        category: 'accesorios',
        description: 'Con una capacidad de carga de 8kg y un peso de tan solo 1.5kg, este trípode de viaje Befree avanzado negro de Manfrotto es una opción de soporte robusta que puede servir como un compañero de viaje conveniente tanto para fotógrafos profesionales como para aficionados apasionados',
        price: 38900,
        stock: 3,
        image: '/manfrottobefree.jpg',
    },
    {
        id: 14,
        name: 'Pantalla Reflectora 5 en 1 80cm',
        category: 'accesorios',
        description: 'Lográ fotografías profesionales, con la versatilidad que te ofrece el reflector 5 en 1 de 80cm, sacá provecho del gran manejo de luz y sombras con sus 5 superficies: Oro, Plata, Blanco, Negro y Translúcido. Te permite una variedad de efectos: Difumina, absorbe, refleja o suaviza la luz a tu gusto. Elaborado con un resistente marco de acero flexible, que puede ser fácilmente doblado en un tamaño pequeño. Incluye una bolsa de transporte con cierre, para un fácil traslado. Elaborado con materiales resistentes e impermeables.',
        price: 9000,
        stock: 7,
        image: '/5en1.jpg',
    },
    {
        id: 15,
        name: 'Gorilla Pod Joby 3Kg',
        category: 'accesorios',
        description: 'Kit de trípode ligero y nivelado. Diseñado para admitir cámaras reflex y mirroless o dispositivos que pesen hasta 3 kg. Con un cabezal panorámico de 360° y una inclinación de 90°, su kit GorillaPod 3K es imprescindible para cualquier fotógrafo, director de fotografía o vlogger. Los anillos de goma y las empuñaduras para los pies brindan mayor estabilidad en terrenos difíciles. Las patas envolventes le permiten asegurar el equipo de cámara profesional a prácticamente cualquier superficie. Funciona con accesorios de nivel profesional como GripTight PRO Mount',
        price: 9800,
        stock: 14,
        image: '/jobygorilla.jpg',
    },

]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export {  products, getProducts };