import { Component, OnInit } from '@angular/core';
import { RespostaSimulacao } from '../model/respostaSimulacao';

@Component({
	selector: 'app-finalizacao',
	templateUrl: './finalizacao.component.html',
	styleUrls: ['./finalizacao.component.scss'],
})
export class FinalizacaoComponent implements OnInit {
	contratacao: RespostaSimulacao = {
		numeroParcelas: 0,
		valorParcelas: 0,
		valorTotal: 0,
	};
	ngOnInit(): void {
		this.contratacao = JSON.parse(sessionStorage.getItem('contratacao') || '');
	}
}
