{       /* <div class="head">
            <h1 class="head__h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis?
            </h1>
            <p class="head_p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa eveniet 
                fuga voluptates, laudantium, excepturi deserunt incidunt impedit corporis explicabo, 
                cum debitis cupiditate ullam harum exercitationem.
            </p>
        </div>

        <div class="body">
            <h1 class="body__h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, officiis.
            </h1>
            <p class="body__p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque quae placeat 
                nesciunt velit, id laborum porro modi ratione dicta?
            </p>
        </div> */}



const dataEl = document.querySelector("div.container");

    dataEl.insertAdjacentHTML(
        'beforeend',`
        <div class="head">
        <h1 class="head__h1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis?
        </h1>
        <div class="head__img">
            <img class="head__svg" src="img/1.svg" alt="">
            <img class="head__svg" src="img/2.svg" alt="">
        </div>
        <p class="head__p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa eveniet 
            fuga voluptates, laudantium, excepturi deserunt incidunt impedit corporis explicabo, 
            cum debitis cupiditate ullam harum exercitationem.
        </p>
    </div>

    <div class="body">
        <h1 class="body__h1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, officiis.
        </h1>
        <p class="body__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque quae placeat 
            nesciunt velit, id laborum porro modi ratione dicta?
        </p>
    </div>
    `);