import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { UploadDataService } from '../services/upload-data.service';
import { Orden } from '../models/orden.model';
// import { Command } from '../models/command.model';
import Swal from 'sweetalert2';
declare var Blockly: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  btnJugar = 'Jugar';
  workspacePlayground: any;

  public toolbox: string;
  public xml: XMLHttpRequest = new XMLHttpRequest();

  constructor(private dataService: UploadDataService) { }

  ngOnInit() {

    this.createBlocks();

  }

  createBlocks() {

    this.xml.open('GET', 'assets/blockly/blocks.xml', false);
    console.log(this.xml);
    this.xml.send();
    const xmlFinal = this.xml.responseXML;
    this.toolbox = new XMLSerializer().serializeToString(xmlFinal);
    this.workspacePlayground = Blockly.inject('blocklyDiv', { toolbox: this.toolbox });

  }

  ejecutar() {

    this.btnJugar = 'Procesando...';
    Blockly.JavaScript.addReservedWords('code');
    const code = Blockly.JavaScript.workspaceToCode(this.workspacePlayground);
    const codex = eval(code);
    const today = new Date();
    const date = moment(today.getTime()).format('YYYY-MM-DD HH:mm:ss');
    const token = localStorage.getItem('token');
    const tokenParse = this.parseJwt(token);
    const mac = tokenParse.usuario_id;

    const body: Orden = {
      fecha: date,
      mac: mac,
      orden: JSON.stringify(codex)
    };
    console.log(body, codex);

    this.dataService.uploadData(body).subscribe(
      res => {
        if (res.success) {
          console.log(res.message);
          this.btnJugar = 'Hecho';
          Swal.fire({
            title: 'Buen Trabajo',
            text: 'Dile a SIMA la palabra "REMOTO", para que realice tu programa',
            type: 'success',
            onClose: () => {
              this.btnJugar = 'Jugar';
            }
          });
          // alert('Dile a SIMA la palabra "REMOTO", para que realice tu programa');
        }
      },
      error => {
        console.log(error);
        Swal.fire({
          title: 'Opsss...',
          text: 'Parece que hubo un problema en la casa de SIMA',
          type: 'error',
          confirmButtonColor: '#F27474',
          onClose: () => {
            this.btnJugar = 'Jugar';
          }
          // alert('Opsss... parece que hubo un problema en la casa de sima');
        });
      }
    );

  }

  parseJwt(jwt: string) {
    const base64Url = jwt.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  };
}
