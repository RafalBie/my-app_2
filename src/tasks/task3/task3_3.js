// "stwórz bardziej zaawansowany komponent typu input"

// Część 0:
// state: {
// options: [array z elementami o wzorcu {label:'Nazwa do selecta', value:'Wartość do selecta'}]
// selected: [array z elementami o wzorcu {label:'Nazwa do selecta', value:'Wartość do selecta'}]
// }

// Część 1
// komponent ma zawierać:
// - select z 10 dowolnymi opcjami przetrzymywany w stanie pod kluczem "options"
// - tyle inputów typu checkbox ile zostało dokonane wyborów z selecta
// - przycisk do wysłania wyborów ze stanu o kluczu "selected"

// Część 2
// jak to ma działać:
// 1. user wybiera element z selecta
// 1a. wybrany element wrzucany jest do stanu { selected:[element0] }
// 2. po wybraniu, nazwa element0 pokazuje się poniżej z checkboxem(checked=true)
// 3. jeśli user wybierze kolejny element to też jest on wrzucany do stanu { selected:[element0, element1] }
// 3a. pokazuje się poniżej element1 z checkboxem(checked=true)
// 4. jeśli user kliknie w checkbox na dowolny element listy to ten element znika z listy

// jeśli user wcisnie przycisk w inputcie, do konsoli ma być logowany stan "selected" a potem stan "selected" ma być czyszczony
// user nie może wybrać 2 razy tego samego elementu - lista checkboxów ma nie mieć duplikatów


