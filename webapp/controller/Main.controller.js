sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("app.controller.Main", {
        /**
         * Called when this controller is instantiated.
         * @public
         */
        onInit() {
            this.getView().setModel(new JSONModel(), "dataModel");
            this.getView().byId("liste").setModel(new JSONModel([
                {
                    title: "Test",
                    test: "Das ist der erste Eintrag"
                },
                {
                    title: "Test2"
                },
                {
                    title: "Test3"
                },
                {
                    title: "Test4",
                    test: "Das ist Nummer 4"
                },
                {
                    title: "Test5"
                },
            ]));
        },

        handleNameInputLiveChange(oEvent) {
            this.getView().getModel("dataModel").setProperty("/liveChange", oEvent.getParameter("value"));
        }
    });
});