// JS code
(function() {
    $('#get-quotes').on('click', function(e) {
        e.stopPropagation();
        console.log('button');
        $('#modal-bg').removeClass('invisible');
    });

    $('#modal-bg').on('click', function(e) {
        e.stopPropagation();
        if (e.target.id === 'request-form') {
            return;
        }
        $('#modal-bg').addClass('invisible');
    });

    document.getElementById('nav').onclick = function(e) {
        e.stopPropagation();
        if (e.target.tagName === 'A') {
            console.log('nav');
        }
    };
})();
