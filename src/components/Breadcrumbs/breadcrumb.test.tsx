import { vi, expect, describe, test } from "vitest";
import { render, screen } from "@/utils/test"
import Breadcrumb from "."

describe("Header component", () => {
  test("Should be able renders the Breadcrumb correctly", () => {
    render(<Breadcrumb page="blog" title="Test Article Title" />)

    const logo = screen.getAllByRole("img", { name: "icon home" })
    const icon = screen.getAllByRole("img", { name: "icon chevron right" })
    const link = screen.getAllByRole("link", { name: "blog" })

    expect(logo).toBeDefined()
    expect(icon).toBeDefined()
    expect(link).toBeDefined()
  })
})