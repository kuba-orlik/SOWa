#Szybki tutorial tworzenia aplikacji w Sealiousie

##Wymagania
1. Nodejs
2. Zainstalowany npm w wersji conajmniej 2.0.0
3. uprawnienia sudo/administratora
4. MongoDB

##Krok po kroku
1. Kod aplikacji opartej na Sealiousie może znajdować się w dowolnym katalogu na dysku. Utwórz katalog o nazwie `moja-aplikacja`.
2. Aplikacja Sealiousowa musi być pakietem node'a. Otwórz więc utworzony katalog w terminalu i wpisz `npm init`. Na każde pytanie możesz odpowiedzieć pozytywnie (wcisnąć enter) i zakończyć proces inicjalizacji pakietu.
3. Aplikacje Sealiousowe korzystają z modułów sealiousowych. Możesz korzystać z instenijących modułów i tworzyć własne. Moduł zwykle odpowiada jednej funkcjonalności. Aby utworzyć własny moduł (co jest konieczne przy tworzeniu własnej aplikacji), utwórz katalog `modules`, wewnątrz niego utwórz nowy katalog o nazwie np. `my-module` i w nim także wykonaj `npm init` (postępuj jak w poprzednim kroku).
4. Należy teraz utworzyć plik `sealious-module.json`. Będzie on zawierał informacje na temat naszego nowego modułu. Plik ten musi być zgodny ze schematem:
```JSON
    {
    "name": "my-module",
    "uses": [
        
    ],
    "defines": [
    ]
}
```
Pola:    
    * `name` zawiera nawę modułu. Jest to dowolny string bez białych znaków. 
    * `uses` mówi, z jakich chipów korzysta dany moduł. 
    * `defines` mówi, jakie chipy dany moduł definiuje. 
Aby moduł robił cokolwiek, musi używać lub definiować jakieś chipy  
5. Załóżmy, że chcemy stworzyć prosty formularz zgłoszeniowy. Musimy do tego utworzyć odpowiedni "typ zasobu", który będzie przechowywał instancje wysłanych formularzy. W takim razie tworzymy folder `define`, a w nim plik `reource_type.questionnaire.js`. Dodajemy też pole `reource_type.questionnaire` do tablicy `defines` w sealious-module.json.
6. Plik reprezentujący dany typ zasobu jest modułem node'owym, który w swoim `module.exports` zwraca funkcję, która przetwarza `gołą` instancję typu zasobu zaopatrzając ją w pola. Ta "goła" instancja jest podana jako pierwszy argument do naszej funkcji. kod:
```javascript
module.exports = function(questionnaire){
    questionnaire.add_fields([
        {name: "first-name", type: "text", required: true},
        {name: "last-name", type: "text", required: true},
        {name: "PESEL", type: "text", required: true} //it could be type PESEL, which check if there is proper number of digits
    ]);
}
```
7. Chcemy teraz udostępnić dany typ zasobu pod określonym RESTowym URL. Do tego musimy użyć kanału REST. Dodajmy więc `channel.rest` do wymagancyh chipów (pole `uses` w `seailous-module.json`).
8. Możemy teraz korzystać (`use`) z kanału `rest`. Aby skonfigurować api restowe tak, aby nasłuchiwało pod adresem "/api/tutorial-app/questionnaire" (adres ten może być dowolny), musimy:
    * utworzyć plik `channel.rest.js` w katalogu `use` w naszym module
    * umieszczamy następujący kod w tym pliku:
    ```js
    module.exports = function(rest){
        rest.add_path("/api/tutorial-app/questionnaire", "questionnaire");
    }
    ```