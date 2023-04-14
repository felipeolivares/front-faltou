import { render } from "@testing-library/react";
import Loading from "../../components/Loading/loading";

describe("Loading", () => {
  it("should render the component", () => {
    render(<Loading loading={true} />);
  });

  it("should not render the component", () => {
    render(<Loading loading={false} />);
  });
});
