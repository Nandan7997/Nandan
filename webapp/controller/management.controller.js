sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("library.controller.management", {

        onInit: function() {
            // Initialize a JSON model to bind data to the form
            var oModel = new sap.ui.model.json.JSONModel({
                CategoryId: "",
                Category: "",
                MaxAllowed: ""
            });
            this.getView().setModel(oModel);
        },

        onSave: function() {
            var oView = this.getView();
            var oModel = oView.getModel();
            var oData = oModel.getData();

            if (!oData.CategoryId || !oData.Category) {
                MessageToast.show("Please fill in all required fields.");
                return;
            }

            MessageToast.show("Save button pressed with data: " + JSON.stringify(oData));
        },

        onReset: function() {
            // Reset the form fields to their initial state
            var oView = this.getView();
            var oModel = oView.getModel();
            oModel.setData({
                CategoryId: "",
                Category: "",
                MaxAllowed: ""
            });
        },

        onCancel: function() {
            // Navigate back or clear the form, depending on your app flow
            // For now, we'll show a message
            MessageToast.show("Operation cancelled.");

            // Example: this.getRouter().navTo("someOtherView");
        },

        _saveToBackend: function(oData) {
            // Implement the logic to save the data to your backend service
            // Example:
            // $.ajax({
            //     url: "/your-backend-endpoint",
            //     method: "POST",
            //     data: JSON.stringify(oData),
            //     success: function(response) {
            //         MessageToast.show("Data saved successfully!");
            //     },
            //     error: function(error) {
            //         MessageToast.show("Error saving data.");
            //     }
            // });
        }

    });
});
