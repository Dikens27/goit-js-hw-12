import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const btnLoadMore = document.querySelector(".load-more");
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

let page = 1;
let isLastPage = false;
const perPage = 40;
let q;
let totalHits;

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    page = 1;
    showLoader();
    gallery.innerHTML = "";
    isLastPage = false;

    q = event.currentTarget.elements.search.value.trim();
   
    if (q.length === 0) {
        showErrorToast(errorMessage);
        hideLoader();
    } else {
        try {
            btnLoadMore.style.display = 'none';
            const images = await getIMG(q);
            renderIMG(images);
        } catch (error) {
            console.error(error);
            showErrorToast(errorMessage);
        } finally {
            hideLoader();
        }
    }
});

async function getIMG(query = "") {
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
            per_page: perPage,
        }
    });

    try {
        const response = await instance.get();

        const data = await response.data;
        if (data.hits.length) {
            totalHits = data.totalHits;
            return data.hits;
        } else {
            showErrorToast(errorMessage);
            hideLoader();
            return;
        }
    } catch {
        showErrorToast(errorMessage);
        return;
    }
}

const createGetIMGRequest = async () => {
        try {
            if (isLastPage) {
                showErrorToast("We're sorry, but you've reached the end of search results.");
                return;
            }
            
            page++;

            try {
            showLoader();
            btnLoadMore.style.display = 'none';
            const images = await getIMG(q);
            renderIMG(images);
            window.scrollBy({
                top: getScroll() * 2,
                behavior: "smooth"
            });
            } catch (error) {
            console.error(error);
            showErrorToast(errorMessage);
            } finally {
            hideLoader();
            }
            if (page >= totalHits / perPage) {
                isLastPage = true;
                btnLoadMore.style.display = 'none';
                showErrorToast("We're sorry, but you've reached the end of search results.");
            }
        } catch {
            showErrorToast(errorMessage);
        }
}

btnLoadMore.addEventListener('click', (event) => {
    createGetIMGRequest();
});

const getImageHTML = ({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => `           
    <li class="gallery-item">
        <div class=gallery-card>
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="360" height="200" />
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

function renderIMG(images) {
    if (images === undefined) {
        return;
    } else {
        const markup = images.map((image => {
            return getImageHTML(image);
        })).join("");
        gallery.insertAdjacentHTML("beforeend", markup);
        lightbox.refresh();         
        hideLoader();
        if (Math.floor(totalHits / perPage) > 0) {
            btnLoadMore.style.display = 'block';
        }
    }
}

function getScroll() {
    const li = document.querySelector(".gallery-item");
    const scrol = li.getBoundingClientRect().height;
    return scrol;
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

const errorMessage = "Sorry, there are no images matching your search query. Please try again!Reqest is not ok";

function showLoader() {
    loader.classList.add('loading');
}

function hideLoader() {
    loader.classList.remove('loading');
}

