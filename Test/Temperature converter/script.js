
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    const input = parseFloat(document.getElementById('inputNum').value.trim());
    const options1 = document.getElementById('options1').value;
    const options2 = document.getElementById('options2').value;
    let result;

    if (options1 === 'Fahrenheit' && options2 === 'Celseus'){
        result = (5*(input/9)) - 32;
    }    
    else if (options1 === 'Celseus' && options2 === 'Fahrenheit'){
        result = (9*(input/5)) + 32;
        
    }
    else if (options1 === 'Celseus' && options2 === 'Kelvin'){
        result = input + 273.15;
        
    }
    else if (options1 === 'Kelvin' && options2 === 'Celseus'){
        result = input - 273.15;
        
    }
    else if (options1 === 'Kelvin' && options2 === 'Fahrenheit'){
        result = (input - 273.15)*1.8 + 32;
        
    }
    else if (options1 === 'Fahrenheit' && options2 === 'Kelvin'){
        result = (input - 32)/1.8 + 273.15;
        
    }
    else{
        document.getElementById('message').textContent = 'Please select different units for conversion.';
                return;

    }


    document.getElementById('message').textContent = `${options1} to ${options2} is ${result.toFixed(2)}`;


})
