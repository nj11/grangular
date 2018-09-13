package grangular

class BootStrap {
    def init = { servletContext ->
        Date now = new Date()
        int total = 11;
        def names = ["Arthur Jacob","Kareena Baig","Prakash Jha","Derek Brown","Ahmed Sheikh","Chander Parekh","Alaska Datoor","Corynee Smith","Derek Smith","Christina Josh","Ali Sagar"]
        def cities = ["Alpharetta","Osewago","Naperville","Suwanee","San Hose","San Hose","Simi Valley","Woodland Hills","Naperville","Osewago","Wheaton"]
        def departments = ["HR","IT","IT","Acctg","Acctg","CSR","CSR","Sales","Sales","IT","HR"]
        def gender = ["Male","Female","Male","Male","Male","Male","Male","Female","Male","Female","Male"]

        for(int i = 0 ; i < total; i++){
            Employee e = new Employee()
            e.setId(new Integer(i+1))
            e.setName(names[i])
            e.setCity(cities[i])
            e.setDepartment(departments[i])
            e.setGender(gender[i])
            e.setHireDate(now);
            e.save()
        }

    }
    def destroy = {
    }
}
