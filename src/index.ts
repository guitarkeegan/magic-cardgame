import fs from "fs";
// 3ED code
async function main(){
    let version = "v1"
    let resource = "cards";
    let id = "3ED";
    const res = await fetch(`https://api.magicthegathering.io/${version}/${resource}?types=Land&set=${id}`);
    console.log("getting all card sets.. ");
    const file = await res.text()
    fs.writeFileSync("land", file);
}


main().
    then(()=> console.log("Fetch completed!")).
    catch(error => console.error(error));