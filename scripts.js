// Hide the Alert Notification on click

const alert = document.querySelector(".alert");
const alert_close = document.querySelector(".alert-close");

console.log(alert);
console.log(alert_close);

alert_close.addEventListener("click", function() {
  alert.style.display = "none";
});

// SAMPLE

// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

// TRAFFIC Chart

var ctx = document.querySelector("#traffic");
var traffic = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      label: 'traffic',
      // backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      // borderJoinStyle: "round",
      // cubicInterpolationMode: false,
      // THESE ARE THE POINTS
      data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
    }]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero:true
          // stepSize: 500

          // suggestedMin: 500,
          // suggestedMax: 2500,

          // scaleSteps: 500
          // scaleStepWidth : 500,
          // scaleStartValue : 500
        }
      }]
    }
  }
});






















//
