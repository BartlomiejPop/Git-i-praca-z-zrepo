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

Bartłomiej Poprawa
43_Inf_FD_NW_7

### Cel zadania
> Krótko opisz, czego dotyczyło zadanie i jakie czynności miałeś wykonać.
Zadanie dotyczyło pracy z gitem. Za pomocą terminala tworzyłem nowe gałęzi, dodawałem zmiany lokalnie, wypuszczałem commity oraz pushowałem na zdalne repo
### Przebieg pracy
utworzenie headera i footera. Stworzenie ci na gh oraz dodanie prostego testu

#### Inicjalizacja repozytorium  
> Opisz, jak stworzyłeś repozytorium oraz pierwszy commit.

repozytorium stworzyłem ręcznie na gh. Pierwszy commit stworzyłemw  terminalu wpisując:
git add .
git commit -m "initial commit"

#### Praca na branchach  
> Opisz utworzone branche oraz ich role.
utworzone branche to feature/header, feature/footer oraz branch-for-pr
rola 2 pierwszych to nowy feature do projektu a rola ostatniego to wystawienie pr, ponieważ resztę ficzerów miałem już na mainie

#### Konflikt i jego rozwiązanie  
> Wyjaśnij, w jaki sposób powstał konflikt i jak go rozwiązałeś.
Konflikt powstał poprzed celową edycje pliku, który istniał już na głównej gałęzi. Rozwiązałem za pomocą Resolve-editor akceptując zmiany przychodzące

#### Pull Request
> Opisz treść i cel PR.
treść:


    co zostało zrobione,

    jakie konflikty rozwiązano,

    jakie były problemy.

    header,footer,plik .yaml do konfiguracji ci, .gitignore, .prosty test

    rozwiązano jeden konflikt sztucznie wywołany w pliku app.info.md

    głowne problemy z zainstalowaniem zalezności. Trzeba było użyć flagi --legacy-peer-deps. Nie udało się zakończyć testu sukcesem w ci

cel pr jest taki by spełnić punkt 16 zadania

### Drzewo commitów

(Wklej wynik polecenia)
`git log –oneline –graph`

* 7199c70 (HEAD -> branch-for-pr, origin/branch-for-pr) Empty commit to open PR
* 2c21be4 (origin/main, main) resolving pipeline errors
* 4946d44 added flag to ci
* fbeeaba npm i
* 7153608 package.json init
* 3f3b750 add test
* 6089bdf final commit
*   e34e594 `fix: resolve merge conflict in app-info.md`
|\
| * c0ba386 (feature/footer) wywoływanie konfliktu
* | afe8e90 edycja pliku by wywolac konflikt
|/
:

### Refleksja
> Czego nauczyłeś się z tej pracy? Co sprawiło trudność? Jak oceniasz swoje zrozumienie Gita?

przypomniałem sobie że konfiguracja testów bez użycia bundlera jest uciążliwa i to sprawiło największa trudność
Swoje zrozumienei gita oceniam na bardzo dobre. Używam go regularnie w pracy