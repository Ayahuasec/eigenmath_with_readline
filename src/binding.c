void
eval_binding(struct atom *p1)
{
	struct atom *p2;
	p1 = cadr(p1);
	p2 = get_binding(p1);
	if (p2 == symbol(NIL))
		p2 = p1;
	push(p2);
}