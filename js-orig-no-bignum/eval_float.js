function
eval_float(p1)
{
	var t = expanding;
	expanding = 1;
	push(cadr(p1));
	evalf();
	floatfunc();
	expanding = t;
}