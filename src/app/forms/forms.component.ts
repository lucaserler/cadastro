import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listEstados: Array<{estado: string}> = [
    {estado: "Acre"},
    {estado: "Alagoas"},
    {estado: "Amapá"},
    {estado: "Amazonas"},
    {estado: "Bahia"},
    {estado: "Ceará"},
    {estado: "Espírito Santo"},
    {estado: "Goiás"},
    {estado: "Maranhão"},
    {estado: "Mato Grosso"},
    {estado: "Mato Grosso do Sul"},
    {estado: "Minas Gerais"},
    {estado: "Pará"},
    {estado: "Paraíba"},
    {estado: "Paraná"},
    {estado: "Pernambuco"},
    {estado: "Piauí"},
    {estado: "Rio de Janeiro"},
    {estado: "Rio Grande do Norte"},
    {estado: "Rio Grande do Sul"},
    {estado: "Rondônia"},
    {estado: "Roraima"},
    {estado: "Santa Catarina"},
    {estado: "São Paulo"},
    {estado: "Sergipe"},
    {estado: "Tocantins"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
