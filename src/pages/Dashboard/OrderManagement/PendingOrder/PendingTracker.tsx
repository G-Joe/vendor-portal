import { Divider, Steps } from 'antd';
import Orange from "assets/icons/orange_dot.svg"
import "../OrderMgt.scss";



const PendingTracker = () => {

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
            <div className='pending-status'>
            <p><img src={Orange} alt="green dot"/>  Pending</p>
            </div>
          
        </div>
    );
};

export default PendingTracker;
