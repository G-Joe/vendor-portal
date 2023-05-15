import { Divider, Steps } from 'antd';
import Red from "assets/icons/red_dot.svg"
import "../OrderMgt.scss";



const CancelTracker = () => {

    return (
        <div className="tracker">
            <div className="item-history">
                <h3>Pickup Status</h3>
                <Steps
                    progressDot
                    direction="vertical"
                    className="track-item-steps"
                    items={[
                        {
                            title: 'Order placed - 17/06/2022',
                            subTitle: "12:45pm",
                            description: "Saka Tinubu road Lekki, Lagos Nigeria",
                            status: "wait"
                           
                        },
                        {
                            title: 'Waiting to be shipped- 21/06/2022',
                            subTitle: "12:45pm",
                            description: 'Saka Tinubu road Lekki, Lagos Nigeria',
                            status:"process"
                            
                        },
                    ]}
                />
            </div>
            <div className='cancel-status'>
            <p><img src={Red} alt="green dot"/>  Cancelled</p>
            </div>
          
        </div>
    );
};

export default CancelTracker;
