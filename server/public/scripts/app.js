$(document).ready(function() {
  $('form').on('submit', calculate);
  $('#clear').on('click', clear);
});

function calculate(event) {
  event.preventDefault();

  var formArrayData = $(this).serializeArray();
  var data = {}
  formArrayData.forEach(function(element) {
    data[element.name] = element.value;
  });

  console.log("form contains::: ", formArrayData);
  console.log("data:: ", data);

  var url = '/' + data.operation;

  $.ajax({
    type: 'POST',
    url: url,
    success: updateDom,
    data: data
  });
}

function updateDom(dataFromServer) {
  $('h1').text('Answer= ' + dataFromServer.result);
}

function clear() {
  var $form = $('form');

  $form.find('input[type=number]').val('');
  $form.find('input[type=radio]').prop('checked', false);
  $('h1').text('');
}
