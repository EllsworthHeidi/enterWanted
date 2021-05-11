import { By, until, WebDriver } from "selenium-webdriver";


export class BoredPandaPage {
  driver: WebDriver;
 
  url: string = "https://www.boredpanda.com/";

  header: By = By.css(".bp-container");
  login: By = By.css(".login-url");
  emailInput: By = By.name("email");
  passwordInput: By = By.name("password");
  searchBtn: By= By.className("search-icon")
  searchBar: By = By.className("search-box");
  results: By = By.className("search");

  constructor(driver: WebDriver) {
    this.driver = driver;
  }
  async navigate() {
    await this.driver.get(this.url);
  }

  async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
  }

  async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getText();
  }

  async doSearch(text: string) {
    await (await this.driver.findElement(this.searchBtn)).click()
    return this.sendKeys(this.searchBar, `${text}\n`);
  }

  async getResults(){
    return this.getText(this.results);
  }

  async getHeader2() {
    console.log("Header ==" + this.getText(this.header));
    return this.getText(this.header);
  }

  async getPageText() {
    let data = [];
    await this.driver.wait(until.elementsLocated(this.header));
 
    let elements = await this.driver.findElements(this.header);
    for (let i = 0; i < elements.length; i++) {
      data.push(await (await elements[i].getText()));
    }
