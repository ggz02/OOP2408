//$<tên> => trỏ vào 1 HTMLElement
//phân biệt biến nào trỏ vào thẻ, biến nào là kiểu khác
// naming convention
let $answers = document.getElementById ('answers');
let $no = document.getElementById('no');

// //thêm 1 function để xử lý sự kiện
let count = 0;
$no.addEventListener ('mouseover', function() {
    $answers.classList.toggle ('reverse');
    count++;
    if (count > 5) {
        alert ("Đồng ý rồi nhé, không phải chọn nữa");
        $answers.remove ();
    }
});

// $no.addEventListener ('mouseover', function() {
//     console.log ("Goodbye");
// });

// $no.addEventListener('mouseover', function () {
//     console.log ("See you again");
// });

// $no.onmouseover = function () {
//     console.log ('Hello');
// }

// $no.onmouseover = function () {
//     console.log ('Good bye');
// }

// $no.onmouseover = function () {
//     console.log ('See you again');
// }
