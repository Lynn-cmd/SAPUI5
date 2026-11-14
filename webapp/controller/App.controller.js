sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel",
    ],
    function (Controller, MessageToast, JSONModel, ResourceModel) {
        "use strict";

        return Controller.extend("sap.ui.demo.walkthrough.controller.App", {


            onShowHello: function () {
                // read msg from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();

                // 临时调试：打印 bundle 是否加载、HelloMsg 取到什么1111
                console.log("Bundle 对象:", oBundle);
                console.log("HelloMsg 的值:", oBundle.getText("HelloMsg"));
                console.log("ShowHelloButtonText 的值:", oBundle.getText("ShowHelloButtonText"));


                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("HelloMsg", [sRecipient]);
                // show message
                MessageToast.show(sMsg);
            },

            onPress: function () {
                // Handle button press event
                //alert("Hello World SAPUI5!");
                MessageToast.show("Hello World SAPUI5!");
            },
        });
    },
);
