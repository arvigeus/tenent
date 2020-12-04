describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should load home page", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.findByRole("button", { name: /Test Button/i })
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Hello, world!");
      });
  });
  it("should pass the audits", () => {
    // FIXME: https://github.com/mfrachet/cypress-audit/issues/36
    // @ts-expect-error
    cy.lighthouse();
    // @ts-expect-error
    cy.pa11y();
  });
});
