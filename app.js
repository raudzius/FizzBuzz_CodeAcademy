function fizzBuzz(start, end) {
  let list = document.querySelector('ul');
  for (let i = start; i <= end; i++) {
    let i3 = !(i % 3);
    let i5 = !(i % 5);
    let i7 = !(i % 7);
    let i9 = !(i % 9);
    let i12 = !(i % 12);

    let listItem = (i3 ? 'Fizz' : '') + (i5 ? 'Buzz' : '') + (i7 ? 'Biff' : '') + (i9 ? 'Fuzz' : '') + (i12 ? 'FFFF' : '') || i;
    list.innerHTML += `<li>${listItem}</li>`;
  }
}

fizzBuzz(1, 100);
