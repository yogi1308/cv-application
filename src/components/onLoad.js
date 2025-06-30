export default function onLoadSidebarClicks() {
  document.querySelectorAll(".dropdown-svg").forEach((svg) => svg.click());

  const letterSpacing = window.localStorage.getItem('letterSpacing') || 0
  document.querySelector('.resume').style.letterSpacing = letterSpacing + 'px';

  const wordSpacing = window.localStorage.getItem('wordSpacing') || 0
  document.querySelector('.resume').style.wordSpacing = wordSpacing + 'px';
  
  const nameFont = window.localStorage.getItem('nameFont') || 'Outfit'
  document.querySelector('div.resume-personal-info > h1').style.fontFamily = nameFont;

  const headingsFont = window.localStorage.getItem('headingsFont') || 'Outfit'
  document.querySelectorAll('.heading').forEach(el => {
      el.style.fontFamily = headingsFont;
  });

  const bodyFont = window.localStorage.getItem('bodyFont') || 'Outfit'
  document.querySelectorAll('.body').forEach(el => {
    el.style.fontFamily = bodyFont;
  }); 

  const nameFontSize = window.localStorage.getItem('nameFontSize') || 22
  document.querySelector('div.resume-personal-info > h1').style.fontSize = nameFontSize + 'px';

  const headingsFontSize = window.localStorage.getItem('headingsFontSize') || 12
  document.querySelectorAll('.heading').forEach(el => {
      el.style.fontSize = headingsFontSize + 'px';
  });

  const bodyTextFontSize = window.localStorage.getItem('bodyFontSize') || 12
  document.querySelectorAll('.body').forEach(el => {
      el.style.fontSize = bodyTextFontSize + 'px';
  });
}