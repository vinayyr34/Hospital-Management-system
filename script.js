document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "vinay" && password === "vin") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-msg").innerText = "Invalid username or password";
    }
});

function logout() {
    alert("Logged out successfully!");
}