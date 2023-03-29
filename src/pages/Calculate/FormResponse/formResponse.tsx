import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { Typography, Button } from "@mui/material";
import useStyles from "./styles";
import { arrangedReturnValues, isMobile } from "utils";
import { Box, Divider } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Modal } from "components";
import { useAppContext } from "context/useAppContext";
import subjectService from "services/subjectService";
import { appTotalValues } from "models/appTotalValues";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormResponse: React.FC = () => {
  const classes = useStyles();
  const { appValues, updateAppValues, iduser, setIduser } = useAppContext();
  const [openModal, setOpenModal] = useState(false);
  const [openModalAll, setOpenModalAll] = useState(false);
  const [subjectModal, setSubjectModal] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [subjectsDisplay, setSubjectsDisplay] = useState([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [idSubject, setIdSubject] = useState(undefined);

  const getSubjects = () => {
    subjectService
      .getSubjectsByIduser(iduser)
      .then((response: any) => {
        setSubjects(response.data);
      })
      .catch(() => {
        toast.error(
          "Erro ao buscar as matérias, entre no sistema novamente mais tarde!",
          {
            position: toast.POSITION.BOTTOM_RIGHT,
          }
        );
      });
  };

  useEffect(() => {
    getSubjects();
  }, [appValues]);

  useEffect(() => {
    const itemsToDisplay = subjects?.slice(0, displayCount);
    setSubjectsDisplay(itemsToDisplay);
  }, [subjects, displayCount]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteSubject = () => {
    scrollUp();
    setOpenModal(false);
    subjectService
      .deleteSubjectByIdSubject(idSubject ? idSubject : 0)
      .then(() => {
        toast.success("Matéria deletada com sucesso!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        getSubjects();
      })
      .catch(() => {
        toast.error("Erro ao deletar, tente novamente!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  const deleteAllSubjects = () => {
    scrollUp();
    setOpenModalAll(false);
    subjectService
      .deleteSubjectByUserId(iduser.iduser ? iduser.iduser : 0)
      .then(() => {
        toast.success("Todas matérias foram deletadas com sucesso!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });

        getSubjects();
      })
      .catch(() => {
        toast.error("Erro ao deletar, tente novamente!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  const updateSubject = (values: appTotalValues, idsubect: number) => {
    scrollUp();
    updateAppValues(arrangedReturnValues(values));
    setIduser({
      iduser: iduser.iduser ? iduser.iduser : undefined,
      idsubject: idsubect,
    });
  };

  const returnAbsence = (totalAbsenceStudent: number) => {
    if (totalAbsenceStudent > 0) {
      return (
        <Box className={classes.boxRow}>
          <SentimentSatisfiedAltIcon color="success" />
          <Typography variant="body1" color="#2E7D32" paddingLeft="4px">
            {totalAbsenceStudent === 1
              ? `Sim, você pode faltar mais ${totalAbsenceStudent} vez!`
              : `Sim, você pode faltar mais ${totalAbsenceStudent} vezes!`}
          </Typography>
        </Box>
      );
    }
    if (totalAbsenceStudent === 0) {
      return (
        <Box className={classes.boxRow}>
          <SentimentNeutralIcon color="warning" />
          <Typography variant="body1" color="#ED6C02" paddingLeft="4px">
            Cuidado, você não pode mais faltar nenhuma vez!
          </Typography>
        </Box>
      );
    }
    if (totalAbsenceStudent < 0) {
      return (
        <Box className={classes.boxRow}>
          <SentimentVeryDissatisfiedIcon color="error" />
          <Typography variant="body1" color="#d32f2f" paddingLeft="4px">
            Você passou do limite de faltas!
          </Typography>
        </Box>
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal
        open={openModal}
        title={`Você tem certeza que deseja excluir a matéria ${subjectModal}?`}
        buttonLabel="Sim"
        buttonLabel2="Não"
        onClickButton={() => deleteSubject()}
        onClickButton2={() => setOpenModal(false)}
        onClose={() => setOpenModal(false)}
      />
      <Modal
        open={openModalAll}
        title="Você tem certeza que deseja excluir todas as matérias?"
        buttonLabel="Sim"
        buttonLabel2="Não"
        onClickButton={() => deleteAllSubjects()}
        onClickButton2={() => setOpenModalAll(false)}
        onClose={() => setOpenModalAll(false)}
      />
      <Paper
        elevation={3}
        className={isMobile() ? classes.paperCalcMob : classes.paperCalc}
      >
        <Typography variant="h5" fontWeight="bold">
          Matérias:
        </Typography>
        {subjects.length === 0 ? (
          <Typography variant="body1" className="pt24">
            Ainda não há matérias calculadas!
          </Typography>
        ) : (
          <>
            {subjects.length > 1 && (
              <Box className="pt24">
                <Button
                  id="deleteAll"
                  color="error"
                  variant="outlined"
                  type="submit"
                  size="large"
                  onClick={() => setOpenModalAll(true)}
                  fullWidth
                >
                  <Typography variant="caption" fontWeight="bold">
                    Excluir todas as matérias
                  </Typography>
                </Button>
              </Box>
            )}
            {subjectsDisplay.length > 0 &&
              subjectsDisplay.map((subject: any, index: number) => (
                <Box className={classes.box} key={index}>
                  <Box className={classes.boxSpace}>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="#E7B10A"
                    >
                      {subject.subjectName}
                    </Typography>
                    <Box className={classes.boxRow}>
                      <EditIcon
                        color="info"
                        className={classes.icon}
                        onClick={() =>
                          updateSubject(subject, subject.idsubjects)
                        }
                      />
                      <DeleteForeverIcon
                        color="error"
                        className={classes.icon}
                        onClick={() => {
                          setOpenModal(true);
                          setSubjectModal(subject.subjectName);
                          setIdSubject(subject.idsubjects);
                        }}
                      />
                    </Box>
                  </Box>
                  <Divider />
                  <Box className={classes.boxSpace} paddingTop="16px">
                    <Typography variant="body1" fontWeight="bold">
                      Posso faltar?
                    </Typography>
                    {returnAbsence(subject.totalAbsenceStudent)}
                  </Box>
                  <Divider />
                  <Box className={classes.boxSpace} paddingTop="16px">
                    <Typography variant="body1" fontWeight="bold">
                      Quantidade de aulas
                    </Typography>
                    <Typography variant="body1">
                      {subject.totalClasses}
                    </Typography>
                  </Box>
                  <Divider />
                  <Box className={classes.boxSpace} paddingTop="16px">
                    <Typography variant="body1" fontWeight="bold">
                      Quantidade de faltas possíveis da matéria
                    </Typography>
                    <Typography variant="body1">
                      {subject.totalAbsence}
                    </Typography>
                  </Box>
                  <Divider />
                  <Box className={classes.boxSpace} paddingTop="16px">
                    <Typography variant="body1" fontWeight="bold">
                      Quantidade de faltas
                    </Typography>
                    <Typography variant="body1">
                      {subject.amountAbsence}
                    </Typography>
                  </Box>
                </Box>
              ))}
            {displayCount < subjects.length && (
              <Box marginTop="16px">
                <Button
                  id="seeMore"
                  color="primary"
                  variant="outlined"
                  type="submit"
                  size="large"
                  onClick={() => setDisplayCount(displayCount + 3)}
                  fullWidth
                >
                  <Typography variant="caption" fontWeight="bold">
                    Ver mais
                  </Typography>
                </Button>
              </Box>
            )}
          </>
        )}
      </Paper>
    </>
  );
};

export default FormResponse;
