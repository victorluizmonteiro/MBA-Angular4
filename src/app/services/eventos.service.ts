import { IEvento } from "../interfaces/interface.evento";
import { Injectable } from "@angular/core";
@Injectable()
export class EventoService{

    public getEventos(): IEvento[] {
        return [
        { descricao: 'Avaliação Angular', data: '23/10/2018', preco: 0 },
        { descricao: 'Formatura', data: '02/05/2020', preco: 140 },
        { descricao: 'Torneio de Tenis', data: '10/07/2018', preco: 210},
        { descricao: 'Congresso de TI', data: '16/01/2019', preco: 400 } 
    }
}