// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("FirstTest", function() {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function() {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function() {
    await driver.quit();
  });
  it("FirstTest", async function() {
    await driver.get("https://sbuyb.csb.app/");
    await driver.manage().window().setRect(1920, 1057)
    {
      const element = await driver.findElement(
        By.css("#AdministrationNav > .MuiTab-wrapper")
      );
      await driver
        .actions({ bridge: true })
        .moveToElement(element)
        .perform();
    }
    {
      const element = await driver.findElement(
        By.css("#AdministrationNav > .MuiTab-wrapper")
      );
      await driver
        .actions({ bridge: true })
        .moveToElement(element)
        .clickAndHold()
        .perform();
    }
    {
      const element = await driver.findElement(
        By.css("#AdministrationNav > .MuiTab-wrapper")
      );
      await driver
        .actions({ bridge: true })
        .moveToElement(element)
        .perform();
    }
    {
      const element = await driver.findElement(
        By.css("#AdministrationNav > .MuiTab-wrapper")
      );
      await driver
        .actions({ bridge: true })
        .moveToElement(element)
        .release()
        .perform();
    }
    await driver
      .findElement(By.css("#AdministrationNav > .MuiTab-wrapper"))
      .click();
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body");
      await driver
        .actions({ bridge: true })
        .moveToElement(element, 0, 0)
        .perform();
    }
    await driver
      .findElement(By.css("#AddressBookNav > .MuiTab-wrapper"))
      .click();
    await driver.findElement(By.css("#TicketsNav > .MuiTab-wrapper")).click();
    assert(
      (await driver
        .findElement(By.css("#AdministrationNav > .MuiTab-wrapper"))
        .getText()) == "ADMINISTRATION"
    );
    {
      const element = await driver.findElement(
        By.css("#AdministrationNav > .MuiTab-wrapper")
      );
      await driver
        .actions({ bridge: true })
        .moveToElement(element)
        .perform();
    }
  });
});
