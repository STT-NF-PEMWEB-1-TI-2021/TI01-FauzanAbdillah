function validasi(e) {
  e.preventDefault();
  let val1 = document.getElementById("nama").value + document.getElementById("pass").value;
  let val2 = "ahmad2017" + "integrity";
  if (val1 == val2) {
    location.href = "2login31.html";
    alert("Anda Berhasil Masuk");
  } else {
    alert("Anda belum terdaftar!!\nSilakan masukkan user yang telah ditentukan");
  }
}
