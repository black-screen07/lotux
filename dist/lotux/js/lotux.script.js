//lotux currency
const currencyInput = document.getElementById('currency-input');

currencyInput.addEventListener('input', (e) => {
 
  let value = e.target.value.replace(/\D/g, '');

  const formatter = new Intl.NumberFormat('fr-FR');
  value = formatter.format(value);

  e.target.value = value;
});

//lotux numero de téléphone
const phoneInput = document.getElementById('phone-input');

phoneInput.addEventListener('input', (e) => {

  let value = e.target.value.replace(/\D/g, '');

  if (value.length > 2) {
    value = `${value.slice(0, 2)} ${value.slice(2)}`;
  }
  if (value.length > 5) {
    value = `${value.slice(0, 5)} ${value.slice(5)}`;
  }
  if (value.length > 8) {
    value = `${value.slice(0, 8)} ${value.slice(8)}`;
  }

  e.target.value = value;
});

//lotux caractere space
const inputField = document.getElementById('gen-input');
const separatorLength = parseInt(inputField.getAttribute('data-separator-length')) || 1;
const maxLength = parseInt(inputField.getAttribute('data-max-length')) || 12;
const separators = document.querySelectorAll('.separator');

inputField.addEventListener('input', (e) => {
  const input = e.target.value.toUpperCase().replace(/-/g, '');
  let formattedInput = '';

  for (let i = 0; i < input.length; i += separatorLength) {
    formattedInput += input.substr(i, separatorLength) + '-';
  }

  formattedInput = formattedInput.slice(0, -1);
  e.target.value = formattedInput;
  updateSeparators(formattedInput);
});

function updateSeparators(formattedInput) {
  separators.forEach((separator, index) => {
    if (formattedInput.length >= (index + 1) * (separatorLength + 1) - 1) {
      separator.style.backgroundColor = '#999';
    } else {
      separator.style.backgroundColor = 'transparent';
    }
  });
}

///////////lotux input file and preview func///////////////
// Fonction pour afficher les images sélectionnées en prévisualisation
function previewImages(event) {
  const fileInput = event.target;
  const imagePreviewContainer = document.getElementById('image-preview-container');

  while (imagePreviewContainer.firstChild) {
    imagePreviewContainer.removeChild(imagePreviewContainer.firstChild);
  }

  const maxFiles = parseInt(fileInput.getAttribute('data-max-files'), 10);

  const files = fileInput.files;
  const numFiles = Math.min(files.length, maxFiles); 
  for (let i = 0; i < numFiles; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = function() {
      const imagePreview = createImagePreview(reader.result, file.name);
      imagePreviewContainer.appendChild(imagePreview);

      setTimeout(() => {
        imagePreview.classList.add('show');
      }, 10);
    };
    reader.readAsDataURL(file);
  }
}

// Fonction pour créer la prévisualisation d'une image
function createImagePreview(src, fileName) {
  const imagePreview = document.createElement('div');
  imagePreview.classList.add('image-preview');

  const image = document.createElement('img');
  image.classList.add('image-thumbnail');
  image.src = src;
  image.alt = fileName;
  imagePreview.appendChild(image);

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.classList.add('delete-button');
  deleteButton.innerHTML = 'x';
  deleteButton.addEventListener('click', function() {
    imagePreview.classList.remove('show');
    setTimeout(() => {
      imagePreview.remove();
    }, 300); 
  });
  imagePreview.appendChild(deleteButton);

  return imagePreview;
}

// Obtenez une référence à l'élément d'entrée de fichier
const fileInput = document.getElementById('file-input');

// Attachez un écouteur d'événements à l'élément d'entrée pour l'événement 'change'
fileInput.addEventListener('change', function(event) {
  previewImages(event);
});

  
