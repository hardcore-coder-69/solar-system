const types = 4
const colors = ['rgb(255, 242, 0)', 'rgb(255, 221, 0)', 'rgb(255, 179, 0)', 'rgb(255, 132, 0)']
const sizes = ['20px', '15px', '10px', '5px']

const starsEl = document.getElementById("stars")

let stars = ''
for (let i = 0; i < 250; i++) {
    let type = Math.floor(Math.random() * types)
    stars += `<i class="fa fa-star blink" 
                style="color: ${colors[type]}; 
                    font-size: ${sizes[type]}; 
                    top: ${Math.floor(Math.random() * 95)}%; left: ${Math.floor(Math.random() * 95)}%;
                    animation-delay: ${type}s;
                "></i>`
}

starsEl.innerHTML = stars