document.addEventListener("DOMContentLoaded", () => {
    // --- Intersection Observer for Timeline Items ---
    const timelineItems = document.querySelectorAll(".timeline-item");
    // --- Also observe Skills section and Education ---
    const otherSections = document.querySelectorAll("#skills, #education article");

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: "0px",
        threshold: 0.3 // Trigger when 30% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Optional: Stop observing once visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    otherSections.forEach(section => {
        observer.observe(section);
    });

     // --- Header Fade-in ---
     // Add fade-in class shortly after load to ensure it animates
     const header = document.querySelector('.main-header');
     setTimeout(() => {
       header.classList.add('fade-in');
     }, 100); // Small delay
});