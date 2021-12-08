{
  selectedItem &&
    selectedItem.map((item) => (
      <div className="cart-item" key={item.id}>
        <img src={`../img/${item.img}`} alt={item.img} />
        <h3>{item.name}</h3>

        <span onClick={handlePlus}>+</span>

        <input type="number" placeholder={count} />

        <span onClick={() => setCount(count - 1)}>-</span>
      </div>
    ));
}

{
  /* <input
              type="number"
              value={count}
              onChange={handleChange}
              id={item.id}
            /> */
}
