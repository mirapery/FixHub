

export const dummyReviews = [
    {
      reviewId: "R15823",
      userId: "U55432",
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
      userId: "U12345",
      fixerId: "U67890",
      itemId: "I21223",
      score: 5,
      message: "Excellent service, highly recommended!",
      date: "15/11/2023",
      images: [
        "image1.jpg"
      ]
    },
    {
      reviewId: "R13892",
      userId: "U55432",
      fixerId: "U13456",
      itemId: "I00001",
      score: 4,
      message: "Good service but could improve communication.",
      date: "15/11/2023",
      images: []
    },
    {
      reviewId: "R15823",
      userId: "U55432",
      fixerId: "U13456",
      itemId: "I00001",
      score: 1,
      message: "Horrible experience, would not recommend!",
      date: "15/11/2023",
      images: []
    },
    {
      reviewId: "R15823",
      userId: "U55432",
      fixerId: "U13456",
      itemId: "I00001",
      score: 5,
      message: "Did a great job on fixing my item",
      date: "15/11/2023",
      images: []
    }
];

export const dummyItems = [
  {
    itemId: "I00001",
    userId: "U55432",
    fixerId: "U57432",
    name: "Kenkä",
    tags: [],
    description: "Reikä on juu.",
    category: "Clothing",
    location: {province:"Uusimaa", city: "Helsinki", postalcode : "00790"},
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
    location: {province: "Uusimaa", city: "Espoo", postalcode: "02100"},
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
    location: {province: "Pirkanmaa", city: "Tampere", postalcode: "33100"},
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
    location: {province: "Pohjois-Pohjanmaa", city: "Oulu", postalcode: "90100"},
    priceRange: [20, 40],
    dateOfPublish: "22/11/2024",
    images: ["rannekello.jpg"],
    isFixed: false,
    interested: 1
  },
  {
    itemId: "I00005",
    userId: "U93259",
    fixerId: "none",
    name: "Maalaustarvikkeet",
    tags: ["harrastus", "maalaus"],
    description: "Maalaustarvikkeita, osa siveltimistä kuluneita.",
    category: "Hobby Supplies",
    location: {province: "Varsinais-Suomi", city: "Turku", postalcode: "20100"},
    priceRange: [10, 30],
    dateOfPublish: "22/11/2024",
    images: ["pensseli.jpg"],
    isFixed: false,
    interested: 4
  }
];

export const dummyUsers = [
  {
    userId: "U13456",
    userName: "Miguel31",
    name: "Mika Hakkinen",
    phone: "0401554467",
    email: "miguz@gmail.com",
    password: "Salasana123",
    image: "miguel.jpeg",
    creationTime: "15/11/2023",
    location: {province:"Uusimaa", city: "Helsinki", postalcode : "00730"},
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
  location: {province:"Uusimaa", city: "Helsinki", postalcode : "00710"},
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
  location: {province: "Varsinais-Suomi", city: "Turku", postalcode: "20100"},
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
    location: {province :"Uusimaa", city : "Helsinki", postalcode : "00740"},
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
    location: {province :"Uusimaa", city : "Helsinki", postalcode : "00790"},
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
    location: {province: "Pohjois-Pohjanmaa", city: "Oulu", postalcode: "90100"},
    favouriteFixers: ["U93259"], //fixer IDs
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
  location: {province: "Pohjois-Pohjanmaa", city: "Oulu", postalcode: "90100"},
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
  location: {province: "Varsinais-Suomi", city: "Turku", postalcode: "20100"},
  favouriteFixers: [],
  isFixer: false
}
];
