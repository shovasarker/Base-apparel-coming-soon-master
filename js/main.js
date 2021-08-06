const email = document.querySelector('#email');
const inputHolder = document.querySelector('#input-holder');

const arrowBtn = document.querySelector('#arrow-btn');


arrowBtn.addEventListener('click', () => {
    let e = email.value.toString();

    if (e.includes('@') && !e.includes('/') && !e.includes('#') && !e.includes('$') && !e.includes('&')) {
        console.log(`${e} is valid`);
        if (inputHolder.classList.contains("error")) {
            inputHolder.classList.remove("error");
        }
    } else {
        console.log(`${e} is not valid`);
        if (!inputHolder.classList.contains("error")) {
            inputHolder.classList.add("error");
        }
    }
});