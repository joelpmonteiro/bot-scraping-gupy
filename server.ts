import { app } from "./src";
import Scrapping from "./src/scrapping/scrapping";

app.listen(3333, async () => {
    console.log('servidor rodando')

    const scrapping = new Scrapping();
    scrapping.init_scrapping().then(()=>{
        console.log('teste')
    });
})

