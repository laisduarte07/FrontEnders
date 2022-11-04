 
        document.querySelectorAll('button').forEach((btn) => {
            btn.addEventListener('click', () => {
              if (btn.className === 'det-btn-p1') {
                document.querySelector('.verso-p1').classList.add('open');
              }
    
              if (btn.className === 'buy-btn1') {
                document.querySelector('.verso-p1').classList.remove('open');
            }
        });
      }); 

     
      document.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (btn.className === 'det-btn-p2') {
            document.querySelector('.verso-p2').classList.add('open');
          }

          if (btn.className === 'buy-btn2') {
            document.querySelector('.verso-p2').classList.remove('open');
        }
    });
  }); 
 
  document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.className === 'det-btn-p3') {
        document.querySelector('.verso-p3').classList.add('open');
      }

      if (btn.className === 'buy-btn3') {
        document.querySelector('.verso-p3').classList.remove('open');
    }
});
}); 


document.querySelectorAll('button').forEach((btn) => {
btn.addEventListener('click', () => {
  if (btn.className === 'det-btn-p4') {
    document.querySelector('.verso-p4').classList.add('open');
  }

  if (btn.className === 'buy-btn4') {
    document.querySelector('.verso-p4').classList.remove('open');
}
});
}); 
 
document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.className === 'det-btn-p5') {
      document.querySelector('.verso-p5').classList.add('open');
    }

    if (btn.className === 'buy-btn5') {
      document.querySelector('.verso-p5').classList.remove('open');
  }
});
}); 


document.querySelectorAll('button').forEach((btn) => {
btn.addEventListener('click', () => {
if (btn.className === 'det-btn-p6') {
  document.querySelector('.verso-p6').classList.add('open');
}

if (btn.className === 'buy-btn6') {
  document.querySelector('.verso-p6').classList.remove('open');
}
});
}); 