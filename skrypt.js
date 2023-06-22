
  
  // Wywołaj funkcję pobierania przepisów przy załadowaniu strony
  onload=pobierzPrzepisy();



// Funkcja do pobierania danych z endpointu
function pobierzPrzepisy() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var przepisy = JSON.parse(this.responseText);
            //Wybieranie diva w którym będą wykonywały się funkcje
    var listaPrzepisow = document.getElementById("recipes");
        wyswietlPrzepisy(przepisy, listaPrzepisow);
      }
    };
    xhttp.open("GET", "http://91.107.221.180/api/recipes", true);
    xhttp.send();
    console.log(xhttp)
  }

  
  
  // Funkcja do dynamicznego wyświetlania przepisów
  function wyswietlPrzepisy(przepisy, listaPrzepisow) {
    
    listaPrzepisow.innerHTML = ""; // Wyczyść poprzednią zawartość listy
    listaPrzepisow.classList.add("mt-6", "grid", "grid-cols-1", "gap-x-6", "gap-y-10", "sm:grid-cols-2", "lg:grid-cols-4", "xl:gap-x-8")

    //Sprawdzanie czy są błędy
    var blad = document.createElement("p")
    blad.classList.add("text-center", "text-7xl")
    //if(przepisy.name == null || przepisy.description == null || przepisy.category == null || przepisy.steps == null || przepisy.ingredients == null){
      //  blad.innerHTML = "Błąd";
      //  listaPrzepisow.appendChild(blad);
      //}
      //else{
    for (i = 0; i < przepisy.length; i++) {
      var przepis = przepisy[i];

      
      
        var div = document.createElement("div");
     
      var elementPrzepisu1 = document.createElement("li");
      var elementPrzepisu2 = document.createElement("li");
      var elementPrzepisu3 = document.createElement("img");
      var elementPrzepisu4 = document.createElement("li");
      var elementPrzepisu5 = document.createElement("li");
      var elementPrzepisu6 = document.createElement("li");
      var przerwa = document.createElement("br");
      
      
      
      elementPrzepisu1.innerHTML = przepis.name;
      div.appendChild(elementPrzepisu1);

      elementPrzepisu2.innerHTML = "Opis: " + przepis.description;
      div.appendChild(elementPrzepisu2);
      
      elementPrzepisu3.src = przepis.path;
      div.appendChild(elementPrzepisu3);

      elementPrzepisu4.innerHTML = "Czas: " + przepis.time + " min";
      div.appendChild(elementPrzepisu4);

      elementPrzepisu5.innerHTML = przepis.category;
      div.appendChild(elementPrzepisu5);

      elementPrzepisu6.innerHTML = "Kcal: " + przepis.kcal;
      div.appendChild(elementPrzepisu6);

      wyswietlSkladnikiPrzepisu(przepis, div);

      wyswietlKrokiPrzepisu(przepis, div);

      listaPrzepisow.appendChild(div);
      };
  }
//}

function wyswietlSkladnikiPrzepisu(przepis, div) {
  var przerwa = document.createElement("br");
  var ilosc = Object.keys(przepis.ingredients).length;

  for (k = 0; k < ilosc; k++) {
    var skladnik = document.createElement("li");
    skladnik.innerHTML = k+1 + ". " + przepis.ingredients[k]?.name;
    div.appendChild(skladnik);
    div.appendChild(przerwa);
  }
}
  
  function wyswietlKrokiPrzepisu(przepis, div) {
    var przerwa = document.createElement("br");
    var dlugosc = Object.keys(przepis.steps).length;
  
    for (j = 1; j <= dlugosc; j++) {
      var krok = document.createElement("li");
      krok.innerHTML = j + ". " + przepis.steps[j];
      div.appendChild(krok);
      div.appendChild(przerwa);
    }
  }


  //3.06.2023 - Przygotowanie do kolejnego zadania - 12.00-18.00

  //5.06.2023 - Uczenie się JSON - 16.00-19.00

  //9.06.2023 - Łączenie z EndPointem - 15.00-18.00

  //14.06.2023 - Wyświetlanie informacji na stronie za pomocą ajax - 17.00-20.00

  //19.06.2023 - Dzielenie funkcji i rozpoczynanie pracy nad sprawdzaniem błędów - 14.00-17.00

  //20.06.2023 - Dalsze prace nad stroną - 13.00-16.00