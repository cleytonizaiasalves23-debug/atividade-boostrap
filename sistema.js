const botaoCalcular = document.getElementById("calcular");

botaoCalcular.addEventListener("click", function () {
  const adultos = Number(document.getElementById("adultos").value);
  const criancas = Number(document.getElementById("criancas").value);
  const duracao = Number(document.getElementById("duracao").value);

  let multiplicador = 1;
  if (duracao >= 5) {
    multiplicador = 1.2; // Aumenta 20%
  }
  const carnePorAdulto = 250 * multiplicador;
  const linguicaPorAdulto = 150 * multiplicador;
  const frangoPorAdulto = 100 * multiplicador;
  const paoPorAdulto = 2 * multiplicador;
  const refriPorAdulto = 0.5 * multiplicador; // em litros
  const cervejaPorAdulto = duracao >= 5 ? 6 : 4; // latas

  const carnePorCrianca = carnePorAdulto / 2;
  const linguicaPorCrianca = linguicaPorAdulto / 2;
  const frangoPorCrianca = frangoPorAdulto / 2;
  const paoPorCrianca = paoPorAdulto / 2;
  const refriPorCrianca = refriPorAdulto / 2;

  const totalCarne =
    (adultos * carnePorAdulto + criancas * carnePorCrianca) / 1000;
  const totalLinguica =
    (adultos * linguicaPorAdulto + criancas * linguicaPorCrianca) / 1000;
  const totalFrango =
    (adultos * frangoPorAdulto + criancas * frangoPorCrianca) / 1000;

  const totalPao = adultos * paoPorAdulto + criancas * paoPorCrianca;
  const totalRefri = adultos * refriPorAdulto + criancas * refriPorCrianca;
  const totalCerveja = adultos * cervejaPorAdulto;

  document.getElementById("carne").innerText = totalCarne.toFixed(1) + " kg";
  document.getElementById("linguica").innerText =
    totalLinguica.toFixed(1) + " kg";
  document.getElementById("frango").innerText = totalFrango.toFixed(1) + " kg";
  document.getElementById("pao").innerText = Math.ceil(totalPao) + " unidades";
  document.getElementById("refrigerante").innerText =
    Math.ceil(totalRefri) + " litros";
  document.getElementById("cerveja").innerText = totalCerveja + " latas";
});
