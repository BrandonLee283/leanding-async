const API = 'https://api.escuelajs.co/api/v1/products'

const content = document.querySelector('#content') || null
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1b182d7fefmsh9ad0ec4052727c8p1341a1jsn77b8f502c925',
        'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
    }
};
async function Fdata(urlAPI) {
    const response = await fetch(urlAPI, options)
    const data = await response.json();
    return data;
}
(async () => {
    try {
        const juegos = await Fdata(API)
        let vista = `
        ${juegos.map((juego) =>`
        <div class="group relative">
        <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="" alt="" class="w-full">
            <p>${juego.title}</p>
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                title
            </h3>
        </div>
        </div>`).slice(0, 4).join('')}
    `;
        content.innerHTML = vista

    } catch (err) {
        alert(err);
    }
})();
// fetch('', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));