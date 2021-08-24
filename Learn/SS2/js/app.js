import Navbar from "./Navbar.js";

let $app = document.getElementById('app');

let _navbar = new Navbar();

$app.append(_navbar.render());

// $ => biến lưu DOM
// _ => biến để lưu component