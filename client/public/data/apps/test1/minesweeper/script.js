document.addEventListener('DOMContentLoaded', () => {

    const div1 = document.querySelector('.div1');
    const div2 = document.querySelector('.div2');
    const div3 = document.querySelector('.div3');
    const grid = document.querySelector('.grid');
    const slider = document.querySelector('.slider');

    let isGameActive = false;
    let isGameOver = false;
    let width = 20;
    let bombAmount = 40;
    let squares = [];
    let fillSpeed = 0;
    let count = 0;

    slider.addEventListener('input', () => {
        fillSpeed = slider.value;
    });

    function resetFirstCounter() {
        div1.innerHTML = `0${bombAmount}`;
    }

    function updateFirstCounter(square) {
        if (square.classList.contains('flag')) bombAmount++;
        else bombAmount--;
        if (bombAmount < 1000) div1.innerHTML = `${bombAmount}`;
        if (bombAmount < 100) div1.innerHTML = `0${bombAmount}`;
        if (bombAmount < 10) div1.innerHTML = `00${bombAmount}`;
    }

    function startSecondCounter() {
        let timerID = setInterval(() => {
            if (!isGameActive) {
                clearInterval(timerID);
                return;
            }
            updateSecondCounter();
        }, 1000);
    }

    function updateSecondCounter() {
        count++;
        if (count < 10) div3.innerHTML = `00${count}`;
        else if (count < 100) div3.innerHTML = `0${count}`;
        else if (count < 1000) div3.innerHTML = `${count}`;
        else div3.innerHTML = `999`;
    }

    div2.addEventListener('mousedown', () => {
        div2.innerHTML = '😮'
    });
    div2.addEventListener('mouseup', () => {
        div2.innerHTML = '🙂';
        
    });
    div2.addEventListener('mouseout', () => {
        if (isGameOver) {
            if (isGameBeaten()) div2.innerHTML == '🥰'
            else div2.innerHTML = '🙁';
        }
        else div2.innerHTML = '🙂';
    });

    div2.addEventListener('click', () => {
        isGameActive = false;
        isGameOver = false;
        bombAmount = 40;
        squares = [];
        count = 0
        grid.innerHTML = '';
        createBoard();
        resetFirstCounter();
        div3.innerHTML = '000';
        div2.innerHTML = '🙂';
    });

    //create board
    function createBoard() {
        //get shuffled bomb array with random bombs
        const bombsArray = Array(bombAmount).fill('bomb');
        const emptyArray = Array(width*width - bombAmount).fill('valid');
        const gameArray = emptyArray.concat(bombsArray);
        const shuffledArray = gameArray.sort(() => Math.random() -0.5);
        //create 100 divs and set attributes
        for (let i=0; i<width*width; i++) {
            const square = document.createElement('div');
            square.setAttribute('id', i);
            square.classList.add(shuffledArray[i]);
            grid.appendChild(square);
            squares.push(square);
            //normal click
            square.addEventListener('click', () => {
                if (!isGameActive) {
                    isGameActive = true;
                    startSecondCounter();
                }
                if (square.getAttribute('disabled') == 'false') {
                    click(square);
                }
            });
            //flag function
            square.addEventListener('mousedown', (e) => {
                if (isGameOver) return;
                if (square.classList.contains('checked')) return;
                square.setAttribute('disabled', false);
                if (e.which == 3) {
                    if (bombAmount == 0 && !square.classList.contains('flag')) return;
                    updateFirstCounter(square);
                    square.classList.toggle('flag');
                    return;
                }
                div2.innerHTML = '😮';
                square.setAttribute('flag', true);
                if (bombAmount != 0) {
                    setTimeout(() => {
                        if (!isGameOver) div2.innerHTML = '🙂';
                        if (square.getAttribute('flag') == 'true') {
                            if (bombAmount == 0 && !square.classList.contains('flag')) return;
                            updateFirstCounter(square);
                            square.classList.toggle('flag');
                            square.setAttribute('disabled', true);
                        }
                    }, 1000);
                }
            });
            square.addEventListener('mouseup', () => {
                if (div2.innerHTML == '🙂') return;
                if (isGameOver) return;
                if (square.classList.contains('checked')) return;
                div2.innerHTML = '🙂';
                square.setAttribute('flag', false);
            });
            square.addEventListener('mouseout', () => {
                if (isGameOver) return;
                div2.innerHTML = '🙂';
                square.setAttribute('flag', false);
            });
        }
        //add numbers stored in data attribute to valid squares
        for (let i=0; i< squares.length; i++) {
            let total = 0;
            const isLeftEdge = i % width === 0;
            const isRightEdge = i % width === width-1;

            if (squares[i].classList.contains('valid')) {
                if (i > 0 && !isLeftEdge && squares[i-1].classList.contains('bomb')) total++;
                if (i >= width && !isLeftEdge && squares[i-width-1].classList.contains('bomb')) total++;
                if (i >= width && squares[i-width].classList.contains('bomb')) total++;
                if (i >= width && !isRightEdge && squares[i-width+1].classList.contains('bomb')) total++;
                if (!isRightEdge && squares[i+1].classList.contains('bomb')) total++;
                if (i < width*(width-1) && !isRightEdge && squares[i+width+1].classList.contains('bomb')) total++;
                if (i < width*(width-1) && squares[i+width].classList.contains('bomb')) total++;
                if (i < width*(width-1) && !isLeftEdge && squares[i+width-1].classList.contains('bomb')) total++;
                if (total > 0) squares[i].classList.add(`color${total}`);
                squares[i].setAttribute('data', total);
            }
        }
    }
    createBoard();
    //click on square actions
    function click(square) {
        // check if game is finished, square was clicked or has a flag
        debugger;
        if (isGameOver) return;
        if (square.classList.contains('checked') || square.classList.contains('flag')) return;
        // first check if it is a bomb
        if (square.classList.contains('bomb')) {
            isGameActive = false;
            isGameOver = true;
            div2.innerHTML = '🙁';
            square.classList.add('explode')
            showBombs();
            return;
        // if square doesnt contain a bomb
        } else {
            square.classList.add('checked');
            let total = square.getAttribute('data');
            // if square has bombs surrounding it
            if (total !=0) {
                square.innerHTML = total;
                return;
            }
            // if an empty space that hasnt been checked
            checkSquares(square.id);
        }
    }
    //check neighboring squares
    function checkSquares(currentId) {
        const isLeftEdge = currentId % width === 0;
        const isRightEdge = currentId % width === width-1;
        let nextId;
        let nextSqaure;

        if (fillSpeed == 0) {
            if (currentId > 0 && !isLeftEdge) {
                nextId = parseInt(currentId)-1;
                nextSqaure = document.getElementById(nextId);
                click(nextSqaure);
            }
            if (currentId >= width && !isLeftEdge) {
                nextId = parseInt(currentId)-width-1;
                nextSqaure = document.getElementById(nextId);
                click(nextSqaure);
            }
            if (currentId >= width) {
                nextId = parseInt(currentId)-width;
                nextSqaure = document.getElementById(nextId);
                click(nextSqaure);
            }
            if (currentId >= width && !isRightEdge) {
                nextId = parseInt(currentId)-width+1;
                nextSqaure = document.getElementById(nextId);
                click(nextSqaure);
            }
            if (!isRightEdge) {
                nextId = parseInt(currentId)+1;
                nextSqaure = document.getElementById(nextId);
                click(nextSqaure);
            }
            if (currentId < width*(width-1) && !isRightEdge) {
                nextId = parseInt(currentId)+width+1;
                nextSqaure = document.getElementById(nextId);
                click(nextSqaure);
            }
            if (currentId < width*(width-1)) {
                nextId = parseInt(currentId)+width;
                nextSqaure = document.getElementById(nextId);
                click(nextSqaure);
            }
            if (currentId < width*(width-1) && !isLeftEdge) {
                nextId = parseInt(currentId)+width-1;
                nextSqaure = document.getElementById(nextId);
                click(nextSqaure);
            }
        } else {
            setTimeout(() => {
                if (currentId > 0 && !isLeftEdge) {
                    nextId = parseInt(currentId)-1;
                    nextSqaure = document.getElementById(nextId);
                    click(nextSqaure);
                }
                if (currentId >= width && !isLeftEdge) {
                    nextId = parseInt(currentId)-width-1;
                    nextSqaure = document.getElementById(nextId);
                    click(nextSqaure);
                }
                if (currentId >= width) {
                    nextId = parseInt(currentId)-width;
                    nextSqaure = document.getElementById(nextId);
                    click(nextSqaure);
                }
                if (currentId >= width && !isRightEdge) {
                    nextId = parseInt(currentId)-width+1;
                    nextSqaure = document.getElementById(nextId);
                    click(nextSqaure);
                }
                if (!isRightEdge) {
                    nextId = parseInt(currentId)+1;
                    nextSqaure = document.getElementById(nextId);
                    click(nextSqaure);
                }
                if (currentId < width*(width-1) && !isRightEdge) {
                    nextId = parseInt(currentId)+width+1;
                    nextSqaure = document.getElementById(nextId);
                    click(nextSqaure);
                }
                if (currentId < width*(width-1)) {
                    nextId = parseInt(currentId)+width;
                    nextSqaure = document.getElementById(nextId);
                    click(nextSqaure);
                }
                if (currentId < width*(width-1) && !isLeftEdge) {
                    nextId = parseInt(currentId)+width-1;
                    nextSqaure = document.getElementById(nextId);
                    click(nextSqaure);
                }
            }, fillSpeed)
        }
    }

    function showBombs() {
        for (let i=0; i<grid.children.length; i++) {
            if (grid.childNodes[i].classList.contains('bomb')) {
                grid.childNodes[i].innerHTML = 'x';
            }
        }
    }

    function isGameBeaten() {
        let temp = true;
        for (let i=0; i< squares.length; i++) {
            if (squares[i].classList.contains('bomb')) {
                if (!squares[i].classList.contains('flag')) {
                    temp = false;
                }
            }
        }
        if (temp) {
            showBombs();
            isGameActive = false
            isGameOver = true;
            div2.innerHTML = '🥰';
            for (let i=0; i< squares.length; i++) {
                if (squares[i].classList.contains('bomb')) {
                    squares[i].classList.add('complete');
                }
            }
        }
        return temp;
    }
});