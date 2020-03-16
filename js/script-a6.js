function init() {
	$("input[type=checkbox]").change(trackCheck);
	$("input[type=radio]").change(trackRadio);
	console.log("скрипт подгрузился.");

    trackCheck();
    $("#my-carousel").carousel();
}

const maxAllowedChecks = 2;

function trackCheck(){
	let checkCount = $("input[type=checkbox]:checked").length;
	$("input[type=checkbox]:not(:checked)").prop("disabled", checkCount >= maxAllowedChecks);
}

function trackRadio(){
	$("input[type=radio]").prop("disabled", true);
}

$(document).ready(init);