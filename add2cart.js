module.exports = {
  run(context) {
    return context.runWithDriver((driver) => {
      return driver.get(context.url)
	.then(() => {
		driver.manage().deleteAllCookies()
		    })
	.then(() => {
		const webdriver = context.webdriver;
		const until = webdriver.until;
		const By = webdriver.By;
		driver.manage().addCookie({
			name: 'form_key',
			value: '1234567890'
			})
	.then(function () {
		driver.manage().getCookie('form_key')
		.then(function (cookie) {
			console.log(cookie);
				});
			});
	//return driver.wait(until.elementLocated(By.id('shopping-cart-table')), 10000);
		});
    });
  }
};
