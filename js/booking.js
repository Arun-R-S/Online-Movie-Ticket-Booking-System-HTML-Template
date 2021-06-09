let arr = new Set();
function randomNumber(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(rndInt)
function deselect(name) {
    arr.delete(name);
    document.getElementsByName(name)[0].removeAttribute("style");
    document.getElementsByName(name)[0].setAttribute('onclick', 'select(\'' + name + '\')');
}
function select(name) {
    arr.add(name);
    document.getElementsByName(name)[0].style.backgroundColor = "rgb(93, 150, 7)";
    document.getElementsByName(name)[0].style.color = "white";
    document.getElementsByName(name)[0].setAttribute('onclick', 'deselect(\'' + name + '\')');
}
function generate_table() {
    var total_row = 15;
    var total_seat_per_row = 20;
    var body = document.getElementById('screen');
    var tbl = document.createElement('table');
    tbl.setAttribute('id', 'tbl-screen');
    var tbdy = document.createElement('tbody');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.appendChild(document.createTextNode("Screen Facing this side"));
    th.setAttribute('id','heading');

    th.setAttribute('colSpan', total_seat_per_row + 2);

    tr.appendChild(th);
    tbdy.appendChild(tr);
    for (var i = 0; i < total_row; i++) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var seatno = String.fromCharCode(i + 65);
        td.appendChild(document.createTextNode(seatno));
        td.setAttribute('id', 'row_no');
        tr.appendChild(td);
        for (var j = 1; j <= total_seat_per_row; j++) {

            if (randomNumber(1, 99) % 50 == 0) {
                var td = document.createElement('td');
                td.setAttribute('id', 'tbl_not_available');
                td.setAttribute('name', seatno + j);
                td.setAttribute('onclick', 'select(\'' + seatno + j + '\')');
                var img = document.createElement('img');
                img.setAttribute('src', '/images/seat/seat_cross.svg');
                
                td.appendChild(img);
                td.appendChild(document.createTextNode(j));
                tr.appendChild(td);
            }
            else if(randomNumber(1,25)%10==0)
            {
                var td = document.createElement('td');
                td.setAttribute('id', 'tbl_not_available');
                td.setAttribute('name', seatno + j);
                td.setAttribute('onclick', 'select(\'' + seatno + j + '\')');
                var img = document.createElement('img');
                img.setAttribute('src', '/images/seat/seat_red.svg');
                td.appendChild(img);
                td.appendChild(document.createTextNode(j));
                tr.appendChild(td);
            }
            else{
                var td = document.createElement('td');
                td.setAttribute('id', 'tbl_data');
                td.setAttribute('name', seatno + j);
                td.setAttribute('onclick', 'select(\'' + seatno + j + '\')');
                var img = document.createElement('img');
                img.setAttribute('src', '/images/svg/seat.svg');
                td.appendChild(img);
                td.appendChild(document.createTextNode(j));
                tr.appendChild(td);
            }
            if (total_seat_per_row / 2 == j) {
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(""));
                tr.appendChild(td);
            }
        }

        tbdy.appendChild(tr);
        if (seatno == "C") {
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.setAttribute('colspan', total_seat_per_row + 3);
            td.setAttribute('class', 'divider');
            td.appendChild(document.createTextNode("Silver"));
            tr.appendChild(td);
            tbdy.appendChild(tr);
        }
        if (seatno == "K") {
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.setAttribute('colspan', total_seat_per_row + 3);
            td.setAttribute('class', 'divider');
            td.appendChild(document.createTextNode("Gold"));
            tr.appendChild(td);
            tbdy.appendChild(tr);
        }
        if (seatno == "O") {
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.setAttribute('colspan', total_seat_per_row + 3);
            td.setAttribute('class', 'divider');
            td.appendChild(document.createTextNode("Platinum"));
            tr.appendChild(td);
            tbdy.appendChild(tr);
        }
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}