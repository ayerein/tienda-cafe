
const AddProduct = ({ catchValues, val, saveProduct }) => {
    return(
        <form>
            <select className="input-base" name="add" required onChange={catchValues} value={val.add}>
                <option value="">Que quieres agregar?</option>
                <option value="bebidas">Bebidas</option>
                <option value="comida">Comida</option>
                <option value="en-casa">En casa</option>
            </select>
            <select className="input-base" name="cat" required onChange={catchValues} value={val.cat}>
                <option value="">Selecciona una categoria</option>
                {
                    val.add === "bebidas" ?
                        <>
                        <option value="cafes-calientes">Cafés calientes</option>
                        <option value="cafes-helados">Cafés helados</option>
                        <option value="frappuccino">Frappuccino</option>
                        <option value="te-caliente">Té caliente</option>
                        <option value="te-helado">Té helado</option>
                        <option value="heladas">Heladas</option>
                        <option value="calientes">Calientes</option>
                        </>
                    :
                    <></>
                }
                {
                    val.add === "comida" ?
                    <>
                        <option value="bakery">Bakery</option>
                        <option value="almuerzos">Sándwichs & preparados</option>
                        <option value="snacks">Snacks</option>
                        </>
                    :
                    <></>
                }
                {
                    val.add === "en-casa" ?
                    <>
                        <option value="cafe-en-granos">Café en granos</option>
                        <option value="te">Té</option>
                        </>
                    :
                    <></>
                }
            </select>
            <input type="text" className="input-base" name="subcat" placeholder="Introduce la subcategoria del producto:" required onChange={catchValues} value={val.subcat} />
            <input type="text" className="input-base" name="name" placeholder="Introduce el nombre del producto:"  autoComplete="off" required onChange={catchValues} value={val.name} />
            <input type="text" className="input-base" name="description" placeholder="Introduce descripción del producto:"  autoComplete="off" required onChange={catchValues} value={val.description} />
            <input type="url" className="input-base" name="img" placeholder="Introduce la url de tu imagen" autoComplete="off" required onChange={catchValues} value={val.img} />
            <button className="btn-add-product" onClick={saveProduct}>Agregar Producto</button>
        </form>
    )
}

export default AddProduct