$(function () {
	$("#username").blur(function() {
		var str = $("#username").val();
		isUsername(str);
	})
	$("#emaile").blur(function() {
		var str = $("#emaile").val();
		isEmaile(str);
	})
	$("#pas").blur(function() {
		var str = $("#pas").val();
		isPas(str);
	})
	$("#pasagain").blur(function() {
		var str = $("#pasagain").val();
		isPasagain(str);
	})
	$("#idnum").blur(function() {
		var str = $("#idnum").val();
		isIdnum(str);
	})
	$("#phonenum").blur(function() {
		var str = $("#phonenum").val();
		isPhonenum(str);
	})

	$("#submit").click(function() {
		var user_str = $("#username").val();
		var pas_str = $("#pas").val();
		var emaile_str = $("#emaile").val();
		var pasagain_str = $("#pasagain").val();
		var idnum_str = $("#idnum").val();
		var phonenum_str = $("#phonenum").val();
		var error_str = '';
		var tag = 0;
		if (!isUsername(user_str)) {
			tag = 1;
			error_str = error_str + "用户名输入不正确！\n";
		}
		if (!isEmaile(emaile_str)) {
			tag = 1;
			error_str = error_str + "电子邮箱输入不正确！\n";
		}
		if (!isPas(pas_str)) {
			tag = 1;
			error_str = error_str + "密码输入不正确！\n";
		}
		if (!isPasagain(pasagain_str)) {
			tag = 1;
			error_str = error_str + "请再次输入密码！\n";
		}
		if (!isIdnum(idnum_str)) {
			tag = 1;
			error_str = error_str + "身份证号码格式不正确！\n";
		}
		if (!isPhonenum(phonenum_str)) {
			tag = 1;
			error_str = error_str + "电话号码格式不正确！\n";
		}
		if (tag == 1) {
			alert(error_str);
			return false;
		}
	})
})

function isUsername(str) {
	if (str == '') {
		$("#usernampromt").css("color","red");
		$("#usernampromt").text("用户名不能为空！");
		return false;
	}else{
		var re = /^[A-Za-z][a-za-z0-9_]{3,15}$/;
		if (re.test(str)) {
			$("#usernampromt").css("color","black");
			$("#usernampromt").text("*");
			return true;
		}else{
			$("#usernampromt").css("color","red");
			$("#usernampromt").text("*只能以英文开头，4-16个英文、数字或下画线字符！");
			return false;
		}
	}	
}

function isEmaile(str) {
	if (str == '') {
		$("#emailepromt").css("color","red");
		$("#emailepromt").text("邮箱不能为空！");
		return false;
	}else{
		var re = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		if (re.test(str)) {
			$("#emailepromt").css("color","black");
			$("#emailepromt").text("*");
			return true;
		}else{
			$("#emailepromt").css("color","red");
			$("#emailepromt").text("*电子邮箱格式不正确");
			return false;
		}
	}	
}

function isPas(str) {
	if (str == '') {
		$("#paspromt").css("color","red");
		$("#paspromt").text("密码不能为空！");
		return false;
	}else{
		var re = /^[A-Za-z0-9_]{5,23}$/;
		if (re.test(str)) {
			$("#paspromt").css("color","black");
			$("#paspromt").text("*");
			return true;
		}else{
			$("#paspromt").css("color","red");
			$("#paspromt").text("*必须为英文、数字、下画线，且长度在6-24个字符");
			return false;
		}
	}
}

function isPasagain(str) {
	if (str == '') {
		$("#pasagainpromt").css("color","red");
		$("#pasagainpromt").text("两次密码不一致！");
		return false;
	}else{
		var re = /^[A-Za-z0-9_]{5,23}$/;
		if (re.test(str)) {
			$("#pasagainpromt").css("color","black");
			$("#pasagainpromt").text("*");
			return true;
		}else{
			$("#pasagainpromt").css("color","red");
			$("#pasagainpromt").text("两次密码不一致！");
			return false;
		}
	}	
}

function isIdnum(str) {
	if (str == '') {
		return true;
	}else{
		var re = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		if (re.test(str)) {
			return true;
		}else{
			$("#idnumpromt").css("color","red");
			$("#idnumpromt").text("身份证号码格式不正确！");
			return false;
		}
	}
}

function isPhonenum(str) {
	if (str == '') {
		return true;
	}else{
		var re = /^(?:(?:\(0\d{2,3}\)[- ]?\d{7,8})|(?:(?:0\d{2,3}[- ]?)?\d{7,8})|(?:1\d{10}))$/;
		if (re.test(str)) {
			return true;
		}else{
			$("#phonenumpromt").css("color","red");
			$("#phonenumpromt").text("电话号码格式不正确！");
			return false;
		}
	}
}
