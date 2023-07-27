import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  save(cliente: cliente){
    return cliente;
  }
}
