sap.ui.define([
	 
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/walkthrough/model/formatter" ,
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
    
], function(
	Controller,
	JSONModel,
	formatter,
	Filter,
	FilterOperator // 上面引用的顺序，和下面传参的顺序 这两个顺序要一致
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
        },

        onFilterInvoices: function(oEvent) {

            //Build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }
            // filter binding
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter); // 传入filter数组，进行过滤
        }
        
	});
});