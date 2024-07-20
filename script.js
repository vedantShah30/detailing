document.getElementById('image-section').addEventListener('click', function() {
    const linksSection = document.getElementById('links-section');
    linksSection.classList.remove('hidden');
    setTimeout(() => {
        linksSection.classList.add('hidden');
    }, 3500);
});
