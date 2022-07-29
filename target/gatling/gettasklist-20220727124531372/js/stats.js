var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1073",
        "ok": "1073",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1791",
        "ok": "1791",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1175",
        "ok": "1175",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1149",
        "ok": "1149",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1191",
        "ok": "1191",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1319",
        "ok": "1319",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1731",
        "ok": "1731",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 159,
    "percentage": 80
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 41,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    }
},
contents: {
"req_get-task-list-d8c43": {
        type: "REQUEST",
        name: "Get Task list",
path: "Get Task list",
pathFormatted: "req_get-task-list-d8c43",
stats: {
    "name": "Get Task list",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1073",
        "ok": "1073",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1791",
        "ok": "1791",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1175",
        "ok": "1175",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1149",
        "ok": "1149",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1191",
        "ok": "1191",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1319",
        "ok": "1319",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1731",
        "ok": "1731",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 159,
    "percentage": 80
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 41,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
