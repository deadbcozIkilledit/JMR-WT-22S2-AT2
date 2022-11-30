let multiplier;
let outputList = document.querySelector(".result");

createSelect();
function createSelect() {
    let select = document.getElementById("multiple");
    for (let i = 1; i <= 20; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        select.appendChild(option);
    }
}


document.getElementById("resultsButton").onclick = function () {
    multiplier = Number(document.getElementById("multiple").value);

    document.getElementById("result").innerText = "";
    for (let i = 1; i <= 20; i++) {
        let outputData = document.createElement('div');
        outputData.innerText = `${multiplier} x ${i} = ${multiplier * i}`;
        outputList.appendChild(outputData);
    }
}
