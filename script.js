function LoginVerification() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        window.alert("Login Berhasil");
        window.location="participants.html";
    }
    else if (username == "" || password == ""){
        window.alert("Masukkan Email Atau passowrd");
    }
    else if (username == "user" || password == "user"){
        window.alert("Login Berhasil");
        window.location="participants.html";
    }
    else {
        window.alert("Login Gagal");
    }
}

function Clear(){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}
