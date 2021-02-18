const btnChangeFormat = document.querySelector('#btnChangeFormat');
let clockDisplay = document.querySelector('#clockBox');
let bodyDisplay = document.querySelector('body');
let dateDisplay = document.querySelector('h1');
let isClicked = true;
let CurrentTime = new Date();
let CurrentHour = CurrentTime.getHours();
//let CurrentHour = 19;

//button for changing font style
const btnShowFont = document.querySelector('#btnShowFont');

//credits downloaded font style from dafont.com

let fontList = ['Nimbus-Sans-D-OT-Light_32752','DS-DIGI', 'Arial'];
let colorList = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

let selectFont = document.querySelector('#fontOption');

let selectColor = document.querySelector('#colorOption');

//list display font
fontList.forEach((font) => {
  let fontOption = document.createElement('option');
  fontOption.textContent = font;
  selectFont.append(fontOption);
});

//list display color
colorList.forEach((color) => {
  let colorOption = document.createElement('option');
  colorOption.textContent = color;
  selectColor.append(colorOption);
});

/*selectFont.addEventListener('change', () => {

  let option = selectFont.value;
  if(fontList.includes(option))
  {
    document.querySelector('h1').style.fontFamily = option;
  } 
});*/

btnShowFont.addEventListener('click', function()
{
  let option = selectFont.value;
  document.querySelector('h1').style.fontFamily = option;

});


selectColor.addEventListener('change', (event) => {

  let option = selectColor.value;

  if(colorList.includes(option))
  {
    document.querySelector('#clockBox').style.backgroundColor = option;
    clockDisplay.classList.remove('morningBG', 'middleDayBG', 'afternoonBG','nightBG');
  }
  else
  {
    alert('Please select color style');
    // check again hour for bgcolor
    if(CurrentHour > 4 && CurrentHour <= 11)
    {
      clockDisplay.classList.add('morningBG');
    }
    else if(CurrentHour > 11 && CurrentHour <= 15)
    {
      clockDisplay.classList.add('middleDayBG');
    }
    else if(CurrentHour > 15 && CurrentHour <= 20)
    {
      clockDisplay.classList.add('afternoonBG');
    }
    else if(CurrentHour > 20 || CurrentHour <= 4)
    {
      clockDisplay.classList.add('nightBG');
    }
  }
});



// check hour for bgcolor
if(CurrentHour > 4 && CurrentHour <= 11)
{
  clockDisplay.classList.add('morningBG');
  bodyDisplay.classList.add('bodymorningBG');
}
else if(CurrentHour > 11 && CurrentHour <= 15)
{
  clockDisplay.classList.add('middleDayBG');
  bodyDisplay.classList.add('bodymiddleDayBG');
}
else if(CurrentHour > 15 && CurrentHour <= 20)
{
  clockDisplay.classList.add('afternoonBG');
  bodyDisplay.classList.add('bodyafternoonBG');
}
else if(CurrentHour > 20 || CurrentHour <= 4)
{
  clockDisplay.classList.add('nightBG');
  bodyDisplay.classList.add('bodynightBG');
}

clockTime = () =>
{
  let time = new Date();
  //let hour = time.getHours();
  let hour = 13;
  let min = time.getMinutes();
  let sec = time.getSeconds();

  let am_pm = '';

  if(hour < 12)
  {
    am_pm = 'AM';
  }
  else
  {
    am_pm = 'PM';
  }

  min = lessThan10Format(min);
  sec = lessThan10Format(sec);


  if(isClicked)
  {
    if(hour == 24)
    {
      hour = lessThan10Format(0);
      am_pm = 'AM';
    }

    dateDisplay.textContent = hour + ':' + min + ':' + sec + ' ' + am_pm;
    btnChangeFormat.textContent = ' Click to 12 Hour Format';

  }
  else
  {

    if(hour >= 12 && hour != 24)
    {
      hour = lessThan10Format(hour - 12);
      //dateDisplay.textContent = hour + ':' + min + ':' + sec + ' ' + am_pm;
      //btnChangeFormat.textContent = 'Click again to 24 Hour Format';
    }
    else if (hour == 24)
    {
      am_pm = 'AM'
      hour = lessThan10Format(hour - 12);
      //dateDisplay.textContent = hour + ':' + min + ':' + sec + ' ' + am_pm;
      //btnChangeFormat.textContent = 'Click again to 24 Hour Format';
    }

    dateDisplay.textContent = hour + ':' + min + ':' + sec + ' ' + am_pm;
    btnChangeFormat.textContent = 'Click again to 24 Hour Format';

  }

}

lessThan10Format = (value) =>
{
  if(value < 10)
  {
    value = "0" + value;
  }
  return value;
}

btnChangeFormat.addEventListener('click', function()
{
  isClicked = !isClicked;
  // toggles value when clicked.
  //console.log(isClicked);

});

setInterval(clockTime, 1000);

//console.log(isClicked);

