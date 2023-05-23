import React from "react";
import { Button, Modal } from "antd";

export const GeneralModal = ({
  isModalOpen,
  setIsModalOpen,
  title,
  formComponent,
  buttonName,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" htmlType="submit">
            {buttonName}
          </Button>,
        ]}
      >
        {formComponent}
      </Modal>
    </>
  );
};
