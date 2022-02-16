function changeBgColor(color) {
    document.body.style.background = color;
};

function myBigger() {
    document.getElementById('#myJsZone').style.fontSize = '1.5em';
};

function myChancePolice() {
    if (document.getElementById('#myJsZone').style.fontSize > '1em') {
        document.getElementById('#myJsZone').style.fontSize = '1.2em';
    } else {
        document.getElementById('#myJsZone').style.fontSize = '2em';
    }
};

function myDate() {
    const date = new Date();
    let dateHTML = document.querySelector('.test');
    dateHTML.innerHTML = date;
}

function myName() {
    let myNameHTML = document.querySelector('.myName');
    let mySaisie;
    mySaisie = String(prompt('C\'est vrai que ce serait mieux de connaître votre nom. Vous vous appeler comment ?'));
    myNameHTML.innerHTML = mySaisie;
};

function myNormal() {
    document.getElementById('#myJsZone').style.fontSize = '1em';
};

function mySmaller() {
    document.getElementById('#myJsZone').style.fontSize = '0.9em';
};

function policeIncrease() {
    if (document.getElementById('#myJsZone').style.fontSize.slice(0, -2) == 0) {
        document.getElementById('#myJsZone').style.fontSize = '1em';
    } else {
        let $font = document.getElementById('#myJsZone').style.fontSize.slice(0, -2);
        $font *= 1.05;
        document.getElementById('#myJsZone').style.fontSize = $font + 'em';
    }
}

function policeReduce() {
    if (document.getElementById('#myJsZone').style.fontSize.slice(0, -2) == 0) {
        document.getElementById('#myJsZone').style.fontSize = '1em';
    } else {
        let $font = document.getElementById('#myJsZone').style.fontSize.slice(0, -2);
        $font /= 1.05;
        document.getElementById('#myJsZone').style.fontSize = $font + 'em';
    }
}


function myDate() {
    const date = new Date();
    let dateHTML = document.querySelector('.date');
    let $mois;
    switch (date.getMonth()) {
        case 0:
            $mois = 'janvier';
            break;
        case 1:
            $mois = 'février';
            break;
        case 2:
            $mois = 'mars';
            break;
        case 3:
            $mois = 'avril';
            break;
        case 4:
            $mois = 'mai';
            break;
        case 5:
            $mois = 'juin';
            break;
        case 6:
            $mois = 'juillet';
            break;
        case 7:
            $mois = 'août';
            break;
        case 8:
            $mois = 'septembre';
            break;
        case 9:
            $mois = 'octobre';
            break;
        case 10:
            $mois = 'novembre';
            break;
        case 11:
            $mois = 'décembre';
            break;
    }
    dateHTML.innerHTML = 'Nous sommes le ' + date.getDay() + ' ' + $mois + ' de l\'année ' + date.getFullYear() + ' et il est ' + date.getHours() + 'h' + date.getMinutes() + '.';
}

function nextSat(date) {
    let mySat = document.querySelector('.sat');
    let nextSat = 'samedi';
    mySat.innerHTML = nextSat;
}

