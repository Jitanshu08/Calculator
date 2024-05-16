var out = document.getElementById("output");

function display(input) {
  out.value += input;
}

function reset() {
  out.value = "0";
}

function del() {
  out.value = out.value.slice(0, -1);
}

function evaluation() {
  try {
    let result = eval(out.value);
    if (result % 1 != 0) {
      out.value = eval(out.value).toFixed(2);
    } else {
      out.value = result;
    }
  } catch (error) {
    out.value = "Error";
  }
}
