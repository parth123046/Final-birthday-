// Example data
const students = [
  { name: "Alice", birthday: "01/02" },
  { name: "Bob", birthday: "03/04" },
  { name: "Charlie", birthday: "05/06" },
  { name: "AARVIKA KSHITIJ TARGE", birthday: "02-03" },
{ name: "ANAYRA ADITYA VENUGOPAL", birthday: "19-02" },
{ name: "HARSHIT MANISH TATIYA", birthday: "21-04" },
{ name: "TASHVIKA AKASH SACHDEV", birthday: "01-02" },
{ name: "AARYA YASHWANT SONAWANE", birthday: "08-01" },
{ name: "ANUP AMOL GITE", birthday: "20-04" },
{ name: "GARGI HANSRAJ DEORE", birthday: "27-05" },
{ name: "HRIDYA SUMIT CHORDIYA", birthday: "15-12" },
{ name: "KAVISH PRAVIN GITE", birthday: "10-01" },
{ name: "KAVYANSH DHANRAJ DHATRAK", birthday: "06-03" },// Add more students here
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
