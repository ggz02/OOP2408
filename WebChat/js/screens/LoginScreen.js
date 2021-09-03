import BaseComponent from "../BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";

import { validateEmail } from "../utils.js";

export default class LoginScreen extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            // lưu dữ liệu người dùng nhập vào
            data: {
                email: '',
                password: '',
            },

            // lưu thông tin về lỗi của các truờng thông tin
            errors: {
                email: '',
                password: '',
            }
        };
    }

    /**
     * Xử lý sự kiện onchange của ô input
     */
    handleInputChange = (fieldName, fieldValue) => {
        // console.log(fieldName + ' = ' + fieldValue);
        let tmpState = this.state;
        tmpState.data[fieldName] = fieldValue.trim();
        this.setState(tmpState);
    }

    render() {
        let $container = document.createElement('div');

        let $title = document.createElement('h2');
        $title.classList.add('text-center');
        $title.innerHTML = "Sign in to your account";

        let _email = new InputWrapper({
            placeholder: 'Email',
            type: 'email',
            error: this.state.errors.email,
            value: this.state.data.email,
            onchange: (event) => {
                this.handleInputChange('email', event.target.value);
            }
        });

        let _password = new InputWrapper({
            placeholder: 'Password',
            type: 'password',
            error: this.state.errors.password,
            value: this.state.data.password,
            onchange: (event) => {
                this.handleInputChange('password', event.target.value);
            }
        });

        let $btn = document.createElement('button');
        $btn.classList.add('btn', 'btn-primary', 'btn-block');
        $btn.innerHTML = "Login";

        let $form = document.createElement('form');
        $form.onsubmit = this.handleLogin;
        $form.append(
            _email.render(),
            _password.render(),
            $btn
        );

        // HTMLElement || Node || HTML String
        $container.append(
            $title,
            $form
        );

        return $container;
    }

    handleLogin = (event) => {
        event.preventDefault(); // chặn chuyển hướng đến action

        let data = this.state.data;
        let errorString = '';

        if (data.email == '' || !validateEmail(data.email)) {
            errorString += 'Invalid email\n';
        }

        if (data.password == '') {
            errorString += 'Invalid password\n';
        }

        alert(errorString);

    }
}