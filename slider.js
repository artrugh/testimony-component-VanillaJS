// slider.js

const transition = (settime, testimonies, originalClassName, index = 0) => {
    setTimeout(() => {
        if (index < testimonies.length) {
            // clean all posible active class setting all the items whith the image class
            [...testimonies].map(item => item.className = originalClassName);
            // toggle the class to active
            testimonies[index].classList.toggle('active')
            if (index === 0) {
                // toggle the pre image which flows to the left
                testimonies[testimonies.length - 1].classList.toggle('pre')
            } else {
                // toggle the pre image which flows to the left
                testimonies[index - 1].classList.toggle('pre')
            }
            transition(settime, testimonies, originalClassName, index + 1)

        } else {
            // create and infinite loop of the slider effect
            transition(settime, testimonies, originalClassName, 0)
        }
    }, settime)
}

// main function 
export const slider = (testimony, className, settime) => {

    //create the slider container
    const sliderWrapper = document.createElement("div");
    // pass the id as an argument
    sliderWrapper.className = className;
    sliderWrapper.id = "slider-wrapper";
    container.appendChild(sliderWrapper);

    //crate the balls counter
    const counterContainer = document.createElement("div");
    counterContainer.id = "counter-container";

    //loop inside the array of testimony
    for (let i = 0; i < testimony.length; i++) {

        // create the main container
        const testimonyContainer = document.createElement("div");
        testimonyContainer.id = testimony[i].name;

        // the testimony
        const text = document.createElement("p");
        text.className = "text";
        text.innerHTML = testimony[i].testimony;
        testimonyContainer.appendChild(text);
        // the client dertails (name & picture)
        const clientDetails = document.createElement("div");
        clientDetails.className = "client-details";
        testimonyContainer.appendChild(clientDetails);
        // picture
        const portrait = document.createElement("div");
        portrait.className = "portrait";
        portrait.style.backgroundImage = `url("./img/${testimony[i].photo}")`;
        clientDetails.appendChild(portrait);
        // name
        const client = document.createElement("p");
        client.className = "client-name";
        client.innerHTML = testimony[i].name;
        clientDetails.appendChild(client);
        // the counter ball
        const counter = document.createElement("div");
        counterContainer.appendChild(counter);

        // set as default the first element with the class active
        if (i === 0) {
            testimonyContainer.className = "testimony active";
            counter.className = "counter active"

        } else {
            // the other ones, just class img
            testimonyContainer.className = "testimony";
            counter.className = "counter"
        }

        sliderWrapper.appendChild(testimonyContainer);
        container.appendChild(counterContainer);

    }

    // select all the images from the DOM which have already been created
    const testimonies = document.querySelectorAll(".testimony");
    // create a local function which loop inside the array and set the time out
    const counterBalls = document.querySelectorAll(".counter");
    // call the function
    transition(settime, testimonies, 'testimony');
    transition(settime, counterBalls, 'counter');

    sliderWrapper.style.height = `${document.querySelector(".testimony").getBoundingClientRect().height}px`;

}