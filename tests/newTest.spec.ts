import {test, expect} from '@playwright/test'

test.beforeEach('navigate to page', async({page}) => {
    await page.goto('https://demoqa.com/')
})

test('Textbox', async ({page}) => {
    const textBoxform = page.getByText('elements')
    await textBoxform.click()
    await page.locator('.text', {hasText: "Text"}).click()
    await page.getByPlaceholder('Full name').fill("John Doe")

    expect
})
