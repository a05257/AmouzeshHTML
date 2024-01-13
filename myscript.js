//کنترل ورودیها
//تعیین نام کاربری

UserName.addEventListener("click",function func1() {
    let para = document.createElement("P");
    let text= document.createTextNode("یک نام کاربری به دلخواه انتخاب کنید. ");
    this.appendChild(para);
    para.appendChild(text);
    console.log("یک نام کاربری به دلخواه انتخاب کنید. ")
    });
    UserName.addEventListener("keypress",function func2() {
    let para = document.createElement("P");
    let text= document.createTextNode("نام کاربری مجاز نیست. ");
    this.appendChild(para);
    para.appendChild(text);
    console.log("نام کاربری مجاز نیست. ")
    });

//تعیین پسورد

    Pass.addEventListener("click",function func3() {
    let para = document.createElement("P");
    let text= document.createTextNode("رمز قوی وارد نمایید.");
    this.appendChild(para);
    para.appendChild(text);
    console.log("رمز قوی وارد نمایید.")
   });
    Pass.addEventListener("keypress",function func4() {
    let para = document.createElement("P");
    let text= document.createTextNode("رمز ورودی مجاز نیست.");
    this.appendChild(para);
    para.appendChild(text);
    console.log("رمز ورودی مجاز نیست.")
   });



   //تایید پسورد

    RePass.addEventListener("click",function func5() {
    let para = document.createElement("P");
    let text= document.createTextNode ("رمز واردشده مطابقت ندارد.");
    this.appendChild(para);
    para.appendChild(text);
    console.log("رمز واردشده مطابقت ندارد.")

   });
    RePass.addEventListener("keypress",function func6() {
    let para = document.createElement("P");
    let text= document.createTextNode("رمز واردشده مطابقت ندارد.");
    para.appendChild(text);
    console.log("رمز واردشده مطابقت ندارد.")

   });

   //درستی ایمیل

    let Email = ""
    const RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})$/; 
    switch (true){
case Email.length < 6:
  case RegExp.test(Email)==false:
  console.log ("its false");
break;
    default : console.log("its true");
}

//ساخت حساب کاربری

function User(UserName, Pass, Sex, BrithdayDat, Education, Detail, Email) {
    this.UserName= UserName,
    this.Pass= Pass,
    this.Sex= Sex,
    this.BrithdayDat= BrithdayDat,
    this.Education= Education,
    this.Detail= Detail,
    this.Email= Email
    };

 User.prototype.print = function () {
   return this.UserName + this.Detail
}

