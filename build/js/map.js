document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#map')) {
        ymaps.ready(init);

        function init() {
            // Создаем SVG-иконку
            var svgIcon = `<svg width="116px" height="116px" viewBox="-1.28 -1.28 18.56 18.56" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00965E"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" fill="#00965E"></path> </g></svg>`;

            // Создаем карту
            var myMap = new ymaps.Map("map", {
                center: [61.268829, 73.412688], // Москва
                zoom: 14,
                controls: []
            }, {
                // Устанавливаем черно-белую палитру
                geoObjectOpenBalloonIconLayout: "default#image",
                suppressMapOpenBlock: true
            });

            // Добавляем палитру для черно-белого отображения
            // myMap.options.set('background', '#ffffff');
            // myMap.options.set('suppressObsoleteBrowserNotification', true);
            // myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';

            // Создаем метку с SVG-иконкой
            var myPlacemark = new ymaps.Placemark([61.268829, 73.412688], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'data:image/svg+xml;base64,' + btoa(svgIcon),
                iconImageSize: [50, 50],
                iconImageOffset: [-25, -50]
            });

            // Добавляем метку на карту
            myMap.geoObjects.add(myPlacemark);
        }
    }
})