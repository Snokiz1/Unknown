// Fade-in on scroll for sections
const sections = document.querySelectorAll('section');

const showSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
};

// Directly bind scroll event without debounce
window.addEventListener('scroll', showSection);

// Back to Top Button functionality
const backToTopBtn = document.querySelector('#backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add dynamic animations for the event gallery
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

const eventContainer = document.querySelector('.event-container');
const scrollLeftEventsButton = document.getElementById('scrollLeftEvents');
const scrollRightEventsButton = document.getElementById('scrollRightEvents');
let isMouseOverEvents = false;
let isButtonClickedEvents = false;

// Scroll left and right buttons for recent events
scrollLeftEventsButton.addEventListener('click', () => {
    isButtonClickedEvents = true;
    eventContainer.scrollBy({ left: -200, behavior: 'smooth' });
    setTimeout(() => (isButtonClickedEvents = false), 500); // Resume auto-scroll after 500ms
});

scrollRightEventsButton.addEventListener('click', () => {
    isButtonClickedEvents = true;
    eventContainer.scrollBy({ left: 200, behavior: 'smooth' });
    setTimeout(() => (isButtonClickedEvents = false), 500); // Resume auto-scroll after 500ms
});

// Automatic scrolling for recent events
function autoScrollEvents() {
    if (!isMouseOverEvents && !isButtonClickedEvents) {
        eventContainer.scrollBy({ left: 1, behavior: 'smooth' });
    }
}

// Pause auto-scroll on mouse over for recent events
eventContainer.addEventListener('mouseenter', () => {
    isMouseOverEvents = true;
});

eventContainer.addEventListener('mouseleave', () => {
    isMouseOverEvents = false;
});

// Call autoScrollEvents function every 20ms
setInterval(autoScrollEvents, 20);




const discountContainer = document.querySelector('.discount-container');
const scrollLeftButton = document.getElementById('scrollLeft');
const scrollRightButton = document.getElementById('scrollRight');
let isMouseOver = false;
let isButtonClicked = false;

// Scroll left and right buttons
scrollLeftButton.addEventListener('click', () => {
    isButtonClicked = true;
    discountContainer.scrollBy({ left: -200, behavior: 'smooth' });
    setTimeout(() => (isButtonClicked = false), 500); // Resume auto-scroll after 500ms
});

scrollRightButton.addEventListener('click', () => {
    isButtonClicked = true;
    discountContainer.scrollBy({ left: 200, behavior: 'smooth' });
    setTimeout(() => (isButtonClicked = false), 500); // Resume auto-scroll after 500ms
});

// Automatic scrolling
function autoScroll() {
    if (!isMouseOver && !isButtonClicked) {
        discountContainer.scrollBy({ left: 1, behavior: 'smooth' });
    }
}

// Pause auto-scroll on mouse over
discountContainer.addEventListener('mouseenter', () => {
    isMouseOver = true;
});

discountContainer.addEventListener('mouseleave', () => {
    isMouseOver = false;
});

// Call autoScroll function every 20ms
setInterval(autoScroll, 20);





// Handle suggestion input
const suggestionInput = document.getElementById('suggestionInput');
const submitSuggestionButton = document.getElementById('submitSuggestion');
const suggestionResponse = document.getElementById('suggestionResponse');

submitSuggestionButton.addEventListener('click', () => {
    if (suggestionInput.value.trim() !== '') {
        suggestionResponse.style.display = 'block';
        suggestionInput.value = ''; // Clear the input field
    } else {
        alert('Please write a suggestion before submitting.');
    }
});
