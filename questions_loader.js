// This file combines all subject question banks into one QBANK object
// It must be loaded AFTER all individual subject files

const QBANK = {
  Geography: QBANK_GEOGRAPHY || [],
  English: QBANK_ENGLISH || [],
  Math: QBANK_MATH || [],
  German: QBANK_GERMAN || [],
  Science: QBANK_SCIENCE || []
};

// Log loaded questions for debugging
console.log('✅ QBANK loaded:');
Object.keys(QBANK).forEach(subject => {
  console.log(`  ${subject}: ${QBANK[subject].length} questions`);
});
