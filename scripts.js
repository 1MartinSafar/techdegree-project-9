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

/* ======================================================================
                        TRAFFIC LINE CHART
========================================================================= */

var canvas_traffic = document.querySelector("#traffic");
var traffic = new Chart(canvas_traffic, {
  type: 'line',
  data: {
    // labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    // labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
    datasets: [{
      label: 'traffic',
      // backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      // borderJoinStyle: "round",
      // cubicInterpolationMode: false,
      lineTension: 0,
      // borderCapStyle: "square",
      // borderJoinStyle:
      // showLine: false,
      pointRadius: 7.5,
      pointBorderWidth: 2.5,
      pointBackgroundColor: "white",
      pointBorderColor: "#615fd0",
      borderColor: "rgba(97, 95, 208, 0.6)",
      backgroundColor: "rgba(97, 95, 208, 0.2)",
      // THESE ARE THE POINTS
      // data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
      data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
    //   data: [{
    //     x: 1,
    //     y: 500
    // }, {
    //     x: 2,
    //     y: 1000
    // }, {
    //     x: 3,
    //     y: 750
    // }]
    //   data: {
    //     [1 500]
    //   }
    }]
  },
  options: {
    tooltips: {
      //
    },
    legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        },
    title: {
        display: true,
        text: 'TRAFFIC',
        fontSize: 16,
        // xPadding: 10,
        // yPadding: 10
      },
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          labelOffset: 0,
          // min: 0,
          max: 2500,
          // stepSize: 500
          // min: 0
          beginAtZero:true
          // stepSize: 500

          // suggestedMin: 500,
          // suggestedMax: 2500,

          // scaleSteps: 500
          // scaleStepWidth : 500,
          // scaleStartValue : 500
        },
        // stacked: true,
      }],
      xAxes: [{
        type: 'category',
        labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
        stepSize: 0.5,
        ticks: {
          labelOffset: -50,
          // min: 0,
          // max: 2500,
          // stepSize: 500
          // min: 0
          // beginAtZero:true
          // stepSize: 500

          // suggestedMin: 500,
          // suggestedMax: 2500,

          // scaleSteps: 500
          // scaleStepWidth : 500,
          // scaleStartValue : 500
        },
        // stacked: true,
      }]
    }
  }
});

/* ======================================================================
                        DAILY BAR CHART
========================================================================= */

var canvas_daily = document.querySelector("#daily");
var daily = new Chart(canvas_daily, {
  type: 'bar',
  // barPercentage: '0.4',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    // barPercentage: 0.5,
    // barThickness: 1,
    datasets: [{
      // label: 'daily',
      backgroundColor: '#615fd0',


      // borderColor: 'rgb(255, 99, 132)',
      // borderJoinStyle: "round",
      // cubicInterpolationMode: false,
      // lineTension: 0,
      // borderCapStyle: "square",
      // borderJoinStyle:
      // showLine: false,
      // pointRadius: 7.5,
      // pointBorderWidth: 2.5,
      // pointBackgroundColor: "white",
      // pointBorderColor: "#615fd0",
      // borderColor: "rgba(97, 95, 208, 0.6)",
      // backgroundColor: "rgba(97, 95, 208, 0.2)",
      // THESE ARE THE POINTS
      // data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
      data: [50, 75, 150, 100, 200, 175, 125],
    }]
  },
  options: {
    tooltips: {
      // cornerRadius: 10
      title: {
        // xPadding: 40
      }
    },
    legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        },
    title: {
        display: true,
        text: 'DAILY TRAFFIC',
        fontSize: 16
      },
    maintainAspectRatio: false,
    layout: {
            padding: {
                // left: 50,
                // right: 80,
                // top: 0,
                // bottom: 0
            }
        },
    // barThickness: 20,
    // barPercentage: 0.5,
    // barThickness: 1,
    scales: {
      yAxes: [{
        ticks: {
          // labelOffset: 0,
          // min: 0,
          max: 250,
          // stepSize: 500
          // min: 0
          beginAtZero:true
          // stepSize: 500

          // suggestedMin: 500,
          // suggestedMax: 2500,

          // scaleSteps: 500
          // scaleStepWidth : 500,
          // scaleStartValue : 500
        },
        // stacked: true,
      }],
      xAxes: [{
        barPercentage: 0.65,
        // type: 'category',
        // labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
        // stepSize: 0.5,
        ticks: {
          // labelOffset: -50,
          // min: 0,
          // max: 2500,
          // stepSize: 500
          // min: 0
          // beginAtZero:true
          // stepSize: 500

          // suggestedMin: 500,
          // suggestedMax: 2500,

          // scaleSteps: 500
          // scaleStepWidth : 500,
          // scaleStartValue : 500
        },
        // stacked: true,
      }]
    }
  }
});

/* ======================================================================
                        MOBILE DONUT CHART
========================================================================= */

var canvas_mobile = document.querySelector("#mobile");
var mobile = new Chart(canvas_mobile, {
  type: 'doughnut',
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [{
      backgroundColor: ["#615fd0", "#3cba9f", "#3e95cd"],
      data: [70, 20, 10]
      // label: 'mobile users',
      // backgroundColor: 'rgb(255, 99, 132)',
      // borderColor: 'rgb(255, 99, 132)',
      // borderJoinStyle: "round",
      // cubicInterpolationMode: false,
      // lineTension: 0,
      // borderCapStyle: "square",
      // borderJoinStyle:
      // showLine: false,
      // pointRadius: 7.5,
      // pointBorderWidth: 2.5,
      // pointBackgroundColor: "white",
      // pointBorderColor: "#615fd0",
      // borderColor: "rgba(97, 95, 208, 0.6)",
      // backgroundColor: "rgba(97, 95, 208, 0.2)",
      // THESE ARE THE POINTS
      // data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
      // data: [50, 125, 150, 100, 200, 175, 125],
    }]
  },
  options: {
    responsive: true,
    // legend: {
    //         display: false,
    //         labels: {
    //             fontColor: 'rgb(255, 99, 132)'
    //         }
    //     },
    legend: {
        display: true,
        position: "right",
        labels: {
            // fontColor: "#333",
            fontSize: 16
        }
    },
    title: {
        display: true,
        text: 'MOBILE USERS',
        fontSize: 16
        // position: 'left'
      },
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          // labelOffset: 0,
          // min: 0,
          // max: 250,
          // stepSize: 500
          // min: 0
          // beginAtZero:true
          // stepSize: 500

          // suggestedMin: 500,
          // suggestedMax: 2500,

          // scaleSteps: 500
          // scaleStepWidth : 500,
          // scaleStartValue : 500
        },
        // stacked: true,
      }],
      xAxes: [{
        // type: 'category',
        // labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
        // stepSize: 0.5,
        display: false,
        ticks: {
          // labelOffset: -50,
          // min: 0,
          // max: 2500,
          // stepSize: 500
          // min: 0
          // beginAtZero:true
          // stepSize: 500

          // suggestedMin: 500,
          // suggestedMax: 2500,

          // scaleSteps: 500
          // scaleStepWidth : 500,
          // scaleStartValue : 500
        },
        // stacked: true,
      }]
    }
  }
});















//
