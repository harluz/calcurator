function get_calc(btn) {
	let display = document.getElementById("display");
	const equal_button = document.getElementById("equal");

	if (btn.value == "=") {
		display.value = eval(display.value);
	} else if (btn.value == "C" || (display.value == "0" && btn.value == "0")) {
		display.value = "0";
		equal_button.disabled = false;
	} else {
		if (display.value == "0" && !get_operator(btn.value)) {
			display.value = "";
		} else if (is_the_last_operator(display.value) && get_operator(btn.value)) {
			display.value = display.value.slice(0, -1);
		}
		display.value += btn.value;
		disabled_equal(display.value);
	}
}

// 数字のみ　/[0-9]*[0-9]$/であればtrue
function is_numeric_only(str) {
	let num = /^[0-9]*[0-9]$/;
	return num.test(str);
}

// 最後が演算子であればtrue
function is_the_last_operator(str) {
	let ope = /.[^0-9]$/;
	return ope.test(str);
}

// イコールを無効化する処理
function disabled_equal(str) {
	const equal_button = document.getElementById("equal");
	if (is_numeric_only(str) || is_the_last_operator(str)) {
		equal_button.disabled = true;
	} else {
		equal_button.disabled = false;
	}
}

// 押されたボタンが演算子か判定　演算子であればtrue
function get_operator(btn) {
	if (btn == "+" || btn == "-" || btn == "*" || btn == "/") {
		return true;
	} else {
		return false;
	}
}

// 最後の文字を取得する;
// function get_last_char(str) {
// 	let string_length = str.length;
// 	let last_char = str.slice(string_length - 1, string_length);
// 	return last_char;
// }

// 最後が演算子の状態であり、かつ、押されたボタンが演算子の場合
// 押されたボタンの演算子を上書きする
function update_operator(str, btn) {
	if (is_the_last_operator(str) && get_operator(btn)) {
		str = str.slice(0, -1);
	}
}
