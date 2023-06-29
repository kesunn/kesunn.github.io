const PastDate = new Date(2023, 2, 21, 18); // March 21, 2023

const CountUp = setInterval(() => {
    const CurrentDate = new Date();
    const TimePassed = Math.floor((CurrentDate - PastDate) / 1000);
    FlipAllCards(TimePassed);
}, 250);

function FlipAllCards(time) {
    const secs = time % 60;
    const mins = Math.floor(time / 60) % 60;
    const hrs = Math.floor(time / 3600) % 24;
    const days = Math.floor(time / 86400);
    console.log(days, hrs, mins, secs);
    Flipper(document.querySelector("[data-seconds-ones]"), secs % 10);
    setTimeout(() => {
        Flipper(document.querySelector("[data-seconds-tens]"), Math.floor(secs / 10));
        Flipper(document.querySelector("[data-days-tens]"), Math.floor(days / 10));
        Flipper(document.querySelector("[data-days-ones]"), days % 10);
        Flipper(document.querySelector("[data-hours-tens]"), Math.floor(hrs / 10));
        Flipper(document.querySelector("[data-hours-ones]"), hrs % 10);
        Flipper(document.querySelector("[data-minutes-tens]"), Math.floor(mins / 10));
        Flipper(document.querySelector("[data-minutes-ones]"), mins % 10);
    }, 100);
}

function Flipper(FlipCard, newNumber) {
    const TopHalf = FlipCard.querySelector(".flip-top");
    const StartNumber = parseInt(TopHalf.textContent);

    if (newNumber === StartNumber) return;

    const BottomHalf = FlipCard.querySelector(".flip-bottom");
    const TopFlip = document.createElement("div");
    TopFlip.classList.add("top-flip");
    const BottomFlip = document.createElement("div");
    BottomFlip.classList.add("bottom-flip");

    TopHalf.textContent = StartNumber;
    TopFlip.textContent = StartNumber;
    BottomHalf.textContent = StartNumber;
    BottomFlip.textContent = newNumber;

    TopFlip.addEventListener("animationstart", (e) => {
        TopHalf.textContent = newNumber;
    });
    TopFlip.addEventListener("animationend", (e) => {
        TopFlip.remove();
    });
    BottomFlip.addEventListener("animationend", (e) => {
        BottomHalf.textContent = newNumber;
        BottomFlip.remove();
    });
    FlipCard.append(TopFlip, BottomFlip);
}
