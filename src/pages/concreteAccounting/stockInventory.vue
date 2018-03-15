<template>
    <div>
    <group >
      <selector v-model="selectValue" title="生产线：" name="district" :options="list" @on-change="onChange"></selector>
    </group>
    <div style="position:relative;margin-top:5px;">
    <yl-echarts :options="options" ref="chartref" auto-resize>
    </yl-echarts>
    </div>
    </div>
</template>  
<script>
import "v-charts/lib/style.css";
import { Selector, Group } from "vux";
import api from "api/procCommand";
import { mapGetters } from "vuex";
import ECharts from "components/chart";
import "echarts/theme/dark";
import theme from "components/chart/theme.json";
ECharts.registerTheme("ovilia-green", theme);

export default {
  components: {
    "yl-echarts": ECharts,
    Selector,
    Group
  },
  data() {
    return {
      dataModel: [],
      selectValue: "",
      list: [{ key: "Z1", value: "Z1" }, { key: "Z2", value: "Z2" }],
      options: {
        tooltip: {},
        legend: {
          data: ["当前库存", "最低库存量", "最高库存量"]
        },
        xAxis: {
          data: [],
          axisTick: { show: true },
          axisLine: { show: true },
          axisLabel: {
            interval: 0,
            rotate: 40
          }
        },
        yAxis: {
          max: 200,
          min: 0,
          offset: 0,
          splitLine: { show: false }
        },
        grid: {
          top: "23%",
          containLabel: true,
          left: 10,
          right: 10
        },
        markLine: {
          z: -100
        },
        series: [
          {
            name: "当前库存",
            type: "pictorialBar",
            symbolClip: true,
            label: {},
            data: [],
            markLine: {},
            z: 10
          },
          {
            name: "满仓",
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#ccc"
              }
            },
            data: []
          },
          {
            name: "最低库存量",
            type: "line",
            data: [],
            z: 100
          },
          {
            name: "最高库存量",
            type: "line",
            data: [],
            z: 100
          }
        ]
      },
      orderModel: {
        firstKeys: "OrgId",
        firstValues: "",
        procName: "Pr_CommonExecuteSql",
        procType: 0,
        secondKeys: "LWMonitoring",
        secondOperates: "",
        secondValues: ""
      }
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    onChange(val) {
      this.afterLoad(val);
    },
    afterLoad(option) {
      let _this = this;
      _this.options.series[0].label = {};
      _this.options.series[0].markLine = {};
      _this.options.xAxis.data = [];
      _this.options.series[0].data = [];
      _this.options.series[1].data = [];
      _this.options.series[2].data = [];
      _this.options.series[3].data = [];
      _this.options.yAxis.max = 200;
      var symbols = ["image://static/back.svg", "image://static/front.svg"];
      var labelSetting = {
        normal: {
          show: true,
          position: "outside",
          offset: [0, -50],
          formatter: function(param) {
            return param.value;
          },
          textStyle: {
            fontSize: 12,
            fontFamily: "Arial"
          }
        }
      };
      var markLineSetting = {
        symbol: "none",
        lineStyle: {
          normal: {
            opacity: 0.3
          }
        },
        data: []
      };
      _this.options.series[0].label = labelSetting;
      _this.options.series[0].markLine = markLineSetting;
      var maxNum = 0;
      _this.dataModel.map(function(data) {
        if (data.v_Col6 == option) {
          if (data.d_Col21 > maxNum) {
            maxNum = data.d_Col21;
          }
          _this.options.xAxis.data.push(
            "[" + data.v_Col6 + "]-" + data.v_Col10
          );
          _this.options.series[0].data.push({
            value: data.d_Col20,
            symbol: symbols[1],
            symbolBoundingData: data.d_Col21
          });
          _this.options.series[1].data.push({
            value: data.d_Col21,
            symbol: symbols[0],
            symbolBoundingData: data.d_Col21
          });
          _this.options.series[2].data.push(data.d_Col22);
          _this.options.series[3].data.push(data.d_Col23);
        }
      });
      _this.options.yAxis.max = maxNum;
    },
    _initEchart() {
      var _this = this;
      _this.dataModel = [];
      let pars = _this.orderModel;
      api.requestProcCommand(pars).then(
        data => {
          if (data.success) {
            if (data.result.resultType === 0) {
              _this.dataModel = data.result.items[0];
              if (_this.options.series[0].data.length === 0) {
                _this.afterLoad(_this.selectValue);
              }
            }
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  created() {
    this.selectValue = "Z1";
    this.orderModel.firstValues = "$" + this.userInfo.user.manageOrgId + "$";
    this._initEchart();
  },
  mounted() {}
};
</script> 

<style scoped>
.echarts {
  width: auto;
  height: 450px;
}
</style>