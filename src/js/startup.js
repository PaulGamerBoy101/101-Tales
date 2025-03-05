fetch('../package.json')
  .then(res => res.json())
  .then(res => {
    version = res.version;
    createTab();
  });

    document.title = "101 Tales"; 


const sortable = Sortable.create(byId('tabbar'), {
  animation: 150
});


setTimeout(() => {
  byId('loading').classList.add('opacity-0');
  setTimeout(() => {
    byId('loading').style.display = 'none';
  }, 500);
}, 1000);


if (!window.navigator.onLine) {
  byId('offline').style.display = 'block';
}
