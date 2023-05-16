import fs from "fs";

async function main(){
    let whiteCards = fs.readFileSync("white.json", "utf8");
    let cardsObj = JSON.parse(whiteCards);
    console.log("removing types");
    

    const toRemove = ["type", "subtypes", "rarity", "set", "setName", "layout", "setName", "multiverseid", "rulings", "foreignNames", "originalText", "originalType", "printings", "superTypes", "variations", "legalities"];
    

    function fieldsToRemove(jsonObj: Record<string,any>[], fields: string[]): Record<string,any> {
        for (let card of jsonObj){
            for (let field of fields){
                delete card[field]
            }
        } 
        return jsonObj;
    }

    const newObj = fieldsToRemove(cardsObj.cards, toRemove);

    console.log(newObj);
}

main()
.then(data => console.log(data))
.catch(error => console.error(error));