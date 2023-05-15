import RatedDevice from "components/DeviceRating/RatedDevice";
import Device from "assets/images/rated_device.png";
import RatingStar from "components/DeviceRating/Rate";
import Comments from "components/DeviceRating/comments";
import sam from "assets/images/sam_img.png"
import sara from "assets/images/sara.png"
import "./Ratings.scss"

const RatingsDetails = () => {
    return(
        <div className="review-details">
            <h3> Ratings and review &gt; <span>Ratings and reviews details</span></h3>
            <div className="ratings">
               <RatedDevice
               phone={Device}
               title="Samsung Galaxy A56 5G, 6.46 Super Amoled - 8GB RAM, 256GB ROM, 64MP, Dual Sim, 5000mAh, Black"
               price="₦‎ 500,000"
               rating="5.0"
               count="40"
               />
               <RatingStar
               value="4.0" 
               count5="20"
               count4="12"
               count3="9"
               count2="6"
               count1="3" 
               percent5="80" 
               percent4="60" 
               percent3="30" 
               percent2="20" 
               percent1="5"
               />
               <Comments 
            profilePic={sam} 
            name="Sam Taiwo" 
            rating="4" 
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id hendrerit sed nunc scelerisque sagittis dictumst praesent. 
            Purus turpis blandit eget in sed lorem. "
            timeline="2 days ago"
            />
            <Comments 
            profilePic={sara} 
            name="Sara Olu" 
            rating="5" 
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id hendrerit sed nunc scelerisque sagittis dictumst praesent. 
            Purus turpis blandit eget in sed lorem. "
            timeline="3 days ago"
            /><br/>
            </div>
        </div>
    )
}

export default RatingsDetails;