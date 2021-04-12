export const emailSystem = () => {
  const $SYSTEM_FORM = document.getElementById('systemForm');

  if($SYSTEM_FORM) {

    $SYSTEM_FORM.addEventListener('submit', (e) => {
      e.preventDefault();

      let datos = new FormData($SYSTEM_FORM);

      fetch('./email.php', {
        method: 'POST',
        body: datos
      })

      .then(function (response) {
          return response.text();
      }).then(function (text) {
          console.log(text);
          window.open('https://selectoral.com/demo', '_blank')
          location.reload();
      }).catch(function (error) {
          console.error(error);
      });

    })
  }
};
