import React from "react";

export default function Tasks() {
  return (
    <div>
      <h4>Zadanie 1</h4>
      <p>
        Napisz komponent User, który będzie wyświetlał informacje o użytkowniku:
      </p>
      <ul></ul>
      <li>imię</li>
      <li>nazwisko</li>
      <li>adres (ulica, miasto)</li>
      <li>adres email</li>
      <li>datę rejestracji w systemie sformatowaną w przyjazny do czytania</li>
      <li>sposób (np. poniedziałek, 11 maja)</li>
      <li>zdjęcie profilowe</li>
      <p>
        Skorzystaj do tego z{" "}
        <a href="https://randomuser.me/">API Random User</a>, aby pobrać listę
        10 użytkowników i przechowywać ją w komponencie <code>UserList</code>.
        Ten komponent będzie posiadał iterację i będzie wykorzystywał komponenty{" "}
        <code>User</code>.
      </p>
      <p>
        Jeżeli nie jest przekazany adres, należy wpisać tekst brak. Jeżeli nie
        przekaże się imienia lub nazwiska, wówczas wyświetl komunikat: Nie
        przekazano imienia i nazwiska.
      </p>
      <h4>Zadanie 2</h4>
      <p>
        Mając listę użytkowników w komponencie <code>UserList</code>, stwórz
        nową ścieżkę url w aplikacji (np. /users/:id), która będzie
        wykorzystywała komponent <code>UserDetails</code> aby wyświetlić
        informacje o pojedynczym użytkowniku (możesz do tego wykorzystać
        komponent <code>User</code>). W tym zadaniu nie masz API do pobrania
        poszczególnego użytkownika, więc jego dane musisz przekazać z poziomu
        listy.
      </p>
      Modyfikacja Możesz opóźnić ładowanie danych z API (np. korzystając z{" "}
      <code>setTimeout</code>) i wykorzystać bibliotekę React Placeholder, aby
      pokazać miejsca, w których dane się pojawią.
      <h4>Zadanie 3</h4>
      <p>
        Na podstawie Zadania 1 i 2 oraz informacji o lokalizacji użytkownika z
        API:
      </p>
      {/* <code>"location": {
  "street": "9278 new road",
  "city": "kilcoole",
  "state": "waterford",
  "postcode": "93027",
  "coordinates": {
    "latitude": "20.9267",
    "longitude": "-7.9310"
  },
  "timezone": {
    "offset": "-3:30",
    "description": "Newfoundland"
  }
}</code> */}
      wyświetl na mapie jego położenie. Wykorzystaj do tego{" "}
      <a href="https://leafletjs.com/">Leaflet</a> oraz opcjonalnie{" "}
      <a href="https://react-leaflet.js.org/">React Leaflet</a>.
    </div>
  );
}
