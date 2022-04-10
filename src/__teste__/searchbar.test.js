import { render, screen, expect } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../components/searchBar/SearchBar";

describe("When everything works as expected", () => {
  test("Should render 'Por favor, insira um CNJ' message when input value is empty", () => {
    render(<SearchBar />);

    userEvent.click(screen.getByTestId("input").focus());
    const fromScreen = screen.getByText("Por favor, insira um CNJ");
    expect(fromScreen).toBeInTheDocument();
  });

  test("Should render 'Formato inválido. Verifique o CNJ' message when user types a value that has invalid format", () => {
    render(<SearchBar />);

    userEvent.type(screen.getByTestId("input"), "00074-57.2013.5.15.013");
    const invalidFormatMessage = screen.getByText(
      "Formato inválido. Verifique o CNJ"
    );
    expect(invalidFormatMessage).toBeInTheDocument();
  });

  test("Should change showMessage state value to true when button is clicked", () => {});

  test("Should make API request when button is clicked", () => {});
});
