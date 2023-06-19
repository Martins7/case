import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulacaoComponent } from './simulacao/simulacao.component';
import { FinalizacaoComponent } from './finalizacao/finalizacao.component';

const routes: Routes = [
	{ path: '', component: SimulacaoComponent },
	{
		path: 'finalizacao',
		component: FinalizacaoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
