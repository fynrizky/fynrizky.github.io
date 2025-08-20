/* C* */
      const scriptURL = 'https://script.google.com/macros/s/AKfycbw8j3M6rg2Sgnwc4W9S8Vyjorn8v4jwPANO-XYVaEU2kX3UwBcGxNj2SJQYMzTx0VWs/exec';
      const form = document.forms['rizky-contact-form'];
      
      const btnSend = document.querySelector('.btn-send');
      const btnLoad = document.querySelector('.btn-load');
      const myAlert = document.querySelector('.my-alert');

      form.addEventListener('submit', e => {
        e.preventDefault();
        // ketika tombol submit di klik
        // tampilkan tombol load hilangkan tombol kirim
        btnLoad.classList.toggle('d-none'); /* cari elemen btnLoading liat di daftar class ada tidak class yg namanya d-none klo ada ilangin klo ga ada tambahin  */
        btnSend.classList.toggle('d-none'); /* cari elemen btnLoading liat di daftar class ada tidak class yg namanya d-none klo ada ilangin klo ga ada tambahin  */
        
      setTimeout(function(){
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          // tampilkan tombol kirim hilangkan tombol loading
            btnLoad.classList.toggle('d-none'); /* cari elemen btnLoading liat di daftar class ada tidak class yg namanya d-none klo ada ilangin klo ga ada tambahin  */
            btnSend.classList.toggle('d-none'); /* cari elemen btnLoading liat di daftar class ada tidak class yg namanya d-none klo ada ilangin klo ga ada tambahin  */
            // tampil alert
            myAlert.classList.toggle('d-none');
            // sweet alert 2
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Pesan Telah Di kirim !!',
              text: 'Data sudah diterima, Terima kasih !!', 
              showConfirmButton: false,
              timer: 5000
            });
            // reset form contactnya
            form.reset();
            console.log('Success!', response)
          })
          .catch(error => console.error('Error!', error.message))
        }, 30000/2);
      });