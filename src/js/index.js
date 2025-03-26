document.addEventListener("DOMContentLoaded", () => {

    function addClass(el, class_name) {
        el.classList.add(class_name);
    }
    function removeClass(el, class_name) {
        el.classList.remove(class_name);
    }
    function toggleClass(el, class_name) {
        el.classList.toggle(class_name);
    }

    if (document.querySelector('input[name="search"]')) {
        const inpSearch = document.querySelector('input[name="search"]');

        let clearBtnInputSearch = document.querySelector('.clear_svg');

        clearBtnInputSearch.addEventListener('click', () => {
            inpSearch.value = "";
            inpSearch.focus();
            addClass(clearBtnInputSearch, 'invise');
        })

        inpSearch.addEventListener('input', () => {
            if (inpSearch.value.length > 0) {
                removeClass(clearBtnInputSearch, 'invise');
            } else {
                addClass(clearBtnInputSearch, 'invise');
            }
        })
    }



    if (document.querySelector(".sect .title")) {
        const titles = document.querySelectorAll(".sect .title");

        titles.forEach((title) => {

            let sect_check = title.closest(".sect"); // Находим родительский .sect
            let cont_check = sect_check.querySelector(".cont"); // Находим .cont внутри .sect

            if (sect_check.classList.contains("active")) {
                // Вычисляем реальную высоту содержимого
                cont_check.style.height = "auto"; // Временно устанавливаем высоту в "auto"
                const height = cont_check.scrollHeight; // Получаем высоту содержимого
                cont_check.style.height = "0"; // Возвращаем высоту к 0 для анимации
                setTimeout(() => {
                    cont_check.style.height = `${height}px`; // Устанавливаем высоту для анимации
                }, 10); // Небольшая задержка для корректной работы браузера
            } else {
                // Анимируем закрытие
                cont_check.style.height = `${cont_check.scrollHeight}px`; // Фиксируем текущую высоту
                setTimeout(() => {
                    cont_check.style.height = "0"; // Уменьшаем высоту до 0
                }, 10); // Небольшая задержка для корректной работы браузера
            }



            if (title.closest('.quest_answer')) {
                sect_check.addEventListener("click", () => {
                    const sect = title.closest(".sect"); // Находим родительский .sect
                    const cont = sect.querySelector(".cont"); // Находим .cont внутри .sect

                    // Переключаем класс active
                    sect.classList.toggle("active");

                    if (sect.classList.contains("active")) {
                        // Вычисляем реальную высоту содержимого
                        cont.style.height = "auto"; // Временно устанавливаем высоту в "auto"
                        const height = cont.scrollHeight; // Получаем высоту содержимого
                        cont.style.height = "0"; // Возвращаем высоту к 0 для анимации
                        setTimeout(() => {
                            cont.style.height = `${height}px`; // Устанавливаем высоту для анимации
                        }, 10); // Небольшая задержка для корректной работы браузера
                    } else {
                        // Анимируем закрытие
                        cont.style.height = `${cont.scrollHeight}px`; // Фиксируем текущую высоту
                        setTimeout(() => {
                            cont.style.height = "0"; // Уменьшаем высоту до 0
                        }, 10); // Небольшая задержка для корректной работы браузера
                    }
                });
            } else {
                title.addEventListener("click", () => {
                    const sect = title.closest(".sect"); // Находим родительский .sect
                    const cont = sect.querySelector(".cont"); // Находим .cont внутри .sect

                    // Переключаем класс active
                    sect.classList.toggle("active");

                    if (sect.classList.contains("active")) {
                        // Вычисляем реальную высоту содержимого
                        cont.style.height = "auto"; // Временно устанавливаем высоту в "auto"
                        const height = cont.scrollHeight; // Получаем высоту содержимого
                        cont.style.height = "0"; // Возвращаем высоту к 0 для анимации
                        setTimeout(() => {
                            cont.style.height = `${height}px`; // Устанавливаем высоту для анимации
                        }, 10); // Небольшая задержка для корректной работы браузера
                    } else {
                        // Анимируем закрытие
                        cont.style.height = `${cont.scrollHeight}px`; // Фиксируем текущую высоту
                        setTimeout(() => {
                            cont.style.height = "0"; // Уменьшаем высоту до 0
                        }, 10); // Небольшая задержка для корректной работы браузера
                    }
                });
            }
        });
    }

    if (document.querySelector('.popupForm')) {
        var popupForm = document.querySelector('.popupForm');
        var overlay = document.querySelector('.overlay');
        var popupCloseBtn = popupForm.querySelector('.close-btn');
        var popupCheck = document.querySelector('.popupCheck')
        var popupCheckCloseBtn = popupCheck.querySelector('.close-btn');

        var codeProduct = popupForm.querySelector('.code');
        var nameProduct = popupForm.querySelector('.name');
        var articleProduct = popupForm.querySelector('.article');
        var priceProduct = popupForm.querySelector('.price_num');
        var length_product_num = popupForm.querySelector('[name="length_product"]');

        popupCloseBtn.addEventListener('click', () => {
            removeClass(overlay, 'open');
            removeClass(popupForm, 'open');
            removeClass(popupCheck, 'open');
        })
        popupCheckCloseBtn.addEventListener('click', () => {
            removeClass(overlay, 'open');
            removeClass(popupForm, 'open');
            removeClass(popupCheck, 'open');
        })
        overlay.addEventListener('click', () => {
            document.querySelectorAll('.open').forEach(el => {
                removeClass(el, 'open');
            })
        })

        if (document.querySelector('.btn_pop')) {
            const btnPopAdd = document.querySelectorAll('.btn_pop')

            btnPopAdd.forEach(element => {
                element.addEventListener('click', () => {
                    addClass(overlay, 'open');
                    addClass(popupForm, 'open');
                })
            });
        }

    }

    if (document.querySelector('.form-all')) {
        const formSect = document.querySelectorAll(".form-all");
        const titlePopupCheck = popupCheck.querySelector('h2');

        const catalog_card = document.querySelectorAll('.catalog_card');

        catalog_card.forEach(card => {
            let buttonCard = card.querySelector('.button');


            buttonCard.addEventListener('click', () => {

                let cardCode = buttonCard.closest('.card').getAttribute('data-code');
                let cardName = buttonCard.closest('.card').getAttribute('data-name');
                let cardArticle = buttonCard.closest('.card').getAttribute('data-article');
                let cardPrice = buttonCard.closest('.card').getAttribute('data-price');

                if (cardCode.trim()) {
                    codeProduct.textContent = cardCode.trim();
                } else {
                    codeProduct.textContent = "-";
                }

                if (cardName.trim()) {
                    nameProduct.textContent = cardName.trim();
                } else {
                    nameProduct.textContent = "-";
                }

                if (cardArticle.trim()) {
                    articleProduct.textContent = cardArticle.trim();
                } else {
                    articleProduct.textContent = "-";
                }

                if (cardPrice.trim()) {
                    priceProduct.textContent = cardPrice.trim();
                } else {
                    priceProduct.textContent = "-";
                }

                length_product_num.value = '1';
                
                addClass(overlay, 'open');
                addClass(popupForm, 'open');
            })
        });

        formSect.forEach(formSect => {
            let form = formSect.querySelector("form");
            let formBtn = formSect.querySelector("[type='submit']");
            let nameInp = formSect.querySelector("[name='name']");
            let phoneInp = formSect.querySelector("[name='phone']");



            let length_product = document.querySelector("[name='length_product']");
            let minusBtn = document.getElementById("minus-btn");
            let plusBtn = document.getElementById("plus-btn");

            let select_cont = formSect.querySelector('.selec_cont');
            let select = select_cont.querySelector('select');

            let methodPickup = formSect.querySelector('.method_name.pickup');
            let methodNoPickup = formSect.querySelector('.method_name.no-pickup');

            if (methodNoPickup.classList.contains('active')) {
                removeClass(select_cont, 'invise');
            }

            methodPickup.addEventListener('click', () => {
                addClass(select_cont, 'invise');
                removeClass(methodNoPickup, 'active');
                addClass(methodPickup, 'active');
            })
            methodNoPickup.addEventListener('click', () => {
                removeClass(select_cont, 'invise');
                removeClass(methodPickup, 'active');
                addClass(methodNoPickup, 'active');
            })

            let selectedValue = '';
            let selectedText = '';

            select.addEventListener('change', (event) => {
                selectedValue = event.target.value;
                selectedText = event.target.options[event.target.selectedIndex].text;
                checkSelect();
            })

            function checkSelect() {
                if (methodNoPickup.classList.contains('active')) {
                    if (!selectedValue) {
                        addClass(select, 'err');
                        formBtn.disabled = true;
                        return false;
                    } else {
                        removeClass(select, 'err');
                        formBtn.disabled = false;
                        return true;
                    }
                } else {
                    removeClass(select, 'err');
                    formBtn.disabled = false;
                    return true;
                }
            }

            function validateValue(value) {
                let num = parseInt(value, 10); // Преобразуем значение в число
                if (isNaN(num)) num = 1; // Если значение некорректно, устанавливаем 1
                if (num < 1) num = 1; // Минимальное значение — 1
                if (num > 999) num = 999; // Максимальное значение — 999
                return num;
            }

            length_product.addEventListener("input", () => {
                length_product.value = validateValue(length_product.value);
            });

            // Обработчик кнопки "минус"
            minusBtn.addEventListener("click", () => {
                let currentValue = parseInt(length_product.value, 10);
                length_product.value = validateValue(currentValue - 1); // Уменьшаем значение на 1
            });

            // Обработчик кнопки "плюс"
            plusBtn.addEventListener("click", () => {
                let currentValue = parseInt(length_product.value, 10);
                length_product.value = validateValue(currentValue + 1); // Увеличиваем значение на 1
            });

            window.addEventListener("DOMContentLoaded", function () {
                [].forEach.call(document.querySelectorAll("[name='phone']"), function (input) {
                    var keyCode;
                    function mask(event) {
                        event.keyCode && (keyCode = event.keyCode);
                        var pos = this.selectionStart;
                        if (pos < 3) event.preventDefault();
                        var matrix = "+7 (___) ___ ____",
                            i = 0,
                            def = matrix.replace(/\D/g, ""),
                            val = this.value.replace(/\D/g, ""),
                            new_value = matrix.replace(/[_\d]/g, function (a) {
                                return i < val.length ? val.charAt(i++) : a
                            });
                        i = new_value.indexOf("_");
                        if (i != -1) {
                            i < 5 && (i = 3);
                            new_value = new_value.slice(0, i)
                        }
                        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                            function (a) {
                                return "\\d{1," + a.length + "}"
                            }).replace(/[+()]/g, "\\$&");
                        reg = new RegExp("^" + reg + "$");
                        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                            this.value = new_value;
                        }
                        if (event.type == "blur" && this.value.length < 5) {
                            this.value = "";
                        }
                    }

                    input.addEventListener("input", mask, false);
                    input.addEventListener("focus", mask, false);
                    input.addEventListener("blur", mask, false);
                    input.addEventListener("keydown", mask, false);

                });
            });

            $(function () {
                $(nameInp).keyup(function () {
                    sergey = $(this).val().toLowerCase(), spout = 'http://,https,url,.ru,.com,.net,.tk,php,.ucoz,www,.ua,.tv,.info,.org,.su,.ру,.су,.ком,.инфо,//'.split(',');
                    for (litvinov = 0; litvinov < spout.length; litvinov++) {
                        if (sergey.search(spout[litvinov]) != -1) {
                            $(this).val(sergey.replace(spout[litvinov], '[Запрещено]'));
                            return true;
                        }
                    }
                });
            });

            function checkInputsValid(input, num) {
                if (input.value.length < num) {
                    input.parentNode.classList.add("err");
                    formBtn.disabled = true;
                    return false;
                } else {
                    input.parentNode.classList.remove("err");

                    return true;
                }
            }

            let check;

            function addLisInput(input, num) {
                checkInputsValid(input, num);
                input.addEventListener('input', check = () => {
                    checkInputsValid(input, num);
                    if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17)) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisInput(input) {
                input.removeEventListener('input', check)
            }

            function clearInputs(input) {
                input.value = '';
            }

            function handleTextGood() {
                titlePopupCheck.textContent = 'Спасибо за заявку! Скоро с вами свяжется наш консультант!';
                removeClass(formSect, 'open');
                addClass(overlay, 'open')
                addClass(popupCheck, 'open')
                clearInputs(nameInp);
                clearInputs(phoneInp);
                setTimeout(() => {
                    document.querySelectorAll('.open').forEach(el => {
                        removeClass(el, 'open');
                    })
                }, 3500);
            }

            function handleTextNoGood() {
                titlePopupCheck.textContent = 'Повторите попытку позже';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            function handleTextError() {
                titlePopupCheck.textContent = 'Что-то пошло не так';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                removeLisInput(nameInp);
                removeLisInput(phoneInp);

                addLisInput(nameInp, 1);
                addLisInput(phoneInp, 17);

                checkSelect();

                if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17) && checkSelect()) {
                    // grecaptcha.ready(function () {
                    //     grecaptcha.execute('6Lfk9qspAAAAALXnyJqhAd6kX-ZFapXhfIN0DmQ-', { action: 'submit' }).then(function (token) {
                    //         let formData = new FormData();
                    //         formData.append('name', nameInp.value);
                    //         formData.append('phone', phoneInp.value);
                    //         formData.append('token', token);
                    //         fetch('/local/templates/main/tools/send.php', {
                    //             method: 'POST',
                    //             body: formData,
                    //         })
                    //             .then((res) => {
                    //                 return res.json();
                    //             })
                    //             .then(result => {
                    //                 if (result > 0.5) {
                    //                     handleTextGood();
                    //                 } else {
                    //                     handleTextNoGood();
                    //                 }
                    //             })
                    //             .catch((err) => {
                    //                 handleTextError();
                    //                 console.log(err);
                    //             })
                    //     });
                    // });
                    handleTextGood();
                }
            })
        });
    }
});
