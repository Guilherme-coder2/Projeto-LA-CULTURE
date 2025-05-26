async function converterMoeda() {
    const valor = document.getElementById('valor').value;
    const moeda = document.getElementById('moeda').value;
  
    if (!valor) {
      alert("Digite um valor em BRL!");
      return;
    }
  
    try {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${valor}&from=BRL&to=${moeda}`);
      const data = await res.json();
      const convertido = data.rates[moeda];
  
      document.getElementById('resultado').innerText =
        `${valor} BRL = ${convertido.toFixed(2)} ${moeda}`;
    } catch (error) {
      document.getElementById('resultado').innerText = "Erro ao converter moeda.";
    }
  }