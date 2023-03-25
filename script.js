const seatsContainer = document.getElementById('seats-container');
const rows = 8;
const cols = 8;
let seatNumber = 1;

for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < cols; j++) {
        const seat = document.createElement('input');
        seat.type = 'button';
        seat.value = seatNumber;
        seatNumber++;
        seat.classList.add('seat');
        row.appendChild(seat);
    }

    seatsContainer.appendChild(row);
}
