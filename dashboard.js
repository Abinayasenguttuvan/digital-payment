/* ===========================
   BAR CHART
=========================== */

const barCtx = document.getElementById("barChart").getContext("2d");

new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Transactions",
      data: [12000, 15000, 18000, 22000, 27000, 30000],
      backgroundColor: [
        "#00d9ff",
        "#00ffa6",
        "#ffdd57",
        "#ff7b72",
        "#a885ff",
        "#5affc8"
      ],
      borderRadius: 10
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: "#fff" } }
    },
    scales: {
      x: { ticks: { color: "#fff" } },
      y: { ticks: { color: "#fff" } }
    }
  }
});

/* ===========================
   PIE CHART
=========================== */

const pieCtx = document.getElementById("pieChart").getContext("2d");

new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: ["UPI", "Credit Card", "Debit Card", "Wallet", "Net Banking"],
    datasets: [{
      data: [45, 25, 15, 10, 5],
      backgroundColor: [
        "#00d9ff",
        "#ff7b72",
        "#ffd447",
        "#8a7cff",
        "#56ff9f"
      ]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#fff" }
      }
    }
  }
});
