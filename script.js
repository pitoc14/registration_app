document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;

    if (name.trim() === "" || email.trim() === "") {
        alert("Please fill in all fields.");
    } else {
        addUserToTable(name, email);
        document.getElementById("registrationForm").reset();
    }
});

function addUserToTable(name, email) {
    var table = document.getElementById("userTable");
    var newRow = table.insertRow();

    var nameCell = newRow.insertCell();
    nameCell.textContent = name;

    var emailCell = newRow.insertCell();
    emailCell.textContent = email;
}
