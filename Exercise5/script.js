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

//Ad1
const colorParagraphs = () => {
    let colors = ["red", "orange", "green", "blue", "pink"];

    let paragraphs = document.getElementsByTagName("p");

    for (let index = 0; index < paragraphs.length; index++) {
        paragraphs[index].style.color = colors[Math.floor(Math.random() * (colors.length))];
    }
}
//Ad2
const addTitleAttrToParagraphs = () => {
    let paragraphs = document.getElementsByTagName("p");
    for (let index = 0; index < paragraphs.length; index++) {
        let paragraphLength = paragraphs[index].textContent.length;
        paragraphs[index].setAttribute("title", paragraphLength);
    }
}

//Ad3
const addBorders = () => {

}

colorParagraphs();
addTitleAttrToParagraphs();