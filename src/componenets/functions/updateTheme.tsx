export const updateTheme=(event:HTMLDivElement | null)=>{
    let allBtns=document.querySelectorAll('#primary');
    let header=document.querySelector('#head');
    let themeIntro=document.querySelector('#themeIntro');
    let themeNumber=document.querySelector('#themeNumber');
    let hero=document.querySelector("#hero");
    let heroTwo=document.querySelector('#heroTwo')
    let heroThree=document.querySelector("#heroThree");
    let screen=document.querySelector("#screen");
    let keyPad=document.querySelector('#keypad');
    let resets=document.querySelectorAll("#reset")
    let result=document.querySelector("#result");
    let circle=document.querySelector("#circle");
    if(event?.classList.contains("one"))
    {
      event?.classList.remove("one");
      event?.classList.add("two");
      allBtns.forEach((e)=>{
        e.classList.remove('themeOnePrimaryKeys');
        e.classList.add('themeTwoPrimaryKeys');
      });
      header?.classList.remove('themeOneHeader');
      header?.classList.add('themeTwoHeader');
      themeIntro?.classList.remove('themeOneIntro');
      themeIntro?.classList.add('themeTwoIntro');
      themeNumber?.classList.remove('themeOneThemeNumber');
      themeNumber?.classList.add('themeTwoThemeNumber');
      hero?.classList.remove('themeOneBackgroundMain');
      hero?.classList.add('themeTwoBackgroundMain');
      heroTwo?.classList.remove('themeOneBackgroundMain');
      heroTwo?.classList.add('themeTwoBackgroundMain');
      heroThree?.classList.remove('themeOneBackgroundMain');
      heroThree?.classList.add('themeTwoBackgroundMain');
      screen?.classList.remove('themeOneBackgroundScreen');
      screen?.classList.add('themeTwoBackgroundScreen');
      keyPad?.classList.remove('themeOneBackgroundKeyPad');
      keyPad?.classList.add('themeTwoBackgroundKeyPad');
      resets.forEach((e)=>{
        e?.classList.remove('themeOneDangerKeys');
        e?.classList.add('themeTwoDangerKeys');
      })
      result?.classList.remove('themeOneResultKeys');
      result?.classList.add('themeTwoResultKeys');
      circle?.classList.remove("circleOne");
      circle?.classList.add('circleTwo');
    }else if(event?.classList.contains("two"))
    {
      event?.classList.remove("two");
      event?.classList.add("three");
      allBtns.forEach((e)=>{
        e.classList.remove('themeTwoPrimaryKeys');
        e.classList.add('themeThreePrimaryKeys');
      });
      header?.classList.remove('themeTwoHeader');
      header?.classList.add('themeThreeHeader');
      themeIntro?.classList.remove('themeTwoIntro');
      themeIntro?.classList.add('themeThreeIntro');
      themeNumber?.classList.remove('themeTwoThemeNumber');
      themeNumber?.classList.add('themeThreeThemeNumber');
      hero?.classList.remove('themeTwoBackgroundMain');
      hero?.classList.add('themeThreeBackgroundMain');
      heroTwo?.classList.remove('themeTwoBackgroundMain');
      heroTwo?.classList.add('themeThreeBackgroundMain');
      heroThree?.classList.remove('themeTwoBackgroundMain');
      heroThree?.classList.add('themeThreeBackgroundMain');
      screen?.classList.remove('themeTwoBackgroundScreen');
      screen?.classList.add('themeThreeBackgroundScreen');
      keyPad?.classList.remove('themeTwoBackgroundKeyPad');
      keyPad?.classList.add('themeThreeeBackgroundKeyPad');
      resets.forEach((e)=>{
        e?.classList.remove('themeTwoDangerKeys');
        e?.classList.add('themeThreeDangerKeys');
      })
      result?.classList.remove('themeTwoResultKeys');
      result?.classList.add('themeThreeResultKeys');
      circle?.classList.remove("circleTwo");
      circle?.classList.add('circleThree');
    }else if(event?.classList.contains("three"))
    {
      event?.classList.remove("three");
      event?.classList.add("one");
      allBtns.forEach((e)=>{
        e.classList.remove('themeThreePrimaryKeys');
        e.classList.add('themeOnePrimaryKeys');
      });
      header?.classList.remove('themeThreeHeader');
      header?.classList.add('themeOneHeader');
      themeIntro?.classList.remove('themeThreeIntro');
      themeIntro?.classList.add('themeOneIntro');
      themeNumber?.classList.remove('themeThreeThemeNumber');
      themeNumber?.classList.add('themeOneThemeNumber');
      hero?.classList.remove('themeThreeBackgroundMain');
      hero?.classList.add('themeOneBackgroundMain');
      heroTwo?.classList.remove('themeThreeBackgroundMain');
      heroTwo?.classList.add('themeOneBackgroundMain');
      heroThree?.classList.remove('themeThreeBackgroundMain');
      heroThree?.classList.add('themeOneBackgroundMain');
      screen?.classList.remove('themeThreeBackgroundScreen');
      screen?.classList.add('themeOneBackgroundScreen');
      keyPad?.classList.remove('themeThreeeBackgroundKeyPad');
      keyPad?.classList.add('themeOneBackgroundKeyPad');
      resets.forEach((e)=>{
        e?.classList.remove('themeThreeDangerKeys');
        e?.classList.add('themeOneDangerKeys');
      })
      result?.classList.remove('themeThreeResultKeys');
      result?.classList.add('themeOneResultKeys');
      circle?.classList.remove("circleThree");
      circle?.classList.add('circleOne');
    }
  };