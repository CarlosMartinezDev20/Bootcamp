import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
<h1>Holiwis</h1>
<button id="btn-magia">magia</button>
</div>
`
const btnDOM = document.getElementById("btn-magia") as HTMLButtonElement;
console.log(btnDOM);
//hacer que el boton realize un alert 
if (btnDOM) {
  btnDOM.addEventListener('click', () => {
    alert('chauchis');
  });
}