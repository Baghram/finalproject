// let name = ''
// let income = 0
// let tax = 0
// let pajak = ''


function Calculatetax(name,income,pajak) {
   
  
   
    }

function test(){
    let name = document.getElementById("company").value;
    let income = document.getElementById("income").value;
    let salary = document.getElementById("salary").value;
    let rent = document.getElementById("rent").value;
    let material = document.getElementById("material").value;
    let other = document.getElementById("other").value;
    let tax = income*0.1
    let profit = (income-salary-rent-material-other-tax)
    let idealsalary = income *0.2
    let idealrent = income*0.1
    let idealmaterial = income*0.3
    let idealother = income*0.1
    let idealprofit = (income-idealsalary-idealrent-idealmaterial-idealother-tax)


    // let pajak1;
    // if(pajak == "hiburan"){
    //     pajak1 = document.getElementById("r1").value;
    // }
    // else if(pajak == "restoran" ){
    //     pajak1 = document.getElementById("r2").value;
    // }
    document.getElementById("demooo").innerHTML = `${name}, data tersebut sudah dipotong pajak sebesar ${tax}` ;

    console.log(`name = ${name}`)
    console.log(`income = ${income}`)
    console.log(`salary = ${salary}`)
    console.log(`rent = ${rent}`)
    console.log(`material = ${material}`)
    console.log(`other = ${other}`)
    console.log(`profit = ${profit}`)
    console.log(`idealsalary = ${idealsalary}`)
    console.log(`idealrent = ${idealrent}`)
    console.log(`idealmaterial = ${idealmaterial}`)
    console.log(`idealother = ${idealother}`)
    console.log(`idealprofit = ${idealprofit}`)

    document.getElementById("idealwage").innerHTML = idealsalary;
    document.getElementById("idealrent").innerHTML = idealrent;
    document.getElementById("idealmaterial").innerHTML = idealmaterial;
    document.getElementById("idealother").innerHTML = idealother;
    document.getElementById("idealprofit").innerHTML = idealprofit;
    document.getElementById("realitywage").innerHTML = salary;
    document.getElementById("realityrent").innerHTML = rent;
    document.getElementById("realitymaterial").innerHTML = material;
    document.getElementById("realityother").innerHTML = other;
    document.getElementById("realityprofit").innerHTML = profit;
    document.getElementById("hasil").style.display = ``;
    // console.log(name)
    // console.log(pajak)
    // console.log('hi')
}



console.log('connected')
    // var input = document.getElementById("input_id").value;