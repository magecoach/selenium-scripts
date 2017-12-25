module.exports = {
  run(context) {
    return context.runWithDriver((driver) => {
      return driver.get(context.url);
    });
  }
};
