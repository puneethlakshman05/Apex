
const productContainer = document.getElementById("product-container");

const products =[
    {
       image:"assets/cricketbat2.jpeg",
        name:"SG-English willow KLR Edition",
        price:"30,000/-",
        quantity:1,
        rating:4.9,
        category:"sports"

    },
    
   {    
        image:"assets/cricketball2.jpeg",
        name:"SG-Test special",
        price:"3,000/-",
        quantity:1,
        rating:4.4,
        category:"sports"
    },
       {
          image:"assets/hockeystick.png",
        name:"KL-Hockey stick",
        price:"6,000/-",
        quantity:1,
        rating:4.6,
        category:"sports"
    },
       {image:"assets/football.jpeg",
        name:"Puma-professional Football",
        price:"30,000/-",
        quantity:1,
        rating:4.1,
        category:"sports"

    },
       {image:"assets/t-shirt2.jpeg",
        name:"Adidas-multicolour cotton tee",
        price:"900/-",
        quantity:1,
        rating:4.5,
        category:"fashion"

    },
       {  
        image:"assets/shirt2.jpeg",
        name:"Full sleeve shirt-Rare Rabbit",
        price:"900/-",
        quantity:1,
        rating:4.5,
        category:"fashion"
    },
       { 
          image:"assets/shoe.jpeg",
        name:"Beleciaga-Rare highlander sneakers",
        price:"11,999/-",
        quantity:1,
        rating:4.0,
        category:"fashion"
    },
       {    image:"assets/pants.jpeg",
        name:"combo of 3 cotton joggers",
        price:"1,999/-",
        quantity:3,
        rating:4.2,
        category:"fashion"

    },
    {    image:"assets/mobile1.jpeg",
        name:"Oneplus nord 4",
        price:"32,999/-",
        quantity:1,
        rating:4.0,
        category:"gadgets"

    },
     {    image:"assets/mobile2.jpeg",
        name:"Motorola edge 50 fusion",
        price:"24,999/-",
        quantity:1,
        rating:4.4,
        category:"gadgets"

    },
         {    image:"assets/headphones2.jpeg",
        name:"Zebronics-bluetooth heaphones",
        price:"4,999/-",
        quantity:1,
        rating:3.9,
        category:"gadgets"

    },
    {    image:"assets/Tablet.jpeg",
        name:"Asus-A futuristic tab ",
        price:"41,999/-",
        quantity:1,
        rating:4.22,
        category:"gadgets"

    },





];

const productDisplay = (productList=products)=>{
      productContainer.innerHTML = "";
productList.forEach(product =>
{

    const productCard=document.createElement("div");
    productCard.className="product-card";

    const img = document.createElement("img");
    img.src=product.image;
    img.alt=product.name;
    img.width=200;
    img.height=150;
    img.style.margin="10px"


   // Add details
 const details = document.createElement("div");
 details.innerHTML=`
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <p> Quantity: ${product.quantity}</p>
        <p>Ratings: ${product.rating}</>`;
        // const image=imageContainer.appendChild("img");


  // Append elements to the card
  productCard.appendChild(img);
  productCard.appendChild(details);
//   productCard.appendChild(price);
//   productCard.appendChild(quantity);
//   productCard.appendChild(rating);

  // Append card to container
  productContainer.appendChild(productCard);
}
);
}
const applyFilters = () => {
    const category = document.getElementById("categories").value;
    const priceOrder = document.getElementById("pricing").value;
    const ratingOrder = document.getElementById("rating").value;

    // Start with full product list
    let filtered = [...products];
    

    // 1. Filter by category if selected
    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }

    // 2. Sort by price
    if (priceOrder === "low-to-high") {
        filtered.sort((a, b) =>
            parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''))
        );
    } else if (priceOrder === "high-to-low") {
        filtered.sort((a, b) =>
            parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''))
        );
    }

    // 3. Sort by rating
    if (ratingOrder === "low-to-high") {
        filtered.sort((a, b) => a.rating - b.rating);
    } else if (ratingOrder === "high-to-low") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    // Final display
    productDisplay(filtered);
};






    productDisplay(); // show all products on initial load
    document.getElementById("categories").addEventListener("change", applyFilters);
    document.getElementById("pricing").addEventListener("change", applyFilters);
    document.getElementById("rating").addEventListener("change",applyFilters);



