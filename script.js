function dinheiro(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
function calcular() {
    let nome=parseFloat(document.getElementById('name').value);
    let cargo = parseFloat(document.getElementById('position').value);
    let salario = parseFloat(document.getElementById('salary').value);

    document.getElementById('result').innerHTML = `Nome: ${nome}<br>Cargo: ${cargo}<br>Salário: ${dinheiro(salario)}`;
}

const media=(salario1, salario2, salario3) => (salario1 + salario2 + salario3) / 3;
function calcularMedia() {
    let nome = document.getElementById('name').value;
    let cargo = document.getElementById('position').value;
    let salario1 = parseFloat(document.getElementById('s1').value);
    let salario2 = parseFloat(document.getElementById('s2').value);
    let salario3 = parseFloat(document.getElementById('s3').value);

    document.getElementById('result').innerHTML = `Nome: ${nome}<br>Cargo: ${cargo}<br>Média Salarial: ${dinheiro(media(salario1, salario2, salario3))}`;
}  
