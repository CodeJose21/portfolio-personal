import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

const sectionIds = ['contact', 'projects', 'education', 'experience', 'soft', 'personal'] as const;

async function openSection(page: Page, id: typeof sectionIds[number]) {
  await page.locator(`.face-navigation a[href="#${id}"]`).click();
  await expect(page).toHaveURL(new RegExp(`#${id}$`));
  await expect(page.locator(`.face-interactive.face-${id}`)).toBeVisible();
}

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem('portfolio-locale')) localStorage.setItem('portfolio-locale', 'es');
  });
});

test('direct links, keyboard navigation and browser history select the right section', async ({ page }) => {
  await page.goto('./#education');
  await expect(page.locator('.face-interactive.face-education')).toBeVisible();
  // Inactive content stays mounted without leaking into the tab order.
  await expect(page.locator('.face-interactive')).toHaveCount(6);
  await expect(page.locator('.face-interactive:visible')).toHaveCount(1);
  const projects = page.locator('.face-navigation a[href="#projects"]');
  await projects.focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#projects$/);
  await openSection(page, 'soft');
  await page.goBack();
  await expect(page.locator('.face-interactive.face-projects')).toBeVisible();
  await page.goBack();
  await expect(page.locator('.face-interactive.face-education')).toBeVisible();
  await page.goForward();
  await expect(page.locator('.face-interactive.face-projects')).toBeVisible();
});

test('language changes retain the face and selected education stage', async ({ page }) => {
  await page.goto('./#education');
  const educationButtons = page.locator('.education-tabs button');
  await educationButtons.nth(1).click();
  const selectedId = await educationButtons.nth(1).getAttribute('id');
  for (const [name, code] of [['English', 'en'], ['Deutsch', 'de'], ['Español', 'es']]) {
    await page.getByRole('button', { name, exact: true }).click();
    await expect(page.locator('html')).toHaveAttribute('lang', code);
    await expect(page).toHaveURL(/#education$/);
    await expect(page.locator(`#${selectedId}`)).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('.education-panel')).toContainText('TU Dortmund');
  }
  await expect(page.locator('.cube-scene')).not.toHaveClass(/is-turning/);
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('.face-interactive.face-education')).toBeVisible();
});

test('rapid navigation and interrupted language rolls do not lock controls', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await openSection(page, 'projects');
  await page.getByRole('button', { name: 'Deutsch', exact: true }).click();
  await openSection(page, 'education');
  await page.getByRole('button', { name: 'Español', exact: true }).click();
  await page.locator('.education-tabs button').last().click();
  await expect(page.locator('.education-tabs button').last()).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.cube-scene')).not.toHaveClass(/is-turning/);
  await openSection(page, 'contact');
  await expect(page.getByRole('link', { name: /josegonzb@gmail.com/ })).toBeVisible();
});

test('empty experience uses an intentional message and projects retain their statuses', async ({ page }) => {
  await page.goto('./#experience');
  await expect(page.locator('.face-experience .work-card')).toHaveCount(0);
  await expect(page.locator('.face-experience')).not.toContainText('Por completar');
  await openSection(page, 'projects');
  await expect(page.locator('.face-projects .work-card')).toHaveCount(3);
  for (const status of ['En curso', 'En pausa', 'Completado']) {
    await expect(page.locator('.face-projects')).toContainText(status);
  }
});

test('reduced motion skips navigation and language animations', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./#education');
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await openSection(page, 'personal');
  await expect(page.locator('.cube-scene')).not.toHaveClass(/is-turning/);
  expect(await page.locator('.cube').evaluate(element => element.getAnimations().length)).toBe(0);
});

test('enabling reduced motion during a roll cancels animation without losing navigation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('./#education');
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('.cube-scene')).toHaveClass(/is-turning/);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('.cube-scene')).not.toHaveClass(/is-turning/);
  expect(await page.locator('.cube').evaluate(element => element.getAnimations().length)).toBe(0);
  await openSection(page, 'projects');
  await expect(page.locator('.face-interactive.face-projects')).toBeVisible();
});

test('linear view exposes every section and preserves selected content when returning', async ({ page }) => {
  await page.goto('./#education');
  await page.locator('.education-tabs button').last().click();
  const selectedId = await page.locator('.education-tabs button').last().getAttribute('id');
  await page.getByRole('button', { name: 'Vista lineal', exact: true }).click();
  await expect(page.locator('.face-interactive:visible')).toHaveCount(6);
  await page.locator('.face-navigation a[href="#personal"]').click();
  await expect(page).toHaveURL(/#personal$/);
  await page.getByRole('button', { name: 'Vista dado', exact: true }).click();
  await expect(page.locator('.face-interactive:visible')).toHaveCount(1);
  await expect(page.locator('.face-interactive.face-personal')).toBeVisible();
  await openSection(page, 'education');
  await expect(page.locator(`#${selectedId}`)).toHaveAttribute('aria-pressed', 'true');
});

test('all cube faces and the complete linear view pass automated accessibility checks', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  for (const id of sectionIds) {
    await openSection(page, id);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(results.violations, `Accessibility violations in ${id}`).toEqual([]);
  }
  await page.getByRole('button', { name: 'Vista lineal', exact: true }).click();
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(results.violations).toEqual([]);
});

test.describe('touch interaction', () => {
  test.use({ hasTouch: true, viewport: { width: 390, height: 844 } });

  test('soft-skill evidence opens and closes with a tap', async ({ page }) => {
    await page.goto('./#soft');
    const details = page.locator('.face-soft details');
    expect(await details.count()).toBeGreaterThan(0);
    for (const detail of await details.all()) {
      await detail.locator('summary').tap();
      await expect(detail).toHaveAttribute('open', '');
      await detail.locator('summary').tap();
      await expect(detail).not.toHaveAttribute('open', '');
    }
  });
});

for (const width of [320, 390, 680, 768, 1024, 1440]) {
  test(`layout stays within ${width}px and produces a reviewable visual`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('./');
    for (const language of ['Español', 'English', 'Deutsch']) {
      await page.getByRole('button', { name: language, exact: true }).click();
      for (const id of sectionIds) {
        await openSection(page, id);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        expect(overflow, `Horizontal overflow in ${id}, ${language}, at ${width}px`).toBeLessThanOrEqual(1);
        const face = page.locator(`.face-interactive.face-${id}`);
        const box = await face.boundingBox();
        expect(box).not.toBeNull();
        expect(box!.x).toBeGreaterThanOrEqual(-1);
        expect(box!.x + box!.width).toBeLessThanOrEqual(width + 1);
      }
    }
    await page.getByRole('button', { name: 'Español', exact: true }).click();
    await openSection(page, 'contact');
    await testInfo.attach(`cube-${width}px`, { body: await page.screenshot({ fullPage: true }), contentType: 'image/png' });
    await page.getByRole('button', { name: 'Vista lineal', exact: true }).click();
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(1);
    await testInfo.attach(`linear-${width}px`, { body: await page.screenshot({ fullPage: true }), contentType: 'image/png' });
  });
}
