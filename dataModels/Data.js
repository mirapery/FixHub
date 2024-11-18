

export const dummyReview = [
    {
      reviewId: "R15823",
      user_id: "U55432",
      fixer_id: "F13456",
      item_id: "I00001",
      score: 1,
      message: "Horrible experience, would not recommend!",
      date: "2023-11-15",
      images: [
        "image6.jpg",
        "image7.jpg",
        "image8.jpg"
      ]
    }
  ];

export const dummyItem = [
  {
    id: 1,
    userId: 27,
    fixerId: "none",
    name: "Kenkä",
    tags: [],
    description: "Reikä on juu.",
    category: "Clothing",
    location: "Uusimaa, Helsinki, 00790",
    priceRange: [5, 10], //start and finish
    date_publish: "13/11/2024",
    images: ["kenkä.jpg", "kenkä2.jpg"],
    isFixed: false,
    interested: 5
  },
]

export const dummyFixer = [
  {
    id: "F13456",
    userName: "Miguel",
    name: "Mika Hakkinen",
    phone: "0401554467",
    email: "miguz@gmail.com",
    password: "Salasana123",
    image: "profpic.jpg",
    creationTime: "01/03/2022",
    location: "00740, Helsinki, Uusimaa",
    isFixer: true,
    about: "I'm good at fixing things",
    reviewCount: 2,
    reviewAverage: 4.5,
    tags: ["cars", "electronics"],
    fixedCount: 1,
    interestedIn: ["I00001", "I04234"] //item IDs
  }
]

export const dummyUser = [
  {
    id: "U12257",
    userName: "Pikkukeiju",
    name: "Tiina Mänty",
    phone: "040382767",
    email: "keijukainen@gmail.com",
    password: "Keijuliina980",
    image: "profpic2.jpg",
    creationTime: "03/03/2024",
    location: "00750, Helsinki, Uusimaa",
    isFixer: false,
    favouriteFixers: ["F13456"] //fixer IDs
  }
]