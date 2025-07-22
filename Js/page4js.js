let selectedAmount = null;
let selectedType = null;
let selectedPayment = null;

const amountButtons  = document.querySelectorAll('.amount-btn');
const typeRadios     = document.querySelectorAll('input[name="donationType"]');
const paymentButtons = document.querySelectorAll('.payment-btn');
const continueBtn    = document.getElementById('continueBtn');
const customInput    = document.getElementById('customAmount');   // νέο πεδίο

/* ---------- Επιλογή προκαθορισμένου ποσού ---------- */
amountButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    /* 1. σβήνουμε ενεργά κουμπιά */
    amountButtons.forEach(b => b.classList.remove('active'));
    /* 2. ενεργοποιούμε αυτό */
    btn.classList.add('active');
    /* 3. βάζουμε selectedAmount */
    selectedAmount = btn.dataset.amount;
    /* 4. αδειάζουμε custom input */
    customInput.value = '';
    checkReady();
  });
});

/* ---------- Πληκτρολόγηση custom ποσού ---------- */
customInput.addEventListener('input', () => {
  /* 1. βγάζουμε active από τα κουμπιά */
  amountButtons.forEach(b => b.classList.remove('active'));

  /* 2. ελέγχουμε το value */
  const val = parseFloat(customInput.value);
  if (!isNaN(val) && val > 0) {
    selectedAmount = val;
  } else {
    selectedAmount = null;
  }
  checkReady();
});

/* ---------- Επιλογή τύπου δωρεάς (radio) ---------- */
typeRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    selectedType = radio.value;
    checkReady();
  });
});

/* ---------- Επιλογή τρόπου πληρωμής ---------- */
paymentButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    paymentButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedPayment = btn.dataset.payment;
    checkReady();
  });
});

/* ---------- Έλεγχος ετοιμότητας ---------- */
function checkReady() {
  continueBtn.disabled = !(selectedAmount && selectedType && selectedPayment);
}

/* ---------- Εμφάνιση φόρμας πληρωμής ---------- */
continueBtn.addEventListener('click', () => {
  document.getElementById('paymentForm').style.display = 'block';
});

/* ---------- Fake submit ---------- */
const fakeForm = document.getElementById('fakePaymentForm');
fakeForm.addEventListener('submit', e => {
  e.preventDefault(); // no reload
  const name = document.getElementById('name').value;
  alert(`Ευχαριστούμε, ${name}, για τη δωρεά σας!`);
  fakeForm.reset();
  document.getElementById('paymentForm').style.display = 'none';
});
