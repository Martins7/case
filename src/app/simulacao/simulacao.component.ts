import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SimulacaoService } from '../data/simulacao.service';
import { Simular } from '../model/simular';
import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';
import { MatDialog } from '@angular/material/dialog';
import { RespostaSimulacao } from '../model/respostaSimulacao';

@Component({
	selector: 'app-simulacao',
	templateUrl: './simulacao.component.html',
	styleUrls: ['./simulacao.component.scss'],
})
export class SimulacaoComponent implements OnInit {
	formulario!: FormGroup;
	responseData: RespostaSimulacao = {
		numeroParcelas: 0,
		valorParcelas: 0,
		valorTotal: 0,
	};
	desabilitarConfirmacao: boolean = true;

	constructor(
		public formBuilder: FormBuilder,
		public service: SimulacaoService,
		public dialog: MatDialog,
	) {}

	ngOnInit(): void {
		this.formulario = this.formBuilder.group({
			nome: ['', [Validators.required]],
			valorDesejado: ['', [Validators.required, Validators.min(0)]],
			parcelas: ['', [Validators.required, Validators.min(0)]],
		});
	}

	onSubmit = () => {
		const obj: Simular = {
			nome: this.formulario.value['nome'],
			parcelas: this.formulario.value['parcelas'],
			valor: this.formulario.value['valorDesejado'],
		};

		this.service.simular(obj).subscribe((result) => {
			this.responseData = result;
			this.desabilitarConfirmacao = false;
		});
	};

	onConfirmation = () => {
		this.dialog.open(ModalConfirmacaoComponent, {
			width: '500px',
			height: '500px',
			data: this.responseData,
		});
	};
}
