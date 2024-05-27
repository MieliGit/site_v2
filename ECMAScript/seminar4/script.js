
const myPromise = new Promise ((resolve, reject)=>{});

myPromise.then((value)=>{}).catch((error)=>{console.log('ошибка')});

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url).then((response) => response.json()).then((data)=>(console.log(data))).catch((error)=>(console.error(`Ошибка ${error}`)));

const getData = (url) => new Promise((resolve, reject)=>{fetch(url)
    .then((response)=> response.json)
    .then((data) => resolve(data))
    .catch((error) => reject(error)
)
});

getData("https://jsonplaceholder.typicode.com/users").then((data)=>(console.log(data))).catch((error)=>(console.log(error.message)));


const getData2 = async (url)=>{
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error);
    }
};


const data2 = await getData2(url);
console.log(data2);