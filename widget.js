// widget.js
(function() {
    // Inyectar el HTML del modal y el formulario en el cuerpo del documento
    const modalHTML = `
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h1>Formulario para Registrar Secciones</h1>
          <form id="sectionForm">
            <label for="sectionId">ID:</label>
            <input type="text" id="sectionId" name="sectionId" required><br><br>
            <label for="sectionTitle">Title:</label>
            <input type="text" id="sectionTitle" name="sectionTitle" required><br><br>
            <label for="sectionContent">Content:</label><br>
            <textarea id="sectionContent" name="sectionContent" rows="4" cols="50" required></textarea><br><br>
            <button type="submit">Registrar Sección</button>
          </form>
          <h2>Secciones Registradas</h2>
          <ul id="registeredSections"></ul>
          <button id="downloadJson">Descargar JSON</button>
          <button id="copyToClipboard">Copiar al Portapapeles</button>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  
    // Inyectar el botón para abrir el modal en el cuerpo del documento
    const openModalButton = document.createElement('button');
    openModalButton.id = 'openModal';
    openModalButton.textContent = 'Agregar Sección';
    document.body.appendChild(openModalButton);
  
    // Estilos para el modal
    const style = document.createElement('style');
    style.textContent = `
      .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);
      }
  
      .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 600px;
      }
  
      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
  
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);
  
    const sectionsData = JSON.parse(localStorage.getItem('sectionsData')) || [];
    const sectionForm = document.getElementById('sectionForm');
    const registeredSectionsList = document.getElementById('registeredSections');
    const downloadJsonButton = document.getElementById('downloadJson');
    const copyToClipboardButton = document.getElementById('copyToClipboard');
    let editIndex = -1;
  
    function saveToLocalStorage() {
      localStorage.setItem('sectionsData', JSON.stringify(sectionsData));
    }
  
    function renderSections() {
      registeredSectionsList.innerHTML = '';
      sectionsData.forEach((section, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          ID: ${section.id}, Title: ${section.title}, Content: ${section.content}
          <button onclick="editSection(${index})">Editar</button>
          <button onclick="deleteSection(${index})">Borrar</button>
        `;
        registeredSectionsList.appendChild(listItem);
      });
    }
  
    sectionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const sectionId = document.getElementById('sectionId').value;
      const sectionTitle = document.getElementById('sectionTitle').value;
      const sectionContent = document.getElementById('sectionContent').value;
  
      if (editIndex === -1) {
        sectionsData.push({ id: sectionId, title: sectionTitle, content: sectionContent });
      } else {
        sectionsData[editIndex] = { id: sectionId, title: sectionTitle, content: sectionContent };
        editIndex = -1;
      }
  
      saveToLocalStorage();
      renderSections();
      sectionForm.reset();
    });
  
    window.editSection = function (index) {
      const section = sectionsData[index];
      document.getElementById('sectionId').value = section.id;
      document.getElementById('sectionTitle').value = section.title;
      document.getElementById('sectionContent').value = section.content;
      editIndex = index;
      showModal();
    }
  
    window.deleteSection = function (index) {
      sectionsData.splice(index, 1);
      saveToLocalStorage();
      renderSections();
    }
  
    downloadJsonButton.addEventListener('click', () => {
      const jsonData = JSON.stringify(sectionsData);
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sectionsData.json';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
  
    copyToClipboardButton.addEventListener('click', () => {
      const jsonData = sectionsData.map(section => JSON.stringify(section)).join(',');
      navigator.clipboard.writeText(jsonData).then(() => {
        alert('Datos copiados al portapapeles');
      }).catch(err => {
        console.error('Error al copiar los datos: ', err);
      });
    });
  
    document.addEventListener('DOMContentLoaded', renderSections);
  
    // Modal functionality
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("openModal");
    const span = document.getElementsByClassName("close")[0];
  
    btn.onclick = function () {
      showModal();
    }
  
    span.onclick = function () {
      hideModal();
    }
  
    window.onclick = function (event) {
      if (event.target == modal) {
        hideModal();
      }
    }
  
    function showModal() {
      modal.style.display = "block";
    }
  
    function hideModal() {
      modal.style.display = "none";
      sectionForm.reset();
      editIndex = -1;
    }
  })();
  