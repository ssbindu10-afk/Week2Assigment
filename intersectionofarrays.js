const arry1 = ["selenium", "cypress", "playwright", "puppeteer"];
const arry2 = ["cypress", "playwright", "webdriverio", "testcafe"];
const intersection = arry1.filter(value => arry2.includes(value));
console.log(intersection);
