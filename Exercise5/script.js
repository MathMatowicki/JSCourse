/*
Dokument składa się z pewnej liczby elementów <p>.

1.Tekst każdego z nich pokoloruj na losowy kolor ze zdefiniowanej uprzednio puli (np. "red", "orange", "green", "blue" itd.).

2.Do każdego paragrafu dodaj atrybut title (podpowiedź pojawiająca się po najechaniu myszą) zawierający liczbę jego znaków.

3.Po kliknięciu w dowolny paragraf, jest on otaczany zieloną ramką. Paragraf tuż za nim (o ile ten nie był ostatni) 
otoczony zostaje ramką niebieską, a ten przed nim - pomarańczową. Jeśli kliknięty element był parzysty, zostaje wyświetlony
 na jasnoszarym tle, a jeśli nieparzysty - na ciemnoszarym. Po kliknięciu w jakikolwiek inny element, poprzednie wracają do stanu pierwotnego.

4. Przed każdym paragrafem dodaj nagłówek o treści "paragraf 1", "paragraf 2" itd.

5. Kliknięcie w nagłówek ukrywa treść poniższego paragrafu. Ponowne kliknięcie - odłania ją.
Dodaj pole tekstowe pozwalające na dodanie kolejnego paragrafu. Zadbaj, aby wszelkie zachowania z powyższych punktów nadal działały.
*/
window.onload = function () {

    const paragraphs = document.getElementsByTagName("p");
    //Ad1
    const colorParagraphs = () => {
        let colors = ["red", "orange", "green", "blue", "pink"];


        for (let index = 0; index < paragraphs.length; index++) {
            paragraphs[index].style.color = colors[Math.floor(Math.random() * (colors.length))];
        }
    }
    //Ad2
    const addTitleAttrToParagraphs = () => {
        for (let index = 0; index < paragraphs.length; index++) {
            let paragraphLength = paragraphs[index].textContent.length;
            paragraphs[index].setAttribute("title", paragraphLength);
        }
    }

    //Ad3
    for (let index = 0; index < paragraphs.length; index++) {
        paragraphs[index].addEventListener("click", function () {
            for (let index = 0; index < paragraphs.length; index++) {
                paragraphs[index].style.border = "none";
                paragraphs[index].style.background = "none";
            }
            paragraphs[index].style.border = "medium solid green";
            paragraphs[index].style.background = "lightgray";
            if (index % 2 == 0) {
                paragraphs[index].style.background = "darkgray";
            }
            if (index > 0) {
                paragraphs[index - 1].style.border = "medium solid orange";

            }
            if (index < paragraphs.length - 1) {
                paragraphs[index + 1].style.border = "medium solid blue";
            }
        })
    }


    //Ad4
    const addHeaders = () => {

        for (let index = 0; index < paragraphs.length; index++) {
            let header = document.createElement('h2');
            const validIndex = index + 1;
            header.innerHTML = "Paragraph " + validIndex;
            paragraphs[index].before(header);
            header.append(paragraphs[index]);
        }
    }
    //Ad1
    colorParagraphs();
    //Ad2
    addTitleAttrToParagraphs();
    //Ad4
    addHeaders();

    //Ad5
    let show = (elem) => {
        elem.style.display = 'block';
    }

    const hide = (elem) => {
        elem.style.display = 'none';
    }


    const headers = document.getElementsByTagName("h2");
    for (let index = 0; index < headers.length; index++) {
        headers[index].addEventListener("click", function (e) {
            if (e.target !== this) return;
            if (headers[index].childNodes[1].style.display == "none") {
                show(headers[index].childNodes[1]);
            } else {
                hide(headers[index].childNodes[1])
            }
        })
    }
    //Ad6
    let lastHeader = headers[headers.length - 1]




    const makeInputForm = (lastChild, headersLength) => {
        let form = document.createElement('div');
        let input = document.createElement('input');
        let button = document.createElement('button');
        input.value = "Try this!";
        input.type = "txt";
        button.innerText = 'Add paragraph';
        form.append(input);
        form.append(button);
        lastChild.after(form);

        button.addEventListener("click", function () {
            let para = document.createElement('p');
            let header = document.createElement('h2');
            header.innerHTML = "Paragraph " + headersLength;
            para.innerText = document.getElementsByTagName("input")[0].value;
            header.append(para);
            lastChild.after(header);
        })
    }


    makeInputForm(lastHeader, headers.length);
};