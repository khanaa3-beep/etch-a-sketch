

function loadGrid(){

    const master = document.querySelector('.master-container')

    for (i = 0; i < 100; i++){
        const rowDiv = document.createElement('div');
        rowDiv.className = "flex-container";

        for (j = 0; j < 100; j++){
            const colDiv = document.createElement('div');
            colDiv.className = "flex-item";
            rowDiv.append(colDiv);
        }
        master.append(rowDiv);
    }
}

















