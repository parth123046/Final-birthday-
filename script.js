document.addEventListener('DOMContentLoaded', function() {
    const birthdays = [
        { name: 'John Doe', birthday: '29-01', class: 'X', section: 'A' },
        { name: 'Jane Smith', birthday: '15-05', class: 'XI', section: 'B' },
        { name: 'Michael Johnson', birthday: '10-12', class: 'XII', section: 'C' }
    ];

    checkBirthdays(birthdays);
});

function checkBirthdays(data) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!

    let birthdayListHTML = '';

    data.forEach(person => {
        const birthdayParts = person.birthday.split('-');
        const personDay = birthdayParts[0];
        const personMonth = birthdayParts[1];

        if (personDay === dd && personMonth === mm) {
            birthdayListHTML += `
                <div class="birthday">
                    <p><span class="name">${person.name}</span> from class ${person.class} section ${person.section} is celebrating their birthday today! 🎉🎂</p>
                    <p>Birthday: ${person.birthday}</p>
                </div>
            `;
        }
    });

    if (birthdayListHTML === '') {
        birthdayListHTML = '<p>No birthdays today!</p>';
    }

    document.getElementById('birthdayList').innerHTML = birthdayListHTML;
}
