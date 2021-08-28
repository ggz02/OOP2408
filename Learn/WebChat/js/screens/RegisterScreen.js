import BaseComponent from "../BaseComponent.js";

export default class RegisterScreen extends BaseComponent {

    render () {
        let $container = document.createElement('div');

        let $title = document.createElement ('h1');
        $title.innerHTML = "Create an account";

        $container.append($title);

        return $container;
    }
}