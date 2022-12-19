
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test ('Clicking the Draw button displays the div with id = choices', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(4000)
    const divider = await driver.findElement(By.id('choices'))
    const displayed = await 
})
