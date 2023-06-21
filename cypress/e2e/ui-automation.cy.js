describe("Service NSW UI Automation", () => {
  it("Should visit", () => {
    cy.visit("https://www.service.nsw.gov.au/");

    cy.get(":nth-child(3) > .container > .tile-grid--3x > :nth-child(5) > .tile").click();
    cy.get(":nth-child(1) > .tile-grid > :nth-child(4) > .tile").click();
    cy.get(":nth-child(6) > .tile").click();
    cy.get(".fixed-cta__action > .button").click();

    //If you want replaced "Sydney 2000" to “Sydney Domestic Airport 2020” and "Marrickville Service Center" to “Rockdale Service Centre”
    cy.get("#locatorTextSearch").clear().type("Sydney 2000");
    cy.get(".form__actions > .button").click();
    cy.get(".location__title").contains("Marrickville Service Centre").click();
  });
});
