import { Injectable} from '@angular/core';

@Injectable()
export class CalculatorService {
    constructor () {}
    firstOperand = '0';
    secondOperand = '';
    operator = '';
    defaultOperand = '0';

    // switcher to handle default value, when it should be cleared and when not
    clearDefaultOperand = true;

    topScreen = '';
    botScreen = this.firstOperand;

    // switcher to change input to a secondOperand number

    toggle = true;

    // accept user click and choose proper function

    btnClick(inputType, inputData) {
        switch (inputType) {
            case 'number':
                            this.setValue(inputData);
                            break;
            case 'operator':
                            this.setOperator(inputData);
                            break;
            case 'operation':
                            this.checkOperation(inputData);
                            break;
        }
        [this.firstOperand, this.secondOperand] = [this.addComa(this.firstOperand), this.addComa(this.secondOperand)];
        this.checkWhatToDisplay();
    }

    // check for operation

    checkOperation(operation) {
        switch (operation) {
            case '√':
                    this.getSquareRoot();
                    break;
            case 'x²':
                    this.bringToPower();
                    break;
            case '⅟':
                    this.divideOneByfirstOperand();
                    break;
            case 'C':
                    this.reset();
                    break;
            case 'CE':
                    this.reset();
                    break;
            case '⌫':
                    this.back();
                    break;
            case '±':
                    this.changeMinus();
                    break;
            case '.':
                    this.handleDecimalDot('.');
                    break;
            case '=':
                    this.handleEquilButton();
                    break;
        }
    }

    // make top and bot screens display proper values

    checkWhatToDisplay() {
        if (this.toggle) {
            [this.topScreen, this.botScreen] = ['', this.firstOperand];
        } else {
            [this.topScreen, this.botScreen] = [`${this.firstOperand} ${this.operator}`, this.secondOperand];
        }
    }

    // find out: firstOperand or secondOperand operand is adding..

    setValue(value) {
        return this.toggle ? this.setFirstOperand(value) : this.setSecondOperand(value);
    }

    // Set value for firstOperand variable

    setFirstOperand(firstOperand) {
        if (this.firstOperand === '0') {
            this.firstOperand = firstOperand;
        } else if ( (this.removeComa(this.firstOperand)).length < 16 ) {
            this.firstOperand = this.firstOperand.concat(firstOperand);
        }
    }

    // Set value for secondOperand variable

    setSecondOperand(secondOperand) {
        const condition1 = this.secondOperand == '' || this.secondOperand == '0';
        const condition2 = (this.secondOperand === this.defaultOperand && this.clearDefaultOperand);

        if (condition1 || condition2) {
            [this.clearDefaultOperand, this.secondOperand] = [false, secondOperand];
        } else if ( this.removeComa(this.secondOperand).length < 16) {
            this.secondOperand = this.secondOperand.concat(secondOperand);
        }
    }

    // Set value for operator variable and check firstOperand

    setOperator(operator) {
        if (this.secondOperand && this.operator) {
          this.actionPlusChooseNextOperator(operator);
        } else {
            this.toggle = false;
        }
        [this.operator, this.defaultOperand] = [operator, this.firstOperand];
        [this.secondOperand , this.clearDefaultOperand] = [this.defaultOperand, true];
    }

    // check for proper action if both operands and operator were chosen

    handleEquilButton() {
        if (this.operator && this.secondOperand) {
            this.makeSomeMath(this.operator);
        }
    }

    // remove comas from a string

    removeComa(operand) {
        return operand.replace(/,/g, '');
    }

    // add coma each 3 symbol, minus and dot will be handled properly

    addComa(operand) {
        let includesDot = operand.endsWith('.');

        if (operand.includes('Infinity')) {
            return operand;
        }
        // Number() removes dot, need to recheck
        operand = Number(this.removeComa(operand)).toLocaleString('En-us', { maximumFractionDigits: 17 });
        return includesDot ? operand.concat('.') : operand;
    }

    // check for proper dot--'.' usage..

    handleDecimalDot(dot) {
        let floatNumber = this.toggle ? this.firstOperand : this.secondOperand;

        if ( !floatNumber.includes('.') ) {
            floatNumber = floatNumber.concat(dot);
        }
    }

    makeSomeMath(value) {
        switch(this.operator) {
            case '+':
                    this.add();
                    break;
            case '✕':
                    this.multiple();
                    break;
            case '–':
                    this.minus();
                    break;
            case '÷':
                    this.divide();
                    break;
            case '%':
                    this.module();
                    break;
        }
        [this.secondOperand, this.operator , this.toggle] = ['', '', true];
    }

    /*
    * start makeSomeMath() when both operands and operator is present
    * and choose clicked operator for next action
    */

    actionPlusChooseNextOperator(operator) {
        this.makeSomeMath(operator);
        this.toggle = false;
    }

    // remove commas and change data type to Number

    prepareForMath(operand) {
        return Number(this.removeComa(operand));
    }

    // arithmetic operations to be done with makeSomeMath() execution

    add() {
        this.firstOperand = ( this.prepareForMath(this.firstOperand) + this.prepareForMath(this.secondOperand) ).toString();
    }

    multiple() {
        this.firstOperand = ( this.prepareForMath(this.firstOperand) * this.prepareForMath(this.secondOperand) ).toString();
    }

    minus() {
        this.firstOperand =  ( this.prepareForMath(this.firstOperand) - this.prepareForMath(this.secondOperand) ).toString();
    }

    divide() {
        this.firstOperand = ( this.prepareForMath(this.firstOperand) / this.prepareForMath(this.secondOperand) ).toString();
    }

    module() {
        this.firstOperand = ( this.prepareForMath(this.firstOperand) % this.prepareForMath(this.secondOperand) ).toString();
    }

    // clear calculator operands and operator

    reset() {
        [this.firstOperand, this.secondOperand, this.operator , this.toggle] = ['0', '', '', true];
    }

    // clear last symbol of a current operand

    back() {
       let obj = this.toggle ? this.firstOperand : this.secondOperand;
       obj = obj.length === 1 ? '0' : obj.slice(0, -1);
    }

    // Change minus to plus and Vice Versa

    changeMinus() {
        let operand = this.toggle ? this.firstOperand : this.secondOperand;
        operand = (this.prepareForMath(operand) * (-1)).toString();
    }

    // bring to power a number

    bringToPower() {
        if (this.toggle) {
            this.firstOperand = ( Math.pow(this.prepareForMath(this.firstOperand), 2) ).toString();
        }
    }

    // Divide 1 by firstOperand

    divideOneByfirstOperand() {
        if (this.toggle) {
            this.firstOperand = ( 1 / this.prepareForMath(this.firstOperand)).toString();
        }
    }

    // get square root of a Number

    getSquareRoot() {
        if (this.toggle) {
            this.firstOperand = ( Math.pow(this.prepareForMath(this.firstOperand), 0.5) ).toString();
        }
    }
}
