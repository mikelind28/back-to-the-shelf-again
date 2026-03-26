import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "@/ui/components/Header";
import { SetStateAction } from "react";

describe("Header", () => {
  it("renders the h1 text", () => {
    render(
      <Header
        globalNavOpen={false}
        setGlobalNavOpen={function (value: SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Back to the Shelf Again",
      }),
    ).toBeDefined();
  });
});
