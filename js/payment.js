function tambahTransaksi() {
  const selectedServiceElement = document.getElementById("service");
  const selectedServiceIndex = selectedServiceElement.selectedIndex;
  const selectedService =
    selectedServiceElement.options[selectedServiceIndex].value;
  const selectedServicePrice = parseInt(
    selectedServiceElement.options[selectedServiceIndex].getAttribute(
      "data-price",
    ),
  );

  const weight = parseFloat(document.getElementById("berat").value);
  const totalCost = selectedServicePrice * weight;
  const today = new Date();
  const pickupDate = new Date(today);
  pickupDate.setDate(today.getDate() + 2);

  document.getElementById("resultCard").style.display = "block";
  document.getElementById("resultNamaPelanggan").textContent =
    document.getElementById("namaPelanggan").value;
  document.getElementById("resultBerat").textContent =
    document.getElementById("berat").value + " kg";
  document.getElementById("resultService").textContent = selectedService;
  document.getElementById("resultTotalCost").textContent =
    "Rp. " + totalCost.toLocaleString("id-ID");
  document.getElementById("resultNoTelepon").textContent =
    document.getElementById("noTelepon").value;
  document.getElementById("resultAlamat").textContent =
    document.getElementById("alamat").value;
  document.getElementById("resultMetodePembayaran").textContent =
    document.getElementById("metodePembayaran").value;
  document.getElementById("resultPickupDate").textContent =
    pickupDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const transactionData = {
    namaPelanggan: document.getElementById("namaPelanggan").value,
    berat: document.getElementById("berat").value,
    service: selectedService,
    totalCost: totalCost.toLocaleString("id-ID"),
    noTelepon: document.getElementById("noTelepon").value,
    alamat: document.getElementById("alamat").value,
    metodePembayaran: document.getElementById("metodePembayaran").value,
    pickupDate: pickupDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
  localStorage.setItem("transactionData", JSON.stringify(transactionData));
  alert("Payment Successful!");
}

function konfirmasiBatal() {
  const reason = prompt(
    "Are You Sure You Want To Cancel The Transaction? Please Enter The Reason For Cancellation:",
  );

  if (reason) {
    localStorage.removeItem("transactionData");
    document.getElementById("resultCard").style.display = "none";
    document.getElementById("transaksiForm").reset();
    alert("Transaction Canceled. Reason: " + reason);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const tail = document.querySelector(".neon-tail");

  document.addEventListener("mousemove", function (e) {
    const { clientX, clientY } = e;
    const explosion = document.createElement("div");
    explosion.classList.add("neon-explosion");
    explosion.style.left = `${clientX}px`;
    explosion.style.top = `${clientY}px`;
    document.body.appendChild(explosion);
    explosion.addEventListener("animationend", function () {
      explosion.remove();
    });
    tail.style.left = `${clientX}px`;
    tail.style.top = `${clientY}px`;
  });

  document.addEventListener("mouseenter", function () {
    tail.classList.add("active");
  });

  document.addEventListener("mouseleave", function () {
    tail.classList.remove("active");
  });
});
