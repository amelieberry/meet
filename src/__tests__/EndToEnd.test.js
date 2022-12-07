import puppeteer from "puppeteer"

// Feature 2 - Show / hide an event's details
describe('show/hide an event details', () => {
    // Scenario 1
    test('An event element is collapsed by default', async () => {
        const browser = await puppeteer.launch(); 
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
        browser.close();
    });
    // Scenario 2 - User can expand an event to see its details
    // Scenario 3 - User can collapse an event to hide its details
    
})