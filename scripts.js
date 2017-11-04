/* ======================================================================
                        SCRIPTS
========================================================================= */

// Hide the Alert Notification on click
const alert = document.querySelector(".alert");
const alert_close = document.querySelector(".alert-close");
const send = document.querySelector("#send");
const bell = document.querySelector("#bell-container");

// console.log(alert);
// console.log(alert_close);
// console.log(send);

alert_close.addEventListener("click", function() {
  alert.style.display = "none";
});

send.addEventListener("click", function(event) {
  event.preventDefault();
  const user = document.querySelector("#userSearch").value;
  const message = document.querySelector("#message-area").value;
  // console.log(user);
  // console.log(message);
  if (user === "") {
    // console.log(user);
    window.alert("ERROR! User isn't selected!");
  }
  else if (message === "") {
    // console.log(message);
    window.alert("ERROR! Message field is empty!");
  }
  else {
    // console.log("SUBMITTED!");
    window.alert("Success! Your message has been sent!");
  }
});

bell.addEventListener("click", function() {
  window.alert("New members have joined! Check them out in the >Members< tab");
  window.alert("New features have been added to the >Settings< tab");
});

/* ======================================================================
                        SAVING SETTINGS
========================================================================= */

let settings1 = document.querySelector("#myonoffswitch1");
let settings2 = document.querySelector("#myonoffswitch2");
let timezone = document.querySelector("#timezone");

// console.log(settings1);
// console.log(settings2);
// console.log("SETTINGS1 CHECKED IS CURRENTLY: ");
// console.log(settings1.checked);
// console.log("SETTINGS2 CHECKED IS CURRENTLY: ");
// console.log(settings2.checked);

if (sessionStorage.getItem('onoff1') !== null) {
  if (sessionStorage.getItem('onoff1') === "true") {
    // console.log(">>>>> TRUE");
    settings1.checked = true;
  } else {
    // console.log(">>>>> FALSE");
    settings1.checked = false;
  }
} else {
  // console.log(">>>>> NULL");
}

if (sessionStorage.getItem('onoff2') !== null) {
  if (sessionStorage.getItem('onoff2') === "true") {
    // console.log(">>>>> TRUE");
    settings2.checked = true;
  } else {
    // console.log(">>>>> FALSE");
    settings2.checked = false;
  }
} else {
  // console.log(">>>>> NULL");
}

settings1.addEventListener("click", function() {
  let current1 = settings1.checked;
  sessionStorage.setItem('onoff1', current1);
});

settings2.addEventListener("click", function() {
  let current2 = settings2.checked;
  sessionStorage.setItem('onoff2', current2);
});

if (sessionStorage.getItem('selected')) {
  $('#timezone').val(sessionStorage.getItem('selected'));
}

timezone.addEventListener("click", function() {
  sessionStorage.setItem('selected', this.value);
});

/* ======================================================================
                        CHARTS
========================================================================= */

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
// let canvas_hourly = document.querySelector("#hourly");
// let canvas_daily = document.querySelector("#daily");
// let canvas_weekly = document.querySelector("#weekly");
// let canvas_monthly = document.querySelector("#monthly");
//
// console.log(canvas_hourly);
//
// canvas_hourly.style.display = "none";
// canvas_daily.style.display = "none";
// canvas_weekly.style.display = "none";
// canvas_monthly.style.display = "none";

let canvas_hourly = document.querySelector("#hourly");
let hourly = new Chart(canvas_hourly, {
  type: 'line',
  data: {
    // labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    // labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
    datasets: [{
      label: 'Hourly',
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
  }]
  },
  options: {
    tooltips: {
      //
    },
    legend: {
            // display: false,
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

let canvas_daily = document.querySelector("#daily");
let daily = new Chart(canvas_daily, {
  type: 'line',
  data: {
    // labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    // labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
    datasets: [{
      label: 'Daily',
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
  }]
  },
  options: {
    tooltips: {
      //
    },
    legend: {
            // display: false,
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

let canvas_weekly = document.querySelector("#weekly");
let weekly = new Chart(canvas_weekly, {
  type: 'line',
  data: {
    // labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    // labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
    datasets: [{
      label: 'Weekly',
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
  }]
  },
  options: {
    tooltips: {
      //
    },
    legend: {
            // display: false,
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

let canvas_monthly = document.querySelector("#monthly");
let monthly = new Chart(canvas_monthly, {
  type: 'line',
  data: {
    // labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    // labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
    datasets: [{
      label: 'Monthly',
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
  }]
  },
  options: {
    tooltips: {
      //
    },
    legend: {
            // display: false,
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

// >>>>> SHOWING AND HIDING TRAFFIC CHARTS
canvas_hourly.style.display = "block";
canvas_daily.style.display = "none";
canvas_weekly.style.display = "none";
canvas_monthly.style.display = "none";

let canvas_container = document.querySelector(".traffic-container");
let charts_names = document.querySelector(".charts");
let charts = document.querySelectorAll(".charts h3");


charts_names.addEventListener('click', function(event) {
  let clicked = event.target
  // console.log(clicked);
  // console.log(clicked.tagName);
  if (clicked.tagName === "H3") {

    for (let i = 0; i < charts.length; i++) {
      if (charts[i] === clicked) {
        clicked.style.color = "white";
        clicked.style.backgroundColor = "#48d979";
      }
      else {
        charts[i].style.color = "black";
        charts[i].style.backgroundColor = "white";
      }
    }

  }
});

canvas_container.addEventListener('click', function() {
  // if (this.tagName === "h3") {
  //   this.style.color = "white";
  //   this.style.backgroundColor = "#48d979";
  // }
});

// .charts h3:hover {
//   color: white;
//   background-color: #48d979;
// }

/* ======================================================================
                        DAILY BAR CHART
========================================================================= */

var canvas_daily_bar = document.querySelector("#daily_bar");
var daily_bar = new Chart(canvas_daily_bar, {
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
