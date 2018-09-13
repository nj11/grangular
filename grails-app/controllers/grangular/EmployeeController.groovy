package grangular

import grails.rest.*

class EmployeeController extends RestfulController<Employee> {
	static responseFormats = ['json', 'xml']

    EmployeeController(){
        super(Employee)
    }

    @Override
    def index() {
        respond Employee.list().sort{it.id}
    }



}
