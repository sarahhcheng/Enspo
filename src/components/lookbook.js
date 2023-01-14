import React from "react";
import ClothingPiece from "./ClothingPiece";
import KeyClothingPiece from "./KeyClothingPiece";

const Lookbook = () => {

  return (
    <div className="image-container">
      <div class="unique-wrapper">
        <div class="unique_element">
          Explore your outfits today with your first lookbook!
        </div>
      </div>
      <div className="hi">
        <div className="clothing1">
          <ClothingPiece
            image={require("./Clothing/SALE_burgundy_sweater.png")}
            // name="Jeans"
             tags={["Business", "Classy", "Semi-formal", "Formal", "Oversized"]}
          />{" "}
        </div>
        <div className="clothing2">
          <ClothingPiece
            image={require("./Clothing/black_cinched_t_shirt_low (1).png")}
            // name="Jeans"
            // tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />{" "}
          <br />
        </div>
        <div className="clothing3">
          <ClothingPiece
            image={require("./Clothing/SALE_the pillow puff_low.png")}
            // name="Jeans"
            // tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />{" "}
          <br />
        </div>
        <div className="clothing4">
          <ClothingPiece
            image={require("./Clothing/mittens_low.png")}
            // name="Jeans"
            // tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />{" "}
          <br />
        </div>
        <div className="clothing5">
          <ClothingPiece
            image={require("./Clothing/SALE_cropped_crewneck_low.png")}
            // name="Jeans"
            // tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />{" "}
          <br />
        </div>
        <div className="clothing6">
          <ClothingPiece
            image={require("./Clothing/super puff.png")}
            // name="Jeans"
            // tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />{" "}
          <br />
        </div>
        <div className="clothing7">
          <ClothingPiece
            image={require("./Clothing/SALE_tnalife cheeky flare hi rise legging_low.png")}
            // name="Jeans"
            // tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />{" "}
          <br />
        </div>
        <div className="clothing8">
          <ClothingPiece
            image={require("./Clothing/SALE_effortless pants_low.png")}
            // name="Jeans"
            // tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />{" "}
          <br />
        </div>
        <div className="clothing9">
          <ClothingPiece
            image={require("./Clothing/SALE_green_tank_low.png")}
            // name="Jeans"
            // tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />{" "}
          <br />
        </div>
        <div className="tag">#Comfy</div>
      </div>
    </div>
  );

  // return <div className="content">{props.children}</div>;
};

export default Lookbook;
