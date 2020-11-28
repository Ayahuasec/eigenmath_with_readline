#include "app.h"

// draws graphs too

void
draw_formula(double x, double y, float *p)
{
	for (;;) {

		switch ((int) *p) {

		case DRAW_CHAR:
			draw_char(x + p[1], y + p[2], p[3], p[4]);
			p += 5;
			break;

		case DRAW_STROKE:
			draw_stroke(x + p[1], y + p[2], x + p[3], y + p[4], p[5]);
			p += 6;
			break;

		case DRAW_POINT:
			draw_point(x + p[1], y + p[2]);
			p += 3;
			break;

		default:
			return;
		}
	}
}
