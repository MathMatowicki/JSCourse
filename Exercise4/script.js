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
    constructor(id, name, type, price, energyConsumption, yearProduction) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.energyConsumption = energyConsumption;
        this.yearProduction = yearProduction;
    }
    get price() {
        return this.price;
    }
    get costOfEnergy() {
        const priceOfEnergy = 2.22;
        return this.energyConsumption * priceOfEnergy;
    }

    get ageOfProduct() {
        return new Date().getFullYear() - this.yearProduction;
    }
    get ageOfProductYears() {
        const gap = this.ageOfProduct();
        if (gap == 1) return gap + " year"
        return gap + " years";
    }

    set id(id) {
        this.id = id;
    }

    set name(name) {
        this.name = name;
    }
    set type(type) {
        this.type = type;
    }
    set price(price) {
        this.price = price;
    }
    set energyConsumption(energyConsumption) {
        this.energyConsumption = energyConsumption;
    }
    set yearProduction(yearProduction) {
        this.yearProduction = yearProduction;
    }
}
class ListOfGoods {
    products = [];

    showProduct(id) {
        return this.products.filter(Product => Product.id = id);
    }

    showAllProducts() {
        return this.products;
    }

    hasId(product) {
        return this.products.some(pro => pro.id == product.id) ? true : false;
    }

    addProduct(product) {
        if (!hasId) {
            this.products.push(product);
        }
    }

    changeProduct(id, product) {
        if (this.hasId(product)) {
            const indexOfProduct = this.products.findIndex((el) => el == id);
            if (indexOfProduct >= 0) {
                this.products[indexOfProduct].id = product.id;
                this.products[indexOfProduct].name = product.name;
                this.products[indexOfProduct].type = product.type;
                this.products[indexOfProduct].price = product.price;
                this.products[indexOfProduct].energyConsumption = product.energyConsumption;
                this.products[indexOfProduct].yearProduction = product.yearProduction;
            }
        }
    }
}

class Shop extends ListOfGoods {

}
class Warehouse extends ListOfGoods {

}
