function
eval_clear()
{
	save_symbol(symbol(TRACE));
	save_symbol(symbol(TTY));

	binding = {};
	usrfunc = {};

	initscript();

	restore_symbol();
	restore_symbol();

	push_symbol(NIL); // result
}
