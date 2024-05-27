// 0O8QFGmN8LaevGvZuoBIDMLDPaoFY7Pv18LUMAFv
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

const nasaUrl = "https://api.nasa.gov/planetary/apod?api_key=0O8QFGmN8LaevGvZuoBIDMLDPaoFY7Pv18LUMAFv&count=10";


const getDataNasa = async (url)=>{
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error);
    }
};


const data2 = await getDataNasa(nasaUrl);
console.log(data2);

// array.forEach(element => {
    
// });

const dataEl = document.querySelector("div.datalog");

data2.forEach(element => {
    dataEl.insertAdjacentHTML(
        'beforeend',`
    <figure>
    <img src="${element.url}" />
    <figcaption>${element.explanation}</figcaption>
    </figure>
    `)
});
