

AOS.init();
let image = document.querySelector('.generated-image');
let quote = document.querySelector('.quote3');
let generate_button = document.querySelector('.button--pandora');

let quotes_arr = ['The  fool precedes the master',
    'The circumambulation. The idea that you have a potential self manifests itself moment to moment in the present life by making you interested in things and the things that you are interested in will guide you to maximal development',
    'Assume that you are going to do it badly ',
    'Once you start moving towards your goal the world looks different and you also become different',
    'The goal that is in front of you will have shifted its location because you weren\'t good at specifying its location when starting',
    'Having moved you are now sharper and more focused it is going to reveal itself with more accuracy to you',
    'This is echoed in exodus. The Hebrews escaped a tyranny this is when you escape your ignorant and stupidly held behaviours then you are in the desert and worship the wrong things until you organize yourself morally again until you head in the right direction ',
    'The fact that you are full of fault doesn\'t mean you have to stop and it doesn\'t mean you can\'t learn• So you can have an idea and you are going to be wrong about it but it doesn\'t matter because what you are right about is the idea of moving forward',
    'There is no difference between thinking about yourself and being miserable',
    'You have to negotiate with yourself  and not tyrannize yourself like you\'re dealing with someone you care for and you would like to be productive  and have a good life',
    'The fact that you have limitations, the plot of your life is overcoming those limitations and if you didn\'t  have limitations there wouldn\'t be a plot there wouldn\'t be life',
    'The self is everything you are and everything that you could be across time. That which you could be told you were to walk by making that path meaningful '
];

generate_button.addEventListener('click', function (e) {
    e.preventDefault();
    let picked_quote = `<p  data-aos="zoom-in-right" data-aos-duration="400" data-aos-easing="ease-in-sine"> ${random_quote()} </p>`;
    quote.innerHTML = picked_quote;


});

function random_quote() {
    let random_quote = Math.round(Math.random() * quotes_arr.length);
    return quotes_arr[random_quote];
}

