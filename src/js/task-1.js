const categories = document.querySelector("#categories");
const children = categories.children;
const goBack = document.querySelector('a');
console.log(`Number of categories: ${children.length}`)
for (const child of children) {
    console.log(`Category: ${child.querySelector("h2").textContent}`);
    console.log(`Elements: ${child.querySelector("ul").children.length}`)

}
