//modal
        function openModal(img) {
            document.getElementById('modalImage').src = img.src;
            var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
            myModal.show();
        }

//geolocation api

        function initializeMap(lat, lon) {
            var map = L.map('map').setView([lat, lon], 13);

           //api
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            //  marker
            L.marker([lat, lon]).addTo(map)
                .bindPopup('You are here')
                .openPopup();
        }

        document.getElementById('showMapButton').addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var lat = position.coords.latitude;
                    var lon = position.coords.longitude;

                    // Show the map container and initialize the map
                    document.getElementById('map').style.display = 'block';
                    initializeMap(lat, lon);
                }, function() {
                    alert('Unable to retrieve your location');
                });
            } else {
                alert('Geolocation is not supported by this browser');
            }
        });
