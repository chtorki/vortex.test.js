const Vortex = require('./vortex');

test('حساب مجموع السلسلة من 1 إلى 100', () => {
  const result = Vortex.compute(1, 100);
  expect(result.sum).toBe("5050");
});

test('التحقق من عنصر المنتصف لسلسلة فردية', () => {
  const result = Vortex.compute(1, 5); // 1, 2, 3, 4, 5
  expect(result.middle).toBe("3");
});

test('حماية الذاكرة عند إدخال أرقام ضخمة', () => {
  const start = "1000000000000000000";
  const end = "1000000000000000010";
  const result = Vortex.compute(start, end);
  expect(result.error).toBeUndefined();
  expect(typeof result.sum).toBe("string");
});