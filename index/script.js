document.addEventListener('DOMContentLoaded', () => {
    try {
        if (typeof cvData === 'undefined' || !cvData) {
            throw new Error("CV Data (cvData) object not found. Check data.js.");
        }

        populatePersonalInfo(cvData.personalInfo);
        populateExperience(cvData.professionalExperience);
        populateEducation(cvData.education);
        populateSkills(cvData.skills);
        populateLanguages(cvData.languages);
        populateFooterContact(cvData.personalInfo.contact); // Populate footer contact info

        setupScrollAnimations(); // Setup AOS
        setupNavbar();           // Setup Navbar effects
        setupBackToTopButton(); // Setup Back to Top button

    } catch (error) {
        console.error('Initialization Error:', error);
        displayErrorMessage('Could not initialize the page content.');
    }

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

function displayErrorMessage(message) {
    const main = document.querySelector('main');
    if (main) main.innerHTML = `<p class="error" style="text-align: center; color: red; padding: 40px;">${message}</p>`;
}

// --- Populate Functions ---
// (These are mostly the same as the previous data.js version, just ensure AOS attributes are added)

function populatePersonalInfo(info) {
     if (!info) return;
    document.getElementById('name').textContent = info.name || '';
    document.getElementById('title').textContent = info.title || '';
    if (info.profilePictureUrl) {
        document.getElementById('profile-pic').src = info.profilePictureUrl;
         document.getElementById('profile-pic').alt = `${info.name || 'User'} Profile Picture`;
    } else {
         document.getElementById('profile-pic').src = 'https://media.licdn.com/dms/image/v2/C5603AQGAMB-UtrU2hg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1581238771136?e=1748476800&v=beta&t=8QNc3R-iW1lREPlLDbQfR5U3B3umxSpdn2535ye8hvA'; // Default placeholder
         document.getElementById('profile-pic').alt = 'Profile picture placeholder';
    }

    const contactDiv = document.getElementById('contact-info');
    contactDiv.innerHTML = '';
    // Add Phone if present (and privacy permits)
    // if (info.contact?.phone) { /* ... create link ... */ }
    if (info.contact?.email) {
        contactDiv.appendChild(createIconLink(`mailto:${info.contact.email}`, 'fas fa-envelope', 'Email'));
    }
    if (info.contact?.linkedin) {
        contactDiv.appendChild(createIconLink(info.contact.linkedin, 'fab fa-linkedin', 'LinkedIn Profile', true));
    }
     if (info.contact?.github) {
        contactDiv.appendChild(createIconLink(info.contact.github, 'fab fa-github', 'GitHub Profile', true));
    }
}

function populateFooterContact(contact) {
    const footerContactDiv = document.getElementById('footer-contact-info');
    if (!footerContactDiv || !contact) return;
    footerContactDiv.innerHTML = ''; // Clear existing
     if (contact.email) {
        footerContactDiv.appendChild(createIconLink(`mailto:${contact.email}`, 'fas fa-envelope', 'Email'));
    }
     if (contact.linkedin) {
         footerContactDiv.appendChild(createIconLink(contact.linkedin, 'fab fa-linkedin', 'LinkedIn Profile', true));
    }
     if (contact.github) {
         footerContactDiv.appendChild(createIconLink(contact.github, 'fab fa-github', 'GitHub Profile', true));
    }
     // Add Phone if desired here too
}


function createIconLink(href, iconClass, label, newTab = false) {
    const link = document.createElement('a');
    link.href = href;
    link.innerHTML = `<i class="${iconClass}"></i>`;
    link.setAttribute('aria-label', label);
    link.title = label; // Tooltip
    if (newTab) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    }
    return link;
}


function populateExperience(experiences) {
    const container = document.getElementById('experience-content');
    if (!container || !experiences) return;
    container.innerHTML = '';

    experiences.forEach((exp, index) => {
        const itemArticle = document.createElement('article'); // Use article for semantics
        itemArticle.classList.add('experience-item');
        itemArticle.classList.add((index % 2 === 0) ? 'timeline-left' : 'timeline-right');
        itemArticle.setAttribute('data-aos', (index % 2 === 0) ? 'fade-right' : 'fade-left'); // AOS attribute
        itemArticle.setAttribute('data-aos-offset', '150'); // Trigger a bit earlier

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('exp-content');

        contentDiv.innerHTML = `
            <h3>${exp.roleTitle}</h3>
            <p class="duration">${exp.duration}</p>
            <ul>
                ${exp.responsibilities.map(resp => `<li>${escapeHtml(resp)}</li>`).join('')}
            </ul>
        `; // Basic HTML escaping for safety
        itemArticle.appendChild(contentDiv);
        container.appendChild(itemArticle);
    });
}

function populateEducation(educations) {
    // ** VERIFY THIS SELECTOR **
    const container = document.getElementById('education-content');
    if (!container) {
        console.error("Could not find element with ID 'education-content'");
        return; // Stop if container not found
    }
    if (!educations || educations.length === 0) {
         console.warn("No education data provided to populate.");
         container.innerHTML = "<p>No education details available.</p>"; // Show message
         return; // Stop if no data
    }
    container.innerHTML = ''; // Clear previous

    educations.forEach((edu, index) => {
        const eduDiv = document.createElement('div');
        eduDiv.setAttribute('data-aos', 'fade-up');
        eduDiv.setAttribute('data-aos-delay', index * 100);

        // Basic HTML escaping added for safety
        const degree = escapeHtml(edu.degree);
        const institution = escapeHtml(edu.institution);
        const duration = escapeHtml(edu.duration);

        eduDiv.innerHTML = `
            <h3>${degree}</h3>
            <p>${institution}</p>
            <p class="duration">${duration}</p>
        `;
        container.appendChild(eduDiv);
    });
     console.log("Education section populated."); // Add confirmation
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
             categoryDiv.setAttribute('data-aos', 'fade-up');
             categoryDiv.setAttribute('data-aos-delay', index * 150); // Slightly more stagger

            let listItems = skills[category.key].map(skill => `<li>${escapeHtml(skill)}</li>`).join('');

            categoryDiv.innerHTML = `
                <h3>${escapeHtml(category.name)}</h3>
                <ul>${listItems}</ul>
            `;
            container.appendChild(categoryDiv);
       }
    });
}

