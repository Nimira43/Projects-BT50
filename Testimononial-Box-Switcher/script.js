const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'Ayrton Senna',
        position: '3 times World Champion',
        photo: './senna.jpg',
        text: "The main thing is to be yourself and not allow people to disturb you to be different, because they want you to be different. You gotta be yourself. Many times you throw a mistake due to your own personality or your own character or from interference that you get along the way then you learn, and the main thing is to learn from your mistakes and get better."
    },
    {
        name: 'Nelson Piquet',
        position: '3 times World Champion',
        photo: './piquet.jpg',
        text: "Through F1, I bought my own boat. I learned to fly my own plane and helicopter. And my job with my company is a reflection of everything motor racing taught me."
    },
    {
        name: 'Gilles Villeneuve',
        position: '6 times Grand Prix winner',
        photo: './villeneuve.jpg',
        text: "The sport is more important than anything. More important than any of the people in it. Of course I say what I think. I always have, even if it upsets people like Ecclestone and Balestre. Why should I be afraid of them? The fans aren't here to see politicians and manipulators. They're here to see Alain and Mario and Carlos and me. I am very secure in my feelings about racing. I make a lot of money from it, but one thing I can tell you for sure: if the money disappeared overnight, I would still be in racing, because I love it. The entrepreneurs would be gone."
    },
    {
        name: 'Damon Hill',
        position: '1996 World Champion',
        photo: './hill.jpg',
        text: "You should never feel comfortable. There is something wrong if you are. You should always feel under threat, on the edge of your seat and pushing yourself. Win one and you want to win more. It's never-ending."
    },
    {
        name: 'Lewis Hamilton',
        position: '7 times World Champion',
        photo: './hamilton.jpg',
        text: "In racing there are always things you can learn, every single day. There is always space for improvement, and I think that applies to everything in life."
    },
    {
        name: 'Gerhard Berger',
        position: '10 times Grand Prix winner',
        photo: './berger.jpg',
        text: "Forget anything after, the 1986 Turbo cars really were rockets, and to handle them I really think you had to be a man"
    },
    {
        name: 'Niki Lauda',
        position: '3 times World Champion',
        photo: './lauda.jpg',
        text: "To make a decision you need to be in a perfect environment: you have to be motivated and surrounded by the right people."
    },
    {
        name: 'Riccardo Patrese',
        position: '6 times Grand Prix winner',
        photo: './patrese.jpg',
        text: "I have given a lot to motor racing but I don’t think I have received proportionately. It is a balance that I intend to make even."
    },
];

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];
    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(updateTestimonial, 10000);

