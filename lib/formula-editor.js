import '../jquery/jquery.min.js'
import {defaultConfig} from './config/default.js';
import './modules/mathquill.min.js';
import './formula-editor.css'


export class FormulaEditor {
    constructor(el, config) {
        this.MQ = MathQuill.getInterface(2);
        this.mathField = document.createElement('span');
        if (!el) {
            throw new Error('Element is not defined');
        }

        if (!config) {
            console.log('Config is not defined. Using default config');
            config = defaultConfig;
        } else {
            config = {...defaultConfig, ...config};
        }

        this.initInput(el);
        this.initHard(el, config);
        this.initBody(el, config)
    }

    initInput(el) {
        let mathFieldContent = document.createElement('div');
        mathFieldContent.className = "formula-editor"
        this.mathField.id = 'formula-editor__math-field';
        mathFieldContent.appendChild(this.mathField);

        this.mathField = this.MQ.MathField(this.mathField, {
            spaceBehavesLikeTab: true,
            maxDepth: 1,
            leftRightIntoCmdGoes: 'up',
            restrictMismatchedBrackets: true,
            sumStartsWithNEquals: true,
            supSubsRequireOperand: true,
            autoSubscriptNumerals: true,
            handlers: {
                edit: () => {

                }
            }
        });

        el.appendChild(mathFieldContent)
    }

    createButton(buttonData, config) {
        let hardButton = document.createElement('button');
        hardButton.className = 'formula-editor__buttons__button';
        hardButton.style.cssText = `color: ${config.color};stroke:${config.color}`

        hardButton.onclick = () => {
            if (buttonData.cmd || (buttonData.action.startsWith('\\') && !buttonData.action.includes("{}"))) {
                this.mathField.cmd(buttonData.action).focus();
            } else {
                this.mathField.write(buttonData.action).focus();
            }
        }

        switch (buttonData.labelType) {
            case 'text':
                let span = document.createElement('div');
                span.className = 'formula-editor__buttons__button__label';
                span.innerText = buttonData.label;
                hardButton.appendChild(span);
                break;
            case 'laTeX':
                let latex = document.createElement('div');
                latex.className = 'formula-editor__buttons__button__label';
                hardButton.appendChild(latex);
                FormulaEditor.staticMath(latex,buttonData.label)
                break;
            case 'svg':
                hardButton.innerHTML = buttonData.label;
                break;
            case 'html':
                hardButton.innerHTML = buttonData.label;
                break;
        }
        return hardButton;
    }

    initHard(el, config) {
        let hard = document.createElement('div');
        hard.className = 'formula-editor__hard';

        for (let headData of config.head) {
            let hardButtons = document.createElement('div');
            hardButtons.className = 'formula-editor__buttons';

            for (let buttonData of headData.actions) {
                hardButtons.appendChild(this.createButton(buttonData, {color: headData.color}));
            }

            hard.appendChild(hardButtons);
        }

        el.appendChild(hard);
    }

    initBody(el, config) {
        let body = document.createElement('div');
        body.className = 'formula-editor__body';
        el.appendChild(body);

        for (let bodyButtonsData of config.body) {
            let bodyButtons = document.createElement('div');
            bodyButtons.className = 'formula-editor__buttons formula-editor__body__buttons';
            body.appendChild(bodyButtons);

            for (let buttonData of bodyButtonsData.actions) {
                bodyButtons.appendChild(this.createButton(buttonData, {color: bodyButtonsData.color}))
            }

        }
    }

    latex(val) {
        if (val) {
            return this.mathField.latex(val);
        }

        return this.mathField.latex();
    }

    el() {
        return this.mathField.el();
    }

    focus() {
        return this.mathField.focus();
    }

    blur() {
        return this.mathField.focus();
    }

    revert() {
        return this.mathField.revert();
    }

    reflow() {
        return this.mathField.reflow();
    }

    setMathConfig(config) {
        this.MQ.config(config);
    }

    static staticMath(el, laTeX) {
        el.innerText = laTeX;
        MathQuill.getInterface(2).StaticMath(el);
    }
}

