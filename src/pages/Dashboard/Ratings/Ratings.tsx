import Button from "components/Button/Button";
import DeviceRatings from "./DeviceRatingsList"
import "./Ratings.scss"

const Ratings = () => {
    return(
<div className="ratings">
    <div className="header">
    <h3>Ratings and reviews</h3>
    <div className="action">
    <Button variant="transparent" label="EXPORT AS CSV" />
    </div>
    </div>
   <DeviceRatings/>
</div>
    )
}

export default Ratings;