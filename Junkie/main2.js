document.getElementById('menu').addEventListener('click', function(event) {
      var dropdown = document.getElementById('dropdown');
      dropdown.classList.toggle('open');
      
      //con.style.marginLeft= "70%";
      //con.style.opacity = "0.1";
      event.stopPropagation(); // Prevent the click from propagating to the document
    });
  let con = document.querySelector('.con');
    document.addEventListener('click', function(event) {
      var dropdown = document.getElementById('dropdown');
      var isClickInside = dropdown.contains(event.target) || event.target.id === 'menu';
      if (!isClickInside) {
        dropdown.classList.remove('open');
       // con.style.marginLeft = "";
       // con.style.opacity = "1";
      }
    });
    
    let name;
    if(localStorage.getItem("name") != null){
      name = localStorage.getItem("name");
      let collect = document.getElementById('collect');
      collect.innerHTML = `Welcome ${name}!`;
    }
    
  let names = ["Home","Search","Cart","Delivery","Settings"];  
let itemNames = document.getElementById("itemNames");



names.forEach((element,index) => {
  itemNames.innerHTML += `${(index > 0 ? "&nbsp;&nbsp;&nbsp;&nbsp;" : '')} ${element}`;
});


let cat = document.getElementById("cat");
  let cat2 = document.getElementById("cat2");
  let work = document.getElementById("work");


function slideIn() {
    cat.style.display = "block";
    cat.classList.add('slide-in');
  }

  
  function slideOut() {
    cat.classList.remove('slide-in');
    cat.classList.add('slide-out');
    setTimeout(() => {
      cat.style.display = "none";
      cat.classList.remove('slide-out');
    }, 1000); 
}
  work.addEventListener('click', function (event) {
    slideIn();
    
    event.stopPropagation();
  });
  

  document.addEventListener('click', function (event) {
    var isClickInside = cat.contains(event.target) || event.target.id === 'cat';
      if (!isClickInside) {
        slideOut();
      }
    
  });


let category = ["1. 👠Shoes","  2. 👕 T-Shirts","3. 👖Trousers"," 4. 🥾 Boots","5. 🧦Stockings","6. 💍 Jewelry","7. 👗Dress"];
  
  



let dis = document.getElementById("Amount");
let num = document.getElementById('num');
let clear1 = document.getElementById('clear1');
let clear2 = document.getElementById('clear2');
let clear3 = document.getElementById('clear3');
let clear4 = document.getElementById('clear4');
let clear5 = document.getElementById('clear5');
let clear6 = document.getElementById('clear6');
let clear7 = document.getElementById('clear7');
let clear8 = document.getElementById('clear8');

let name1 = document.getElementById("f");
let name2 = document.getElementById("g");
let name3 = document.getElementById("h");
let name4 = document.getElementById("i");
let name5 = document.getElementById("j");
let name6 = document.getElementById("k");
let name7 = document.getElementById("l");
let name8 = document.getElementById("m");

let img0 = document.getElementById("img0");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");


let price0 = document.getElementById("price0");
let price1 = document.getElementById("price1");
let price2 = document.getElementById("price2");
let price3 = document.getElementById("price3");
let price4 = document.getElementById("price4");
let price5 = document.getElementById("price5");
let price6 = document.getElementById("price6");
let price7 = document.getElementById("price7");


let info1 = document.getElementById("info1");
let info2 = document.getElementById("info2");
let info3 = document.getElementById("info3");
let info4 = document.getElementById("info4");
let info5 = document.getElementById("info5");
let info6 = document.getElementById("info6");
let info7 = document.getElementById("info7");
let info8 = document.getElementById("info8");











//main resources
let naira = "₦";
let fileResources = [
  {
  name:"Ruby rings", imageSrc: "lily.jpg", price: `N${4000}.00`
  },
  {
    name:"secondTest",imageSrc:"jean.jpeg",price: `N${50000}.00`
  },
  {
    name:"Ice",imageSrc:"jewel.jpg",price: `N${5000000}.00`
  },
  {
    name:"water",imageSrc:"boot.jpg",price: `N${1000}.00`
  },
  {
    name:"waterLime",imageSrc:"hood.jpg",price: `N${600}.00`
  },
  {
    name:"waterCake",imageSrc:"boot.jpg",price: `N${8000}.00`
  },
  {
    name:"waterDrink",imageSrc:"hood.jpg",price: `N${8800}.00`
  },
  {
    name:"waterFish",imageSrc:"boot.jpg",price: `N${1000}.00`
  }
  
]



//firstResourses
let fileResources1 = [
  {//edit
    name: "Vans",
    imageSrc: "realShoes/shoevans.JPG",
    price: `N${10000}.00`,
    description: "Brand: Vans, Size: 41-46, (Unboxed), Very comfortable and easy to wear"
  },
  {//edit
    name: "Louis Vuitton Sneakers",
    imageSrc: "realShoes/shoevuit.jpg",
    price: `N${24000}.00`,
    description: "Size 42-46"
  },
  {
    name: "Airforce A",
    imageSrc: "realShoes/shoeairforce 1 A.JPG",
    price: `N${15000}.00 (unboxed), N${16000}.00 (boxed)`,
    description: "Brand: Nike Airforce, Size: 38-43"
  },
  {
    name: "Airforce 1B",
    imageSrc: "realShoes/shoe airforce 1 B.JPG",
    price: `N${13500}.00 (unboxed), N${15000}.00 (boxed)`,
    description: "Brand: Airforce 1, Size: 38-42"
  },
  {
    name: "Jordan A",
    imageSrc: "realShoes/shoejordanA.JPG",
    price: `N${15000}.00 (unboxed), N${16000}.00 (boxed)`,
    description: "Brand: Jordan, Size: 38-43"
  },
  {
    name: "Retro",
    imageSrc: "realShoes/shoeretro.jpg",
    price: `N${15000}.00`,
    description: "Brand: Adidas Retro, Size: 43-46, (Unboxed)"
  },
  {//edit
    name: "New Balance",
    imageSrc: "realShoes/shoenewbal.jpg",
    price: `N${25000}.00`,
    description: "Brand: New Balance Sneakers, Size: 41-45, (Fully boxed)"
  },
  {//edit
    name: "Fashion shoes",
    imageSrc: "realShoes/shoefash.jpg",
    price: `N${20000}.00`,
    description: "Brand: Fashion shoes, Size: 40-45"
  }
  ]
  
  
  
  //secondFile
 let fileResources2 = [
  {
    name: "Ogiy",
    imageSrc: "realShoes/shoeogiy.JPG",
    price: `N${17500}.00`,
    description: "Brand: Ogiy, Size: 40-45, (Fully boxed)"
  },
  {
    name: "Naked Wolfe",
    imageSrc: "realShoes/shoe nak wolfe.JPG",
    price: `N${23000}.00`,
    description: "Brand: Naked Wolfe, Size: 38-42, (Unboxed)"
  },
  {
    name: "Pinging Crocs",
    imageSrc: "slides/slidespcrocs.jpg",
    price: `N${17000}.00`,
    description: "Brand: Pinging Crocs, Size: 49-46"
  },
  {
    name: "Addidas",
    imageSrc: "realShoes/shoeaddi.JPG",
    price: `N${20000}.00`,
    description: "Brand: Adidas, Size: 42-46, (Unboxed)"
  },
  {
    name: "Supreme Airforce",
    imageSrc: "realShoes/shoesup1.JPG",
    price: `N${23000}.00`,
    description: "Brand: Supreme Airforce, Size: 38-45, (Unboxed)"
  },
  {
    name: "BL",
    imageSrc: "realShoes/shoebl.JPG",
    price: `N${13000}.00`,
    description: "New in, Size: 38-42, (Unboxed)"
  },
  {
    name: "Timberland Sneakers",
    imageSrc: "realShoes/shoetim.jpg",
    price: `N${21000}.00`,
    description: "Brand: Timberland Sneakers, Size: 40-46"
  },
  {
    name: "Clarks (Corporate Shoe)",
    imageSrc: "realShoes/shoecope.JPG",
    price: `N${44000}.00`,
    description: "Brand: Clarks (Corporate Shoe), Size: 40-46, (Fully boxed)"
  }
  ];
  
  
  //fileResouce3
  let fileResources3 = [
  {
    name: "Givenchy",
    imageSrc: "realShoes/shoegiveA.JPG",
    price: `N${25000}.00`,
    description: "Brand: Givenchy, Size: 40-45"
  },
  {
    name: "Timberland Loafers",
    imageSrc: "realShoes/shoeloaf.jpg",
    price: `N${24000}.00`,
    description: "Brand: Timberland Loafers, Size: 40-46"
  },
  {
    name: "Wallabees (Suede)",
    imageSrc: "realShoes/shoesued.jpg",
    price: `N${18000}.00`,
    description: "Brand: Wallabees (Suede), Size: 40-46"
  },
  {
    name: "Wallabees (Navy Blue)",
    imageSrc: "realShoes/shoewall.jpg",
    price: `N${18000}.00`,
    description: "Brand: Wallabees (Navy Blue), Size: 40-46"
  },
  {
    name: "Football Boots",
    imageSrc: "realShoes/shoefoot.jpg",
    price: `N${14000}.00`,
    description: "Football Boots, Size: 40-45"
  },
  {
    name: "Celine",
    imageSrc: "slides/slidesceli.JPG",
    price: `N${25000}.00`,
    description: "Brand: Celine (Carton Pam's), Size: 40-45"
  },
  {
    name: "Balmain",
    imageSrc: "slides/slidesbalman.JPG",
    price: `N${25000}.00`,
    description: "Brand: Balmain (Carton Pam's), Size: 40-45"
  },
  {//edit
    name: "Hikers Crocs",
    imageSrc: "slides/slideshcrocs.jpg",
    price: `N${19000}.00`,
    description: "Size: 41-45 Unboxed"
  }
  ];
  
  
  //fileresourses4
  let fileResources4 = [
  {
    name: "Givenchy SL",
    imageSrc: "slides/slidesgive.JPG",
    price: `N${25000}.00`,
    description: "Brand: Givenchy (Carton Pam's), Size: 40-45"
  },
  {
    name: "Stock Pams",
    imageSrc: "slides/slidespams.jpg",
    price: `N${8000}.00`,
    description: "Stock Pam's, Size: 40-45"
  },
  {
    name: "Crocs",
    imageSrc: "slides/slidescrocs.jpg",
    price: `N${15000}.00`,
    description: "Brand: Crocs, Size: 40-45 (6-11)"
  },
  {
    name: "Literide Crocs",
    imageSrc: "slides/slidesride.jpg",
    price: `N${16500}.00`,
    description: "Brand: Literide Crocs, Size: 40-45 (6-11)"
  },
  {
    name: "Tommy Hilfiger Slippers",
    imageSrc: "slides/slidestom.jpg",
    price: `N${5000}.00`,
    description: "Brand: Tommy Hilfiger Slippers, Size: 41-45"
  },
  {
    name: "Nike Belt",
    imageSrc: "slides/slidesnike.jpg",
    price: `N${7500}.00`,
    description: "Brand: Nike Belt, Size: 40-45"
  },
  {//edit
    name: "Jeans Short",
    imageSrc: "realTrousers/troserjeanshor.JPG",
    price: `N${15000}.00`,
    description: "Quality Jeans Shorts"
  },
  {//edit
    name: "Jean Jacket",
    imageSrc: "realShirt/shirtjeanjac.jpg",
    price: `N${21000}.00`,
    description: "Premium Jean Jacket"
  }
  ]
  
  
  //fileResourse5
  let fileResources5 = [
  {
    name: "Match Fit Jean",
    imageSrc: "marchingFits/matchfitjean.JPG",
    price: `N${32000}.00`,
    description: "Quality Jean Matching Fit (Short Trouser)"
  },
  {//edit
    name: "Match fit Jean",
    imageSrc: "marchingFits/matchfitlong.jpg",
    price: `N${32000}.00`,
    description: "Quality Matching fit(long trouser)"
  },
  {
    name: "Jean",
    imageSrc: "realTrousers/troserjeans.jpg",
    price: `N${22000}.00`,
    description: "Premium Baggy Jeans"
  },
  {
    name: "Checker",
    imageSrc: "marchingFits/shirtcheck.JPG",
    price: `N${10000}.00`,
    description: "Quality Checker Shirts"
  },
  {
    name: "Tees",
    imageSrc: "realShirt/shirttees.jpg",
    price: `N${17000}.00`,
    description: "Quality Top Notch Tees"
  },
  {
    name: "Hoody",
    imageSrc: "realShirt/shirthoody.jpg",
    price: `N${18000}.00`,
    description: "Quality Hoody"
  },
  {
    name: "Givenchy SH",
    imageSrc: "realShoes/shoevenchy.JPG",
    price: `N${36000}.00`,
    description: "Brand: Givenchy, Size: 40-46"
  },
  {
    name: "Match Fit Short",
    imageSrc: "marchingFits/matchpfitshor.JPG",
    price: `N${25000}.00`,
    description: "Brand: Balenciaga, Quality Matching Fit"
  }
  ]
  
  
  //fileResouce6
  let fileResources6 = [
  {//edit
    name: "Airforce1",
    imageSrc: "realShoes/shoe1.jpg",
    price: `N${14000}.00`,
    description: "14000.00(Unboxed) 15000.00(boxed) Size: 38-42"
  },
  {
    name: "x Sor",
    imageSrc: "realShoes/shoedor.JPG",
    price: `N${18000}.00`,
    description: "Quality Shoe x Sor, (Unboxed) Size: 41-45"
  },
  {
    name: "Dr. Martin's",
    imageSrc: "realShoes/shoeDrmart.JPG",
    price: `N${45000}.00`,
    description: "Brand: Dr. Martin's, Size: 40-46"
  },
  {
    name: "Louis Vuitton Bigsole",
    imageSrc: "realShoes/shoelv.JPG",
    price: `N${35000}.00`,
    description: "Brand: Louis Vuitton Bigsole, Size: 40-46"
  },
  {
    name: "Nike",
    imageSrc: "realShoes/shoenike.JPG",
    price: `N${9000}.00`,
    description: "Brand: Nike, Size: 41-46"
  },
  {
    name: "Tees",
    imageSrc: "realShirt/shirtte.jpg",
    price: `N${12000}.00`,
    description: "Quality Round Neck Tees"
  },
  {
    name: "Jean Jacket",
    imageSrc: "realShirt/shirtjac.jpg",
    price: `N${22000}.00`,
    description: "Quality Jean Jacket"
  },
  {
    name: "Shorts",
    imageSrc: "realTrousers/trosershorts.jpg",
    price: `N${12000}.00`,
    description: "Quality Shorts"
  }
  
  ];
  
  
  //fileResouces7
  let fileResources7 = [
  {
    name: "Timberland",
    imageSrc: "realShoes/shoetimber.JPG",
    price: `N${48000}.00`,
    description: "Brand: Timberland, Grade A Timberland Boots, Size: 40-45"
  },
  {
    name: "Nike SB",
    imageSrc: "realShoes/shoenikeB.JPG",
    price: `N${18000}.00`,
    description: "Brand: Nike SB, Size: 40-45"
  },
  {
    name: "Adidas Gazelle",
    imageSrc: "realShoes/shoegaze.JPG",
    price: `N${22000}.00`,
    description: "Brand: Adidas Gazelle, Size: 40-47, (Boxed)"
  },
  {
    name: "Jordan 4",
    imageSrc: "realShoes/shoedan4.JPG",
    price: `N${24000}.00`,
    description: "Brand: Jordan 4, Size: 40-46, (Boxed)"
  },
  {
    name: "Reebok",
    imageSrc: "realShoes/shoeree.JPG",
    price: `N${17000}.00`,
    description: "Brand: Reebok, Size: 42-46"
  },
  {
    name: "NY",
    imageSrc: "realShoes/shoeny.JPG",
    price: `N${23000}.00`,
    description: "Brand: NY, Size: 40-45, (Unboxed)"
  },
  {
    name: "Nike Zoom",
    imageSrc: "realShoes/shoezoom.JPG",
    price: `N${18000}.00`,
    description: "Brand: Nike Zoom, Size: 40-45"
  },
  {
    name: "Airforce 1",
    imageSrc: "realShoes/shoeforce.JPG",
    price: `N${18000}.00`,
    description: "Brand: Airforce 1, Size: 41-47"
  }
  
  ]
  
  
  //fileResource8
  let fileResources8 = [
  {
    name: "Fashion Kicks",
    imageSrc: "realShoes/shoekicks.JPG",
    price: `N${22000}.00`,
    description: "Fashion Kicks, Size: 40-45, (Fully boxed)"
  },
  {
    name: "Fendi Roma Big Sole",
    imageSrc: "realShoes/shoefendi.JPG",
    price: `N${37000}.00`,
    description: "Brand: Fendi Roma Big Sole, Size: 40-45"
  },
  {
    name: "Balenciaga Sandals",
    imageSrc: "realShoes/shoebala.jpg",
    price: `N${63000}.00`,
    description: "Brand: Balenciaga Sandals, Size: 40-45, (Fully boxed)"
  },
  {
    name: "Jordan High Dunk",
    imageSrc: "realShoes/shoedunk.jpg",
    price: `N${15000}.00`,
    description: "Brand: Jordan High Dunk, Size: 38-42"
  },
  {
    name: "Balenciaga Sr",
    imageSrc: "realShirt/shirtciaga2.jpg",
    price: `N${19000}.00`,
    description: "Balenciaga Shirt"
  },
  {
    name: "Premium Baggy Jeans",
    imageSrc: "realTrousers/troserpre.jpg",
    price: `N${25000}.00`,
    description: "Premium Baggy Jeans, Quality or Nothing 🔥"
  },
  {
    name: "Quality XL",
    imageSrc: "realShirt/shirtess.jpg",
    price: `N${18000}.00`,
    description: "Quality Shirts"
  },
  {
    name: "Sweater Vest",
    imageSrc: "realShirt/shirtves.jpg",
    price: `N${21000}.00`,
    description: "Quality Sweater Vest"
  }
];


