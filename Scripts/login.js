

// code for pop x

function x() {
    
    window.location.href="../index.html"
  }

//   code for enter mobile number

  function go() {
    let num = document.getElementById("num").value;
    
    if (num.length < 10 || num.length > 10) {
      alert("Enter a valid Mobile Number");
      return;
    }


    // if number is valid


    let number = { num };
    let arr = JSON.parse(localStorage.getItem("pharmuser"));
    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("pharmuser"));
    }
  
    arr.push(number);
    localStorage.setItem("pharmuser", JSON.stringify(arr));
  
    let parent = document.getElementById("entry");
    parent.innerHTML = "";
    var a = ran();
    var b = ran();
    var c = ran();
    var d = ran();
    alert(`Your OTP is ${a} ${b} ${c} ${d}`);
    console.log(a, b, c, d);

    parent.innerHTML = `

      <h4 style="padding-left:20px"> Enter OTP has been sent to ${num}</h4>
      <div class="otpflex">
      <input type="text" id="otp1" autofocus required maxlength= "1"/>
      <input type="text" id="otp2" autofocus required maxlength= "1"/>
      <input type="text" id="otp3" autofocus required maxlength= "1"/>
      <input type="text" id="otp4" autofocus required maxlength= "1"/>
      </div>
      <div class="resendflex">
      <p onclick="numc()">Change Number</p>
      <p onclick="resend(${a},${b},${c},${d})">Resend OTP</p>
      </div>
      <button class="go" onclick="logged(${a},${b},${c},${d})">Continue</button>
      `;
  }


//   change number
  
  function numc() {
    let parent = document.getElementById("entry");
    
    parent.innerHTML =
     `<input type="text" placeholder="Enter your Phone number" id="num" />
     <button class="go" onclick="go()">Continue</button>`;
  }

//   resend OTP
  
  function resend(a, b, c, d) {
    alert(`Your OTP is ${a} ${b} ${c} ${d}`);
  }
  
  function ran() {
    return Math.floor(Math.random() * 10);
  }

//   cross checking OTP
  
  var loog = false;
  function logged(a, b, c, d) {
    let o1 = document.getElementById("otp1").value;
    let o2 = document.getElementById("otp2").value;
    let o3 = document.getElementById("otp3").value;
    let o4 = document.getElementById("otp4").value;
  
    console.log(o1, o2, o3, o4);
    if (o1 == a && o2 == b && o3 == c && o4 == d) {
      loog = true;
  

    window.location.href="../index.html"
      
  
      let arr = JSON.parse(localStorage.getItem("pharmuser"));
      let session = JSON.parse(localStorage.getItem("session"));
      session = [];
      let us = arr[arr.length - 1];
      session.push(us);
      localStorage.setItem("session", JSON.stringify(session));
      console.log(session);


    }

    // If OTP is not matched
    
    else {
      alert("Enter Valid Number and OTP sent");
    }
  }

