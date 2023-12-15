import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App"
// Your tests here
  
  test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);
  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  // Assert

  expect(topLevelHeading).toBeInTheDocument();
});


  test("displays and image with the alternative text Image of Creator", () => {
    // Arrange
    render(<App />);
    // Act
    const image = screen.getByAltText("Image of Creator");

    expect(image).toHaveAttribute("src", "https://media.licdn.com/dms/image/C4D03AQH97IXQRqD0gQ/profile-displayphoto-shrink_800_800/0/1590433316520?e=2147483647&v=beta&t=CklzBbgS66cxo90tRBWbUDuRopa7TRIx9we5OqfjYq4");
  });

  test("displays second-level heading with the text `About Me`", () => {
    render(<App />);
  
    const secondLevelHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
  
    expect(secondLevelHeading).toBeInTheDocument();
  });



  test("displays information about the creator", () => {
    render(<App />);
  
    const bio = screen.getByText(/I am a teacher learning to code/i);
  
    expect(bio).toBeInTheDocument();
  });



  test("displays the correct links", () => {
    render(<App />);
  
    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin/i,
    });
  
    expect(githubLink).toHaveAttribute(
      "href",
      expect.stringContaining("https://github.com/yisel260")
    );
  
    expect(linkedinLink).toHaveAttribute(
      "href",
      expect.stringContaining("www.linkedin.com/in/yisel-cintora-vega")
    );
  });