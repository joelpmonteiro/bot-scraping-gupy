import puppeteer, { Browser, LaunchOptions, Page } from 'puppeteer';

export default class Scrapping {
    private url: string = 'https://senaigo.gupy.io/'
    private browser: Browser | null = null;
    private page: Page | null = null;
    private chromiumOptions: LaunchOptions = {
        browser: 'chrome',
        // Make browser logs visible
        dumpio: true,
        headless: false
    };

    constructor() {
    }

    async init_scrapping() {
        try {
            this.browser = await puppeteer.launch(this.chromiumOptions);
            this.page = await this.browser?.newPage();
            await this.page.goto(this.url);
            await this.page.setViewport({ width: 1280, height: 1024 });
            console.log('teste')
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

    getPage(): Page | null {
        return this.page;
    }

    setPage(page: any) {
        this.page = page
    }

    getClosBrowser() {
        return this.browser?.close();
    }
}