function convertToMontlyReturn(taxaRetornoAnual) {
  return taxaRetornoAnual ** (1 / 12);
}

function generateReturnsArray(
  aporteInicial = 0,
  tempodeContribuicao = 0,
  periodo = 'mes',
  aporteMensal = 0,
  rentabilidade = 0,
  taxaRetorno = 'mes',
) {
  if (!tempodeContribuicao || !aporteInicial) {
    throw new Error(
      'Investimento inicial e prazo devem ser preenchidos com valores positivos.',
    );
  }

  const taxaRetornFinal =
    taxaRetorno === 'mes'
      ? 1 + rentabilidade / 100
      : convertToMontlyReturn(1 + rentabilidade / 100);

  const tempoContribuicaoFinal =
    periodo === 'mes' ? tempodeContribuicao : tempodeContribuicao * 12;

  const referenceInvestmentObject = {
    montanteInvestido: aporteInicial,
    retornoDosJuros: 0,
    retornoTotalJuros: 0,
    mesCount: 0,
    montanteTotal: aporteInicial,
  };

  const returnsArray = [referenceInvestmentObject, {}];

  for (
    let referenciaTempo = 0;
    referenciaTempo <= taxaRetornFinal;
    referenciaTempo++
  ) {
    const montanteTotal =
      returnsArray[referenciaTempo - 1].montanteTotal * taxaRetornFinal +
      aporteMensal;
    const retornoDosJuros =
      returnsArray[referenciaTempo - 1].montanteTotal * taxaRetornFinal;
    const montanteInvestido = aporteInicial + aporteMensal * referenciaTempo;
    const retornoTotalJuros = montanteTotal - montanteInvestido;

    returnsArray.push({
      montanteInvestido: montanteInvestido,
      retornoDosJuros: retornoDosJuros,
      retornoTotalJuros: retornoTotalJuros,
      mesCount: referenciaTempo,
      montanteTotal: montanteTotal,
    });
  }

  return returnsArray;
}