//fileResources9
let fileResources9 = [
    {
        name: "Timberland",
        imageSrc: "updateShoe/shoetim.jpg",
        price: `N${25000}.00`,
        description: "Size: 40-46, Fully boxed"
    },
    {
        name: "Billionaire Boot",
        imageSrc: "updateShoe/shoebill.jpg",
        price: `N${43000}.00`,
        description: "Size: 39-46, Fully boxed"
    },
    {
        name: "Ferragamo Boot",
        imageSrc: "updateShoe/shoeferr.jpg",
        price: `N${45000}.00`,
        description: "Size: 39-46, Fully boxed"
    },
    {
        name: "Hugo Boss Boot",
        imageSrc: "updateShoe/shoehugo.jpg",
        price: `N${45000}.00`,
        description: "Size: 39-46, Fully boxed"
    },
    {
        name: "Dior Pam's",
        imageSrc: "updateShoe/shoedor.jpg",
        price: `N${30000}.00`,
        description: "Size: 40-46, Fully boxed"
    },
    {
        name: "D&G",
        imageSrc: "updateShoe/shoedg.jpg",
        price: `N${37000}.00`,
        description: "Size: 40-46, Fully boxed"
    },
    {
        name: "Leather jacket",
        imageSrc: "updateShirt/shirtleath.jpg",
        price: `N${23000}.00`,
        description: "Quality Jackets"
    },
    {
        name: "Sweater shirt",
        imageSrc: "updateShirt/shirtswea.jpg",
        price: `N${18000}.00`,
        description: "High Quality"
    }
];



