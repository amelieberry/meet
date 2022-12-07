import puppeteer from "puppeteer"

// Feature 2 - Show / hide an event's details
describe('show/hide an event details', () => {
    let browser, page;
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    // Scenario 1
    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
    });

    // Scenario 2
    test('User can expand an event to see its details', async () => {
        await page.click('.event .toggle-details');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeDefined();
        
    })

    // Scenario 3 - User can collapse an event to hide its details
    
})