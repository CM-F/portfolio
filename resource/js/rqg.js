
const container = document.body.querySelector('.project-presentation');
const button = document.querySelector('.button');

const runRQG = () => {
    let index1 = 0;
    index1 += Math.floor(Math.random() * 30);
    container.innerHTML = `
    Hey folks ! Here's the quotation of the day :
    <pre class="ascii-art">${asciiArt[index1]}</pre>
    <blockquote>"${movieLines[index1]}"</blockquote>
    <p><strong>${actors[index1]}</strong> as '${characters[index1]}'</p>
    <p><em>${movieTitles[index1]}</em>, ${productionYears[index1]}</p>
    `;
}

button.onclick = runRQG;