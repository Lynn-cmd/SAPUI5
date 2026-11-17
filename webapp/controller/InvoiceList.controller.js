sap.ui.define([
	 
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/walkthrough/model/formatter" 
    
], function(
	Controller,
    JSONModel,
    formatter // 上面引用的顺序，和下面传参的顺序 这两个顺序要一致
) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {

        formatter: formatter, 

        /**
         * @override
         * @returns {void|undefined}
         */
        onInit: function() {

            var oViewModel = new JSONModel({
                currency:"EUR"
            });
            this.getView().setModel(oViewModel,"view")
        }
	});
});