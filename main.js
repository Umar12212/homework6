let users = {};
for (let i = 1; i <= 10; i++) {
  let name = prompt("Введите имя пользователя " + i);
  let age = parseInt(prompt("Введите возраст пользователя " + i));

  if (name !== "" && i !== 0) {
    let user = {
      Имя: name,
      Возраст: age
    };

    users[i] = user;
  }
}

for (let id in users) {
  console.log("Пользователь - " + id);
  console.log("Имя - " + users[id].Имя);
  console.log("Возраст - " + users[id].Возраст);
}

console.log(users);