function populateLanguages(languages) {
    // ** VERIFY THIS SELECTOR **
    const list = document.getElementById('languages-content');
     if (!list) {
        console.error("Could not find element with ID 'languages-content'");
        return; // Stop if container not found
    }
    if (!languages || languages.length === 0) {
        console.warn("No language data provided to populate.");
        list.innerHTML = "<p>No language details available.</p>"; // Show message
        return; // Stop if no data
    }
    list.innerHTML = ''; // Clear previous

    languages.forEach((lang, index) => {
        const li = document.createElement('li');
        li.setAttribute('data-aos', 'fade-left');
        li.setAttribute('data-aos-delay', index * 100);

        const language = escapeHtml(lang.language);
        const proficiency = escapeHtml(lang.proficiency);

        li.innerHTML = `
            <span class="language">${language}</span>
            <span class="proficiency">${proficiency}</span>
        `;
        list.appendChild(li);
    });
    console.log("Languages section populated."); // Add confirmation
}



// --- Utilities ---
function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
         .replace(/&/g, "&")
         .replace(/</g, "<")
         .replace(/>/g, ">")
         .replace(/"/g, "\"")
         .replace(/'/g, "'");
 }


// --- Interactive Elements & Animations Setup ---

function setupScrollAnimations() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,       // Animation duration
            easing: 'ease-out-cubic', // Smooth easing
            once: true,         // Animate only once
            offset: 100,        // Trigger offset (px)
            // disable: 'mobile' // Optional: disable animation on mobile
        });
    } else {
        console.warn("AOS library not loaded. Animations disabled.");
        // Implement fallback Intersection Observer if desired
    }
}

function setupNavbar() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = navbar?.querySelector('ul');
    let lastScrollTop = 0;

    // Sticky / Background Change on Scroll
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) { // Add scrolled class after scrolling down a bit
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Basic Hide/Show on Scroll (optional enhancement)
        /*
        if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight){
          navbar.style.top = "-80px"; // Adjust based on navbar height
        } else {
          navbar.style.top = "0";
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        */

        // Active link highlighting
         updateActiveNavLink();

    }, false);

    // Mobile Menu Toggle
    if (menuToggle && navUl) {
      menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
      });
       // Close mobile menu when a link is clicked
      navUl.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
              if (navUl.classList.contains('active')) {
                  navUl.classList.remove('active');
                  menuToggle.querySelector('i').classList.remove('fa-times');
                   menuToggle.querySelector('i').classList.add('fa-bars');
              }
          });
      });

    }

    // Active Link Highlighting on Load/Refresh
     updateActiveNavLink();

}


function updateActiveNavLink() {
    const sections = document.querySelectorAll('main section[id]'); // Only sections in main with an ID
    const navLinks = document.querySelectorAll('#navbar ul li a');
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - (navbar.offsetHeight + 50); // Adjust offset as needed
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });
     // Handle hero section separately
     if(pageYOffset < (document.getElementById('about')?.offsetTop || 500) - 100 ) {
        currentSectionId = 'hero';
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        // Check if link href matches # + section ID or just #hero for the first link
        if ((link.getAttribute('href') === `#${currentSectionId}`) || (currentSectionId === 'hero' && link.getAttribute('href') === '#hero')) {
            link.classList.add('active');
        }
    });
}


function setupBackToTopButton() {
    const btn = document.getElementById('back-to-top');
    if(!btn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Show after scrolling 300px
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


// --- Optional Particle Initialization ---
/*
function initializeParticles() {
    // Check if tsParticles library is loaded
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("particle-canvas", {
            fpsLimit: 60,
            particles: {
                number: { value: 50, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: {
                    value: 0.3, random: true,
                    anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
                },
                size: {
                    value: 2, random: true,
                    anim: { enable: false }
                },
                line_linked: {
                    enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1
                },
                move: {
                    enable: true, speed: 1, direction: "none", random: true, straight: false,
                    out_mode: "out", attract: { enable: false }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" }, // 'grab' is less intense than 'repulse'
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_opacity: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true,
            // background: { color: "transparent" } // Ensure canvas bg is transparent if using CSS bg
        });
    } else {
        console.warn("tsParticles library not found. Particle effect disabled.");
    }
}
*/