require('dotenv').config();

describe('server', function() {
	describe('environment', function() {
		it('is using testing environment', function() {
			console.log('secreeetttt', process.env.JWT_SECRET);
			expect(process.env.NODE_ENV).toBe('testing');
		});
	});
});
