document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Demo Spline Chart'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Video games sold'
            }
        },
        series: [{
            name: 'Sales',
            data: [20, 10, 50, 90, 60, 80, 50, 70, 30, 20, 40, 110]
        }]
    });
});