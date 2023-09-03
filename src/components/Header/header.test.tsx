import { vi, expect, describe, test } from "vitest";
import { render, screen } from "@/utils/test"
import Header from "."

vi.mock('@/hooks/useScrollDirection', () => ({
  useScrollDirection: vi.fn(() => ({
    isHidden: true,
    isReachedTop: true,
  })),
}));

describe("Header component", () => {
  test("Should be able renders the header correctly", () => {
    render(<Header />)

    const logo = screen.getAllByRole("img", { name: "logo" })
    const link = screen.getAllByRole("link", { name: "Sobre Mim" })
    const header = screen.getAllByRole("banner")

    expect(logo).toBeDefined()
    expect(link).toBeDefined()
    expect(header).toBeDefined()
  })
})