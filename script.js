document.addEventListener('DOMContentLoaded', function() {
    const birthdays = [
        { name: 'John Doe', birthday: '1-02', class: 'X', section: 'A' },
        { name: 'Jane Smith', birthday: '1-02', class: 'XI', section: 'B' },
        { name: 'Michael Johnson', birthday: '1-02, class: 'XII', section: 'C' }
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
                    <p><span class="name">${person.name}</span> from class ${person.class} section ${person.section}  🎉🎂</p>
                </div>
            `;
        }
    });

    if (birthdayListHTML === '') {
        birthdayListHTML = '<p>No birthdays today!</p>';
    }

    document.getElementById('birthdayList').innerHTML = birthdayListHTML;
}
