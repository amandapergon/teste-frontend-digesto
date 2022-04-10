import { render, screen, expect } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchResult from "../components/searchResults/SearchResults";

describe("When everything works as expected", () => {
  test("Should render 'Barloader' component when state 'showMessage' equals true", () => {
    render(<SearchResult />);
    const element = screen.getByTestId("barloader");
    expect(element).toBeInTheDocument();
  });

  test("Should render case number, instance, parties and movs when state 'result' doest't have 'status_op' key", () => {
    render(<SearchResult />);
    const fromScreen = screen.getByTestId("resultdisplay");
    expect(fromScreen).not.toBeInTheDocument();
  });

  test("Should render 'Processo não encontrado' message when state 'result' not passed", () => {
    render(<SearchResult />);
    const element = screen.getByTextId("notfound");
    expect(element).toBeInTheDocument();
  });

  test("Should take the results off when another search is made", () => {
    render(<SearchResult />);
    const element = screen.getByTestId("resultdisplay");
    expect(element).not.toBeInTheDocument();
  });

  test("Should take the 'not found' message off when another search is made", () => {
    render(<SearchResult />);
    const element = screen.getByTestId("notfound");
    expect(element).not.toBeInTheDocument();
  });
});
