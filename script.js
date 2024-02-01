// Example data
const students = [
  { name: "Alice", birthday: "01/02" },
  { name: "Bob", birthday: "03/04" },
  { name: "Charlie", birthday: "05/06" },
  // Add more students here
];

// Get today's date
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const currentDate = `${dd}/${mm}`;

// Find students with today's birthday
const todayStudents = students.filter(student => student.birthday === currentDate);

// Display birthday card for each student
todayStudents.forEach(student => {
  const birthdayCard = document.getElementById('birthdayCard');
  const cardContent = `<h2>Happy Birthday, ${student.name}!</h2><p>Best wishes on your special day.</p>`;
  birthdayCard.innerHTML += cardContent;
});
