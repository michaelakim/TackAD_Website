$(function() {
  var _overlay = $('#overlay');
  var _uploadFormButton = $('#files-upload');
  var _uploadForm = $('#upload-form');
  var _uploadFormSubmit = $('#upload-file-submit');
  var _uploadFormCancel = $('#upload-file-cancel');
  var _uploadFileURLInput = $('#upload-file-input');

  var _formOpen = false;

  _uploadFormButton.click(function(event) {
    openForm();
  });

  _uploadFormCancel.click(function(event) {
    closeForm();
  });

  _uploadFormSubmit.click(function(event) {
    event.preventDefault();

    if (_uploadFileURLInput.val() !== '') {
      var data = {
        url: _uploadFileURLInput.val()
      };

      $.ajax({
        url: '/api/v1/files',
        type: 'POST',
        data: data,
        success: function() {
          _uploadFileURLInput.val('');
          closeForm();
          window.location.reload(true);
        }
      });
    }
  });

  function openForm() {
    if (!_formOpen) {
      _formOpen = true;
      _overlay.fadeIn(150);
      _uploadForm.fadeIn(150);
    }
  }

  function closeForm() {
    if (_formOpen) {
      _formOpen = false;
      _overlay.fadeOut(100);
      _uploadForm.fadeOut(100);
    }
  }

});
