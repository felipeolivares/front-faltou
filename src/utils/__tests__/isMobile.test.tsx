import { useMediaQuery, useTheme } from "@mui/material";
import isMobile from "../isMobile";

jest.mock("@mui/material", () => ({
  useMediaQuery: jest.fn(),
  useTheme: jest.fn(),
}));

describe("isMobile", () => {
  it("should return true when screen size is smaller than sm breakpoint", () => {
    (useTheme as jest.Mock).mockReturnValue({
      breakpoints: { down: jest.fn(() => "sm") },
    });
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    const result = isMobile();

    expect(result).toBe(true);
    expect(useMediaQuery).toHaveBeenCalledWith("sm");
  });

  it("should return false when screen size is larger than sm breakpoint", () => {
    (useTheme as jest.Mock).mockReturnValue({
      breakpoints: { down: jest.fn(() => "sm") },
    });
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    const result = isMobile();

    expect(result).toBe(false);
    expect(useMediaQuery).toHaveBeenCalledWith("sm");
  });
});
