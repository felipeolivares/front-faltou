import React, { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  LayoutModal,
  ModalContainer,
  Title,
  CloseButton,
  ContainerButton,
} from "./styles";
import { Grid } from "@material-ui/core";
import { Button, Typography } from "@mui/material";

export interface modalProps {
  /** set modal title  (if you use modal title, you can't use buttons )*/
  title?: string;
  /** set modal description (you can use html)*/
  description?: string | ReactNode;
  /** set modal info plan (you can use html)*/
  infoPlan?: string | ReactNode;
  /** set state to close modal */
  onClose?: any;
  /** set state to open modal */
  open: boolean;
  /** set type modal */
  isInfoModal?: boolean;
  /** set disabled */
  disabled?: boolean;
  /** set button label */
  buttonLabel?: string;
  /** set button label */
  buttonLabel2?: string;
  /** set state to close modal or anything else */
  onClickButton?: any;
  /** set state to close modal or anything else */
  onClickButton2?: any;
  /** set ID */
  id?: string;
}

const Modal: React.FC<modalProps> = ({ isInfoModal = false, ...Props }) => {
  return (
    <>
      {Props.open && (
        <LayoutModal id={Props.id}>
          <ModalContainer isInfoModal={isInfoModal}>
            {Props.title && (
              <Title id="titleModal">
                {Props.title}
                <CloseButton
                  id="closeButton"
                  onClick={() => Props.onClose()}
                  role="button"
                >
                  <CloseIcon />
                </CloseButton>
              </Title>
            )}
            <ContainerButton>
              <>
                <Grid
                  className={Props.buttonLabel2 ? "pr10" : ""}
                  item
                  xs={Props.buttonLabel2 ? 6 : 12}
                >
                  <Button
                    id="searchbtn"
                    color="primary"
                    variant={
                      Props.buttonLabel2 && !Props.disabled
                        ? "outlined"
                        : "contained"
                    }
                    className="btn-height"
                    onClick={Props.onClickButton}
                    fullWidth
                    type="submit"
                    disabled={Props.disabled ? true : false}
                  >
                    <Typography
                      fontFamily="'NotoSans', Arial, Helvetica, sans-serif"
                      fontSize="14px"
                      fontWeight="bold"
                      textTransform="uppercase"
                      color={Props.disabled ? "#000000" : ""}
                    >
                      {Props.buttonLabel}
                    </Typography>
                  </Button>
                </Grid>
                {Props.buttonLabel2 && (
                  <Grid className="pl10" item xs={6}>
                    <Button
                      id="searchbtn"
                      color="primary"
                      variant="contained"
                      className="btn-height"
                      onClick={Props.onClickButton2}
                      fullWidth
                      type="submit"
                    >
                      <Typography
                        fontFamily="'NotoSans', Arial, Helvetica, sans-serif"
                        fontSize="14px"
                        fontWeight="bold"
                        textTransform="uppercase"
                      >
                        {Props.buttonLabel2}
                      </Typography>
                    </Button>
                  </Grid>
                )}
              </>
            </ContainerButton>
          </ModalContainer>
        </LayoutModal>
      )}
    </>
  );
};

export default Modal;
