// scripts.js

const images = [
    {
        preview: 'http://127.0.0.1:5500/imgs/brown_small.png',
        original: 'http://127.0.0.1:5500/imgs/brown_big.png',
        description: 'Large painting on display in a museum.',
    },
    {
        preview: 'http://127.0.0.1:5500/imgs/white_small.png',
        original: 'http://127.0.0.1:5500/imgs/white_big.png',
        description: 'Art gallery with white walls and a hardwood floor.',
    },
    {
        preview: 'http://127.0.0.1:5500/imgs/yellow_small.png',
        original: 'http://127.0.0.1:5500/imgs/yellow_big.png',
        description: 'How I Opened My Own Photo Gallery',
    },
    {
        preview: 'http://127.0.0.1:5500/imgs/yellow_small.png',
        original: 'http://127.0.0.1:5500/imgs/yellow_big.png',
        description: 'How I Opened My Own Photo Gallery',
    },
    {
        preview: 'http://127.0.0.1:5500/imgs/brown_small.png',
        original: 'http://127.0.0.1:5500/imgs/brown_big.png',
        description: 'Large painting on display in a museum.',
    },
    {
        preview: 'http://127.0.0.1:5500/imgs/white_small.png',
        original: 'http://127.0.0.1:5500/imgs/white_big.png',
        description: 'Art gallery with white walls and a hardwood floor.',
    },
    {
        preview: 'http://127.0.0.1:5500/imgs/white_small.png',
        original: 'http://127.0.0.1:5500/imgs/white_big.png',
        description: 'Art gallery with white walls and a hardwood floor.',
    },
    {
        preview: 'http://127.0.0.1:5500/imgs/yellow_small.png',
        original: 'http://127.0.0.1:5500/imgs/yellow_big.png',
        description: 'How I Opened My Own Photo Gallery',
    },
    {
        preview: 'http://127.0.0.1:5500/imgs/brown_small.png',
        original: 'http://127.0.0.1:5500/imgs/brown_big.png',
        description: 'Large painting on display in a museum.',
    },
];

const gallery = document.querySelector('.gallery');

// Розмітка елементів галереї та додавання її всередину ul.gallery
const galleryItems = images.map(image => `
    <li class="gallery-item">
        <img src="${image.preview}" data-source="${image.original}" alt="${image.description}">
    </li>
`).join('');

gallery.innerHTML = galleryItems;

// Додавання обробника подій для відкриття модального вікна
gallery.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        const imageSrc = event.target.dataset.source;
        const imageAlt = event.target.alt;

        const instance = basicLightbox.create(`
            <img src="${imageSrc}" alt="${imageAlt}">
        `);

        instance.show();
    }
});
