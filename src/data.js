export const pageLinks = [
  { id: 1, href: "/", text: "Home" },
  { id: 2, href: "about", text: "About" },
  // { id: 3, href: "new item", text: "New Item" },
  { id: 4, href: "search", text: "Search" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.instagram.com", icon: "fab fa-instagram" },
  { id: 3, href: "https://www.tiktok.com/", icon: "fab fa-tiktok" },
];

export const categoryLinks = [
  {
    id: 1,
    href: "hobby accesories",
    text: "Hobby accessories",
    icon: "fa-solid fa-table-tennis-paddle-ball scale-150",
  },
  {
    id: 2,
    href: "clothes",
    text: "Clothes",
    icon: "fa-solid fa-tshirt scale-150",
  },
  {
    id: 3,
    href: "furniture",
    text: "Furniture",
    icon: "fa-solid fa-couch scale-150",
  },
  {
    id: 4,
    href: "electronics",
    text: "Electronics",
    icon: "fa-solid fa-tv scale-150",
  },
  {
    id: 5,
    href: "vehicles",
    text: "Vehicles",
    icon: "fa-solid fa-car scale-150",
  },
  {
    id: 6,
    href: "instruments",
    text: "Instruments",
    icon: "fa-solid fa-guitar scale-150",
  },
];

// dummy itemi

export const faqLinks = [
  {
    id: 1,
    header: "Miksi rahani hävisivät?",
    content: "Syynä saattaa olla huijaus tai sitten olet vain köyhä"
  },
  {
    id: 2,
    header: "Kuka omistaa FixHubin?",
    content:
      "FixLinkin omistaa opiskelijaryhmä. Heillä on tarkka visio sovelluksesta ja aikovat menestyä sillä"
  },
  {
    id: 3,
    header: "Kuinka liityn fixaajaksi?",
    content:
      "Rekisteröidyt sisään käyttäjänä ja klikkaat aktiiviseksi kentän 'Olen korjaaja'. Tämän jälkeen saat käyttöösi kaikki korjaajien ominaisuudet"
  }, {
    id: 4,
    header: "Kuinka lisätä tuote?",
    content:
      "Ylä palkista löytyy 'lisää tuote' -osio.Tuotteen voi lisätä vasta rekisteröidyttyäsi palveluun."
  },
  {
    id: 5,
    header: "Kuinka rekisteröityä?",
    content:
      "Voit rekisteröityä palveluun klikkaamalla login ja tämän jälkeen valitsemalla, rekisteröidy palveluun"
  },
  {
    id: 6,
    header: "Onko palvelu turvallinen?",
    content:
      "Palvelu on erittäin turvallinen. Sinun täytyy vain luottaa toiseen ihmiseen"
  }
];




export const dummyItems = [
  {
    itemId: "I00001",
    userId: "U95846",
    fixerId: "U57432",
    name: "Kenkä",
    tags: [],
    description: "Reikä on juu.",
    category: "Clothing",
    location: { province: "Uusimaa", city: "Helsinki", postalcode: "00790" },
    priceRange: [5, 10], //start and finish
    dateOfPublish: new Date("2023-11-15"),
    images: ["kenkä.jpg", "kenkä2.jpg"],
    isFixed: true,
    interested: 1
  },
  {
    itemId: "I00002",
    userId: "U93257",
    fixerId: "U13456",
    name: "Trumpetti",
    tags: ["musiikki", "soitin"],
    description: "Trumpetti, jossa on pieniä kolhuja.",
    category: "instruments",
    location: { province: "Uusimaa", city: "Espoo", postalcode: "02100" },
    priceRange: [50, 100],
    dateOfPublish: new Date("2022-10-12"),
    images: ["trumpetti.jpg"],
    isFixed: true,
    interested: 1
  },
  {
    itemId: "I00003",
    userId: "U93257",
    fixerId: "U33456",
    name: "airplain turbine",
    tags: ["airplain", "turbine"],
    description: "Pelikaani lensi turbiiniin, turbiini meni rikki.",
    category: "vehicles",
    location: { province: "Pirkanmaa", city: "Tampere", postalcode: "33100" },
    priceRange: [2000, 4000],
    dateOfPublish: new Date("2023-10-20"),
    images: ["turbiini.jpg"],
    isFixed: true,
    interested: 1
  },
  {
    itemId: "I00004",
    userId: "U93260",
    fixerId: "none",
    name: "Rannekello",
    tags: ["kellot", "korut"],
    description: "Kellon viisari on lopettanut tikittämästä/liikkumasta.",
    category: "jewelry",
    location: { province: "Pohjois-Pohjanmaa", city: "Oulu", postalcode: "90100" },
    priceRange: [20, 40],
    dateOfPublish: new Date("2023-03-05"),
    images: ["rannekello.jpg"],
    isFixed: false,
    interested: 1
  },
  {
    itemId: "I00005",
    userId: "U69666",
    fixerId: "none",
    name: "Maalaustarvikkeet",
    tags: ["harrastus", "maalaus"],
    description: "Maalaustarvikkeita, osa siveltimistä kuluneita.",
    category: "Hobby Supplies",
    location: { province: "Varsinais-Suomi", city: "Turku", postalcode: "20100" },
    priceRange: [10, 30],
    dateOfPublish: new Date("2024-03-07"),
    images: ["pensseli.jpg"],
    isFixed: false,
    interested: 4
  }, {
    itemId: "I00006",
    userId: "U93260",
    fixerId: "none",
    name: "Polkupyörä",
    tags: ["kulkuvälineet", "pyörä"],
    description: "Polkupyörän ketju on katkennut.",
    category: "vehicle",
    location: { province: "Pohjois-Pohjanmaa", city: "Oulu", postalcode: "90100" },
    priceRange: [10, 30],
    dateOfPublish: new Date("2024-09-30"),
    images: ["polkupyora.jpg"],
    isFixed: false,
    interested: 2
  }, {
    itemId: "I00007",
    userId: "U93260",
    fixerId: "none",
    name: "Kahvinkeitin",
    tags: ["kodinkone", "elektroniikka"],
    description: "Kahvinkeitin ei käynnisty.",
    category: "electronics",
    location: { province: "Pohjois-Pohjanmaa", city: "Oulu", postalcode: "90100" },
    priceRange: [10, 20],
    dateOfPublish: "24/11/2024",
    images: ["coffeemaker.jpg"],
    isFixed: false,
    interested: 1
  }, {
    itemId: "I00008",
    userId: "U93260",
    fixerId: "none",
    name: "Sähkökitara",
    tags: ["kitara", "soitin"],
    description: "Sähkökitaran kieli on katkennut.",
    category: "instruments",
    location: { province: "Pohjois-Pohjanmaa", city: "Oulu", postalcode: "90100" },
    priceRange: [50, 100],
    dateOfPublish: "25/11/2024",
    images: ["guitar.jpg"],
    isFixed: false,
    interested: 3
  }
];

export const dummyUsers = [
  {
    userId: "U69666",
    userName: "raica",
    name: "Raikka Pulkkinen",
    phone: "0401234567",
    email: "raica@hotmail.com",
    password: "Salasana123",
    image: "userPic1.jpg",
    creationTime: "01/01/2024",
    location: { "province": "Varsinais-Suomi", "city": "Somero", "postalcode": "31400" },
    favouriteFixers: [],
    isFixer: true,
    about: "I like to fix things",
    reviewCount: 2,
    reviewAverage: 4.5,
    tags: ["electronics"],
    fixedCount: 1,
    interestedIn: ["I00001", "I04234"] //item IDs
  },
  {
    id: 1,
    name: "Ville Schulz",
    userName: "Ville",
    phone: "040-1234567",
    email: "asd@gmail.com",
    password: "V1ll3",
    about: "Olen Ville Schulz, 23-vuotias opisk",
    tags: ["electronics"],
    isFixer: true,
    location: { "province": "Varsinais-Suomi", "city": "Somero", "postalcode": "31400" }
  },
  {
    userId: "U95846",
    userName: "juuseri",
    name: "Pertti Eräreikä",
    phone: "0406664242",
    email: "pertti@hotmail.com",
    password: "Passwurd666",
    creationTime: "05/01/2024",
    location: { "province": "Uusimaa", "city": "Helsinki", "postalcode": "00100" },
    isFixer: false,
    favouriteFixers: ["U69666"]
  },
  {
    userId: "U13456",
    userName: "Miguel31",
    name: "Mika Hakkinen",
    phone: "0401554467",
    email: "miguz@gmail.com",
    password: "Salasana123",
    image: "miguel.jpeg",
    creationTime: new Date("2022-01-15"),
    location: { province: "Uusimaa", city: "Helsinki", postalcode: "00730" },
    favouriteFixers: [], //fixer IDs
    isFixer: true,
    about: "I'm  A skilled professional specializing in repairing, restoring, and maintaining furniture and musical instruments.",
    reviewCount: 2,
    reviewAverage: 4.5,
    tags: ["furniture", "instruments"],
    fixedCount: 1,
    interestedIn: ["I00001", "I04234"] //item IDs
  }
  ,
  {
    userId: "U33456",
    userName: "jacquesbergelius",
    name: "Jarkko Vuori",
    phone: "0452247261",
    email: "jarkko.vuori@metropolia.fi",
    password: "EiAinakaanSouthPark",
    image: "jarkko.png",
    creationTime: "15/11/2023",
    location: { province: "Uusimaa", city: "Helsinki", postalcode: "00710" },
    favouriteFixers: [], //fixer IDs
    isFixer: true,
    about: "I love fixing airplane turbines, it's my passion. Also I'm good at fixing electronics.",
    reviewCount: 2,
    reviewAverage: 4.5,
    tags: ["vehicles", "electronics"],
    fixedCount: 4,
    interestedIn: ["I00001", "I04234"] //item IDs
  },
  {
    userId: "U57432",
    userName: "JannuliUwU",
    name: "Janniina Kallio",
    phone: "044226145",
    email: "janniinak@gmail.com",
    password: "höpölöpö132",
    image: "janniina.jpg",
    creationTime: new Date("2022-01-15"),
    location: { province: "Varsinais-Suomi", city: "Turku", postalcode: "20100" },
    favouriteFixers: [], //fixer IDs
    isFixer: true,
    about: "27-year-old clothing designer with a passion for repairing and restoring clothing. Also have some experience with fixing hobby accessories, like tents and hiking-boots.",
    reviewCount: 1,
    reviewAverage: 4,
    tags: ["clothes", "hobby accessories"],
    fixedCount: 1,
    interestedIn: ["I00001", "I04234"] //item IDs
  },
  {
    userId: "U12257",
    userName: "Pikkukeiju",
    name: "Tiina Mänty",
    phone: "040382767",
    email: "keijukainen@gmail.com",
    password: "Keijuliina980",
    image: "keiju.jpg",
    creationTime: new Date("2022-01-15"),
    location: { province: "Uusimaa", city: "Helsinki", postalcode: "00740" },
    favouriteFixers: ["U57432"], //fixer IDs
    isFixer: false
  },
  {
    userId: "U93257",
    userName: "Makkulihakkuli",
    name: "Marko Haukka",
    phone: "050341699",
    email: "isomarko@gmail.com",
    password: "vasarajanaul0ja",
    image: "haukka.jpg",
    creationTime: new Date("2022-01-15"),
    location: { province: "Uusimaa", city: "Helsinki", postalcode: "00790" },
    favouriteFixers: ["U33456"], //fixer IDs
    isFixer: false
  },
  {
    userId: "U93260",
    userName: "Lalaina",
    name: "Laura Laine",
    phone: "0459876543",
    email: "laura.laine@gmail.com",
    password: "quickfixpass789",
    image: "lalala.jpg",
    creationTime: new Date("2022-01-15"),
    location: { province: "Pohjois-Pohjanmaa", city: "Oulu", postalcode: "90100" },
    favouriteFixers: ["U69666"], //fixer IDs
    isFixer: false
  },
  {
    userId: "U93261",
    userName: "WatchLover",
    name: "Kalle Kello",
    phone: "0401234569",
    email: "kalle.kello@gmail.com",
    password: "watchpassword123",
    image: "kellokalle.jpg",
    creationTime: new Date("2022-01-15"),
    location: { province: "Pohjois-Pohjanmaa", city: "Oulu", postalcode: "90100" },
    favouriteFixers: [],
    isFixer: false
  },
  {
    userId: "U93262",
    userName: "ArtFan",
    name: "Anna Taiteilija",
    phone: "0509876543",
    email: "anna.taiteilija@gmail.com",
    password: "artpassword456",
    image: "artsygirl.jpg",
    creationTime: new Date("2022-01-15"),
    location: { province: "Varsinais-Suomi", city: "Turku", postalcode: "20100" },
    favouriteFixers: [],
    isFixer: false
  }
]

export const dummyReviews = [
  {
    reviewId: "R95739", // tää oli testireview, ei johda tuotteeseen
    userId: "U95846",
    fixerId: "U69666",
    itemId: "I00006",
    score: 4,
    message: "Good work pölöplöplöplöö. Juupajuu, hehheh.",
    date: "27/6/2024"
  },
  {
    reviewId: "R15223",
    userId: "U69666",
    fixerId: "U13456",
    itemId: "I00001",
    score: 1,
    message: "Horrible experience, would not recommend!",
    date: "15/11/2023",
    images: [
      "image1.jpg"
    ]
  },
  {
    reviewId: "R26623",
    userId: "U93257",
    fixerId: "U33456",
    itemId: "I00008",
    score: 5,
    message: "Excellent service, highly recommended!",
    date: "15/11/2023",
    images: [
      "image1.jpg"
    ]
  },
  {
    reviewId: "R13892",
    userId: "U93257",
    fixerId: "U57432",
    itemId: "I00001",
    score: 4,
    message: "Good service but could improve communication.",
    date: "15/11/2023",
    images: []
  },
  {
    reviewId: "R15823",
    userId: "U12257",
    fixerId: "U13456",
    itemId: "I00001",
    score: 1,
    message: "Horrible experience, would not recommend!",
    date: "15/11/2023",
    images: []
  },
  {
    reviewId: "R15923",
    userId: "U93262",
    fixerId: "U13456",
    itemId: "I00008",
    score: 5,
    message: "Did a great job on fixing my item",
    date: "15/11/2023",
    images: []
  }
];
