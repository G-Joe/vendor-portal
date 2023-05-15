import { Modal } from 'antd';
import { useState } from 'react';
import Phone from "assets/images/samsung_thumbnail.png";
import Star from "assets/icons/star_gold_icon.svg";
import Tracker from "./PendingTracker";
import Button from "components/Button/Button";
import Input from 'components/Input/Input';
import "../OrderMgt.scss"

const data = [
  {
    img: Phone,
    name: "Samsung S22 Ultra",
    category: "Mobile Phones",
    brand: "Samsung",
    ratings: "5.0 (40 Reviews)",
    amount: "₦‎ 550,000",
  },
];

const PendingOrder = () => {
    const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="completed-orders">
      <h3>
        Order details &gt; <span>Order management</span>
      </h3>
      <div className="completed">
        <h1>
          Loan ID: <span>FNX1234</span>
        </h1>
        {data.map((deets) => (
          <div className="order-table">
            <table>
                <tr>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Product Brand</th>
                        <th>Ratings</th>
                        <th>Amount</th>
                </tr>
                <tr>
                    <td className="phone">
                        <img src={deets.img} alt="Samsung Device"/>
                        <p>{deets.name}</p></td>
                    <td>{deets.category}</td>
                    <td>{deets.brand}</td>
                    <td><img src={Star} alt="gold star"/>  {deets.ratings}</td>
                    <td>{deets.amount}</td>
                </tr>
            </table>
          </div>
        ))}
        <Tracker/>
        <Button variant="primary" label="CANCEL DELIVERY" onClick={() => setModalOpen(true)}/>
      </div>
      <Modal
        centered
        className='reason'
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <p>Please State your reason for cancellation</p>
        <Input label="Reason" type="text"/><br/>
        <Button variant="primary" label="SUBMIT"/>
      </Modal>
      </div>
      
      
    
  );
};

export default PendingOrder;
