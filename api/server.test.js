require('dotenv').config();

describe('server', function() {
	describe('environment', function() {
		it('is using testing environment', function() {
			expect(process.env.NODE_ENV).toBe('testing');
		});
	});
});
