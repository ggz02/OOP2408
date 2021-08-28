class Person {
    name;
    age;
    address;

    constructor (name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    isChild () {
        return age <18;
    }

    isAdult () {
        return age >= 18 && age < 65;
    }

    isOld () {
        return age >= 65;
    }
}

class Vaccine {
    name;
    brand;
    country;

    constructor(name, brand, country) {
        this.name = name;
        this.brand = brand;
        this.country = country;
    }
}

class Certificate {
    person;
    Vaccine;
    dateModified;

    /**
     * 
     * @param {Person} person
     * @param {Vaccine} vaccine
     * @param {String} dateModified
     */
    constructor(person, vaccine, dateModified) {
        this.person = person;
        this.vaccine = vaccine;
        this.dateModified = dateModified;
    }
}

// let people = [];
// let vaccines = [];
// let certificates = [];

// function stat1 () {

// }

// function stat2 () {

// }

// function stat3 () {

// }
// chức năng
class Hanlder {
    /**
     * Là 1 mảng chứa các đối tượng từ class Person
     */
    people = [];
    vaccines = [];
    certificate = [];

    createPerson(name, age, address){
        let p = new Person (name, age, address);
        this.people.push(p);
        return p;
    }

    createVaccine(name, brand, country) {
        let v = new Vaccine(name, brand, country);
        this.vaccines.push (v);
        return v;
    }

    createCertificate(person, vaccine) {
        let c = new Certificate(person, vaccine, new Date().toISOString());
        this.certificate.push(c);
        return c;
    }

    /**
     * Thống kê những người dân được tiêm ít nhất 1 liều vắc-xin
     */
    stat1 () {
        for(let certificate of this.certificate) {
            console.log("Họ và tên: " + certificate.person.name);
            console.log("Tuổi: " + certificate.person.age);
            console.log("Vắc xin đã tiêm: " + certificate.vaccine.name);
            console.log("Tiêm vào ngày: " + certificate.dateModified);
            console.log("----------------- ");

        }
    }

    /**
     * Thống kê những người già chưa được tiêm vắc-xin
     */
    stat2 () {
        //person chưa tiêm vaccine => k có certificate
        //người già: person.age >= 65

        //duyệt qua mảng people
        for (let person of this.people) {
            //check là người già
            if (!person.isOld()) continue;
            
            //check trong certificates
            let certificates = this.certificates.filter ((c) => {
                return c.person == person;
            });

            if (certificates.length == 0) {
                console.log('Họ và tên: ' + person.name);
                console.log('Tuổi: ' + person.age);
                console.log('Địa chỉ: ' + person.address);
                console.log("--------------------------------------");
            }

        }

    }

    /**
     * Tính tổng số liều vắc-xin đã tiêm
     */
    stat3 () {
        console.log("Số liều vaccine đã tiêm là: " + this.certificate.length + " liều");

    }
}

let handler = new Hanlder();

let p1 = handler.createPerson('Person 1', 20, 'HN');
let p2 = handler.createPerson('Person 2', 12, 'HY');
let p3 = handler.createPerson('Person 3', 70, 'BG');
let p4 = handler.createPerson('Person 4', 40, 'NA');
let p5 = handler.createPerson('Person 5', 18, 'TH');

let v1 = handler.createVaccine('Nano covax', 'Nanogen', 'VN');
let v2 = handler.createVaccine('Astra', 'AstraZeneca', 'US');
let v3 = handler.createVaccine('Moderna', 'Moderna', 'US');

let c1= handler.createCertificate(p1, v1);
let c2= handler.createCertificate(p1, v2);
let c3= handler.createCertificate(p2, v3);
let c4= handler.createCertificate(p4, v1);
let c5= handler.createCertificate(p3, v1);

console.log(handler);

// handler.stat3();
// handler.stat1();
handler.stat2();
