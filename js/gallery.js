const images = [
    {
        preview: 'imgs/brown_small.png',
        original: 'imgs/brown_big.png',
        description: 'Large painting on display in a museum.',
    },
    {
        preview: 'imgs/white_small.png',
        original: 'imgs/white_big.png',
        description: 'Art gallery with white walls and a hardwood floor.',
    },
    {
        preview: 'imgs/yellow_small.png',
        original: 'imgs/yellow_big.png',
        description: 'How I Opened My Own Photo Gallery',
    },
    {
        preview: 'imgs/yellow_small.png',
        original: 'imgs/yellow_big.png',
        description: 'How I Opened My Own Photo Gallery',
    },
    {
        preview: 'imgs/brown_small.png',
        original: 'imgs/brown_big.png',
        description: 'Large painting on display in a museum.',
    },
    {
        preview: 'imgs/white_small.png',
        original: 'imgs/white_big.png',
        description: 'Art gallery with white walls and a hardwood floor.',
    },
    {
        preview: 'imgs/white_small.png',
        original: 'imgs/white_big.png',
        description: 'Art gallery with white walls and a hardwood floor.',
    },
    {
        preview: 'imgs/yellow_small.png',
        original: 'imgs/yellow_big.png',
        description: 'How I Opened My Own Photo Gallery',
    },
    {
        preview: 'imgs/brown_small.png',
        original: 'imgs/brown_big.png',
        description: 'Large painting on display in a museum.',
    },
];


const gallery = document.querySelector('.gallery');

function fullGalleryItems() {
    const galleryItems = images.map(image => `
    <li class="gallery-item">
        <img src="${image.preview}" data-source="${image.original}" alt="${image.description}">
    </li>
    `).join('');
    gallery.innerHTML = galleryItems;
}
fullGalleryItems();

function createLightbox(imageSrc, imageAlt) {
    return basicLightbox.create(`
        <img src="${imageSrc}" alt="${imageAlt}">
    `);
}

let currentIndex;

function updateLightboxImage(index) {
    const lightboxImg = document.querySelector('.basicLightbox__placeholder img');
    lightboxImg.src = images[index].original;
    lightboxImg.alt = images[index].description;
    currentIndex = index;
    const lightbox = document.querySelector('.index_placement');
    lightbox.innerHTML = `<span id="img_index">${currentIndex+1}/${images.length}</span>`;
}

gallery.addEventListener('click', event => {
    const target = event.target;
    if (target.tagName !== 'IMG') return;

    const imageSrc = target.dataset.source;
    const imageAlt = target.alt;

    const instance = createLightbox(imageSrc, imageAlt);
    instance.show();

    currentIndex = images.findIndex(image => image.original === imageSrc);

    const lightbox = document.querySelector('.basicLightbox');
    let lightboxImg = document.querySelector('.basicLightbox__placeholder img');
    lightboxImg.id = 'big-image';
    
    lightbox.innerHTML += `
        <div class="buttons">
            <button id="prev">&lt;</button>
            <button id="next">&gt;</button>
        </div>
        <div class="index_placement">
            <span id="img_index">${currentIndex + 1}/${images.length}</span>
        </div>
    `;

    document.getElementById('prev').addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightboxImage(newIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % images.length;
        updateLightboxImage(newIndex);
    });
});

