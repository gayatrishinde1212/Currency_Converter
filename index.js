const currencyfirstEl=document.getElementById("currency-first");

const worthfirstEl=document.getElementById("worth-first");

const currencysecondEl=document.getElementById("currency-second");

const worthsecondEl=document.getElementById("worth-second");

const exchangeRateEl=document.getElementById("exchange-rate");

updateRate();

function updateRate(){
  fetch(`https://v6.exchangerate-api.com/v6/5b8057dd9fbab3e46f93d18e/latest/${currencyfirstEl.value}`
  )
  .then((res)=> res.json())
  .then((data)=>{
   const rate= data.conversion_rates[currencysecondEl.value];
   console.log(rate);
   exchangeRateEl.innerText=`1 ${currencyfirstEl.value} =
    ${ rate + " "+currencysecondEl.value}`;
   

    worthsecondEl.value=(worthfirstEl.value * rate).toFixed(3)
 });
}

currencyfirstEl.addEventListener("change",updateRate)

currencysecondEl.addEventListener("change",updateRate)

worthfirstEl.addEventListener("input",updateRate)