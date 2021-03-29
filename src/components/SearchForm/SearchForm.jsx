export default function () {
    function handleSubmit(e) {
        e.preventDefault();
        let query = this.search.value.toLowerCase().trim().split(" "); //[mustang, ford]
        const searchFields = ["make", "model", "year"];
        CARS = DATA.filter((car) => {
        return query.every((word) => {
            return (
            !word || searchFields.some((field) => {
                return `${car[field]}`.toLowerCase().trim().includes(word);
            })
            );
        });
        });
        console.log("search result", CARS.length);
    }; 
  return (
    <form onSubmit={handleSubmit} action="#" class="col-6 form me-auto" name="searchForm" id="searchForm">
        <div class="input-group">
            <input type="search" name="search" class="form-control" placeholder="Введіть запит" aria-label="Search car" aria-describedby="button-addon2">
            <button class="btn-search btn btn-outline-secondary" type="submit" aria-label="search" value="hello">Пошук</button>
        </div>
    </form>
  );
}
