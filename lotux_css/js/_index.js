// Code JavaScript pour permettre le déplacement des éléments
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.smart-layout');

  container.addEventListener('dragstart', handleDragStart);
  container.addEventListener('dragover', handleDragOver);
  container.addEventListener('drop', handleDrop);

  let draggedElement;
  let dropZone;

  // Gestionnaire d'événement pour le début du glisser-déposer
  function handleDragStart(event) {
    draggedElement = event.target;
    event.dataTransfer.setData('text/plain', '');
  }

  // Gestionnaire d'événement pour le survol pendant le glisser-déposer
  function handleDragOver(event) {
    event.preventDefault();
    dropZone = event.target;
    if (draggedElement !== dropZone && container.contains(dropZone)) {
      const items = container.querySelectorAll('.item');
      items.forEach(item => item.classList.remove('dragged-over'));
      dropZone.classList.add('dragged-over');
    }
  }

  // Gestionnaire d'événement pour le dépôt lors du glisser-déposer
  function handleDrop(event) {
    event.preventDefault();
    if (draggedElement && draggedElement !== container && container.contains(draggedElement)) {
      if (draggedElement !== dropZone) {
        const temp = document.createElement('div');
        dropZone.parentNode.insertBefore(temp, dropZone);
        draggedElement.parentNode.insertBefore(dropZone, draggedElement);
        temp.parentNode.insertBefore(draggedElement, temp);
        temp.remove();
      }
    }
    const items = container.querySelectorAll('.item');
    items.forEach(item => item.classList.remove('dragged-over'));
  }
});
