import { describe, expect, it } from 'vitest';
import { readColorMap } from '../../../src/services/colors/readColorMap';
import { getColor } from '../../../src/services/colors/getColor';

describe('readColorMap', () => {
	it("keeps Notion's colors and drops any other value", () => {
		const map = readColorMap({ done: 'green', bad: 'red;} body{display:none', number: 3 });
		expect({ ...map }).toEqual({ done: 'green' });
	});

	it('keeps the extended palette colors (icon hues)', () => {
		const map = readColorMap({ a: 'teal', b: 'coral', c: 'navy' });
		expect({ ...map }).toEqual({ a: 'teal', b: 'coral', c: 'navy' });
	});

	it('reads a value named like an Object property as a plain key', () => {
		const map = readColorMap(JSON.parse('{"__proto__": "red", "todo": "blue"}'));
		expect(getColor(map, 'constructor')).toBeNull();
		expect(getColor(map, 'toString')).toBeNull();
		expect(getColor(map, '__proto__')).toBe('red');
		expect(getColor(map, 'Todo')).toBe('blue');
	});

	it('gives an empty map for missing or malformed data', () => {
		expect(Object.keys(readColorMap(undefined))).toEqual([]);
		expect(Object.keys(readColorMap('red'))).toEqual([]);
	});
});
