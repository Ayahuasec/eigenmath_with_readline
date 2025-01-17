function
eval_rationalize(p1)
{
	push(cadr(p1));
	evalf();
	rationalize();
}

function
rationalize()
{
	var i, n, p0, p1, p2;

	p1 = pop();

	if (istensor(p1)) {
		p1 = copy_tensor(p1);
		n = p1.elem.length;
		for (i = 0; i < n; i++) {
			push(p1.elem[i]);
			rationalize();
			p1.elem[i] = pop();
		}
		push(p1);
		return;
	}

	p2 = one;

	while (find_divisor(p1)) {
		p0 = pop();
		push(p0);
		push(p1);
		cancel_factor();
		p1 = pop();
		push(p0);
		push(p2);
		multiply_noexpand();
		p2 = pop();
	}

	push(p1);
	push(p2);
	reciprocate();
	multiply_noexpand();
}
