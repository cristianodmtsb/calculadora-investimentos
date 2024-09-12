import { generateReturnsArray } from './src/investmentGoals';

const calculateButton = document.getElementById('calcular-investimento');

function renderInvestments() {
  const aporteInicial = Number(document.getElementById('aporte-inicial').value);
  const aporteMensal = Number(document.getElementById('aporte-mensal').value);
  const tempodeContribuicao = Number(
    document.getElementById('prazo-de-aportes').value,
  );
  const periodo = document.getElementById('periodo-prazo-de-aportes').value;
  const rentabilidade = Number(document.getElementById('rentabilidade').value);
  const periodoRentabilidade = document.getElementById(
    'periodo-rentabilidade',
  ).value;
  const taxaRetorno = document.getElementById('taxas-sobre-lucro').value;

  generateReturnsArray(
    aporteInicial,
    aporteMensal,
    tempodeContribuicao,
    periodo,
    rentabilidade,
    periodoRentabilidade,
  );
}
