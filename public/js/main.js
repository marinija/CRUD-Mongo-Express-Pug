$(document).ready(function() {
    $('.delete-article').on('click', function(e) {
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type: 'DELETE',
            url: '/article/' + id,
            success: function(response) {
                alert('Deteleting Article');
                window.location.href = '/';
            },
            error: function(err) {
                console.log(err);
            }
        })
    });
});