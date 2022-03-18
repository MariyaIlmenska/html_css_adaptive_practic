document.addEventListener('DOMContentLoaded', function() {
  //меню-поиска
  document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('#search-form').classList.add('is-active')
  })
  document.querySelector('#exit').addEventListener('click', function() {
    document.querySelector('#search-form').classList.remove('is-active')
  })

  //меню-бургер
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
    document.querySelector('#burger').classList.toggle('is-active-burger')
  })


  //меню табы
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      //console.log(path)
      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      const target = `[data-target="${path}"]`
      //console.log(target)
      document.querySelector(target).classList.add('tab-content-active')

      //
      document.querySelectorAll('.tabs__btn').forEach(function(tabBtn) {
        tabBtn.classList.remove('tab-btn-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('tab-btn-active')
   })
  })
})
