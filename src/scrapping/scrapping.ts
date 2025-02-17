import puppeteer, { Browser, LaunchOptions } from 'puppeteer';

export default class Scrapping {
    private url: string = 'https://senaigo.gupy.io/'
    private browser: Browser | null = null;
    private chromiumOptions: LaunchOptions = {
        browser: 'chrome',
        // Make browser logs visible
        dumpio: true,
        headless:false
      };

    constructor() {
    }

    async init_scrapping() {
        try {
            this.browser = await puppeteer.launch(this.chromiumOptions);
            const page = await this.browser?.newPage();
            await page?.goto(this.url);
            await page?.setViewport({ width: 1080, height: 1024 });

        } catch (error) {
            console.log(error)
        }
    }

    getBrowser(): Browser | null {
        return this.browser
    }

    setBrowser(browser: any) {
        this.browser = browser
    }
}