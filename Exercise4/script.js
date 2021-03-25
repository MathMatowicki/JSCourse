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

Magazyn będzie zawierał metodę dodajProdukt(produkt, ilość), która oprócz samego produktu będzie zawierała ilość sztuk, które zostają dane. 
Czyli Magazyn będzie dodatkowo będzie zawierał stan magazynowy danego produktu.

W przypadku Magazynu będzie możliwość zabrania produktu tj. zwrócenia kopii obiektu Produkt oraz zmniejszenia odpowiednio stanu magazynowego.

Sklep zaś będzie zwykłą listą towarów, które można wyśweitlić lub dodawać za pomocą metod: 

- dodajProdukt(nazwa, model, cena, zużycieEnergii) - id produktu powinno być generowane automatycznie

- dodajProdukt(idProduktu, nazwa, model, cena, zużycieEnergii)

Na koniec dodaj zamówienie, które będzie umożliwiało dodanie produktów do 
zamówienia (po ID istniejącego produktu) oraz metodę zrealizujZamowienie,
ktora to usuwa produkt odpowiedniej ilości sztuk z magazynu z którego pochodzi. */

class Product {
    constructor(id, name, type, price, energyConsumption, yearProduction) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.energyConsumption = energyConsumption;
        this.yearProduction = yearProduction;
        this.count = 1;
    }

    set setId(id) {
        this.id = id;
    }
    set setName(name) {
        this.name = name;
    }
    set setType(type) {
        this.type = type;
    }
    set setPrice(price) {
        this.price = price;
    }
    set setEnergyConsumption(energyConsumption) {
        this.energyConsumption = energyConsumption;
    }
    set setYearProduction(yearProduction) {
        this.yearProduction = yearProduction;
    }
    set setCount(count) {
        this.count = count;
    }

    get getId() {
        return this.id;
    }
    get getPrice() {
        return this.price;
    }
    get getCostOfEnergy() {
        const priceOfEnergy = 2.22;
        return this.energyConsumption * priceOfEnergy;
    }
    get getAgeOfProduct() {
        return new Date().getFullYear() - this.yearProduction;
    }
    get getAgeOfProductInYears() {
        const gap = this.ageOfProduct();
        if (gap == 1) return gap + " year"
        return gap + " years";
    }
    get getCount() {
        return this.count;
    }
}
class ListOfGoods {
    products = [];

    constructor(products) {
        this.products = products;
    }

    showProduct(id) {
        return this.products.filter(Product => Product.id = id);
    }

    showAllProducts() {
        return this.products;
    }

    hasId(product) {
        return this.products.some(pro => pro.id == product.id);
    }

    addProduct(product) {
        if (!this.hasId(product)) {
            this.products.push(product);
        } else {
            console.error("Product with same id exist on list");
        }
    }

    changeProduct(id, product) {
        if (this.hasId(product)) {
            const indexOfProduct = this.products.findIndex((el) => el == id);
            if (indexOfProduct >= 0) {
                this.products[indexOfProduct].setId = product.id;
                this.products[indexOfProduct].setName = product.name;
                this.products[indexOfProduct].setType = product.type;
                this.products[indexOfProduct].setPrice = product.price;
                this.products[indexOfProduct].setEnergyConsumption = product.energyConsumption;
                this.products[indexOfProduct].setYearProduction = product.yearProduction;
            }
        }
    }
}

class Shop extends ListOfGoods {
    constructor(prodcuts) {
        super(prodcuts);
    }
    hasName(name) {
        return this.products.some(pro => pro.name == name);
    }

    addProduct(name, type, price, energyConsumption, yearProduction) {
        if (this.hasName(name)) {
            console.error("Product with that name is already in the shop");
        } else {
            let newId = Math.max(...this.products.map((product) => product.id)) + 1;
            this.products.push(new Product(newId, name, type, price, energyConsumption, yearProduction));
        }
    }

    addProduct(id, name, type, price, energyConsumption, yearProduction) {
        if (this.hasId) {
            console.error("Product with same id exist in shop");
        } else {
            this.products.push(new Product(id, name, type, price, energyConsumption, yearProduction));
        }
    }
}



class Warehouse extends ListOfGoods {
    count = 1;
    constructor(products) {
        super(products);
    }

    addProduct(product, count) {
        if (!this.hasId(product)) {
            product.setCount = count;
            this.prodcuts.push(product)
        } else {
            const indexOfProduct = this.products.findIndex((el) => el == product.id);
            this.products[indexOfProduct].setCount += count;
        }
    }

    moveProductFromMagazine(product) {

        if (this.hasId(product)) {
            const indexOfProduct = this.products.findIndex((el) => el == product.id);
            this.products[indexOfProduct].setCount = this.products[indexOfProduct].getCount - product.getCount;
        } else {
            console.error("There is no such product in Magazine");
            return null;
        }
        return this.showProduct(product.id)
    }

}

let p1 = new Product(1, "Redmi 9", "telephone", 500.99, 7.3, 2020);
let p2 = new Product(2, "Redmi 10", "telephone", 800.99, 7.8, 2020);
let p3 = new Product(3, "Redmi X", "telephone", 1500.99, 8.1, 2021);
let p4 = new Product(1, "Redmi 8", "telephone", 300.99, 7, 2018);

let products = new ListOfGoods([p1]);

products.addProduct(p1);
products.addProduct(p2);
products.addProduct(p3);
products.addProduct(p4);

let warehouse = new Warehouse([p1]);
let shop = new Shop([p1]);
console.log(products.showAllProducts());
console.log(warehouse.showAllProducts());
console.log(shop.showAllProducts());

shop.addProduct("Honor 5", "telephone", 200, 6.5, 2016);