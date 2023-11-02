function typeAndDeleteText(element, text, speed, callback) {
    let i = 0;
    let isDeleting = false;

    function type() {
        if (!isDeleting && i <= text.length) {
            element.textContent = text.substring(0, i);
            i++;
            setTimeout(type, speed);
        } else if (isDeleting && i >= 0) {
            element.textContent = text.substring(0, i);
            i--;
            setTimeout(type, speed);
        } else {
            if (callback) callback();
        }
    }

    type();
}

const name = document.getElementById('name');

function animateText() {
    typeAndDeleteText(name, "Murat Eshimov", 120, () => {
        setTimeout(() => {
            typeAndDeleteText(name, "a web developer", 120, animateText);
        }, 500); // Delay before deleting "Murat Eshimov"
    });
}

animateText();
