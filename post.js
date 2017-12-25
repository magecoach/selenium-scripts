module.exports = {
  run(context) {
    return context.runWithDriver((driver) => {
      return driver.get('https://m2ee.supportdesk.nu/checkout/cart/')
	.then(() => {
		const webdriver = context.webdriver;
		const until = webdriver.until;
		const By = webdriver.By;
		return driver.wait(until.elementLocated(By.id('shopping-cart-table')), 3000);
	});
    });
  }
};
