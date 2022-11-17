function calculate_inp() {
    let imt;
    const result = document.getElementById("result-inp");
    const height = parseInt(document.getElementById("height-inp").value);
    const weight = parseInt(document.getElementById("weight-inp").value);


    imt1 = (weight / (height / 100) ** 2)
    imt = imt1.toFixed(1)

    result.textContent = imt;

    if(imt == 'NaN') {
        category = "Пожалуйста, заполните все поля";
        result.style.color = "#ff5e57";
    }

    else if (imt < 18.5) {
        category = "Недостаточный вес";
        result.style.color = "#ffc44d";
    }


    else if (imt >= 18.5 && imt <= 24.9) {
        category = "Нормальный вес";
        result.style.color = "#0be881";
    }


    else if (imt >= 25 && imt <= 29.9) {
        category = "Избыточный вес";
        result.style.color = "#ff884d";
    }


    else {
        category = "Страдающий ожирением";
        result.style.color = "#ff5e57";
    }

    document.getElementById("inputs").style.margin = '180px 40px 0 40px'
    
    
    document.getElementById("main").style.display = 'flex'
    document.getElementById("main").style.alignItems = 'center'
    document.getElementById("main").style.justifyContent = 'space-between'
    // document.getElementById("main").style.flexWrap = 'wrap';

    
    document.getElementById("result").style.display = 'block';
    document.getElementById("result").style.margin = '180px 40px 0 0'

    document.getElementById("category-inp").textContent = category;
}