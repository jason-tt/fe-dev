// JS code
(function() {
    $('#get-quotes').on('click', function(e) {
        e.stopPropagation();
        console.log('button');
        $('#modal-bg').removeClass('invisible');
    });

    $('#modal-bg').on('click', function(e) {
        e.stopPropagation();
        if (e.target.id !== 'modal-bg') {
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

// Angular app
(function() {
  var requestForm = angular.module('requestForm', []);

  // Progress bar directive
  requestForm.directive('progressBar', function() {
    return {
      link: function(scope, elem, attrs) {
        scope.$watch('progress', function(val) {
          var line = angular.element(angular.element(elem).find('div')[1]);
          console.log(line);
          line.css('width', (val/attrs.max*100)+'%');
        })
      },
      template: `
      <div class="progressBar">
        <div class="progressLineWrapper">
          <div class="progressLine"></div>
        </div>
      </div>
      `,
      restrict: 'EA'
    };
  });
})();
