sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.ducky.itemlist2.controller.View1", {
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel("model/data.json");
			this.getView().setModel(oModel, "invoice"); 
		},
		
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteView2", {
				invoicePath: oItem.getBindingContext("invoice").getPath().substr(8)
			});
		}
	});
});
