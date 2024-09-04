import {test, expect} from '@playwright/test'

test.beforeEach('navigate to page', async({page}) => {
    await page.goto('https://demoqa.com/')
})

test('Textbox', async ({page}) => {
    const textBoxform = page.locator('avatar mr-sm-2')
    await textBoxform.click()
})
