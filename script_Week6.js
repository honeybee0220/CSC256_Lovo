function submitForm() {
    // Get the values from the form inputs
    var username = document.getElementById('username').value;
    var weapons = document.getElementById('weapons').value;
    var health = document.getElementById('health').value;
    var points = document.getElementById('points').value;

    // Display the values in the output area
    document.getElementById('output-username').textContent = 'User Name: ' + username;
    document.getElementById('output-weapons').textContent = 'Weapons: ' + weapons;
    document.getElementById('output-health').textContent = 'Health/Damage: ' + health;
    document.getElementById('output-points').textContent = 'Point Total: ' + points;
}
