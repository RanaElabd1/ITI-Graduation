document.addEventListener('DOMContentLoaded', () => {
    // Toggle dark/light mode
    const toggle = document.querySelector('.toggle');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const ball = toggle.querySelector('.toggle-ball');
        ball.style.transform = ball.style.transform === 'translateX(20px)' ? 'translateX(0)' : 'translateX(20px)';
    });

    // Random image modal
    const randomImagesWrapper = document.querySelector('.random-images-wrapper');
    const modal = document.querySelector('.image-modal');
    const modalImage = document.querySelector('.modal-image');

    // Generate random images
    for (let i = 1; i <= 10; i++) {
        const img = document.createElement('img');
        img.src = `img / random${i}.jpg`;
        img.alt = `Random Movie ${i}`;
        img.classList.add('random-image');
        img.style.cursor = 'pointer';

        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = img.src;
        });

        randomImagesWrapper.appendChild(img);
    }

    // Close modal on click
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });



    // Movie list sliding functionality
    const arrows = document.querySelectorAll(".arrow");
    const movieLists = document.querySelectorAll(".movie-list");

    arrows.forEach((arrow, i) => {
        const itemNumber = movieLists[i].querySelectorAll("img").length;
        let clickCounter = 0;
        arrow.addEventListener("click", () => {
            const ratio = Math.floor(window.innerWidth / 270);
            clickCounter++;
            if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
                movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
            } else {
                movieLists[i].style.transform = "translateX(0)";
                clickCounter = 0;
            }
        });
    });

    // Smooth scrolling effect for navigation
    const menuLinks = document.querySelectorAll('.menu-list-item a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Fetch movie data from an API (placeholder example)
    fetch('https://api.example.com/movies') // Use a valid API endpoint
        .then(response => response.json())
        .then(data => {
            const movieList = document.querySelector('.movie-list');
            data.forEach(movie => {
                const movieItem = document.createElement('div');
                movieItem.classList.add('movie-list-item');
                movieItem.innerHTML = `
                    <img class="movie-list-item-img" src="${movie.image}" alt="${movie.title}">
                    <span class="movie-list-item-title">${movie.title}</span>
                    <p class="movie-list-item-desc">${movie.description}</p>
                    <button class="movie-list-item-button">Watch</button>
                `;
                movieList.appendChild(movieItem);
            });
        })
        .catch(error => console.error('Error fetching movie data:', error));

    // Form submission with alert
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = this.querySelector('input[name="name"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        alert(`Thank you, ${name}! Your message has been sent: "${message}"`);
        this.reset(); // Reset form fields
    });

    // Implement a responsive image gallery
    const galleryImages = document.querySelectorAll('.random-image');
    galleryImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            alert(`Thank you, ${name}. We have received your message.`);
            form.reset();
        }
    });
});

// Example function to handle form submission in login page
function handleLogin(event) {
    event.preventDefault(); // Prevent page refresh
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email && password) {
        alert('Logging in with ' + email);
        // Here you can add AJAX call to login
    } else {
        alert('Please enter both email and password');
    }
}

function showVideo() {
    document.getElementById('video-container').style.display = 'block';
    var video = document.getElementById('movie-video');
    video.play(); // Start video automatically when the container appears
}

function closeVideo() {
    var video = document.getElementById('movie-video');
    video.pause(); // Pause video when closing
    video.currentTime = 0; // Reset video to the beginning
    document.getElementById('video-container').style.display = 'none';
}

function openVideo() {
    // فتح نافذة جديدة بحجم الشاشة
    var videoWindow = window.open("", "_blank", "width=800,height=600,fullscreen=yes");

    // محتوى صفحة الفيديو
    videoWindow.document.write(`
        <html>
        <head>
            <title>Movie Video</title>
            <style>
                body, html {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: black;
                }
                .video-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                video {
                    width: 100%;
                    height: 100%;
                }
                .close-video-button {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    padding: 10px 20px;
                    background-color: #3c9b00;
                    color: white;
                    border: none;
                    cursor: pointer;
                    font-size: 18px;
                    border-radius: 6px;
                }
            </style>
        </head>
        <body>
            <div class="video-container">
                <video id="movie-video" controls autoplay>
                    <source src="video/movie.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <button class="close-video-button" onclick="window.close()">Close</button>
            </div>
        </body>
        </html>
    `);

    // تكبير نافذة الفيديو لتكون Fullscreen
    videoWindow.document.close();
    videoWindow.focus();
}





