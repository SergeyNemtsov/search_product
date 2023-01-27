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

  "Search for Word": function (browser) {
    let word = browser.globals.searchText;

    browser.page.catalog()
      .search(word)
      .waitForElementVisible("@pageTitle", "Title here")
      .assert.titleContains("TestGym", "title ok")
      .assert.textContains("@pageTitle", "Каталог", "Каталог title ok")
      .assert.urlContains(encodeURI(word))
      .assert.textContains('@productTitle', word);

  },
};
