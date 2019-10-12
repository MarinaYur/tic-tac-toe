class TicTacToe {

    constructor() {
        this.symbol = 'x';
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.symbol;
            if (this.symbol == 'x') {
                this.symbol = 'o';
            } else {
                this.symbol = 'x';
            }
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        if (((this.field[0][0] == this.field[1][1]) && (this.field[1][1] == this.field[2][2]) && (this.field[2][2] == 'x')) ||
            ((this.field[0][2] == this.field[1][1]) && (this.field[1][1] == this.field[2][0]) && (this.field[2][0] == 'x')) ||
            this.field[0].every(elem => elem == 'x') ||
            this.field[1].every(elem => elem == 'x') ||
            this.field[2].every(elem => elem == 'x') ||
            (this.field[0][0] == 'x' && this.field[1][0] == 'x' && this.field[2][0] == 'x') ||
            (this.field[0][1] == 'x' && this.field[1][1] == 'x' && this.field[2][1] == 'x') ||
            (this.field[0][2] == 'x' && this.field[1][2] == 'x' && this.field[2][2] == 'x')) {
            return ('x');
        }

        if (((this.field[0][0] == this.field[1][1]) && (this.field[1][1] == this.field[2][2]) && (this.field[2][2] == 'o')) ||
            ((this.field[0][2] == this.field[1][1]) && (this.field[1][1] == this.field[2][0]) && (this.field[2][0] == 'o')) ||
            this.field[0].every(elem => elem == 'o') ||
            this.field[1].every(elem => elem == 'o') ||
            this.field[2].every(elem => elem == 'o') ||
            (this.field[0][0] == 'o' && this.field[1][0] == 'o' && this.field[2][0] == 'o') ||
            (this.field[0][1] == 'o' && this.field[1][1] == 'o' && this.field[2][1] == 'o') ||
            (this.field[0][2] == 'o' && this.field[1][2] == 'o' && this.field[2][2] == 'o')) {
            return ('o');
        }
        return null;
    }    

    noMoreTurns() {
        for (let i = 0; i < this.field.length; i++) {
            for (let j = 0; j < this.field[i].length; j++) {
                if (this.field[i][j] === null) {
                    return false;
                }
            }
        }

        return true;
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
