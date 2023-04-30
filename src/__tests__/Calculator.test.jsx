import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen,waitFor } from "@testing-library/react";
import { Calculator } from "../components/Calculator";

// tests is here
// test1 qiymeti yoxlamag ucun
test('qiymetin 0 oldugunu test elemek ucun', () => {
    render(<Calculator />);
    const resultElement = screen.getByTestId('result');
    expect(resultElement).toHaveTextContent('Result: 0');
  });
// test2   cixma emeliyyatini yoxlamag ucun
test('cixma emeliyyatinin duzgun islemeyini yoxlayan funkskiya', () => {
    render(<Calculator />);
    const subtractButton = screen.getByText('Subtract 5 - 3');
    fireEvent.click(subtractButton);
    const resultElement = screen.getByTestId('result');
    expect(resultElement).toHaveTextContent('Result: 2');
  });

//   test3 bolme emeliyyatini yoxlamag ucun
test('bolme emeliyyati duzgun islemeyini yoxlayan funksiya', () => {
    render(<Calculator />);
    const divideButton = screen.getByText('Divide 6 / 3');
    fireEvent.click(divideButton);
    const resultElement = screen.getByTestId('result');
    expect(resultElement).toHaveTextContent('Result: 2');
  });
// test4  toplama emeliyyatinin yoxlamag ucun
test('toplama emeliyyatinin duzgun islemeyinin yoxlayan funksiya', () => {
    render(<Calculator />);
    const sumButton = screen.getByText('Sum 1 + 2');
    fireEvent.click(sumButton);
    const resultElement = screen.getByTestId('result');
    expect(resultElement).toHaveTextContent('Result: 3');
  });
// test5  hasili duzgunluyunu yoxlamag ucun
test('hasili duzgun tapacagni test eden funksiya', () => {
    render(<Calculator />);
    const multiplyButton = screen.getByTestId('multiply');
    fireEvent.click(multiplyButton);
    const resultElement = screen.getByTestId('result');
    expect(resultElement).toHaveTextContent('Result: 6');
  });

//  bu testler ise cemlenmis sekilde yazilib icinde ferqli ferqli 4 testi cemleyir
  describe("Calculator component", () => {
    it("vurma hadisei olduqda iki ededin hasilinin verilenle duzgun olub olmadigini test edir", async () => {
      render(<Calculator />);
      fireEvent.click(screen.getByTestId("multiply"));
      const result = await waitFor(() => screen.findByTestId("result"));
      expect(result).toHaveTextContent("Result: 6");
    });
  
    it("bolme emeliyyati zamani neticenin 2 olub olmadigini gostermek ucun yazilmis test", async () => {
      render(<Calculator />);
      fireEvent.click(screen.getByText("Divide 6 / 3"));
      const result = await waitFor(() => screen.findByTestId("result"));
      expect(result).toHaveTextContent("Result: 2");
    });
  
    it("buttona click etdiyimizde cavabin 3 olub olmadigini test elemek ucun yazilmis test", async () => {
      render(<Calculator />);
      fireEvent.click(screen.getByText("Sum 1 + 2"));
      const result = await waitFor(() => screen.findByTestId("result"));
      expect(result).toHaveTextContent("Result: 3");
    });
  
    it("cixma duymesinin click etdiyimizde cavabin 2 olub olmamasini yoxlamag ucun yazilmis test", async () => {
      render(<Calculator />);
      fireEvent.click(screen.getByText("Subtract 5 - 3"));
      const result = await waitFor(() => screen.findByTestId("result"));
      expect(result).toHaveTextContent("Result: -2");
    });
  
    it("hasili tapmag ucun click etdiyimizde cavabin 0 oldugunu test elemek ucun yazilmis bir test", async () => {
      render(<Calculator />);
      fireEvent.click(screen.getByTestId("multiply"));
      const result = await waitFor(() => screen.findByTestId("result"));
      expect(result).toHaveTextContent("Result: 0");
    });
  });
  