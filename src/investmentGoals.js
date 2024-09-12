function converteParaTaxaRetornoMensal(periodoRentabilidadeAnual) {
  return periodoRentabilidadeAnual ** (1 / 12);
}

export function generateReturnsArray(
  aporteInicial = 0,
  aporteMensal = 0,
  tempodeContribuicao = 0,
  periodoContribuicao = 'mes',
  rentabilidade = 0,
  periodoRentabilidade = 'mes',
) {
  if (!tempodeContribuicao || !aporteInicial) {
    throw new Error(
      'Investimento inicial e prazo devem ser preenchidos com valores positivos.',
    );
  }

  const taxaRetornoFinal =
    periodoRentabilidade === 'mes'
      ? 1 + rentabilidade / 100
      : converteParaTaxaRetornoMensal(1 + rentabilidade / 100);

  const tempoContribuicaoFinal =
    periodoContribuicao === 'mes'
      ? tempodeContribuicao
      : tempodeContribuicao * 12;

  const referenceInvestmentObject = {
    montanteInvestido: aporteInicial,
    retornoDosInvestimentosMes: 0,
    retornoTotalJuros: 0,
    mesCount: 0,
    montanteTotal: aporteInicial,
  };

  const returnsArray = [referenceInvestmentObject];

  for (
    let referenciaTempo = 1;
    referenciaTempo <= tempoContribuicaoFinal;
    referenciaTempo++
  ) {
    const montanteTotal =
      returnsArray[referenciaTempo - 1].montanteTotal * taxaRetornoFinal +
      aporteMensal;
    const retornoDosInvestimentosMes =
      returnsArray[referenciaTempo - 1].montanteTotal * taxaRetornoFinal;
    const montanteInvestido = aporteInicial + aporteMensal * referenciaTempo;
    const retornoTotalJuros = montanteTotal - montanteInvestido;

    returnsArray.push({
      montanteInvestido: montanteInvestido,
      retornoDosInvestimentosMes: retornoDosInvestimentosMes,
      retornoTotalJuros: retornoTotalJuros,
      mesCount: referenciaTempo,
      montanteTotal: montanteTotal,
    });
  }

  return returnsArray;
}
