function show(data){
    console.log(data);
}

var EmployeeSalaries = {
        'Jack': 4000,
        'Reema': 7000,
        'Kenza': 5000,
        'Anastasiia': 4500,
        'Johanna': 5500
    };

var sum = 0;

for (var key in EmployeeSalaries) {
    sum += EmployeeSalaries[key];
}

show(sum)