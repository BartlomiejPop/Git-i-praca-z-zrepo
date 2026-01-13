# Zadanie: Git i praca z repozytorium projektowym

Do wykonania zadania przyda się wiedza zawarta na stronie gita.
Sprawdź: [Progit](https://git-scm.com/book/en/v2)

## Zakres praktyczny

1. Zainicjalizuj repozytorium Git w folderze projektu.
2. Dodaj plik app-info.md z informacjami:
- nazwa projektu,
- technologia (RN / Flutter / NS),
- numer indeksu.
3. Wykonaj commit o nazwie:
`initial project setup`
4. Utwórz branch feature/header.
5. W pliku np. Header.js, header.dart lub header.component.ts stwórz prosty komponent nagłówka (dowolna treść).
6. Zrób commit:
`feat(header): add basic header component`
7. Wróć na main i wykonaj merge z feature/header (PR lub lokalnie).
8. Utwórz branch feature/footer.
9. Dodaj inny plik komponentu, ale tym razem o konfliktowym fragmencie (np. modyfikacja app-info.md).
10. Zrób commit:
`feat(footer): add footer component`
11. Spróbuj scalić z main, aby wywołać konflikt.
12. Rozwiąż konflikt ręcznie (wybierając odpowiednie części).
13. Zrób commit po konflikcie:
`fix: resolve merge conflict in app-info.md`
14. Dodaj plik .gitignore dopasowany do technologii:
- React Native: ignoruj node_modules, android/, ios/, bundlery.
- Flutter: ignoruj .dart_tool, .flutter-plugins, build/ itd.
- NativeScript: ignoruj platforms/, hooks/, node_modules/.
15. Skonfiguruj GitHub Actions z prostym workflow, który wykonuje test (npm test, flutter test, ns build — uproszczone).
16. Otwórz Pull Request z opisem:
- co zostało zrobione,
- jakie konflikty rozwiązano,
- jakie były problemy.    

Wymagania dotyczące commitów

Commity muszą:
- być jasne, zgodne z konwencją Conventional Commits
- oddawać realne kroki prac
- nie zawierać artefaktów build

## Sprawozdanie z zadania

**Imię i nazwisko:**  
**Grupa:**  

### Cel zadania
> Krótko opisz, czego dotyczyło zadanie i jakie czynności miałeś wykonać.

### Przebieg pracy

#### Inicjalizacja repozytorium  
> Opisz, jak stworzyłeś repozytorium oraz pierwszy commit.

#### Praca na branchach  
> Opisz utworzone branche oraz ich role.

#### Konflikt i jego rozwiązanie  
> Wyjaśnij, w jaki sposób powstał konflikt i jak go rozwiązałeś.

#### Pull Request
> Opisz treść i cel PR.

### Drzewo commitów

(Wklej wynik polecenia)
`git log –oneline –graph`


### Refleksja
> Czego nauczyłeś się z tej pracy? Co sprawiło trudność? Jak oceniasz swoje zrozumienie Gita?