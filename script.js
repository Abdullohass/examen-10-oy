const hours = document.getElementById("Hours");
const minuts = document.getElementById("Minutes");
const secunds = document.getElementById("Seconds");
const PMs = document.getElementById("PM");


const vaqt = moment();
// console.log(vaqt);

let soat = vaqt.format("hh");
// console.log(soat);

let minut = vaqt.format("mm");
// console.log(minut);

let secund = vaqt.format("ss");
// console.log(secund);

let pm = vaqt.format("a");
// console.log(pm);


// hours.textContent = soat;
// minuts.textContent = minut;
// secunds.textContent = secund;
// PMs.textContent = pm;

function dayly() {
    const vaqt = moment();
    let soat = vaqt.format("hh");
    let minut = vaqt.format("mm");
    let secund = vaqt.format("ss");
    let pm = vaqt.format("a");
    hours.textContent = soat;
    minuts.textContent = minut;
    secunds.textContent = secund;
    PMs.textContent = pm;
    
}
setInterval(dayly,1000);