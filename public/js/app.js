// $("h1").css("font-size", "200px")

const months= ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days= ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const date= new Date()
const day= date.getDay()
const dd= date.getDate()
const mm= date.getMonth()
const yyyy= date.getFullYear()

$(".date").text(days[day]+" "+dd+" "+months[mm]+" '"+yyyy%2000)





const url= "https://api.covid19india.org/data.json"
var myDate= []
var confirmed= []
var recovered= []
var deaths= []

fetch(url).then((response) =>{
    response.json().then((data) => {
            for(var i=1; i<data.cases_time_series.length; i++){
                myDate.push(data.cases_time_series[i]["date"])
                confirmed.push(data.cases_time_series[i]["dailyconfirmed"])
                recovered.push(data.cases_time_series[i]["dailyrecovered"])
                deaths.push(data.cases_time_series[i]["dailydeceased"])
            }          
    })
})
// console.log(confirmed)
var myChart1= document.getElementById("myChart1").getContext('2d')
var myChart2= document.getElementById("myChart2").getContext('2d')
var myChart3= document.getElementById("myChart3").getContext('2d')

var chart1 = new Chart(myChart1, {
    type: 'line',  //line, bar
    data: {
        labels: myDate,
        datasets: [
            {
                label: 'Confirmed Cases',
                data: confirmed,
                borderWidth: 1,
                pointBackgroundColor: '#000',
                borderColor: "#FFFF33",
                backgroundColor: '#FFFF3355',
            },
        ]
    },
    options:{}
})

var chart2 = new Chart(myChart2, {
    type: 'line',  //line, bar
    data: {
        labels: myDate,
        datasets: [
            {
                label: 'Recovered Cases',
                data: recovered,
                borderWidth: 1,
                pointBackgroundColor: '#000',
                borderColor: "#00FF00",
                backgroundColor: "#00FF0055",
                minBarLength: 100
            }
        ]
    },
    options:{}
})

var chart3 = new Chart(myChart3, {
    type: 'line',  //line, bar
    data: {
        labels: myDate,
        datasets: [
            {
                label: 'Deseased Cases',
                data: deaths,
                borderWidth: 1,
                pointBackgroundColor: '#000',
                borderColor: "#ff0000",
                backgroundColor: "#ff000055",
                minBarLength: 100
            }
        ]
    },
    options:{}
})
