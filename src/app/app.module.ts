import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalConfirmacaoComponent } from './simulacao/modal-confirmacao/modal-confirmacao.component';
import { SimulacaoComponent } from './simulacao/simulacao.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CommonModule } from '@angular/common';
import { FinalizacaoComponent } from './finalizacao/finalizacao.component';

@NgModule({
	declarations: [
		AppComponent,
		SimulacaoComponent,
		ModalConfirmacaoComponent,
		FinalizacaoComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatToolbarModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDialogModule,
		CurrencyMaskModule,
	],
	providers: [],

	bootstrap: [AppComponent],
})
export class AppModule {}
