sap.ui.define([
	"sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function(
	ManagedObject,
	Fragment
) {
	"use strict";

	return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {

        constructor: function(oView) {
            this._oView = oView;
        },

        exit: function() {
            delete this._oView;
        },

        open: function() {
            var oView = this._oView; 

            // create dialog lazily
            if (!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog: function() {
                        oView.byId("helloDialog").close();
                    }
                };

                // ✅ 正确的做法：Fragment.load 必须在 if 的大括号内部
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: oFragmentController
                }).then(function(oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else { 
                // ✅ 这样 else 就能正常匹配到最上面的 if 了
                oView.byId("helloDialog").open();
            }
        }
    });
});