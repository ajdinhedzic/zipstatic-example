$(document).ready(function(){
	$("#zip").on('input', function(){
		if ($(this).val().length == 5){
			var res = $.ajax({
				type: "GET",
				url: "http://zip.getziptastic.com/v2/US/" + $(this).val(),
				success: function(data){
					$('#city').val(data.city);
					$('#county').val(data.county);
					$('#state').val(data.state);
					$("#stateShort").val(data.state_short)
					$('#country').val(data.country);
					$('.form-group').removeAttr("hidden");
				}
			});
		}

	});


})