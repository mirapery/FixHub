

export const dummyReview = {
    "R15823" : {
      "reviewId": "R15823",
      "userId": "U55432",
      "fixerId": "U13456",
      "itemId": "I00001",
      "score": 1,
      "message": "Horrible experience, would not recommend!",
      "date": "15/11/2023",
      "images": [
        "image6.jpg",
        "image7.jpg",
        "image8.jpg"
      ]
    },
    "R26623" : {
      "reviewId": "R26623",
      "userId": "U12345",
      "fixerId": "U67890",
      "itemId": "I21223",
      "score": 5,
      "message": "Excellent service, highly recommended!",
      "date": "15/11/2023",
      "images": [
        "image1.jpg",
        "image2.jpg"
      ]
    },
    "R13892": {
      "reviewId": "R13892",
      "userId": "U55432",
      "fixerId": "U13456",
      "itemId": "I00001",
      "score": 4,
      "message": "Good service but could improve communication.",
      "date": "15/11/2023",
      "images": [
        "image6.jpg",
        "image7.jpg",
        "image8.jpg"
      ]
    },
    "R15823": {
      "reviewId": "R15823",
      "userId": "U55432",
      "fixerId": "U13456",
      "itemId": "I00001",
      "score": 1,
      "message": "Horrible experience, would not recommend!",
      "date": "15/11/2023",
      "images": [
        "image6.jpg",
        "image7.jpg",
        "image8.jpg"
      ]
    },
    "R15823": {
      "reviewId": "R15823",
      "userId": "U55432",
      "fixerId": "U13456",
      "itemId": "I00001",
      "score": 5,
      "message": "Did a great job on fixing my item",
      "date": "15/11/2023",
      "images": []
    }
  };

export const dummyItem = {
  "I00001": {
    "itemId": "I00001",
    "userId": 27,
    "fixerId": "none",
    "name": "Kenkä",
    "tags": [],
    "description": "Reikä on juu.",
    "category": "Clothing",
    "location": {"provinence":"Uusimaa", "city": "Helsinki", "postalcode" : "00790"},
    "priceRange": [5, 10], //start and finish
    "dateOfPublish": "13/11/2024",
    "images": ["kenkä.jpg", "kenkä2.jpg"],
    "isFixed": false,
    "interested": 5
  },
};

export const dummyUser = {
  "U13456": {
    "userId": "U13456",
    "userName": "Miguel",
    "name": "Mika Hakkinen",
    "phone": "0401554467",
    "email": "miguz@gmail.com",
    "password": "Salasana123",
    "image": "profpic.jpg",
    "creationTime": "15/11/2023",
    "location": {"provinence":"Uusimaa", "city": "Helsinki", "postalcode" : "00790"},
    "favouriteFixers": [], //fixer IDs
    "isFixer": true,
    "about": "I'm good at fixing things",
    "reviewCount": 2,
    "reviewAverage": 4.5,
    "tags": ["cars", "electronics"],
    "fixedCount": 1,
    "interestedIn": ["I00001", "I04234"] //item IDs
  },
  "U12257": {
    "userId": "U12257",
    "userName": "Pikkukeiju",
    "name": "Tiina Mänty",
    "phone": "040382767",
    "email": "keijukainen@gmail.com",
    "password": "Keijuliina980",
    "image": "profpic2.jpg",
    "creationTime": "15/11/2023",
    "location": {"provinence":"Uusimaa", "city": "Helsinki", "postalcode" : "00790"},
    "favouriteFixers": ["U13456"], //fixer IDs
    "isFixer": false
  }
};
