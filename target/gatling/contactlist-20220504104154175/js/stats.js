var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2463",
        "ok": "2463",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2986",
        "ok": "2986",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2615",
        "ok": "2615",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "193",
        "ok": "193",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2515",
        "ok": "2515",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2616",
        "ok": "2616",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2912",
        "ok": "2912",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2971",
        "ok": "2971",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.625",
        "ok": "0.625",
        "ko": "-"
    }
},
contents: {
"req_get-contact-lis-60e9b": {
        type: "REQUEST",
        name: "Get Contact list",
path: "Get Contact list",
pathFormatted: "req_get-contact-lis-60e9b",
stats: {
    "name": "Get Contact list",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2463",
        "ok": "2463",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2986",
        "ok": "2986",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2615",
        "ok": "2615",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "193",
        "ok": "193",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2515",
        "ok": "2515",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2616",
        "ok": "2616",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2912",
        "ok": "2912",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2971",
        "ok": "2971",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.625",
        "ok": "0.625",
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
