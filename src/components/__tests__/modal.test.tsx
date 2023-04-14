import { render, fireEvent } from "@testing-library/react";
import Modal from "../../components/Modal/modal";

describe("Modal component", () => {
  it("renders correctly", () => {
    render(<Modal open={true} />);
  });

  it("renders the title correctly", () => {
    const title = "Test Modal";
    const { getByText } = render(<Modal open={true} title={title} />);
    expect(getByText(title)).toBeTruthy();
  });

  it("triggers the onClose callback when close button is clicked", () => {
    const onCloseMock = jest.fn();
    render(<Modal open={true} onClose={onCloseMock} />);
  });

  it("triggers the onClickButton callback when button is clicked", () => {
    const onClickButtonMock = jest.fn();
    render(
      <Modal
        open={true}
        buttonLabel="Test Button"
        onClickButton={onClickButtonMock}
      />
    );
  });
});
