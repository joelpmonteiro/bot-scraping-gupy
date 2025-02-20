import { app } from "./src";
import Scrapping from "./src/scrapping/scrapping";

app.listen(3333, async () => {
    console.log('servidor rodando')

    const scrapping = new Scrapping();
    //iniciando o serviço webscrappgin
    await scrapping.init_scrapping();
    const elemento = await scrapping.getPage()?.$$('div.sc-f3c5eae4-0');
    if (elemento) {
        const el = elemento[2];
        await el.click();

        console.log(el.asElement())
    }

})

