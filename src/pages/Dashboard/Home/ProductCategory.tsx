import mobilePhoneId from "assets/icons/mobile_phone_identifier.svg";
import tabId from "assets/icons/tablet_identifier.svg";
import phoneAccessories from "assets/icons/phone_accessories_identifier.svg";
import tabletAccessories from "assets/icons/tablet_accessories.svg";
import "./home.scss";

const data = [
  {
    id: 1,
    color: mobilePhoneId,
    category: "Mobile Phones",
    percentage: "20%",
  },
  {
    id: 2,
    color: tabId,
    category: "Tablet",
    percentage: "40%",
  },
  {
    id: 3,
    color: phoneAccessories,
    category: "Mobile Phone Accessories",
    percentage: "15%",
  },
  {
    id: 4,
    color: tabletAccessories,
    category: "Tablet Accessories",
    percentage: "15%",
  },
];

const ProductCategories = () => {
  return (
    <div className="product-cat-list">
      {data.map((categories) => {
        return (
          <div className="cat-list">
            <div>
              <img
                src={categories.color}
                alt={categories.category}
                key={categories.id}
                className="colors"
              />
            </div>

            <div className="mobile-percentage">
              <p className="title">{categories.category}</p>
              <p className="percentage">{categories.percentage}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCategories;
