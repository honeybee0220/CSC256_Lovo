// JavaScript for simulation page interactivity

document.addEventListener('DOMContentLoaded', () => { // Event listener for when the DOM is fully loaded
    console.log('Simulation page loaded'); // Log message to console
    setupSimulations(); // Set up the simulations
});

const scenarios = [ // Array of scenario objects
    {
        type: 'Phishing Attack', // Type of scenario
        description: 'You receive an email from an unknown source asking for your login details. What do you do?', // Description of scenario
        responses: {
            ignore: 'Good choice! Ignoring suspicious emails is a safe action.', // Response for ignoring
            report: 'Excellent! Reporting phishing emails helps protect others.', // Response for reporting
            provide: 'Oops! Providing personal details to unknown sources can compromise your security.' // Response for providing details
        }
    },
    {
        type: 'Malware Attack', // Type of scenario
        description: 'Your computer is running slow and strange pop-ups appear. What do you do?', // Description of scenario
        responses: {
            scan: 'Good job! Running a security scan can help detect and remove malware.', // Response for running a scan
            ignore: 'Ignoring the issue can lead to more serious problems. Always take action against malware.', // Response for ignoring
            download: 'Downloading a trusted anti-malware tool can help protect your system.' // Response for downloading anti-malware
        }
    }
];

function setupSimulations() {
    const scenariosContainer = document.getElementById('scenarios'); // Get the container for scenarios
    scenarios.forEach((scenario, index) => { // Loop through each scenario
        const section = document.createElement('section'); // Create a section element
        section.classList.add('scenario', 'hidden'); // Add classes to the section
        section.id = `scenario-${index}`; // Set the id for the section
        
        const heading = document.createElement('h3'); // Create a heading element
        heading.textContent = scenario.type; // Set the text content of the heading
        
        const description = document.createElement('p'); // Create a paragraph element
        description.textContent = scenario.description; // Set the text content of the paragraph
        
        section.appendChild(heading); // Append the heading to the section
        section.appendChild(description); // Append the description to the section
        
        Object.keys(scenario.responses).forEach(action => { // Loop through each response action
            const button = document.createElement('button'); // Create a button element
            button.textContent = action.charAt(0).toUpperCase() + action.slice(1); // Set the text content of the button
            button.onclick = () => respondToScenario(index, action); // Set the click event handler for the button
            section.appendChild(button); // Append the button to the section
        });
        
        const response = document.createElement('p'); // Create a paragraph element for the response
        response.id = `response-${index}`; // Set the id for the response paragraph
        section.appendChild(response); // Append the response paragraph to the section
        
        scenariosContainer.appendChild(section); // Append the section to the scenarios container
    });
}

function showScenario(index) {
    document.querySelectorAll('.scenario').forEach(scenario => { // Loop through each scenario element
        scenario.classList.add('hidden'); // Hide each scenario
    });
    document.getElementById(`scenario-${index}`).classList.remove('hidden'); // Show the selected scenario
}

function respondToScenario(index, action) {
    const response = document.getElementById(`response-${index}`); // Get the response paragraph for the selected scenario
    response.textContent = scenarios[index].responses[action]; // Set the text content of the response paragraph
}

function simulatePhishingAttack() {
    showScenario(0); // Show the phishing attack scenario
}

function simulateMalwareAttack() {
    showScenario(1); // Show the malware attack scenario
}
