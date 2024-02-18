async function GetData(){
    let response = await fetch("dados.json");
    let data = await response.json();
    return data;
}

function Average(data){
    let size = 0;
    let value = 0;
    for(let i = 0; i < data.length; i++){
        if (data[i].valor != 0){
            size += 1;
            value += data[i].valor
        } else {
            size -= 1;
        }
    }
    return value / size;
}

function BestValue(data){
    let best = {
        value: 0,
        day: 0,
    }
    for(let i = 0; i < data.length; i++){
        if(data[i].valor > best.value){
            best.value = data[i].valor;
            best.day = data[i].dia;
        }
    }
    return best;
}

function WorstValue(data){
    let worst = {
        value: data[0].valor,
        day: 0,
    }
    for(let i = 0; i < data.length; i++){
        if(data[i].valor < worst.value && data[i].valor != 0){
            worst.value = data[i].valor;
            worst.day = data[i].dia;
        }
    }
    return worst;
}

function AboveAverageDays(data){
    let avg = Average(data)
    console.log(avg)
    let amount = 0

    for (let i = 0; i < data.length; i++){
        if(data[i].valor > avg){
             amount += 1
        }
    }
    return amount;
}

async function CalculateResults(){
    let data = await GetData()
    let best_value =  BestValue(data)
    let worst_value = WorstValue(data)
    let above_avg =  AboveAverageDays(data)
    ShowResults(best_value, worst_value, above_avg, Average(data))
}

function ShowResults(best_value, worst_value, above_avg, avg){
    document.getElementById("best").innerHTML = (
        "O melhor resultado foi " + best_value.value + " no dia " + best_value.day
        );
    document.getElementById("worst").innerHTML = (
        "O pior resultado foi " + worst_value.value + " no dia " + worst_value.day
        );
    document.getElementById("days").innerHTML = "A média é " + avg +
     ". Quantidade de dias em que seu lucro superou a média: " + above_avg
}