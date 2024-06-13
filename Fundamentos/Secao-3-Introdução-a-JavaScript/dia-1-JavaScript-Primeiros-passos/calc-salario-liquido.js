let grossSalary = 3000;
let aliquotInss;
let aliquotIr;

if (grossSalary <= 1556.94){
    aliquotInss = grossSalary * 0.08;
}  else if ( grossSalary <= 2594.92){
    aliquotInss = grossSalary * 0.09   
} else if ( grossSalary <= 5189.82 ){
    aliquotInss = grossSalary * 0.11;
} else {
    aliquotInss = 570.88;
}
 let baseSalary = grossSalary - aliquotInss;

 if (baseSalary <= 1903.98){
    aliquotIr = 0;
 } else if (baseSalary <= 2826.65){
    aliquotIr = (baseSalary * 0.075) - 142.80;
 } else if (baseSalary <= 3751.05){
    aliquotIr = (baseSalary * 0.15) - 354.80;
 } else if (baseSalary <= 4664.68){
    aliquotIr = (baseSalary * 0.225) - 636.13;
 } else {
    aliquotIr = (baseSalary * 0.275) - 869.36;
 }

 console.log(`Salario ${baseSalary - aliquotIr}`);