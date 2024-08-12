/*global QUnit*/

sap.ui.define([
	"library/controller/management.controller"
], function (Controller) {
	"use strict";

	QUnit.module("management Controller");

	QUnit.test("I should test the management controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
