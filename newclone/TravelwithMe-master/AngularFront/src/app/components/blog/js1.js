console.log('ssss');

$(document).ready(function() {
  $('.privacy-select').material_select();

  $('.chips-initial').material_chip({
    data: [{
      tag: 'Nature',
    }, {
      tag: 'Hiking',
    }, {
      tag: 'Traditional',
    }],
  });


  $('.chips').on('chip.add', function (e, chip) {
    // you have the added chip here
  });

  $('.chips').on('chip.delete', function (e, chip) {
    // you have the deleted chip here
  });

  $('.chips').on('chip.select', function (e, chip) {
    // you have the selected chip here
  });
})
