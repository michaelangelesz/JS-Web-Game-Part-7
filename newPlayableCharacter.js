function newPlayableCharacter(x, y) {
    const element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/red-character/static.gif`
        }
        if (direction === 'west') {
            element.src = `assets/red-character/west.gif`
        }
        if (direction === 'north') {
            element.src = `assets/red-character/north.gif`
        }
        if (direction === 'east') {
            element.src = `assets/red-character/east.gif`
        }
        if (direction === 'south') {
            element.src = `assets/red-character/south.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}