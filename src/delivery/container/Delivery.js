import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Button } from "@material-ui/core";
import { saveDelivery, fetchDeliveryList } from "../state/thunk";

import ConfirmDialog from "../../common/util/ConfirmDialog";
import { actions } from "../state";
import DeliveryList from "./DeliveryList";
import OrderUser from "./OrderUser";
import OrderGood from "./OrderGood";
import DeliveryInstall from "./DeliveryInstall";

export default function Delivery() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmMsg, setConfirmMsg] = useState("");
  const dispatch = useDispatch();

  function onSave() {
    setConfirmMsg("저장하시겠습니까?");
    setConfirmOpen(true);
  }

  function onConfirmYes() {
    setConfirmOpen(false);
    dispatch(saveDelivery());
  }

  function onConfirmNo() {
    setConfirmOpen(false);
  }

  function onRowClick(deliveryInfo) {
    dispatch(actions.setValue("selectedDelivery", deliveryInfo));
  }

  useEffect(() => {
    dispatch(fetchDeliveryList());
    return () => dispatch(actions.initialize());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="lg">
        <DeliveryList onRowClick={onRowClick} />
        <br />
        <br />
        <OrderUser />
        <br />
        <br />
        <OrderGood />
        <br />
        <br />
        <DeliveryInstall />
        <br />
        <br />
        <Button
          color="primary"
          variant="contained"
          size="medium"
          onClick={onSave}
        >
          저장
        </Button>
        <ConfirmDialog
          isOpen={confirmOpen}
          msg={confirmMsg}
          onConfirmNo={onConfirmNo}
          onConfirmYes={onConfirmYes}
        />
      </Container>
    </>
  );
}
