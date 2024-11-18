
export const pageLinks = [
  { id: 1, href: "/", text: "Home" },
  { id: 2, href: "about", text: "About" },
  // { id: 3, href: "new item", text: "New Item" },
  { id: 4, href: "searchPage", text: "Search" },
  { id: 5, href: "login", text: "Login" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.instagram.com", icon: "fab fa-instagram" },
  { id: 3, href: "https://www.tiktok.com/", icon: "fab fa-tiktok" },
];


export const categoryLinks =[
  { id: 1, href: "hobby accesories", text: "Hobby accessories",icon:"fa-solid fa-table-tennis-paddle-ball scale-150" },
  { id: 2, href: "clothes", text: "Clothes",icon:"fa-solid fa-tshirt scale-150" },
  { id: 3, href: "furniture", text: "Furniture",icon:"fa-solid fa-couch scale-150" },
  { id: 4, href: "electronics", text: "Electronics",icon:"fa-solid fa-tv scale-150" },
  { id: 5, href: "vehicles", text: "Vehicles" ,icon:"fa-solid fa-car scale-150"},
  { id: 6, href: "instruments", text: "Instruments",icon:"fa-solid fa-guitar scale-150" },
]

// dummy itemi


export const dummyItem = [

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
    fixerId: "none"

  },
]

export const dummyFixer = [

  {
    id: 1,
    userName: "raica",
    name: "Raikka Pulkkinen",
    phone: "0401234567",
    email: "raica@hotmail.com",
    password: "Salasana123",
    image: "userPic1.jpg",
    creationTime: "01/01/2024",
    location: "31400, Somero, Varsinais-Suomi",
    isFixer: "true",
    about: "I like to fix things",
    reviewCount: 2,
    reviewAverage: 4.5,
    tags: ["cars", "electronics"],
    fixedCount: 0
  }
]

export const dummyUsers = [
  {
    id: 1,
    userName: "raica",
    name: "Raikka Pulkkinen",
    phone: "0401234567",
    email: "raica@hotmail.com",
    password: "Salasana123",
    image: "userPic1.jpg",
    creationTime: "01/01/2024",
    location: "31400, Somero, Varsinais-Suomi",
    isFixer: true,
    about: "I like to fix things",
    reviewCount: 2,
    reviewAverage: 4.5,
    tags: ["cars", "electronics"],
    fixedCount: 0
  },
  {
    id: 2,
    userName: "juuseri",
    name: "Pertti Eräreikä",
    phone: "0406664242",
    email: "pertti@hotmail.com",
    password: "Passwurd666",
    creationTime: "05/01/2024",
    location: "00100, Helsinki, Uusimaa",
    isFixer: false,
  }
]

export const dummyReview = [
  {
    id: 1,
    fixerId: 1,
    reviewerId: 2,
    rating: 4,
    body: "Good work pölöplöplöplöö. Juupajuu, hehheh."
  }
]

