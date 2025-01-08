// Funkcja do ładowania notatek z localStorage
function loadNotes() {
    const notesList = document.getElementById('notes-list');
    const notes = JSON.parse(localStorage.getItem('notes')) || []; // Pobierz notatki z localStorage

    // Sprawdź, czy są jakieś notatki
    if (notes.length === 0) {
        notesList.innerHTML = '<li>Brak notatek do wyświetlenia.</li>';
        return;
    }

    // Wyświetl notatki
    notes.forEach(note => {
        const noteItem = document.createElement('li');
        noteItem.textContent = note; // Ustaw tekst notatki
        notesList.appendChild(noteItem); // Dodaj notatkę do listy
    });
}

// Inicjalizacja funkcji po załadowaniu strony
document.addEventListener('DOMContentLoaded', loadNotes);