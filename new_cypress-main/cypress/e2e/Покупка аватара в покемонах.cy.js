describe('Авторизация и покупка аватара', function () {

    it('Авторизация и покупка аватара', function () {
      cy.visit('https://pokemonbattle.ru/'); // Зашел на сайт
      cy.get('.style_1_popup_white_title').contains('Битва покемонов'); //  Проверяю, что на страницу авторизации есть надпись
      cy.get('.style_1_popup_white_title').should('be.visible'); // Проверяю что текст виден пользователям
      
      cy.get('#k_email').type('USER_LOGIN'); // Ввел верный логин
      cy.get('#k_password').type('USER_PASSWORD'); // Ввел верный пароль
      cy.get('.MuiButton-root').click(); // Нажал войти
     
      cy.wait(5000)

      cy.get('.style_1_heading_38_400_pokemon_classic').contains('Покемоны'); // Проверяю, что после авт. вижу текст Покемоны
      cy.get('.style_1_heading_38_400_pokemon_classic').should('be.visible'); // Проверяю что текст виден пользователям

      cy.get('.header_card_trainer').click() // нажимаю на своего тренера

      cy.wait(5000)


      cy.get('.single_page_body_content_title_icons_name').contains('NAME HERO'); // Проверяю, что после перехода на тренера виден ник Ashiko
      cy.get('.single_page_body_content_title_icons_name').should('be.visible'); // Проверяю что текст виден пользователям
      cy.get('.single_page_body_content_title_text').contains('Чемпион'); //  над ником прописанно Чемпион
      cy.get('.single_page_body_content_title_text').should('be.visible'); // Проверяю что текст виден пользователям

      cy.get('[data-qa="shop"] > .k_trainer_in_button_wrapper > .k_trainer_in_button_title_no_desc').click() // Нажимаю на кнопку смена аватара

      cy.wait(5000)

      cy.get('.pokemon__title').contains('Магазин'); // Проверяю, что после перехода вижу слово (Магазин)
      cy.get('.pokemon__title').should('be.visible'); // Проверяю что текст виден пользователям

      cy.get(':nth-child(9) > .shop__button').click() // кликаю купить на выбраном аватаре
      
      cy.wait(5000)
      
      
      cy.get('.payment_header_content_title_h2').contains('Пикачунькофф'); // Проверяю, что после перехода вижу Пикачунькофф
      cy.get('.payment_header_content_title_h2').should('be.visible'); // Проверяю что текст виден пользователям
      cy.get('.payment_header_content_title_text').contains('касса'); // Проверяю, что после перехода вижу касса
      cy.get('.payment_header_content_title_text').should('be.visible'); // Проверяю что текст виден пользователям

      cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996'); // Вводим номер карты
      cy.get(':nth-child(1) > .style_1_base_input').type('1226'); // Вводим срок действия
      cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // Вводим CVV карты
      cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('NAME'); // Водим имя владельца
      cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click() // Нажимаем кнопку оплатить

      cy.wait(5000)
      
      
      cy.get('.payment_form_3ds_title').contains('Подтверждение покупки'); // Проверяю, что после нажатия (оплатить), видим (Подтверждение покупки)
      cy.get('.payment_form_3ds_title').should('be.visible'); // Проверяю что текст виден пользователям

      cy.get('.style_1_base_input').type('56456'); // вводим код подтверждения СМС
      cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click() // Нажимаем кнопку Оплатить

      cy.wait(5000)
      
      
      cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // Проверяю, что после нажатия (оплатить), видим (Покупка прошла успешно)
      cy.get('.payment_status_top_title').should('be.visible'); // Проверяю что текст виден пользователям
    })




})

