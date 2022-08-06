import Swal from "sweetalert2";

const SwAlert = (titleAlert, textAlert, iconAlert) => {
  return Swal.fire({
    title: titleAlert,
    text: textAlert,
    icon: iconAlert,
    confirmButtonText: "Ok",
  });
};

export default SwAlert;
