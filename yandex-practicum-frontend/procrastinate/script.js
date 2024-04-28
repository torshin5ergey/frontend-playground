let phrases = [
    { text: 'send a funny gif to a friend', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
    { text: 'look up airfare discounts', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
    { text: 'figure out what rappers are singing about', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
    { text: 'Arzamas', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
    { text: 'sort by color the books on the shelf', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
    { text: 'read about salaries in San Francisco', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
    { text: 'read the news and be horrified in the comments', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
    { text: 'get into a stream of sad songs and remember all the mistakes of my youth', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
    { text: 'watch the trailer for the show and the first season', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
    { text: 'check unread messages in Telegram', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
  ];
  
  function getRandomElement(arr, currentText) {
    while (true) {
        randIndex = Math.floor(Math.random() * arr.length);
        console.log(currentText, arr[randIndex].text)
        if (currentText != arr[randIndex].text) {
            break
        }
    }
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases, phrase.textContent);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  
  for (let i = 0; i < 3; i++) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
  }