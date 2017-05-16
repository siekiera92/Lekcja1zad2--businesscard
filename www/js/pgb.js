function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function myInfo() {

	info =  'Jan Kowalski' + '\n' +
			'Kraków' + '\n' +
			'ul. Zajebistości 1/1' + '\n' + 
			'aaa@aaa.pl: ' + '\n';

	navigator.notification.alert(info);
	
}
//var dataNow = new Date();
//var mojaData = new Date(dataNow.getFullYear(), dataNow.getMonth(), dataNow.getDate(), dataNow.getHours(), dataNow.getMinutes(), dataNow.getSeconds() + 10, dataNow.getMilliseconds());

alert("coś kurwa");

cordova.plugins.notification.local.schedule({
  id: 1,
  title: 'I will bother you every minute',
  text: '.. until you cancel all notifications',
  sound: null,
  every: 'minute',
  autoClear: false,
  at: new Date(new Date().getTime() + 10*1000)
});

alert("coś kurwa");
/*
cordova.plugins.notification.local.schedule({
    id: 1,
    title: "New Message",
    message: "Hi, are you ready? We are waiting.",
    firstAt: new Date(new Date().getTime() + 10*1000),
    every: "minute"//, "hour", "week", "month", "year"
})
*/