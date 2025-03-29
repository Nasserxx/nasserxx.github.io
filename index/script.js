document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            populatePersonalInfo(data.personalInfo);
            populateExperience(data.professionalExperience);
            populateEducation(data.education);
            populateSkills(data.skills);
            populateLanguages(data.languages);
            setupScrollAnimations(); // Initialize animations after content is loaded
            // initializeParticles(); // Uncomment if using a particle library
        })
        .catch(error => {
            console.error('Error fetching or parsing data:', error);
            // Display a user-friendly error message on the page
            const main = document.querySelector('main');
            if(main) main.innerHTML = '<p class="error">Could not load CV data. Please try again later.</p>';
        });

    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();
});

function populatePersonalInfo(info) {
    if (!info) return;
    document.getElementById('name').textContent = info.name || '';
    document.getElementById('title').textContent = info.title || '';
    if (info.profilePictureUrl) {
        document.getElementById('profile-pic').src = info.profilePictureUrl;
    }

    const contactDiv = document.getElementById('contact-info');
    contactDiv.innerHTML = ''; // Clear previous content
    if (info.contact?.email) {
        const emailLink = document.createElement('a');
        emailLink.href = `mailto:${info.contact.email}`;
        emailLink.innerHTML = '<i class="fas fa-envelope"></i>'; // Font Awesome icon
        emailLink.setAttribute('aria-label', 'Email');
         emailLink.title = 'Email'; // Tooltip
        contactDiv.appendChild(emailLink);
    }
     if (info.contact?.phone) { // Again, consider privacy
        const phoneLink = document.createElement('a');
        phoneLink.href = `tel:${info.contact.phone}`;
        phoneLink.innerHTML = '<i class="fas fa-phone"></i>'; // Font Awesome icon
         phoneLink.setAttribute('aria-label', 'Phone');
        phoneLink.title = 'Phone'; // Tooltip
        contactDiv.appendChild(phoneLink);
    }
     // Add LinkedIn Icon/Link if needed
     const linkedinLink = document.createElement('a');
     linkedinLink.href = "https://www.linkedin.com/in/nasser-awad-0a08b9143/"; // Replace with actual link if different
     linkedinLink.target = "_blank"; // Open in new tab
     linkedinLink.rel = "noopener noreferrer";
     linkedinLink.innerHTML = '<i class="fab fa-linkedin"></i>';
     linkedinLink.setAttribute('aria-label', 'LinkedIn Profile');
     linkedinLink.title = 'LinkedIn Profile'; // Tooltip
     contactDiv.appendChild(linkedinLink);

}


function populateExperience(experiences) {
    const container = document.getElementById('experience-content');
    if (!container || !experiences) return;
    container.innerHTML = ''; // Clear previous content

    experiences.forEach((exp, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('experience-item');
        // Add animation class triggers here if not using a library
        itemDiv.setAttribute('data-aos', (index % 2 === 0) ? 'fade-right' : 'fade-left'); // Example with AOS library

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('exp-content');

        contentDiv.innerHTML = `
            <h3>${exp.roleTitle}</h3>
            <p class="duration">${exp.duration}</p>
            <ul>
                ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
            </ul>
        `;
        itemDiv.appendChild(contentDiv);
        container.appendChild(itemDiv);
    });
}

function populateEducation(educations) {
    const container = document.getElementById('education-content');
    if (!container || !educations) return;
    container.innerHTML = '';

    educations.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.innerHTML = `
            <h3>${edu.degree}</h3>
            <p>${edu.institution}</p>
            <p class="duration">${edu.duration}</p>
        `;
        container.appendChild(eduDiv);
    });
}

function populateSkills(skills) {
    const container = document.getElementById('skills-content');
    if (!container || !skills) return;
    container.innerHTML = '';

    // Define the order and display names for categories
    const skillCategories = [
      { key: 'programmingLanguages', name: 'Programming Languages' },
      { key: 'frontendFrameworks', name: 'Frontend & Frameworks' },
      { key: 'databases', name: 'Databases' },
      { key: 'devOpsCloud', name: 'DevOps & Cloud' },
      { key: 'networkingSecurity', name: 'Networking & Security' },
      { key: 'toolsMethodologies', name: 'Tools & Methodologies' },
    ];

     skillCategories.forEach(category => {
       if(skills[category.key] && skills[category.key].length > 0) {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('skill-category');
             // Add animation class triggers here if not using a library
             categoryDiv.setAttribute('data-aos', 'fade-up'); // Example with AOS

            let listItems = skills[category.key].map(skill => `<li>${skill}</li>`).join('');

            categoryDiv.innerHTML = `
                <h3>${category.name}</h3>
                <ul>${listItems}</ul>
            `;
            container.appendChild(categoryDiv);
       }
    });
}

function populateLanguages(languages) {
    const list = document.getElementById('languages-content');
    if (!list || !languages) return;
    list.innerHTML = '';

    languages.forEach(lang => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="language">${lang.language}</span>
            <span class="proficiency">${lang.proficiency}</span>
        `;
        list.appendChild(li);
    });
}

function setupScrollAnimations() {
    // Option 1: Using a Library like AOS (Animate On Scroll)
    // Make sure you included the AOS CSS and JS links in index.html
    // AOS.init({
    //     duration: 800, // values from 0 to 3000, with step 50ms
    //     once: true, // whether animation should happen only once - while scrolling down
    // });


     // Option 2: Manual implementation with Intersection Observer
    const sections = document.querySelectorAll('.cv-section, .experience-item'); // Include experience items if animated individually

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once visible if you want 'once: true' behavior
                // observer.unobserve(entry.target);
            } else {
                 // Optional: remove class if you want animation every time it scrolls in/out
                 entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Optional: Function to initialize particles.js or tsParticles
// function initializeParticles() {
//    // Make sure you included the library script
//    // tsParticles or particlesJS initialization code goes here
//     // Example for tsParticles:
//     tsParticles.load("particle-canvas", {
//          /* Paste your tsParticles config JSON here */
//           particles: { /* Basic example */
//              number: { value: 80 },
//              color: { value: "#ffffff" },
//              shape: { type: "circle" },
//              opacity: { value: 0.5, random: true },
//              size: { value: 3, random: true },
//              move: { enable: true, speed: 2, direction: "none", out_mode: "out" },
//              line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }
//           },
//            interactivity: {
//              detect_on: "canvas",
//              events: {
//                onhover: { enable: true, mode: "repulse" },
//                resize: true
//              },
//           },
//           retina_detect: true
//         });
// }