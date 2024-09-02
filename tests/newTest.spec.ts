import {test, expect} from '@playwright/test'

test.beforeEach('navigate to page', async({page}) => {
    await page.goto('https://demoqa.com/')
})

