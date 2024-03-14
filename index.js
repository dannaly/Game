if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "😎 ຜູ້ຫຼີ້ນທີ່1ຊະນະ";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " ຜູ້ຫຼີ້ນທີ່2ຊະນະ 😎"
}
else {
     document.querySelector("h1").innerHTML = "ສະເໝີ! 🤝";
}