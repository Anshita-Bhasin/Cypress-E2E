// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.visit('')
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
    cy.get('input.btn.btn-primary').click()
})
// cypress/support/commands.js

Cypress.Commands.add("captureConsoleLogs", () => {
    const logs = [];

    cy.on("window:console", (log) => {
        logs.push(log);
    });

    Cypress.once("test:after:run", () => {
        // Write the console logs to a file or any other preferred storage
        // In this example, we append logs to a file named "consoleLogs.txt"
        cy.writeFile("consoleLogs.txt", logs.join("\n"), { flag: "a+" });
    });
});


