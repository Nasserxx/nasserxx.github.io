document.addEventListener('DOMContentLoaded', () => {
    // ** CORRECTED FETCH PATH ** relative to script.js
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
            setupScrollAnimations();
           // initializeParticles(); // Uncomment if using particles
        })
        .catch(error => {
            console.error('Error fetching or parsing data:', error);
             const main = document.querySelector('main');
            if(main) main.innerHTML = '<p class="error">Could not load CV data. Please try again later.</p>';
        });

    const yearSpan = document.getElementById('current-year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// --- Keep ALL populate functions (populatePersonalInfo, populateExperience, etc.) and setupScrollAnimations / initializeParticles AS BEFORE ---
// Important: Make sure the populatePersonalInfo function uses the path from data.json correctly
function populatePersonalInfo(info) {
    if (!info) return;
    document.getElementById('name').textContent = info.name || '';
    document.getElementById('title').textContent = info.title || '';
     // Use the path DIRECTLY from data.json (which is now assets/profile-picture.jpg)
    if (info.profilePictureUrl) {
        document.getElementById('profile-pic').src = info.profilePictureUrl;
         document.getElementById('profile-pic').alt = `${info.name} Profile Picture`;
    } else {
         document.getElementById('profile-pic').alt = 'Profile picture'; // Default alt
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
     if (info.contact?.phone) { // Consider privacy
        const phoneLink = document.createElement('a');
        phoneLink.href = `tel:${info.contact.phone}`;
        phoneLink.innerHTML = '<i class="fas fa-phone"></i>'; // Font Awesome icon
         phoneLink.setAttribute('aria-label', 'Phone');
        phoneLink.title = 'Phone'; // Tooltip
        contactDiv.appendChild(phoneLink);
    }
     // Add LinkedIn Icon/Link
     const linkedinLink = document.createElement('a');
     linkedinLink.href = "https://www.linkedin.com/in/nasser-awad-0a08b9143/"; // Update if needed
     linkedinLink.target = "_blank";
     linkedinLink.rel = "noopener noreferrer";
     linkedinLink.innerHTML = '<i class="fab fa-linkedin"></i>';
     linkedinLink.setAttribute('aria-label', 'LinkedIn Profile');
     linkedinLink.title = 'LinkedIn Profile';
     contactDiv.appendChild(linkedinLink);

    // Optionally Add GitHub Icon/Link if you have a GitHub profile link in data.json
    // if(info.githubUrl) { ... create link ... }
}


function populateExperience(experiences) {
    const container = document.getElementById('experience-content');
    if (!container || !experiences) return;
    container.innerHTML = '';

    experiences.forEach((exp, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('experience-item');
        // Assign odd/even based on index for CSS alignment
        itemDiv.classList.add((index % 2 === 0) ? 'timeline-left' : 'timeline-right');
        itemDiv.setAttribute('data-aos', (index % 2 === 0) ? 'fade-right' : 'fade-left');

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
         eduDiv.setAttribute('data-aos', 'fade-up');
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

    const skillCategories = [
      { key: 'programmingLanguages', name: 'Programming Languages' },
      { key: 'frontendFrameworks', name: 'Frontend & Frameworks' },
      { key: 'databases', name: 'Databases' },
      { key: 'devOpsCloud', name: 'DevOps & Cloud' },
      { key: 'networkingSecurity', name: 'Networking & Security' },
      { key: 'toolsMethodologies', name: 'Tools & Methodologies' },
    ];

     skillCategories.forEach((category, index) => {
       if(skills[category.key] && skills[category.key].length > 0) {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('skill-category');
            // Simple stagger animation based on index
            categoryDiv.setAttribute('data-aos', 'fade-up');
            categoryDiv.setAttribute('data-aos-delay', index * 100);

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

    languages.forEach((lang, index) => {
        const li = document.createElement('li');
        // Simple stagger animation based on index
        li.setAttribute('data-aos', 'fade-left');
        li.setAttribute('data-aos-delay', index * 100);

        li.innerHTML = `
            <span class="language">${lang.language}</span>
            <span class="proficiency">${lang.proficiency}</span>
        `;
        list.appendChild(li);
    });
}


// Animation Setup Function (Choose Option 1 or 2, or combine)
function setupScrollAnimations() {

    // Option 1: Using a Library like AOS (Animate On Scroll)
    // If you included AOS links in HTML:
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 600, // Adjust duration
            once: true,    // Only animate once
            offset: 100,   // Trigger animation slightly before element enters viewport
        });
    } else {
        console.log("AOS library not found. Using basic Intersection Observer.")
         // Fallback to manual Intersection Observer (or implement fully if preferred)
         setupManualIntersectionObserver();
    }

     // Option 2: Manual Implementation (if not using a library like AOS)
    // setupManualIntersectionObserver();

}

function setupManualIntersectionObserver() {
     const sections = document.querySelectorAll('.cv-section, .experience-item, .skill-category'); // Elements to animate

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Adjust threshold - e.g. 15% visibility
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                 observer.unobserve(entry.target); // Stop observing once visible
            }
            // No 'else' part to remove 'visible', making it a 'once' animation
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
}

// --- Particle function remains the same ---
// Optional: Function to initialize particles.js or tsParticles
// function initializeParticles() { ... }