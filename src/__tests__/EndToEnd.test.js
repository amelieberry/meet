import puppeteer from "puppeteer"

// FEATURE 1
describe('Filter events by city', () => {
    let browser, page;
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch({
            // headless: false,
            // slowMo: 250,
            // ignoreDefaultArgs: ['--disable-extensions'] 
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    // Scenario 1
    test('When user has not searched for a city, show upcoming events from all cities', async () => {
        const eventCount = await page.$$eval('.event', (element) => element.length);
        expect(eventCount).toBe(2); // 2 events in mock data
    });

    // Scenario 2
    test('User should see a list of suggestions when they search for a city', async () => {
        await page.type('.city', 'Berlin', { delay: 100 });
        const suggestionCount = await page.$$eval('.suggestions li', (element) => element.length);
        expect(suggestionCount).toBe(2); // 2 suggestions displayed: the selected city and the "see all cities"
    });

    // Scenario 3
    test('User can select a city from the suggested list', async () => {
        await page.reload();
        await page.type('.city', 'Berlin', { delay: 100 });
        await page.click('.suggestions li');
        const eventCount = await page.$$eval('.event', (element) => element.length);
        expect(eventCount).toBe(1);
    });
})

// FEATURE 2
describe('show/hide an event details', () => {
    let browser, page;
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch({
            // headless: false,
            // slowMo: 250,
            // ignoreDefaultArgs: ['--disable-extensions'] 
        });
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
    });

    // Scenario 3
    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .toggle-details');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
    });
})