import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe("Header", () => {
  it("renders the h1 text", () => {
    render(<Header />);
    expect(screen.getByRole("heading", { level: 1, name: "Back to the Shelf Again" })).toBeDefined();
  });
});
