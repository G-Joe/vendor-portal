import { Modal } from "antd";
import { useState } from "react";
import useDisclosure from "components/Modal/useDisclosure";
import StatusModal from "components/Modal/StatusModal";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Select from "components/Input/Select";
import OutletOrders from "./Outlets";
import "./OutletMgt.scss";

const OutletManagement = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const statusModal = useDisclosure();

  const SuccessModal = () => {
    setModalOpen(false)
    statusModal.onOpen()
  }
  return (
    <div className="order-mgt">
      <div className="heading">
        <h3>Outlet Management</h3>
        <div className="actions">
          <Button
            variant="transparent"
            label="CREATE OUTLET"
            onClick={() => setModalOpen(true)}
          />
          <Button variant="transparent" label="EXPORT AS CSV" />
        </div>
      </div>
      <OutletOrders />
      <div className="modal">
        <Modal
          centered
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
          className="create-outlet-modal"
        >
          <h3>Create Outlet</h3><br/>
          <div className="topper">
            <div className="left">
              <Input label="Outlet Name" type="text" /><br/>
              <Input label="Outlet Phone Number" type="text" /><br/>
              <Input label="Outlet Email Address" type="text" /><br/>
            </div>
            <div className="right">
              <Select label="Select Outlet State">
                <option value=""></option>
              </Select><br/>
              <Select label="Select Outlet Location">
                <option value=""></option>
              </Select><br/>
              <Select label="Outlet Address">
                <option value=""></option>
              </Select>
            </div><br/>
          </div>
          <h3 className="details">Details of Agent in Charge of Outlets</h3><br/>
          <div className="bottom">
            <div className="left">
              <Input label="Name of Agent in Charge of Outlet" type="text" />
            </div>
            <div className="right">
              <Input label="Agent Phone Number" type="text" />
            </div>
          </div><br/>
          <Select label="Status">
            <option></option>
          </Select><br/>
          <div className="submit">
          <Button label="SAVE" variant="primary" onClick={SuccessModal}/>
          </div>
        
        </Modal>
      </div>
      <StatusModal
            status="success"
            title="Successful"
            message="you have just created an outlet"
            duration={6000}
            isOpen={statusModal.isOpen}
            onClose={statusModal.onClose}
          />
    </div>
  );
};

export default OutletManagement
