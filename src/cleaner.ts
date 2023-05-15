import fs from "fs";

async function main(){
    const whiteCards = fs.readFileSync("white.json", "utf8");
    const jsonCards = JSON.parse(whiteCards);
}

main()
.then(data => console.log(data))
.catch(error => console.error(error));