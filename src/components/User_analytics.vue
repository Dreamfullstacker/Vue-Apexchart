<template>
    <div class="row">
            <!-- Content goes here -->
            <h1 class="text-center py-5">User analytics</h1>
            <div class="row">
                <div class="col-md-6 col-sm-12 pr-5 py-5 item-center">
                    <p class="text-center font-weight-bold py-5">Your average call time</p>
                    <div class="d-flex align-items-center">
                        <select class="custom-select m-auto">
                            <option selected value="0">A Week(7days)</option>
                            <option value="1">A Month(31days)</option>
                            <option value="2">A Year(12 Months)</option>
                        </select>
                    </div>
                    <UserColumnChart />
                </div>
                <div class="col-md-6 col-sm-12 pl-5 py-5">
                    <p class="text-center py-5">Your Score</p>
                    <UserCandleChart />
                </div>
            </div>
    </div>
</template>

<script>
    import UserColumnChart from './User_Column_Chart.vue';
    import UserCandleChart from './User_Candle_Chart.vue';
    export default {
        
        data() {
            return{

            }
        },
        methods: {
        },
        components : {
          UserCandleChart,
          UserColumnChart
        }
    }
</script>