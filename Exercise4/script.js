/*Ćwiczenie 4 - obiekty


W JS stwórz program definiujący Listę towarów wraz z prodkutami. 

Produkty powinny być opisane minimum następującymi właściwościami: (id, nazwa, model, cena, zużycieEnergii (kWh)). 

Każdy produkt powinien posiadać następujące metody:

- koszt(), która zwraca wartość cenę prodkutu.

- kosztEnergii(), która zwraca koszt zużycia energii danego produktu przy założenej cenie energii (zmienna w programie) i zużyciu produktu.

- wiekProduktu(), która zwraca jego wiek na podstawie podanego rocznika.

- wiekProduktuLata(), która zwróci odpowiednio 1 rok, 2 lata, 3 lata, 4 lata, 5 lat, 6 lat, itd. w zależności od wieku zwróconego w metodzie wiekProduktu()

- konstruktor

ListaTowarów zaś powinna zwierać metody:

- wypiszProdukt(idProduktu)

- wypiszWszystkieProdukty()

- dodajProdukt(produkt) - rzuca wyjątek jeśli produkt o tym id już jest na liście

- zmieńProdukt(idProduktu, produkt) - znajduje produkt o tym ID i podmienia wszystkie jego składowe wartościami z obiektu produkt



Dodatkowo zdefiniuj dwa szczegółowe typy ListyTowarów mianowicie Magazyn oraz Sklep, które rozszerzają ListeTowarów.

Magazyn będzie zawierał metodę dodajProdukt(produkt, ilość), która oprócz samego produktu będzie zawierała ilość sztuk, które zostają dane. Czyli Magazyn będzie dodatkowo będzie zawierał stan magazynowy danego produktu.

W przypadku Magazynu będzie możliwość zabrania produktu tj. zwrócenia kopii obiektu Produkt oraz zmniejszenia odpowiednio stanu magazynowego.

 

Sklep zaś będzie zwykłą listą towarów, które można wyśweitlić lub dodawać za pomocą metod: 

- dodajProdukt(nazwa, model, cena, zużycieEnergii) - id produktu powinno być generowane automatycznie

- dodajProdukt(idProduktu, nazwa, model, cena, zużycieEnergii



Na koniec dodaj zamówienie, które będzie umożliwiało dodanie produktów do zamówienia (po ID istniejącego produktu) oraz metodę zrealizujZamowienie, ktora to usuwa produkt odpowiedniej ilości sztuk z magazynu z którego pochodzi. */

class Product {
    id;
    
    constructor()
}
class ListofGoods {


}