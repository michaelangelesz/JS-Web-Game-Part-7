function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/green-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    /* 
    Add the Ability to Wait for walkEast:
    1. Make it asynchronous using the `async` keyword.
    2. Make it accept time as a parameter.
    3. At the end of the function, invoke sleep and pass it time as an argument.
    4. Use await to pause walkEast until sleep (time) has resolved.
    5. After sleep has resolved, invoke stop to stop the character. 
    6. Update the other walkDirections accordingly. 
    */
    async function walkEast(time) {
        direction = 'east'
        element.src = `./assets/green-character/east.gif`
        await sleep(time)
        stop()
    }

    async function walkNorth(time) {
        direction = 'north'
        element.src = `./assets/green-character/north.gif`
        await sleep(time)
        stop()
    }

    async function walkWest(time) {
        direction = 'west'
        element.src = `./assets/green-character/west.gif`
        await sleep(time)
        stop()
    }

    async function walkSouth(time) {
        direction = 'south'
        element.src = `./assets/green-character/south.gif`
        await sleep(time)
        stop()
    }

    function stop() {
        direction = null
        element.src = `./assets/green-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}

// Preparing to Use Async and Await. 1st step: With the code below, we implement the sleep function to pause function execution, and allow conversion of functions to be able to return promises instead of callbacks (make them async)
function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })  
}