const divContEl = document.querySelector('div.container');


const parseResult = JSON.parse(dataInfo);
parseResult.forEach(element => {
    const newDivEl = document.createElement('div');
    newDivEl.classList.add(element.class);
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', element.url);
    imgEl.setAttribute('width', element.width);
    imgEl.setAttribute('height', element.height);
    const textImgEl = document.createElement('p');
    textImgEl.innerHTML = element.text;
    newDivEl.appendChild(imgEl);
    newDivEl.appendChild(textImgEl);
    divContEl.appendChild(newDivEl);
});