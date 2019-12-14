const btn = document.getElementById('print');
btn.addEventListener('click', e => {
  const b = document.body;
  b.querySelectorAll('*');
  const items = [...b.querySelectorAll('body>*')];
  console.log(items.length);
  items.forEach((item, i) => {
    if (item.classList.contains('printable')) {
      return;
    }
    console.log(i);
    item.classList.add('non-printable');
  });
  window.print();
});
