import { useState } from "react";
import StatusModal from "components/Modal/StatusModal";
import useDisclosure from "components/Modal/useDisclosure";
import Select from "components/Input/Select";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Naira from "assets/icons/naira_small.svg";

const CreateProduct = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
  };
  const statusModal = useDisclosure();
  return (
    <div className="create-product">
      <Select
        options={["Option 1", "Option 2", "Option 3", "Option 4"]}
        onOptionSelected={handleOptionSelected}
        label="Select Categories"
      />
      <br />
      <Select
        options={["Option 1", "Option 2", "Option 3", "Option 4"]}
        onOptionSelected={handleOptionSelected}
        label="Select Brand"
      />
      <br />
      <Input label="Product Name" type="text" />
      <br />
      <Input label="Product Price" type="text" leftIcon={Naira} withFlag />
      <br />
      <Input label="Product Key Features" type="text" style={{ height: 80 }} />
      <br />
      <Input label="Product Shipping" type="text" style={{ height: 80 }} />
      <br />
      <Input
        label="Product Specifications"
        type="text"
        style={{ height: 80 }}
      />
      <br />
      <Input label="Product Description" type="text" style={{ height: 80 }} />
      <br />
      <Input label="Product Unit" type="text" />
      <br />
      <Input label="Ram Size" type="text" />
      <br />
      <Input label="Color" type="text" />
      <br />
      <Button
        label="ADD PRODUCT"
        variant="primary"
        onClick={statusModal.onOpen}
      />
      <StatusModal
        status="success"
        title="Successful"
        message="Product successfully added"
        duration={6000}
        isOpen={statusModal.isOpen}
        onClose={statusModal.onClose}
      />
    </div>
  );
};

export default CreateProduct;
