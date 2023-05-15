import { Divider, Steps } from 'antd';
import Green from "assets/icons/green_dot.svg"
import "../OrderMgt.scss";



const Tracker = () => {

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
                        {
                            title: 'Pick Up - 26/06/2022',
                            subTitle: "2:45pm",
                            description: 'Saka Tinubu road Lekki, Lagos Nigeria',
                            status:"finish"

                        },
                    ]}
                />
            </div>
            <div className='status'>
            <p><img src={Green} alt="green dot"/>  Completed</p>
            </div>
          
        </div>
    );
};

export default Tracker;
