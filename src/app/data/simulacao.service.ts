import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Simular } from '../model/simular';
import simulacao from '../Mock/backEnd';
import { RespostaSimulacao } from '../model/respostaSimulacao';

@Injectable({
	providedIn: 'root',
})
export class SimulacaoService {
	constructor() {}
	simular(simular: Simular): Observable<RespostaSimulacao> {
		return of(simulacao(simular));
	}
}
