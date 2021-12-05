// ATUALIZAR VALOR DO RANGE NA TELA
function upd_value(e, id){
  let element = document.getElementById(id);
  element.innerHTML = e.value;
  return e.value;
}
let btn_calcular = document.getElementById("calcular");
btn_calcular = addEventListener("click", calcular);

function calcular() {
  let qtd_adultos = document.getElementById('adultos').value;
  let qtd_criancas = document.getElementById('criancas').value;
  let duracao = document.getElementById('duracao').value;
  
  let carne = 0;
  let cerveja = 0;
  let refrigerante = 0;
  
  if (duracao >= "06:00") {
    carne = qtd_adultos * 650 + qtd_criancas * 325;
    cerveja = qtd_adultos * 2000;
    refrigerante = qtd_adultos * 1500 + qtd_criancas * 750;
  } else {
    carne = qtd_adultos * 400 + qtd_criancas * 200;
    cerveja = qtd_adultos * 1200;
    refrigerante = qtd_adultos * 1000 + qtd_criancas * 500;
  }

  let container_result = document.getElementsByClassName('result')[0];
  container_result.style.display = 'block';

  let spn_carne = document.getElementById("carne");
  spn_carne.innerHTML =(carne/1000).toFixed(2);
  let spn_refrigerante = document.getElementById("refrigerante");
  spn_refrigerante.innerHTML = Math.round((refrigerante/1000).toFixed(1));
  let spn_cerveja = document.getElementById("cerveja");
  spn_cerveja.innerHTML = Math.round((cerveja/1000).toFixed(3));
  }