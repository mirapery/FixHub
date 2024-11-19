export const pageLinks = [
  { id: 1, href: "/", text: "Home" },
  { id: 2, href: "about", text: "About" },
  // { id: 3, href: "new item", text: "New Item" },
  { id: 4, href: "search", text: "Search" },
  { id: 5, href: "login", text: "Login" },
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
    header: "Kuka omistaa FixLinkin?",
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
    dateOfPublish: "13/11/2024",
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
    dateOfPublish: "20/11/2024",
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
    dateOfPublish: "21/11/2024",
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
    dateOfPublish: "22/11/2024",
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
    dateOfPublish: "22/11/2024",
    images: ["pensseli.jpg"],
    isFixed: false,
    interested: 4
  },
];

// export const dummyFixer = [
//   {
//     "userId": "U69666",
//     "userName": "raica",
//     "name": "Raikka Pulkkinen",
//     "phone": "0401234567",
//     "email": "raica@hotmail.com",
//     "password": "Salasana123",
//     "image": "userPic1.jpg",
//     "creationTime": "01/01/2024",
//     "location": {"province": "Varsinais-Suomi", "city": "Somero", "postalcode" : "31400"},
//     "favouriteFixers": [],
//     "isFixer": true,
//     "about": "I like to fix things",
//     "reviewCount": 2,
//     "reviewAverage": 4.5,
//     "tags": ["cars", "electronics"],
//     "fixedCount": 1,
//     "interestedIn": ["I00001", "I04234"] //item IDs
//   },
// ];

export const dummyUsers = [
  {
    "userId": "U69666",
    "userName": "raica",
    "name": "Raikka Pulkkinen",
    "phone": "0401234567",
    "email": "raica@hotmail.com",
    "password": "Salasana123",
    "image": "userPic1.jpg",
    "creationTime": "01/01/2024",
    "location": { "province": "Varsinais-Suomi", "city": "Somero", "postalcode": "31400" },
    "favouriteFixers": [],
    "isFixer": true,
    "about": "I like to fix things",
    "reviewCount": 2,
    "reviewAverage": 4.5,
    "tags": ["cars", "electronics"],
    "fixedCount": 1,
    "interestedIn": ["I00001", "I04234"] //item IDs
  },
  {
    "userId": "U95846",
    "userName": "juuseri",
    "name": "Pertti Eräreikä",
    "phone": "0406664242",
    "email": "pertti@hotmail.com",
    "password": "Passwurd666",
    "creationTime": "05/01/2024",
    "location": { "province": "Uusimaa", "city": "Helsinki", "postalcode": "00100" },
    "isFixer": false,
    "favouriteFixers": ["U69666"]
  },
  {
    userId: "U13456",
    userName: "Miguel31",
    name: "Mika Hakkinen",
    phone: "0401554467",
    email: "miguz@gmail.com",
    password: "Salasana123",
    image: "miguel.jpeg",
    creationTime: "15/11/2023",
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
    image: "jarkko.jpg",
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
    creationTime: "1/11/2023",
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
    creationTime: "15/11/2023",
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
    creationTime: "15/11/2023",
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
    creationTime: "18/11/2023",
    location: { province: "Pohjois-Pohjanmaa", city: "Oulu", postalcode: "90100" },
    favouriteFixers: ["U69666"], //fixer IDs
    isFixer: false
  },
  {
    userId: "U93261",
    userName: "WatchLover",
    name: "Kalle Kello",
    phone: "0401234567",
    email: "kalle.kello@gmail.com",
    password: "watchpassword123",
    image: "kellokalle.jpg",
    creationTime: "19/11/2023",
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
    creationTime: "20/11/2023",
    location: { province: "Varsinais-Suomi", city: "Turku", postalcode: "20100" },
    favouriteFixers: [],
    isFixer: false
  }
]

export const dummyReviews = [
  {
    "reviewId": "R95739",
    "userId": "U95846",
    "fixerId": "U69666",
    "itemId": "I93872",
    "score": 4,
    "message": "Good work pölöplöplöplöö. Juupajuu, hehheh.",
    "date": "27/6/2024"
  },
];





export const inventory = [
  {
    id: 1,
    userId: 2,
    name: "Kenkä",
    description: "Reikä on juu.",
    category: "Clothing",
    location: "Uusimaa, Helsinki, 00790",
    priceRange: "3e-5e",
    date_publish: "13/11/2024",
    images: ["kenkä.jpg", "kenkä2.jpg"],
    isFixed: "false",
    fixerId: "none",
  }, {
    id: 2,
    userId: 2,
    name: "Kitara",
    description: "Reikä on juu.",
    category: "Clothing",
    location: "Uusimaa, Helsinki, 00790",
    priceRange: "3e-5e",
    date_publish: "13/11/2024",
    images: ["kenkä.jpg", "kenkä2.jpg"],
    isFixed: "false",
    fixerId: "none",
  },
  {
    id: 3,
    userId: 2,
    name: "Pallo",
    description: "Reikä on juu.",
    category: "Clothing",
    location: "Uusimaa, Helsinki, 00790",
    priceRange: "3e-5e",
    date_publish: "13/11/2024",
    images: ["kenkä.jpg", "kenkä2.jpg"],
    isFixed: "false",
    fixerId: "none",
  }, {
    id: 4,
    userId: 2,
    name: "Kenkä",
    description: "Reikä on juu.",
    category: "Clothing",
    location: "Uusimaa, Helsinki, 00790",
    priceRange: "3e-5e",
    date_publish: "13/11/2024",
    images: ["kenkä.jpg", "kenkä2.jpg"],
    isFixed: "false",
    fixerId: "none",
  }, {
    id: 5,
    userId: 2,
    name: "Sukka",
    description: "Reikä on juu.",
    category: "Clothing",
    location: "Uusimaa, Helsinki, 00790",
    priceRange: "3e-5e",
    date_publish: "13/11/2024",
    images: ["kenkä.jpg", "kenkä2.jpg"],
    isFixed: "false",
    fixerId: "none",
  },



]