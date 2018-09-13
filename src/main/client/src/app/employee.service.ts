// employee.service.ts.


//http://localhost:3000/employee/1 GET
//http://localhost:3000/employee/1 PUT
//http://localhost:3000/employee POST
//http://localhost:3000/employee/1 DELETE
//http://localhost:3000/employee GET

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of, pipe} from "rxjs/index";
import { map, catchError, tap } from 'rxjs/operators';
import {Employee} from "./models/employee.model";


@Injectable()
export class EmployeeService {
   API_URL = 'http://localhost:8080';


    constructor(private httpClient: HttpClient) { }

  /**
   * Get all employees
   * @returns {Observable<Object>}
   */
  getEmployees() {
        return this.httpClient.get(`${this.API_URL}/employee`);
    }

  /**
   * Get employee by ID
   * @param id
   * @returns {Observable<any>}
   */
    getEmployee(id): Observable<any> {
      return this.httpClient.get(`${this.API_URL}/employee/`+id);
    }

  /**
   * Delete employee by ID
   * @param id
   * @returns {Observable<any>}
   */
    deleteEmployee(id):Observable<any>{
        return this.httpClient.delete(`${this.API_URL}/employee/`+id)
    }


  /**
   * Add new employee
   * @param employee
   * @returns {Observable<any>}
   */
  addEmployee(employee):Observable<any>{
         return this.httpClient.post<Employee>(`${this.API_URL}/employee`, employee )
     }


  /**
   * Update employee
   * @param employee
   * @returns {Observable<any>}
   */
  updateEmployee(employee):Observable<any>{

    return this.httpClient.put<Employee>(`${this.API_URL}/employee/`+employee.id, employee )

  }

}

