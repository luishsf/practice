import React, { useState } from "react";
import { sendPayment } from "../../api";
import { useAuth0 } from "@auth0/auth0-react";
import { FormControl, Select, MenuItem, OutlinedInput, makeStyles } from "@material-ui/core";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import type { PayPalButtonsComponentProps } from "@paypal/react-paypal-js";

const paypalScriptOptions: PayPalScriptOptions = {
    "client-id": "test",
    currency: "BRL"
};

const useStyles = makeStyles({
    formControl: {
        marginBlock: 30,
        color: 'white'
    },
    select: {
        '&:before': {
            borderColor: 'white',
        },
        '&:after': {
            borderColor: 'white',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: 'white',
        },
    },
    icon: {
        fill: 'white',
    },
    root: {
        color: 'white',
    },
});

const Paypal = (props: any) => {
    const classes = useStyles();


    const [amount, setAmount] = useState(120);
    const { getAccessTokenSilently, user } = useAuth0();

    const handleChange = (event: any) => {
        setAmount(event.target.value);
    };

    async function setPaymentCompleted() {
        try {
            const token = await getAccessTokenSilently();
            await sendPayment(user.email, token, amount)
        } catch {
           alert("erro")
        }
    }

    function Buttons() {
        const [{ isPending }] = usePayPalScriptReducer();
        const paypalbuttonTransactionProps: PayPalButtonsComponentProps = {
            style: { layout: "vertical" },
            forceReRender: [amount],
            createOrder(data, actions) {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: "" + amount
                            }
                        }
                    ]
                });
            },
            onApprove(data, actions) {
                return actions.order.capture()
                .then(() => {
                    // setPaymentCompleted()
                    const MySwal = withReactContent(Swal)

                    MySwal.fire({
                        didOpen: () => {
                            MySwal.clickConfirm()
                        }
                    }).then(() => {
                        return MySwal.fire({
                            timer: 10000,
                            timerProgressBar: true,
                            confirmButtonColor: "#fb6634",
                            icon: "success",
                            title: 'Pagamento realizado com sucesso!',
                        })
                    })
                    props.history.push('/dashboard');
                })
                .catch(() => {
                    const MySwal = withReactContent(Swal)

                    MySwal.fire({
                        didOpen: () => {
                            MySwal.clickConfirm()
                        }
                    }).then(() => {
                        return MySwal.fire({
                            confirmButtonColor: "#fb6634",
                            icon: "error",
                            title: 'Erro ao realizar pagamento',
                        })
                    })
                    props.history.push('/dashboard');
                })
            }
        };
        return (
            <>
                {isPending ? <h2>Load Smart Payment Button...</h2> : null}
                <PayPalButtons {...paypalbuttonTransactionProps} />
            </>
        );
    }


    return (
        <>
            <div style={{ display: 'flex', color: 'white', flexDirection: 'column' }}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <label>
                        Valor:
                    </label>
                    <Select
                        className={classes.select}
                        style={{ color: 'white', border: '1px solid white' }}
                        value={amount}
                        onChange={handleChange}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                                root: classes.root,
                            },
                        }}
                        input={
                            <OutlinedInput
                                name="Valor"
                                id="amount"
                            />
                        }
                    >
                        <MenuItem value={120}>R$ 120 - 8 aulas</MenuItem>
                        <MenuItem value={180}>R$ 180 - 12 aulas</MenuItem>
                        <MenuItem value={250}>R$ 250 - 20 aulas</MenuItem>
                    </Select>
                </FormControl>

                <PayPalScriptProvider options={paypalScriptOptions}>
                    <Buttons />
                </PayPalScriptProvider>
            </div>
        </>
    );
}

export default Paypal