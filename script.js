let currentBannerIndex = 0;
const banners = document.querySelectorAll('.banner-item');
const descriptionElement = document.getElementById('banner-description');

function updateBanner() {
    banners.forEach((banner, index) => {
        banner.style.display = index === currentBannerIndex ? 'block' : 'none';
    });
    const currentDescription = banners[currentBannerIndex].getAttribute('data-description');
    descriptionElement.textContent = currentDescription;
}

function nextBanner() {
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    updateBanner();
}

function prevBanner() {
    currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
    updateBanner();
}

updateBanner();

function adjustFontSize(amount) {
    const body = document.querySelector('body');
    const style = window.getComputedStyle(body, null).getPropertyValue('font-size');
    const fontSize = parseFloat(style);
    body.style.fontSize = (fontSize + amount) + 'px';
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

function searchNews() {
    const query = document.getElementById('search').value.toLowerCase();
    const articles = document.querySelectorAll('.principal article');
    
    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        const content = article.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(query) || content.includes(query)) {
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    });
}
