const products = [
  {
    "id": 1,
    "catId": 1,
    "subCatId": 1,
    "name": "Apple",
    "price": 100,
    "image": "apple.jpg",
    "desc": "Fresh and delicious apples, handpicked for quality, perfect for a healthy snack or your favorite recipes. Order now and enjoy the natural goodness!"
  },
  {
    "id": 2,
    "catId": 1,
    "subCatId": 1,
    "name": "Orange",
    "price": 70,
    "image": "orange.webp",
    "desc": "Juicy and vibrant oranges, bursting with vitamin C and refreshing flavor. Perfect for a healthy boost!"
  },
  {
    "id": 3,
    "catId": 1,
    "subCatId": 1,
    "name": "Strawberry",
    "price": 400,
    "image": "strawberry.jpg",
    "desc": "Sweet and succulent strawberries, packed with flavor and freshness. A perfect treat for any occasion!"
  },
  {
    "id": 4,
    "catId": 1,
    "subCatId": 1,
    "name": "Kiwi",
    "price": 80,
    "image": "kiwi.webp",
    "desc": "angy and refreshing kiwis, loaded with nutrients and a burst of exotic flavor. Perfect for a healthy bite!"
  },
  {
    "id": 5,
    "catId": 1,
    "subCatId": 2,
    "name": "Capsicum",
    "price": 80,
    "image": "capsicum.jpg",
    "desc": ""
  },
  {
    "id": 6,
    "catId": 1,
    "subCatId": 2,
    "name": "Cauliflower",
    "price": 60,
    "image": "cauliflower.webp",
    "desc": "Cauliflower is a hearty vegetable often roasted with olive oil and paprika or blended into creamy soups. It's also great with a dash of cheese and breadcrumbs for a baked gratin."
  },
  {
    "id": 7,
    "catId": 1,
    "subCatId": 2,
    "name": "Spinach",
    "price": 40,
    "image": "spinach.jpg",
    "desc": "Spinach is a leafy green packed with nutrients, perfect for salads, smoothies, or sautés. Combine it with garlic, olive oil, and a pinch of salt for a quick, healthy side dish or add it to soups and pasta for extra flavor."
  },
  {
    "id": 8,
    "catId": 1,
    "subCatId": 2,
    "name": "Potato",
    "price": 40,
    "image": "potato.jpg",
    "desc": "Potatoes are a versatile staple, ideal for making crispy fries, creamy mashed potatoes, hearty stews, or baked dishes. They pair well with ingredients like butter, garlic, rosemary, and cheese for endless culinary possibilities."
  },
  {
    "id": 9,
    "catId": 1,
    "subCatId": 2,
    "name": "BeetRoot",
    "price": 40,
    "image": "beetroot.webp",
    "desc": "Beetroot is a nutrient-rich vegetable known for its vibrant red color and earthy sweetness, often enjoyed in salads, juices, and as a healthy side dish. Packed with antioxidants and vitamins, it's a versatile choice for boosting overall health."
  },
  {
    "id": 10,
    "catId": 1,
    "subCatId": 3,
    "name": "Avacado",
    "price": 425,
    "image": "avacado.jpeg",
    "desc": "Avocado is a creamy fruit, perfect for making guacamole with lime, salt, and chili or spreading on toast with a sprinkle of black pepper. It also blends seamlessly into smoothies or salads for a rich, buttery texture."
  },
  {
    "id": 11,
    "catId": 1,
    "subCatId": 3,
    "name": "Blueberry",
    "price": 975,
    "image": "blueberry.jpg",
    "desc": "Blueberries are sweet and tangy berries, perfect for baking into muffins or pancakes. They pair wonderfully with yogurt, honey, and granola for a refreshing breakfast or snack."
  },
  {
    "id": 12,
    "catId": 2,
    "subCatId": 4,
    "name": "Tasties Bread",
    "price": 40,
    "image": "tasties_bread.webp",
    "desc": "Fresh and soft bread, ideal for making sandwiches, toast, or enjoying with butter and jam. Each 400 gm loaf is priced at just ₹40, offering great value for everyday meals."
  },
  {
    "id": 13,
    "catId": 2,
    "subCatId": 4,
    "name": "Whole Wheat atta bread",
    "price": 40,
    "image": "bread2.jpg",
    "desc": "Fresho Whole Wheat Atta Bread is a healthy and wholesome option, perfect for sandwiches or toast. Made from 100% whole wheat, it’s soft, nutritious, and available at ₹70 for a 400 gm pack."
  },
  {
    "id": 14,
    "catId": 2,
    "subCatId": 4,
    "name": "English Oven Burger Bun",
    "price": 45,
    "image": "burgerBUn.webp",
    "desc": "English Oven Burger Buns are soft, light, and perfectly sized for your favorite burger patties. A 300 gm pack is available for ₹45, offering a great balance of taste and texture for your meals."
  },
  {
    "id": 15,
    "catId": 2,
    "subCatId": 5,
    "name": "Muffin/Cup Cake - Choco Chip",
    "price": 149,
    "image": "cake1.jpg",
    "desc": "Fresho! Signature Muffin/Cup Cake in Choco Chip flavor offers a deliciously moist and indulgent treat, filled with rich chocolate chips. A 200 g pack (set of 4) is available for ₹149, perfect for satisfying your sweet cravings."
  },
  {
    "id": 16,
    "catId": 2,
    "subCatId": 5,
    "name": "Brownie Cottage Gooey Brownie",
    "price": 149,
    "image": "cake2.jpg",
    "desc": "Brownie Cottage Gooey Brownie is a decadent treat made with less than 5% maida, freshly baked to perfection with pure hot fudge. This 200 g indulgence is priced at ₹400, offering a rich, melt-in-your-mouth experience with every bite."
  },
  {
    "id": 17,
    "catId": 2,
    "subCatId": 5,
    "name": "Winkies Swiss Roll Cake - Chocolate",
    "price": 165,
    "image": "cake3.jpg",
    "desc": "Winkies Swiss Roll Cake in Chocolate flavor is a soft, sponge cake filled with creamy chocolate filling, offering a delightful treat for any time of the day. A 165 g pack is available for ₹90, making it a perfect, affordable indulgence."
  },
  {
    "id": 18,
    "catId": 2,
    "subCatId": 6,
    "name": "Amul Taaza Homogenised Toned Milk",
    "price": 430,
    "image": "dairy1.webp",
    "desc": "Amul Taaza Homogenised Toned Milk comes in a convenient 6x1 L multipack, offering fresh, creamy milk with every pour. Priced at ₹430, it’s a great value for daily consumption, ensuring quality and taste in every glass."
  },
  {
    "id": 19,
    "catId": 3,
    "subCatId": 8,
    "name": "Sky One piece",
    "price": 1800,
    "image": "dress1.webp",
    "desc": "This elegant sky blue one-piece dress offers a perfect blend of style and comfort. Priced at ₹1800, it’s a chic and versatile addition to any wardrobe, ideal for casual outings or special occasion"
  },
  {
    "id": 20,
    "catId": 3,
    "subCatId": 8,
    "name": "Blue jeans Straight fit",
    "price": 2300,
    "image": "jeans1.webp",
    "desc": "Blue Jeans Straight Fit offers a timeless, comfortable design with a perfect fit, ideal for everyday wear. Priced at ₹2300, it combines style and durability for a versatile addition to your wardrobe"
  },
  {
    "id": 21,
    "catId": 3,
    "subCatId": 8,
    "name": "Comfy warm slim jacket",
    "price": 2100,
    "image": "jacket2.webp",
    "desc": "The Comfy Warm Slim Jacket is designed for both style and comfort, offering a snug fit while keeping you warm in cooler weather. Priced at ₹2100, it combines fashion with functionality for a perfect winter wardrobe addition."
  },
  {
    "id": 22,
    "catId": 3,
    "subCatId": 8,
    "name": "Swetshirt",
    "price": 1800,
    "image": "swet1.webp",
    "desc": "The Sweatshirt is a cozy and stylish piece, perfect for layering during colder months. Priced at ₹1800, it offers both comfort and warmth, making it a great addition to your casual wardrobe."
  },
  {
    "id": 23,
    "catId": 3,
    "subCatId": 8,
    "name": "Multi colour Shirt",
    "price": 1200,
    "image": "shirt1.jpg",
    "desc": "The Multi-Colour Shirt features a vibrant blend of colors, adding a lively touch to your wardrobe. Priced at ₹1200, it’s a versatile piece, perfect for both casual and semi-formal occasions."
  },
  {
    "id": 24,
    "catId": 3,
    "subCatId": 8,
    "name": "Purple Swetshirt",
    "price": 1700,
    "image": "swet2.webp",
    "desc": "Purple Sweatshirt is a stylish and comfortable option, perfect for casual outings or lounging. Priced at ₹1700, it offers a cozy fit and a bold color, adding a pop of style to your wardrobe."
  },
  {
    "id": 25,
    "catId": 3,
    "subCatId": 8,
    "name": "Stripped Swetshirt",
    "price": 2200,
    "image": "swet4.webp",
    "desc": "Black Stripped Swetshirt is a stylish and comfortable option, perfect for casual outings or lounging. Priced at ₹2200, it offers a cozy fit and a bold color, adding a pop of style to your wardrobe."
  },
  {
    "id": 26,
    "catId": 3,
    "subCatId": 8,
    "name": "Light Brown Premium Trousers",
    "price": 700,
    "image": "jeans2.webp",
    "desc": "Light Brown Premium Trousers are crafted for a sophisticated look, offering a perfect balance of style and comfort. Sold by Good Tribe Private Ltd, these trousers are made in India and come with a high-quality finish."
  },
  {
    "id": 27,
    "catId": 3,
    "subCatId": 8,
    "name": "Brown Swetshirt",
    "price": 1200,
    "image": "swet5.webp",
    "desc": "Brown Swetshirt are crafted for a sophisticated look, offering a perfect balance of style and comfort. Sold by Good Tribe Private Ltd, these trousers are made in India and come with a high-quality finish."
  },
  {
    "id": 28,
    "catId": 3,
    "subCatId": 9,
    "name": "Slim Fit Easy-iron shirt",
    "price": 1500,
    "image": "shirt2.jpg",
    "desc": "Slim Fit Easy-Iron Shirt combines a sleek, modern fit with the convenience of easy-care fabric, ensuring you look sharp all day. Priced at ₹1500, it’s a versatile and low-maintenance addition to your wardrobe."
  },
  {
    "id": 29,
    "catId": 3,
    "subCatId": 9,
    "name": "Classic Hoodie",
    "price": 1299,
    "image": "hoodie1.jpg",
    "desc": "Classic Hoodie is a cozy and stylish option, perfect for casual wear or layering on cooler days. Priced at ₹1,299, it offers comfort and versatility with a timeless design."
  },
  {
    "id": 30,
    "catId": 3,
    "subCatId": 9,
    "name": "Lymio Men Cargo",
    "price": 899,
    "image": "cargo1.jpg",
    "desc": "Lymio Men Cargo Pants are made from soft cotton fabric, offering both comfort and durability. Perfect for casual outings or outdoor activities, these cargo pants combine functionality with style, providing ample storage space with multiple pockets."
  },
  {
    "id": 31,
    "catId": 3,
    "subCatId": 9,
    "name": "Blue Oversized T-shirt",
    "price": 899,
    "image": "tshirt1.webp",
    "desc": "Lymio Men Cargo Pants are made from soft cotton fabric, offering both comfort and durability. Perfect for casual outings or outdoor activities, these cargo pants combine functionality with style, providing ample storage space with multiple pockets."
  },
  {
    "id": 32,
    "catId": 4,
    "subCatId": 11,
    "name": "Les beiges Eyeshadow palette",
    "price": 6600,
    "image": "makeup1.avif",
    "desc": "Les Beiges Eyeshadow Palette offers a luxurious collection of shades, perfect for creating a range of eye-catching looks. Priced at ₹6600, it provides high-quality pigments and a smooth application for a sophisticated finish."
  },
  {
    "id": 33,
    "catId": 4,
    "subCatId": 11,
    "name": "Forever Matte Foundation",
    "price": 500,
    "image": "makeup2.webp",
    "desc": "Forever Matte Foundation provides a smooth, flawless finish with long-lasting coverage. Priced at ₹500, it offers a matte finish that controls shine while keeping your skin looking fresh throughout the day."
  },
  {
    "id": 34,
    "catId": 4,
    "subCatId": 12,
    "name": "Skeyndor Timeless Prodigy- The Luxury Elixir",
    "price": 1800,
    "image": "skincare1.webp",
    "desc": "Skeyndor Timeless Prodigy - The Luxury Elixir is a premium anti-aging concentrate designed to reduce everyday stress on your skin and revitalize it from within. Priced at ₹18,000 (inclusive of all taxes), this luxurious elixir comes in a 3 x 10ml set, offering long-lasting skin benefits. Manufactured in Spain by Skeyndor S.L.U. and imported by Ekta Cosmetics Limited, it promises high-quality skincare for a youthful glow. Best before: 30 June 2026."
  },
  {
    "id": 35,
    "catId": 4,
    "subCatId": 12,
    "name": "EverGLow Facewash + Toner + serum",
    "price": 1199,
    "image": "skincare2.webp",
    "desc": "Ever Glow Face Wash + Toner + Serum for Glowing Skin is a powerful skincare trio formulated with Vitamin C, AHA, and Hyaluronic Acid, infused with Kakadu Plum, Sugarcane, and Bearberry. This set works together to give you naturally radiant and glowing skin. Regularly priced at ₹1,699, now available at a discounted price of ₹1,199 (inclusive of all taxes). The package includes Ever Glow Foaming Face Wash (100 ml), Ever Glow Radiance Serum (30 ml), and Ever Glow Radiance Toner (100 ml)."
  },
  {
    "id": 36,
    "catId": 4,
    "subCatId": 13,
    "name": "Ceramic Vase",
    "price": 600,
    "image": "haircare1.webp",
    "desc": "Vedicderm Sensitive Scalp Bundle offers comprehensive care for sensitive scalps, addressing issues like psoriasis, dandruff, hair fall, and weak hair. The bundle includes a 200 ml shampoo and a 100 ml serum, both 100% herbal and free from SLS, parabens, and sulfates."
  },
  {
    "id": 37,
    "catId": 5,
    "subCatId": 14,
    "name": "Terracotta Vase Brown and Twisted Vol. I",
    "price": 900,
    "image": "vase1.webp",
    "desc":"Where craft meets technology! Introducing the Terracotta Vase Brown and Twisted Vol. I, a beautifully designed flower vase made with sustainable and eco-friendly materials. This elegant vase is the perfect addition to your home, combining traditional craftsmanship with modern design. Regularly priced at ₹900, it brings both style and sustainability to your décor."
  },
  {
    "id": 38,
    "catId": 5,
    "subCatId": 15,
    "name": "Loop Group Glass Full Length Rectangular Shape Mirror ",
    "price": 8889,
    "image": "mirror1.webp",
    "desc":"Loop Group Glass Full Length Rectangular Shape Mirror (110x40 cm) features a sturdy black frame, offering both style and functionality. Whether used as a free-standing or hanging mirror, it provides a full range of clear and real images, making it perfect for dressing or enhancing any space with its sleek design."
  },
  
  {
    "id": 39,
    "catId": 5,
    "subCatId": 16,
    "name": "Touch control Table Lamp",
    "price": 4579,
    "image": "lamp1.webp",
    "desc":"EDIER Dimmable Touch Control Table Lamp is a stylish and functional spiral modern bedside lamp, featuring 3 colors of LED lights. With non-polar touch adjustment, you can easily control the brightness to suit any occasion. This small black decorative lamp is perfect for adding a contemporary touch to your home or living room."
  },
  {
    "id": 40,
    "catId": 5,
    "subCatId": 17,
    "name": "The Sleep Company Luxe Motorised Recliner Sofa",
    "price": 32999,
    "image": "sofa1.jpg",
    "desc":"EDIER Dimmable Touch Control Table Lamp is a stylish and functional spiral modern bedside lamp, featuring 3 colors of LED lights. With non-polar touch adjustment, you can easily control the brightness to suit any occasion. This small black decorative lamp is perfect for adding a contemporary touch to your home or living room."
  },





]