function fileResources11(){
  element1 = fileResources1[0];
  element2 = fileResources1[1];
  element3 = fileResources1[2];
  element4 = fileResources1[3];
  element5 = fileResources1[4];
  element6 = fileResources1[5];
  element7 = fileResources1[6];
  element8 = fileResources1[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}

function fileResources22() {
element1 = fileResources2[0];
element2 = fileResources2[1];
element3 = fileResources2[2];
element4 = fileResources2[3];
element5 = fileResources2[4];
element6 = fileResources2[5];
element7 = fileResources2[6];
element8 = fileResources2[7];

name1.innerHTML = element1.name;
name2.innerHTML = element2.name;
name3.innerHTML = element3.name;
name4.innerHTML = element4.name;
name5.innerHTML = element5.name;
name6.innerHTML = element6.name;
name7.innerHTML = element7.name;
name8.innerHTML = element8.name;

img0.src = element1.imageSrc;
img1.src = element2.imageSrc;
img2.src = element3.imageSrc;
img3.src = element4.imageSrc;
img4.src = element5.imageSrc;
img5.src = element6.imageSrc;
img6.src = element7.imageSrc;
img7.src = element8.imageSrc;

price0.innerHTML = element1.price;
price1.innerHTML = element2.price;
price2.innerHTML = element3.price;
price3.innerHTML = element4.price;
price4.innerHTML = element5.price;
price5.innerHTML = element6.price;
price6.innerHTML = element7.price;
price7.innerHTML = element8.price;


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}

function fileResources33() {
element1 = fileResources3[0];
element2 = fileResources3[1];
element3 = fileResources3[2];
element4 = fileResources3[3];
element5 = fileResources3[4];
element6 = fileResources3[5];
element7 = fileResources3[6];
element8 = fileResources3[7];

name1.innerHTML = element1.name;
name2.innerHTML = element2.name;
name3.innerHTML = element3.name;
name4.innerHTML = element4.name;
name5.innerHTML = element5.name;
name6.innerHTML = element6.name;
name7.innerHTML = element7.name;
name8.innerHTML = element8.name;

img0.src = element1.imageSrc;
img1.src = element2.imageSrc;
img2.src = element3.imageSrc;
img3.src = element4.imageSrc;
img4.src = element5.imageSrc;
img5.src = element6.imageSrc;
img6.src = element7.imageSrc;
img7.src = element8.imageSrc;

price0.innerHTML = element1.price;
price1.innerHTML = element2.price;
price2.innerHTML = element3.price;
price3.innerHTML = element4.price;
price4.innerHTML = element5.price;
price5.innerHTML = element6.price;
price6.innerHTML = element7.price;
price7.innerHTML = element8.price;


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}

function fileResources44() {
element1 = fileResources4[0];
element2 = fileResources4[1];
element3 = fileResources4[2];
element4 = fileResources4[3];
element5 = fileResources4[4];
element6 = fileResources4[5];
element7 = fileResources4[6];
element8 = fileResources4[7];

name1.innerHTML = element1.name;
name2.innerHTML = element2.name;
name3.innerHTML = element3.name;
name4.innerHTML = element4.name;
name5.innerHTML = element5.name;
name6.innerHTML = element6.name;
name7.innerHTML = element7.name;
name8.innerHTML = element8.name;

img0.src = element1.imageSrc;
img1.src = element2.imageSrc;
img2.src = element3.imageSrc;
img3.src = element4.imageSrc;
img4.src = element5.imageSrc;
img5.src = element6.imageSrc;
img6.src = element7.imageSrc;
img7.src = element8.imageSrc;

price0.innerHTML = element1.price;
price1.innerHTML = element2.price;
price2.innerHTML = element3.price;
price3.innerHTML = element4.price;
price4.innerHTML = element5.price;
price5.innerHTML = element6.price;
price6.innerHTML = element7.price;
price7.innerHTML = element8.price;


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}

function fileResources55() {
element1 = fileResources5[0];
element2 = fileResources5[1];
element3 = fileResources5[2];
element4 = fileResources5[3];
element5 = fileResources5[4];
element6 = fileResources5[5];
element7 = fileResources5[6];
element8 = fileResources5[7];

name1.innerHTML = element1.name;
name2.innerHTML = element2.name;
name3.innerHTML = element3.name;
name4.innerHTML = element4.name;
name5.innerHTML = element5.name;
name6.innerHTML = element6.name;
name7.innerHTML = element7.name;
name8.innerHTML = element8.name;

img0.src = element1.imageSrc;
img1.src = element2.imageSrc;
img2.src = element3.imageSrc;
img3.src = element4.imageSrc;
img4.src = element5.imageSrc;
img5.src = element6.imageSrc;
img6.src = element7.imageSrc;
img7.src = element8.imageSrc;

price0.innerHTML = element1.price;
price1.innerHTML = element2.price;
price2.innerHTML = element3.price;
price3.innerHTML = element4.price;
price4.innerHTML = element5.price;
price5.innerHTML = element6.price;
price6.innerHTML = element7.price;
price7.innerHTML = element8.price;


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}

function fileResources66() {
element1 = fileResources6[0];
element2 = fileResources6[1];
element3 = fileResources6[2];
element4 = fileResources6[3];
element5 = fileResources6[4];
element6 = fileResources6[5];
element7 = fileResources6[6];
element8 = fileResources6[7];

name1.innerHTML = element1.name;
name2.innerHTML = element2.name;
name3.innerHTML = element3.name;
name4.innerHTML = element4.name;
name5.innerHTML = element5.name;
name6.innerHTML = element6.name;
name7.innerHTML = element7.name;
name8.innerHTML = element8.name;

img0.src = element1.imageSrc;
img1.src = element2.imageSrc;
img2.src = element3.imageSrc;
img3.src = element4.imageSrc;
img4.src = element5.imageSrc;
img5.src = element6.imageSrc;
img6.src = element7.imageSrc;
img7.src = element8.imageSrc;

price0.innerHTML = element1.price;
price1.innerHTML = element2.price;
price2.innerHTML = element3.price;
price3.innerHTML = element4.price;
price4.innerHTML = element5.price;
price5.innerHTML = element6.price;
price6.innerHTML = element7.price;
price7.innerHTML = element8.price;


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}

function fileResources77() {
element1 = fileResources7[0];
element2 = fileResources7[1];
element3 = fileResources7[2];
element4 = fileResources7[3];
element5 = fileResources7[4];
element6 = fileResources7[5];
element7 = fileResources7[6];
element8 = fileResources7[7];

name1.innerHTML = element1.name;
name2.innerHTML = element2.name;
name3.innerHTML = element3.name;
name4.innerHTML = element4.name;
name5.innerHTML = element5.name;
name6.innerHTML = element6.name;
name7.innerHTML = element7.name;
name8.innerHTML = element8.name;

img0.src = element1.imageSrc;
img1.src = element2.imageSrc;
img2.src = element3.imageSrc;
img3.src = element4.imageSrc;
img4.src = element5.imageSrc;
img5.src = element6.imageSrc;
img6.src = element7.imageSrc;
img7.src = element8.imageSrc;

price0.innerHTML = element1.price;
price1.innerHTML = element2.price;
price2.innerHTML = element3.price;
price3.innerHTML = element4.price;
price4.innerHTML = element5.price;
price5.innerHTML = element6.price;
price6.innerHTML = element7.price;
price7.innerHTML = element8.price;


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}

function fileResources88() {
element1 = fileResources8[0];
element2 = fileResources8[1];
element3 = fileResources8[2];
element4 = fileResources8[3];
element5 = fileResources8[4];
element6 = fileResources8[5];
element7 = fileResources8[6];
element8 = fileResources8[7];

name1.innerHTML = element1.name;
name2.innerHTML = element2.name;
name3.innerHTML = element3.name;
name4.innerHTML = element4.name;
name5.innerHTML = element5.name;
name6.innerHTML = element6.name;
name7.innerHTML = element7.name;
name8.innerHTML = element8.name;

img0.src = element1.imageSrc;
img1.src = element2.imageSrc;
img2.src = element3.imageSrc;
img3.src = element4.imageSrc;
img4.src = element5.imageSrc;
img5.src = element6.imageSrc;
img6.src = element7.imageSrc;
img7.src = element8.imageSrc;

price0.innerHTML = element1.price;
price1.innerHTML = element2.price;
price2.innerHTML = element3.price;
price3.innerHTML = element4.price;
price4.innerHTML = element5.price;
price5.innerHTML = element6.price;
price6.innerHTML = element7.price;
price7.innerHTML = element8.price;


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}

//newFiles
function fileResources99() {
element1 = fileResources9[0];
element2 = fileResources9[1];
element3 = fileResources9[2];
element4 = fileResources9[3];
element5 = fileResources9[4];
element6 = fileResources9[5];
element7 = fileResources9[6];
element8 = fileResources9[7];

name1.innerHTML = element1.name;
name2.innerHTML = element2.name;
name3.innerHTML = element3.name;
name4.innerHTML = element4.name;
name5.innerHTML = element5.name;
name6.innerHTML = element6.name;
name7.innerHTML = element7.name;
name8.innerHTML = element8.name;

img0.src = element1.imageSrc;
img1.src = element2.imageSrc;
img2.src = element3.imageSrc;
img3.src = element4.imageSrc;
img4.src = element5.imageSrc;
img5.src = element6.imageSrc;
img6.src = element7.imageSrc;
img7.src = element8.imageSrc;

price0.innerHTML = element1.price;
price1.innerHTML = element2.price;
price2.innerHTML = element3.price;
price3.innerHTML = element4.price;
price4.innerHTML = element5.price;
price5.innerHTML = element6.price;
price6.innerHTML = element7.price;
price7.innerHTML = element8.price;


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}


//json responses 
let responses1 = [];
let responses2 = [];
let responses3 = [];
let responses4 = [];
let responses5 = [];
let responses6 = [];
let responses7 = [];
let responses8 = [];
let responses9 = [];
let responses10 = [];
let responses11 = [];
let responses12 = [];
let responses13 = [];
//let responses9 = [];
//json responses

  async function upload1(){
  await fetchData();
  element1 = responses1[0];
  element2 = responses1[1];
  element3 = responses1[2];
  element4 = responses1[3];
  element5 = responses1[4];
  element6 = responses1[5];
  element7 = responses1[6];
  element8 = responses1[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}
async function upload2() {
  await fetchData();
  element1 = responses2[0];
  element2 = responses2[1];
  element3 = responses2[2];
  element4 = responses2[3];
  element5 = responses2[4];
  element6 = responses2[5];
  element7 = responses2[6];
  element8 = responses2[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}
async function upload3() {
  await fetchData();
  element1 = responses3[0];
  element2 = responses3[1];
  element3 = responses3[2];
  element4 = responses3[3];
  element5 = responses3[4];
  element6 = responses3[5];
  element7 = responses3[6];
  element8 = responses3[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}
async function upload4() {
  await fetchData();
  element1 = responses4[0];
  element2 = responses4[1];
  element3 = responses4[2];
  element4 = responses4[3];
  element5 = responses4[4];
  element6 = responses4[5];
  element7 = responses4[6];
  element8 = responses4[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}
async function upload5() {
  await fetchData();
  element1 = responses5[0];
  element2 = responses5[1];
  element3 = responses5[2];
  element4 = responses5[3];
  element5 = responses5[4];
  element6 = responses5[5];
  element7 = responses5[6];
  element8 = responses5[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}
async function upload6() {
  await fetchData();
  element1 = responses6[0];
  element2 = responses6[1];
  element3 = responses6[2];
  element4 = responses6[3];
  element5 = responses6[4];
  element6 = responses6[5];
  element7 = responses6[6];
  element8 = responses6[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}
async function upload7() {
  await fetchData();
  element1 = responses7[0];
  element2 = responses7[1];
  element3 = responses7[2];
  element4 = responses7[3];
  element5 = responses7[4];
  element6 = responses7[5];
  element7 = responses7[6];
  element8 = responses7[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}
async function upload8() {
  await fetchData();
  element1 = responses8[0];
  element2 = responses8[1];
  element3 = responses8[2];
  element4 = responses8[3];
  element5 = responses8[4];
  element6 = responses8[5];
  element7 = responses8[6];
  element8 = responses8[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}
async function upload9() {
  await fetchData();
  element1 = responses9[0];
  element2 = responses9[1];
  element3 = responses9[2];
  element4 = responses9[3];
  element5 = responses9[4];
  element6 = responses9[5];
  element7 = responses9[6];
  element8 = responses9[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}
async function upload10() {
  await fetchData();
  element1 = responses10[0];
  element2 = responses10[1];
  element3 = responses10[2];
  element4 = responses10[3];
  element5 = responses10[4];
  element6 = responses10[5];
  element7 = responses10[6];
  element8 = responses10[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}
async function upload11() {
  await fetchData();
  element1 = responses11[0];
  element2 = responses11[1];
  element3 = responses11[2];
  element4 = responses11[3];
  element5 = responses11[4];
  element6 = responses11[5];
  element7 = responses11[6];
  element8 = responses11[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}
async function upload12() {
  await fetchData();
  element1 = responses12[0];
  element2 = responses12[1];
  element3 = responses12[2];
  element4 = responses12[3];
  element5 = responses12[4];
  element6 = responses12[5];
  element7 = responses12[6];
  element8 = responses12[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}
async function upload13() {
  await fetchData();
  element1 = responses13[0];
  element2 = responses13[1];
  element3 = responses13[2];
  element4 = responses13[3];
  element5 = responses13[4];
  element6 = responses13[5];
  element7 = responses13[6];
  element8 = responses13[7];
  
  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}

//categories




//shoes
let shoes = [
  {
    name: "Vans",
    imageSrc: "realShoes/shoevans.JPG",
    price: `N${10000}.00`,
    description: "Brand: Vans, Size: 41-46, (Unboxed), Very comfortable and easy to wear"
  },
  {
    name: "Louis Vuitton Sneakers",
    imageSrc: "realShoes/shoevuit.jpg",
    price: `N${24000}.00`,
    description: "Size 42-46"
  },
  {
    name: "Airforce A",
    imageSrc: "realShoes/shoeairforce 1 A.JPG",
    price: `N${15000}.00 (unboxed), N${16000}.00 (boxed)`,
    description: "Brand: Nike Airforce, Size: 38-43"
  },
  {
    name: "Airforce 1B",
    imageSrc: "realShoes/shoe airforce 1 B.JPG",
    price: `N${13500}.00 (unboxed), N${15000}.00 (boxed)`,
    description: "Brand: Airforce 1, Size: 38-42"
  },
  {
    name: "Jordan A",
    imageSrc: "realShoes/shoejordanA.JPG",
    price: `N${15000}.00 (unboxed), N${16000}.00 (boxed)`,
    description: "Brand: Jordan, Size: 38-43"
  },
  {
    name: "Retro",
    imageSrc: "realShoes/shoeretro.jpg",
    price: `N${15000}.00`,
    description: "Brand: Adidas Retro, Size: 43-46, (Unboxed)"
  },
  {
    name: "New Balance",
    imageSrc: "realShoes/shoenewbal.jpg",
    price: `N${25000}.00`,
    description: "Brand: New Balance Sneakers, Size: 41-45, (Fully boxed)"
  },
  {
    name: "Ogiy",
    imageSrc: "realShoes/shoeogiy.JPG",
    price: `N${17500}.00`,
    description: "Brand: Ogiy, Size: 40-45, (Fully boxed)"
  },
  {
    name: "Naked Wolfe",
    imageSrc: "realShoes/shoe nak wolfe.JPG",
    price: `N${23000}.00`,
    description: "Brand: Naked Wolfe, Size: 38-42, (Unboxed)"
  },
  {
    name: "Addidas",
    imageSrc: "realShoes/shoeaddi.JPG",
    price: `N${20000}.00`,
    description: "Brand: Adidas, Size: 42-46, (Unboxed)"
  },
  {
    name: "Supreme Airforce",
    imageSrc: "realShoes/shoesup1.JPG",
    price: `N${23000}.00`,
    description: "Brand: Supreme Airforce, Size: 38-45, (Unboxed)"
  },
  {
    name: "BL",
    imageSrc: "realShoes/shoebl.JPG",
    price: `N${13000}.00`,
    description: "New in, Size: 38-42, (Unboxed)"
  },
  {
    name: "Timberland Sneakers",
    imageSrc: "realShoes/shoetim.jpg",
    price: `N${21000}.00`,
    description: "Brand: Timberland Sneakers, Size: 40-46"
  },
  {
    name: "Clarks (Corporate Shoe)",
    imageSrc: "realShoes/shoecope.JPG",
    price: `N${44000}.00`,
    description: "Brand: Clarks (Corporate Shoe), Size: 40-46, (Fully boxed)"
  },
  {
    name: "Givenchy",
    imageSrc: "realShoes/shoegiveA.JPG",
    price: `N${25000}.00`,
    description: "Brand: Givenchy, Size: 40-45"
  },
  {
    name: "Timberland Loafers",
    imageSrc: "realShoes/shoeloaf.jpg",
    price: `N${24000}.00`,
    description: "Brand: Timberland Loafers, Size: 40-46"
  },
  {
    name: "Wallabees (Suede)",
    imageSrc: "realShoes/shoesued.jpg",
    price: `N${18000}.00`,
    description: "Brand: Wallabees (Suede), Size: 40-46"
  },
  {
    name: "Wallabees (Navy Blue)",
    imageSrc: "realShoes/shoewall.jpg",
    price: `N${18000}.00`,
    description: "Brand: Wallabees (Navy Blue), Size: 40-46"
  },
  {
    name: "Football Boots",
    imageSrc: "realShoes/shoefoot.jpg",
    price: `N${14000}.00`,
    description: "Football Boots, Size: 40-45"
  },
  {//newUpdate
    name: "Timberland",
    imageSrc: "updateShoe/shoetim.jpg",
    price: `N${25000}.00`,
    description: "Size: 40-46, Fully boxed"
  },
  {
    name: "Billionaire Boot",
    imageSrc: "updateShoe/shoebill.jpg",
    price: `N${43000}.00`,
    description: "Size: 39-46, Fully boxed"
  },
  {
    name: "Ferragamo Boot",
    imageSrc: "updateShoe/shoeferr.jpg",
    price: `N${45000}.00`,
    description: "Size: 39-46, Fully boxed"
  },
  {
    name: "Hugo Boss Boot",
    imageSrc: "updateShoe/shoehugo.jpg",
    price: `N${45000}.00`,
    description: "Size: 39-46, Fully boxed"
  },
  {
    name: "Dior Pam's",
    imageSrc: "updateShoe/shoedor.jpg",
    price: `N${30000}.00`,
    description: "Size: 40-46, Fully boxed"
  },
  {
    name: "D&G",
    imageSrc: "updateShoe/shoedg.jpg",
    price: `N${37000}.00`,
    description: "Size: 40-46, Fully boxed"
   },//endUpdate
  {
    name: "Givenchy XL",
    imageSrc: "realShoes/shoevenchy.JPG",
    price: `N${36000}.00`,
    description: "Brand: Givenchy, Size: 40-46"
  },
  {
    name: "Airforce1X",
    imageSrc: "realShoes/shoe1.jpg",
    price: `N${14000}.00`,
    description: "14000.00(Unboxed) 15000.00(boxed)"
  },
  {
    name: "x Sor",
    imageSrc: "realShoes/shoedor.JPG",
    price: `N${18000}.00`,
    description: "Quality Shoe x Sor, (Unboxed)"
  },
  {
    name: "Dr. Martin's",
    imageSrc: "realShoes/shoeDrmart.JPG",
    price: `N${45000}.00`,
    description: "Brand: Dr. Martin's, Size: 40-46"
  },
  {
    name: "Louis Vuitton Bigsole",
    imageSrc: "realShoes/shoelv.JPG",
    price: `N${35000}.00`,
    description: "Brand: Louis Vuitton Bigsole, Size: 40-46"
  },
  {
    name: "Nike",
    imageSrc: "realShoes/shoenike.JPG",
    price: `N${9000}.00`,
    description: "Brand: Nike, Size: 41-46"
  },
  {
    name: "Timberland",
    imageSrc: "realShoes/shoetimber.JPG",
    price: `N${48000}.00`,
    description: "Brand: Timberland, Grade A Timberland Boots, Size: 40-45"
  },
  {
    name: "Nike SB",
    imageSrc: "realShoes/shoenikeB.JPG",
    price: `N${18000}.00`,
    description: "Brand: Nike SB, Size: 40-45"
  },
  {
    name: "Adidas Gazelle",
    imageSrc: "realShoes/shoegaze.JPG",
    price: `N${22000}.00`,
    description: "Brand: Adidas Gazelle, Size: 40-47, (Boxed)"
  },
  {
    name: "Jordan 4",
    imageSrc: "realShoes/shoedan4.JPG",
    price: `N${24000}.00`,
    description: "Brand: Jordan 4, Size: 40-46, (Boxed)"
  },
  {
    name: "Reebok",
    imageSrc: "realShoes/shoeree.JPG",
    price: `N${17000}.00`,
    description: "Brand: Reebok, Size: 42-46"
  },
  {
    name: "NY",
    imageSrc: "realShoes/shoeny.JPG",
    price: `N${23000}.00`,
    description: "Brand: NY, Size: 40-45, (Unboxed)"
  },
  {
    name: "Nike Zoom",
    imageSrc: "realShoes/shoezoom.JPG",
    price: `N${18000}.00`,
    description: "Brand: Nike Zoom, Size: 40-45"
  },
  {
    name: "Airforce 1",
    imageSrc: "realShoes/shoeforce.JPG",
    price: `N${18000}.00`,
    description: "Brand: Airforce 1, Size: 41-47"
  },
  {
    name: "Fashion Kicks",
    imageSrc: "realShoes/shoekicks.JPG",
    price: `N${22000}.00`,
    description: "Fashion Kicks, Size: 40-45, (Fully boxed)"
  },
  {
    name: "Fendi Roma Big Sole",
    imageSrc: "realShoes/shoefendi.JPG",
    price: `N${37000}.00`,
    description: "Brand: Fendi"
  }
  ];
  
  //shirts
  
  let shirts = [
    {
      name: "Jean Jacket",
      imageSrc: "realShirt/shirtjeanjac.jpg",
      price: `N${21000}.00`,
      description: "Premium Jean Jacket"
    },
    {
      name: "Checker",
      imageSrc: "marchingFits/shirtcheck.JPG",
      price: `N${10000}.00`,
      description: "Quality Checker Shirts"
    },
    {
      name: "Tees",
      imageSrc: "realShirt/shirttees.jpg",
      price: `N${17000}.00`,
      description: "Quality Top Notch Tees"
    },
    {
      name: "Hood",
      imageSrc: "realShirt/shirthoody.jpg",
      price: `N${18000}.00`,
      description: "Quality Hoody"
    },//newUpdate
    {
       name: "Leather jacket",
       imageSrc: "updateShirt/shirtleath.jpg",
       price: `N${23000}.00`,
       description: "Quality Jackets"
    },
    {
       name: "Sweater shirt",
       imageSrc: "updateShirt/shirtswea.jpg",
       price: `N${18000}.00`,
       description: "High Quality"
    },//endUpdate
    {
      name: "Tees XL",
      imageSrc: "realShirt/shirtte.jpg",
      price: `N${12000}.00`,
      description: "Quality Round Neck Tees"
    },
    {
      name: "Jean Jacket",
      imageSrc: "realShirt/shirtjac.jpg",
      price: `N${22000}.00`,
      description: "Quality Jean Jacket"
    },
    {
      name: "Balenciaga",
      imageSrc: "realShirt/shirtciaga2.jpg",
      price: `N${19000}.00`,
      description: "Balenciaga Shirt"
    },
    {
      name: "Quality Tees",
      imageSrc: "realShirt/shirtess.jpg",
      price: `N${18000}.00`,
      description: "Quality Shirts"
    },
    {
      name: "Sweater Vest",
      imageSrc: "realShirt/shirtves.jpg",
      price: `N${21000}.00`,
      description: "Quality Sweater Vest"
    }
  ];
  
  
  
  //marching fits
  
  let fits = [
    {
      name: "Match Fit Jean",
      imageSrc: "marchingFits/matchfitjean.JPG",
      price: `N${32000}.00`,
      description: "Quality Jean Matching Fit (Short Trouser)"
    },
    {
      name: "Match fit Jean",
      imageSrc: "marchingFits/matchfitlong.jpg",
      price: `N${32000}.00`,
      description: "Quality Matching fit(long trouser)"
    },
    {
      name: "Match Fit Short",
      imageSrc: "marchingFits/matchpfitshor.JPG",
      price: `N${25000}.00`,
      description: "Brand: Balenciaga, Quality Matching Fit"
    },
      {
        name: "Pinging Crocs",
        imageSrc: "slides/slidespcrocs.jpg",
        price: `N${17000}.00`,
        description: "Brand: Pinging Crocs, Size: 49-46"
      },
      {
        name: "Celine (Carton Pam's)",
        imageSrc: "slides/slidesceli.JPG",
        price: `N${25000}.00`,
        description: "Brand: Celine (Carton Pam's), Size: 40-45"
      },
      {
        name: "Balmian",
        imageSrc: "slides/slidesbalman.JPG",
        price: `N${25000}.00`,
        description: "Brand: Balman (Carton Pam's), Size: 40-45"
      },
      {
        name: "Slides Givenchy (Carton Pam's)",
        imageSrc: "slides/slidesgive.JPG",
        price: `N${25000}.00`,
        description: "Brand: Givenchy (Carton Pam's), Size: 40-45"
      },
      {
        name: "Stock Palms",
        imageSrc: "slides/slidespams.jpg",
        price: `N${8000}.00`,
        description: "Stock Pam's, Size: 40-45"
      },
      {
        name: "Slides Crocs",
        imageSrc: "slides/slidescrocs.jpg",
        price: `N${15000}.00`,
        description: "Brand: Crocs, Size: 40-45 (6-11)"
      },
      {
        name: "Literide Crocs",
        imageSrc: "slides/slidesride.jpg",
        price: `N${16500}.00`,
        description: "Brand: Literide Crocs, Size: 40-45 (6-11)"
      },
      {
        name: "Tommy Hilfiger Slippers",
        imageSrc: "slides/slidestom.jpg",
        price: `N${5000}.00`,
        description: "Brand: Tommy Hilfiger Slippers, Size: 41-45"
      },
      {
        name: "Nike Belt",
        imageSrc: "slides/slidesnike.jpg",
        price: `N${7500}.00`,
        description: "Brand: Nike Belt, Size: 40-45"
      },
      {
        name: "Hikers Crocs",
        imageSrc: "slides/slideshcrocs.jpg",
        price: `N${19000}.00`,
        description: "Size: 41-45 Unboxed"
      }
    ];
  
  
  //trousers
  
  let trousers = [
    {
      name: "Jeans Short",
      imageSrc: "realTrousers/troserjeanshor.JPG",
      price: `N${15000}.00`,
      description: "Quality Jeans Shorts"
    },
    {
      name: "Match Fit Jean",
      imageSrc: "marchingFits/matchfitjean.JPG",
      price: `N${32000}.00`,
      description: "Quality Jean Matching Fit (Short Trouser)"
    },
    {
      name: "Match fit Jean",
      imageSrc: "marchingFits/matchfitlong.jpg",
      price: `N${32000}.00`,
      description: "Quality Matching fit(long trouser)"
    },
    {
      name: "Jean",
      imageSrc: "realTrousers/troserjeans.jpg",
      price: `N${22000}.00`,
      description: "Premium Baggy Jeans"
    },
    {
      name: "Shorts",
      imageSrc: "realTrousers/trosershorts.jpg",
      price: `N${12000}.00`,
      description: "Quality Shorts"
    },
    {
      name: "Premium Baggy Jeans",
      imageSrc: "realTrousers/troserpre.jpg",
      price: `N${25000}.00`,
      description: "Premium Baggy Jeans, Quality or Nothing 🔥"
    }
  ];


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let imageCount = 0;
let changer = fileResources1[0];
let changer2 = fileResources1[3];
let changer3 = fileResources1[5];



let newList1 = ["realShoes/shoenewbal2.jpg","realShoes/shoenewbal1.jpg","/realShoes/shoenewbal.jpg"];
let newList2 = ["realShirt/shirtjeanjack4.jpg","realShirt/shirtjeanjac3.jpg","realShirt/shirtjeanjac2.jpg","realShirt/shirtjeanjac1.jpg"];

//update
let newList3 = ["updateShoe/shoebill2.jpg","updateShoe/shoebill1.jpg","updateShoe/shoebill.jpg"];
let newList4 = ["updateShoe/shoedg1.jpg","updateShoe/shoedg.jpg"];
let newList5 = ["updateShoe/shoedor1.jpg","updateShoe/shoedor.jpg"];
let newList6 = ["updateShoe/shoeferr2.jpg","updateShoe/shoeferr1.jpg","updateShoe/shoeferr.jpg"];
let newList7 = ["updateShoe/shoehugo3.jpg","updateShoe/shoehugo2.jpg","updateShoe/shoehugo1.jpg","updateShoe/shoehugo.jpg"]
let newList8 = ["updateShirt/shirtswea3.jpg","updateShirt/shirtswea2.jpg","updateShirt/shirtswea1.jpg","updateShirt/shirtswea.jpg"]
let newList9 = ["updateShirt/shirtleath1.jpg","updateShirt/shirtleath.jpg"];
//end

let list2 = ["realShoes/shoecope1.JPG", "realShoes/shoecope2.JPG", "realShoes/shoecope3.JPG", "realShoes/shoecope.JPG"];

let list3 = ["realShoes/shoetimber1.JPG", "realShoes/shoetimber2.JPG", "realShoes/shoetimber3.JPG", "realShoes/shoetimber.JPG"];
let list4 = ["realShoes/shoewall1.jpg", "realShoes/shoewall2.jpg", "realShoes/shoewall.jpg"];
let list5 = ["realShoes/shoezoom1.JPG", "realShoes/shoezoom2.JPG", "realShoes/shoezoom.JPG"];
let list6 = ["realShoes/shoevenchy1.JPG", "realShoes/shoevenchy.JPG"];
let list7 = ["realShoes/shoesued1.jpg", "realShoes/shoesued.jpg"];
let list8 = ["realShoes/shoeretro2.jpg", "realShoes/shoeretro.jpg", "realShoes/shoeretro.jpg"];
let list9 = ["realShoes/shoeree2.JPG", "realShoes/shoeree1.JPG", "realShoes/shoeree.JPG"];
let list10 = ["realShoes/shoeogiy3.jpg", "realShoes/shoeogiy2.jpg", "realShoes/shoeogiy1.JPG", "realShoes/shoeogiy.JPG"];
let list11 = ["realShoes/shoenikeB2.JPG", "realShoes/shoenikeB1.JPG", "realShoes/shoenikeB.JPG"];
let list12 = ["realShoes/shoelv5.JPG", "realShoes/shoelv4.JPG", "realShoes/shoelv3.jpg", "realShoes/shoelv.JPG"];
let list13 = ["realShoes/shoeloaf2.jpg", "realShoes/shoeloaf1.jpg", "realShoes/shoeloaf.jpg"];
let list14 = ["realShoes/shoekicks2.JPG", "realShoes/shoekicks1.JPG", "realShoes/shoekicks.JPG"];
let list15 = ["realShoes/shoegaze1.JPG", "realShoes/shoegaze.JPG"];
let list16 = ["realShoes/shoeforce1.png", "realShoes/shoeforce.JPG"];
let list17 = ["realShoes/shoefoot6.jpg", "realShoes/shoefoot5.jpg", "realShoes/shoefoot4.jpg", "realShoes/shoefoot.jpg"];
let list18 = ["realShoes/shoedunk3.JPG", "realShoes/shoedunk 1.jpg", "realShoes/shoedunk.jpg"];
let list19 = ["realShoes/shoeDrmart1.JPG", "realShoes/shoeDrmart.JPG"];
let list20 = ["realShoes/shoecope4.JPG", "realShoes/shoecope3.JPG", "realShoes/shoecope2.JPG", "realShoes/shoecope1.JPG", "realShoes/shoecope.JPG"];
let list21 = ["realShoes/shoebala2.jpg", "realShoes/shoebala1.jpg", "realShoes/shoebala.jpg"];
let list22 = ["realShoes/shoeaddi2.JPG", "realShoes/shoeaddi1.JPG", "realShoes/shoeaddi.JPG"];
let list23 = ["realShoes/shoeA.JPG", "realShoes/shoeA1.JPG"];
let list244 = ["realShoes/shoe nak wolfe 1.JPG", "realShoes/shoe nak wolfe.JPG"];
//shirts
let list24 = ["realShirt/shirthoody10.jpg", "realShirt/shirthoody4.jpg", "realShirt/shirthoody7.jpg", "realShirt/shirthoody6.jpg"];
let list25 = ["realShirt/shirtte11.jpg", "realShirt/shirtte10.jpg", "realShirt/shirtte9.jpg", "realShirt/shirtte.jpg"];
let list26 = ["realShirt/shirttees8.jpg", "realShirt/shirttees7.jpg", "realShirt/shirttees6.jpg", "realShirt/shirttees.jpg"];
let list27 = ["realShirt/shirtves6.jpg", "realShirt/shirtves1.jpg", "realShirt/shirtves4.jpg", "realShirt/shirtves.jpg"];
let list28 = ["realShirt/shirtjac3.jpg", "realShirt/shirtjac2.jpg", "realShirt/shirtjac1.jpg", "realShirt/shirtjac.jpg"];

let list29 = ["realShirt/shirtess4.jpg", "realShirt/shirtess3.jpg", "realShirt/shirtess2.jpg", "realShirt/shirtess.jpg"];
let list30 = ["realShirt/shirtciaga2.jpg", "realShirt/shirtciaga1.jpg", "realShirt/shirtciaga.jpg"];
//trousers
let list31 = ["realTrousers/trosershorts4.jpg", "realTrousers/trosershort3.jpg", "realTrousers/trosershorts2.jpg", "realTrousers/trosershorts1.jpg"];
let list32 = ["realTrousers/troserpre6.jpg", "realTrousers/troserpre5.jpg", "realTrousers/troserpre4.jpg", "realTrousers/troserpre.jpg"];
let list33 = ["realTrousers/troserjeans9.jpg", "realTrousers/troserjeans8.jpg", "realTrousers/troserjeans7.jpg", "realTrousers/troserjeans.jpg"];
let list34 = ["marchingFits/matchfitshorA7.JPG", "marchingFits/matchfitshorA6.JPG", "marchingFits/matchfitshorA5.JPG", "marchingFits/matchfitshorA4.JPG"];
let list35 = ["marchingFits/matchfitshor5.JPG", "marchingFits/matchfitshor4.JPG", "marchingFits/matchfitshor3.JPG", "marchingFits/matchfitshor.JPG"];
//slides
let list36 = ["slides/slidescrocs2.jpg", "slides/slidescrocs1.jpg", "slides/slidescrocs.jpg"];
let list37 = ["slides/slidesnike3.jpg", "slides/slidesnike2.jpg", "slides/slidesnike.jpg"];
let list38 = ["slides/slidespams8.jpg", "slides/slidespams7.jpg", "slides/slidespams6.jpg", "slides/slidespams.jpg"];
let list39 = ["slides/slidespcrocs3.jpg", "slides/slidespcrocs2.jpg", "slides/slidespcrocs1.jpg", "slides/slidespcrocs.jpg"];
let list40 = ["slides/slidesride2.jpg", "slides/slidesride1.jpg", "slides/slidesride.jpg"];
let list41 = ["slides/slidestom3.jpg", "slides/slidestom2.jpg", "slides/slidestom1.jpg", "slides/slidestom.jpg"];


function swapImageSource(){
  imageCount++;
  let start = setInterval(() => {
    switch(imageCount){
      case 1:
       img0.src = changer.imageSrc = "fits/fit1.jpg";
        imageCount++;
         break;
      case 2:
       img0.src = changer.imageSrc = "fits/fit2.jpg";
        imageCount++;
         break;
      case 3:
        img0.src = changer.imageSrc = "fits/fit3.jpg";
        imageCount = 1;
        break;
    }
    console.log(imageCount);
  },3000);
}

function swapImageSource2(){
  let index = 0;
time =  setInterval(() => {
    index++;
    
    switch(index){
      case 1:
        img5.src = list8[0];
        break;
      case 2:
        img5.src = list8[1];
        break;
      case 3:
        img5.src = list8[2];
        index = 0;
        break;
    }
    
  },4000);
}
function swapImageSource3() {
  let index = 0;
time =  setInterval(() => {
    index++;
    switch (index) {
    case 1:
      img0.src = list10[0];
      img1.src = list244[0];
      img2.src = list39[0];
      img3.src = list22[0];
      img7.src = list2[0];
      break;
    case 2:
      img0.src = list10[1];
      img1.src = list244[1];
      img2.src = list39[1];
      img3.src = list22[1];
      img7.src = list2[1];
      
      break;
    case 3:
      img0.src = list10[2];
      img2.src = list39[2];
      img3.src = list22[2];
      img7.src = list2[2];
      break;
    case 4:
      img0.src = list10[3];
      img2.src = list39[3];
      img7.src = list2[3];
      
      index = 0;
      break;
  }
  
  }, 4000);

}
function swapImageSource4() {
  let index = 0;
time =  setInterval(() => {
    index++;
    switch(index){
      case 1:
        img1.src = list13[0]
        img2.src = list7[0]
        img3.src = list4[0];
        img4.src = list17[0]
        break;
      case 2:
        img1.src = list13[1]
        img2.src = list7[1]
        img3.src = list4[1];
        img4.src = list17[1];
        break;
      case 3:
        img1.src = list13[2]
        img3.src = list4[2];
        img4.src = list17[2]
        break;
      case 4:  
        img4.src = list17[3]
        break;
        index = 0;
    }
  
  
  }, 4000);

}
function swapImageSource5() {
  let index = 0;
time =  setInterval(() => {
    index++;
    switch(index){
      case 1:
        img1.src = list38[0]
        img2.src = list36[0]
        img3.src = list40[0]
        img4.src = list41[0]
        img5.src = list37[0]
        break;
      case 2:
           img1.src = list38[1]
          img2.src = list36[1]
          img3.src = list40[1]
          img4.src = list41[1]
          img5.src = list37[1]
        break;
      case 3:
          img1.src = list38[2]
          img2.src = list36[2]
          img3.src = list40[2]
          img4.src = list41[2]
          img5.src = list37[2]
        
        break;
      case 4:
           img1.src = list38[3]
          img4.src = list41[3];
      
        
        index = 0;
        break;
        
    }
  
  }, 4000);

}function swapImageSource6() {
  let index = 0;
time =  setInterval(() => {
    index++;
    switch(index){
      case 1:
        img2.src = list33[0]
        img4.src = list26[0]
        img5.src = list24[0]
        img6.src = list6[0]
        img7.src = list34[0]
        break;
      case 2:
        img2.src = list33[1]
        img4.src = list26[1]
        img5.src = list24[1]
        img6.src = list6[1]
        img7.src = list34[1]
        break;
      case 3:
          img2.src = list33[2]
          img4.src = list26[2]
          img5.src = list24[2]
          img7.src = list34[2]
        
        break;
      case 4:
        
          img2.src = list33[3]
          img4.src = list26[3]
        img5.src = list24[3]
          img7.src = list34[3]
        
        index = 0;
        break;
        
    }
  
  }, 4000);

}
function swapImageSource7() {
  let index = 0;
time =  setInterval(() => {
    index++;
     switch(index){
       case 1:
         //img0.src = list24[0]
         img3.src = list12[0]
         img4.src = list11[0]
         img5.src = list25[0]
         img6.src = list28[0]
         img7.src = list31[0]
         break;
       case 2:
          //  img0.src = list24[1]
            img3.src = list12[1]
            img4.src = list11[1]
            img5.src = list25[1]
            img6.src = list28[1]
            img7.src = list31[1]
         break;
        case 3:
            //img0.src = list24[2]
            img3.src = list12[2]
            img4.src = list11[2]
            img5.src = list25[2]
            img6.src = list28[2]
            img7.src = list31[2]
          
          break;
        case 4:
            //img0.src = list24[3]
            img3.src = list12[3]
            img5.src = list25[3]
            img6.src = list28[3]
            img7.src = list31[3]
          
          index = 0;
          break;
          
     }
  
  }, 4000);

}
function swapImageSource8() {
  let index = 0;
time =  setInterval(() => {
    index++;
      switch(index){
      case 1:
        img0.src = list3[0]
        img1.src = list11[0]
        img2.src = list15[0]
        
        img4.src = list9[0]
        img6.src = list5[0]
        img7.src = list16[0]
        break;
      case 2:
        img0.src = list3[1]
        img1.src = list11[1]
          img2.src = list15[1]
         
          img4.src = list9[1]
          img6.src = list5[1]
          img7.src = list16[1]
        break;
      case 3:
         img0.src = list3[2]
        img1.src = list11[2]
        
          
          img4.src = list9[2]
          img6.src = list5[2]
          
        break;
      case 4:
       img0.src = list3[3]
        
        index = 0;
        break;
        
     }
  
  }, 4000);

}
let time;
function swapImageSource9() {
  let index = 0;
time =  setInterval(() => {
    index++;
      switch(index){
        case 1:
           img0.src = list14[0]
          img2.src = list21[0]
          img3.src = list18[0]
          img4.src = list30[0]
          img5.src = list32[0]
          img6.src = list29[0]
          img7.src = list27[0]
          break;
        case 2:
            img0.src = list14[1]
            img2.src = list21[1]
            img3.src = list18[1]
            img4.src = list30[1]
            img5.src = list32[1]
            img6.src = list29[1]
            img7.src = list27[1]
          break;
        case 3:
             img0.src = list14[2]
            img2.src = list21[2]
            img3.src = list18[2]
            img4.src = list30[2]
            img5.src = list32[2]
            img6.src = list29[2]
            img7.src = list27[2]
          break;
        case 4:
            img5.src = list32[3]
            img6.src = list29[3]
            img7.src = list27[3]
          index = 0;
          break;
          
      }

  }, 4000);

}

//update

function swapImageSource10() {
  let index = 0;
  time = setInterval(() => {
    index++;
    switch (index) {
      case 1:
        img1.src = newList3[0]
        img2.src = newList6[0]
        img3.src = newList7[0]
        img4.src = newList5[0]
        img5.src = newList4[0]
        img6.src = newList9[0]
        img7.src = newList8[0];
        break;
      case 2:
        img1.src = newList3[1]
        img2.src = newList6[1]
        img3.src = newList7[1]
        img4.src = newList5[1]
        img5.src = newList4[1]
        img6.src = newList9[1]
        img7.src = newList8[1];
        
        break;
      case 3:
        
        img2.src = newList6[2]
        img3.src = newList7[2]
        img7.src = newList8[2];
        
        break;
      case 4:
        img3.src = newList7[3]
        img7.src = newList8[3];
        index = 0;
        break;

    }

  }, 4000);

}
//end;



  let element1 = fileResources1[0];
  let element2 = fileResources1[1];
  let element3 = fileResources1[2];
  let element4 = fileResources1[3];
  let element5 = fileResources1[4];
  let element6 = fileResources1[5];
  let element7 = fileResources1[6];
  let element8 = fileResources1[7];
  
  let counter = 0;
  let retuner = document.getElementById('returner');
  
  
  //categories
 
  
  function checkLocalStorage() {
    const targetKey = 'boots';
    const targetValue = '1';
    const targetKey2 = 'fits';
  
    const targetkey4 = 'trousers';
    
    let a = Math.floor(Math.random() * (shoes.length - 1) + 1);
    let b = Math.floor(Math.random() * (shoes.length - 1) + 1);
    let c = Math.floor(Math.random() * (shoes.length - 1) + 1);
    let d = Math.floor(Math.random() * (shoes.length - 1) + 1);
    let e = Math.floor(Math.random() * (shoes.length - 1) + 1);
    let f = Math.floor(Math.random() * (shoes.length - 1) + 1);
    let g = Math.floor(Math.random() * (shoes.length - 1) + 1);
    let h = Math.floor(Math.random() * (shoes.length - 1) + 1);
    
    
    
    let a1 = Math.floor(Math.random() * (fits.length - 1) + 1);
    let b1 = Math.floor(Math.random() * (fits.length - 1) + 1);
    let c1 = Math.floor(Math.random() * (fits.length - 1) + 1);
    let d1 = Math.floor(Math.random() * (fits.length - 1) + 1);
    let e1 = Math.floor(Math.random() * (fits.length - 1) + 1);
    let f1 = Math.floor(Math.random() * (fits.length - 1) + 1);
    let g1 = Math.floor(Math.random() * (fits.length - 1) + 1);
    let h1 = Math.floor(Math.random() * (fits.length - 1) + 1);
    
    
    
    let a2 = Math.floor(Math.random() * (shirts.length - 1) + 1);
    let b2 = Math.floor(Math.random() * (shirts.length - 1) + 1);
    let c2 = Math.floor(Math.random() * (shirts.length - 1) + 1);
    let d2 = Math.floor(Math.random() * (shirts.length - 1) + 1);
    let e2 = Math.floor(Math.random() * (shirts.length - 1) + 1);
    let f2 = Math.floor(Math.random() * (shirts.length - 1) + 1);
    let g2 = Math.floor(Math.random() * (shirts.length - 1) + 1);
    let h2 = Math.floor(Math.random() * (shirts.length - 1) + 1);
    
    
    
    let a3 = Math.floor(Math.random() * (trousers.length - 1) + 1);
    let b3 = Math.floor(Math.random() * (trousers.length - 1) + 1);
    let c3 = Math.floor(Math.random() * (trousers.length - 1) + 1);
    let d3 = Math.floor(Math.random() * (trousers.length - 1) + 1);
    let e3 = Math.floor(Math.random() * (trousers.length - 1) + 1);
    let f3 = Math.floor(Math.random() * (trousers.length - 1) + 1);
    let g3 = Math.floor(Math.random() * (trousers.length - 1) + 1);
    let h3 = Math.floor(Math.random() * (trousers.length - 1) + 1);
    setInterval(() => {
      
  if(localStorage.getItem(targetKey) != null){
    
    
        details1.href = "index2.html";
        details2.href = "index2.html";
        details3.href = "index2.html";
        details4.href = "index2.html";
        details5.href = "index2.html";
        details6.href = "index2.html";
        details7.href = "index2.html";
        details8.href = "index2.html";
    
    clearInterval(time);
    img0.src = null;
    img1.src = null;
    img2.src = null;
    img3.src = null;
    img4.src = null;
    img5.src = null;
    img6.src = null;
    img7.src = null;
        
  element1 = shoes[a];
  element2 = shoes[b];
  element3 = shoes[c];
  element4 = shoes[d];
  element5 = shoes[e];
  element6 = shoes[f];
  element7 = shoes[g];
  element8 = shoes[h];

  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
    
    info1.innerHTML = element1.description;
    info2.innerHTML = element2.description;
    info3.innerHTML = element3.description;
    info4.innerHTML = element4.description;
    info5.innerHTML = element5.description;
    info6.innerHTML = element6.description;
    info7.innerHTML = element7.description;
    info8.innerHTML = element8.description;
 //  shuffle(shoes);
   localStorage.removeItem(targetKey);
   returner.style.display = 'block';   
      }else if(localStorage.getItem(targetKey2) != null){
        
      details1.href = "index2.html";
      details2.href = "index2.html";
      details3.href = "index2.html";
      details4.href = "index2.html";
      details5.href = "index2.html";
      details6.href = "index2.html";
      details7.href = "index2.html";
      details8.href = "index2.html";  
        
    clearInterval(time);
    img0.src = null;
    img1.src = null;
    img2.src = null;
    img3.src = null;
    img4.src = null;
    img5.src = null;
    img6.src = null;
    img7.src = null;
        
  element1 = fits[a1];
  element2 = fits[b1];
  element3 = fits[c1];
  element4 = fits[d1];
  element5 = fits[e1];
  element6 = fits[f1];
  element7 = fits[g1];
  element8 = fits[h1];

  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
  // shuffle(shoes);
   localStorage.removeItem(targetKey2);
   returner.style.display = 'block';  
      }else if(localStorage.getItem('shirts') != null){
            
            
        details1.href = "index2.html";
        details2.href = "index2.html";
        details3.href = "index2.html";
        details4.href = "index2.html";
        details5.href = "index2.html";
        details6.href = "index2.html";
        details7.href = "index2.html";
        details8.href = "index2.html";    
    clearInterval(time);        
    img0.src = null;
    img1.src = null;
    img2.src = null;
    img3.src = null;
    img4.src = null;
    img5.src = null;
    img6.src = null;
    img7.src = null;
        
  element1 = shirts[a2];
  element2 = shirts[b2];
  element3 = shirts[c2];
  element4 = shirts[d2];
  element5 = shirts[e2];
  element6 = shirts[f2];
  element7 = shirts[g2];
  element8 = shirts[h2];

  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
  // shuffle(shoes);
   localStorage.removeItem('shirts');
   returner.style.display = 'block';  
      }else if(localStorage.getItem('trousers') != null){
     
     
     details1.href = "index2.html";
     details2.href = "index2.html";
     details3.href = "index2.html";
     details4.href = "index2.html";
     details5.href = "index2.html";
     details6.href = "index2.html";
     details7.href = "index2.html";
     details8.href = "index2.html";
     
    clearInterval(time);        
    img0.src = null;
    img1.src = null;
    img2.src = null;
    img3.src = null;
    img4.src = null;
    img5.src = null;
    img6.src = null;
    img7.src = null;
        
  element1 = trousers[a3];
  element2 = trousers[b3];
  element3 = trousers[c3];
  element4 = trousers[d3];
  element5 = trousers[e3];
  element6 = trousers[f3];
  element7 = trousers[g3];
  element8 = trousers[h3];

  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
 //  shuffle(shoes);
   localStorage.removeItem('trousers');
   returner.style.display = 'block';  
      }
      
    },1000);
  
    
  }
  
  //search
  function getSearchResult(){
    
    let land = setInterval(() => {
      if(localStorage.getItem('searchResults') != null){
        let search = localStorage.getItem('searchResults');
        let convertBack = JSON.parse(search);
        element1 = convertBack;
        name1.innerHTML = element1.name;
        img0.src = element1.imageSrc;
        price0.innerHTML = element1.price;
        info1.innerHTML = element1.description;
        console.log(element1.name);
        localStorage.removeItem('searchResults');
        clearInterval(time);
        clearInterval(land);
        details1.href = "index2.html";
        details2.href = "index2.html";
        details3.href = "index2.html";
        details4.href = "index2.html";
        details5.href = "index2.html";
        details6.href = "index2.html";
        details7.href = "index2.html";
        details8.href = "index2.html";
      }else{
        
      }
      
    },1000);
  }
  
  
  let currentP;
  let backTract;
  let clicker = false;
  //back button
  returner.addEventListener('click', () => {
   //shuffle(fileResources1);
   if (localStorage.getItem('currentPage') != null) {
     currentP = localStorage.getItem('currentPage');
   
   }
   backTract = parseInt(currentP,10);
   backTract--;
   if(backTract == 1){
      page = 1;
      localStorage.removeItem('currentPage');
      localStorage.setItem('currentPage',page);
      window.location.href = "index2.html";
   }else if(backTract == 2){
       page = 2;
       localStorage.removeItem('currentPage');
       localStorage.setItem('currentPage', page);
       window.location.href = "index2.html";
   }else if(backTract == 3){
       page = 3;
       localStorage.removeItem('currentPage');
       localStorage.setItem('currentPage', page);
       window.location.href = "index2.html";
   }else if(backTract == 4){
        page = 4;
        localStorage.removeItem('currentPage');
        localStorage.setItem('currentPage', page);
        window.location.href = "index2.html";
   }else if(backTract == 5){
     page = 5;
     localStorage.removeItem('currentPage');
     localStorage.setItem('currentPage', page);
     window.location.href = "index2.html";
   }else if(backTract == 6){
     page = 6;
     localStorage.removeItem('currentPage');
     localStorage.setItem('currentPage', page);
     window.location.href = "index2.html";
   }else if(backTract == 7){
     page = 7;
     localStorage.removeItem('currentPage');
     localStorage.setItem('currentPage', page);
     window.location.href = "index2.html";
   }else if(backTract == 8){
    page = 8;
    localStorage.removeItem('currentPage');
    localStorage.setItem('currentPage', page);
    window.location.href = "index2.html";
   }else if(backTract == 9){
     page = 9;
     localStorage.removeItem('currentPage');
     localStorage.setItem('currentPage', page);
     window.location.href = "index2.html";
     
   }else if (backTract == 10) {
    page = 10;
    localStorage.removeItem('currentPage');
    localStorage.setItem('currentPage', page);
    window.location.href = "index2.html";
   } else if (backTract == 11) {
    page = 11;
    localStorage.removeItem('currentPage');
    localStorage.setItem('currentPage', page);
    window.location.href = "index2.html";
   }else if (backTract == 12) {
    page = 12;
    localStorage.removeItem('currentPage');
    localStorage.setItem('currentPage', page);
    window.location.href = "index2.html";
   }else if (backTract == 13) {
    page = 13;
    localStorage.removeItem('currentPage');
    localStorage.setItem('currentPage', page);
    window.location.href = "index2.html";
   }else if (backTract == 14) {
    page = 14;
    localStorage.removeItem('currentPage');
    localStorage.setItem('currentPage', page);
    window.location.href = "index2.html";
   }else if (backTract == 15) {
    page = 15;
    localStorage.removeItem('currentPage');
    localStorage.setItem('currentPage', page);
    window.location.href = "index2.html";
   }else if (backTract == 16) {
    page = 16;
    localStorage.removeItem('currentPage');
    localStorage.setItem('currentPage', page);
    window.location.href = "index2.html";
   }else if (backTract == 17) {
    page = 17;
    localStorage.removeItem('currentPage');
    localStorage.setItem('currentPage', page);
    window.location.href = "index2.html";
   }else if (backTract == 18) {
    page = 18;
    localStorage.removeItem('currentPage');
    localStorage.setItem('currentPage', page);
    window.location.href = "index2.html";
   }else if (backTract == 19) {
    page = 19;
    localStorage.removeItem('currentPage');
    localStorage.setItem('currentPage', page);
    window.location.href = "index2.html";
   }else if (backTract == 20) {
    page = 20;
    localStorage.removeItem('currentPage');
    localStorage.setItem('currentPage', page);
    window.location.href = "index2.html";
   }else if (backTract == 21) {
    page = 21;
    localStorage.removeItem('currentPage');
    localStorage.setItem('currentPage', page);
    window.location.href = "index2.html";
   }else if(backTract == 0){
     page = 0;
     localStorage.removeItem('currentPage');
     localStorage.setItem('currentPage', page);
     window.location.href = "index2.html";
   }else{
     window.location.href = "index2.html";
   }
   console.log(backTract);
  returner.style.display = 'none';
  
   
  });
  
  
  //starting
  let page = 0;
  let check2;
  let frame = document.getElementById('firstF');
  let frame2 = document.getElementById('frame');
  
 async function wait(){
   return new Promise((resolve, reject) => {
      setTimeout(() => {
        frame2.src = "announcement.html";
        resolve();
      }, 1000);
   }).then(() => {
        frame.src = "categories.html";
   });
    
  }
  
  let showNewProduct = document.querySelector('.new-product');
  
  //fetchData
  
  async function fetchData() {
  try {
    const response = await fetch('uploads.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Parse JSON data from the response

    // Clear existing arrays before populating them
    responses1 = [];
    responses2 = [];
    responses3 = [];
    responses4 = [];
    responses5 = [];
    responses6 = [];
    responses7 = [];
    responses8 = [];
    responses9 = [];
    responses10 = [];
    responses11 = [];
    responses12 = [];
    responses13 = [];

    // Categorize data into respective arrays based on index
    data.forEach((element, index) => {
      if (index >= 0 && index < 8) {
        responses1.push({
          name: element.fileName,
          imageSrc: element.fileExt,
          price: `N${element.price}`,
          description: element.description
        });
      } else if (index >= 8 && index < 16) {
        responses2.push({
          name: element.fileName,
          imageSrc: element.fileExt,
          price: `N${element.price}`,
          description: element.description
        });
      } else if (index >= 16 && index < 24) {
        responses3.push({
          name: element.fileName,
          imageSrc: element.fileExt,
          price: `N${element.price}`,
          description: element.description
        });
      } else if (index >= 24 && index < 32) {
        responses4.push({
          name: element.fileName,
          imageSrc: element.fileExt,
          price: `N${element.price}`,
          description: element.description
        });
      } else if (index >= 32 && index < 40) {
        responses5.push({
          name: element.fileName,
          imageSrc: element.fileExt,
          price: `N${element.price}`,
          description: element.description
        });
      } else if (index >= 40 && index < 48) {
        responses6.push({
          name: element.fileName,
          imageSrc: element.fileExt,
          price: `N${element.price}`,
          description: element.description
        });
      } else if (index >= 48 && index < 56) {
        responses7.push({
          name: element.fileName,
          imageSrc: element.fileExt,
          price: `N${element.price}`,
          description: element.description
        });
      } else if (index >= 56 && index < 64) {
        responses8.push({
          name: element.fileName,
          imageSrc: element.fileExt,
          price: `N${element.price}`,
          description: element.description
        });
      } else if (index >= 64 && index < 72) {
        responses9.push({
          name: element.fileName,
          imageSrc: element.fileExt,
          price: `N${element.price}`,
          description: element.description
        });
      } else if (index >= 72 && index < 80) {
        responses10.push({
          name: element.fileName,
          imageSrc: element.fileExt,
          price: `N${element.price}`,
          description: element.description
        });
      } else if (index >= 80 && index < 88) {
        responses11.push({
          name: element.fileName,
          imageSrc: element.fileExt,
          price: `N${element.price}`,
          description: element.description
        });
      } else if (index >= 88 && index < 96) {
        responses12.push({
          name: element.fileName,
          imageSrc: element.fileExt,
          price: `N${element.price}`,
          description: element.description
        });
      } else if (index >= 96 && index < 104) {
        responses13.push({
          name: element.fileName,
          imageSrc: element.fileExt,
          price: element.price,
          description: element.description
        });
      }
    });

    console.log('responses1:', responses1); // Log responses1 for verification

    // Resolve the promise after processing the data
    return Promise.resolve();

  } catch (error) {
    console.error('Error fetching data:', error);
    // Reject the promise if there's an error
    return Promise.reject(error);
  }
}

  //awaiters
  async function initialWait1(){
      await fetchData();
      if (responses1.length == 8) {
        page = 9;
      } else {
        page = 0;
      }
    }
    async function initialWait2() {
      await fetchData();
      if (responses2.length == 8) {
        page = 10;
      } else {
        page = 0;
      }
    }
    async function initialWait3() {
      await fetchData();
      if (responses3.length == 8) {
        page = 11;
      } else {
        page = 0;
      }
    }
    async function initialWait5() {
      await fetchData();
      if (responses4.length == 8) {
        page = 12;
      } else {
        page = 0;
      }
    }
    async function initialWait6() {
      await fetchData();
      if (responses5.length == 8) {
        page = 13;
      } else {
        page = 0;
      }
    }
    async function initialWait7() {
      await fetchData();
      if (responses6.length == 8) {
        page = 14;
      } else {
        page = 0;
      }
    }
    async function initialWait8() {
      await fetchData();
      if (responses7.length == 8) {
        page = 15;
      } else {
        page = 0;
      }
    }
    async function initialWait9() {
      await fetchData();
      if (responses8.length == 8) {
        page = 16;
      } else {
        page = 0;
      }
    }
    async function initialWait10() {
      await fetchData();
      if (responses9.length == 8) {
        page = 17;
      } else {
        page = 0;
      }
    }
    async function initialWait11() {
      await fetchData();
      if (responses10.length == 8) {
        page = 18;
      } else {
        page = 0;
      }
    }
    async function initialWait12() {
      await fetchData();
      if (responses11.length == 8) {
        page = 19;
      } else {
        page = 0;
      }
    }
    async function initialWait13() {
      await fetchData();
      if (responses12.length == 8) {
        page = 20;
      } else {
        page = 0;
      }
    }
    async function initialWait14() {
      await fetchData();
      if (responses13.length == 8) {
        page = 21;
      } else {
        page = 0;
      }
    }
    
  //awaiters
  
  
  
  // Function to listen for changes in the database
  let lastEventCount = parseInt(localStorage.getItem('lastEventCount')) || 0; // Initialize from localStorage or 0
  
  function listenForEvents() {
    
    
    const eventsRef = database.ref('bell');
  
    eventsRef.on('value', (snapshot) => {
      const events = snapshot.val();
  
      if (events) {
        const eventCount = Object.keys(events).length; // Get the number of events
  
        if (eventCount > lastEventCount) {
          // New event has been added
          lastEventCount = eventCount; // Update the count
          getMain();
          showNewProduct.style.display = "block"; // Show new product
          showNewProduct.addEventListener('click',() => {
            localStorage.setItem('lastEventCount', lastEventCount); // Update local storage
          })
        } else if (eventCount === lastEventCount) {
          
          if (showNewProduct.style.display === "block") {
           showNewProduct.style.display = "none"; // Hide if no new events
          }
        }
      } else {
        console.log('No events found.');
      }
    });
  }
  
  // Call this function once to start listening

  


  
  //window.onload()
window.onload = function (){
  wait();
  fetchData();
  listenForEvents();
  let colors = ["blue","green","pink","yellow"]
  //new-product
  
  let productText = document.querySelector('.product-text');
  let vibrate = document.querySelector('.vibrate');
//  let icon = document.querySelector('.badge');
  
  setInterval(() => {
    let lan = Math.floor(Math.random() * colors.length);
    productText.style.color = colors[lan];
    vibrate.style.color = colors[lan];
  },200);
  
  if(localStorage.getItem('clicked') != null){
  if(localStorage.getItem('clicked') == false){
    showNewProduct.style.display = "block";
    
  }else{
    showNewProduct.style.display = "none";
  }
  }else{
    
  }
  //end
  if(localStorage.getItem('count') != null){
    dis.style.display = "block";
    dis.classList.add('slideIn');
    let pack = localStorage.getItem('count');
    let pack2 = parseInt(pack,10);
    num.innerHTML = pack2;
    counter = pack2;
    console.log(pack2);
  }
  
  document.querySelector('.holder').style.display = 'block';
  setTimeout(() => {
    document.querySelector('.holder').style.display = 'none';
  },2000);
 
 if(localStorage.getItem('selectedColor') != null){
   let colored = localStorage.getItem('selectedColor');
   document.body.style.backgroundColor = colored;
 }
  getSearchResult();
  checkLocalStorage();
  
  
  //main
  if(page == 0){
    //swapImageSource2();
    fileResources11();
    //localStorage.setItem('first',page);
    page = 1;
  }else{
    
  }

if(localStorage.getItem('currentPage') != null){
  check2 = localStorage.getItem('currentPage');
  
  }
  
  if(check2 == 1){
    //localStorage.removeItem('first');
    //shuffle(fileResources2);
    swapImageSource3();
    fileResources22();
    localStorage.setItem('count',counter);
    returner.style.display = 'block';
    page = 2;
    
  }else if(check2 == 2){
     //shuffle(fileResources3);
     swapImageSource4();
    fileResources33();
    localStorage.setItem('count',counter);
    retuner.style.display = 'block';
    page = 3;
    
  }else if(check2 == 3){
     //shuffle(fileResources4);
     swapImageSource5();
    fileResources44();
    localStorage.setItem('count',counter);
    returner.style.display = 'block';
    page = 4;
    
  }else if(check2 == 4){
    // shuffle(fileResources5);
     swapImageSource6();
     fileResources55();
     localStorage.setItem('count',counter);
     returner.style.display = 'block';
     page = 5;
     
  }else if(check2 == 5){
    // shuffle(fileResources6);
     swapImageSource7();
     fileResources66();
     localStorage.setItem('count',counter);
     returner.style.display = 'block';
     page = 6;
     
  }else if(check2 == 6){
    // shuffle(fileResources7);
     swapImageSource8();
     fileResources77();
     localStorage.setItem('count',counter);
     returner.style.display = 'block';
     page = 7;
     
  }else if(check2 == 7){
    // shuffle(fileResources8);
     swapImageSource9();
     fileResources88();
     localStorage.setItem('count',counter);
     returner.style.display = 'block';
     page = 8;
  }else if(check2 == 8){
    // shuffle(fileResources8);
    swapImageSource10();
    fileResources99();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
    
    initialWait1();
    
  }else if(check2 == 9){
    upload1();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
   
    initialWait2();
  }else if(check2 == 10){
    upload2();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
  
    initialWait3();
  }else if(check2 == 11){
    upload3();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
  
    initialWait5();
  }else if(check2 == 12){
    upload4();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
    
   initialWait6();
   
  }else if(check2 == 13){
    upload5();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
  
    initialWait7();
     
  }else if(check2 == 14){
    upload6();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
    
    initialWait8();
  
  }else if(check2 == 15){
    upload7();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
  
    initialWait9();
  }else if(check2 == 16){
    upload8();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
  
    initialWait10();
  
  }else if(check2 == 17){
    upload9();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
  
    initialWait11();
  
  }else if(check2 == 18){
    upload10();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
  
    initialWait12();
  
  }else if(check2 == 19){
    upload11();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
  
    initialWait13();
  
  }else if(check2 == 20){
    upload12();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
  
    initialWait14();
  }else if(check2 == 21){
    upload13();
    localStorage.setItem('count', counter);
    returner.style.display = 'block';
    page = 0;
  
  }
  //update;  
}

let check;
let next = document.getElementById('next');
next.addEventListener('click', () => {
  localStorage.removeItem('currentPage');
  localStorage.setItem('currentPage',page);
  window.location.href = "index2.html";
});


let cart2 = document.getElementById('cart');

let cart3 = document.getElementById('Amount');

  function handleToast(){
    if(counter === 0){
      iziToast.warning({
        title: 'Pick',
        message: 'Please Select an item',
        timeout: 2000,
    })
   } else{
      cart();
    }
  }
    
    
cart2.addEventListener('click',handleToast);
cart3.addEventListener('click',handleToast);
  
  
let valid1 = false;
let valid2 = false;
let valid3 = false;
let valid4 = false;
let valid5 = false;
let valid6 = false;
let valid7 = false;
let valid8 = false;


let tracker1 = 0;
let tracker2 = 0;
let tracker3 = 0;
let tracker4 = 0;
let tracker5 = 0;
let tracker6 = 0;
let tracker7 = 0;
let tracker8 = 0;

 function iterator(obj){
  for(const key in obj){
    if(obj.hasOwnProperty(key)){
      localStorage.setItem(key,obj[key]);
    }
  }
}

let value1;
let value2;
let value3;
let value4;
let value5;
let value6;
let value7;
let value8;

function run(event) {
  
   value1 = event.target;
   value1.disabled = true; 
   
   
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear1.style.display = 'inline';
    
    if(!valid1){
    counter++;
    localStorage.setItem('count',counter);
    valid1 = true;
    }
    num.innerHTML = counter;
    
    
    
    
    const data1 = {
      productName : element1.name,
      productImageSrc : element1.imageSrc,
      productPrice: element1.price
    };
    
    iterator(data1);
    
    tracker1 = 1;
    localStorage.setItem("tracker1",tracker1);
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
}

function run2(event) {
  
  value2 = event.target;
   value2.disabled = true; 
  
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear2.style.display = 'inline';
    
    if (!valid2) {
      counter++;
      localStorage.setItem('count',counter);
      valid2 = true;
    }
    num.innerHTML = counter;
    
    
    const data2 = {
      productName1: element2.name,
      productImageSrc1: element2.imageSrc,
      productPrice1: element2.price
    };
    
    iterator(data2);
    
    tracker2 = 1;
    localStorage.setItem("tracker2",tracker2);
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
    
}

function run3(event) {
  
  value3 = event.target;
  value3.disabled = true;
  
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear3.style.display = 'inline';
    
    if (!valid3) {
      counter++;
      localStorage.setItem('count',counter);
      valid3 = true;
    }
    num.innerHTML = counter;
    
    const data3 = {
      productName2: element3.name,
      productImageSrc2: element3.imageSrc,
      productPrice2: element3.price
    };
    
    iterator(data3);
    tracker3 = 1;
    localStorage.setItem("tracker3", tracker3);
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
    
}

function run4(event) {
  
  value4 = event.target;
  value4.disabled = true;
  
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear4.style.display = 'inline';
    
    if (!valid4) {
      counter++;
      localStorage.setItem('count',counter);
      valid4 = true;
    }
    num.innerHTML = counter;
    
    const data4 = {
      productName3: element4.name,
      productImageSrc3: element4.imageSrc,
      productPrice3: element4.price
    };
    
    iterator(data4);
    
    tracker4 = 1;
    localStorage.setItem("tracker4", tracker4);
    
    
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
    
}
function run5(event) {
  
  value5 = event.target;
  value5.disabled = true;
  
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear5.style.display = 'inline';
    
    if (!valid5) {
      counter++;
      localStorage.setItem('count',counter);
      valid5 = true;
    }
    num.innerHTML = counter;
    
    const data5 = {
      productName4: element5.name,
      productImageSrc4: element5.imageSrc,
      productPrice4: element5.price
    };
    
    iterator(data5);
    
    tracker5 = 1;
    localStorage.setItem("tracker5", tracker5);
    
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
    
}
function run6(event) {
  
  value6 = event.target;
  value6.disabled = true;
  
  dis.style.display = "block";
  dis.classList.add('slideIn');
  clear6.style.display = 'inline';
  
  if (!valid6) {
    counter++;
    localStorage.setItem('count',counter);
    valid6 = true;
  }
  num.innerHTML = counter;
  
  const data6 = {
      productName5: element6.name,
      productImageSrc5: element6.imageSrc,
      productPrice5: element6.price
    };
    
    iterator(data6);
    
    tracker6 = 1;
    localStorage.setItem("tracker6", tracker6);
    
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
    
}
function run7(event) {
  
  value7 = event.target;
  value7.disabled = true;
  
  dis.style.display = "block";
  dis.classList.add('slideIn');
  clear7.style.display = 'inline';
  
  if (!valid7) {
    counter++;
    localStorage.setItem('count',counter);
    valid7 = true;
  }
  num.innerHTML = counter;
  
  const data7 = {
      productName6: element7.name,
      productImageSrc6: element7.imageSrc,
      productPrice6: element7.price
    };
    
    iterator(data7);
    tracker7 = 1;
    localStorage.setItem("tracker7", tracker7);
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
    
}
function run8(event) {
  
  value8 = event.target;
  value8.disabled = true;
  
  dis.style.display = "block";
  dis.classList.add('slideIn');
  clear8.style.display = 'inline';
  
  if (!valid8) {
    counter++;
    localStorage.setItem('count',counter);
    valid8 = true;
  }
  num.innerHTML = counter;
  
  const data8 = {
      productName7: element8.name,
      productImageSrc7: element8.imageSrc,
      productPrice7: element8.price
    };
    
    iterator(data8);
    tracker8 = 1;
    localStorage.setItem("tracker8", tracker8);
    if(localStorage.getItem('cleared') != null){
      localStorage.removeItem('cleared');
    }
    
}

function clearCart1() {
  
  if(value1){
  value1.disabled = false;
  }
  
  counter--;
  valid1 = false;
  clear1.style.display = 'none';
  num.innerHTML = counter;
  localStorage.removeItem("tracker1");
  h
  
}
function clearCart2() {
  
  if(value2){
  value2.disabled = false;
  }
  
  
  value2.enabled = true;
  counter--;
  valid2 = false;
  clear2.style.display = 'none';
  num.innerHTML = counter;
  localStorage.removeItem("tracker2");
  
}
function clearCart3() {
  
  if (value3) {
    value3.disabled = false;
  }
  
  value3.enabled = true;
counter--;
valid3 = false;
clear3.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker3");
}

function clearCart4(){
  
  if (value4) {
    value4.disabled = false;
  }
  
  value4.enabled = true;
counter--;
valid4 = false;
clear4.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker4");

}

function clearCart5() {
  
  if (value5) {
    value5.disabled = false;
  }
  
  value5.enabled = true;
counter--;
valid5 = false;
clear5.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker5");

}

function clearCart6() {
  
  if (value6) {
    value6.disabled = false;
  }
  
  value6.enabled = true;
counter--;
valid6 = false;
clear6.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker6");

}


function clearCart7() {
  
  if (value7) {
    value7.disabled = false;
  }
  
  value7.enabled = true;
counter--;
valid7 = false;
clear7.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker7");

}



function clearCart8() {
  
  if (value8) {
    value8.disabled = false;
  }
  
  value8.enabled = true;
counter--;
valid8 = false;
clear8.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker8");

}
function cart(){
  localStorage.setItem('count',counter);
  window.location.href = "index4.html";
}

let shipping = document.getElementById('ship');
let toastTrack = 0;


  document.getElementById('ship').addEventListener('click', () => {
  const totalDuration = 10000; // 10 seconds

  // Show the iziToast with the loader
  iziToast.success({
    title: 'Connecting to server...',
    message: 'Kindly check your mail for your invoice-reciept. You will be required to attach it for delivery',
    timeout: totalDuration, // Keep the toast visible for the entire duration
    progressBar: true, // Disable the default progress bar
    position: 'topRight',
    overlay: true,
    overlayClose: false,
    icon: 'info',
    
  });

  // Redirect after the duration
  setTimeout(() => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeef8AZwm5mA-cUYpWjJ6f39PGXixGILoF4_9oPiDG7Ud46tg/viewform?usp=sf_link";
  }, totalDuration);
});
// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var items = document.querySelectorAll('.item1');

  items.forEach(function(item) {
    if (isInViewport(item)) {
      item.classList.add('visible');
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
      item.classList.remove('visible');
    }
  });
}


// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();

// Show the button when the user reaches the bottom of the page
window.addEventListener('', function() {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Function to smoothly scroll back to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
function home(){
  window.location.href = "index.html";
}


function search(){
  window.location.href = "search.html";
}

function settings(){
  document.getElementById('pop').style.display = 'block';
}


const colorForm = document.getElementById('colorForm');
const pop = document.getElementById('pop');

colorForm.addEventListener('change', function() {
  const selectedColor = document.querySelector('input[name="color"]:checked').value;
  document.body.style.backgroundColor = selectedColor;
  localStorage.setItem('selectedColor',selectedColor);
});

const backer = document.getElementById('backer');
backer.addEventListener('click', function() {
// Go back or perform another action
pop.style.display = "none";
});

function coming (){
  iziToast.success({
    title:'Coming soon'
  });
}

let details1 = document.querySelector('.details1');
let details2 = document.querySelector('.details2');
let details3 = document.querySelector('.details3');
let details4 = document.querySelector('.details4');
let details5 = document.querySelector('.details5');
let details6 = document.querySelector('.details6');
let details7 = document.querySelector('.details7');
let details8 = document.querySelector('.details8');

let track1 = 1;
let track2 = 2;
let track3 = 3;
let track4 = 4;
let track5 = 5;
let track6 = 6;
let track7 = 7;
let track8 = 8;



details1.addEventListener('click', () => {
  
  localStorage.setItem('imageTracker',track1);
})
details2.addEventListener('click', () => {
  localStorage.setItem('imageTracker',track2);
})
details3.addEventListener('click', () => {
localStorage.setItem('imageTracker',track3);
})
details4.addEventListener('click', () => {
localStorage.setItem('imageTracker',track4);
})
details5.addEventListener('click', () => {
localStorage.setItem('imageTracker',track5);
})
details6.addEventListener('click', () => {
localStorage.setItem('imageTracker',track6);
})
details7.addEventListener('click', () => {
localStorage.setItem('imageTracker',track7);
})
details8.addEventListener('click', () => {
localStorage.setItem('imageTracker',track8);
})

function later() {
  iziToast.success({
    title: 'Coming soon',
    timeOut: 2000
  });
}

function info() {
  iziToast.success({
    title: 'About me',
    message: 'Faith Ipinyomi ©Fashion Junkie All rights reserved',
    timeOut: 20000

  });
}

let clicked = false;
function newProduct(){
  localStorage.setItem('clicked',false);
  let viewProduct = localStorage.getItem('fetchPage');
  page = viewProduct;
  localStorage.removeItem('currentPage');
  localStorage.setItem('currentPage', page);
  window.location.href = "index2.html";
}

const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY_PLACEHOLDER",
  authDomain: "validator-533ce.firebaseapp.com",
  projectId: "validator-533ce",
  storageBucket: "validator-533ce.appspot.com",
  messagingSenderId: "367967988323",
  appId: "1:367967988323:web:18390dc55e99e718d9a656",
  measurementId: "G-0KGQDK3R0Y",
  databaseURL: "https://validator-533ce-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
let realPage;

let doc = document.getElementById('doc');
let doc1 = document.getElementById('doc1');
let rang = new Date().toISOString();
function displayNewProduct(){
  
  
  let key2 = document.getElementById("keys").value;
  let key3 = document.getElementById("keys1").value;
  console.log(key2);
  if(key2 === "5422" || key2 === "6984"|| key3 === "5422" || key3 === "6984"){
  localStorage.removeItem('clicked');
  const dataRef = database.ref('page');
  //ring
  const dataRef2 = database.ref('bell').push();
  dataRef2.set({
    rang: rang
  }).then(() => {
    iziToast.success({
      message: 'Rang Successfully'
    });
  }).catch((error) => {
    iziToast.warning({
      message: 'Failed to ring'
    })
  });
  //ring
  dataRef.once('value')
  .then((snapshot) => {
    const data = snapshot.val().page;
    realPage = parseInt(data,10);
    localStorage.setItem('fetchPage',realPage);
    window.location.href = "index2.html";
  }).catch((error) => {
    iziToast.warning({
      message:`Unable to fetch data ${error}`
    });
  });
  }else{
    iziToast.warning({
      message:'Invalid key'
    })
  }
}
 function displayNewProduct1(){
   doc.style.display = "block";
 }
 function viewPager(){
   console.log('clicked')
    doc1.style.display = "block";
 }
 
 function getMain(){
   const dataRef = database.ref('page');
   dataRef.once('value')
  .then((snapshot) => {
    const data = snapshot.val().page;
    realPage = parseInt(data,10);
    localStorage.setItem('fetchPage',realPage);
    iziToast.success({
      message:'Data updated successfully'
    })
  }).catch((error) => {
    iziToast.warning({
      message:`Unable to fetch data ${error}`
    });
  });
  
 }
 
 const allIcons = document.querySelector('.allIcons');
 const mediaQuery = window.matchMedia("(max-width: 600px)");
 let can = document.querySelector('.con');
 let number3 = document.getElementById('Amount');
 let number2 = document.getElementById('num');
 
 let timeout;

    con.addEventListener('scroll', () => {
        if (mediaQuery.matches) {
            allIcons.style.opacity = "0.1";
            number3.style.opacity = "0.1";
            number2.style.opacity = "0.1";

            clearTimeout(timeout); // Clear the timeout if scrolling continues
            timeout = setTimeout(() => {
                allIcons.style.opacity = "1"; 
                number3.style.opacity = "1";
                number2.style.opacity = "1";// Reset opacity after scrolling stops
            }, 200); // Adjust timeout duration as needed
        } else {
            allIcons.style.opacity = "1"; // Reset opacity immediately if not in media query
        }
    
 });