import { getData } from "../store/fatchApi.js";
import { CardComponennts, Users } from "../components/CardComponents.js";
let getall = await getData("products");
let users = await getData("users")
console.log(users);
let render = document.querySelector("#rendercard");
getall.map((result)=> render.innerHTML += CardComponennts(result));
users.map((u)=> render.innerHTML += Users(u));