function hide(element) {
  element.remove();
}

function alertLookingFor(element) {
  alert("You are looking for a " + element.value);
}

function addingPettings(id) {
  const span = document.getElementById(id);
  span.textContent++;
}
