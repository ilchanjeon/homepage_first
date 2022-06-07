const meemberFrm = document.querySelector('#memberFrm');

memberFrm.onsubmit = function () {
    const id = document.querySelector("#id");
    const pwd = document.querySelector('#pwd');
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const ssn1 = document.querySelector("#ssn1")
    const ssn2 = document.querySelector("#ssn2")
    const phone = document.querySelector("#phone")

    // 아이디 검사
    const regExp1 = /^[a-z][a-z\d]{3,11}$/;
    if(!regExpTest(regExp1
                    ,id
                    ,"아이디는 영소문자로 시작하는 4~12글자입니다."))
        return false;

    // 비밀번호 검사
    const regExpArr = [/^.{4,15}$/, /\d/, /[a-zA-Z]/, /[\\*!&]/];

        for (let i = 0; i < regExpArr.length; i++) {
          if (
            !regExpTest(
              regExpArr[i],
              pwd,
              "비밀번호는 15자리 내외 숫자/문자/특수문자를 포함해야합니다."
            )
          ) {
            return false;
          }
        }
    
    // 이름검사
    const regExp3 = /^[가-힣]{2,}$/;
    if (!regExpTest(regExp3, name, "한글2글자이상 입력하세요."))
        return false;

    // 주민번호 검사
    const regExp4 = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[01])$/;
    const regExp5 = /^[1234]\d{6}$/;
        if (!regExpTest(regExp4, ssn1, "숫자만 입력하세요.")) return false;
        if (!regExpTest(regExp5, ssn2, "숫자만 입력하세요.")) return false;
        if (!ssnCheck(ssn1.value, ssn2.value)) {
          alert("올바른 주민번호가 아닙니다.");
          return false;
        }

    // 제출
    const idVal = id.value;
    const infoVal = {
      pwd : pwd.value,
      email : email.value,
      name : name.value,
      ssn1 : ssn1.value,
      ssn2 : ssn2.value,
      phone : phone.value
    };

    const infoValStr = JSON.stringify(infoVal);
    localStorage.setItem(idVal, infoValStr);
    
    location.href="./index.html";
};

function ssnCheck(ssn1, ssn2) {
    const ssn = ssn1 + ssn2;
    let total = 0;
    for (let i = 0; i < 12; i++) {
      if (i < 8) {
        total += parseInt(ssn.substr(i, 1)) * (i + 2);
      } else {
        total += parseInt(ssn.substr(i, 1)) * (i - 6);
      }
    }
    //마지막수와 비교할 수 구하기
    const result = (11 - (total % 11)) % 10;
    //마지막수(13번째 자리)
    const num13 = parseInt(ssn.substr(12, 1));
    //결과
    if (result == num13) return true;
    else return false;
}

function regExpTest(regExp, el, msg) {
    if (regExp.test(el.value)) return true;
    //적합한 문자열이 아닌 경우
    alert(msg);
    el.value = "";
    el.focus();
    return false;
  }