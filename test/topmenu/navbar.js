module.exports = {
  before(browser) {
    browser.page.catalog()
      .navigate()
      .waitForElementVisible("@pageTitle", "Catalog title visible")
      .assert.titleContains("TestGym", "title ok")
      .assert.textContains("@pageTitle", "Каталог", "Catalog ok");
  },

  after(browser) {
    browser.end();
  },

  "Verify top menu elements": function (browser) {
    let topMenu = browser.page.catalog().section.topMenu;

    topMenu.verify.visible('@main', 'Ссылка на главную');
    topMenu.verify.attributeEquals('@main', 'href', '/', 'Ссылка на главную');
    topMenu.verify.visible('@myCart', 'Корзина');
    topMenu.verify.visible('@favorites', 'Избранное');
    topMenu.verify.visible('@toComein', 'Авторизация');
    topMenu.verify.textEquals('@toComein', 'Войти');

    topMenu.strictClick('@toComein')
    browser.assert.urlContains('users/auth', 'Переход на страницу авторизации')

  },


};
