import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { TextField, Typography, Button, InputAdornment } from "@mui/material";
import useStyles from "./styles";
import { DateInput, Loading, MLRadio } from "../../../components";
import { useAppContext } from "../../../context/useAppContext";
import { useFormik } from "formik";
import {
  allowNumbersOnly,
  arrangedSendValues,
  minAndMaxValue,
} from "../../../utils";
import formValidate from "../validator/formValidate";
import subjectService from "../../../services/subjectService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import initialValues from "../../../helpers/initialValues";

const Form: React.FC = () => {
  const classes = useStyles();
  const { appValues, updateAppValues, iduser, setIduser } = useAppContext();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: appValues,
    validateOnChange: false,

    onSubmit: (values: any) => {
      updateAppValues(values);
    },
  });

  useEffect(() => {
    formik.setValues(appValues);
  }, [appValues]);

  const handleSubmit = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const errors = formValidate(formik.values);
    if (errors) {
      formik.setErrors(errors);
    } else {
      setLoading(true);
      if (iduser.idsubject) {
        subjectService
          .updateSubject(arrangedSendValues(formik.values, iduser))
          .then(() => {
            updateAppValues(formik.values);
            setIduser({
              iduser: iduser.iduser ? iduser.iduser : undefined,
              idsubject: undefined,
            });
            toast.success(
              "Informações atualizadas e cálculo feito com sucesso!",
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              }
            );
          })
          .catch((error: any) => {
            toast.error(
              error?.response?.data?.msg
                ? error?.response?.data?.msg
                : "Erro na atualização ou cálculo, tente novamente!",
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              }
            );
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        subjectService
          .postSubject(arrangedSendValues(formik.values, iduser))
          .then(() => {
            updateAppValues(formik.values);
            toast.success("Cálculo feito com sucesso!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          })
          .catch((error: any) => {
            toast.error(
              error?.response?.data?.msg
                ? error?.response?.data?.msg
                : "Erro no cálculo, tente novamente!",
              {
                position: toast.POSITION.BOTTOM_RIGHT,
              }
            );
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <Loading loading={loading} />
      <Paper elevation={3} className={classes.paperCalc}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="bold">
              Coloque os dados abaixo para calcular suas faltas:
            </Typography>
          </Grid>
          {iduser?.idsubject && (
            <>
              <Grid item xs={12} className="pt16">
                <Typography variant="body1" fontWeight="bold" color="#0288d1">
                  {`Você está editando a matéria ${formik.values.subjectName}.`}
                </Typography>
              </Grid>
              <Grid item xs={12} className="pt16">
                <Button
                  id="deleteAll"
                  color="info"
                  variant="outlined"
                  type="submit"
                  size="large"
                  onClick={() => {
                    setIduser({
                      iduser: iduser.iduser ? iduser.iduser : undefined,
                      idsubject: undefined,
                    });
                    updateAppValues(initialValues);
                  }}
                  fullWidth
                >
                  <Typography variant="caption" fontWeight="bold">
                    Cancelar edição
                  </Typography>
                </Button>
              </Grid>
            </>
          )}
          <Grid item xs={12} className="pt24">
            <TextField
              id="subjectName"
              name="subjectName"
              value={formik.values.subjectName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.errors.subjectName}
              helperText={formik.errors.subjectName}
              label="Nome da matéria"
              placeholder="Informe o nome da matéria"
              autoComplete="off"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} className="pt16">
            <Typography variant="body1" fontWeight="bold" color="#FF0000">
              Atenção: Informe a data exata do início da aula da matéria.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="pt8">
            <DateInput
              id="startClasses"
              name="startClasses"
              value={
                formik.values.startClasses ? formik.values.startClasses : ""
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.errors.startClasses}
              helperText={formik.errors.startClasses}
              label="Data do início da matéria"
              placeholder="00/00/0000"
            />
          </Grid>
          <Grid item xs={12} className="pt16">
            <Typography variant="body1" fontWeight="bold" color="#FF0000">
              Atenção: Informe a data exata do final da aula da matéria.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="pt8">
            <DateInput
              id="finishClasses"
              name="finishClasses"
              value={
                formik.values.finishClasses ? formik.values.finishClasses : ""
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.errors.finishClasses}
              helperText={formik.errors.finishClasses}
              label="Data do fim da matéria"
              placeholder="00/00/0000"
            />
          </Grid>
          <Grid item xs={12} className="pt16">
            <Typography variant="body1" fontWeight="bold">
              Quantidade de dias da semana que você terá aula da matéria.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="pt8">
            <TextField
              id="amountDaysClasses"
              name="amountDaysClasses"
              value={allowNumbersOnly(formik.values.amountDaysClasses || "")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.errors.amountDaysClasses}
              helperText={formik.errors.amountDaysClasses}
              label="Quantidade de dias"
              placeholder="Informe a quantidade de dias"
              autoComplete="off"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} className="pt16">
            <Typography variant="body1" fontWeight="bold">
              Quantidade de dias que você faltou na matéria.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="pt8">
            <TextField
              id="amountAbsence"
              name="amountAbsence"
              value={allowNumbersOnly(formik.values.amountAbsence || "")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.errors.amountAbsence}
              helperText={formik.errors.amountAbsence}
              label="Quantidade de dias"
              placeholder="Informe a quantidade de dias"
              autoComplete="off"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} className="pt16">
            <Typography variant="body1" fontWeight="bold">
              Possuí algum feriado ou dia que não haverá aula?
            </Typography>
          </Grid>
          <Grid item xs={12} className="pt8">
            <MLRadio
              labelId="radioholiday"
              name="radioholiday"
              value1Radio="Sim"
              value2Radio="Não"
              value={formik.values.radioholiday}
              handleChange={formik.handleChange}
            />
          </Grid>
          {formik.values.radioholiday === "Sim" && (
            <Grid item xs={12} md={6} lg={6} className="pt8">
              <TextField
                id="holiday"
                name="holiday"
                value={allowNumbersOnly(formik.values.holiday || "")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={!!formik.errors.holiday}
                helperText={formik.errors.holiday}
                label="Quantidade de dias"
                placeholder="Informe a quantidade de dias"
                autoComplete="off"
                fullWidth
              />
            </Grid>
          )}
          <Grid item xs={12} className="pt16">
            <Typography variant="body1" fontWeight="bold">
              Porcentagem mínima de frequência exigida é de 75%?
            </Typography>
          </Grid>
          <Grid item xs={12} className="pt8">
            <MLRadio
              labelId="radioPct"
              name="radioPct"
              value1Radio="Sim"
              value2Radio="Não"
              value={formik.values.radioPct}
              handleChange={formik.handleChange}
            />
          </Grid>
          {formik.values.radioPct === "Não" && (
            <Grid item xs={12} md={6} lg={6} className="pt8">
              <TextField
                id="percentage"
                name="percentage"
                value={formik.values.percentage}
                onChange={(e) => {
                  e.target.value = allowNumbersOnly(e.target.value);
                  e.target.value = minAndMaxValue(e.target.value || "", 0, 100);
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                error={!!formik.errors.percentage}
                helperText={formik.errors.percentage}
                label="Porcentagem"
                placeholder="Informe a porcentagem mínima"
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
          )}
          <Grid item xs={12} className="pt16">
            <Button
              id="searchbtn"
              color="primary"
              variant="contained"
              type="submit"
              size="large"
              onClick={handleSubmit}
              fullWidth
            >
              <Typography variant="caption" fontWeight="bold">
                Calcular
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Form;
