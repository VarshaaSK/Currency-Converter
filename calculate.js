const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");

fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

function display(data){
    const entries = Object.entries(data);
    console.log(entries);

    for(var i = 0; i < entries.length ; i++){
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value = "${entries[i][0]}">${entries[i][0]}</option>`;
    }
}

btn.addEventListener("click" , () => {
    let cur1 = select[0].value;
    let cur2 = select[1].value;

    let value = num.value;

    if(cur1 != cur2){
        convert(cur1 , cur2 , value);
    }
    else{
        alert("Conversion Unit Should Not be Same");
    }
});

function convert(currency1, currency2, value) {
    const host = "api.frankfurter.app";
    fetch(
      `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
    )
      .then((val) => val.json())
      .then((val) => {
        console.log(Object.values);
        console.log(Object.values(val.rates)[0]);
        ans.value = Object.values(val.rates)[0];
      });
  }