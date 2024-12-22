let currentTheme = 'default'; // Default theme (beige)

function beginJourney() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if (name) {
        // Save the name to display later
        document.getElementById('greeting').textContent = `Welcome, ${name}!`;

        // Hide the container and show the main page
        document.querySelector('.container').style.display = 'none';
        document.getElementById('main-page').style.display = 'block';
    } else {
        alert('Please enter your name to continue.');
    }
}

function startJournal() {
    let username = document.getElementById('username').value;
    if (username.trim() === "") {
        alert("Please enter your name!");
        return;
    }
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'flex';
    document.getElementById('greeting').textContent = `Welcome, ${username}!`;
    document.body.classList.add(currentTheme + '-theme');
}

function addEntry() {
    const entriesDiv = document.getElementById('entries');
    const newEntry = document.createElement('p');
    newEntry.textContent = "New entry...";
    entriesDiv.appendChild(newEntry);
}

function showPrivacy() {
    alert("Your memories, your privacy.");
}

// Switch Themes (For Example - Beige, White, Black)
function changeTheme(theme) {
    currentTheme = theme;
    document.body.className = ''; // Reset theme class
    document.body.classList.add(currentTheme + '-theme');
}

// Responsive menu layout - changing sidebar position for mobile
const isMobile = window.innerWidth < 768;

if (isMobile) {
    document.querySelector('.sidebar').style.position = 'fixed';
    document.querySelector('.sidebar').style.left = '0';
    document.querySelector('.main-content').style.marginLeft = '200px';
}
