const faqs = [
  {
    q: "Cine suntem noi?",
    a: "Voluntari ai Ligii Studenților din Facultatea de Electronică și Telecomunicații (LSFETc)..."
  },
  {
    q: "Ce este ESU?",
    a: "Electronics Summer University (ESU) este o Universitate de Vară..."
  },
  {
    q: "Ce se întâmplă la ESU?",
    a: "Timp de două săptămâni, elevii experimentează viața de student..."
  },
  {
    q: "Care este scopul proiectului?",
    a: "Pregătirea elevilor pentru mediul universitar..."
  },
  {
    q: "Când se desfășoară caravana?",
    a: "În perioada 11 martie – 24 mai."
  },
  {
    q: "Când se desfășoară înscrierea?",
    a: "În perioada 27 mai – 30 iunie."
  },
  {
    q: "Când se desfășoară proiectul?",
    a: "În perioada 21 august – 3 septembrie."
  },
  {
    q: "Unde se desfășoară proiectul?",
    a: "În Timișoara."
  },
  {
    q: "Cine se poate înscrie?",
    a: "Orice elev de clasa a XI-a."
  },
  {
    q: "Care este numărul de participanți la acest proiect?",
    a: "Vor participa 100 de elevi din toată țara."
  },
  {
    q: "Cum știu dacă am fost selectat să particip?",
    a: "Veți fi contactați pentru confirmare și vor fi postate listele."
  },
  {
    q: "Mesele ne sunt asigurate?",
    a: "Da, toate mesele sunt asigurate de noi."
  },
  {
    q: "Cazarea ne este asigurată? Unde?",
    a: "Da, la unul din căminele UPT din Complexul Studențesc."
  },
  {
    q: "De câți bani avem nevoie?",
    a: "Transportul cu trenul este gratuit. Singurii bani necesari sunt pentru cheltuieli personale."
  },
  {
    q: "Trebuie să mă înscriu la ETcTI dacă particip la ESU?",
    a: "Nu, doar dacă dorești. <3"
  }
];

const faqList = document.getElementById('faq-list');

faqs.forEach(({ q, a }) => {
  const item = document.createElement('div');
  item.className = 'faq-item';

  item.innerHTML = `
    <div class="faq-question">
      ${q}
      <span class="faq-icon">+</span>
    </div>
    <div class="faq-answer">${a}</div>
  `;

  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });

  faqList.appendChild(item);
});
    