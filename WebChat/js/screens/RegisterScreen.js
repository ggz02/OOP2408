import BaseComponent from "../BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";

export default class RegisterScreen extends BaseComponent {

    render() {
        let $container = document.createElement('div');

        let $title = document.createElement('h2');
        $title.classList.add('text-center');
        $title.innerHTML = "Create an account";

        let _name = new InputWrapper({ 
            placeholder: 'Your name', 
            type: 'text', 
            error: '', 
            value: 'My name',
            onchange: (event) => {
                console.log(event.target.value);
            }
        });
        let _email = new InputWrapper({ placeholder: 'Email', type: 'email', error: '', value: 'example@gmail.com' });
        let _password = new InputWrapper({ placeholder: 'Password', type: 'password', error: '', value: '12345678' });
        let _confirmPassword = new InputWrapper({ placeholder: 'Confirm password', type: 'password', error: '', value: '12345678' });

        let $btn = document.createElement('button');
        $btn.classList.add('btn', 'btn-primary', 'btn-block');
        $btn.innerHTML = "Register";

        // HTMLElement || Node || HTML String
        $container.append(
            $title,
            _name.render(),
            _email.render(),
            _password.render(),
            _confirmPassword.render(),
            $btn
        );

        return $container;
    }
}