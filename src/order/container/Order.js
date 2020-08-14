import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Button } from "@material-ui/core";
import { insertOrder } from "../state/thunk";

import OrderCustomer from "./OrderCustomer";
import OrderUser from "./OrderUser";
import OrderGood from "./OrderGood";
import OrderPayment from "./OrderPayment";
import ConfirmDialog from "./ConfirmDialog";
import { actions } from "../state";

export default function Order() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmMsg, setConfirmMsg] = useState("");
  const dispatch = useDispatch();

  function onSaveOrder() {
    setConfirmMsg("저장하시겠습니까?");
    setConfirmOpen(true);
  }

  function onConfirmYes() {
    setConfirmOpen(false);
    dispatch(insertOrder());
  }

  function onConfirmNo() {
    setConfirmOpen(false);
  }

  useEffect(() => {
    return () => dispatch(actions.initialize());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="lg">
        <OrderCustomer />
        <br />
        <br />
        <OrderUser />
        <br />
        <br />
        <OrderGood />
        <br />
        <br />
        <OrderPayment />
        <br />
        <Button
          color="primary"
          variant="contained"
          size="medium"
          onClick={onSaveOrder}
        >
          주문저장
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
