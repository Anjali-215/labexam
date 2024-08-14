
        function openModal(img) {
            document.getElementById('modalImage').src = img.src;
            var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
            myModal.show();
        }

