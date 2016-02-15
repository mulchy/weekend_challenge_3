$(document).ready(function() {
  $('#my-form').on('submit', calculate);
  $('#clear').on('click', clear);
});

function calculate(event) {
  var data = readFormData(event, $(this));
  sendData(data);
}

function readFormData(event, $form) {
  var data = {};
  event.preventDefault();

  // read the form data
  var formDataArray = $form.serializeArray();

  // put the data on the values object
  formDataArray.forEach(function(element) {
    data[element.name] = element.value;
  });

  return data;
}

function clear() {
  $form = $('#my-form');
  $form.find('input[type=radio]').prop('checked', false);
  $form.children('input[type=number]').val('');
  $('#answer').text('');
}

function updateDom(data) {
  $('#answer').text('Answer=' + data.result);
  showBeemo();
}

function showBeemo() {
  $('#beemo').fadeIn(3000, function() {
    $(this).fadeOut(3000);
  });
}
function sendData(data) {
  var url = '';
  console.log(data.operation);
  switch (data.operation) {
    case 'add':
      url = '/add';
      break;
    case 'mult':
      url = '/multiply';
      break;
    case 'div':
      url = '/divide';
      break;
    case 'sub':
      url = '/subtract';
      break;
    default:
  }

  $.ajax({
    type: 'POST',
    url: url,
    success: updateDom,
    data: data
  })
}
