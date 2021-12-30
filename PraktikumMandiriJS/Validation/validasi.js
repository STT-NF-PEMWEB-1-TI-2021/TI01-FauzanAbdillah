function kirim() {
  let data1 = document.getElementById("name").value;
  let data2 = document.getElementById("email").value;
  let data3 = document.getElementById("jam").value;
  let data4 = document.getElementById("negara").value;
  let data5 = document.getElementById("tiket").value;

  let fullData = ["Nama Anda :" + data1, "<br>Email Anda :" + data2, "<br>Jam Keberangkatan Anda : " + data3, "\nKota Tujuan Anda : " + data4, "<br>Jumlah Tiket Anda : " + data5];
  document.getElementById("data").innerHTML = fullData;
}
