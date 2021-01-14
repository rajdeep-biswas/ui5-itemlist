sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.ducky.itemlist2.controller.View2", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("RouteView2").attachPatternMatched(this._onObjectMatched, this);
		},
		
		_onObjectMatched: function (oEvent) {
			// console.log(oEvent.getParameter("arguments").invoicePath);
			this.getView().bindElement({
				path: "/things/" + oEvent.getParameter("arguments").invoicePath,
				model: "invoice"
			});
		},
		
		goBack: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteView1");
		}
	});
});
