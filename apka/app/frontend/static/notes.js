// Funkcja do ładowania notatek z serwera
function loadNotes() {
    const notesList = document.getElementById('notes-list');

    // Wywołanie API, aby pobrać listę plików
    fetch('/my_notes')
        .then(response => {
            if (!response.ok) {
                throw new Error('Nie udało się załadować notatek.');
            }
            return response.json(); // Zwraca listę plików w formacie JSON
        })
        .then(notes => {
            // Sprawdź, czy są jakieś notatki
            if (notes.length === 0) {
                notesList.innerHTML = '<li>Brak notatek do wyświetlenia.</li>';
                return;
            }

            // Wyświetl notatki jako listę plików
            notes.forEach(note => {
                const noteItem = document.createElement('li');
                const noteLink = document.createElement('a');

                noteLink.href = `/notes/${note}`; // Link do pobrania pliku
                noteLink.textContent = note; // Wyświetl nazwę pliku
                noteLink.download = note; // Dodanie możliwości pobrania pliku

                noteItem.appendChild(noteLink); // Dodaj link do elementu listy
                notesList.appendChild(noteItem); // Dodaj element do listy
            });
        })
        .catch(error => {
            notesList.innerHTML = `<li>Błąd: ${error.message}</li>`;
        });
}

// Inicjalizacja funkcji po załadowaniu strony
document.addEventListener('DOMContentLoaded', loadNotes);
