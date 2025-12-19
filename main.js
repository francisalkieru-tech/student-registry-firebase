import { db } from "./firebase.js";
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const studentListUI = document.getElementById("studentList");
const saveBtn = document.getElementById("saveBtn");
const modal = document.getElementById("congratsModal");
const nameDisplay = document.getElementById("registeredName");

const q = query(collection(db, "students"), orderBy("timestamp", "desc"));

onSnapshot(q, (snapshot) => {
    studentListUI.innerHTML = "";

    if (snapshot.empty) {
        studentListUI.innerHTML = '<li class="loading">No records found.</li>';
        return;
    }

    snapshot.forEach((doc) => {
        const student = doc.data();

        const li = document.createElement("li");
      li.innerHTML = `
         <small>name: ${student.name}</small>
        <small>email: ${student.email}</small>
        <small>age: ${student.age}</small>
     `;



        studentListUI.appendChild(li);
    });
});

saveBtn.addEventListener("click", async () => {
    const nameInput = document.getElementById("studentName");
    const emailInput = document.getElementById("studentEmail");
    const ageInput = document.getElementById("studentAge");

    if (!nameInput.value || !emailInput.value || !ageInput.value) {
        alert("Fill all fields");
        return;
    }

    try {
        await addDoc(collection(db, "students"), {
            name: nameInput.value,
            email: emailInput.value,
            age: ageInput.value,
            timestamp: serverTimestamp()
        });

        nameDisplay.textContent = nameInput.value;
        modal.style.display = "flex";

        nameInput.value = "";
        emailInput.value = "";
        ageInput.value = "";

    } catch (e) {
        console.error(e);
        alert("Error saving data. Check Firebase Rules!");
    }
});
