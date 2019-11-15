function insert(num) {
    document.form.textviev.value = document.form.textviev.value + num;
}

function clean() {
    document.form.textviev.value = "";
}

function back() {
    const exp = document.form.textviev.value;
    document.form.textviev.value = exp.slice(0, -1);
}
function result() {
    const exp = document.form.textviev.value;
    if(exp) { document.form.textviev.value = eval(exp);
    }
}
