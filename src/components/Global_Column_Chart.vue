<template>
  <div class="example">
    <apexcharts width="500" height="350" type="bar" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'User_Column_Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jnl', 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec']
        },
        color: '#FEB019'
      },
      series: [{
        name: 'series-1',
        data: [30, 90, 45, 50, 49, 60, 70, 91,56 , 35]
      }]
    }
  },
  methods: {
    //   updateChart() {
    //     const max = 90;
    //     const min = 20;
    //     const newData = this.series[0].data.map(() => {
    //       return Math.floor(Math.random() * (max - min + 1)) + min
    //     })

    //     const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']

    //     // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
    //     this.chartOptions = {
    //       colors: [colors[Math.floor(Math.random()*colors.length)]]
    //     };
    //     // In the same way, update the series option
    //     this.series = [{
    //       data: newData
    //     }]
    //   }
    },
}
</script>
