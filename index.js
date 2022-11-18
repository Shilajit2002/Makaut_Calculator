const calculate = () => {
    // Access the Input Form
    let odd_sgpa = document.getElementById("odd_sgpa").value;
    let odd_sub = document.getElementById("odd_sub").value;
    let even_sgpa = document.getElementById("even_sgpa").value;
    let even_sub = document.getElementById("even_sub").value;

    const Num = /[0-9.]/g;

    if (odd_sgpa.trim() == "" && odd_sub.trim() == "" && even_sgpa.trim() == "" && even_sgpa.trim() == "") {
        document.getElementById("error").innerHTML = `<div class="alert alert-danger alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Alert!</strong> All fields are required !!
      </div>`
    }
    else if (odd_sgpa.trim() == "") {
        document.getElementById("error").innerHTML = `<div class="alert alert-danger alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Alert!</strong> Odd Sem SGPA is required !!
      </div>`
    }
    else if (odd_sub.trim() == "") {
        document.getElementById("error").innerHTML = `<div class="alert alert-danger alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Alert!</strong> Odd Sem Total Subject is required !!
      </div>`
    }
    else if (even_sgpa.trim() == "") {
        document.getElementById("error").innerHTML = `<div class="alert alert-danger alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Alert!</strong> Even Sem SGPA is required !!
      </div>`
    }
    else if (even_sub.trim() == "") {
        document.getElementById("error").innerHTML = `<div class="alert alert-danger alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Alert!</strong> Even Sem Total Subject is required !!
      </div>`
    }
    else {
        // Odd Sem Calculation
        let odd_percentage = (odd_sgpa - 0.75) * 10;
        let odd_total_marks = odd_sub * 100;
        let odd_obtained_marks = odd_percentage * odd_sub;


        let even_percentage = (even_sgpa - 0.75) * 10;
        let even_total_marks = even_sub * 100;
        let even_obtained_marks = even_percentage * even_sub;

        let Total_Sub = parseInt(odd_sub) + parseInt(even_sub);

        let Total_Marks = odd_total_marks + even_total_marks;

        let Total_Obtained_Marks = odd_obtained_marks + even_obtained_marks;

        let Total_Percentage = Total_Obtained_Marks / Total_Sub;

        document.getElementById("TM").innerHTML = Total_Marks;
        document.getElementById("TMO").innerHTML = Total_Obtained_Marks.toFixed(2);
        document.getElementById("TP").innerHTML = Total_Percentage.toFixed(2);
    }
}

const clean = () => {
    let ele = document.getElementById("form_id");
    ele.reset();
    document.getElementById("TM").innerHTML = "0.0";
    document.getElementById("TMO").innerHTML = "0.0";
    document.getElementById("TP").innerHTML = "0.0";
}