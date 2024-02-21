//your code here
cy.visit(baseUrl + "/main.html");
cy.contains('List of medias');
cy.get('ol li:last audio').should('have.attr', 'src', "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg");
