const seatContainer = document.createElement('div');
seatContainer.classList.add('seat-container');
document.body.appendChild(seatContainer);

for (let i = 0; i < 8; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    seatContainer.appendChild(row);

    for (let j = 0; j < 8; j++) {
        const seat = document.createElement('input');
        seat.type = 'button';
        seat.value = `${i + 1}${j + 1}`;
        seat.classList.add('seat');
        seat.onclick = function () {
            console.log(this.value);
            const popup = document.createElement('div');
            popup.classList.add('popup');
            popup.textContent = this.value;
            document.body.appendChild(popup);
            setTimeout(function () {
                popup.remove();
            }, 2000);
        }
        row.appendChild(seat);
    }
}
