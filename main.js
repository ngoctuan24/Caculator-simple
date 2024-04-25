function XoaHet() 
{
    document.getElementById("result").value = "";
}

function display(value) 
{
    document.getElementById("result").value += value;
}

function DauBang() 
{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function XoaTungKyTu() 
{
    var result = document.getElementById("result").value;
    if (result.length > 0) 
    {
      result = result.substring(0, result.length - 1);
      document.getElementById("result").value = result;
    }
}  