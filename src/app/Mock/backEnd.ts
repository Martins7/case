import { Simular } from '../model/simular';

function simulacao(simulacao: Simular) {
	const valorDivido = (simulacao.valor / simulacao.parcelas).toFixed(2);
	const juros = (Number(valorDivido) / 100) * 5;

	const valorParcelas = Number(valorDivido) + Number(juros.toFixed(2));
	const valorTotal = Number(valorParcelas) * simulacao.parcelas;

	return {
		valorParcelas,
		numeroParcelas: simulacao.parcelas,
		valorTotal,
	};
}

export default simulacao;
