import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RespostaSimulacao } from 'src/app/model/respostaSimulacao';

@Component({
	selector: 'app-modal-confirmacao',
	templateUrl: './modal-confirmacao.component.html',
	styleUrls: ['./modal-confirmacao.component.scss'],
})
export class ModalConfirmacaoComponent {
	repostaSimulacao!: RespostaSimulacao;
	constructor(
		@Inject(MAT_DIALOG_DATA) data: any,
		private router: Router,
		public dialogRef: MatDialogRef<ModalConfirmacaoComponent>,
	) {
		this.repostaSimulacao = data;
	}

	confirmation = () => {
		sessionStorage.setItem(
			'contratacao',
			JSON.stringify(this.repostaSimulacao),
		);
		this.dialogRef.close();
		this.router.navigate(['/finalizacao']);
	};
}
