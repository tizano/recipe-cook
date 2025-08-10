import { seo } from './seo.js';

describe('utils', () => {
  it('should work', () => {
    expect(
      seo({
        title: 'seo',
        description: 'This is a test description',
        keywords: 'test, seo',
        image: 'https://example.com/image.png',
      })
    ).toEqual('seo');
  });
});
