sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("databindingsapui5.controller.DataBinding", {
			onInit: function () {
				/***Create the model and load data from the local JSON file ***/
				var oModel = new sap.ui.model.json.JSONModel("./model/Products.json");
				oModel.setDefaultBindingMode("OneWay");
				this.getView().setModel(oModel, "ProductsModel");
			}
		});
	});
