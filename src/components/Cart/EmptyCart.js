import React from "react";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1>Your cart is currently empty</h1>
          <Images/>
        </div>
      </div>
    </div>

  );
}
const Favourites=[
  {
    id: 1,
    title: "Google Pixel - Black",
    img: "img/1.jpg",
    price: 10,
    company: "GOOGLE",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 2,
    title: "Samsung S7",
    img: "img/2.jpg",
    price: 16,
    company: "SAMSUNG",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 3,
    title: "HTC 10 - Black",
    img: "img/3.jpg",
    price: 8,
    company: "htc",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 4,
    title: "HTC 10 - White",
    img: "img/4.jpg",
    price: 18,
    company: "htc",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
]
function Images() {
  return (
    <div class="container">
    <div class="row">
      {Favourites.map(Favourite => (
        <div class="col-lg-3 col-sm-6">
        <div class="product-item">
          <div class="pi-pic">
      <div class="tag-new">New</div>
            <img src={Favourite.img} alt=""/>
            <div class="pi-links">
              <a href="#" class="add-card"><i class="flaticon-bag"></i><span>ADD TO CART</span></a>
              <a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
            </div>
            </div>
          <div class="pi-text">
            <h6>$35,00</h6>
            <p>{Favourite.title}</p>
          </div>
        </div>
        </div>
      ))}
    </div>
    </div>
  );
}