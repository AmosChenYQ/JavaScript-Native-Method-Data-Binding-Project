import { observer } from "./observer";
; (function (doc) {
    var oName = doc.querySelector("#name");
    var oAge = doc.querySelector("#age");
    var oEmail = doc.querySelector("#email");
    var oTel = doc.querySelector("#tel");
    var oSubmitBtn = doc.querySelector("#submitBtn");
    var oInfoTable = doc.querySelector("#infoTable");

    var userInfo = observer({
        name: "",
        age: "",
        email: "",
        tel: ""
    }, oInfoTable);

    console.log(userInfo);

    var init = function () {
        bindEvent();
    }

    function bindEvent() {
        oSubmitBtn.addEventListener("click", handleSubmitBtn);
    }

    function handleSubmitBtn() {
        var _name = oName.value.trim();
        var _email = oEmail.value.trim();
        var _age = oAge.value.trim();
        var _tel = oTel.value.trim();

        _name && (_name != userInfo.name) && (userInfo.name = _name);
        _age && (_age != userInfo.age) && (userInfo.age = _age);
        _email && (_email != userInfo.email) && (userInfo.email = _email);
        _tel && (_tel != userInfo.tel) && (userInfo.tel = _tel);

        _name = "";
        _email = "";
        _age = "";
        _tel = "";
    }

    init();

})(document);