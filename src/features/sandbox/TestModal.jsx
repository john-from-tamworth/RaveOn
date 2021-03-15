import React from "react";
import ModalWrapper from "../../app/common/modals/ModalWrapper";

function TestModal({ data }) {
  return (
    <ModalWrapper size="mini" header="test modal">
      <div>test modal baby: {data}</div>
    </ModalWrapper>
  );
}

export default TestModal;
