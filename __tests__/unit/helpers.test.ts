import {
  formatCurrency,
  formatDate,
  truncateText,
  delay,
  isValidEmail,
} from '../../src/utils/helpers';

describe('Helper Functions', () => {
  describe('formatCurrency', () => {
    it('formats USD currency correctly', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });

    it('formats EUR currency correctly', () => {
      expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56');
    });

    it('handles zero amount', () => {
      expect(formatCurrency(0)).toBe('$0.00');
    });

    it('handles negative amounts', () => {
      expect(formatCurrency(-50)).toBe('-$50.00');
    });
  });

  describe('formatDate', () => {
    it('formats date string correctly', () => {
      const result = formatDate('2024-01-15');
      expect(result).toBeTruthy();
    });

    it('formats Date object correctly', () => {
      const date = new Date('2024-01-15');
      const result = formatDate(date);
      expect(result).toBeTruthy();
    });

    it('accepts custom options', () => {
      const result = formatDate('2024-01-15', { year: 'numeric', month: 'long', day: 'numeric' });
      expect(result).toContain('January');
      expect(result).toContain('15');
      expect(result).toContain('2024');
    });
  });

  describe('truncateText', () => {
    it('returns original text if shorter than maxLength', () => {
      expect(truncateText('Hello', 10)).toBe('Hello');
    });

    it('truncates text and adds ellipsis', () => {
      expect(truncateText('Hello World', 5)).toBe('Hello...');
    });

    it('handles exact length', () => {
      expect(truncateText('Hello', 5)).toBe('Hello');
    });

    it('handles empty string', () => {
      expect(truncateText('', 5)).toBe('');
    });
  });

  describe('delay', () => {
    it('delays execution for specified time', async () => {
      const start = Date.now();
      await delay(100);
      const elapsed = Date.now() - start;
      expect(elapsed).toBeGreaterThanOrEqual(90);
    });
  });

  describe('isValidEmail', () => {
    it('validates correct email formats', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('user+tag@example.com')).toBe(true);
    });

    it('rejects invalid email formats', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('invalid@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('user @example.com')).toBe(false);
    });
  });
});
