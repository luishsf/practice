import { Container} from "@material-ui/core";
import React from "react";
import Paypal from "../components/payment/Paypal";


export const PaymentPage = () => {

    return (
        <Container maxWidth='sm' style={{ paddingTop: '60px' }}>
            <Paypal />
        </Container>
    );
};