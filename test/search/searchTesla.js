module.exports = {
  before(browser) {
    browser.page
      .catalog()
      .navigate()
      .waitForElementVisible("@pageTitle", "Catalog title visible")
      .assert.titleContains("TestGym", "title ok")
      .assert.textContains("@pageTitle", "Каталог", "Catalog ok");
  },

  after(browser) {
    browser.end();
  },

  "Search for Tesla car": function (browser) {
    browser.page
      .catalog()
      .search("Tesla")
      .waitForElementVisible("@pageTitle", "Title here")
      .assert.titleContains("TestGym", "title ok")
      .assert.textContains("@pageTitle", "Каталог", "Каталог title ok")
      .assert.urlContains("Tesla")
      .assert.textContains("@productTitle", "Tesla");
  },
};
