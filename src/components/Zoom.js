import React, { Component } from "react";
import ImageZoom from "react-medium-image-zoom";


export default class Zoom extends Component {
  render() {
    return (
      <div class="container">
        <h1>Image Zoom</h1>
        {/* <p>
          Trust fund seitan chia, wolf lomo letterpress Bushwick before they
          sold out. Carles kogi fixie, squid twee Tonx readymade cred typewriter
          scenester locavore kale chips vegan organic. Meggings pug wolf
          Shoreditch typewriter skateboard. McSweeney's iPhone chillwave, food
          truck direct trade disrupt flannel irony tousled sweater single-origin
          coffee. Organic disrupt bicycle rights, tattooed messenger bag flannel
          craft beer fashion axe bitters. Readymade sartorial craft beer, quinoa
          sustainable butcher Marfa Echo Park Terry Richardson gluten-free
          flannel retro cred mlkshk banjo. Salvia 90's art party Blue Bottle,
          PBR&B cardigan 8-bit.
        </p> */}
        <ImageZoom
          image={{
            src:
              "https://images.unsplash.com/photo-1547043688-32b236694495?fit=crop&w=700&q=50",
            alt: "Rhone Glacier, Switzerland",
            className: "img"
          }}
          zoomImage={{
            src:
              "https://images.unsplash.com/photo-1547043688-32b236694495?fit=crop&w=1700&q=80",
            alt: "Rhone Glacier, Switzerland",
            className: "img--zoomed"
          }}
        />
        {/* <p>
          Meggings irony fashion axe, tattooed master cleanse Blue Bottle
          stumptown bitters authentic flannel freegan paleo letterpress ugh
          sriracha. Wolf PBR&B art party aesthetic meh cliche. Sartorial before
          they sold out deep v, aesthetic PBR&B craft beer post-ironic synth
          keytar pork belly skateboard pour-over. Tonx cray pug Etsy, gastropub
          ennui wolf ethnic Odd Future viral master cleanse skateboard banjo.
          Pitchfork scenester cornhole, whatever try-hard ethnic banjo +1
          gastropub American Apparel vinyl skateboard Shoreditch seitan. Blue
          Bottle keffiyeh Austin Helvetica art party. Portland ethnic fixie,
          beard retro direct trade ugh scenester Tumblr readymade authentic
          plaid pickled hashtag biodiesel.
        </p> */}
      </div>
    );
  }
}

