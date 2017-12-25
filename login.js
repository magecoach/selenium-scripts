module.exports = {
  run(context) {
    return context.runWithDriver((driver) => {
      return driver.get(context.url)
        .then(() => {
          const webdriver = context.webdriver;
          const until = webdriver.until;
          const By = webdriver.By;
          const userName = 'roni_cost@example.com';
          const password = 'roni_cost3@example.com';
          const loginForm = driver.findElement(By.name('send'));
          driver.findElement(By.id('email')).sendKeys(userName);
          driver.findElement(By.id('pass')).sendKeys(password);
	  loginForm.submit();
          return driver.wait(until.elementLocated(By.id('block-collapsible-nav')), 3000);
	});
    })
  }
};
