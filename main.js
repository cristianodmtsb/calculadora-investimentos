import { generateReturnsArray } from './src/investmentGoals';

const calculateButton = document.getElementById('btn-calcular-investimento');

function renderInvestments() {
  const aporteInicial = Number(document.getElementById('aporte-inicial').value);
  const aporteMensal = Number(document.getElementById('aporte-mensal').value);
  const tempodeContribuicao = Number(
    document.getElementById('prazo-de-aportes').value,
  );
  const periodoContribuicao = document.getElementById(
    'periodo-prazo-de-aportes',
  ).value;
  const rentabilidade = Number(document.getElementById('rentabilidade').value);
  const periodoRentabilidade = document.getElementById(
    'periodo-rentabilidade',
  ).value;
  const taxaSobreLucro = Number(
    document.getElementById('taxas-sobre-lucro').value,
  );

  const returnsArray = generateReturnsArray(
    aporteInicial,
    aporteMensal,
    tempodeContribuicao,
    periodoContribuicao,
    rentabilidade,
    periodoRentabilidade,
  );

  console.log(returnsArray);
}

calculateButton.addEventListener('click', renderInvestments);
