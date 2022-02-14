import React from "react";
import { Button, Container, FormControl, Input, makeStyles, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const useStyle = makeStyles({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        background: 'linear-gradient(90deg, rgba(241,110,84,1) 0%, rgba(213,33,119,1) 100%)',
        padding: 20,
        paddingInline: 90,
        textAlign: 'center',
        marginBottom: -100
    },
    formTitle: {
        fontSize: "30px",
        fontWeight: 600,
        color: 'white',
        fontFamily: 'Poppins'
    },
    input: {
        backgroundColor: "#ffd5bb",
        padding: 16,
        borderRadius: 2,
        color: "black",
        fontWeight: "bold",
        margin: "16px 0",
        "box-shadow": "-4px 4px 0px 0px #ff8c6b",
    },
    submitButton: {
        alignSelf: "center",
        marginTop: 20,
        padding: "12px 60px 12px 60px",
        backgroundColor: "white",
        fontWeight: "bold",
        boxShadow: "-11.31px 11.31px 0px 0px #ff8c6b",
        border: "3px solid #ff8c6b",
        borderRadius: "4px",
        '&:disabled': {
            border: 'unset'
        }
    },
});

export const ContactUsForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "")
                .required("Campo obrigatório"),
            phone: Yup.string()
                .min(15, "")
                .required("Campo obrigatório"),
        }),
        onSubmit: values => {
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
                    title: "Obrigado pelo envio!",
                    text: 'Em breve entraremos em contato.',
                })
            })
            // appendToLeadSpreadsheet([
            //     new Date().toLocaleString().split(',')[0],
            //     values.name,
            //     values.phone,
            // ]);
        },
    });
    const classes = useStyle();

    return (
        <Container maxWidth="sm" className={classes.container}>
                <Typography variant="h5" className={classes.formTitle}>Preencha os campos para</Typography>
                <Typography style={{ marginBottom: "25px" }} variant="h5" className={classes.formTitle}>ganhar uma aula grátis!</Typography>
                <FormControl fullWidth>
                    <Input
                        required
                        id="name"
                        placeholder="Nome:"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        fullWidth
                        className={classes.input}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputMask
                        mask="(99) 99999-9999"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        disabled={false}
                        maskChar=" "
                    >
                        {() => <Input
                            required
                            id="phone"
                            placeholder="Telefone:"
                            name="phone"
                            type="tel"
                            fullWidth
                            className={classes.input}
                        />}
                    </InputMask>

                    <Button
                        variant="contained"
                        type="submit"
                        className={classes.submitButton}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                            formik.handleSubmit()
                        }
                    >
                        Enviar
                    </Button>
                </FormControl>
        </Container>
    );
};
