let btn = document.querySelector('button');
let url1 = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click",async()=>{
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#para");
    p.innerText = fact;

    let link = await getImages();
    let img = document.querySelector("#result");
    img.setAttribute("src",link);
    console.log(link);
})
let url2 = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url2);
        console.log(res);
       return res.data.fact;

    }catch(err){
        return "No Fact found 😕";
    }
};
async function getImages(){
    try{
        let res1 = await axios.get(url1);
        console.log(res1);
        return res1.data.message;

    }catch(err){
        return "No image 🥲";
    }
}
console.log(getImages());
let url3 = "http://universities.hipolabs.com/search?name=";
let btn1 = document.querySelector('#search');
btn1.addEventListener("click",async()=>{
    let country = document.querySelector('input').value;
    console.log(country);
    let clgArr = await getClg(country);
    console.log(clgArr);
    show(clgArr);


});
function show(clgArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of clgArr){
        console.log(col.name);
        let li = document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getClg(country){
    try{
        let res2 = await axios.get(url3 + country);
        return res2.data;
    }catch(err){
        console.log(err);
    }
 
}