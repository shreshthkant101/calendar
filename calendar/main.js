for (var x = 0; x <= window.localStorage.length; x++) {
    document.getElementById("events").innerHTML = "";
    var y = JSON.parse(window.localStorage.getItem(x));

    var date = new Date();
    if (y != null) {

        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        if (dd.toString().length == 1) {
            dd = "0" + dd;
        }

        if (mm.toString().length == 1) {
            mm = "0" + mm;
        }

        var yyyy = date.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        console.log(today);
        console.log(y.date);

        if (today == y.date) {
            document.getElementById("n").style.display = 'none';
            var div = document.createElement('div');
            document.getElementById('events').appendChild(div);

            var annc = document.createElement("h1");
            annc.innerText = "Today's event: ";
            div.appendChild(annc);

            var occasion = document.createElement('h1');
            occasion.innerText = y.oc;
            div.appendChild(occasion);

            var dat = document.createElement('h3');
            dat.innerHTML = y.date;

            div.appendChild(dat);


        }

    }

}
async function add() {
    var date = document.querySelector("#date").value;
    var oc = document.querySelector("#oc").value;
    if (date != '' && oc != '') {
        var index = window.localStorage.length + 1;

        await window.localStorage.setItem(index, JSON.stringify({
            date: date,
            oc: oc
        }));
        alert("Created occasion!");


        newE();
    }

}

function newE() {
    for (var x = 0; x <= window.localStorage.length; x++) {
        document.getElementById("events").innerHTML = "";
        var y = JSON.parse(window.localStorage.getItem(x));

        var date = new Date();
        if (y != null) {

            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            if (dd.toString().length == 1) {
                dd = "0" + dd;
            }

            if (mm.toString().length == 1) {
                mm = "0" + mm;
            }

            var yyyy = date.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;

            console.log(today);
            console.log(y.date);

            if (today == y.date) {
                document.getElementById("n").style.display = 'none';
                var div = document.createElement('div');
                document.getElementById('events').appendChild(div);

                var annc = document.createElement("h1");
                annc.innerText = "Today's event: ";
                div.appendChild(annc);

                var occasion = document.createElement('h1');
                occasion.innerText = y.oc;
                div.appendChild(occasion);

                var dat = document.createElement('h3');
                dat.innerHTML = y.date;

                div.appendChild(dat);


            }

        }

    }
}