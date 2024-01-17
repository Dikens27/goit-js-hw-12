import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const btnLoadMore = document.querySelector(".load-more");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    showLoader();

    const q = event.currentTarget.elements.search.value.trim();
   
    if (q.length === 0) {
        showErrorToast("Sorry, there are no images matching your search query. Please try again!Reqest is not ok");
        hideLoader();
    } else {
        try {
            const images = await getIMG(q);
            renderIMG(images);
            btnLoadMore.style.display = 'block';
        } catch (error) {
            console.error(error);
            showErrorToast("Sorry, there are no images matching your search query. Please try again!Reqest is not ok");
        } finally {
            hideLoader();
        }
    }
});

async function getIMG(query = "") {
    let page = 1;
    let perPage = 40;

    const instance = axios.create({
        baseURL: 'https://pixabay.com/api/',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            key: "41729431-93e496ed3cd794296b45db789",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            page: page,
            perPage: perPage,
        }
    });

    try {
        const response = await instance.get();
        return response.data
    } catch (error) {
        showErrorToast();
    }

    const data = await response.json();
    
    if (data.hits.length) {
        return data.hits;
    } else {
        showErrorToast("Sorry, there are no images matching your search query. Please try again!Reqest is not ok");
        hideLoader();
        return [];
    }
}

const getImageHTML = ({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => `           
    <li class="gallery-item">
        <div class=gallery-card>
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image" src="${webformatURL}" alt="${tags}" width:"360" height:"200" />
            </a>

            <ul class="gallery-card-list">
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Likes</h2>
                    <p class="gallery-card-information">${likes}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Views</h2>
                    <p class="gallery-card-information">${views}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Comments</h2>
                    <p class="gallery-card-information">${comments}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Downloads</h2>
                    <p class="gallery-card-information">${downloads}</p>
                </li>
            </ul>
        </div>
    </li>
`

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function renderIMG(images) {
    gallery.innerHTML = "";
        if (images === undefined) {
            return;
        } else {
            const markup = images.hits.map(image => getImageHTML(image)).join("");
            gallery.insertAdjacentHTML("beforeend", markup);
            lightbox.refresh();         
            hideLoader();
        }
}

function showErrorToast(message) {
    iziToast.show({
        title: message,
        titleColor: 'white',
        color: 'white',
        backgroundColor: 'red',
        position: 'topRight',
    });
}

function showLoader() {
    loader.classList.add('loading');
}

function hideLoader() {
    loader.classList.remove('loading');
}