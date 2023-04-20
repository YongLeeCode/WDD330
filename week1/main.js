/*
review API
get list of types from api
display the types
add event listener to the types
when a type is clicked
    get the pokemon that are of the selected type
    display the list of pokemon
*/

//pokemon types' api
const baseURL = "https://pokeapi.co/api/v2/";
getData(baseURL);

// //셋은 다른 방식의 같은 뜻
// async function getData(url){}
// const getData = async function(url){}
// const getData = async (url)=>{}
async function getData(url){
    const response = await fetch(baseURL + "type");
    const data = await response.json();
    console.log(data);
}

function renderTypes(list){
    const typeListElement = document.querySelector('#typeList');
    const htmlString = list.map()
}


