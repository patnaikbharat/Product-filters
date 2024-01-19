import './index.css'

const FiltersGroup = props => {
  const {searchInput, onClickClearFilters} = props
  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachCategory => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategory = () => {
        changeCategory(eachCategory.categoryId)
      }
      const categoryStyle =
        eachCategory.categoryId === activeCategoryId
          ? 'list-item selected'
          : 'list-item'

      return (
        <>
          <li className="list-button" type="button" onClick={onClickCategory}>
            <p className={categoryStyle}>{eachCategory.name}</p>
          </li>
        </>
      )
    })
  }

  const renderRatingList = () => {
    const {ratingsList} = props

    return ratingsList.map(eachRating => {
      const {changeRating, activeRatingId} = props
      const onClickRating = () => {
        changeRating(eachRating.ratingId)
      }
      const ratingStyle =
        eachRating.ratingId === activeRatingId
          ? 'rating-text selected'
          : 'rating-text'

      return (
        <li className="list-button" type="button" onClick={onClickRating}>
          <img
            src={eachRating.imageUrl}
            className="rating-image"
            alt={`rating ${eachRating.ratingId}`}
          />
          <p className={ratingStyle}>& up</p>
        </li>
      )
    })
  }

  const updateInputSearch = event => {
    const {updateSearchInput} = props
    updateSearchInput(event.target.value)
  }

  const onEnterSearch = event => {
    const {enterSearch} = props

    if (event.key === 'Enter') {
      enterSearch()
    }
  }

  return (
    <div className="filters-group-container">
      <input
        type="search"
        className="search-input"
        placeholder="Search"
        onChange={updateInputSearch}
        value={searchInput}
        onKeyDown={onEnterSearch}
      />
      <h1 className="filter-heading">Category</h1>
      <ul>{renderCategoryList()}</ul>
      <h1 className="filter-heading">Rating</h1>
      <ul>{renderRatingList()}</ul>
      <button
        className="clear-filters-button"
        type="button"
        onClick={onClickClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
