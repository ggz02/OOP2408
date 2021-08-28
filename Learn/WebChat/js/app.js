// resuable component
// tạo 1 component
// + dùng đi dùng lại
// + xử lý độc lập

import RegisterScreen from "./screens/RegisterScreen.js"

let $app = document.getElementById('app');
$app.append((new RegisterScreen()).render());