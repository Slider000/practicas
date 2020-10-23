import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
const API = environment.API;
const KEY = environment.KEY;
const ID = environment.ID;
@Injectable({
  providedIn: 'root'
})
export class NacionalidadService {

  constructor(private http : HttpClient) { }

  getNacionalidad():Observable<{}>{
    return this.http.get(`${API}?order=name`,{
      headers:{
        'X-Parse-Application-Id': 'mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja',
        'X-Parse-Master-Key': 'TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH'
      }
    })
  }
}
