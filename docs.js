document.addEventListener('DOMContentLoaded', function() {
    // Handle sidebar navigation
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const contentSections = document.querySelectorAll('.content-section');

    sidebarItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all items and sections
            sidebarItems.forEach(i => i.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked item and corresponding section
            item.classList.add('active');
            const contentId = item.getAttribute('data-content');
            document.getElementById(contentId).classList.add('active');
        });
    });
});