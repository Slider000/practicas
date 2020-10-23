import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NacionalidadService } from '../../services/nacionalidad.service';
import { Registro } from '../../interfaces/registro.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public  formulario: FormGroup;
  public nacionalidades : any;
  public datos:Registro[] = [];
  public botonValid:boolean;
  public tablas = ['Documento', 'Nombre completo', 'Nacionalidad','Celular','Email']
  constructor(private fb : FormBuilder,private nacionalidadService:NacionalidadService) { }

  ngOnInit(): void {

    this.formulario = this.fb.group({
      tipo_documento:['',Validators.required],
      identificacion:['',Validators.required],
      nombres:['',Validators.required],
      apellido:['',Validators.required],
      nacionalidad:['',Validators.required],
      celular:['',Validators.required],
      email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
    });
    this.getNacionalidadComp();
    this.botonValidar();
  }

  get getTipoDocumentoNovalid(){
    return this.formulario.get('tipo_documento').invalid && this.formulario.get('tipo_documento').touched;
  }

  get getIdentificacionNovalid(){
    return this.formulario.get('identificacion').invalid && this.formulario.get('identificacion').touched;
  }

  get getNombreNovalid(){
    return this.formulario.get('nombres').invalid && this.formulario.get('nombres').touched;
  }

  get getApellidoNovalid(){
    return this.formulario.get('apellido').invalid && this.formulario.get('apellido').touched;
  }

  get getNacionalidadNovalid(){
    return this.formulario.get('nacionalidad').invalid && this.formulario.get('nacionalidad').touched;
  }

  get getCelularNovalid(){
    return this.formulario.get('celular').invalid && this.formulario.get('celular').touched;
  }

  get getEmailNovalid(){
    return this.formulario.get('email').invalid && this.formulario.get('email').touched;
  }

  botonValidar(){
    if(this.getEmailNovalid || this.getCelularNovalid || this.getNacionalidadNovalid || this.getApellidoNovalid || this.getNombreNovalid || this.getIdentificacionNovalid || this.getTipoDocumentoNovalid ){
      this.botonValid = false;
      console.log('bad');
    }else{
      this.botonValid = true;
      console.log('ok');
    }
  }

  agregarUsuario(formulario:FormGroup){
    this.datos.push(formulario.value)
    console.log(this.datos);
    this.formulario.reset()
  }

  getNacionalidadComp(){
    this.nacionalidadService.getNacionalidad().subscribe(nat=>{
      console.log(nat.results);
      this.nacionalidades = nat.results;
    })
  }
}
