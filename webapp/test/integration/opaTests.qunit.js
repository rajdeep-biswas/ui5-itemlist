/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/ducky/itemlist2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});