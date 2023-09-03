import { render, screen } from "@/utils/test"
import Breadcrumb from "."

describe("Breadcrumb component", () => {
  test("Should be able renders the Breadcrumb correctly", () => {
    render(<Breadcrumb page="Blog" title="Test Article Title" />)

    const logo = screen.getAllByRole("img", { name: "icon home" })
    const icon = screen.getAllByRole("img", { name: "icon chevron right" })
    const link = screen.getAllByRole("link", { name: "Blog" })
    const linkIcon = screen.getAllByRole("link", { name: "icon home" })

    expect(logo).toBeDefined()
    expect(icon).toBeDefined()
    expect(link).toBeDefined()
    expect(link[0].getAttribute('href')).toBe('/')
    expect(linkIcon[0].getAttribute('href')).toBe('/')
    expect(logo[0].getAttribute('alt')).toBe('icon home')
  })
})