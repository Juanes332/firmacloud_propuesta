document.addEventListener("DOMContentLoaded", () => {
  const geologicoCard = document.getElementById("geologico-card");
  const geologicoForm = document.getElementById("geologico-form");
  geologicoCard.addEventListener("click", (event) => {
    if (!geologicoForm.contains(event.target)) {
      toggleDisplay(geologicoForm, event);
    }
  });

  const runtCard = document.getElementById("runt-card");
  const runtInfoContainer = document.getElementById("runt-info-container");
  runtCard.addEventListener("click", (event) => {
    toggleDisplay(runtInfoContainer, event);
  });

  document.querySelectorAll(".contract-info").forEach((contract) => {
    const details = contract.querySelector(".contract-details");
    const contractHeader = contract.querySelector(".contract-header");
    const editableCells = details.querySelectorAll(
      'td[contenteditable="true"]'
    );

    // Evento clic para abrir o cerrar la celda de contrato
    contractHeader.addEventListener("click", (event) => {
      toggleDisplay(details, event);
    });

    // Evento clic dentro de la celda de contrato (por ejemplo, la tabla)
    details.addEventListener("click", (event) => {
      event.stopPropagation(); // Evita que se propague el clic dentro de la celda
    });

    // Evento clic para las celdas editables de la tabla
    editableCells.forEach((editableCell) => {
      editableCell.addEventListener("click", (event) => {
        event.stopPropagation(); // Evita que se propague el clic dentro de las celdas editables
      });
    });
  });

  loadContractDetails();
});

function toggleDisplay(element, event) {
  if (event) event.stopPropagation();

  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
    element.style.maxHeight = element.scrollHeight + "px";
  } else {
    element.style.maxHeight = "0";
    setTimeout(() => {
      element.style.display = "none";
    });
  }
}

function saveDetails(contractId) {
  const editableCells = document.querySelectorAll(
    `#${contractId} .contract-details td[contenteditable="true"]`
  );
  const padesValue = editableCells[0].innerText;
  const otpValue = editableCells[1].innerText;

  const contractData = {
    pades: padesValue,
    otp: otpValue,
  };

  localStorage.setItem(contractId, JSON.stringify(contractData));
  alert("Detalles guardados con éxito");
}

function loadContractDetails() {
  document.querySelectorAll(".contract-info").forEach((contract) => {
    const contractId = contract.id;
    const storedData = localStorage.getItem(contractId);
    if (storedData) {
      const contractData = JSON.parse(storedData);
      const editableCells = contract.querySelectorAll(
        'td[contenteditable="true"]'
      );
      if (editableCells.length >= 2) {
        editableCells[0].innerText = contractData.pades;
        editableCells[1].innerText = contractData.otp;
      }
    }
  });
}
