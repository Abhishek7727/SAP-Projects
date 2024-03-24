sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
  
	"sap/ui/core/Core",
	"sap/ui/core/library",
	"sap/ui/unified/library"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.app.project1.controller.View1", {
            onSelectionChange: function(oEvent) {
                var selectedItem = oEvent.getSource().getSelectedItem();
                if (selectedItem) {
                  var selectedKey = selectedItem.getKey();
                  // Handle selection based on the selectedKey (e.g., display a message)
                  jQuery.sap.messageBox("Selected Item: " + selectedKey);
                }
              },
              onDateSelect: function(oEvent) {
                var oDatePicker = oEvent.getSource();
                var selectedDate = oDatePicker.getDateValue();
                
                // Get the selected date in ISO string format
                var selectedDateISOString = selectedDate.toISOString();
                
                // Log the selected date
                console.log("Selected Date:", selectedDateISOString);
            }
            });
          });