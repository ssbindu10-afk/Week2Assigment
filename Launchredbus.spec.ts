
/**
 * -------------------------------------------------------
 * Author      : Bindu
 * Program     : Launch redbus using Playwright
 * Description : Launch the redbus application using
 *               the Playwright page fixture.
 * Date        : 29-Jun-2026
 * -------------------------------------------------------
 */
import{test, chromium} from'@playwright/test';
test('launch redbus web application', async ({page}) => {
    //Navigate to the redbus application
    await page.goto("https://www.redbus.in/");
    //Get the current URL of the page
    const url=page.url();
})

   