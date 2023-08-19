import Swal from 'sweetalert2';

export function showErrorAlert(message) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
    });
  }
  
 export function showSuccessAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Item creado con exito.',
    });
  }