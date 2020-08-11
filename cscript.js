
var ele = document.getElementById('display');

function clr()
{
    ele.value = null;
}
function dis(num)
{
    ele.value += num;
}
function solve()
{
    ele.value = eval(ele.value);
}
