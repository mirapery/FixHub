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
  },{
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

export const dummyItem = [
{
    "itemId": "I93872",
    "userId": "U95846",
    "fixerId":"U69666",
    "name": "Kenkä",
    "tags": [],
    "description": "Reikä on juu.",
    "category": "Clothing",
    "location": {"province":"Uusimaa", "city": "Helsinki", "postalcode" : "00790"},
    "priceRange": [5, 10],
    "dateOfPublish": "13/11/2024",
    "images": ["kenkä.jpg", "kenkä2.jpg"],
    "isFixed": false,
    "interested": 5
  },
];

export const dummyFixer = [
  {
    "userId": "U69666",
    "userName": "raica",
    "name": "Raikka Pulkkinen",
    "phone": "0401234567",
    "email": "raica@hotmail.com",
    "password": "Salasana123",
    "image": "userPic1.jpg",
    "creationTime": "01/01/2024",
    "location": {"province": "Varsinais-Suomi", "city": "Somero", "postalcode" : "31400"},
    "favouriteFixers": [],
    "isFixer": true,
    "about": "I like to fix things",
    "reviewCount": 2,
    "reviewAverage": 4.5,
    "tags": ["cars", "electronics"],
    "fixedCount": 1,
    "interestedIn": ["I00001", "I04234"] //item IDs
  },
];

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
    "location": {"province": "Varsinais-Suomi", "city": "Somero", "postalcode" : "31400"},
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
    "location": {"province": "Uusimaa", "city": "Helsinki", "postalcode" : "00100"},
    "isFixer": false,
    "favouriteFixers": ["U69666"]
  }
]

export const dummyReview = [
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


export const inventory =[
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