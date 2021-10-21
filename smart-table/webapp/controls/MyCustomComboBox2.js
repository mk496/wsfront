sap.ui.define([
  "sap/ui/core/Control",
  "sap/ui/layout/Grid",
  "sap/ui/layout/GridData", 
  "sap/m/ComboBox"
], function (Control, Grid, GridData,  ComboBox) {
	"use strict";
    return Control.extend("sapui5.demo.customcontrols.controls.MyCustomComboBox", {
		metadata : {
		    properties : {
                "selectedKey": {type: "string", defaultValue: "123"},
                "path": {type: "string", defaultValue: "ula"},
                "key": {type: "string", defaultValue: "ula"},
                "text": {type: "string", defaultValue: "ula"}
              
               
            },
            "events": {},
            aggregations:{
                "_layout" : {type : "sap.ui.layout.Grid", multiple: false, visibility : "hidden"},
                 "items": {type:"sap.ui.core.Item",
                 "multiple":true,
                 "singularName":"item"}
                
            }   
		},
		init : function () {
            var that = this;
            debugger;
            this._oComboBox = new ComboBox({
              id : "comboBoxId",
              items: {
                path: that.getPath(), //"/Products",
                template: new sap.ui.core.Item({
                    key: "{Id}",
                    text: "{Name}"
                })
            },
          // //      selectedKey: this.getSelectedKey(),
          //       items: this.getItems()
          //       // layoutData : new GridData({
          //       //      span : "L11 M11 S11"
          //       // })
            });

            this._oComboBox.addStyleClass("sapUiSmallMarginEnd");
           
          
		    this.setAggregation("_layout", 
    		    new Grid({
                    content: [
                           this._oComboBox
                        ],
                    hSpacing: 0,
                    vSpacing: 0
                })
            );

            // this._oInput.attachChange(function(){
            //     that._oIcon.toggleStyleClass("sapThemePositiveText", that._oInput.getValue()!=="");
            //     that.setValue(that._oInput.getValue());
            // });
		},

		exit : function() {
		  this._oComboBox.destroy();
		  
		},

		

	

		renderer : function (oRenderManager, oControl) {
		    oRenderManager.write("<div");
            oRenderManager.writeControlData(oControl);
         //   debugger;
		    oRenderManager.addClass("myListItem");
		    oRenderManager.writeClasses();
		    oRenderManager.write(">");
        oRenderManager.renderControl(oControl.getAggregation("_layout"));      
		    oRenderManager.write("</div>");
    },
    onAfterRendering: function(evt) {
 //    var oSomeTemplate = this.byId("itemId").clone();var oItemTemplate1 = new sap.ui.core.ListItem();
 var oItemTemplate1 = new sap.ui.core.Item();
 debugger;
 
//oItemTemplate1.bindProperty("Id", "Name");
// oItemTemplate1.bindProperty("key", "Id");
// oItemTemplate1.bindProperty("text", "Name");
oItemTemplate1.bindProperty("key", this.getKey());
oItemTemplate1.bindProperty("text", this.getText());

//this._oComboBox.bindItems("/Products", oItemTemplate1);
this._oComboBox.bindItems(this.getPath(), oItemTemplate1);
     debugger; 
    }
	});
});