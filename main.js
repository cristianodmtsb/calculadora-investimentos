import { generateReturnsArray } from './src/investmentGoals';

const formInvestimento = document.getElementById('formulario-investimento');
const btnCalcularInvestimento = document.getElementById(
  'btn-calcular-investimento',
);

function renderInvestments(e) {
  e.preventDefault();
  const aporteInicial = Number(formInvestimento['aporte-inicial'].value);
  const aporteMensal = Number(formInvestimento['aporte-mensal'].value);
  const tempodeContribuicao = Number(
    formInvestimento['prazo-de-aportes'].value,
  );
  const periodoContribuicao =
    formInvestimento['periodo-prazo-de-aportes'].value;
  const rentabilidade = Number(formInvestimento['rentabilidade'].value);
  const periodoRentabilidade = formInvestimento['periodo-rentabilidade'].value;
  const taxaSobreLucro = Number(formInvestimento['taxas-sobre-lucro'].value);

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

// formInvestimento.addEventListener('submit', renderInvestments);
btnCalcularInvestimento.addEventListener('click', renderInvestments);
