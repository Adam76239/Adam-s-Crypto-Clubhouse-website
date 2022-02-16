// upon user input run this function
function returnText(user_input){
    //get the input and force the text to lower case then replace space with hyphen
    input = document.getElementById("user_input").value.toLowerCase();
    input1 = input.replace(/ /g, "-");
   
    //request data from the website's API
    request('GET', 'https://api.coingecko.com/api/v3/coins/' + (input1))

    .then((r1) => {
        //parse JSON object and set as "data"
        data = JSON.parse(r1.target.responseText);
       console.log(data);
        //pull token data and return it to be displayed
       document.getElementById("priceValue").innerHTML = "$" + (data.market_data.current_price.usd);
       document.getElementById("symbolValue").innerHTML = (data.symbol).toUpperCase();
       document.getElementById("logoImage").src = (data.image.large);
       document.getElementById("nameValue").innerHTML = (data.name);

    })

    //request formatter
    function request(method, url){
        return new Promise(function(resolve,reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method,url);
            xhr.onload = resolve;
            xhr.onerror = reject;
            xhr.send();
    
        });
    }   
}   