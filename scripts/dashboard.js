document.addEventListener('DOMContentLoaded', () => {
   
    const geologicoCard = document.getElementById('geologico-card');
    const geologicoForm = document.getElementById('geologico-form');
    geologicoCard.addEventListener('click', (event) => {
      toggleDisplay(geologicoForm, event);
    });
  
    const runtCard = document.getElementById('runt-card');
    const runtInfoContainer = document.getElementById('runt-info-container');
    runtCard.addEventListener('click', (event) => {
      toggleDisplay(runtInfoContainer, event);
    });
  
    document.querySelectorAll('.contract-info').forEach(contract => {
      const details = contract.querySelector('.contract-details');
      contract.addEventListener('click', (event) => {
        toggleDisplay(details, event);
      });
    });
  
    loadContractDetails();
  });
  
  function toggleDisplay(element, event) {
    if (event) event.stopPropagation(); 
  
    if (element.style.display === 'none' || element.style.display === '') {
      element.style.display = 'block';
      element.style.maxHeight = element.scrollHeight + "px";
    } else {
      element.style.maxHeight = '0';
      setTimeout(() => {
        element.style.display = 'none';
      }, 300); 
    }
  }
  
  function saveDetails(contractId) {
    const editableCells = document.querySelectorAll(`#${contractId} .contract-details td[contenteditable="true"]`);
    const padresValue = editableCells[0].innerText;
    const otpValue = editableCells[1].innerText;
  
   
    const contractData = {
      padres: padresValue,
      otp: otpValue
    };
  
    
    localStorage.setItem(contractId, JSON.stringify(contractData));
  
    
    alert('Detalles guardados con éxito');
  }
  
  function loadContractDetails() {
    document.querySelectorAll('.contract-info').forEach(contract => {
      const contractId = contract.id;
      const storedData = localStorage.getItem(contractId);
      if (storedData) {
        const contractData = JSON.parse(storedData);
        const editableCells = contract.querySelectorAll('td[contenteditable="true"]');
        if (editableCells.length >= 2) {
          editableCells[0].innerText = contractData.padres;
          editableCells[1].innerText = contractData.otp;
        }
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadContractDetails);
  