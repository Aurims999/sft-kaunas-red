// @ts-check
const { test, expect } = require('@playwright/test');

//Login testing
//Invalid login's
/*
test('Invalid login should throw an exception', async({page}, testInfo) => {
  testInfo.setTimeout(15000); //Login must be done during first 15 seconds
  await page.goto('https://lunch.devbstaging.com/login-password');
  await page.locator('[aria-label="Email"]').fill('notEmail');
  await page.locator('[aria-label="Password"]').fill('non-existing Password');
  await page.locator('button:has-text("Login")').click();
});*/

test('Logging in successfully brings you to the dishes URL', async ({ page }, testInfo) => {
  testInfo.setTimeout(20000);
  loginToWebsite(page, 'Aurimas.Buta@sourceryacademy.com', 'nera_svarbus46');
  await page.waitForURL('https://lunch.devbstaging.com/dishes/**');
  await expect(page.url()).toContain('https://lunch.devbstaging.com/dishes');
  await page.close();
});

/* (THERE WAS PLENTY OF PROBLEMS WITH LOGGING IN)
test('New order is displayed in the history', async ({page}) => {
  loginToWebsite(page, 'Aurimas.Buta@sourceryacademy.com', 'nera_svarbus46');
  await page.goto("https://lunch.devbstaging.com/dishes/monday/Rand");
  await page.locator('.v-card__text').first().click();
  await page.locator('button:has-text("5.00 €send")').click();
  await page.goto('https://lunch.devbstaging.com/ordersHistory');
  await page.pause();
});*/

async function loginToWebsite(page, email, password) {
	await page.goto('https://lunch.devbstaging.com/login-password');
  await page.locator('[aria-label="Email"]').fill(email);
  await page.locator('[aria-label="Password"]').fill(password);
  await page.locator('button:has-text("Login")').click();
}