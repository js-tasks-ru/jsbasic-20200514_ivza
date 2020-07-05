/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  for (const {firstName, lastName} of friends) {
    const li = document.createElement('li');
    li.textContent = `${firstName} ${lastName}`;
    ul.append(li);
  }

  return ul;
}
