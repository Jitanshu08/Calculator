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
    out.value = eval(out.value).toFixed(2);
  } catch (error) {
    out.value = "Error";
  }
}
