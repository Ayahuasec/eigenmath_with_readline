#include "app.h"

void
emit_medium_space(void)
{
	double w;

	if (emit_level == 0)
		w = get_width(TIMES_FONT, 'n');
	else
		w = get_width(SMALL_TIMES_FONT, 'n');

	w /= 2.0;

	push_double(EMIT_SPACE);
	push_double(0.0);
	push_double(0.0);
	push_double(w);

	list(4);
}