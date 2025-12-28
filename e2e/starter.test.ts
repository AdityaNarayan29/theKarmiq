import { by, device, element, expect } from 'detox';

describe('App Launch', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the home screen', async () => {
    await expect(element(by.id('home-screen'))).toBeVisible();
  });

  it('should display welcome message', async () => {
    await expect(element(by.text('Welcome'))).toBeVisible();
  });
});
