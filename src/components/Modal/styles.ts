import styled from "styled-components";

interface props {
  isInfoModal?: boolean;
}

export const LayoutModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  background-color: #33333333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div<Pick<props, "isInfoModal">>`
  width: ${(p) => (p.isInfoModal ? "850px" : "434px")};
  height: max-content;
  background-color: #fff;
  position: relative;
  border-radius: 8px;
  margin: 0px 15px;
`;
export const Title = styled.div`
  font-size: 24px;
  font-family: "NotoSans-Bold", Arial, Helvetica, sans-serif !important;
  font-weight: bolder;
  color: #333333;
  display: flex;
  justify-content: space-between;
  margin: 40px 0px 24px 40px;
`;
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  padding: 0px 40px 40px 40px;
`;
export const CloseButton = styled.div`
  width: 12px;
  font-weight: 300;
  position: absolute;
  right: 30px;
  top: 16px;
  color: #666666;
  cursor: pointer;
`;
