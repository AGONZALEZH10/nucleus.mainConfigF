sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/Device", "nucleus/mainConfig/model/models", "./utils/XlsxUtils"],
  /**
   * @param {typeof sap.ui.core.UIComponent} UIComponent
   * @param {typeof sap.ui.Device} Device
   */
  function (UIComponent, Device, models, XlsxUtils) {
    "use strict";

    return UIComponent.extend("nucleus.mainConfig.Component", {
      metadata: {
        manifest: "json",
      },

      /**
       * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
       * @public
       * @override
       */
      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // enable routing
        this.getRouter().initialize();

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        //Objeto para descargar y cargar XLSX template
        this.oXlsxUtils = new XlsxUtils(this);
      },
    });
  }
);