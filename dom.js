document.getElementById('spin').addEventListener('click', function () {
    spinAction(1);
});
document.getElementById('reset').addEventListener('click', function () {
    spinAction(-1);
});


// direction is a janky fix
function spinAction(direction) {
    var testNum = parseInt(prompt("what number would you like to test?"));
    randLocation = Math.floor(Math.random() * 360);
    var degrees = randLocation + 1440 - findDegrees(testNum);
    var wheel = document.getElementById('wheel');
    var ball = document.getElementById('ball');
    // refactor into html/css  
    wheel.src = 'roulette.png';
    ball.src = 'roulette-ball.gif';
    ball.style.webkitTransform = "rotate(" + (randLocation - 1440) + "deg)";
    var rotation = "rotate(" + (direction * degrees) + "deg)";
    wheel.style.webkitTransform = rotation;
}

//need to change
function addSpot(number, color, id, container) {
    var board = document.getElementById('wheel-bet');
    var spot = document.createElement('div');
    spot.id = number;
    spot.style.background = color;
    spot.innerHTML = number;
    spot.className = 'wheel-bet';
    board.appendChild(spot);
}

function assignDegrees() {
    var wheelPosition = [];
    var wheelOrder = [2, 14, 35, 23, 4, 16, 33, 21, 6, 18, 31, 19, 8, 12, 29, 25, 10, 27, "00", 1, 13, 36, 24, 3, 15, 34, 22, 5, 17, 32, 20, 7, 11, 30, 26, 9, 28, 0];
    var localIncrement = 0;
    for (var i = 0; i < wheelOrder.length; i++) {
        var test = "";
        wheelPosition.push({
            order: wheelOrder[i],
            increment: localIncrement
        });
        localIncrement += (360 / 38);
    }
    return wheelPosition;
}

function findDegrees(num) {
    var tempPositionArray = assignDegrees();
    for (var i = 0; i < tempPositionArray.length; i++) {
        if (tempPositionArray[i].order === num) {
            return tempPositionArray[i].increment;
        }
    }
}