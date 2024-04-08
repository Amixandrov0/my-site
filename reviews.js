const reviews = document.querySelectorAll('.review');
let currentReview = 0;

function showReview() {
    reviews.forEach(review => {
        review.classList.remove('active');
    });

    reviews[currentReview].classList.add('active');
}

document.getElementById('prevBtn').addEventListener('click', function() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview();
});

document.getElementById('nextBtn').addEventListener('click', function() {
    currentReview = (currentReview + 1) % reviews.length;
    showReview();
});

showReview();