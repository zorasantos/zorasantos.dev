import { render } from "@/utils/test"
import ChipTag from "."

describe("ChipTag Components", () => {
  test("Should be able renders the ChipTag correctly", () => {
    render(<ChipTag>Typescript</ChipTag>)
  })
})