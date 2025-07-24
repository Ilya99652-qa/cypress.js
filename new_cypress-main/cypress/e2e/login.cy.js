describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
      cy.visit('https://login.qa.studio/'); // Зашел на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки (Забыл пароль)
     
      cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
      cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
      cy.get('#loginButton').click(); // Нажал войти
      
      cy.wait(5000)
      
      cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст о успешной авторизации
      cy.get('#messageHeader').should('be.visible'); // Проверяю что текст виден пользователям
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю наличие крестика
    })


    it('Восстановления пароля', function () {
      cy.visit('https://login.qa.studio/'); // Зашел на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки (Забыл пароль)
      
      cy.get('#forgotEmailButton').click(); // Нажал кнопку (забыл пароль)
      cy.get('#forgotForm > .header').contains('Восстановите пароль'); // Проверяю, чтот после перехода есть текст
      cy.get('#forgotForm > .header').should('be.visible'); // Проверяю что текст виден пользователям
      cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // Проверяю наличие крестика
      
      cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел логин для восстановления пароля
      cy.get('#restoreEmailButton').click(); //  Нажал на кнопку (отправить код)
      
      cy.wait(5000)
      
      cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, чтот после отправления мейла, появляется текст
      cy.get('#messageHeader').should('be.visible'); // Проверяю что текст виден пользователям
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю наличие крестика
    })


    it('НЕ верный пароль и верный логин', function () {
      cy.visit('https://login.qa.studio/'); // Зашел на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки (Забыл пароль)
     
      cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
      cy.get('#pass').type('iLoveqastud32'); // Ввел НЕ верный пароль
      cy.get('#loginButton').click(); // Нажал войти
      
      cy.wait(5000)
      
       cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст ошибки
       cy.get('#messageHeader').should('be.visible'); // Проверяю что текст виден пользователям
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю наличие крестика
    })

    it('Верный пароль и НЕ верный логин', function () {
      cy.visit('https://login.qa.studio/'); // Зашел на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки (Забыл пароль)
     
      cy.get('#mail').type('german@super.ru'); // Ввел НЕ верный логин
      cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
      cy.get('#loginButton').click(); // Нажал войти
      
      cy.wait(5000)
      
       cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст ошибки
       cy.get('#messageHeader').should('be.visible'); // Проверяю что текст виден пользователям
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю наличие крестика
    })

    it('Верный пароль и логин без @', function () {
      cy.visit('https://login.qa.studio/'); // Зашел на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки (Забыл пароль)
     
      cy.get('#mail').type('germandolnikov.ru'); // Ввел логин без @
      cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
      cy.get('#loginButton').click(); // Нажал войти
      
      cy.wait(5000)
      
      cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авт. вижу текст о ошибке
      cy.get('#messageHeader').should('be.visible'); // Проверяю что текст виден пользователям
      cy.get('#exitMessageButton').should('be.visible'); // Проверяю наличие крестика 
    })

    it('Верный пароль и верный логин НО НЕ ТОЛЬКО СТРОЧНЫЕ БУКВЫ', function () {
      cy.visit('https://login.qa.studio/'); // Зашел на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки (Забыл пароль)
     
      cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел верный логин не только сточными
      cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
      cy.get('#loginButton').click(); // Нажал войти
      
      cy.wait(5000)
      
      cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст о успешной авторизации
      cy.get('#messageHeader').should('be.visible'); // Проверяю что текст виден пользователям
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю наличие крестика
    })

})

