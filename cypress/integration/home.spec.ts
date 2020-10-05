import formatAxeLog from "../helpers/formatAxeLog";

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should load home page", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.findByTestId("test-button")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Hello, world!");
      });
  });
  it("Has no detectable a11y violations on load", () => {
    cy.injectAxe();
    cy.checkA11y(null, null, formatAxeLog);
  });
});
