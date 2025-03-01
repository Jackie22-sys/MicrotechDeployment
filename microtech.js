function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');

    document.getElementById(sectionId).style.display = 'block';
}

window.onload = function () {
    showSection('home');
};


function filterCategory(category) {
    let items = document.querySelectorAll('.products-item');
    let buttons = document.querySelectorAll('.category-button');

    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    event.target.classList.add('active');

    // Show all items if 'all' is selected
    if (category === 'all') {
        items.forEach(item => item.style.display = 'block');
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}


