'use strict';

let filter = () => {
    let specialization = document.getElementById('special-search').value;
    let docList = document.querySelectorAll('.card');

    docList.forEach(card => {
        card.style.display = 'flex'; // Display all cards initially
    });

    if (specialization !== 'all') {
        docList.forEach(card => {
            if (card.dataset.speciality !== specialization) {
                card.style.display = 'none'; // Hide cards that don't match the selected specialization
            }
        });
    }
};

document.getElementById("special-search").addEventListener('change', filter);
