import BaseComponent from "./BaseComponent.js";

export default class Navbar extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = {
            links: [
                { name: 'Home', href: './home.html' },
                { name: 'About', href: './about.html' },
                { name: 'Contact', href: './contact.html' },
                { name: 'Forum', href: './forum.html' },
                { name: 'Help', href: './help.html' },
                { name: 'Sign In', href: './sign-in.html' },
                { name: 'Sign Up', href: './sign-up.html' }
            ]
        };
    }

    render() {
        let $container = document.createElement('nav');
        $container.classList.add('navbar');

        let $brand = document.createElement('a');
        $brand.href = "#";
        $brand.classList.add('navbar-brand');
        $brand.innerHTML = 'App';

        let $nav = document.createElement('div');
        $nav.classList.add('navbar-nav');

        let $links = this.state.links.map((link) => {
            let $a = document.createElement('a');
            $a.classList.add('nav-link');
            $a.innerHTML = link.name;
            $a.href = link.href;
            return $a;
        });

        // console.log($links);
        // spread => cho mảng hoặc object
        $nav.append(...$links);

        // $ => lưu 1 DOM hoặc lưu nhiều DOM trong 1 mảng
        // let $links = [];
        // for (let link of this.state.links) {
        //     let $a = document.createElement('a');
        //     $a.classList.add('nav-link');
        //     $a.innerHTML = link.name;
        //     $a.href = link.href;

        //     $links.push($a);
        //     // $nav.append($a);
        // }

        $container.append($brand, $nav);

        return $container;
    }
}