const viewContactModal = document.getElementById("my_modal_2");

function openContactModal() {
  viewContactModal.showModal();
}

// load contact data modal
async function loadContactdata(id, app_url) {
  try {
    const data = await (await fetch(`${app_url}api/contacts/${id}`)).json();
    document.querySelector("#contact_image").src = data.contactImage;
    document.querySelector("#contact_name").innerHTML = data.name;
    document.querySelector("#contact_email").innerHTML = data.email;
    document.querySelector("#contact_phone").innerHTML = data.phoneNumber;
    document.querySelector("#contact_address").innerHTML = data.address;
    document.querySelector("#contact_description").innerHTML = data.description;
    document.querySelector("#contact_website").innerHTML = data.websiteLink;
    document.querySelector("#contact_linkedIn").innerHTML = data.linkedInLink;
    openContactModal();
  } catch (error) {
    console.log("Error: ", error);
  }
}

// delete contact
async function deleteContact(id, app_url) {
  Swal.fire({
    title: "Etes-vous sûre de vouloir supprimer ce contact ?",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Annuler",
    confirmButtonText: "Supprimer",
    buttonsStyling: false,
    customClass: {
      confirmButton:
        "px-4 py-2 bg-red-600 font-bold text-white rounded hover:bg-red-700 mr-8",
      cancelButton:
        "px-4 py-2 bg-green-600 font-bold text-white rounded hover:bg-green-700",
    },
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      const url = `${app_url}user/contacts/delete/` + id;
      window.location.replace(url);
    }
  });
}
