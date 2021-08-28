import BaseComponent from "../BaseComponent";

export default class InputWrapper extends BaseComponent {
    
    render () {
        let $container = document.createElement('div');
        $container.classList.add('form-group');

        let $input = document.createElement('input');
        $input.classList.add('form-control');

        let $error = documnet.createElement('div');
        $error.classList.add('text-danger');

        $container.append($input, $error);
        return $container;
    }
}