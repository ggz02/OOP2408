class Person {
    constructor (hoTen, tuoi, gioiTinh, diaChi) {
    this.Hoten = hoTen;
    this.Tuoi = tuoi;
    this.Gioitinh = gioiTinh;
    this.Điachi = diaChi;
    }
}

const person1 = new Person ("Nguyễn Giang", "18", "Nữ", "Củ Chi");
console.log (person1);

let Submit=document.getElementById("submit");
Submit.addEventListener("click", (p) => {
    p.preventDefault();
    let hoten=document.getElementById("name").value;
    let diachi=document.getElementById("adress").value;
    let age = document.getElementById("age").value;
    console.log(hoten);
    console.log(diachi);
    console.log(age);
    let tuoi=Number(age);
    if (tuoi<18) {
        console.log ("Trẻ em");
    }
    else if (18 <= tuoi && tuoi< 65) {
        console.log("Người trưởng thành");
    }
    else {
        console.log("Người già");
    }
});