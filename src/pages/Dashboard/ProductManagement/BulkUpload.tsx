import { message, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Uploadicon from "assets/icons/upload_icon_cloud.svg";
import InfoModal from "components/Modal/InfoModal";
import StatusModal from "components/Modal/StatusModal";
import useDisclosure from "components/Modal/useDisclosure";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange({ info }: any) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop({ e }: any) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};



const BulkUpload = () => {
  const navigate = useNavigate();
  const infoModal = useDisclosure();
  const statusModal = useDisclosure();
  const ModalActions = () => {
    infoModal.onClose();
    statusModal.onOpen();
}
  return (
    <div className="bulk-upload">
      <h2>Bulk Prouct Upload</h2>
      <p>
        Download a sample <span>CSV template</span> to see an example of the
        format required
      </p>
      <div className="add-image">
        <p>Add images</p>
        <Dragger>
          <p className="pload-icon">
            <img src={Uploadicon} alt="upload-icon" />
          </p>
          <p className="upload-text">Drop files here or click to upload</p>
        </Dragger>
      </div>
      <div className="checkbox">
        <Input type="checkbox" label="" value="tester" />
        <p>
          Overwrite any current products that have the same handle. Existing
          values will <br />
          be used for any missing column
        </p>
      </div>
      <div className="action-button">
        <Button
          label="UPLOAD AND CONTINUE"
          variant="primary"
          onClick={infoModal.onOpen}
        />
      </div>
      <InfoModal
      title="Product import in progress"
        info="We are currently importing your products into 
        your store, please note that this might take some
         time, you can choose to close the dialog box
         to continue working while upload is finishing"
        isOpen={infoModal.isOpen}
        onClose={infoModal.onClose}
        buttonText="PROCEED"
        onInfoButtonClick={ModalActions}
      />
      <StatusModal
            status="success"
            title="Successful"
            message="product was successfully imported"
            duration={6000}
            isOpen={statusModal.isOpen}
            onClose={statusModal.onClose}
            to="/dashboard/product-management"
          />
    </div>
  );
};

export default BulkUpload;
