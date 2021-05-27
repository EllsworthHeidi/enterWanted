import { Builder, By, Capabilities, until } from "selenium-webdriver"

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('Enter Wanted', async () => {
    await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html');
    let weight = await (await driver.findElement(By.name("wgtInput")));
    await weight.sendKeys('1');
    let submit = await (await driver).findElement(By.id("saveBtn"));
    await submit.click(); 
    let clear= await (await driver).findElement(By.id("clearBtn"));
    await clear.click();
    //First parameter
    await weight.sendKeys("100");
    await submit.click();
    await clear.click();
    //testing within the paramters
    await weight.sendKeys("1000");
    await submit.click();
    //testing out of the parameters 
});

afterAll(async () => {
    await driver.quit();
  });

