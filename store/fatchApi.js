const  Base_url = "https://fakestoreapi.com/";
export async function getData(endpoint){
  try{
    const response = await fetch(`${Base_url}${endpoint}`);
    const data = await response.json();
    return data;
  }catch(e){
    console.log(e);
  }
}