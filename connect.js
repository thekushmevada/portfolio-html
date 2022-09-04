const f_name = document.getElementById("name");
const f_email = document.getElementById("email");
const f_phoneNo = document.getElementById("phone");
const f_msg = document.getElementById("Message");

const f_btnSend = document.getElementById("send");

const database = firebase.database();

f_btnSend.addEventListener('click', (e)=>{
    e.preventDefault();
    database.ref('/users' + id.value).set({
        full_name: f_name.value,
        email_address: f_email.value,
        phone_number: f_phoneNo.value,
        given_msg: f_msg.value
    });
});