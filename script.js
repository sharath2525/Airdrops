function showSection(section) {
    document.getElementById('latest').style.display = section === 'latest' ? 'flex' : 'none';
    document.getElementById('hot').style.display = section === 'hot' ? 'flex' : 'none';
    document.getElementById('daily').style.display = section === 'daily' ? 'flex' : 'none';

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.nav-link[onclick="showSection('${section}')"]`).classList.add('active');
}