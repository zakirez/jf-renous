document.querySelector('.menu').addEventListener('click',function(){const n=document.querySelector('nav');const open=n.classList.toggle('open');this.setAttribute('aria-expanded',open);this.textContent=open?'Fermer':'Menu';});const f=document.querySelector('form');if(f)f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);const body=`Nom : ${d.get('nom')}\nE-mail : ${d.get('email')}\nTéléphone : ${d.get('telephone')}\n\n${d.get('message')}`;location.href='mailto:jfrenous@free.fr?subject='+encodeURIComponent('Demande depuis le site JF RENOUS')+'&body='+encodeURIComponent(body);document.querySelector('#form-status').textContent='Votre messagerie va s’ouvrir. Relisez le message puis envoyez-le pour nous transmettre votre demande.';});
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
 }, { threshold: 0.06 });
 const targets = document.querySelectorAll('main .eyebrow, main h1, main h2, main h3, main p, main .actions > a, main .swoosh, main .card-photo, main .card .textlink, main .facts > div, main .activity-photo, main form > *, main .contact-panel > div > a, main .cta .button, footer .footer-top > *, footer .footer-bottom');
 targets.forEach((element, index) => {
  element.classList.add('scroll-reveal');
  element.style.setProperty('--reveal-delay', `${(index % 3) * 65}ms`);
  observer.observe(element);
 });
}
