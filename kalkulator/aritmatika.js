function kalkulatorAritmatikaSn() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const n = parseInt(document.getElementById("n").value);

  if (isNaN(a) || isNaN(b) || isNaN(n)) {
    alert("Mohon isi semua input dengan benar.");
    return;
  }

  const sn = (n / 2) * (2 * a + (n - 1) * b);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Jumlah hingga suku ke-n (Sn): <strong>${sn}</strong></p>`;
  resultDiv.style.display = "block";
}

function kalkulatorAritmatikaA() {
  const n = parseFloat(document.getElementById("n").value);
  const b = parseFloat(document.getElementById("b").value);
  const un = parseInt(document.getElementById("un").value);

  if (isNaN(un) || isNaN(b) || isNaN(n)) {
    alert("Mohon isi semua input dengan benar.");
    return;
  }

  const a = un - (n - 1) * b;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Suku Pertama (a): <strong>${a}</strong></p>`;
  resultDiv.style.display = "block";
}

function kalkulatorAritmatikaB() {
  const Uses = parseFloat(document.getElementById("Uses").value);
  const Useb = parseFloat(document.getElementById("Useb").value);


  if (isNaN(Uses) || isNaN(Useb)) {
    alert("Mohon isi semua input dengan benar.");
    return;
  }

  const b = Uses - Useb;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Nilai bedanya adalah: <strong>${b}</strong></p>`;
  resultDiv.style.display = "block";
}

function kalkulatorAritmatikaUn() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const n = parseInt(document.getElementById("n").value);

  if (isNaN(a) || isNaN(b) || isNaN(n)) {
    alert("Mohon isi semua input dengan benar.");
    return;
  }

  const un = a + (n - 1) * b;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Nilai suku ke-n (Un) adalah: <strong>${un}</strong></p>`;
  resultDiv.style.display = "block";
}

function kalkulatorGeometriA() {
  const an = parseFloat(document.getElementById("an").value);
  const r = parseFloat(document.getElementById("r").value);
  const n = parseFloat(document.getElementById("n").value);

  if (isNaN(an) || isNaN(r) || isNaN(n)) {
    alert("Mohon isi semua input dengan benar.");
    return;
  }

  const a2 = an/r**(n-1);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Suku Pertama (a): adalah <strong>${a2}</strong></p>`;
  resultDiv.style.display = "block";
}

function kalkulatorGeometriB() {
  const Uses = parseFloat(document.getElementById("Uses").value);
  const Useb = parseFloat(document.getElementById("Useb").value);


  if (isNaN(Uses) || isNaN(Useb)) {
    alert("Mohon isi semua input dengan benar.");
    return;
  }

  const r = Uses / Useb;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Nilai rasionya adalah: <strong>${r}</strong></p>`;
  resultDiv.style.display = "block";
}

function kalkulatorGeometriUn() {
  const a = parseFloat(document.getElementById("a").value);
  const r = parseFloat(document.getElementById("r").value);
  const n = parseInt(document.getElementById("n").value);

  if (isNaN(a) || isNaN(r) || isNaN(n)) {
    alert("Mohon isi semua input dengan benar.");
    return;
  }

  const un = a * r ** (n-1);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Nilai suku ke-n (Un) adalah: <strong>${un}</strong></p>`;
  resultDiv.style.display = "block";
}

function kalkulatorGeometriSn() {
  const a = parseFloat(document.getElementById("a").value);
  const r = parseFloat(document.getElementById("r").value);
  const n = parseInt(document.getElementById("n").value);

  if (isNaN(a) || isNaN(r) || isNaN(n)) {
    alert("Mohon isi semua input dengan benar.");
    return;
  }


  let sn;
  if (r === 1) {
      sn = a * n;
  } else if (r < 1) {
      sn = (a * (1 - (r ** n))) / (1 - r);
  } else {
      sn = (a * ((r ** n) - 1)) / (r - 1);
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Jumlah hingga suku ke-n (Sn): <strong>${sn}</strong></p>`;
  resultDiv.style.display = "block";
}

function kalkulatorInfinityA() {
  const Sn = parseFloat(document.getElementById("Sn").value);
  const r = parseFloat(document.getElementById("r").value);

  if (isNaN(Sn) || isNaN(r)) {
    alert("Mohon isi semua input dengan benar.");
    return;
  }

  const a2 = Sn * (1-r);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Suku Pertama (a): adalah <strong>${a2}</strong></p>`;
  resultDiv.style.display = "block";
} {
  const an = parseFloat(document.getElementById("an").value);
  const r = parseFloat(document.getElementById("r").value);
  const n = parseFloat(document.getElementById("n").value);

  if (isNaN(an) || isNaN(r) || isNaN(n)) {
    alert("Mohon isi semua input dengan benar.");
    return;
  }

  const a2 = an/r**(n-1);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Suku Pertama (a): adalah <strong>${a2}</strong></p>`;
  resultDiv.style.display = "block";
}

function kalkulatorInfinityB() {
  const Sn = parseFloat(document.getElementById("Sn").value);
  const a = parseFloat(document.getElementById("a").value);


  if (isNaN(Sn) || isNaN(a)) {
    alert("Mohon isi semua input dengan benar.");
    return;
  }

  const r = (Sn - a) / Sn;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Nilai rasionya adalah: <strong>${r}</strong></p>`;
  resultDiv.style.display = "block";
}
