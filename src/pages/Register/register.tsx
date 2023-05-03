import React, { useState } from "react";
import * as Yup from "yup";
import { Box, Paper } from "@material-ui/core";
import {
  TextField,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import logo from "../../assets/Logo.png";
import { useFormik } from "formik";
import useStyles from "../styles";
import loginService from "../../services/loginService";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Loading } from "../../components";

const Register: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const appValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Precisa ser um e-mail válido")
        .required("Campo obrigatório"),
      password: Yup.string()
        .required("Campo obrigatório")
        .min(8, "É preciso no mínimo 8 caracteres"),
      confirmPassword: Yup.string().required("Campo Obrigatório"),
    }),
    initialValues: appValues,
    validateOnChange: false,

    onSubmit: (values: any) => {
      if (values.password === values.confirmPassword) {
        if (values.email && values.password) {
          setLoading(true);
          loginService
            .postRegister(values.email, values.password)
            .then(() => {
              navigate(routes.login);
            })
            .catch((error) => {
              if (error?.response?.data?.msg) {
                formik.setFieldError("email", error?.response?.data?.msg);
              } else {
                formik.setFieldError(
                  "email",
                  "Erro, tente novamente mais tarde"
                );
              }
            })
            .finally(() => {
              setLoading(false);
            });
        }
      } else {
        formik.setFieldError("password", "Senhas diferentes");
        formik.setFieldError("confirmPassword", "Senhas diferentes");
      }
    },
  });

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const onClickValue = () => {
    navigate(routes.login);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Loading loading={loading} />
      <Box className={classes.containerLogin}>
        <Paper elevation={3} className={classes.loginPage}>
          <Box className={classes.loginMsg}>
            <img className={classes.containerImage} alt="iconPlus" src={logo} />
            <Typography variant="h4" fontWeight="bold">
              Cadastro
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
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values?.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.errors?.confirmPassword}
              helperText={formik.errors?.confirmPassword}
              label="Confirme sua senha"
              placeholder="Confirme sua senha"
              autoComplete="off"
              fullWidth
              type={showConfirmPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setShowConfirmPassword(!showConfirmPassword);
                      }}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box className="pt16">
            <Button
              id="searchbtn"
              color="primary"
              variant="contained"
              type="submit"
              fullWidth
              size="large"
            >
              <Typography variant="caption" fontWeight="bold">
                Cadastrar
              </Typography>
            </Button>
          </Box>
          <Box className={classes.containerBack} onClick={() => onClickValue()}>
            <Box className={classes.imageBackIcon}>
              <ArrowBackIosNewIcon fontSize="small" />
            </Box>
            <Typography
              fontSize="12px"
              fontWeight="bold"
              color="#0061A0"
              paddingTop={"3px"}
            >
              VOLTAR
            </Typography>
          </Box>
        </Paper>
      </Box>
    </form>
  );
};

export default Register;
