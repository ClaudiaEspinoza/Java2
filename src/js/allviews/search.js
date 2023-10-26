class SearchView {
    _Parentone = document.querySelector('.search');
  
    getQuery() {
      const query = this._Parentone.querySelector('.search__field').value;
      this._clearInput();
      return query;
    }
  
    _clearInput() {
      this._Parentone.querySelector('.search__field').value = '';
    }
  
    addHandlerSearch(handler) {
      this._Parentone.addEventListener('click', function (e) {
        e.preventDefault();
        handler();
      });
    }
  }
  
  export default new SearchView();