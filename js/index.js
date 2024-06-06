import { getData } from "../store/fatchApi.js";
import { CardComponennts } from "../components/CardComponents.js";
let getall = await getData("products");
let render = document.querySelector("#rendercard");
console.log(getall);
getall.map((result)=> render.innerHTML += CardComponennts(result));