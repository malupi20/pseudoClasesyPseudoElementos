
//ESTO ES DE LA CLASE DISABLED
// Esperar a que la página termine de cargarse
document.addEventListener(
    "DOMContentLoaded",
    function () {
      // Adjunte el detector de eventos `change` al checkbox
      document.getElementById("billing-checkbox").onchange = toggleBilling;
    },
    false,
  );
  
  function toggleBilling() {
    // Seleccione los campos de texto de facturación
    var billingItems = document.querySelectorAll('#billing input[type="text"]');
  
    // Alternar los campos de texto de facturación
    for (var i = 0; i < billingItems.length; i++) {
      billingItems[i].disabled = !billingItems[i].disabled;
    }
  }

//ESTO ES FIRST

  document.querySelector("button").onclick = function () {
    window.print();
  };

  //ESTO ES INDETERMINATE
  var inputs = document.getElementsByTagName("input");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].indeterminate = true;
}