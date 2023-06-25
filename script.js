fetch('experience.json')
  .then(response => response.json())
  .then(data => {
    const contentElement = document.getElementById('content');
    const itemTemplate = document.getElementById('item-template-left');

    let index = 0;

    function updateContent() {
      const item = data[index];
      const itemElement = itemTemplate.content.cloneNode(true);

      itemElement.querySelector('.left-0').textContent = item.left[0];
      itemElement.querySelector('.left-1').textContent = item.left[1];
      itemElement.querySelector('.left-2').textContent = item.left[2];
      itemElement.querySelector('.right-0').textContent = item.right[0];
      itemElement.querySelector('.right-1').textContent = item.right[1];
      itemElement.querySelector('.right-2').textContent = item.right[2];
      itemElement.querySelectorAll('.right li').forEach((li, i) => {
        li.textContent = item.right[i];
      });

      contentElement.innerHTML = '';
      contentElement.appendChild(itemElement);

      index = (index + 1) % data.length;
    }

    updateContent();
    setInterval(updateContent, 5 * 60 * 1000);
  })
  .catch(error => console.error(error));