import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
 
export default class SimpleSlider extends React.Component {
  render() {
 
    return (
      <CarouselProvider
        naturalSlideWidth={30}
        naturalSlideHeight={30}
        totalSlides={7}
        visibleSlides={3}
        dragEnabled= {true}
        playDirection='forward'
      >
        <Slider >
          <Slide index={0}><div class="product-item">
						<div class="pi-pic1">
							<img src="./img/1.jpg" alt=""/>
							<div class="pi-links">
								<a href="#" class="add-card"><i class="flaticon-bag"></i><span>ADD TO CART</span></a>
								<a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top </p>
						</div>
					</div></Slide>
          <Slide index={1}><div class="product-item">
						<div class="pi-pic1">
							<img src="./img/2.jpg" alt=""/>
							<div class="pi-links">
								<a href="#" class="add-card"><i class="flaticon-bag"></i><span>ADD TO CART</span></a>
								<a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top </p>
						</div>
					</div></Slide>
          <Slide index={2}><div class="product-item">
						<div class="pi-pic1">
							<img src="./img/3.jpg" alt=""/>
							<div class="pi-links">
								<a href="#" class="add-card"><i class="flaticon-bag"></i><span>ADD TO CART</span></a>
								<a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top </p>
						</div>
					</div></Slide>
                    <Slide index={4}><div class="product-item">
						<div class="pi-pic1">
							<img src="./img/4.jpg" alt=""/>
							<div class="pi-links">
								<a href="#" class="add-card"><i class="flaticon-bag"></i><span>ADD TO CART</span></a>
								<a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top </p>
						</div>
					</div>
                    </Slide>
                    <Slide index={5}><div class="product-item">
						<div class="pi-pic1">
							<img src="./img/5.jpg" alt=""/>
							<div class="pi-links">
								<a href="#" class="add-card"><i class="flaticon-bag"></i><span>ADD TO CART</span></a>
								<a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top </p>
						</div>
					</div>
                    </Slide>
                    <Slide index={6}><div class="product-item">
						<div class="pi-pic1">
							<img src="./img/6.jpg" alt=""/>
							<div class="pi-links">
								<a href="#" class="add-card"><i class="flaticon-bag"></i><span>ADD TO CART</span></a>
								<a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top </p>
						</div>
					</div>
                    </Slide>
                    <Slide index={7}><div class="product-item">
						<div class="pi-pic1">
							<img src="./img/7.jpg" alt=""/>
							<div class="pi-links">
								<a href="#" class="add-card"><i class="flaticon-bag"></i><span>ADD TO CART</span></a>
								<a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top </p>
						</div>
					</div>
                    </Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}