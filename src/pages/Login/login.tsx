import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Box, Grid, Paper } from "@material-ui/core";
import {
  TextField,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import logo from "../../assets/Logo.png";
import useStyles from "../styles";
import { useFormik } from "formik";
import loginService from "../../services/loginService";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { isMobile } from "../../utils";
import { useAppContext } from "../../context/useAppContext";
import { Loading } from "../../components";
import initialValues from "../../helpers/initialValues";

const Login: React.FC = () => {
  const classes = useStyles();
  const { updateAppValues, setIduser } = useAppContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const appValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Precisa ser um e-mail válido")
        .required("Campo obrigatório"),
      password: Yup.string().required("Campo obrigatório"),
    }),
    initialValues: appValues,
    validateOnChange: false,

    onSubmit: (values: any) => {
      if (values.email && values.password) {
        setLoading(true);
        loginService
          .postLogin(values.email, values.password)
          .then((response) => {
            setIduser({ iduser: response.data.iduser });
            navigate(routes.calculate);
          })
          .catch((error) => {
            if (error?.response?.data?.msg) {
              formik.setFieldError("email", error?.response?.data?.msg);
              formik.setFieldError("password", error?.response?.data?.msg);
            } else {
              formik.setFieldError("email", "Erro, tente novamente mais tarde");
              formik.setFieldError(
                "password",
                "Erro, tente novamente mais tarde"
              );
            }
          })
          .finally(() => {
            setLoading(false);
          });
      }
    },
  });

  useEffect(() => {
    updateAppValues(initialValues);
    setIduser({ iduser: undefined, idsubject: undefined });
  }, []);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const onClickValue = () => {
    navigate(routes.register);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Loading loading={loading} />
      <Grid container>
        <Grid item xs={isMobile() ? 12 : 6}>
          <Box
            className={
              isMobile() ? classes.containerLoginMobile : classes.containerLogin
            }
          >
            <Box className={classes.containerHome}>
              <Typography variant="h4" marginLeft={isMobile() ? "" : "64px"}>
                POSSO FALTAR?
              </Typography>
              <Typography
                variant="h6"
                marginTop="8px"
                marginLeft={isMobile() ? "" : "64px"}
              >
                Olá, o site tem como objetivo ajudar você a controlar e
                verificar suas faltas nas matérias, com isso você poderá saber
                se ainda possui a frequência necessária para então organizar
                suas faltas. Faça o login ou o cadastro para acessar a
                ferramenta de calcular e armazenar frequências.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={isMobile() ? 12 : 6}>
          <Box
            className={
              isMobile() ? classes.containerLoginMobile : classes.containerLogin
            }
          >
            <Paper elevation={3} className={classes.loginPage}>
              <Box className={classes.loginMsg}>
                <img
                  className={classes.containerImage}
                  alt="brand"
                  src={logo}
                />
                <Typography variant="h4" fontWeight="bold">
                  Login
                </Typography>
              </Box>
              <Box className="pt16">
                <TextField
                  id="email"
                  name="email"
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={!!formik.errors?.email}
                  helperText={formik.errors?.email}
                  label="Informe seu e-mail"
                  placeholder="Informe seu e-mail"
                  autoComplete="off"
                  fullWidth
                />
              </Box>
              <Box className="pt16">
                <TextField
                  id="password"
                  name="password"
                  value={formik.values?.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={!!formik.errors?.password}
                  helperText={formik.errors?.password}
                  label="Informe sua senha"
                  placeholder="Informe sua senha"
                  autoComplete="off"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box className="pt16">
                <Button
                  id="enterbtn"
                  color="primary"
                  variant="contained"
                  type="submit"
                  fullWidth
                  size="large"
                >
                  <Typography variant="caption" fontWeight="bold">
                    Entrar
                  </Typography>
                </Button>
              </Box>
              <Box className={classes.register}>
                <Typography fontSize="12px">Não é registrado?</Typography>
                <Typography
                  fontSize="12px"
                  className={classes.createAccount}
                  onClick={onClickValue}
                  id="registerClick"
                >
                  Crie uma conta.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
