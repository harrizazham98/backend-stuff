var express = require('express');
var router = express.Router();

var manufacturers = [
  {
  id: 1,
  name: "Lego",
  imageUrl: "/images/manu_1.jpeg",
  shopUrl: "https://shopee.com.my/legoshopmy",
  description : "Shop all LEGO items via Shopee"
  },
  {
  id: 2,
  name: "Disney",
  imageUrl: "/images/manu_2.JPG",
  shopUrl: "https://shopee.com.my/disney.os",
  description: "Shop all Disney items via Shopee"
  },
  ];


  

  var products = [
  {
  id: 1,
  name: "LEGO Technic Formula E Porsche 99X Electric 42137 Model Building Kit (422 Pieces) Building Blocks Construction Toys",
  price: 175.92,
  imageUrl: "/images/product_1.PNG",
  description: "Discover a top gift for Formula E® racing and Porsche fans aged 9+ with this fast-paced LEGO® Technic™ Formula E® Porsche 99X Electric (42137) pull-back race car toy. Kids enjoy an immersive build, crafting all the details of the Porsche race car, then recreate all the action of a real race day using the 2 pull-back motors and LEGO Technic AR app. Bring the race to life Using augmented reality, the app lets kids immerse themselves in the role of a top Porsche Formula E driver. They’ll choose which circuit to race on, make decisions about energy management and use their skills to work their way up in the race. Using the 2 pull-back motors, kids will decide how much to charge the car’s energy before pushing the trigger to see the car race along the AR track right in front of them! A great introduction to engineering LEGO Technic building sets feature realistic movement and mechanisms that introduce LEGO builders to the universe of engineering in an approachable and realistic way.",
  manufacturerId: 1,
  },
  {
  id: 2,
  name: "LEGO DUPLO Classic Deluxe Brick Box 10914 Building Toy (85 Pieces) Building Toys For Toddlers Construction Toys Kids Toy",
  price: 199.92,
  imageUrl: "/images/product_2.PNG",
  description: "Ignite toddlers’ curiosity with hands-on, playful learning. There are fun shapes and LEGO® bricks in a cool range of colors. There’s a car, windows, flowers, balloons, gifts and a cake to inspire imaginations – and there are bricks labelled 1 to 5 for number play. Introducing your toddler to creative building and the developmental benefits it brings is easy. Just pick a brick and go!",
  manufacturerId: 1,
  },
  {
  id: 3,
  name: "LEGO DUPLO Wild Animals of the World 10975 Building Toy (142 Pieces) Building Toys For Toddlers Construction Toys",
  price: 479.92,
  imageUrl: "/images/product_3.PNG",
  description: "LEGO® DUPLO® Wild Animals of the World (10975) is packed with animals in their natural habitats, filled with authentic details and bursting with opportunities for kids aged 2+ to play and learn. A world of wildlife to build and explore Take your preschool-age kid on a wildlife tour of the world, stopping off at all 7 continents! They’ll discover pandas in Asia, lions in Africa, deer in Europe, an alpaca in South America, a bear in North America, a koala in Australia, penguins in the Antarctic… and lots more! With a sound brick to play animal and ambient noises, and a foldable playmat map of the world, it’s a wild and wonderful gift for nature-loving kids. Playful learning for toddlers All LEGO DUPLO sets are expertly designed with fun narratives, bright colours, diverse characters and lots of details to give your little learner a BIG start in life.",
  manufacturerId: 1,
  },
  {
    id:4,
    name: "Funko Pop! Disney Pixar Toy Story 4 - Jessie",
price: 85.90,
imageUrl: "/images/product_4.PNG",
description: "Can't get enough of your favourite FUNKO POP! Disney Pixar Toy Story 4 characters? Now you can collect them all! Decorate your space with this FUNKO POP! Disney Pixar Toy Story 4. It is stylized POP vinyl from Funko! Figure stands 3.75 inches and comes in a window display box. This high quality vinyl material FUNKO POP! Disney Pixar Toy Story 4 which is perfect for any Disney Pixar Toy Story 4 fan and collector! So What are you waiting for, collect and display all cool new FUNKO POP! Disney Pixar Toy Story 4.",
manufacturerId: 2,
},
{
id: 5,
name:"Disney Pixar Toy Story 4 Water Bottle Holder - Multicolour",
price: 55.90,
imageUrl: "/images/product_5.JPG",
description: "Can't get enough of your favourite Toy Story characters? Now you can bring them along to school! This Toy Story Water Bottle Holder is nice and able to fits most bottle size. It's great for school, camp and outdoor activities. The high quality of light weight polyester material make this water bottle holder more child friendly. The water resistant material coating will ensure its durability and toughness for everyday use. Don't be stress if the water bottle holder gets all dirty and filthy, simply hand wash the bag and let it dry under the hot sunny sunshine.",
manufacturerId: 2,
},
];


/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect(302, "products");
});
/* GET products listing page. */
router.get("/products", function (req, res, next) {
res.render("products", {
title: "Product Listing",
description: "This page shows a list of products.",
products: products,
});
});
/* GET product page. */
  router.get("/products/:id", function (req, res, next) {
// Fill in the code: get the parameter
var requestedId = req.params["id"];
// console.log("Check",requestedId);


// Get the requested product from the product list
var requestedProduct = products.filter(function (product) {
return product.id == requestedId;
});

// console.log(requestedProduct[0]);
// Check if the requested product id exist
if (requestedProduct.length > 0) {
res.render("product", {
title: requestedProduct[0].name,
product: requestedProduct[0],
description: requestedProduct[0].description,
imageUrl: requestedProduct[0].imageUrl,
});
} else {
// 404 Product not found
res.status(404).send("Product not found");
}
});



/* GET manufacturer listing page. */
router.get("/manufacturers", function (req, res, next) {
  res.render("manufacturers", {
  title: "Manufacturer Page",
  description: "This page shows a list of manufacturers.",
  manufacturers: manufacturers
  });
  });
  



  /* GET manufacturer page. */
  router.get("/manufacturers/:id", function (req, res, next) {
// Fill in the code: get the parameter
var requestedId =req.params["id"];
// Get the requested product from the product list
var requestedProducts = manufacturers.filter(function (manufacturer) {
return manufacturer.id == requestedId;
});
console.log(requestedProducts[0]);
// Check if the requested product id exist
res.render("manufacturer", {
title: requestedProducts[0].name,
products: requestedProducts,
description: "This page shows a list of products from this manufacturer.",
imageUrl: requestedProducts[0].imageUrl,
shopUrl: requestedProducts[0].shopUrl,
description: requestedProducts[0].description
});
});




    


  
module.exports = router;
