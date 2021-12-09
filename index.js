const puppeteer = require("puppeteer");
const urlInis =
  "https://burghquayregistrationoffice.inis.gov.ie/Website/AMSREG/AMSRegWeb.nsf/AppSelect?OpenForm";
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(urlInis);
  await page.waitForSelector("#UsrDeclaration");
  await page.evaluate(() => {
    document.querySelector("#UsrDeclaration").parentElement.click();
  });
  await page.select("#Category", "All");
  await page.select("#SubCategory", "All");
  await page.type("#GNIBNo", "911805");
  await page.select("#Salutation", "Miss");
  await page.type("#GivenName", "Dolores");
  await page.type("#MidName", "Marlen");
  await page.type("#SurName", "Tamez");
  await page.focus("#DOB");
  await page.$eval("#DOB", (e) => e.removeAttribute("readonly"));
  await page.type("#DOB", "21/04/1995");
  await page.select("#Nationality", "Mexico");
  await page.type("#Email", "marlentamez1@hotmail.com");
  await page.type("#EmailConfirm", "marlentamez1@hotmail.com");
  await page.waitForSelector("#FamAppYN");
  await page.select("#FamAppYN", "No");
  await page.select("#PPNoYN", "Yes");
  await page.type("#PPNo", "G41915135");
  await page.click("#btLook4App");
  await page.waitForFunction(
    () => document.querySelector("#AppSelectChoice").length > 0
  );
  await page.select("#AppSelectChoice", "S");
  await page.waitForFunction(() => {
    document.querySelector("#btSrch4Apps");
  });
  await page.click("#btSrch4Apps");
})();
