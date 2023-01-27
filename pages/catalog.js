const pageCommands = {
  search(word) {
    this
      .setValue('@searchBar', [word, browser.Keys.ENTER]);
    return this; // Return page object for chaining
  }
};

module.exports = {
  url: 'http://testshop.sedtest-school.ru/',
  commands: [pageCommands],
  elements: {
    pageTitle: {selector: '//h4', locateStrategy: 'xpath'},
    searchBar: 'input[type="text"]',
    productTitle: {selector: '//h5/a', locateStrategy: 'xpath'},
  },
  sections: {
    topMenu: {
      selector: {selector: '//*[@id="navbarCollapse"]', locateStrategy: 'xpath'},
      elements: {
        main: '#nav_link_main > a',
        myCart: '[href="/mycart/"]',
        favorites: {selector: '//*[@href="/myfavorites/"]', locateStrategy: 'xpath'},
        toComein:'[href="/users/auth/"]',
      }
    }
  }
}

