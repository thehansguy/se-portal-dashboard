/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/widgets.js":
/*!***************************************!*\
  !*** ./resources/js/pages/widgets.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTWidgets = function () {
  var t = function t(_t) {
    var e = KTUtil.getById(_t);
    e && KTUtil.on(e, "thead th .checkbox > input", "change", function (t) {
      for (var o = KTUtil.findAll(e, "tbody td .checkbox > input"), s = 0, a = o.length; s < a; s++) {
        o[s].checked = this.checked;
      }
    });
  };

  return {
    init: function init() {
      var e, o, s, a;
      !function () {
        if (0 != $("#kt_dashboard_daterangepicker").length) {
          var t = $("#kt_dashboard_daterangepicker"),
              e = moment(),
              o = moment();
          t.daterangepicker({
            direction: KTUtil.isRTL(),
            startDate: e,
            endDate: o,
            opens: "left",
            applyClass: "btn-primary",
            cancelClass: "btn-light-primary",
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
            }
          }, s), s(e, o, "");
        }

        function s(t, e, o) {
          var s = "",
              a = "";
          e - t < 100 || "Today" == o ? (s = "Today:", a = t.format("MMM D")) : "Yesterday" == o ? (s = "Yesterday:", a = t.format("MMM D")) : a = t.format("MMM D") + " - " + e.format("MMM D"), $("#kt_dashboard_daterangepicker_date").html(a), $("#kt_dashboard_daterangepicker_title").html(s);
        }
      }(), function () {
        var t = document.getElementById("kt_stats_widget_7_chart");

        if (t) {
          var e = {
            series: [{
              name: "Net Profit",
              data: [30, 45, 32, 70, 40]
            }],
            chart: {
              type: "area",
              height: 150,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base.success]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light.success],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light.success],
              strokeColor: [KTApp.getSettings().colors.theme.base.success],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_stats_widget_8_chart");

        if (t) {
          var e = {
            series: [{
              name: "Net Profit",
              data: [30, 45, 32, 70, 40]
            }],
            chart: {
              type: "area",
              height: 150,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base.danger]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light.danger],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light.danger],
              strokeColor: [KTApp.getSettings().colors.theme.base.danger],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_stats_widget_9_chart");

        if (t) {
          var e = {
            series: [{
              name: "Net Profit",
              data: [30, 45, 32, 70, 40]
            }],
            chart: {
              type: "area",
              height: 150,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base.primary]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light.primary],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light.primary],
              strokeColor: [KTApp.getSettings().colors.theme.base.primary],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_stats_widget_10_chart"),
            e = parseInt(KTUtil.css(t, "height")),
            o = KTUtil.hasAttr(t, "data-color") ? KTUtil.attr(t, "data-color") : "info";

        if (t) {
          var s = {
            series: [{
              name: "Net Profit",
              data: [40, 40, 30, 30, 35, 35, 50]
            }],
            chart: {
              type: "area",
              height: e,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base[o]]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 55,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light[o]],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light[o]],
              strokeColor: [KTApp.getSettings().colors.theme.base[o]],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, s).render();
        }
      }(), function () {
        var t = document.getElementById("kt_stats_widget_11_chart"),
            e = (parseInt(KTUtil.css(t, "height")), KTUtil.hasAttr(t, "data-color") ? KTUtil.attr(t, "data-color") : "success");

        if (t) {
          var o = {
            series: [{
              name: "Net Profit",
              data: [40, 40, 30, 30, 35, 35, 50]
            }],
            chart: {
              type: "area",
              height: 150,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base[e]]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 55,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light[e]],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light[e]],
              strokeColor: [KTApp.getSettings().colors.theme.base[e]],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, o).render();
        }
      }(), function () {
        var t = document.getElementById("kt_stats_widget_12_chart"),
            e = parseInt(KTUtil.css(t, "height")),
            o = KTUtil.hasAttr(t, "data-color") ? KTUtil.attr(t, "data-color") : "primary";

        if (t) {
          var s = {
            series: [{
              name: "Net Profit",
              data: [40, 40, 30, 30, 35, 35, 50]
            }],
            chart: {
              type: "area",
              height: e,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base[o]]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 55,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light[o]],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light[o]],
              strokeColor: [KTApp.getSettings().colors.theme.base[o]],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, s).render();
        }
      }(), function () {
        var t = document.getElementById("kt_charts_widget_1_chart");

        if (t) {
          var e = {
            series: [{
              name: "Net Profit",
              data: [44, 55, 57, 56, 61, 58]
            }, {
              name: "Revenue",
              data: [76, 85, 101, 98, 87, 105]
            }],
            chart: {
              type: "bar",
              height: 350,
              toolbar: {
                show: !1
              }
            },
            plotOptions: {
              bar: {
                horizontal: !1,
                columnWidth: ["30%"],
                endingShape: "rounded"
              }
            },
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            stroke: {
              show: !0,
              width: 2,
              colors: ["transparent"]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            fill: {
              opacity: 1
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.base.success, KTApp.getSettings().colors.gray["gray-300"]],
            grid: {
              borderColor: KTApp.getSettings().colors.gray["gray-200"],
              strokeDashArray: 4,
              yaxis: {
                lines: {
                  show: !0
                }
              }
            }
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_charts_widget_2_chart");

        if (t) {
          var e = {
            series: [{
              name: "Net Profit",
              data: [44, 55, 57, 56, 61, 58]
            }, {
              name: "Revenue",
              data: [76, 85, 101, 98, 87, 105]
            }],
            chart: {
              type: "bar",
              height: 350,
              toolbar: {
                show: !1
              }
            },
            plotOptions: {
              bar: {
                horizontal: !1,
                columnWidth: ["30%"],
                endingShape: "rounded"
              }
            },
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            stroke: {
              show: !0,
              width: 2,
              colors: ["transparent"]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            fill: {
              opacity: 1
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.base.warning, KTApp.getSettings().colors.gray["gray-300"]],
            grid: {
              borderColor: KTApp.getSettings().colors.gray["gray-200"],
              strokeDashArray: 4,
              yaxis: {
                lines: {
                  show: !0
                }
              }
            }
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_charts_widget_3_chart");

        if (t) {
          var e = {
            series: [{
              name: "Net Profit",
              data: [30, 40, 40, 90, 90, 70, 70]
            }],
            chart: {
              type: "area",
              height: 350,
              toolbar: {
                show: !1
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base.info]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.theme.base.info,
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light.info],
            grid: {
              borderColor: KTApp.getSettings().colors.gray["gray-200"],
              strokeDashArray: 4,
              yaxis: {
                lines: {
                  show: !0
                }
              }
            },
            markers: {
              strokeColor: KTApp.getSettings().colors.theme.base.info,
              strokeWidth: 3
            }
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_charts_widget_4_chart");

        if (t) {
          var e = {
            series: [{
              name: "Net Profit",
              data: [60, 50, 80, 40, 100, 60]
            }, {
              name: "Revenue",
              data: [70, 60, 110, 40, 50, 70]
            }],
            chart: {
              type: "area",
              height: 350,
              toolbar: {
                show: !1
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth"
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.theme.light.success,
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.base.success, KTApp.getSettings().colors.theme.base.warning],
            grid: {
              borderColor: KTApp.getSettings().colors.gray["gray-200"],
              strokeDashArray: 4,
              yaxis: {
                lines: {
                  show: !0
                }
              }
            },
            markers: {
              colors: [KTApp.getSettings().colors.theme.light.success, KTApp.getSettings().colors.theme.light.warning],
              strokeColor: [KTApp.getSettings().colors.theme.light.success, KTApp.getSettings().colors.theme.light.warning],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_charts_widget_5_chart");

        if (t) {
          var e = {
            series: [{
              name: "Net Profit",
              data: [40, 50, 65, 70, 50, 30]
            }, {
              name: "Revenue",
              data: [-30, -40, -55, -60, -40, -20]
            }],
            chart: {
              type: "bar",
              stacked: !0,
              height: 350,
              toolbar: {
                show: !1
              }
            },
            plotOptions: {
              bar: {
                horizontal: !1,
                columnWidth: ["12%"],
                endingShape: "rounded"
              }
            },
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            stroke: {
              show: !0,
              width: 2,
              colors: ["transparent"]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: -80,
              max: 80,
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            fill: {
              opacity: 1
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.base.info, KTApp.getSettings().colors.theme.base.primary],
            grid: {
              borderColor: KTApp.getSettings().colors.gray["gray-200"],
              strokeDashArray: 4,
              yaxis: {
                lines: {
                  show: !0
                }
              }
            }
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_charts_widget_6_chart");

        if (t) {
          var e = {
            series: [{
              name: "Net Profit",
              type: "bar",
              stacked: !0,
              data: [40, 50, 65, 70, 50, 30]
            }, {
              name: "Revenue",
              type: "bar",
              stacked: !0,
              data: [20, 20, 25, 30, 30, 20]
            }, {
              name: "Expenses",
              type: "area",
              data: [50, 80, 60, 90, 50, 70]
            }],
            chart: {
              stacked: !0,
              height: 350,
              toolbar: {
                show: !1
              }
            },
            plotOptions: {
              bar: {
                stacked: !0,
                horizontal: !1,
                endingShape: "rounded",
                columnWidth: ["12%"]
              }
            },
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 2,
              colors: ["transparent"]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              max: 120,
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            fill: {
              opacity: 1
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.base.info, KTApp.getSettings().colors.theme.base.primary, KTApp.getSettings().colors.theme.light.primary],
            grid: {
              borderColor: KTApp.getSettings().colors.gray["gray-200"],
              strokeDashArray: 4,
              yaxis: {
                lines: {
                  show: !0
                }
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }
            }
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_charts_widget_7_chart");

        if (t) {
          var e = {
            series: [{
              name: "Net Profit",
              data: [30, 30, 50, 50, 35, 35]
            }, {
              name: "Revenue",
              data: [55, 20, 20, 20, 70, 70]
            }, {
              name: "Expenses",
              data: [60, 60, 40, 40, 30, 30]
            }],
            chart: {
              type: "area",
              height: 300,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 2,
              colors: [KTApp.getSettings().colors.theme.base.warning, "transparent", "transparent"]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light.warning, KTApp.getSettings().colors.theme.light.info, KTApp.getSettings().colors.gray["gray-100"]],
            grid: {
              borderColor: KTApp.getSettings().colors.gray["gray-200"],
              strokeDashArray: 4,
              yaxis: {
                lines: {
                  show: !0
                }
              }
            },
            markers: {
              colors: [KTApp.getSettings().colors.theme.light.warning, KTApp.getSettings().colors.theme.light.info, KTApp.getSettings().colors.gray["gray-100"]],
              strokeColor: [KTApp.getSettings().colors.theme.base.warning, KTApp.getSettings().colors.theme.base.info, KTApp.getSettings().colors.gray["gray-500"]],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_charts_widget_8_chart");

        if (t) {
          var e = {
            series: [{
              name: "Net Profit",
              data: [30, 30, 50, 50, 35, 35]
            }, {
              name: "Revenue",
              data: [55, 20, 20, 20, 70, 70]
            }, {
              name: "Expenses",
              data: [60, 60, 40, 40, 30, 30]
            }],
            chart: {
              type: "area",
              height: 300,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 2,
              colors: ["transparent", "transparent", "transparent"]
            },
            xaxis: {
              x: 0,
              offsetX: 0,
              offsetY: 0,
              padding: {
                left: 0,
                right: 0,
                top: 0
              },
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              y: 0,
              offsetX: 0,
              offsetY: 0,
              padding: {
                left: 0,
                right: 0
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light.success, KTApp.getSettings().colors.theme.light.danger, KTApp.getSettings().colors.theme.light.info],
            grid: {
              borderColor: KTApp.getSettings().colors.gray["gray-200"],
              strokeDashArray: 4,
              padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
              }
            },
            markers: {
              colors: [KTApp.getSettings().colors.theme.light.success, KTApp.getSettings().colors.theme.light.danger, KTApp.getSettings().colors.theme.light.info],
              strokeColor: [KTApp.getSettings().colors.theme.base.success, KTApp.getSettings().colors.theme.base.danger, KTApp.getSettings().colors.theme.base.info],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_charts_widget_9_chart");

        if (t) {
          var e = {
            series: [{
              name: "Net Profit",
              data: [20, 30, 45, 35, 25]
            }, {
              name: "Revenue",
              data: [-20, -30, -45, -35, -25]
            }],
            chart: {
              type: "bar",
              stacked: !0,
              height: 350,
              toolbar: {
                show: !1
              }
            },
            plotOptions: {
              bar: {
                horizontal: !1,
                columnWidth: ["17%"],
                endingShape: "rounded"
              }
            },
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            stroke: {
              width: 0,
              colors: ["transparent"]
            },
            xaxis: {
              lines: {
                show: !1
              },
              categories: ["Feb", "Mar", "Apr", "May", "Jun"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              lines: {
                show: !1
              },
              min: -50,
              max: 50,
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            fill: {
              opacity: 1
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.base.info, KTApp.getSettings().colors.theme.base.primary],
            grid: {
              borderColor: KTApp.getSettings().colors.gray["gray-200"],
              strokeDashArray: 4,
              yaxis: {
                lines: {
                  show: !0
                }
              }
            }
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_mixed_widget_1_chart"),
            e = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var o = "#D13647",
              s = {
            series: [{
              name: "Net Profit",
              data: [30, 45, 32, 70, 40, 40, 40]
            }],
            chart: {
              type: "area",
              height: e,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              },
              dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 5,
                left: 0,
                blur: 3,
                color: o,
                opacity: .5
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 0
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [o]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              }
            },
            yaxis: {
              min: 0,
              max: 80,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              },
              marker: {
                show: !1
              }
            },
            colors: ["transparent"],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light.danger],
              strokeColor: [o],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, s).render();
        }
      }(), function () {
        var t = document.getElementById("kt_mixed_widget_2_chart"),
            e = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var o = "#287ED7",
              s = {
            series: [{
              name: "Net Profit",
              data: [30, 45, 32, 70, 40, 40, 40]
            }],
            chart: {
              type: "area",
              height: e,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              },
              dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 5,
                left: 0,
                blur: 3,
                color: o,
                opacity: .5
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 0
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [o]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 80,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              },
              marker: {
                show: !1
              }
            },
            colors: ["transparent"],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light.info],
              strokeColor: [o],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, s).render();
        }
      }(), function () {
        var t = document.getElementById("kt_mixed_widget_3_chart"),
            e = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var o = KTApp.getSettings().colors.theme.base.white,
              s = {
            series: [{
              name: "Net Profit",
              data: [30, 45, 32, 70, 40, 40, 40]
            }],
            chart: {
              type: "area",
              height: e,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              },
              dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 5,
                left: 0,
                blur: 3,
                color: o,
                opacity: .3
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 0
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [o]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 80,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              },
              marker: {
                show: !1
              }
            },
            colors: ["transparent"],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light.dark],
              strokeColor: [o],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, s).render();
        }
      }(), function () {
        var t = document.getElementById("kt_mixed_widget_4_chart"),
            e = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var o = {
            series: [{
              name: "Net Profit",
              data: [35, 65, 75, 55, 45, 60, 55]
            }, {
              name: "Revenue",
              data: [40, 70, 80, 60, 50, 65, 60]
            }],
            chart: {
              type: "bar",
              height: e,
              toolbar: {
                show: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {
              bar: {
                horizontal: !1,
                columnWidth: ["30%"],
                endingShape: "rounded"
              }
            },
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            stroke: {
              show: !0,
              width: 1,
              colors: ["transparent"]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 100,
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            fill: {
              type: ["solid", "solid"],
              opacity: [.25, 1]
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              },
              marker: {
                show: !1
              }
            },
            colors: ["#ffffff", "#ffffff"],
            grid: {
              borderColor: KTApp.getSettings().colors.gray["gray-200"],
              strokeDashArray: 4,
              yaxis: {
                lines: {
                  show: !0
                }
              },
              padding: {
                left: 20,
                right: 20
              }
            }
          };
          new ApexCharts(t, o).render();
        }
      }(), function () {
        var t = document.getElementById("kt_mixed_widget_5_chart"),
            e = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var o = {
            series: [{
              name: "Net Profit",
              data: [35, 65, 75, 55, 45, 60, 55]
            }, {
              name: "Revenue",
              data: [40, 70, 80, 60, 50, 65, 60]
            }],
            chart: {
              type: "bar",
              height: e,
              toolbar: {
                show: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {
              bar: {
                horizontal: !1,
                columnWidth: ["30%"],
                endingShape: "rounded"
              }
            },
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            stroke: {
              show: !0,
              width: 1,
              colors: ["transparent"]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 100,
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            fill: {
              type: ["solid", "solid"],
              opacity: [.25, 1]
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              },
              marker: {
                show: !1
              }
            },
            colors: ["#ffffff", "#ffffff"],
            grid: {
              borderColor: KTApp.getSettings().colors.gray["gray-200"],
              strokeDashArray: 4,
              yaxis: {
                lines: {
                  show: !0
                }
              },
              padding: {
                left: 20,
                right: 20
              }
            }
          };
          new ApexCharts(t, o).render();
        }
      }(), function () {
        var t = document.getElementById("kt_mixed_widget_6_chart"),
            e = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var o = {
            series: [{
              name: "Net Profit",
              data: [35, 65, 75, 55, 45, 60, 55]
            }, {
              name: "Revenue",
              data: [40, 70, 80, 60, 50, 65, 60]
            }],
            chart: {
              type: "bar",
              height: e,
              toolbar: {
                show: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {
              bar: {
                horizontal: !1,
                columnWidth: ["30%"],
                endingShape: "rounded"
              }
            },
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            stroke: {
              show: !0,
              width: 1,
              colors: ["transparent"]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 100,
              labels: {
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            fill: {
              type: ["solid", "solid"],
              opacity: [.25, 1]
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              },
              marker: {
                show: !1
              }
            },
            colors: ["#ffffff", "#ffffff"],
            grid: {
              borderColor: KTApp.getSettings().colors.gray["gray-200"],
              strokeDashArray: 4,
              yaxis: {
                lines: {
                  show: !0
                }
              },
              padding: {
                left: 20,
                right: 20
              }
            }
          };
          new ApexCharts(t, o).render();
        }
      }(), function () {
        var t = document.getElementById("kt_mixed_widget_13_chart"),
            e = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var o = {
            series: [{
              name: "Net Profit",
              data: [30, 25, 45, 30, 55, 55]
            }],
            chart: {
              type: "area",
              height: e,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base.info]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 60,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light.info],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light.info],
              strokeColor: [KTApp.getSettings().colors.theme.base.info],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, o).render();
        }
      }(), function () {
        var t = document.getElementById("kt_mixed_widget_14_chart"),
            e = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var o = {
            series: [74],
            chart: {
              height: e,
              type: "radialBar"
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  margin: 0,
                  size: "65%"
                },
                dataLabels: {
                  showOn: "always",
                  name: {
                    show: !1,
                    fontWeight: "700"
                  },
                  value: {
                    color: KTApp.getSettings().colors.gray["gray-700"],
                    fontSize: "30px",
                    fontWeight: "700",
                    offsetY: 12,
                    show: !0,
                    formatter: function formatter(t) {
                      return t + "%";
                    }
                  }
                },
                track: {
                  background: KTApp.getSettings().colors.theme.light.success,
                  strokeWidth: "100%"
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.base.success],
            stroke: {
              lineCap: "round"
            },
            labels: ["Progress"]
          };
          new ApexCharts(t, o).render();
        }
      }(), function () {
        var t = document.getElementById("kt_mixed_widget_15_chart"),
            e = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var o = {
            series: [{
              name: "Net Profit",
              data: [30, 30, 60, 25, 25, 40]
            }],
            chart: {
              type: "area",
              height: e,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "gradient",
              opacity: 1,
              gradient: {
                type: "vertical",
                shadeIntensity: .5,
                gradientToColors: void 0,
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: .375,
                stops: [25, 50, 100],
                colorStops: []
              }
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base.danger]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 65,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light.danger],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light.danger],
              strokeColor: [KTApp.getSettings().colors.theme.base.danger],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, o).render();
        }
      }(), function () {
        var t = document.getElementById("kt_mixed_widget_16_chart"),
            e = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var o = {
            series: [60, 50, 75, 80],
            chart: {
              height: e,
              type: "radialBar"
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  margin: 0,
                  size: "30%"
                },
                dataLabels: {
                  showOn: "always",
                  name: {
                    show: !1,
                    fontWeight: "700"
                  },
                  value: {
                    color: KTApp.getSettings().colors.gray["gray-700"],
                    fontSize: "18px",
                    fontWeight: "700",
                    offsetY: 10,
                    show: !0
                  },
                  total: {
                    show: !0,
                    label: "Total",
                    fontWeight: "bold",
                    formatter: function formatter(t) {
                      return "60%";
                    }
                  }
                },
                track: {
                  background: KTApp.getSettings().colors.gray["gray-100"],
                  strokeWidth: "100%"
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.base.info, KTApp.getSettings().colors.theme.base.danger, KTApp.getSettings().colors.theme.base.success, KTApp.getSettings().colors.theme.base.primary],
            stroke: {
              lineCap: "round"
            },
            labels: ["Progress"]
          };
          new ApexCharts(t, o).render();
        }
      }(), function () {
        var t = document.getElementById("kt_mixed_widget_17_chart"),
            e = KTUtil.hasAttr(t, "data-color") ? KTUtil.attr(t, "data-color") : "warning",
            o = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var s = {
            series: [{
              name: "Net Profit",
              data: [30, 25, 45, 30, 55, 55]
            }],
            chart: {
              type: "area",
              height: o,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base[e]]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 60,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light[e]],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light[e]],
              strokeColor: [KTApp.getSettings().colors.theme.base[e]],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, s).render();
        }
      }(), function () {
        var t = document.getElementById("kt_mixed_widget_18_chart"),
            e = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var o = {
            series: [74],
            chart: {
              height: e,
              type: "radialBar",
              offsetY: 0
            },
            plotOptions: {
              radialBar: {
                startAngle: -90,
                endAngle: 90,
                hollow: {
                  margin: 0,
                  size: "70%"
                },
                dataLabels: {
                  showOn: "always",
                  name: {
                    show: !0,
                    fontSize: "13px",
                    fontWeight: "700",
                    offsetY: -5,
                    color: KTApp.getSettings().colors.gray["gray-500"]
                  },
                  value: {
                    color: KTApp.getSettings().colors.gray["gray-700"],
                    fontSize: "30px",
                    fontWeight: "700",
                    offsetY: -40,
                    show: !0
                  }
                },
                track: {
                  background: KTApp.getSettings().colors.theme.light.primary,
                  strokeWidth: "100%"
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.base.primary],
            stroke: {
              lineCap: "round"
            },
            labels: ["Progress"]
          };
          new ApexCharts(t, o).render();
        }
      }(), function () {
        var t = document.getElementById("kt_tiles_widget_1_chart"),
            e = KTUtil.hasAttr(t, "data-color") ? KTUtil.attr(t, "data-color") : "primary",
            o = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var s = {
            series: [{
              name: "Net Profit",
              data: [20, 22, 30, 28, 25, 26, 30, 28, 22, 24, 25, 35]
            }],
            chart: {
              type: "area",
              height: o,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "gradient",
              opacity: 1,
              gradient: {
                type: "vertical",
                shadeIntensity: .55,
                gradientToColors: void 0,
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: .2,
                stops: [25, 50, 100],
                colorStops: []
              }
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base[e]]
            },
            xaxis: {
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 37,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light[e]],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light[e]],
              strokeColor: [KTApp.getSettings().colors.theme.base[e]],
              strokeWidth: 3
            },
            padding: {
              top: 0,
              bottom: 0
            }
          };
          new ApexCharts(t, s).render();
        }
      }(), function () {
        var t = document.getElementById("kt_tiles_widget_2_chart"),
            e = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var o = KTUtil.changeColor(KTApp.getSettings().colors.theme.base.danger),
              s = KTUtil.changeColor(KTApp.getSettings().colors.theme.base.danger),
              a = {
            series: [{
              name: "Net Profit",
              data: [10, 10, 20, 20, 12, 12]
            }],
            chart: {
              type: "area",
              height: e,
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              },
              padding: {
                top: 0,
                bottom: 0
              }
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [o]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              }
            },
            yaxis: {
              min: 0,
              max: 22,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              fixed: {
                enabled: !1
              },
              x: {
                show: !1
              },
              y: {
                title: {
                  formatter: function formatter(t) {
                    return t + "";
                  }
                }
              }
            },
            colors: [s],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light.danger],
              strokeColor: [o],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, a).render();
        }
      }(), function () {
        var t = document.getElementById("kt_tiles_widget_5_chart"),
            e = parseInt(KTUtil.css(t, "height"));

        if (t) {
          var o = {
            series: [{
              name: "Net Profit",
              data: [10, 15, 18, 14]
            }, {
              name: "Revenue",
              data: [8, 13, 16, 12]
            }],
            chart: {
              type: "bar",
              height: e,
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              },
              padding: {
                left: 20,
                right: 20
              }
            },
            plotOptions: {
              bar: {
                horizontal: !1,
                columnWidth: ["25%"],
                endingShape: "rounded"
              }
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: ["solid", "gradient"],
              opacity: .25
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May"]
            },
            yaxis: {
              min: 0,
              max: 20
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              fixed: {
                enabled: !1
              },
              x: {
                show: !1
              },
              y: {
                title: {
                  formatter: function formatter(t) {
                    return t + "";
                  }
                }
              },
              marker: {
                show: !1
              }
            },
            colors: ["#ffffff", "#ffffff"]
          };
          new ApexCharts(t, o).render();
        }
      }(), function () {
        var t = document.getElementById("kt_tiles_widget_8_chart"),
            e = (parseInt(KTUtil.css(t, "height")), KTUtil.hasAttr(t, "data-color") ? KTUtil.attr(t, "data-color") : "danger");

        if (t) {
          var o = {
            series: [{
              name: "Net Profit",
              data: [20, 20, 30, 15, 40, 30]
            }],
            chart: {
              type: "area",
              height: 150,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid"
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base[e]]
            },
            xaxis: {
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 45,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light[e]],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light[e]],
              strokeColor: [KTApp.getSettings().colors.theme.base[e]],
              strokeWidth: 3
            },
            padding: {
              top: 0,
              bottom: 0
            }
          };
          new ApexCharts(t, o).render();
        }
      }(), function () {
        var t = document.getElementById("kt_tiles_widget_17_chart");

        if (t) {
          var e = {
            series: [{
              name: "Net Profit",
              data: [10, 20, 20, 8]
            }],
            chart: {
              type: "area",
              height: 150,
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              },
              padding: {
                top: 0,
                bottom: 0
              }
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base.success]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              }
            },
            yaxis: {
              min: 0,
              max: 22,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              fixed: {
                enabled: !1
              },
              x: {
                show: !1
              },
              y: {
                title: {
                  formatter: function formatter(t) {
                    return t + "";
                  }
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light.success],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light.success],
              strokeColor: [KTApp.getSettings().colors.theme.base.success],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_tiles_widget_20_chart");

        if (t) {
          var e = {
            series: [74],
            chart: {
              height: 250,
              type: "radialBar",
              offsetY: 0
            },
            plotOptions: {
              radialBar: {
                startAngle: -90,
                endAngle: 90,
                hollow: {
                  margin: 0,
                  size: "70%"
                },
                dataLabels: {
                  showOn: "always",
                  name: {
                    show: !0,
                    fontSize: "13px",
                    fontWeight: "400",
                    offsetY: -5,
                    color: KTApp.getSettings().colors.gray["gray-300"]
                  },
                  value: {
                    color: KTApp.getSettings().colors.theme.inverse.primary,
                    fontSize: "22px",
                    fontWeight: "bold",
                    offsetY: -40,
                    show: !0
                  }
                },
                track: {
                  background: KTUtil.changeColor(KTApp.getSettings().colors.theme.base.primary, -7),
                  strokeWidth: "100%"
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.inverse.primary],
            stroke: {
              lineCap: "round"
            },
            labels: ["Progress"]
          };
          new ApexCharts(t, e).render();
        }
      }(), function () {
        var t = document.getElementById("kt_tiles_widget_21_chart"),
            e = parseInt(KTUtil.css(t, "height")),
            o = KTUtil.hasAttr(t, "data-color") ? KTUtil.attr(t, "data-color") : "info";

        if (t) {
          var s = {
            series: [{
              name: "Net Profit",
              data: [20, 20, 30, 15, 30, 30]
            }],
            chart: {
              type: "area",
              height: e,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base[o]]
            },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 32,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light[o]],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light[o]],
              strokeColor: [KTApp.getSettings().colors.theme.base[o]],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, s).render();
        }
      }(), function () {
        var t = document.getElementById("kt_tiles_widget_23_chart"),
            e = (parseInt(KTUtil.css(t, "height")), KTUtil.hasAttr(t, "data-color") ? KTUtil.attr(t, "data-color") : "primary");

        if (t) {
          var o = {
            series: [{
              name: "Net Profit",
              data: [15, 25, 15, 40, 20, 50]
            }],
            chart: {
              type: "area",
              height: 125,
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              sparkline: {
                enabled: !0
              }
            },
            plotOptions: {},
            legend: {
              show: !1
            },
            dataLabels: {
              enabled: !1
            },
            fill: {
              type: "solid",
              opacity: 1
            },
            stroke: {
              curve: "smooth",
              show: !0,
              width: 3,
              colors: [KTApp.getSettings().colors.theme.base[e]]
            },
            xaxis: {
              categories: ["Jan, 2020", "Feb, 2020", "Mar, 2020", "Apr, 2020", "May, 2020", "Jun, 2020"],
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: {
                  color: KTApp.getSettings().colors.gray["gray-300"],
                  width: 1,
                  dashArray: 3
                }
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: {
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            yaxis: {
              min: 0,
              max: 55,
              labels: {
                show: !1,
                style: {
                  colors: KTApp.getSettings().colors.gray["gray-500"],
                  fontSize: "12px",
                  fontFamily: KTApp.getSettings()["font-family"]
                }
              }
            },
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: {
                  type: "none",
                  value: 0
                }
              }
            },
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: KTApp.getSettings()["font-family"]
              },
              y: {
                formatter: function formatter(t) {
                  return "$" + t + " thousands";
                }
              }
            },
            colors: [KTApp.getSettings().colors.theme.light[e]],
            markers: {
              colors: [KTApp.getSettings().colors.theme.light[e]],
              strokeColor: [KTApp.getSettings().colors.theme.base[e]],
              strokeWidth: 3
            }
          };
          new ApexCharts(t, o).render();
        }
      }(), t("kt_advance_table_widget_1"), t("kt_advance_table_widget_2"), t("kt_advance_table_widget_3"), t("kt_advance_table_widget_4"), e = "kt_price_slider", void 0 !== (o = document.getElementById(e)) && o && noUiSlider.create(o, {
        start: [20, 60],
        connect: !0,
        range: {
          min: 0,
          max: 100
        }
      }), (s = KTUtil.getById("kt_forms_widget_1_input")) && autosize(s), KTUtil.getById("kt_forms_widget_2_form") && new Quill("#kt_forms_widget_2_editor", {
        modules: {
          toolbar: {
            container: "#kt_forms_widget_2_editor_toolbar"
          }
        },
        placeholder: "Type message...",
        theme: "snow"
      }), function () {
        var t = KTUtil.getById("kt_forms_widget_3_input");
        t && autosize(t);
      }(), function () {
        var t = KTUtil.getById("kt_forms_widget_4_input");
        t && autosize(t);
      }(), function () {
        var t = KTUtil.getById("kt_forms_widget_5_input");
        t && autosize(t);
      }(), function () {
        var t = KTUtil.getById("kt_forms_widget_6_input");
        t && autosize(t);
      }(), function () {
        var t = KTUtil.getById("kt_forms_widget_7_input");
        t && autosize(t);
      }(), function () {
        var t = KTUtil.getById("kt_forms_widget_8_input");
        t && autosize(t);
      }(), function () {
        var t = KTUtil.getById("kt_forms_widget_9_input");
        t && autosize(t);
      }(), function () {
        var t = KTUtil.getById("kt_forms_widget_10_input");
        t && autosize(t);
      }(), function () {
        var t = KTUtil.getById("kt_forms_widget_11_input");
        t && autosize(t);
      }(), (a = KTUtil.getById("kt_app_education_more_feeds_btn")) && KTUtil.addEvent(a, "click", function (t) {
        var e = document.getElementsByClassName("education-more-feeds");
        !e || e.length <= 0 || (KTUtil.btnWait(a, "spinner spinner-right spinner-white pr-15", "Please wait...", !0), setTimeout(function () {
          var t;
          KTUtil.btnRelease(a), KTUtil.addClass(a, "d-none");

          for (var o = 0, s = e.length; o < s; o++) {
            t = e[0], KTUtil.removeClass(e[o], "d-none");
            var r = KTUtil.find(t, "textarea");
            r && autosize(r);
          }

          KTUtil.scrollTo(t);
        }, 1e3));
      });
    }
  };
}();

 true && (module.exports = KTWidgets), jQuery(document).ready(function () {
  KTWidgets.init();
});

/***/ }),

/***/ 6:
/*!*********************************************!*\
  !*** multi ./resources/js/pages/widgets.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hanse\Documents\Code Lab\Laravel\portal\resources\js\pages\widgets.js */"./resources/js/pages/widgets.js");


/***/ })

/******/ });