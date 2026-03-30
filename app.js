// ===== UPDATE NAME =====
const updateBtn = document.getElementById("updateBtn");

updateBtn.addEventListener("click", () => {
  const input = document.getElementById("inputName").value;

  if (input === "") {
    alert("Enter a name");
    return;
  }

  document.getElementById("name").textContent = input;
});

// ===== RANDOM HOBBY =====
const hobbies = ["Reading", "Gaming", "Traveling", "Coding", "Music"];

document.getElementById("hobbyBtn").addEventListener("click", () => {
  const random = hobbies[Math.floor(Math.random() * hobbies.length)];
  document.getElementById("hobby").textContent = random;
});

// ===== VIEWS COUNTER (CLOSURE) =====
function createCounter() {
  let count = 0;

  return () => {
    count++;
    document.getElementById("views").textContent = count;
  };
}

const increaseViews = createCounter();

document.getElementById("viewBtn").addEventListener("click", () => {
  increaseViews();
});
